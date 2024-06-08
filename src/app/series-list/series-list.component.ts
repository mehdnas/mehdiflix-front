import {Component, Input} from '@angular/core';
import {SeriesService} from "../series.service";
import {SeriesEntry, UserSpaceSeries} from "../Series";
import {NgClass, NgForOf} from "@angular/common";
import {SeriesEntryComponent} from "../series-entry/series-entry.component";

@Component({
  selector: 'app-series-list',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    SeriesEntryComponent
  ],
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.css'
})
export class SeriesListComponent {

  series: SeriesEntry[] = []
  selected: boolean = false

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe(
      ss => this.series = ss
    )
  }
}
