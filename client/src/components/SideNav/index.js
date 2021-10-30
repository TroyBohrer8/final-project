import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SideNavData } from "./SideNavData";
import "./SideNav.css";
import { IconContext } from "react-icons";

function SideNav() {
  const [sidebar, setSidebar] = useState(false);

  const showSideBar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="sidenav">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSideBar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSideBar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SideNavData.map((item, index) => {
            return (
              <li key={index} className={item.className}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default SideNav;