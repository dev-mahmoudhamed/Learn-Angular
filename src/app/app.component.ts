import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { User, UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './user/user.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Learn-Angular';
  users = DUMMY_USERS;
  selectedUserName?: string;

  getUserData(id?: string) {
    let userName = this.users.find(user => user.id === id)?.name;
    this.selectedUserName = userName;
  }

}
