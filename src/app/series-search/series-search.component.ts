import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {SeriesService} from "../series.service";

@Component({
  selector: 'app-series-search',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './series-search.component.html',
  styleUrl: './series-search.component.css'
})
export class SeriesSearchComponent {

  title: string = ''

  constructor(private seriesService: SeriesService) { }

  onSearch() {
    this.seriesService.onSearch(this.title)
  }
}
