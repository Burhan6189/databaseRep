import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";

const Navbar = async() => {
  const session = await getServerSession(authOptions)
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
