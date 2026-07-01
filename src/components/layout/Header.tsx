"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { IconMenu2 } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const links = ["Home", "About", "Events", "Teams", "Registration"]

  return (
    <header className="shadow sticky z-50 top-0 transition-all duration-300">
      <nav className="bg-[#1e3a8a] border-gray-200 px-4 lg:px-8 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl">
          {/* 1. FIXED LOGO LAYOUT (Horizontal Flex) */}
          <Link href="/" className="flex items-center gap-4 group">
            <Image
              src="/CIS-Community-Main-Logo.png" // Added your /Logo/ folder path
              alt="Community logo"
              width={50}
              height={50}
              className="group-hover:scale-105 transition-transform duration-300"
              priority
            />
            <h1 className="text-white text-2xl md:text-3xl font-bold tracking-tight">
              CIS COMMUNITY
            </h1>
          </Link>

          {/* 2. DESKTOP MENU */}
          <div className="hidden lg:flex justify-between items-center w-auto">
            <ul className="flex flex-row space-x-8 font-medium">
              {links.map((link) => {
                const href = link === "Home" ? "/" : `/${link.toLowerCase()}`
                const isActive = pathname === href

                return (
                  <li key={link}>
                    <Link
                      href={href}
                      className={`py-2 duration-300 ease-in-out transition-all border-b-2 ${
                        isActive
                          ? "text-yellow-400 border-yellow-400"
                          : "text-white border-transparent hover:text-yellow-200 hover:border-yellow-200/50"
                      }`}
                    >
                      {link}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* 3. MOBILE MENU (Shadcn Slide-out Sheet) */}
          <div className="lg:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-blue-800 hover:text-yellow-400"
                >
                  <IconMenu2 className="w-8 h-8" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="bg-[#0f172a] border-slate-800 text-white w-[300px] sm:w-[350px]"
              >
                <SheetTitle className="text-white text-left font-bold text-xl border-b border-slate-800 pb-4 mb-4">
                  Navigation
                </SheetTitle>

                <nav className="flex flex-col gap-3 mt-8">
                  {links.map((link) => {
                    const href = link === "Home" ? "/" : `/${link.toLowerCase()}`
                    const isActive = pathname === href

                    return (
                      <Link
                        key={link}
                        href={href}
                        onClick={() => setIsOpen(false)} // Auto-close when clicked
                        className={`text-lg font-medium px-4 py-3 rounded-xl transition-all duration-200 ${
                          isActive
                            ? "bg-blue-600/20 text-yellow-400 border border-blue-500/30"
                            : "text-slate-300 hover:bg-slate-800 hover:text-white"
                        }`}
                      >
                        {link}
                      </Link>
                    )
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}
