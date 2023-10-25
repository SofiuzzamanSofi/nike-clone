import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "../components/navbars"
import Footer from "../components/footers"
import './globals.css'
import dynamic from "next/dynamic";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nike Shoes',
  description: 'All Over the World Nike Shoes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // # responsive design 
  // mobile 0-1023
  // tablet/pc < 1024 -1024-1920 >


  const DynamicComponent = dynamic(() => import("../components/dynamic/Dynamic"), {
    ssr: false,
  });

  return (
    <html lang="en">
      <body>
        <main>
          <DynamicComponent />
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
