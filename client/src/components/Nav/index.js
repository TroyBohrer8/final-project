import React, { useState } from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import SideNav from "../SideNav";

function Nav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <SideNav />
      <h1>
        <Link to="/">
          <span role="img" aria-label="Beauty Solon"></span>
     
          Rare Hair Beauty Salon
        
        </Link>
      </h1>
      <div className="menu-icon" onClick={handleClick}></div>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
