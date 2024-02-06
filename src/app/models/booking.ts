import Room from "./room";
import User from "./user";

interface Booking {
    id: number;
    checkin: string;
    checkout: string;
    paymentMethod: string;
    promoCode: number;
    user: User;
    room: Room;
  }
  
  export default Booking;
  