"use client";

import { useSession } from "next-auth/react";


const AllPatient = (props) => {
  // id declaration
  const id = props.params.AllPatient;
  const {data: session}= useSession();


  if(session?.user.Role === "Super Admin"){
    const deletefun = async()=>{

      const data = await fetch("/api/patientdetails/" + id, {
        method: "DELETE",
        body: JSON.stringify({}),
      });
    }

    deletefun();
  
    if (deletefun) {
      window.location.href = "/dashboard/PatientDashboard/AllPatient";
    } else if (!data) {
      alert("Data does not Exist");
    } else {
      alert(" Something is wrong");
    }

  }

  else {
    
    window.location.href = "/dashboard/PatientDashboard/AllPatient";

  }


};

export default AllPatient;
