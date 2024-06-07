import { Routes } from '@angular/router';
import {UserPersonalPageComponent} from "./user-personal-page/user-personal-page.component";
import {SeriesCatalogPageComponent} from "./series-catalog-page/series-catalog-page.component";

export const routes: Routes = [
  {path: '', redirectTo: '/user-personal-page', pathMatch: 'full'},
  {path: 'user-personal-page', component: UserPersonalPageComponent},
  {path: 'series-catalog', component: SeriesCatalogPageComponent},
];
