import { Component } from '@angular/core';
import {SeriesListComponent} from "../series-list/series-list.component";
import {NavBarComponent} from "../nav-bar/nav-bar.component";
import {User} from "../User";
import {UserService} from "../user.service";
import {SeriesService} from "../series.service";
import {StartLetterSelectorComponent} from "../initial-selector/start-letter-selector.component";
import {SeriesSearchComponent} from "../series-search/series-search.component";

@Component({
  selector: 'app-series-catalog-page',
  standalone: true,
  imports: [
    SeriesListComponent,
    NavBarComponent,
    StartLetterSelectorComponent,
    SeriesSearchComponent
  ],
  templateUrl: './series-catalog-page.component.html',
  styleUrl: './series-catalog-page.component.css'
})
export class SeriesCatalogPageComponent {

  user?: User;

  constructor(
    private userService: UserService,
    private seriesService: SeriesService
  ) {}

  ngOnInit(): void {
    this.userService.getLoggedInUser().subscribe(
      u => this.user = u
    )
  }
}
