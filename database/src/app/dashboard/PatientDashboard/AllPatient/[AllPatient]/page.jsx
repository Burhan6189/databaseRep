"use client";

import { useSession } from "next-auth/react";
import toast from "react-hot-toast";


const AllPatient = (props) => {
  // id declaration
  const id = props.params.AllPatient;
  const { data: session } = useSession();


  if (session?.user.Role === "Super Admin") {
    const deletefun = async () => {

      const data = await fetch("/api/patientdetails/" + id, {
        method: "DELETE",
        body: JSON.stringify({}),
      });
    }

    deletefun();

    if (deletefun) {
      toast.success("Patient data is deleted")
      window.location.href = "/dashboard/PatientDashboard/AllPatient";
    } else if (!data) {
      toast.error("Data does not Exist");
    } else {
      toast.error(" Something is wrong");
    }

  }

  else {

    window.location.href = "/dashboard/PatientDashboard/AllPatient";

  }


};

export default AllPatient;
