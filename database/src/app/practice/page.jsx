"use client"
import { useSession } from 'next-auth/react'
import React from 'react'



const page = () => {

    const { data: session } = useSession();

    if (session)
        return (

            <div>logged in   {session.user.name}
                {session.user.email}
                <img src={session.user.image} />

                <div>{JSON.stringify(session)}</div>
                {console.log(session)}
            </div>

        );
    return (
        <>

            <div>not logged in</div>
        </>
    )

}


export default page