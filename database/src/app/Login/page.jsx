
'use client'
import React, { useState } from "react";
import bcrypt from "bcryptjs";
import { setCookie } from "cookies-next";

const Login = () => {

  const [Username, setUsername]=useState("");
  const [Password, setPassword]=useState("");
  var [Status, setStatus]= useState("");


const myfun= async ()=>{


  const fetchdata = await fetch("/api/projects");
  const jsondata = await fetchdata.json();
  
  if(Username=="" || Password==""){

    alert("Both Fields are Required");
  }

  else if(Username!="" && Password!=""){


    jsondata.map((items=>{

      if(Username == items.Username ){


        bcrypt.compare(Password, items.Password).then((res) => {
       if(res){
        setCookie('Patient');
          setStatus("true");
          alert("success");
              window.location.href=("/dashboard");  
            }
            else{
              alert("Incorrect Password");
            }
      });
       
      }

      else if(Username != items.Username || Password != items.Password){
        
        setStatus("false");
      }
    }));

     if(Status=="false"){
      alert("Incorrect Credentials");
      window.location.href=("/Login");
     }
    
    }
  }


  return (
    <div>
      <div className='Login-Page-BG'>
        <div className='Logo' >

        <img src="http://www.fhgroupoc.com/svg/fhlogog.svg" alt="" />
        </div>
        <div className='Login-Page-Input-1'>
          <input type="text" value={Username} onChange={(e)=>{setUsername(e.target.value)}} name='name' id='name' className='input-field' placeholder='Username' autoComplete='off' />
          <label for='name' className='input-label'>Username</label>
        </div>
        <div className='Login-Page-Input-2'>
          <input type="password" value={Password} onChange={(e)=>{setPassword(e.target.value)}} name='password' id='password' className='input-field' placeholder='Paswword' autoComplete='off' />
          <label for='password' className='input-label'>Password</label>
        </div>

        <div className="Login-Button">

          <button onClick={myfun}>
            Login
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
