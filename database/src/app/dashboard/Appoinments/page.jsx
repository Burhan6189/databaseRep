"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const page = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div>
        
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default page;
