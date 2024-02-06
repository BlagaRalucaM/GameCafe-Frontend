import Booking from './booking';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNr: string;
  birthday: string;
  bookings: Booking[];
}

export default User;
