import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable, Observer, Subscription} from "rxjs";
import {UserSpaceSeries} from "./Series";

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private seriesUrl = 'http://localhost:8080/series'

  startChar: string = 'A'

  private seriesSubject = new BehaviorSubject<UserSpaceSeries[]>([])

  constructor(private http: HttpClient) { }

  onSelectNewLetter(start: string) {
    this.startChar = start
    let options = {params: new HttpParams().set('titleBeginning', start)}
    return this.http.get<UserSpaceSeries[]>(this.seriesUrl, options).subscribe(
      ss => this.seriesSubject.next(ss)
    )
  }

  subscribeToSeries(
    observerOrNext? : Partial<Observer<UserSpaceSeries[]>> | ((value: UserSpaceSeries[]) => void)
  ): Subscription {
    return this.seriesSubject.subscribe(observerOrNext)
  }
}
