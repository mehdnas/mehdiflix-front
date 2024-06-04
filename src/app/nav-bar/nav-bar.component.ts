import {Component, Input} from '@angular/core';
import { NgbPaginationModule, NgbAlertModule } from "@ng-bootstrap/ng-bootstrap";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgbPaginationModule, NgbAlertModule, NgIf],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  @Input()
  username?: string;

}
