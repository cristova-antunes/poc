"use client"

import Footer from "../components/layout/footer"
import Navbar from "../components/layout/navbar"
import Head from "../components/layout/head"
import { Josefin_Sans } from "@next/font/google"
import { useSelectedLayoutSegment } from "next/navigation"
import "../styles/globals.css"
import styles from "../styles/layout/layout.module.css"

const josefin = Josefin_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let segment = useSelectedLayoutSegment()

  return (
    <html lang="en" className={josefin.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head />
      <body>
        <div className={`${styles.layout} ${segment == null && "is--home"}`}>
          {segment !== null && <Navbar />}
          <main>{children}</main>
          {segment !== null && <Footer />}
        </div>
      </body>
    </html>
  )
}
