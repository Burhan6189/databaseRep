"use client" 

import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { IoMdArrowBack } from "react-icons/io";
import Popup from "reactjs-popup";
import Navbar from "@/app/components/Navbar/page";
import { useSession } from "next-auth/react";

const AllPatient = () => {
  const plusbtn = () => {
    return (window.location.href = "/dashboard/PatientDashboard");
  };

  const [Details, setDetails] = useState([]);

  const [Record, setRecord] = useState(Details);

  const printdata = async () => {
    const data = await fetch("/api/patientdetails");
    const jsondata = await data.json();

    setDetails(jsondata);
  };

  useEffect(() => {
    printdata();
  }, []);

  const Filter = (event) => {
    setRecord(
      Details.filter(
        (f) =>
          f.Name.toLowerCase().includes(event.target.value) ||
          f.Clientid.toLowerCase().includes(event.target.value) ||
          f.Number.toLowerCase().includes(event.target.value)
      )
    );
  };

  useEffect(() => {
    setRecord([...Details]);
  }, [Details]);


  const { data: session } = useSession()
  if (session?.user.name==="Burhan Shabbir") 
  return (
    <>
      <div className="All-Patient-BG">
        <Navbar />
        <div className="All-Patient-Header">
          <h2>All Patients</h2>
          <div className="Appointment-Input">
            <input type="text" placeholder="Search" onChange={Filter} />
          </div>
          <div className="Appointment-Button">
            <h4>New Appointments</h4>
            <button onClick={plusbtn}>+</button>
          </div>
        </div>
        <div className="All-Patient">
          {[...Record].reverse().map((items) => (
            <div className="Patients-List" key={items._id}>
              <div className="First-Patient">
                <div className="patient-id">
                  <img src="/img/image 2.png" alt="" />
                  <div>
                    <h4>{items.Name}</h4>
                    <p>ID : {items.Clientid}</p>
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
                        <a
                          href={
                            "/dashboard/PatientDashboard/AllPatient/" +
                            items._id
                          }
                        >
                          <div className="Delete">
                            <MdDelete className="Delete-Icon" />
                            <button>Delete Patient</button>
                          </div>
                        </a>

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
  )
                        
else if (session?.user.name==="UmerAfzal")

  return(

    <>
    <div className="All-Patient-BG">
      <Navbar />
      <div className="All-Patient-Header">
        <h2>All Patients</h2>
        <div className="Appointment-Input">
          <input type="text" placeholder="Search" onChange={Filter} />
        </div>
        <div className="Appointment-Button">
          <h4>New Appointments</h4>
          <button onClick={plusbtn}>+</button>
        </div>
      </div>
      <div className="All-Patient">
        {[...Record].reverse().map((items) => (
          <div className="Patients-List" key={items._id}>
            <div className="First-Patient">
              <div className="patient-id">
                <img src="/img/image 2.png" alt="" />
                <div>
                  <h4>{items.Name}</h4>
                  <p>ID : {items.Clientid}</p>
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
                      <a
                        href={
                          "/dashboard/PatientDashboard/AllPatient/" +
                          items._id
                        }
                      >
                        <div className="Delete">
                          <MdDelete className="Delete-Icon" />
                          <button>Delete Patient</button>
                        </div>
                      </a>

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
  )

  return(
    <>
    <div> nothing is available</div>
    </>
  )



};

export default AllPatient;
