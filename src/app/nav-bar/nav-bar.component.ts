import {Component, Input} from '@angular/core';
import { NgbPaginationModule, NgbAlertModule } from "@ng-bootstrap/ng-bootstrap";
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgbPaginationModule, NgbAlertModule, NgIf, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  @Input()
  username?: string;

}
