import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import {UserSeriesSectionComponent} from "../user-series-section/user-series-section.component";
import {UserService} from "../user.service";
import {User} from "../User";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-user-personal-page',
  standalone: true,
  imports: [
    NavBarComponent,
    UserSeriesSectionComponent,
    NgIf
  ],
  templateUrl: './user-personal-page.component.html',
  styleUrl: './user-personal-page.component.css'
})
export class UserPersonalPageComponent {

  user?: User

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser('pepe').subscribe(
      u => this.user = u
    )
  }
}
