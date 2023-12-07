import React from "react";
import { IoMdArrowBack } from "react-icons/io";

const Navbar = () => {
  
  return (
    <>
      <div className="Header">
        <div className="Header-Flex">
        <a href={"./"}>  <div className="back-button">
            <IoMdArrowBack />
          </div> </a>
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
    </>
  );
};

export default Navbar;
