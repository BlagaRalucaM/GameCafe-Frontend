import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Room from '../models/room';

@Injectable()
export class RoomService {
  constructor(private http: HttpClient) {}

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>('http://localhost:8080/api/v1/rooms');
  }
}