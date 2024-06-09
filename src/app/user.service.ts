import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {SubscriptionType, User} from "./User";
import {BehaviorSubject, catchError, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'http://localhost:8080/users'

  currentUsername?: string;
  userSubject = new BehaviorSubject<User | undefined>(undefined);
  private user?: User

  constructor(
    private http: HttpClient,
  ) {
    this.userSubject.asObservable().subscribe(
      u => this.user = u
    )
  }

  getUser(username: string): Observable<User | undefined> {
    if (this.currentUsername != username) {
      this.retrieveUserFromServer(username)
      this.currentUsername = username;
    }
    return this.userSubject.asObservable()
  }

  private retrieveUserFromServer(username: string) {
    let options = {params: new HttpParams().set('username', username)}
    this.http.get<User>(this.usersUrl, options).subscribe(
      u => this.userSubject.next(u)
    )
  }

  getLoggedInUser(): Observable<User | undefined> {
    return this.userSubject.asObservable()
  }

  addSeriesToUser(seriesId: number) {
    const url = `${this.usersUrl}/${this.user?.id}/addedSeries/${seriesId}`
    this.http.put(url, {}).subscribe(
      b => this.retrieveUserFromServer(this.user?.username!)
    )
  }
}
