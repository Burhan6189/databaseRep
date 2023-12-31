

import React from "react";
import Navbar from "../components/Navbar/page";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";


const TodayAppointment = async () => {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect('/signin?callbackUrl=/dashboard')
  }



  return (
    <>
      <div className="Things-BG">
        <Navbar />
        <div className="Box-Flex">



          {/* this condition is for Super Admin and USer */}

          {(session.user.Role === "Super Admin" || session.user.Role === "User") && (
            <>
              <a
                style={{ textDecoration: "none" }}
                href="/dashboard/PatientDashboard/"
              >
                <div className="Box-01">
                  <div className="Icon-Circle">
                    <img src="/img/icon01.png" alt="" />
                  </div>
                  <div className="Box-Text">
                    <h3>New Patient</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </p>
                  </div>
                </div>
              </a>
            </>
          )

          }


          {/*  condition ends here */}


          <a href="/dashboard/Appoinments">
            <div className="Box-02">
              <div className="Icon-Circle">
                <img src="/img/icon02.png" alt="" />
              </div>
              <div className="Box-Text">
                <h3>Appointment</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="/dashboard/PatientDashboard/AllPatient"
          >
            <div className="Box-03">
              <div className="Icon-Circle">
                <img src="/img/icon01.png" alt="" />
              </div>
              <div className="Box-Text">
                <h3>Old Patient</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="Bottom-Text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <h3>www.fhgroupoc.com</h3>
        </div>
      </div>
    </>
  )





};

export default TodayAppointment;
