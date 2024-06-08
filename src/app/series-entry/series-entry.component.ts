import {Component, Input} from '@angular/core';
import {SeriesEntry} from "../Series";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {UserService} from "../user.service";

@Component({
  selector: 'app-series-entry',
  standalone: true,
  imports: [
    NgClass,
    NgForOf,
    NgIf
  ],
  templateUrl: './series-entry.component.html',
  styleUrl: './series-entry.component.css'
})
export class SeriesEntryComponent {

  @Input()
  seriesEntry?: SeriesEntry;

  expanded: boolean = false;

  constructor(private userService: UserService) {}

  onAddSeries() {
    this.userService.addSeriesToUser(this.seriesEntry?.series.id!)
  }
}
