"use client";

import { signOut } from "next-auth/react";
import { ImExit } from "react-icons/im";

import Button from "./Button";

const MySignUp = () => {
  return (
    <div>
      <Button className="log-out-btn" onClick={() => signOut()}>
      <ImExit className="Log-Out-Icon"/> Log out
      </Button>
    </div>
  );
};

export default MySignUp;
