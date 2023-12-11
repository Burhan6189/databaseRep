'use client'
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import {useSession } from 'next-auth/react';

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
            <img className="User-Login-Pic" src={session.user.image} alt="" />
            <div>
              <h3>{session.user.name}</h3>
              <p>Super Admin</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
