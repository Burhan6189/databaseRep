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
                  fontSize:"22px",
                  width: "600px",
                  height: "100px",
                  background:" rgb(174,197,238)",
                  background:" radial-gradient(circle, rgba(174,197,238,1) 0%, rgba(167,233,148,0.7903536414565826) 100%)"
                 
                },
              },
              error: {
                style: {
                  fontSize:"22px",
                  width: "600px",
                  height: "100px",
                  background:"rgb(162,135,135)",
                  background:" linear-gradient(0deg, rgba(162,135,135,0.6166841736694677) 0%, rgba(164,180,190,0.8547794117647058) 100%)"

                 
                },
              },
            }}

            position='buttom-right' />
          
          {children}
          
        </SessionProvider>
      </body>
    </html>
  );
}
