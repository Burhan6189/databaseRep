"use client";


const AllPatient = async (props) => {


    // id declaration
const id =    props.params.AllPatient;
  
const data = await fetch("/api/patientdetails/"+id,{
method:"DELETE",
body:JSON.stringify({})
})

if(data){

  window.location.href=("/dashboard/PatientDashboard/AllPatient");  
}
else if(!data){
  alert("Data does not Exist")
}
else{
  alert(" Something is wrong")
}

};

export default AllPatient;
