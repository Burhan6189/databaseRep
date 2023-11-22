import React from "react";

const AllPatient = () => {
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
            <button>+</button>
          </div>
        </div>
        <div className="Patients-List">
          <div className="First-Patient">
            <div className="patient-id">
              <img src="/img/image 2.png" alt="" />
              <div>
                <h4>Bilal Saeed</h4>
                <p>ID : 123456789</p>
              </div>
            </div>
            <div>
              <h4>Phone Number</h4>
              <p>+92 320 550 0325</p>
            </div>
            <div>
              <h4>check up</h4>
              <p>Root Canal</p>
            </div>
            <div>
              <h4>Date</h4>
              <p>21 Nov 23</p>
            </div>
            <div>
              <h4>Time</h4>
              <p>07:00 pm</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllPatient;
