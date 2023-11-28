"use client";

import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";


// to get current data
const today = new Date();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const date = today.getDate();
const currentDate = date + "/" + month + "/" + year;




const patientdata = (props) => {


  // this id is getting from url to show data
  const id = props.params.patientdata;

  // fetching data based on specific id in belowed function

  const viewdata = async () => {
    const data = await fetch("http://localhost:3000/api/patientdetails/" + id);
    const jsondata = await data.json();
    
    setName(jsondata.Name);
    setEmail(jsondata.Email);
    setNumber(jsondata.Number);
    setDateofbirth(jsondata.Dateofbirth);
    setBloodgroup(jsondata.Bloodgroup);
    setSex(jsondata.Sex);
    setMemberstatus(jsondata.Memberstatus);
    setDateofregistration(jsondata.Dateofregistration);
    setClientid(jsondata.Clientid);
    for(let i=0; i<Object.length; i++) {
      setDate(jsondata.Treatment[i].Date);
      setDescription(jsondata.Treatment[i].Description);
      setDentist(jsondata.Treatment[i].Dentist);
      setTotalPrice(jsondata.Treatment[i].TotalPrice);
      setPrice(jsondata.Treatment[i].Price);
      setTime(jsondata.Treatment[i].Time);
      setLT(jsondata.Treatment[i].LT);
      setRT(jsondata.Treatment[i].RT);
      setLB(jsondata.Treatment[i].LB);
      setRB(jsondata.Treatment[i].RB);
      
    }
    


  };

  // to print data using useEffect

  useEffect(() => {
    viewdata();
  }, []);

  // declaration of patient fields

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Number, setNumber] = useState("");
  const [Dateofbirth, setDateofbirth] = useState("");
  const [Bloodgroup, setBloodgroup] = useState("");
  const [Sex, setSex] = useState("");
  const [Memberstatus, setMemberstatus] = useState("");
  const [Dateofregistration, setDateofregistration] = useState("");
  const [Clientid, setClientid] = useState("");

  //All fields on POP up for treatment detail DB

  const [Description, setDescription] = useState("");
  let [Price, setPrice] = useState("");
  const [Date, setDate] = useState("");
  const [Time, setTime] = useState("");
  const [Dentist, setDentist] = useState("");
  const [TotalPrice, setTotalPrice] = useState("");
  const [LT, setLT] = useState("");
  const [RT, setRT] = useState("");
  const [LB, setLB] = useState("");
  const [RB, setRB] = useState("");
  

 

  // PUT function to update data on output

  const myupdate = async () => {
    if (
      Name != "" &&
      Email != "" &&
      Number != "" &&
      Dateofbirth != "" &&
      Bloodgroup != "" &&
      Sex != "" &&
      Memberstatus != "" &&
      Dateofregistration != "" &&
      Clientid != ""
    ) {
      const data = await fetch("/api/patientdetails/" + id, {
        method: "PUT",
        body: JSON.stringify({
          Name,
          Email,
          Number,
          Dateofbirth,
          Bloodgroup,
          Sex,
          Memberstatus,
          Dateofregistration,
          Clientid,
          Treatment: [
            {
              Description,
              Price,
              Date,
              Time,
              Dentist,
              TotalPrice,
              LT,
              RT,
              LB,
              RB
            }]
        })
      });

      alert("Successfully Updated");
    } else {
      alert("all fields are required");
    }
  };

  //for POPUP on submit button -- treatment data will save to db

  const backtodata = async () => {
    if (
      Description != "" &&
      Price != "" &&
      Clientid != "" &&
      Date != "" &&
      Time != "" &&
      Dentist != "" &&
      TotalPrice != ""
    ) {
      const getdata = await fetch("/api/patientdetails"+id, {
        method: "PUT",
        body: JSON.stringify({
        Treatment:[
            {
              Description,
              Price,
              Date,
              Time,
              Dentist,
              TotalPrice,
              LT,
              RT,
              LB,
              RB
          
            }]
        }),
      });
      alert("success");
    //  window.location.href=("/dashboard/PatientDashboard/"+id);
    } else {
      alert("can't be empty");
    }
  };

  // below array is not used
  const inputArr = [
    {
      type: "text",
      id: 1,
      value: "",
    },
  ];

  // this is to add popup data with client id from patient details

  const [arr, setArr] = useState([]);

  // used to add new textboxes in popup to save data

  const addInput = async () => {
    if (
      Description != "" &&
      Price != "" &&
      Clientid != "" &&
      TotalPrice != "" &&
      Dentist != "" &&
      Date != "" &&
      Time != ""
    ) {
      const getdata = await fetch("/api/patientdetails"+id, {
        method: "PUT",
        body: JSON.stringify({
          Treatment: [
            {
              Description,
              Price,
              Date,
              Time,
              Dentist,
              TotalPrice,
              LT,
              RT,
              LB,
              RB
            }]
        })
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

  // not used till now

  const handleChange = (e) => {
    e.preventDefault();

    const index = e.target.id;
    setArr((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };

  // html or react output is below

  return (
    <>
      <div className="Patient-Details-BG">
        <div className="Header">
          <div className="Header-Flex">
            <div>
              <img src="/img/image.png" alt="" />
            </div>
            <div>
              <img
                className="Logo"
                src="http://www.fhgroupoc.com/svg/fhlogog.svg"
                alt=""
              />
            </div>
            <div className="User-Login">
              <img className="User-Login-Pic" src="/img/image 2.png" alt="" />
              <div>
                <h3>Muzzamil Rafique</h3>
                <p>Super Admin</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Main-Div">
          <h3>PATIENT DETAILS</h3>
          <div className="Input-Flex">
            <div className="row-1">
              <div className="Patient-Details-Inputs">
                <input
                  type="clientid"
                  name="clientid"
                  onChange={(e) => {
                    setClientid(e.target.value);
                  }}
                  id="clientid"
                  value={Clientid}
                  className="input-field-1"
                  placeholder="clientid"
                  disabled
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
                    setName(e.target.value);
                  }}
                  value={Name}
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
                    setEmail(e.target.value);
                  }}
                  value={Email}
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
                    setNumber(e.target.value);
                  }}
                  value={Number}
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
                  value={Dateofbirth}
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
                  value={Sex}
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
                  value={Bloodgroup}
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
                  value={Memberstatus}
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
                  onChange={(e) => {
                    setDateofregistration(e.target.value);
                  }}
                  value={Dateofregistration}
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


{/* this treatment detail frontend */}

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
          <div className="Fill-Inputs">
            <div className="fill-input-flex">
              <div className="fill-input">
                <input name="date" value={Date} type="text" />
               
              </div>
              <div className="fill-input-long">
                <input name="treatment" value={Description} type="text" />
              </div>
              <div className="fill-input">
                <input name="dentist" value={Dentist} type="text" />
              </div>
              <div className="fill-input">
                <input name="totalprice" value={TotalPrice} type="text" />
              </div>
            </div>
          </div>



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
                      value={Date}
                      onChange={(e) => {
                        setDate(e.target.value);
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
                        value={Time}
                        onChange={(e) => {
                          setTime(e.target.value);
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
                      value={Dentist}
                      onChange={(e) => {
                        setDentist(e.target.value);
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
                      value={(TotalPrice)}
                      onChange={(e) => {
                        setTotalPrice(e.target.value);
                      }}
                      id="total-price"
                      className="input-field-1"
                      placeholder="total-price"
                      autoComplete="off"
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
                      value={LT}
                      maxLength={2}
                      onChange={(e) => {
                        setLT(e.target.value);
                      }}
                    />
                    <input
                      className="right-top-input"
                      type="text"
                      maxLength={2}
                      value={RT}
                      onChange={(e) => {
                        setRT(e.target.value);
                      }}
                    />
                    <input
                      className="left-bottom-input"
                      type="text"
                      maxLength={2}
                      value={LB}
                      onChange={(e) => {
                        setLB(e.target.value);
                      }}
                    />
                    <input
                      className="right-bottom-input"
                      type="text"
                      maxLength={2}
                      value={RB}
                      onChange={(e) => {
                        setRB(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div>
                  <textarea
                  value={Description}
                    onChange={(e) => {
                      setDescription(e.target.value);
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
                        value={Price}
                        onChange={(e) => {
                          setPrice(e.target.value);
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

              {arr.map((item, i) => {
                return (
                  <>
                    <div className="Treatment-Price-Flex">
                      <div className="Treatment-Price">
                        <div>
                          <input
                            className="left-top-input"
                            type="text"
                            maxLength={2}
                            onChange={(e) => {
                              setLT(e.target.value);
                            }}
                          />
                          <input
                            className="right-top-input"
                            type="text"
                            maxLength={2}
                            onChange={(e) => {
                              setRT(e.target.value);
                            }}
                          />
                          <input
                            className="left-bottom-input"
                            type="text"
                            maxLength={2}
                            onChange={(e) => {
                              setLB(e.target.value);
                            }}
                          />
                          <input
                            className="right-bottom-input"
                            type="text"
                            maxLength={2}
                            onChange={(e) => {
                              setRB(e.target.value);
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <textarea
                          onChange={(e) => {
                            setDescription(e.target.value);
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
                              onChange={(e) => {
                                setPrice(e.target.value);
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
                    <br></br>
                  </>
                );
              })}

              <div className="Popup-Buttons">
                <div>
                  <button onClick={addInput} className="Add-Btn">
                    +
                  </button>
                </div>
                <button onClick={backtodata} className="Save-Btn">
                  Submit
                </button>
              </div>
            </div>
          </Popup>
          <button onClick={myupdate} className="Save-Btn">
            Update
          </button>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default patientdata;