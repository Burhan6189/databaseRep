
'use client'
import React, { useEffect, useState } from "react";
import { setCookie } from "cookies-next";
import GoogleSignInButton from "../components/GoogleSignInButton";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import GithubSignInButton from "../components/GithubSignInButton";


const Login = () => {

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");


  const router = useRouter();
  const {data: session} = useSession();

useEffect(()=>{
  if(session)
    router.replace("/dashboard");
},[session, router])



  const myfun = async () => {


    if (Username == "" || Password == "") {

      alert("Both Fields are Required");
    }

    else if (Username != "" && Password != "") {

      const res = await signIn('credentials', {
        redirect: false,
        Username,
        Password
      });

      if (res?.error) {

        alert("wrong credentials")
      }
      if (res?.url) {
      router.replace("/dashboard") }
      
    }

  }
  

  if(!session)
  return (
    <div>

      <div className='Login-Page-BG'>

        <div className='Logo' >

          <img src="http://www.fhgroupoc.com/svg/fhlogog.svg" alt="" />
        </div>
        <div className='Login-Page-Input-1'>
          <input type="text" value={Username} onChange={(e) => { setUsername(e.target.value) }} name='name' id='name' className='input-field' placeholder='Username' autoComplete='off' />
          <label for='name' className='input-label'>Username</label>
        </div>
        <div className='Login-Page-Input-2'>
          <input type="password" value={Password} onChange={(e) => { setPassword(e.target.value) }} name='password' id='password' className='input-field' placeholder='Paswword' autoComplete='off' />
          <label for='password' className='input-label'>Password</label>
        </div>
        <div className="Login-Buttons">
        <div className="Login-Buttons"><GoogleSignInButton /></div>
      <div className="Login-Buttons"><GithubSignInButton /></div>
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
