import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable, Observer, Subscription} from "rxjs";
import {SeriesEntry, UserSpaceSeries} from "./Series";

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private seriesUrl = 'http://localhost:8080/series';

  startChar?: string;
  searchTitle?: string;

  private seriesSubject = new BehaviorSubject<SeriesEntry[]>([])

  constructor(private http: HttpClient) { }

  private toSeriesEntries(uss: UserSpaceSeries[]): SeriesEntry[] {
    return uss.sort(
      (s1, s2) => {
        if (s1.title > s2.title) return 1;
        if (s1.title < s2.title) return -1;
        return 0;
      }
    ).map(
      (v, i, a) => new SeriesEntry(v, v.title == this.searchTitle)
    )
  }

  onSelectNewLetter(start: string) {
    this.startChar = start;
    this.searchTitle = undefined
    let options = {params: new HttpParams().set('titleBeginning', start)}
    this.http.get<UserSpaceSeries[]>(this.seriesUrl, options).subscribe(
      ss => this.seriesSubject.next(this.toSeriesEntries(ss))
    )
  }

  onSearch(searchTitle: string) {
    this.searchTitle = searchTitle
    this.startChar = undefined
    let options = {params: new HttpParams().set('titleBeginning', searchTitle[0])}
    this.http.get<UserSpaceSeries[]>(this.seriesUrl, options).subscribe(
      ss => this.seriesSubject.next(this.toSeriesEntries(ss))
    )
  }

  getSeries(): Observable<SeriesEntry[]> {
    if (!this.startChar || !this.searchTitle) {
      this.onSelectNewLetter('A')
    }
    return this.seriesSubject.asObservable()
  }
}
