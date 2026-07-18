"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { IconMenu2 } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = ["Home", "About", "Events", "Teams"]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[#0b2447]/80 backdrop-blur-md border-white/10 shadow-lg py-2"
          : "bg-[#0b2447] border-transparent py-4"
      }`}
    >
      <nav className="px-4 lg:px-8">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-6xl">

          {/* 1. LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/CIS-Community-Main-Logo.png"
              alt="Community logo"
              width={40}
              height={40}
              className="group-hover:scale-105 transition-transform duration-300"
              priority
            />
            <h1 className="text-white text-xl md:text-2xl font-black tracking-tight">
              CIS COMMUNITY
            </h1>
          </Link>

          {/* 2. DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-1">
            <ul className="flex flex-row space-x-1 font-medium mr-6">
              {links.map((link) => {
                const href = link === "Home" ? "/" : `/${link.toLowerCase()}`
                const isActive = pathname === href

                return (
                  <li key={link}>
                    <Link
                      href={href}
                      className={`px-4 py-2 rounded-full transition-all duration-200 text-sm font-semibold ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-slate-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link}
                    </Link>
                  </li>
                )
              })}
            </ul>

            <Button asChild className="bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full px-6 transition-all hover:scale-105 shadow-md shadow-blue-900/20">
              <Link href="/registration">Join Now</Link>
            </Button>
          </div>

          {/* 3. MOBILE MENU */}
          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                >
                  <IconMenu2 className="w-6 h-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="bg-[#0b2447] border-blue-900/50 text-white w-[300px]"
              >
                <SheetTitle className="text-white text-left font-bold text-xl border-b border-blue-900/50 pb-4 mb-4">
                  Navigation
                </SheetTitle>

                <nav className="flex flex-col gap-2 mt-8">
                  {links.map((link) => {
                    const href = link === "Home" ? "/" : `/${link.toLowerCase()}`
                    const isActive = pathname === href

                    return (
                      <Link
                        key={link}
                        href={href}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium px-4 py-3 rounded-xl transition-all duration-200 ${
                          isActive
                            ? "bg-white/10 text-white"
                            : "text-slate-400 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {link}
                      </Link>
                    )
                  })}

                  <div className="pt-4 mt-4 border-t border-blue-900/50">
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl py-6 transition-all">
                      <Link href="/registration" onClick={() => setIsOpen(false)}>Join Now</Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}
