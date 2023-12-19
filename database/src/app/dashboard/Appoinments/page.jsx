"use client";

import { FaRegClock } from "react-icons/fa";

import Navbar from "@/app/components/Navbar/page";
import React, { useState } from "react";

import Popup from "reactjs-popup";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const page = () => {


  const [value, onChange] = useState(new Date());
  return (
    <div className="Appoinments-BG">
      <Navbar />
      <div className="calendar">
        <div className="Events-Details">
          <div className="dd-mm-yy">
            <Calendar onChange={onChange} value={value} />
          </div>

          <div className="Events">
            <h3>Events</h3>
            <div class="scrollbar" id="style-4">
              <div class="force-overflow">
                <div className="Events-Scroll">
                  <div className="today-events">
                    <div>
                      <h4>Entrevista com RH</h4>
                      <h5>January, 4, 2023</h5>
                      <h4>
                        <span>
                          <FaRegClock className="clock-icon" /> 8:00 - 9:30 AM
                        </span>
                      </h4>
                    </div>
                  </div>
                  <div className="today-events">
                    <div>
                      <h4>Entrevista com RH</h4>
                      <h5>January, 4, 2023</h5>
                      <h4>
                        <span>
                          <FaRegClock className="clock-icon" /> 8:00 - 9:30 AM
                        </span>
                      </h4>
                    </div>
                  </div>
                  <div className="today-events">
                    <div>
                      <h4>Entrevista com RH</h4>
                      <h5>January, 4, 2023</h5>
                      <h4>
                        <span>
                          <FaRegClock className="clock-icon" /> 8:00 - 9:30 AM
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Appopinment-Details">
          <div className="Create-Event">
            <div className="Date-Day">
              <h3>January</h3>
              <h4>Friday - January 4 - 2022</h4>
            </div>
            <div className="create-btn-">
            <Popup
                trigger={
               <button>Create Event</button>
                }
                position="bottom"
              >
                <div className="Create-Events-Btn">
                <div>
                  <input type="text"  placeholder="Title"/>
                  <input type="text" placeholder="Description" />
                  <input type='date' />
                  <input type='time' />
                  <input type='time' />
                  <select name="" id="">
                  <option value="">Select a Type</option>
                    <option value="">Private</option>
                    <option value="">Meeting</option>
                    <option value="">Lunch</option>
                    <option value="">Work</option>
                  </select>
                  <button>Create</button>
                </div>
                </div>
              </Popup>
            
              <input type="text" placeholder="Search task, event, calendar" />
            </div>
          </div>
          <div className="time-details">
            <div className="time">
              <h4>8:00 AM</h4>
            </div>
            <div>
              <Popup
                trigger={
                  <div>
                    <input type="text" />
                  </div>
                }
                position="center"
              >
                <div className="Time-Message">
                  <textarea name="" id="" cols="147" rows="8"></textarea>
                </div>
              </Popup>
            </div>
          </div>
          <div className="time-details">
            <div className="time">
              <h4>9:00 AM</h4>
            </div>
            <div>
              <Popup
                trigger={
                  <div>
                    <input type="text" />
                  </div>
                }
                position="center"
              >
                <div style={{background:'green'}}  className="Time-Message">
                  <textarea name="" id="" cols="147" rows="8"></textarea>
                </div>
              </Popup>
            </div>
          </div>
          <div className="time-details">
            <div className="time">
              <h4>10:00 AM</h4>
            </div>
            <div>
              <Popup
                trigger={
                  <div>
                    <input type="text" />
                  </div>
                }
                position="center"
              >
                <div style={{background:'#F4ECD6'}} className="Time-Message">
                  <textarea name="" id="" cols="147" rows="8"></textarea>
                </div>
              </Popup>
            </div>
          </div>
          <div className="time-details">
            <div className="time">
              <h4>11:00 AM</h4>
            </div>
            <div>
              <Popup
                trigger={
                  <div>
                    <input type="text" />
                  </div>
                }
                position="center"
              >
                <div style={{background:'#A7CAB1'}} className="Time-Message">
                  <textarea name="" id="" cols="147" rows="8"></textarea>
                </div>
              </Popup>
            </div>
          </div>
          <div className="time-details">
            <div className="time">
              <h4>12:00 AM</h4>
            </div>
            <div>
              <Popup
                trigger={
                  <div>
                    <input type="text" />
                  </div>
                }
                position="center"
              >
                <div style={{background:'#a3b18a'}} className="Time-Message">
                  <textarea name="" id="" cols="147" rows="8"></textarea>
                </div>
              </Popup>
            </div>
          </div>
          <div className="time-details">
            <div className="time">
              <h4>1:00 PM</h4>
            </div>
            <div>
              <Popup
                trigger={
                  <div>
                    <input type="text" />
                  </div>
                }
                position="center"
              >
                <div style={{background:'#81b29a'}} className="Time-Message">
                  <textarea name="" id="" cols="147" rows="8"></textarea>
                </div>
              </Popup>
            </div>
          </div>
          <div className="time-details">
            <div className="time">
              <h4>2:00 PM</h4>
            </div>
            <div>
              <Popup
                trigger={
                  <div>
                    <input type="text" />
                  </div>
                }
                position="center"
              >
                <div style={{background:'5fa8d3'}} className="Time-Message">
                  <textarea name="" id="" cols="147" rows="8"></textarea>
                </div>
              </Popup>
            </div>
          </div>
          <div className="time-details">
            <div className="time">
              <h4>3:00 PM</h4>
            </div>
            <div>
              <Popup
                trigger={
                  <div>
                    <input type="text" />
                  </div>
                }
                position="center"
              >
                <div style={{background:'#ffb700'}} className="Time-Message">
                  <textarea name="" id="" cols="147" rows="8"></textarea>
                </div>
              </Popup>
            </div>
          </div>
          <div className="time-details">
            <div className="time">
              <h4>4:00 PM</h4>
            </div>
            <div>
              <Popup
                trigger={
                  <div>
                    <input type="text" />
                  </div>
                }
                position="center"
              >
                <div style={{background:'#A7CAB1'}} className="Time-Message">
                  <textarea name="" id="" cols="147" rows="8"></textarea>
                </div>
              </Popup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
