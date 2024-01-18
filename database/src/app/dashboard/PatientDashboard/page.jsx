"use client";


import Navbar from "@/app/components/Navbar/page";
import { color } from "framer-motion";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Popup from "reactjs-popup";

const today = new Date();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const date = today.getDate();
const currentDate = date + "/" + month + "/" + year;

const PatientDashboard = () => {
  const [patientDetails, setPatientDetails] = useState({
    Name: "",
    Email: "",
    Number: "",
    Dateofbirth: "",
    Bloodgroup: "",
    Sex: "",
    Memberstatus: "",
    Dateofregistration: "",
    Clientid: "",
    Treatment: [],
  });

  const [popupDetails, setPopupDetails] = useState({
    Date: "",
    Time: "",
    Dentist: "",
    TotalPrice: "",
    LT: "0",
    RT: "0",
    LB: "0",
    RB: "0",
    Description: "",
    Price: "",
  });

  const handlePatientDetailsChange = (field, value) => {
    setPatientDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const handlePopupDetailsChange = (field, value) => {
    setPopupDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const addTreatment = () => {
    if (
      popupDetails.Date &&
      popupDetails.Time &&
      popupDetails.Dentist &&
      popupDetails.TotalPrice
    ) {
      setPatientDetails((prevDetails) => ({
        ...prevDetails,
        Treatment: [...prevDetails.Treatment, { ...popupDetails }],
      }));

      setPopupDetails({
        Date: popupDetails.Date,
        Time: popupDetails.Time,
        Dentist: popupDetails.Dentist,
        TotalPrice: popupDetails.TotalPrice,
        LT: "0",
        RT: "0",
        LB: "0",
        RB: "0",
        Description: "",
        Price: "",
      });
    } else {
      toast.error("Treatment details are incomplete");
    }
  };

  const savePatientDetails = async () => {
    if (
      patientDetails.Name &&
      patientDetails.Email &&
      patientDetails.Number &&
      patientDetails.Dateofbirth &&
      patientDetails.Bloodgroup &&
      patientDetails.Sex &&
      patientDetails.Memberstatus &&
      patientDetails.Dateofregistration &&
      patientDetails.Clientid &&
      patientDetails.Treatment.length > 0
    ) {
      const data = await fetch("/api/patientdetails", {
        method: "POST",
        body: JSON.stringify(patientDetails),
      });

      toast.success("Successfully Added");
      setPopupDetails({
        Date: "",
        Time: "",
        Dentist: "",
        TotalPrice: "",
        LT: "0",
        RT: "0",
        LB: "0",
        RB: "0",
        Description: "",
        Price: "",
      });
      window.location.href = "/dashboard/PatientDashboard/AllPatient";
    } else {
      toast.error("All fields are required");
    }
  };

 const {data: session} = useSession();


if(session?.user.Role === "Super Admin" || session?.user.Role === "User") 
{
 return (
    <div className="Patient-Details-BG">
      <Navbar />
      <div className="Main-Div">
        <h3>PATIENT PROFILE SECTION</h3>
        <div className="Input-Flex">
          <div className="row-1">
            <div className="Patient-Details-Inputs">
              <input
                type="clientid"
                name="clientid"
                value={patientDetails.Clientid}
                onChange={(e) => {
                  handlePatientDetailsChange("Clientid", e.target.value);
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
                value={patientDetails.Name}
                onChange={(e) => {
                  handlePatientDetailsChange("Name", e.target.value);
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
                value={patientDetails.Email}
                onChange={(e) => {
                  handlePatientDetailsChange("Email", e.target.value);
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
                value={patientDetails.Number}
                onChange={(e) => {
                  handlePatientDetailsChange("Number", e.target.value);
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
                value={patientDetails.Dateofbirth}
                onChange={(e) => {
                  handlePatientDetailsChange("Dateofbirth", e.target.value);
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
                value={patientDetails.Sex}
                onChange={(e) => {
                  handlePatientDetailsChange("Sex", e.target.value);
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
                value={patientDetails.Bloodgroup}
                onChange={(e) => {
                  handlePatientDetailsChange("Bloodgroup", e.target.value);
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
                value={patientDetails.Memberstatus}
                onChange={(e) => {
                  handlePatientDetailsChange("Memberstatus", e.target.value);
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
                name="dateofregistration"
                value={patientDetails.Dateofregistration}
                onChange={(e) => {
                  handlePatientDetailsChange(
                    "Dateofregistration",
                    e.target.value
                  );
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
            <div className="fake-input">
              <h4>Date</h4>
            </div>
            <div className="fake-input-long">
              <h4>Treatment</h4>
            </div>
            <div className="fake-input">
              <h4>Dentist</h4>
            </div>
            <div className="fake-input">
              <h4>Total Price</h4>
            </div>
          </div>
        </div>

        {/* copied */}

        {[...patientDetails.Treatment].reverse().map((treatment, index) => (
          <div key={index} className="Fill-Inputs">
            {/* ... (render treatment fields) */}

            {/* THIS IS ONCLICK ADDING NEW FIELDS IN MAIN PAGE BUT THIS WILL ADD BASED ON + BUTTON IN POPUP */}

            <div className="Fill-Inputs">
              <div className="fill-input-flex">
                <div className="fill-input">
                  <input name="date" value={treatment.Date} type="text" />
                </div>
                <div className="fill-input-long">
                  <input
                    name="treatment"
                    value={treatment.Description}
                    type="text"
                  />
                </div>
                <div className="fill-input">
                  <input name="dentist" value={treatment.Dentist} type="text" />
                </div>
                <div className="fill-input">
                  <input
                    name="totalprice"
                    value={treatment.TotalPrice}
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* copied */}

        <Popup
          trigger={<button className="Plus-Btn"> +</button>}
          position="center"
        >
          <div className="Tooth-Description-Total">
            <div className="Details-Inputs">
              <div className="left-side-input">
                <div className="Patient-Details-Inputs">
                  <input
                    type="text"
                    name="date"
                    value={popupDetails.Date}
                    onChange={(e) => {
                      handlePopupDetailsChange("Date", e.target.value);
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

                <div>
                  <div className="Patient-Details-Inputs">
                    <input
                      type="text"
                      name="time"
                      value={popupDetails.Time}
                      onChange={(e) => {
                        handlePopupDetailsChange("Time", e.target.value);
                      }}
                      id="time"
                      className="input-field-1"
                      placeholder="time"
                      autoComplete="off"
                    />
                    <label for="time" className="input-label">
                      Time :
                    </label>
                  </div>
                </div>

                <div className="Patient-Details-Inputs">
                  <input
                    type="text"
                    name="dentist"
                    value={popupDetails.Dentist}
                    onChange={(e) => {
                      handlePopupDetailsChange("Dentist", e.target.value);
                    }}
                    id="dentist"
                    className="input-field-1"
                    placeholder="dentist"
                    autoComplete="off"
                  />
                  <label for="dentist" className="input-label">
                    Dentist :
                  </label>
                </div>
              </div>

              <div>
                <div className="Patient-Details-Inputs">
                  <input
                    type="text"
                    name="total-price"
                    onAbort
                    value={(popupDetails.TotalPrice = popupDetails.Price)}
                    onChange={(e) => {
                      handlePopupDetailsChange("TotalPrice", e.target.value);
                    }}
                    id="total-price"
                    className="input-field-1"
                    placeholder="total-price"
                  />
                  <label for="total-price" className="input-label">
                    Total Price :
                  </label>
                </div>
              </div>
            </div>
            <div className="Treatment-Price-Flex">
              <div className="Treatment-Price">
                <div>
                  <input
                    className="left-top-input"
                    type="text"
                    value={popupDetails.LT}
                    onChange={(e) => {
                      handlePopupDetailsChange("LT", e.target.value);
                    }}
                    maxLength={2}
                  />
                  <input
                    className="right-top-input"
                    type="text"
                    maxLength={2}
                    value={popupDetails.RT}
                    onChange={(e) => {
                      handlePopupDetailsChange("RT", e.target.value);
                    }}
                  />
                  <input
                    className="left-bottom-input"
                    type="text"
                    maxLength={2}
                    value={popupDetails.LB}
                    onChange={(e) => {
                      handlePopupDetailsChange("LB", e.target.value);
                    }}
                  />
                  <input
                    className="right-bottom-input"
                    type="text"
                    maxLength={2}
                    value={popupDetails.RB}
                    onChange={(e) => {
                      handlePopupDetailsChange("RB", e.target.value);
                    }}
                  />
                </div>
              </div>

              <div>
                <textarea
                  value={popupDetails.Description}
                  onChange={(e) => {
                    handlePopupDetailsChange("Description", e.target.value);
                  }}
                  name=""
                  id=""
                  cols="128"
                  rows="3"
                ></textarea>
              </div>

              <div>
                <div className="Price-input">
                  <div className="Patient-Details-Inputs">
                    <input
                      type="text"
                      name="price"
                      value={popupDetails.Price}
                      onChange={(e) => {
                        handlePopupDetailsChange("Price", e.target.value);
                      }}
                      id="price"
                      className="input-field-1"
                      placeholder="price"
                      autoComplete="off"
                    />
                    <label for="price" className="input-label">
                      Price :
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* this is popup stack of deatils showing on every + button */}

            {[...patientDetails.Treatment].reverse().map((treatment, index) => (
              <div key={index} className="Fill-Inputs">
                <>
                  <div className="Treatment-Price-Flex">
                    <div className="Treatment-Price">
                      <div>
                        <input
                          className="left-top-input"
                          type="text"
                          value={treatment.LT}
                          maxLength={2}
                        />
                        <input
                          className="right-top-input"
                          type="text"
                          maxLength={2}
                          value={treatment.RT}
                        />
                        <input
                          className="left-bottom-input"
                          type="text"
                          maxLength={2}
                          value={treatment.LB}
                        />
                        <input
                          className="right-bottom-input"
                          type="text"
                          maxLength={2}
                          value={treatment.RB}
                        />
                      </div>
                    </div>

                    <div>
                      <textarea
                        name=""
                        id=""
                        value={treatment.Description}
                        cols="128"
                        rows="3"
                      ></textarea>
                    </div>

                    <div>
                      <div className="Price-input">
                        <div className="Patient-Details-Inputs">
                          <input
                            type="text"
                            name="price"
                            value={treatment.Price}
                            id="price"
                            className="input-field-1"
                            placeholder="price"
                            autoComplete="off"
                          />

                          <label for="price" className="input-label">
                            Price :
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                </>
              </div>
            ))}
            <div className="Popup-Buttons">
              <div>
                <button onClick={addTreatment} className="Add-Btn">
                  +
                </button>
              </div>
              <button onClick={savePatientDetails} className="Save-Btn">
                Submit
              </button>
            </div>
          </div>
        </Popup>

        <button onClick={savePatientDetails} className="Save-Btn">
          Save
        </button>
      </div>
    </div>
  );}

      
  else if (session?.user.Role==="Checker"){
    return(

      <>
      <div>

      <h1>You are not Authorized to Access this page</h1><br></br>

<h1 >Only Super Admin and User can Access this Page</h1>
      </div>
      
      </>
    )
  }


};

export default PatientDashboard;
