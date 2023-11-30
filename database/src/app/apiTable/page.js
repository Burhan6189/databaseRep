'use client'
import React, { useEffect, useState } from 'react'

const apiTable = () => {


 const [data, setdata]=useState([]);

const printdata = async ()=>{
 const pdata = await fetch("/api/patientdetails");
 const jsondata = await pdata.json();
 setdata(jsondata);
}

useEffect(()=>{printdata(), []})



  return (

    
        
        <table border={10}>
    <thead>
    <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Email</td>
        <td>Number</td>
        <td>Dateofbirth</td>
        <td>Bloodgroup</td>
        <td>Sex</td>
        <td>Memberstatus</td>
        <td>Dateofregistration</td>
        <td>Clientid</td>
        </tr>

    </thead>
    
    <tbody>
    {data.map((items)=>(
    
    <tr key={items._id}>

<td>{items._id}</td>
<td>{items.Name}</td>
<td>{items.Email}</td>
<td>{items.Number}</td>
<td>{items.Dateofbirth}</td>
<td>{items.Bloodgroup}</td>
<td>{items.Sex}</td>
<td>{items.Memberstatus}</td>
<td>{items.Dateofregistration}</td>
<td>{items.Clientid}</td>

    </tr>
           
    ))
}
    </tbody>
    
    
        </table>

  )
}

export default apiTable