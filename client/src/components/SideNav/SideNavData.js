import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SideNavData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    className: "nav-text",
  },
  {
    title: "Men",
    path: "#",
    icon: <FaIcons.FaMars/>,
    className: "nav-text",
  },
  {
    title: "Women",
    path: "#",
    icon: <FaIcons.FaVenus />,
    className: "nav-text",
  },
  {
      title: "Book Appointment",
      path: "/appointment",
      icon: <FaIcons.FaCalendar />,
      className: "nav-text",
  },

  
]
