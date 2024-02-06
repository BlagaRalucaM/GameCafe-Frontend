import { Component, OnInit } from '@angular/core';
import User from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-overview',
  templateUrl: './users-overview.component.html',
  styleUrls: ['./users-overview.component.css'],
})
export class UsersOverviewComponent implements OnInit {
  gridColumns = 3;

  constructor(private userService: UserService) {}

  users: User[] = [];

  ngOnInit() {
    // lifecycle method
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });

    // this.userService.getUsers().subscribe((data) => (this.users = data));
  }
}
