import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {UserService} from "./user.service";
import {User} from "./User";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  private user?: User;
  private username: string = "pepe"

  constructor(private userService: UserService) { }

  getUser(username: string) {
    this.userService.getUser(this.username)
  }

}
