import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";


const TreatmentPlan = async () => {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect('/signin?callbackUrl=/TreatmentPlan')
  }
  return (
    <>
      <div className="Treatment-Plan-BG">
        <div className="Treatment-Plan-Flex">
          <div className="Logo">
            <img src="/img/Logo.png" alt="" />
          </div>
          <div className="teeth">
            <img src="/img/teeths.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TreatmentPlan;
