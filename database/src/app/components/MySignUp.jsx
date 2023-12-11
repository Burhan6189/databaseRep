'use client'

import { signOut } from 'next-auth/react'

import Button from './Button'

const MySignUp = () => {
 

  return (
    <div><Button
      className='w-full'
      onClick={() => signOut()}
    >
      Logout Now
    </Button>
    
    </div>
    
  )
}

export default MySignUp