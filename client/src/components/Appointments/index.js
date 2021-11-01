import React, { useState } from "react";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";
import "./Appointment.css";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";

function Appointment(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  // <Calendar showWeekNumbers onChange={onChange} value={date} />
  // {console.log(date)}
  // {date.toString()}

  // const [booking, setBooking] = useState({
  //   name: "",
  //   phone: "",
  //   email: ""
  // });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  return (
    <div className="container my-1">
      <Link to="/appointment">
        <h2>Book your appointment here!</h2>
      </Link>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label>First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label>Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label>Email:</label>
          <input
            placeholder="Email"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label>Phone:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <Calendar onChange={onChange} value={date} />
        <div className="flex-row flex-end">
          {/* <Link  to="/booked"> */}
          <button type="submit">Submit</button>
          {/* </Link> */}
        </div>
      </form>
    </div>
  );
}

export default Appointment;
