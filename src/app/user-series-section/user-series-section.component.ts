import {Component, Input} from '@angular/core';
import {UserSpaceSeries} from "../Series";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-user-series-section',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './user-series-section.component.html',
  styleUrl: './user-series-section.component.css'
})
export class UserSeriesSectionComponent {

  @Input()
  title: string = "";

  @Input()
  series?: UserSpaceSeries[];

}
