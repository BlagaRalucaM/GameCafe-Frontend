import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { ResponsiveToolbarComponent } from './responsive-toolbar/responsive-toolbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UsersOverviewComponent } from './users-overview/users-overview.component';
import { BookingsOverviewComponent } from './bookings-overview/bookings-overview.component';
import { RoomsOverviewComponent } from './rooms-overview/rooms-overview.component';
import { BookingService } from './services/booking.service';
import { RoomService } from './services/room.service';

@NgModule({
  declarations: [AppComponent, ResponsiveToolbarComponent, UsersOverviewComponent, BookingsOverviewComponent, RoomsOverviewComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    FlexLayoutModule,
  ],
  providers: [UserService,BookingService,RoomService],
  bootstrap: [AppComponent],
})
export class AppModule {}
