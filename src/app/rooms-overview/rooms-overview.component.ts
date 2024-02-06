import { Component } from '@angular/core';
import { RoomService } from '../services/room.service';
import Room from '../models/room';

@Component({
  selector: 'app-rooms-overview',
  templateUrl: './rooms-overview.component.html',
  styleUrl: './rooms-overview.component.css'
})
export class RoomsOverviewComponent {
gridColumns = 3;

  constructor(private roomService: RoomService) {}

  rooms: Room[] = [];

  ngOnInit() {
    // lifecycle method
    this.roomService.getRooms().subscribe((data) => {
      this.rooms = data;
      console.log(this.rooms);
    });
  }

}
