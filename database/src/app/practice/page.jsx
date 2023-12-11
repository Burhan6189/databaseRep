
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';


const page= async()=> {

    const session = await getServerSession(authOptions)
     if (session)
     return(
   
    <div>logged in   {session.user.name} 
    {session.user.email}
    <img src={session.user.image}/>

    
    
    
    </div>
    
    );
    return(

        <div>not logged in</div>

    )
  
}


export default page