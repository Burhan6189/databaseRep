import Navbar from "@/app/components/Navbar/page";
import React from "react";

const page = () => {
  return (
    <>
      <div className="add-member-bg">
        <Navbar />
        <div className="Profile-img">
        <h2>SET YOUR PROFILE</h2>
        <img src="https://i.pinimg.com/564x/cb/29/46/cb2946f0b931c43c05080ccd4a9f65f6.jpg" alt="" />
        <h3>Name Here</h3>
        </div>  
    </div>
    </>
  );
};

export default page;
