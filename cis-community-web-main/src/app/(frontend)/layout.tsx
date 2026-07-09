import "./global.css"
import React from "react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Geist } from "next/font/google"
import { cn } from "@/lib/utils"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

export const metadata = {
  description: "A blank template using Payload in a Next.js app.",
  title: "CIS Community NEDUET",
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body className="overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
