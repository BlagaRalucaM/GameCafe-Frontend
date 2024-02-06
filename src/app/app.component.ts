import { HttpClient } from '@angular/common/http';
import { Component, Inject, Injectable, OnInit } from '@angular/core';
import User from './models/user';
import { UserService } from './services/user.service';
import { BookingsOverviewComponent } from './bookings-overview/bookings-overview.component';
import { RoomsOverviewComponent } from './rooms-overview/rooms-overview.component';
import { UsersOverviewComponent } from './users-overview/users-overview.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gameCafeApp';

  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }
}
