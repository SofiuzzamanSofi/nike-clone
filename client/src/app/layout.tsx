import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "../components/navbars"
import Footer from "../components/footers"
import './globals.css'

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
  return (
    <html lang="en">
      <body>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
