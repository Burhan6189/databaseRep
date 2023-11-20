"use client";
import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";


const today = new Date();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const date = today.getDate();
const currentDate = date + "/" + month + "/" + year;




const PatientDashboard = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Number, setNumber] = useState("");
  const [Dateofbirth, setDateofbirth] = useState("");
  const [Bloodgroup, setBloodgroup] = useState("");
  const [Sex, setSex] = useState("");
  const [Memberstatus, setMemberstatus] = useState("");
  const [Dateofregistration, setDateofregistration] = useState("");
  const [Attendingdoctor, setAttendingdoctor] = useState("");
  const [Clientid, setClientid] = useState("");
  const [Checkuptime, setCheckuptime] = useState("");
  const [Date, setDate] = useState("");


  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState("");


  // fetched data's useStates

  const [TreatmentData, setTreatmentData] = useState([]);

  const treatmentdata = async () => {

    const fetchtreatment = await fetch("http://localhost:3000/api/treatmentdetails");
    const jsontreatment = await fetchtreatment.json();
    setTreatmentData(jsontreatment);
  }
  useEffect(() => { treatmentdata(); }, []);



  const myfun = async () => {
    if (
      Name != "" &&
      Email != "" &&
      Number != "" &&
      Dateofbirth != "" &&
      Bloodgroup != "" &&
      Sex != "" &&
      Memberstatus != "" &&
      Dateofregistration != "" &&
      Attendingdoctor != "" &&
      Clientid != "" &&
      Checkuptime != "" &&
      Date != ""
    ) {
      const data = await fetch("http://localhost:3000/api/patientdetails", {
        method: "POST",
        body: JSON.stringify({
          Name,
          Email,
          Number,
          Dateofbirth,
          Bloodgroup,
          Sex,
          Memberstatus,
          Dateofregistration,
          Attendingdoctor,
          Clientid,
          Checkuptime,
          Date,


        }),
      });
      alert("success");
    } else {
      alert("all fields are required");
    }
  };


  const backtodata = async () => {

    if (Description != "" && Price != "" && Clientid != "") {


      const getdata = await fetch("http://localhost:3000/api/treatmentdetails", {
        method: "POST",
        body: JSON.stringify({ Description, Price, Clientid })
      });
      alert("success")
      window.location.href = "http://localhost:3000/PatientDashboard";


    } else {
      alert("can't be empty")
    }


  }

  const inputArr = [
    {
      type: "text",
      id: 1,
      value: "",
    },
  ];

  // this is to add popup data with client id from patient details

  const [arr, setArr] = useState([]);

  const addInput = async () => {

    if (Description != "" && Price != "" && Clientid != "") {


      const getdata = await fetch("http://localhost:3000/api/treatmentdetails", {
        method: "POST",
        body: JSON.stringify({ Description, Price, Clientid })
      });

      setArr((s) => {
        return [
          ...s,
          {
            type: "text",
            value: "",
          },
        ];
      });
      alert("success");

    } else {
      alert("cant be empty");
    }

  };

  const handleChange = (e) => {
    e.preventDefault();

    const index = e.target.id;
    setArr((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };

  return (
    <>
      <div className="Patient-Details-BG">
        <img className="Patient-Details-Logo" src="/img/Logo.png" alt="" />
        <div className="Main-Div">
          <h3>PATIENT PROFILE SECTION</h3>
          <div className="Input-Flex">
            <div className="row-1">
              <div className="Patient-Details-Inputs">
                <input
                  type="name"
                  name="name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  id="name"
                  className="input-field-1"
                  placeholder="name"
                  autoComplete="off"
                />
                <label for="name" className="input-label">
                  Name
                </label>
              </div>
              <div className="Patient-Details-Inputs">
                <input
                  type="email"
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="email"
                  className="input-field-1"
                  placeholder="email"
                  autoComplete="off"
                />
                <label for="email" className="input-label">
                  Email
                </label>
              </div>
              <div className="Patient-Details-Inputs">
                <input
                  type="text"
                  name="number"
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                  id="number"
                  className="input-field-1"
                  placeholder="number"
                  autoComplete="off"
                />
                <label for="number" className="input-label">
                  Number
                </label>
              </div>
              <div className="Patient-Details-Inputs">
                <input
                  type="text"
                  name="date0fbirth"
                  onChange={(e) => {
                    setDateofbirth(e.target.value);
                  }}
                  id="date0fbirth"
                  className="input-field-1"
                  placeholder="date0fbirth"
                  autoComplete="off"
                />
                <label for="date0fbirth" className="input-label">
                  Date of Birth
                </label>
              </div>
            </div>
            <div className="row-2">
              <div className="Patient-Details-Inputs">
                <input
                  type="sex"
                  name="sex"
                  onChange={(e) => {
                    setSex(e.target.value);
                  }}
                  id="sex"
                  className="input-field-1"
                  placeholder="sex"
                  autoComplete="off"
                />
                <label for="sex" className="input-label">
                  Sex
                </label>
              </div>
              <div className="Patient-Details-Inputs">
                <input
                  type="bloodgroup"
                  name="bloodgroup"
                  onChange={(e) => {
                    setBloodgroup(e.target.value);
                  }}
                  id="bloodgroup"
                  className="input-field-1"
                  placeholder="bloodgroup"
                  autoComplete="off"
                />
                <label for="bloodgroup" className="input-label">
                  Blood Group
                </label>
              </div>
              <div className="Patient-Details-Inputs">
                <input
                  type="text"
                  name="memberstatus"
                  onChange={(e) => {
                    setMemberstatus(e.target.value);
                  }}
                  id="memberstatus"
                  className="input-field-1"
                  placeholder="memberstatus"
                  autoComplete="off"
                />
                <label for="memberstatus" className="input-label">
                  Member Status
                </label>
              </div>
              <div className="Patient-Details-Inputs">
                <input
                  type="text"
                  name="dateofregistration"
                  onChange={(e) => {
                    setDateofregistration(e.target.value);
                  }}
                  id="dateofregistration"
                  className="input-field-1"
                  placeholder="dateofregistration"
                  autoComplete="off"
                />
                <label for="dateofregistration" className="input-label">
                  Date of Registration
                </label>
              </div>
            </div>
            <div className="row-3">
              <div className="Patient-Details-Inputs">
                <input
                  type="attendingdoctor"
                  name="attendingdoctor"
                  onChange={(e) => {
                    setAttendingdoctor(e.target.value);
                  }}
                  id="attendingdoctor"
                  className="input-field-1"
                  placeholder="attendingdoctor"
                  autoComplete="off"
                />
                <label for="attendingdoctor" className="input-label">
                  Attending Doctor
                </label>
              </div>
              <div className="Patient-Details-Inputs">
                <input
                  type="clientid"
                  name="clientid"
                  onChange={(e) => {
                    setClientid(e.target.value);
                  }}
                  id="clientid"
                  className="input-field-1"
                  placeholder="clientid"
                  autoComplete="off"
                />
                <label for="clientid" className="input-label">
                  Client ID
                </label>
              </div>
              <div className="Patient-Details-Inputs">
                <input
                  type="text"
                  name="checkuptime"
                  onChange={(e) => {
                    setCheckuptime(e.target.value);
                  }}
                  id="checkuptime"
                  className="input-field-1"
                  placeholder="checkuptime"
                  autoComplete="off"
                />
                <label for="checkuptime" className="input-label">
                  Check up time
                </label>
              </div>
              <div className="Patient-Details-Inputs">
                <input
                  type="text"
                  name="date"
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  id="date"
                  className="input-field-1"
                  placeholder="date"
                  autoComplete="off"
                />
                <label for="date" className="input-label">
                  Date
                </label>
              </div>
            </div>
          </div>
          <button>
            {" "}
            <a href="/TreatmentPlan">Treatment Plan</a>
          </button>
          <div className="Details-Inputs">
            <div className="Detail-Heading-Text">
              <h3>Date</h3>
              <h3>Description</h3>
              <h3>Total</h3>
            </div>
            <div>
              <input className="side-input" name="Date" value={currentDate} />
              {
                TreatmentData.map((items) => (

                  <input className="side-input" type="text" name="Total" value={items.Description} />

                ))

              }
              {
                TreatmentData.map((items) => (

                  <input className="side-input" type="text" name="Price" value={items.Price} />

                ))
              }

            </div>
          </div>

          <Popup
            trigger={<button className="Plus-Btn"> +</button>}
            position="center"
          >
            <div className="Tooth-Description-Total">
              <div className="Details-Inputs">
                <div className="Detail-Heading-Text">
                  <h3>Tooth</h3>
                  <h3>Description</h3>
                  <h3>Price</h3>
                </div>
                <div className="side-input-main-flex">
                  <div className="side-input-flex">
                    <div>
                      <input maxlength="2" name="upperL" className="side-input" />
                      <input maxlength="2" name="upperR" className="side-input" />
                    </div>
                    <div>
                      <input maxlength="2" name="lowwerL" className="side-input" />
                      <input maxlength="2" name="lowwerR" className="side-input" />
                    </div>
                  </div>
                  <textarea className="center-input" name="description" onChange={(e) => { setDescription(e.target.value) }} type="text" rows={3} />
                  <input className="side-input-price" name="price" onChange={(e) => { setPrice(e.target.value) }} type="number" />
                </div>

                {/* This is popup array for adding new textboxes  below*/}

                {arr.map((item, i) => {
                  return (

                    <div className="side-input-main-flex">
                      <div className="side-input-flex">
                        <div>
                          <input maxlength="2" className="side-input" name="upperL" type={item.type}
                            id={i} />
                          <input maxlength="2" className="side-input" name="upperR" type={item.type}
                            id={i} />
                        </div>
                        <div>
                          <input maxlength="2" className="side-input" name="lowwerL" type={item.type}
                            id={i} />
                          <input maxlength="2" className="side-input" name="lowwerR" type={item.type}
                            id={i} />
                        </div>
                      </div>
                      <textarea className="center-input" onChange={(e) => { setDescription(e.target.value) }} name="description" rows={3} type={item.type}
                        id={i} />
                      <input className="side-input-price" onChange={(e) => { setPrice(e.target.value) }} name="price" type="number"
                        id={i} />
                    </div>

                  );
                })}
              </div>
              <div>
                <button onClick={addInput} className="Add-Btn">
                  +
                </button>
              </div>
              <button onClick={backtodata} className="Submit-Btn">
                Submit
              </button>
            </div>
            {/* <input id="partitioned" type="text" maxlength="4" /> */}
          </Popup>
          <div>
            <button onClick={myfun} className="Submit-Btn">
              Submit
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default PatientDashboard;
