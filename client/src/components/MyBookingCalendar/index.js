
import React, { useState } from "react";
import BookingCalendar from 'react-booking-calendar';
import { Link } from "react-router-dom";
import { QUERY_USER } from '../../utils/queries';
import { useQuery } from '@apollo/client';


const bookings = [
    new Date(2021,10, 1),
    new Date(2021,10, 2),
    new Date(2021,10, 3),
    new Date(2021,10, 9),
    new Date(2021,10, 10),
    new Date(2021,10, 11),
    new Date(2021,10, 12),
  ];



function MyBookingCalendar() {
  const [formState, setFormState] = useState({ email: "" });
  
  

  const { data } = useQuery(QUERY_USER);
  console.log(data)
  let user;

  if (data) {
    user = data.user;
  }
  console.log(user)


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(user)
    // const bookingResponse = await addBooking({
    //   variables: {
    //     phone: formState.phone,
    //   },
    // });
  
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(event.target);
  };

  const clickable = useState(new Date());

  console.log(clickable);
  return (
    <div className="container my-1">
      <h2>Book your appointment here!</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label>Time:</label>
          <input
            placeholder="time"
            name="time"
            type="time"
            id="time"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label>Phone:</label>
          <input
            placeholder="(xxx)-xxx-xxxx"
            name="phone"
            type="phone"
            id="phone"
            onChange={handleChange}
          />
        </div>
        <BookingCalendar bookings={bookings} clickable   />
        <div>
          <br></br>
          <Link to="/confirm">
            <button class="calendar-button" type="submit">
              Book Now!
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};


  export default MyBookingCalendar;

