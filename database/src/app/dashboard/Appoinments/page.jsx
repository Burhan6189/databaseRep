"use client";

import { FaRegClock } from "react-icons/fa";

import Navbar from "@/app/components/Navbar/page";
import React, { useEffect, useState } from "react";

import Popup from "reactjs-popup";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const page = () => {

  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Mydate, setMydate] = useState("");
  const [StartTime, setStartTime] = useState("");
  const [EndTime, setEndTime] = useState("");
  const [Type, setType] = useState("");


  const [wholedata, setwholedata] = useState([]);
  const [fdata, setfdata] = useState([]);


  const savefun = async () => {

    if (Title != "" || Description != "" || Mydate != "" || StartTime != "" || EndTime != "" || Type != "") {


      const savedata = await fetch("/api/appointment", {
        method: "POST",
        body: JSON.stringify({ Title, Description, Mydate, StartTime, EndTime, Type })
      });
      if (savedata) {
        alert("data is added")
      }
      else {
        alert("data is not added")
      }
    }
    else {

      alert("All fields are required");
    }

  }



  const getdata = async () => {

    const data = await fetch("/api/appointment");
    const jsondata = await data.json();

    setwholedata(jsondata);

  }


  const filtered = (e) => {

    setfdata(

      wholedata.filter((f) => f.Title.includes(e.target.value) || f.Mydate.includes(e.target.value)
        || f.Type.includes(e.target.value))

    )

  }




  useEffect(() => {
    getdata()
  }, []);

  useEffect(() => {
    setfdata([...wholedata])
  }, [wholedata]);





  const [DateValue, SetDateValue] = useState(new Date());

  var dayOfWeekNumber = DateValue.getDay();
  var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var dayName = dayNames[dayOfWeekNumber];   // for day name

  var monthNumber = DateValue.getMonth();
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var monthName = monthNames[monthNumber];  // for month name

  var datenumber = DateValue.getDate();  // for date number

  var yearnumber = DateValue.getFullYear(); // to get year 
  var monthNo = monthNumber + 1;

  if(datenumber<=9){
    var filterdate = yearnumber + "-" + monthNo + "-" + 0+datenumber;
  }
  else{
    var filterdate = yearnumber + "-" + monthNo + "-" + datenumber;
  }



  //  THIS ARRAY IS TO FILTER ARRAY BASED ON DATE IN ABOVE FORMAT

  const arraydata = (wholedata.filter((f) => f.Mydate.includes(filterdate)))

useEffect(()=>{
  arraydata;
},[wholedata]);

  return (
    <div className="Appoinments-BG">
      <Navbar />

      {/* this is calender */}
      <div className="calendar">
        <div className="Events-Details">
          <div className="dd-mm-yy">
            <Calendar onChange={SetDateValue} value={DateValue} dateFormat="dd/mm/yy" />
          </div>



          {/* these are events below calender */}




          <div className="Events">
            <h3>Events</h3>
            <div class="scrollbar" id="style-4">
              <div class="force-overflow">
                <div className="Events-Scroll">

                  {
                    [...fdata].reverse().map((items) => (

                      <div className="today-events">
                        <div>
                          <h4>{items.Title}</h4>
                          <h5>{items.Mydate}</h5>
                          <h4>
                            <span>
                              <FaRegClock className="clock-icon" />{items.StartTime} - {items.EndTime}
                            </span>
                          </h4>
                        </div>
                      </div>
                    ))
                  }

                </div>
              </div>
            </div>
          </div>


          {/* events ends here */}


        </div>
        <div className="Appopinment-Details">
          <div className="Create-Event">

            {/* header showing date  */}

            <div className="Date-Day">
              <h3>{monthName}</h3>
              <h4>{dayName + "     -    " + monthName + "    " + datenumber + " - " + yearnumber}</h4>
            </div>




            {/* popup for data submit form */}


            <div className="create-btn-">
              <Popup
                trigger={
                  <button>Create Event</button>
                }
                position="bottom"
              >
                <div className="Create-Events-Btn">
                  <div>
                    <input type="text" placeholder="Title" value={Title} onChange={(e) => { setTitle(e.target.value) }} />
                    <input type="text" placeholder="Description" value={Description} onChange={(e) => { setDescription(e.target.value) }} />
                    <input type='date' dateFormat="dd/mm/yy" value={Mydate} onChange={(e) => { setMydate(e.target.value) }} />
                    <input type='time' name="fromtime" value={StartTime} onChange={(e) => { setStartTime(e.target.value) }} />
                    <input type='time' name="totime" value={EndTime} onChange={(e) => { setEndTime(e.target.value) }} />
                    <select name="type" id="" value={Type} onChange={(e) => { setType(e.target.value) }}>
                      <option >Select a Type</option>
                      <option >Private</option>
                      <option >Meeting</option>
                      <option >Lunch</option>
                      <option >Work</option>
                    </select>

                    <button onClick={savefun}>Create</button>

                  </div>
                </div>
              </Popup>


              {/* these is search bar */}


              <input type="text" placeholder="Search task, event, calendar" onChange={filtered} />
            </div>
          </div>



          {/* these are timings rows */}

          <div className="time-details">
            <div className="time">
              <h4>8:00 AM</h4>
            </div>
            <div>

              <div>
                {

                  arraydata.map((items) => (
                    (items.StartTime.includes("08:")) &&
                    <input type="text" value={items.Title} />
                  ))
                }

              </div>

            </div>
          </div>



          <div className="time-details">
            <div className="time">
              <h4>9:00 AM</h4>
            </div>
            <div>

              <div>
                {

                  arraydata.map((items) => (
                    (items.StartTime.includes("09:")) &&
                    <input type="text" value={items.Title} />
                  ))
                }
              </div>

            </div>
          </div>


          <div className="time-details">
            <div className="time">
              <h4>10:00 AM</h4>
            </div>
            <div>

              <div>
                {

                  arraydata.map((items) => (
                    (items.StartTime.includes("10:")) &&
                    <input type="text" value={items.Title} />
                  ))
                }
              </div>

            </div>
          </div>


          <div className="time-details">
            <div className="time">
              <h4>11:00 AM</h4>
            </div>
            <div>

              <div>
                {

                  arraydata.map((items) => (
                    (items.StartTime.includes("11:")) &&
                    <input type="text" value={items.Title} />
                  ))
                }
              </div>

            </div>
          </div>



          <div className="time-details">
            <div className="time">
              <h4>12:00 PM</h4>
            </div>
            <div>

              <div>
                {

                  arraydata.map((items) => (
                    (items.StartTime.includes("12:")) &&
                    <input type="text" value={items.Title} />
                  ))
                }
              </div>

            </div>
          </div>



          <div className="time-details">
            <div className="time">
              <h4>1:00 PM</h4>
            </div>
            <div>

              <div>
                {

                  arraydata.map((items) => (
                    (items.StartTime.includes("13:")) &&
                    <input type="text" value={items.Title} />
                  ))
                }
              </div>

            </div>
          </div>



          <div className="time-details">
            <div className="time">
              <h4>2:00 PM</h4>
            </div>
            <div>

              <div>
                {

                  arraydata.map((items) => (
                    (items.StartTime.includes("14:")) &&
                    <input type="text" value={items.Title} />
                  ))
                }
              </div>

            </div>
          </div>




          <div className="time-details">
            <div className="time">
              <h4>3:00 PM</h4>
            </div>
            <div>

              <div>
                {

                  arraydata.map((items) => (
                    (items.StartTime.includes("15:")) &&
                    <input type="text" value={items.Title} />
                  ))
                }
              </div>

            </div>
          </div>




          <div className="time-details">
            <div className="time">
              <h4>4:00 PM</h4>
            </div>
            <div>
              <div>
                {

                  arraydata.map((items) => (
                    (items.StartTime.includes("16:")) &&
                    <input type="text" value={items.Title} />
                  ))
                }
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default page;
