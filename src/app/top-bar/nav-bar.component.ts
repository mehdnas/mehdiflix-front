import {Component, Input} from '@angular/core';
import { NgbPaginationModule, NgbAlertModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [NgbPaginationModule, NgbAlertModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  @Input()
  username: String = "";

}
