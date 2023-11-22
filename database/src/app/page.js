import React from "react";

const page = () => {
  return (
    <div className="Login-Signup-Page-BG">
      <div  className="Logo"> 

      <img src="http://www.fhgroupoc.com/svg/fhlogog.svg" alt="" />
      </div>
      <div className="Login-Signup-Page-Button">
        <h3>WELCOME</h3>
        <button>
          <a href="/Login">Login</a>
        </button>
        <button>
          <a href="/Signup">Sign up</a>
        </button>
      </div>
      <div className="Login-Signup-Page-Texts">
        <p>
          Limited Time Offer. Get Scaling & Polishing By Hygienist For Just £75.
          Incl. Book Now. Book Online Your Consultation Now Or Call Us Now.
          Friendly Dental Team
        </p>
        <h3>www.confidentdp.com</h3>
      </div>
    </div>
  );
};

export default page;
