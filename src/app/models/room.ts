import Booking from './booking';
import User from './user';

interface Room {
  id: number;
  roomNumber: number;
  gameType: string;
  bookings: Booking[];
  users: User[];
}

export default Room;