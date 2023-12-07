"use client";

import { FaRegClock } from "react-icons/fa";

import Navbar from "@/app/components/Navbar/page";
import React, { useState } from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";


const page = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="Appoinments-BG">
      <Navbar />
      <div className="calendar">
        <div className="dd-mm-yy">
          <Calendar onChange={onChange} value={value} />
        </div>
        <div className="Events">
          <h3>Events</h3>
          <div className="today-events">
            <div>
              <h4>Entrevista com RH</h4>
              <h5>January, 4, 2023</h5>
              <h4> <span> <FaRegClock className="clock-icon"/> 8:00 - 9:30 AM </span></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
