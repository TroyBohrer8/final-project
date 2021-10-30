import React, { useState } from "react";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import "react-calendar/dist/Calendar.css";

function Appointment() {
  const [formState, setFormState] = useState({ email: "" });
  const [value, onChange] = useState(new Date());
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  return (
    <div className="container my-1">
      <h2>Book your appointment here!</h2>
      <form>
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
            placeholder="(xxx)-xxx-xxxx"
            name="phone"
            type="phone"
            id="phone"
            onChange={handleChange}
          />
        </div>
        <Calendar onChange={onChange} value={value} />
        <div className="flex-row flex-end">
            <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Appointment;
