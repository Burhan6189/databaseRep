"use client";

import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { HiOutlinePencilAlt } from "react-icons/hi";
import Popup from "reactjs-popup";

const AllPatient = () => {
  const plusbtn = () => {
    return (window.location.href = "/dashboard/PatientDashboard");
  };

  const [Details, setDetails] = useState([]);

  const printdata = async () => {
    const data = await fetch("/api/patientdetails");
    const jsondata = await data.json();

    setDetails(jsondata);
  };

  useEffect(() => {
    printdata(), [];
  });

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
          <div className="Appointment-Input">
            <input type="text" placeholder="Search" />
          </div>
          <div className="Appointment-Button">
            <h4>New Appointments</h4>
            <button onClick={plusbtn}>+</button>
          </div>
        </div>
        <div className="All-Patient">
          {[...Details].reverse().map((items) => (
            <div className="Patients-List" key={items._id}>
              <div className="First-Patient">
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
                  <input
                    disabled
                    maxLength={1}
                    value={items.Treatment[0].Description}
                  />
                </div>
                <div>
                  <h4>Date</h4>
                  <p>{items.Treatment[0].Date}</p>
                </div>
                <div>
                  <h4>Time</h4>
                  <p>{items.Treatment[0].Time}</p>
                </div>
                <div className="Options">
                  <Popup
                    trigger={
                      <div className="Options">
                        <BsThreeDots />
                      </div>
                    }
                    position="left"
                  >
                    <div className="Options-For-Patient">
                      <div className="Option-Flex">
                        <div className="Delete">
                          <MdDelete className="Delete-Icon" />
                          <button>Delete Patient</button>
                        </div>

                        <a href={items._id}>
                          <div className="Edit">
                            <HiOutlinePencilAlt className="Edit-Icon" />
                            <button>Edit Patient</button>
                          </div>
                        </a>
                      </div>
                    </div>
                  </Popup>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllPatient;
