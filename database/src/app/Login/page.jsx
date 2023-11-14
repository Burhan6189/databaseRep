import React from "react";
const Login = () => {
  return (
    <div>
      <div className='Login-Page-BG'>
        <div className='Logo' >

        <img src="/img/Logo.png" alt="" />
        </div>
        <div className='Login-Page-Input-1'>
          <input type="text" name='name' id='name' className='input-field' placeholder='Username' autoComplete='off' />
          <label for='name' className='input-label'>Username</label>
        </div>
        <div className='Login-Page-Input-2'>
          <input type="password" name='password' id='password' className='input-field' placeholder='Paswword' autoComplete='off' />
          <label for='password' className='input-label'>Password</label>
        </div>
        <div className="Login-Button">
          <button>
            <a href="/Login">Login</a>
          </button>
        </div>
        <div className="Login-Page-Texts">
          <p>
            Limited Time Offer. Get Scaling & Polishing By Hygienist for Just
            £75. Incl. Book Now. Book Online Your Consultation Now Or Call Us
            Now. Friendly Dental Team
          </p>
          <h3>www.confidentdp.com</h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
