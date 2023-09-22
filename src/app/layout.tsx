'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Script from 'next/script'
import { SessionProvider } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
        <Navbar />
        {children}
        <Script
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=c3bfb8621265a174fb2a9da4c906d339&libraries=services,clusterer&autoload=false"
        />
        </SessionProvider>
      
      </body>
    </html>
  )
}
