import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Booking from '../models/booking';

@Injectable()
export class BookingService {
  constructor(private http: HttpClient) {}

  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>('http://localhost:8080/api/v1/bookings');
  }
}