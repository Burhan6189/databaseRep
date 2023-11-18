"use client";
import React, { useState } from "react";

const PatientDashboard = () => {
  const myfun = async () => {
    alert("new table addeed");
  };

  const inputArr = [
    {
      type: "text",
      id: 1,
      value: "",
    },
  ];

  const [arr, setArr] = useState(inputArr);

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
        <img className="Patient-Details-Logo" src="/img/Logo.png" alt="" />
        <div className="Main-Div">
          <h3>PATIENT PROFILE SECTION</h3>
          <div className="Input-Flex">
            <div className="row-1">
              <div className="Patient-Details-Inputs">
                <input
                  type="name"
                  name="name"
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
            <div>
              <input className="side-input" type="text" />
              <input className="center-input" type="text" />
              <input className="side-input" type="text" />
            </div>

            {arr.map((item, i) => {
            return (
              <div className="Details-Inputs">
                <input
                  className="side-input"
                  type={item.type}
                  id={i}
                  size="40"
                />
                <input
                  className="center-input"
                  type={item.type}
                  id={i}
                  size="40"
                />
                <input
                  className="side-input"
                  type={item.type}
                  id={i}
                  size="40"
                />
              </div>
            );
          })}
          </div>
        </div>
        <div>
      
          <button onClick={addInput} className="Add-Btn">
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default PatientDashboard;
