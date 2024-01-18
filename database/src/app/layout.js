'use client'

import { Inter } from 'next/font/google'

import './globals.css'
import '../../public/css/style.css'
import { SessionProvider, useSession } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'


const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {


  return (

    <html lang="en">

      <body className={inter.className}>
        <SessionProvider>
          <Toaster
            toastOptions={{
              success: {
                style: {
                  fontSize:"20px",
                  width: "500px",
                  height: "70px",
                 
                },
              },
              error: {
                style: {
                  fontSize:"20px",
                  width: "500px",
                  height: "70px",
                 
                },
              },
            }}

            position='top-center' />
          
          {children}
          
        </SessionProvider>
      </body>
    </html>
  );
}
