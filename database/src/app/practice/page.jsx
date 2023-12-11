"use client"
import React from 'react'
import {useSession } from 'next-auth/react';


const page= ()=> {

    const { data: session } = useSession()
     if (session)
     return(
   
    <div>logged in   {session.user.name} 
    {session.user.email}
    <img src={session.user.image}/>

    
    
    <div>{JSON.stringify(session)}</div>
    </div>
    
    );
    return(
<>
       
        <div>not logged in</div>
        </>
    )
  
}


export default page