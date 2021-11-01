import React, { useState } from "react";
import BookingCalendar from 'react-booking-calendar';
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";


function MyBookingCalendar(props){

  const bookings = [
      new Date(2021,10, 1),
      new Date(2021,10, 2),
      new Date(2021,10, 3),
      new Date(2021,10, 9),
      new Date(2021,10, 10),
      new Date(2021,10,11),
      new Date(2021,10, 12),
    ];

    // const [booking, setBooking] = useState({
    //   name: "",
    //   phone: "",
    //   email: ""
    // });

    // const [times] = useState([
    //   "9AM",
    //   "10AM",
    //   "11AM",
    //   "12PM",
    //   "1PM",
    //   "2PM",
    //   "3PM",
    //   "4PM",
    //   "5PM"
    // ]);

    // const [date, setDate] = useState(new Date());
    // const onChange = date => {
    //   setDate(date);
    // };
    // const selected = ;

  
    return (
      <div className="container my-1">
         <BookingCalendar  clickable bookings={bookings}  />
      </div>
    )


    // const [formState, setFormState] = useState({ email: "", password: "" });
    // const [addUser] = useMutation(ADD_USER);
    // const [date, setDate] = useState(new Date());
}







  export default MyBookingCalendar;