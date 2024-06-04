import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {SubscriptionType, User} from "./User";
import {BehaviorSubject, catchError, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'http://localhost:8080/users'
  constructor(
    private http: HttpClient,
  ) { }

  getUser(username: string): Observable<User> {
    let options = {params: new HttpParams().set('username', username)}
    return this.http.get<User>(this.usersUrl, options)
  }
}
