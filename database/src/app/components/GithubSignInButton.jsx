'use client'

import { redirect, useSearchParams } from 'next/navigation'
import { signIn, useSession } from 'next-auth/react'

import Button from './Button'

const GithubSignInButton = () => {
  const searchParams = useSearchParams()
  let callbackUrl = searchParams.get('callbackUrl')
  const {data: session} =  useSession();


  if(session?.status ==="authenticated"){
    router.replace("/dashboard");
  }

  else if(!session){
    callbackUrl="/dashboard";
  }
  
  return (
    <Button
      className='login-buttons'
      onClick={() => signIn('github', {callbackUrl}) }
    >
      
<img src="https://github.githubassets.com/assets/apple-touch-icon-144x144-b882e354c005.png" alt="" />

      Continue with Github
    </Button>
  )
}

export default GithubSignInButton