'use client'

import { Inter } from 'next/font/google'

import './globals.css'
import '../../public/css/style.css'
import { SessionProvider, useSession } from 'next-auth/react'


const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
 

  return(

      <html lang="en">
              
      <body className={inter.className}>
      <SessionProvider>
      {children}
     </SessionProvider>
      </body>
    </html>
  );
}
