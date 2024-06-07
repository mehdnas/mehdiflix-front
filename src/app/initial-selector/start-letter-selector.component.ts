import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {SeriesService} from "../series.service";

@Component({
  selector: 'app-start-letter-selector',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './start-letter-selector.component.html',
  styleUrl: './start-letter-selector.component.css'
})

export class StartLetterSelectorComponent {
  SELECTORS: string[] = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '0-9'
  ];

  constructor(private seriesService: SeriesService) {}

  onSelectorClick(letter: string) {
    this.seriesService.onSelectNewLetter(letter);
  }
}
