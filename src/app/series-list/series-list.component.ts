import {Component, Input} from '@angular/core';
import {SeriesService} from "../series.service";
import {UserSpaceSeries} from "../Series";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-series-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.css'
})
export class SeriesListComponent {

  series: UserSpaceSeries[] = []

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe(
      ss => this.series = ss
    )
  }
}
