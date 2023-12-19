'use client'
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import Popup from "reactjs-popup";

import {useSession } from 'next-auth/react';
import MySignUp from "../MySignUp";

const Navbar = () => {
  const { data: session } = useSession()
  if (session)
  return (
    <>
  
      <div className="Header">
        <div className="Header-Flex">
          <a href="./">
          <div className="back-button">
            <IoMdArrowBack />
          </div>
          </a>
          <div>
            <img
              className="Logo"
              src="http://www.fhgroupoc.com/svg/fhlogog.svg"
              alt=""
            />
          </div>
          
          <div className="User-Login">
          <Popup
                trigger={
                  <div>
                      <img className="User-Login-Pic" src={session.user.image || "/img/Super-Admin.png" } alt="user image" />
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
          </div>
    
        </div>
      </div>
    </>
  );
};

export default Navbar;
