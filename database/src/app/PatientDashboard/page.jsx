"use client";
import React, { useState } from "react";
import Popup from "reactjs-popup";

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

  const inputArr = [
    {
      type: "text",
      id: 1,
      value: "",
    },
  ];

  const [arr, setArr] = useState([]);

  const addInput = () => {
    setArr((s) => {
      return [
        ...s,
        {
          type: "text",
          value: "",
        },
      ];
    });
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
        <div className="Header">
          <div>
            <img className="Patient-Details-Logo" src="/img/image.png" alt="" />
          </div>
          <div>
            <img
              className="Patient-Details-Logo"
              src="http://www.fhgroupoc.com/svg/fhlogog.svg"
              alt=""
            />
          </div>
          <div className="User-Login">
            <img
              className="User-Login-Pic"
              src="/img/image 2.png"
              alt=""
            />
            <div>
            <h3>Muzzamil Rafique</h3>
            <p>Desigination</p>
            </div>
          </div>
        </div>
        <div className="Main-Div">
          <h3>PATIENT PROFILE SECTION</h3>
          <div className="Input-Flex">
            <div className="row-1">
              <div className="Patient-Details-Inputs">
                <input
                  type="clientid"
                  name="clientid"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  id="clientid"
                  className="input-field-1"
                  placeholder="clientid"
                  autoComplete="off"
                />
                <label for="clientid" className="input-label">
                  Client ID :
                </label>
              </div>
              <div className="Patient-Details-Inputs">
                <input
                  type="name"
                  name="name"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="name"
                  className="input-field-1"
                  placeholder="name"
                  autoComplete="off"
                />
                <label for="name" className="input-label">
                  Name :
                </label>
              </div>
              <div className="Patient-Details-Inputs">
                <input
                  type="text"
                  name="email"
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                  id="email"
                  className="input-field-1"
                  placeholder="email"
                  autoComplete="off"
                />
                <label for="email" className="input-label">
                  Email :
                </label>
              </div>
              <div className="Patient-Details-Inputs">
                <input
                  type="text"
                  name="number"
                  onChange={(e) => {
                    setDateofbirth(e.target.value);
                  }}
                  id="number"
                  className="input-field-1"
                  placeholder="number"
                  autoComplete="off"
                />
                <label for="number" className="input-label">
                  Number :
                </label>
              </div>
              <div className="Patient-Details-Inputs">
                <input
                  type="text"
                  name="dateofbirth"
                  onChange={(e) => {
                    setDateofbirth(e.target.value);
                  }}
                  id="dateofbirth"
                  className="input-field-1"
                  placeholder="dateofbirth"
                  autoComplete="off"
                />
                <label for="dateofbirth" className="input-label">
                  Date of Birth :
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
                  Sex :
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
                  Blood Group :
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
                  Member Status :
                </label>
              </div>
              <div className="Patient-Details-Inputs">
                <input
                  type="text"
                  name="date"
                  onChange={(e) => {
                    setD(e.target.value);
                  }}
                  id="date"
                  className="input-field-1"
                  placeholder="date"
                  autoComplete="off"
                />
                <label for="date" className="input-label">
                  Date :
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
                  Date of Registration :
                </label>
              </div>
            </div>
          </div>
          <div className="Details-Inputs">
            <div className="fake-input-flex"> 
              <div className="fake-input" >
              <h4>Date</h4>
              </div>
              <div className="fake-input-long" >
              <h4>Treatment</h4>
              </div>
              <div className="fake-input" >
              <h4>Dentist</h4>
              </div>
              <div className="fake-input" >
              <h4>Total Price</h4>
              </div>
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
                      <input maxlength="2" className="side-input" />
                      <input maxlength="2" className="side-input" />
                    </div>
                    <div>
                      <input maxlength="2" className="side-input" />
                      <input maxlength="2" className="side-input" />
                    </div>
                  </div>
                  <textarea className="center-input" type="text" rows={3} />
                  <input className="side-input-price" type="number" />
                </div>
                {arr.map((item, i) => {
                  return (
                    <div className="side-input-main-flex">
                      <div className="side-input-flex">
                        <div>
                          <input
                            maxlength="2"
                            className="side-input"
                            type={item.type}
                            id={i}
                          />
                          <input
                            maxlength="2"
                            className="side-input"
                            type={item.type}
                            id={i}
                          />
                        </div>
                        <div>
                          <input
                            maxlength="2"
                            className="side-input"
                            type={item.type}
                            id={i}
                          />
                          <input
                            maxlength="2"
                            className="side-input"
                            type={item.type}
                            id={i}
                          />
                        </div>
                      </div>
                      <textarea
                        className="center-input"
                        rows={3}
                        type={item.type}
                        id={i}
                      />
                      <input
                        className="side-input-price"
                        type={item.type}
                        id={i}
                      />
                    </div>
                  );
                })}
              </div>
              <div>
                <button onClick={addInput} className="Add-Btn">
                  +
                </button>
              </div>
              <button className="Submit-Btn">Submit</button>
            </div>
            {/* <input id="partitioned" type="text" maxlength="4" /> */}
          </Popup>
        </div>
      </div>
    </>
  );
};

export default PatientDashboard;
