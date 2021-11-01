import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import Jumbotron from "../components/Jumbotron";

function Confirm() {
  useEffect(() => {
    async function confirmAppointment() {
      setTimeout(() => {
        window.location.assign("/");
      }, 3000);
    }

    confirmAppointment();
  });

  return (
    <div>
      <Jumbotron>
        <h1>Your appointment has been comfirmed!</h1>
        <h2>You will now be redirected to the home page</h2>
      </Jumbotron>
    </div>
  );
}

export default Confirm;
