'use client'
import { Inter } from 'next/font/google'

import './globals.css'
import React, { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })




export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching delay
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    fakeDataFetch();
  }, []);


  return(
      <div>
  
        <div>
            <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
        </div>
        </div>
 
   )

}
