"use client";
import React, { useState } from "react";
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
        Date: "",
        Time: "",
        Dentist: "",
        TotalPrice:"" ,
        LT: "0",
        RT: "0",
        LB: "0",
        RB: "0",
        Description: "",
        Price: "",
      });
    } else {
      alert("Treatment details are incomplete");
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

      alert("Success");
    } else {
      alert("All fields are required");
    }
  };

  return (
   
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
                <p>Desigination</p>
              </div>
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
                    handlePatientDetailsChange("Dateofregistration", e.target.value);
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


          
{/* 
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
          </div> */}



          {/* THIS IS ONCLICK ADDING NEW FIELDS IN MAIN PAGE BUT THIS WILL ADD BASED ON + BUTTON IN POPUP */}

          {/* {arr.map((item, i) => (
  <React.Fragment key={i}>
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
  </React.Fragment>
))} */}









                              {/* copied */}




      {patientDetails.Treatment.map((treatment, index) => (
        <div key={index} className="Fill-Inputs">
          {/* ... (render treatment fields) */}


   {/* THIS IS ONCLICK ADDING NEW FIELDS IN MAIN PAGE BUT THIS WILL ADD BASED ON + BUTTON IN POPUP */}
   
    <div className="Fill-Inputs">
      <div className="fill-input-flex">
        <div className="fill-input">
          <input name="date"  value={treatment.Date}
          type="text"  />
        </div>
        <div className="fill-input-long">
          <input name="treatment" value={treatment.Description}
         type="text" />
        </div>
        <div className="fill-input">
          <input name="dentist" value={treatment.Dentist}  type="text" />
        </div>
        <div className="fill-input">
          <input name="totalprice" value={treatment.TotalPrice}  type="text" />
        </div>
      </div>
    </div>

        </div>
      ))}


                      {/* copied */}

      <Popup trigger={<button className="Plus-Btn"> +</button>} position="center">
        {/* ... (rest of your JSX code) */}


        <div className="Tooth-Description-Total">
              <div className="Details-Inputs">
                <div className="left-side-input">

                  <div className="Patient-Details-Inputs">
                    <input
                      type="text"
                      name="date"
                      value={popupDetails.Date}
                      onChange={(e) => { handlePopupDetailsChange("Date", e.target.value);}}
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
                       onChange={(e) => { handlePopupDetailsChange("Time", e.target.value);}}

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
                      onChange={(e) => { handlePopupDetailsChange("Dentist", e.target.value);}}

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
                      value={popupDetails.TotalPrice}
                      onChange={(e) => { handlePopupDetailsChange("TotalPrice", e.target.value);}}
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
                      value={popupDetails.LT}
                      onChange={(e) => { handlePopupDetailsChange("LT", e.target.value);}}
                      maxLength={2}
                     
                    />
                    <input
                      className="right-top-input"
                      type="text"
                      maxLength={2}
                      value={popupDetails.RT}
                      onChange={(e) => { handlePopupDetailsChange("RT", e.target.value);}}
                      
                    />
                    <input
                      className="left-bottom-input"
                      type="text"
                      maxLength={2}
                      value={popupDetails.LB}
                      onChange={(e) => { handlePopupDetailsChange("LB", e.target.value);}}
                    />
                    <input
                      className="right-bottom-input"
                      type="text"
                      maxLength={2}
                      value={popupDetails.RB}
                      onChange={(e) => { handlePopupDetailsChange("RB", e.target.value);}}
                    />
                  </div>
                </div>

                <div>
                  <textarea value={popupDetails.Description} onChange={(e) => { handlePopupDetailsChange("Description", e.target.value);}} name="" id="" cols="128" rows="3"></textarea>
                </div>

                <div>
                  <div className="Price-input">
                    <div className="Patient-Details-Inputs">
                      <input
                        type="text"
                        name="price"
                        value={popupDetails.Price}
                        onChange={(e) => { handlePopupDetailsChange("Price", e.target.value);}}
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



              {patientDetails.Treatment.map((treatment, index) => (
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
    <textarea  name="" id="" value={treatment.Description} cols="128" rows="3"></textarea>
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
</div><br></br>

</>


        </div>
      ))}
   <div className="Popup-Buttons">
          <div>
            <button onClick={addTreatment} className="Save-Btn">
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






          {/* <Popup
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


                      onChange={(e) => { setTotalPrice(e.target.value) }}
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
                  <textarea onChange={(e) => { setDescription(e.target.value) }} name="" id="" cols="128" rows="3"></textarea>
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


              {

                arr.map((item, i) => (
                  <React.Fragment key={i}>
                    {

                   <>


                    <div className="Treatment-Price-Flex">
                      <div className="Treatment-Price">
                        <div>
                          <input
                            className="left-top-input"
                            type="text"
                            value={i.LT}
                            maxLength={2}
                            onChange={(e) => {
                              setLT(e.target.value);
                            }}
                          />
                          <input
                            className="right-top-input"
                            type="text"
                            maxLength={2}
                            value={i.RT}
                            onChange={(e) => {
                              setRT(e.target.value);
                            }}
                          />
                          <input
                            className="left-bottom-input"
                            type="text"
                            maxLength={2}
                            value={i.LB}
                            onChange={(e) => {
                              setLB(e.target.value);
                            }}
                          />
                          <input
                            className="right-bottom-input"
                            type="text"
                            maxLength={2}
                            value={i.RB}
                            onChange={(e) => {
                              setRB(e.target.value);
                            }}

                          />
                        </div>
                      </div>

                      <div>
                        <textarea onChange={(e) => { setDescription(e.target.value) }} name="" id="" value={Description} cols="128" rows="3"></textarea>
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
                    </div><br></br>

                  </>
                }
                </React.Fragment>)
                )}


              <div className='Popup-Buttons'>
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
          </Popup> */}
           

{/* 
          <button onClick={myfun} className="Save-Btn">
            Save
          </button> */}

        </div>
      </div>
      

  );
};

export default PatientDashboard;













// "use client";
// import React, { useEffect, useState } from "react";
// import Popup from "reactjs-popup";


// // just to get current date

// const today = new Date();
// const month = today.getMonth() + 1;
// const year = today.getFullYear();
// const date = today.getDate();
// const currentDate = date + "/" + month + "/" + year;


// // main function

// const PatientDashboard = () => {


//   const [Name, setName] = useState("");
//   const [Email, setEmail] = useState("");
//   const [Number, setNumber] = useState("");
//   const [Dateofbirth, setDateofbirth] = useState("");
//   const [Bloodgroup, setBloodgroup] = useState("");
//   const [Sex, setSex] = useState("");
//   const [Memberstatus, setMemberstatus] = useState("");
//   const [Dateofregistration, setDateofregistration] = useState("");
//   const [Clientid, setClientid] = useState("");

//   // Treatment details textboxes

//   const [Description, setDescription] = useState("");
//   const [Price, setPrice] = useState("");
//   const [Date, setDate] = useState("");
//   const [Time, setTime] = useState("");
//   const [Dentist, setDentist] = useState("");
//   const [TotalPrice, setTotalPrice] = useState("");
//   const [LT, setLT] = useState("0");
//   const [RT, setRT] = useState("0");
//   const [LB, setLB] = useState("0");
//   const [RB, setRB] = useState("0");



//   // on save button all details saved on the page

//   const myfun = async () => {
//     if (
//       Name != "" &&
//       Email != "" &&
//       Number != "" &&
//       Dateofbirth != "" &&
//       Bloodgroup != "" &&
//       Sex != "" &&
//       Memberstatus != "" &&
//       Dateofregistration != "" &&
//       Clientid != ""
//     ) {
//       const data = await fetch("/api/patientdetails", {
//         method: "POST",
//         body: JSON.stringify({
//           Name,
//           Email,
//           Number,
//           Dateofbirth,
//           Bloodgroup,
//           Sex,
//           Memberstatus,
//           Dateofregistration,
//           Clientid,
//           Treatment: [
//             {
//               Description,
//               Price,
//               Date,
//               Time,
//               Dentist,
//               TotalPrice,
//               LT,
//               RT,
//               LB,
//               RB
//             }]

//         })
//       })

//       alert("success");
//     }

//     else {
//       alert("all fields are required");
//     }
//   };


//   // on popup submit Button 

//   const backtodata = async () => {
//     if (Description != "" && Price != "" && Date != "" && Time != "" && Dentist != "" && TotalPrice != "") {
//       const getdata = await fetch("/api/patientdetails", {
//         method: "POST",
//         body: JSON.stringify({ Treatment:[{ Date, Time, Dentist, TotalPrice, LT, RT, LB, RB, Description, Price},], }),
//         headers: {
//           "Content-Type": "application/json",
//         },
  
//       });
//       if (getdata) {
//         alert("success");
//       }
//       else {
//         alert('something went wrong')
//       }

//     } else {
//       alert("can't be empty");
//     }
//   };

//   // unused Array

//   const inputArr = [
//     {
//       type: "text",
//       id: 1,
//       value: "",
//     },
//   ];

//   // this is to add new input in popup form

//   const [arr, setArr] = useState([]);

//   const addInput = async () => {
//     if (Description != "" && Price != "" && TotalPrice != "" && Dentist != "" && Date != "" && Time != "") {
//       const getdata = await fetch("/api/patientdetails", {
//         method: "POST",
//         body: JSON.stringify({ Treatment: [Date, Time, Dentist, TotalPrice, LT, RT, LB, RB, Description, Price] }),
//       })

//       setArr((s) => {
//         return [
//           ...s,
//           {
//             type: "text",
//             value: "",
//           },
//         ];
//       });
//       alert("success");
//     } else {
//       alert("cant be empty");
//     }
//   }

//   // not used till
//   const handleChange = (e) => {
//     e.preventDefault();

//     const index = e.target.id;
//     setArr((s) => {
//       const newArr = s.slice();
//       newArr[index].value = e.target.value;

//       return newArr;
//     });
//   };


  // react output body

//   return (
//     <>
//       <div className="Patient-Details-BG">
//         <div className="Header">
//           <div className="Header-Flex">
//             <div>
//               <img src="/img/image.png" alt="" />
//             </div>
//             <div>
//               <img
//                 className="Logo"
//                 src="http://www.fhgroupoc.com/svg/fhlogog.svg"
//                 alt=""
//               />
//             </div>
//             <div className="User-Login">
//               <img className="User-Login-Pic" src="/img/image 2.png" alt="" />
//               <div>
//                 <h3>Muzzamil Rafique</h3>
//                 <p>Desigination</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="Main-Div">
//           <h3>PATIENT PROFILE SECTION</h3>
//           <div className="Input-Flex">
//             <div className="row-1">
//               <div className="Patient-Details-Inputs">
//                 <input
//                   type="clientid"
//                   name="clientid"
//                   onChange={(e) => {
//                     setClientid(e.target.value);
//                   }}
//                   id="clientid"
//                   className="input-field-1"
//                   placeholder="clientid"
//                   autoComplete="off"
//                 />
//                 <label for="clientid" className="input-label">
//                   Client ID :
//                 </label>
//               </div>
//               <div className="Patient-Details-Inputs">
//                 <input
//                   type="name"
//                   name="name"
//                   onChange={(e) => {
//                     setName(e.target.value);
//                   }}
//                   id="name"
//                   className="input-field-1"
//                   placeholder="name"
//                   autoComplete="off"
//                 />
//                 <label for="name" className="input-label">
//                   Name :
//                 </label>
//               </div>
//               <div className="Patient-Details-Inputs">
//                 <input
//                   type="text"
//                   name="email"
//                   onChange={(e) => {
//                     setEmail(e.target.value);
//                   }}
//                   id="email"
//                   className="input-field-1"
//                   placeholder="email"
//                   autoComplete="off"
//                 />
//                 <label for="email" className="input-label">
//                   Email :
//                 </label>
//               </div>
//               <div className="Patient-Details-Inputs">
//                 <input
//                   type="text"
//                   name="number"
//                   onChange={(e) => {
//                     setNumber(e.target.value);
//                   }}
//                   id="number"
//                   className="input-field-1"
//                   placeholder="number"
//                   autoComplete="off"
//                 />
//                 <label for="number" className="input-label">
//                   Number :
//                 </label>
//               </div>
//               <div className="Patient-Details-Inputs">
//                 <input
//                   type="text"
//                   name="dateofbirth"
//                   onChange={(e) => {
//                     setDateofbirth(e.target.value);
//                   }}
//                   id="dateofbirth"
//                   className="input-field-1"
//                   placeholder="dateofbirth"
//                   autoComplete="off"
//                 />
//                 <label for="dateofbirth" className="input-label">
//                   Date of Birth :
//                 </label>
//               </div>
//             </div>
//             <div className="row-2">
//               <div className="Patient-Details-Inputs">
//                 <input
//                   type="sex"
//                   name="sex"
//                   onChange={(e) => {
//                     setSex(e.target.value);
//                   }}
//                   id="sex"
//                   className="input-field-1"
//                   placeholder="sex"
//                   autoComplete="off"
//                 />
//                 <label for="sex" className="input-label">
//                   Sex :
//                 </label>
//               </div>
//               <div className="Patient-Details-Inputs">
//                 <input
//                   type="bloodgroup"
//                   name="bloodgroup"
//                   onChange={(e) => {
//                     setBloodgroup(e.target.value);
//                   }}
//                   id="bloodgroup"
//                   className="input-field-1"
//                   placeholder="bloodgroup"
//                   autoComplete="off"
//                 />
//                 <label for="bloodgroup" className="input-label">
//                   Blood Group :
//                 </label>
//               </div>
//               <div className="Patient-Details-Inputs">
//                 <input
//                   type="text"
//                   name="memberstatus"
//                   onChange={(e) => {
//                     setMemberstatus(e.target.value);
//                   }}
//                   id="memberstatus"
//                   className="input-field-1"
//                   placeholder="memberstatus"
//                   autoComplete="off"
//                 />
//                 <label for="memberstatus" className="input-label">
//                   Member Status :
//                 </label>
//               </div>
//               <div className="Patient-Details-Inputs">
//                 <input
//                   type="text"
//                   name="dateofregistration"
//                   onChange={(e) => {
//                     setDateofregistration(e.target.value);
//                   }}
//                   id="dateofregistration"
//                   className="input-field-1"
//                   placeholder="dateofregistration"
//                   autoComplete="off"
//                 />
//                 <label for="dateofregistration" className="input-label">
//                   Date of Registration :
//                 </label>
//               </div>
//             </div>
//           </div>




//           <div className="Details-Inputs">
//             <div className="fake-input-flex">
//               <div className="fake-input">
//                 <h4>Date</h4>
//               </div>
//               <div className="fake-input-long">
//                 <h4>Treatment</h4>
//               </div>
//               <div className="fake-input">
//                 <h4>Dentist</h4>
//               </div>
//               <div className="fake-input">
//                 <h4>Total Price</h4>
//               </div>
//             </div>
//           </div>

//           <div className="Fill-Inputs">
//             <div className="fill-input-flex">
//               <div className="fill-input">
//                 <input name="date" value={Date} type="text" />

//               </div>
//               <div className="fill-input-long">
//                 <input name="treatment" value={Description} type="text" />
//               </div>
//               <div className="fill-input">
//                 <input name="dentist" value={Dentist} type="text" />
//               </div>
//               <div className="fill-input">
//                 <input name="totalprice" value={TotalPrice} type="text" />

//               </div>
//             </div>
//           </div>



//           {/* THIS IS ONCLICK ADDING NEW FIELDS IN MAIN PAGE BUT THIS WILL ADD BASED ON + BUTTON IN POPUP */}

//           {arr.map((item, i) => (
//   <React.Fragment key={i}>
//     <div className="Fill-Inputs">
//       <div className="fill-input-flex">
//         <div className="fill-input">
//           <input name="date" value={Date} type="text" />
//         </div>
//         <div className="fill-input-long">
//           <input name="treatment" value={Description} type="text" />
//         </div>
//         <div className="fill-input">
//           <input name="dentist" value={Dentist} type="text" />
//         </div>
//         <div className="fill-input">
//           <input name="totalprice" value={TotalPrice} type="text" />
//         </div>
//       </div>
//     </div>
//   </React.Fragment>
// ))}




//           <Popup
//             trigger={<button className="Plus-Btn"> +</button>}
//             position="center"
//           >
//             <div className="Tooth-Description-Total">
//               <div className="Details-Inputs">
//                 <div className="left-side-input">

//                   <div className="Patient-Details-Inputs">
//                     <input
//                       type="text"
//                       name="date"
//                       onChange={(e) => {
//                         setDate(e.target.value);
//                       }}
//                       id="date"
//                       className="input-field-1"
//                       placeholder="date"
//                       autoComplete="off"
//                     />
//                     <label for="date" className="input-label">
//                       Date :
//                     </label>
//                   </div>

//                   <div>
//                     <div className="Patient-Details-Inputs">
//                       <input
//                         type="text"
//                         name="time"
//                         onChange={(e) => {
//                           setTime(e.target.value);
//                         }}
//                         id="time"
//                         className="input-field-1"
//                         placeholder="time"
//                         autoComplete="off"
//                       />
//                       <label for="time" className="input-label">
//                         Time :
//                       </label>
//                     </div>
//                   </div>


//                   <div className="Patient-Details-Inputs">
//                     <input
//                       type="text"
//                       name="dentist"
//                       onChange={(e) => {
//                         setDentist(e.target.value);
//                       }}
//                       id="dentist"
//                       className="input-field-1"
//                       placeholder="dentist"
//                       autoComplete="off"
//                     />
//                     <label for="dentist" className="input-label">
//                       Dentist :
//                     </label>
//                   </div>

//                 </div>

//                 <div>
//                   <div className="Patient-Details-Inputs">
//                     <input
//                       type="text"
//                       name="total-price"


//                       onChange={(e) => { setTotalPrice(e.target.value) }}
//                       id="total-price"
//                       className="input-field-1"
//                       placeholder="total-price"
//                       autoComplete="off"
//                     />
//                     <label for="total-price" className="input-label">
//                       Total Price :
//                     </label>
//                   </div>
//                 </div>



//               </div>
//               <div className="Treatment-Price-Flex">
//                 <div className="Treatment-Price">
//                   <div>
//                     <input
//                       className="left-top-input"
//                       type="text"
//                       value={LT}
//                       maxLength={2}
//                       onChange={(e) => {
//                         setLT(e.target.value);
//                       }}
//                     />
//                     <input
//                       className="right-top-input"
//                       type="text"
//                       maxLength={2}
//                       value={RT}
//                       onChange={(e) => {
//                         setRT(e.target.value);
//                       }}
//                     />
//                     <input
//                       className="left-bottom-input"
//                       type="text"
//                       maxLength={2}
//                       value={LB}
//                       onChange={(e) => {
//                         setLB(e.target.value);
//                       }}
//                     />
//                     <input
//                       className="right-bottom-input"
//                       type="text"
//                       maxLength={2}
//                       value={RB}
//                       onChange={(e) => {
//                         setRB(e.target.value);
//                       }}
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <textarea onChange={(e) => { setDescription(e.target.value) }} name="" id="" cols="128" rows="3"></textarea>
//                 </div>

//                 <div>
//                   <div className="Price-input">
//                     <div className="Patient-Details-Inputs">
//                       <input
//                         type="text"
//                         name="price"
//                         onChange={(e) => {
//                           setPrice(e.target.value);
//                         }}
//                         id="price"
//                         className="input-field-1"
//                         placeholder="price"
//                         autoComplete="off"
//                       />
//                       <label for="price" className="input-label">
//                         Price :
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//               </div>


//               {

//                 arr.map((item, i) => (
//                   <React.Fragment key={i}>
//                     {

//                    <>


//                     <div className="Treatment-Price-Flex">
//                       <div className="Treatment-Price">
//                         <div>
//                           <input
//                             className="left-top-input"
//                             type="text"
//                             value={i.LT}
//                             maxLength={2}
//                             onChange={(e) => {
//                               setLT(e.target.value);
//                             }}
//                           />
//                           <input
//                             className="right-top-input"
//                             type="text"
//                             maxLength={2}
//                             value={i.RT}
//                             onChange={(e) => {
//                               setRT(e.target.value);
//                             }}
//                           />
//                           <input
//                             className="left-bottom-input"
//                             type="text"
//                             maxLength={2}
//                             value={i.LB}
//                             onChange={(e) => {
//                               setLB(e.target.value);
//                             }}
//                           />
//                           <input
//                             className="right-bottom-input"
//                             type="text"
//                             maxLength={2}
//                             value={i.RB}
//                             onChange={(e) => {
//                               setRB(e.target.value);
//                             }}

//                           />
//                         </div>
//                       </div>

//                       <div>
//                         <textarea onChange={(e) => { setDescription(e.target.value) }} name="" id="" value={Description} cols="128" rows="3"></textarea>
//                       </div>

//                       <div>
//                         <div className="Price-input">
//                           <div className="Patient-Details-Inputs">
//                             <input
//                               type="text"
//                               name="price"
//                               onChange={(e) => {
//                                 setPrice(e.target.value);
//                               }}
//                               id="price"
//                               className="input-field-1"
//                               placeholder="price"
//                               autoComplete="off"
//                             />
//                             <label for="price" className="input-label">
//                               Price :
//                             </label>
//                           </div>
//                         </div>
//                       </div>
//                     </div><br></br>

//                   </>
//                 }
//                 </React.Fragment>)
//                 )}


//               <div className='Popup-Buttons'>
//                 <div>
//                   <button onClick={addInput} className="Add-Btn">
//                     +
//                   </button>
//                 </div>
//                 <button onClick={backtodata} className="Save-Btn">
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </Popup>


//           <button onClick={myfun} className="Save-Btn">
//             Save
//           </button>

//         </div>
//       </div>
//     </>
//   );
// };

// export default PatientDashboard;
