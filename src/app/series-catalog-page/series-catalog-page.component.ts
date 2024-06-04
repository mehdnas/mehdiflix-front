import { Component } from '@angular/core';
import {SeriesListComponent} from "../series-list/series-list.component";

@Component({
  selector: 'app-series-catalog-page',
  standalone: true,
  imports: [
    SeriesListComponent
  ],
  templateUrl: './series-catalog-page.component.html',
  styleUrl: './series-catalog-page.component.css'
})
export class SeriesCatalogPageComponent {

}
