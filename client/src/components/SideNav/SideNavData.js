import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";


export const SideNavData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    className: "nav-text",
  },
  {
    title: "Book Appointment",
    path: "/appointment",
    icon: <FaIcons.FaCalendar />,
    className: "nav-text",
  },
  {
    title: "Order History",
    path: "/orderHistory",
    icon: <FaIcons.FaCalendar />,
    className: "nav-text",
  },
];
