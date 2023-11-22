"use client";
import React, { useState } from "react";
import bcrypt from "bcryptjs";

const Signup = () => {
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Status, setStatus] = useState("");

  const myfun = async () => {
    if (Username == "" || Email == "" || Password == "") {
      alert("all field are required");
    } else if (Username != "" && Email != "" && Password != "") {
      const fetchdata = await fetch("/api/projects");
      const jsondata = await fetchdata.json();

      jsondata.map((items) => {
        if (Email === items.Email) {
          alert("User with this Email Already Exist");
          setStatus(false);
        } else {
          setStatus(true);
        }
      });

      if (Status === true) {
        const hashedPassword = await bcrypt.hash(Password, 10);

        const data = await fetch("/api/projects", {
          method: "POST",
          body: JSON.stringify({ Username, Email, Password: hashedPassword }),
        });

        alert("Successfully registered");

        window.location.href = "/Login";
      }
    }
  };

  return (
    <div>
      <div className="Signup-Page-BG">
        <div className="Logo">
          <img src="/img/Logo.png" alt="" />
        </div>
        <div className="Signup-Page-Input-1">
          <input
            type="text"
            value={Username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            name="name"
            id="name"
            className="input-field"
            placeholder="Username"
            autoComplete="off"
          />
          <label for="name" className="input-label">
            Username
          </label>
        </div>
        <div className="Signup-Page-Input-2">
          <input
            type="text"
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="name"
            id="name"
            className="input-field"
            placeholder="Email"
            autoComplete="off"
          />
          <label for="name" className="input-label">
            Email
          </label>
        </div>
        <div className="Signup-Page-Input-3">
          <input
            type="text"
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="name"
            id="name"
            className="input-field"
            placeholder="Password"
            autoComplete="off"
          />
          <label for="name" className="input-label">
            Password
          </label>
        </div>
        <div className="Signup-Button">
          <button onClick={myfun}>Login</button>
        </div>
        <div className="Signup-Page-Texts">
          <p>
            Limited Time Offer. Get Scaling & Polishing By Hygienist For Just
            £75. Incl. Book Now. Book Online Your Consultation Now Or Call Us
            Now. Friendly Dental Team
          </p>
          <h3>www.confidentdp.com</h3>
        </div>
      </div>
    </div>
  );
};

export default Signup;
