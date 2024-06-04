import {Component, Input} from '@angular/core';
import {SeriesService} from "../series.service";
import {UserSpaceSeries} from "../Series";

@Component({
  selector: 'app-series-list',
  standalone: true,
  imports: [],
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.css'
})
export class SeriesListComponent {

  series: UserSpaceSeries[] = []

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.seriesService.subscribeToSeries(
      ss => this.series = ss
    )
  }
}
