'use client'
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import Popup from "reactjs-popup";

import {useSession } from 'next-auth/react';
import MySignUp from "../MySignUp";

const Navbar = () => {
  const { data: session } = useSession()
  
  return (
    <>
  
      <div className="Header">
        <div className="Header-Flex">
          {(window.location.href==="http://localhost:3000/dashboard/PatientDashboard/AllPatient")&&
           <a href="../">

           <div className="back-button">
             <IoMdArrowBack />
           </div>
           </a>
           ||
             <a href="./">

             <div className="back-button">
               <IoMdArrowBack />
             </div>
             </a>
          }

        
          <div>
            <img
              className="Logo"
              src="http://www.fhgroupoc.com/svg/fhlogog.svg"
              alt=""
            />
          </div>


          
          {(session)&&(
          <div className="User-Login">
          <Popup
                trigger={
                  <div>
                      <img className="User-Login-Pic" src={session.user.image || "/img/Super-Admin.png" }  />
                  </div>
                }
                position="bottom"
              >
                <div className="User-Options">
                <div> <MySignUp/></div>
                </div>
              </Popup>
         
            <div>
              <h3>{session.user.name || session.user.Username}  </h3>
              <p>{session.user.Role || "Checker"}</p>
            </div>
          </div> )


          ||


          (<div className="User-Login">
         
            <div>

              <h3>Loading...</h3>

            </div>
          </div> )
} 

    
        </div>
      </div>
    </>
  );
};



export default Navbar;
