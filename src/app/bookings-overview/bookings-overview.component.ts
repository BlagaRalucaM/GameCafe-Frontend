import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import Booking from '../models/booking';

@Component({
  selector: 'app-bookings-overview',
  templateUrl: './bookings-overview.component.html',
  styleUrl: './bookings-overview.component.css'
})
export class BookingsOverviewComponent implements OnInit{
gridColumns = 3;

  constructor(private bookingService: BookingService) {}

  bookings: Booking[] = [];

  ngOnInit() {
    // lifecycle method
    this.bookingService.getBookings().subscribe((data) => {
      this.bookings = data;
      console.log(this.bookings);
    });
  }
}
