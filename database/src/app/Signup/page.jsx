import React from "react";

const Signup = () => {




  return (
    <div>
      <div className='Signup-Page-BG'>
        <div className='Logo'>

        <img  src="/img/Logo.png" alt="" />
        </div>
        <div className='Signup-Page-Input-1'>
          <input type="text" name='name' id='name' className='input-field' placeholder='Username' autoComplete='off' />
          <label for='name' className='input-label'>Username</label>
        </div>
        <div className='Signup-Page-Input-2'>
          <input type="text" name='name' id='name' className='input-field' placeholder='Email' autoComplete='off' />
          <label for='name' className='input-label'>Email</label>
        </div>
        <div className='Signup-Page-Input-3'>
          <input type="text" name='name' id='name' className='input-field' placeholder='Password' autoComplete='off' />
          <label for='name' className='input-label'>Password</label>
        </div>
        <div className="Signup-Button">
          <button>
     <a href="/Login">Login</a>
          </button>
        </div>
       <div className='Signup-Page-Texts'>
          <p>Limited Time Offer. Get Scaling & Polishing By Hygienist For Just £75. Incl. Book Now. Book Online Your Consultation Now Or Call Us Now. Friendly Dental Team</p>
          <h3>www.confidentdp.com</h3>
        </div>
      </div>
    </div>
  );
};

export default Signup;
