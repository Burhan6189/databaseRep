'use client'

import React, { useEffect, useState } from "react";

const AllPatient = () => {


const plusbtn=()=>{
 return window.location.href=("/dashboard/PatientDashboard");
}


const [Details, setDetails]=useState([]);

const printdata = async ()=>{

const data = await fetch("/api/patientdetails");
const jsondata = await data.json();

setDetails(jsondata);
}

useEffect(()=>{printdata(), []})



  return (
    <>

      <div className="All-Patient-BG">
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
        <div className="All-Patient-Header">
          <h2>All Patients</h2>
          <div className="Appointment-Button">
            <input type="text" placeholder="Search" />
            <h4>New Appointments</h4>
            <button onClick={plusbtn}>+</button>
          </div>
        </div>


        {
     [ ...Details].reverse().map((items)=>(
        <div className="Patients-List"  key={items._id}>
          <div className="First-Patient">
          <a style={{textDecoration:"none"}} href={items._id}>            
            <div className="patient-id">
              <img src="/img/image 2.png" alt="" />
              <div>
                <h4>{items.Name}</h4>
                <p>Client ID : {items.Clientid}</p>
              </div>
            </div>
            <div>
              <h4>Contact</h4>
              <p>{items.Number}</p>
            </div>
            <div>
              <h4>check up</h4>
              <input maxLength={1} value={items.Treatment[0].Description} />
            </div>
                        <div>
              <h4>Date</h4>
              <p>{items.Treatment[0].Date}</p>
            </div>
            <div>
              <h4>Time</h4>
              <p>{items.Treatment[0].Time}</p>
            </div>
            </a>
          </div>
          
        </div>
       


  
        ))
    }

      


      </div>
    </>
  );
};

export default AllPatient;
