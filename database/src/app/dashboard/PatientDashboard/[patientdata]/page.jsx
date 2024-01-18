"use client";
import Navbar from "@/app/components/Navbar/page";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Popup from "reactjs-popup";

const today = new Date();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const date = today.getDate();
const currentDate = date + "/" + month + "/" + year;


const PatientDashboard = (props) => {


  // this id is getting from url to show data

  const id = props.params.patientdata;




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
    Treatment: []
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

  //this function is to print all data into textboxes 


  const showdata = async () => {

    const printdata = await fetch("/api/patientdetails/" + id);
    const jsondata = await printdata.json();

    setPatientDetails(jsondata);

  }

  useEffect(() => { showdata() }, []);




  //this function is to update  data  


  const update = async () => {

    const printdata = await fetch("/api/patientdetails/" + id, {
      method: "PUT",
      body: JSON.stringify(patientDetails)
    });

    if (printdata) {
      toast.success('successfully updated')
    }
    else {
      toast.error("not updated")
    }

  }




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
        TotalPrice: "",
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


const loadingbutton=()=> {
    return (
    <button
      disabled
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
    >
      <svg
        aria-hidden="true"
        role="status"
        className="inline w-4 h-4 me-3 text-white animate-spin"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="#E5E7EB"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentColor"
        />
      </svg>
      Loading...
    </button>
  );
    
}


  // this is to unique dates inside


  const onlydates = [...patientDetails.Treatment].reverse().map(date => date.Date);
  const uniquedate = [...new Set(onlydates)];

  const { data: session } = useSession();



  
    return (

      <div className="Patient-Details-BG">
        <Navbar />
        {(session?.user.Role === "Super Admin")&&
        <div className="Main-Div">
          <h3>PATIENT DATA UPGRADTION</h3>
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
                  disabled
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




          {/* below table showing dates */}




          {/* THIS IS ONCLICK ADDING NEW FIELDS IN MAIN PAGE BUT THIS WILL ADD BASED ON + BUTTON IN POPUP */}


          {/* here unique data is coming from javascript to unique the data and also apply filter on dates1 11111111 */}

          {/* for output popup */}

          {
            uniquedate.map((date, index) => (
              <div key={index} className="Fill-Inputs">


                {patientDetails.Treatment
                  .filter(treatment => treatment.Date === date)
                  .map((treatment, treatmentIndex) => (
                    <div key={treatmentIndex} className="Fill-Inputs">
                      {/* ... (render treatment fields) */}

                      <Popup trigger={<div className="date-header">{date}</div>} position="center">

                        {/* this is for date header  as a trigger to popup to show details*/}


                        <div className="Tooth-Description-Total">
                          <div className="Details-Inputs">
                            <div className="left-side-input">

                              <div className="Patient-Details-Inputs">
                                <input
                                  type="text"
                                  name="date"
                                  value={date}
                                  onChange={(e) => { handlePopupDetailsChange("Date", e.target.value); }}
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
                                    value={treatment.Time}
                                    onChange={(e) => { handlePopupDetailsChange("Time", e.target.value); }}

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
                                  value={treatment.Dentist}
                                  onChange={(e) => { handlePopupDetailsChange("Dentist", e.target.value); }}

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
                                  value={treatment.TotalPrice}
                                  onChange={(e) => { handlePopupDetailsChange("TotalPrice", e.target.value); }}
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
                                  value={treatment.LT}
                                  onChange={(e) => { handlePopupDetailsChange("LT", e.target.value); }}
                                  maxLength={2}

                                />
                                <input
                                  className="right-top-input"
                                  type="text"
                                  maxLength={2}
                                  value={treatment.RT}
                                  onChange={(e) => { handlePopupDetailsChange("RT", e.target.value); }}

                                />
                                <input
                                  className="left-bottom-input"
                                  type="text"
                                  maxLength={2}
                                  value={treatment.LB}
                                  onChange={(e) => { handlePopupDetailsChange("LB", e.target.value); }}
                                />
                                <input
                                  className="right-bottom-input"
                                  type="text"
                                  maxLength={2}
                                  value={treatment.RB}
                                  onChange={(e) => { handlePopupDetailsChange("RB", e.target.value); }}
                                />
                              </div>
                            </div>

                            <div>
                              <textarea value={treatment.Description} onChange={(e) => { handlePopupDetailsChange("Description", e.target.value); }} name="" id="" cols="128" rows="2"></textarea>
                            </div>

                            <div>
                              <div className="Price-input">
                                <div className="Patient-Details-Inputs">
                                  <input
                                    type="text"
                                    name="price"
                                    value={treatment.Price}
                                    onChange={(e) => { handlePopupDetailsChange("Price", e.target.value); }}
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
                        </div>


                      </Popup>
                      {/* ... (render treatment fields) */}

                      {/* THIS IS ONCLICK ADDING NEW FIELDS IN THE MAIN PAGE, BUT THIS WILL ADD BASED ON + BUTTON IN THE POPUP */}
                      <div className="Fill-Inputs">
                        <div className="fill-input-flex">
                          <div className="fill-input">
                            <input name="date" value={treatment.Date} type="text" />
                          </div>
                          <div className="fill-input-long">
                            <input name="treatment" value={treatment.Description} type="text" />
                          </div>
                          <div className="fill-input">
                            <input name="dentist" value={treatment.Dentist} type="text" />
                          </div>
                          <div className="fill-input">
                            <input name="totalprice" value={treatment.TotalPrice} type="text" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))
          }







          {/* THIS IS REAL POPUP TO UPDATE DATA ON CLICK ON + BUTTON */}


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
                      onChange={(e) => { handlePopupDetailsChange("Date", e.target.value); }}
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
                        onChange={(e) => { handlePopupDetailsChange("Time", e.target.value); }}

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
                      onChange={(e) => { handlePopupDetailsChange("Dentist", e.target.value); }}

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
                      value={popupDetails.TotalPrice = popupDetails.Price}
                      onChange={(e) => { handlePopupDetailsChange("TotalPrice", e.target.value); }}
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
                      onChange={(e) => { handlePopupDetailsChange("LT", e.target.value); }}
                      maxLength={2}

                    />
                    <input
                      className="right-top-input"
                      type="text"
                      maxLength={2}
                      value={popupDetails.RT}
                      onChange={(e) => { handlePopupDetailsChange("RT", e.target.value); }}

                    />
                    <input
                      className="left-bottom-input"
                      type="text"
                      maxLength={2}
                      value={popupDetails.LB}
                      onChange={(e) => { handlePopupDetailsChange("LB", e.target.value); }}
                    />
                    <input
                      className="right-bottom-input"
                      type="text"
                      maxLength={2}
                      value={popupDetails.RB}
                      onChange={(e) => { handlePopupDetailsChange("RB", e.target.value); }}
                    />
                  </div>
                </div>

                <div>
                  <textarea value={popupDetails.Description} onChange={(e) => { handlePopupDetailsChange("Description", e.target.value); }} name="" id="" cols="128" rows="1"></textarea>
                </div>

                <div>
                  <div className="Price-input">
                    <div className="Patient-Details-Inputs">
                      <input
                        type="text"
                        name="price"
                        value={popupDetails.Price}
                        onChange={(e) => { handlePopupDetailsChange("Price", e.target.value); }}
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




              <div className="Popup-Buttons">
                <div>
                  <button onClick={addTreatment} className="Add-Btn">
                    +
                  </button>
                </div>
                <button onClick={update} className="Save-Btn">
                  Submit
                </button>
              </div>
            </div>

          </Popup>


          <button onClick={update} className="Save-Btn">
            Upgrade
          </button>

        </div>

        || 

        loadingbutton()
   
} 
      </div>


    );

};

export default PatientDashboard;