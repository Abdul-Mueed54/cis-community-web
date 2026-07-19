import Link from "next/link"
import Image from "next/image"
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube } from '@tabler/icons-react'

export default function Footer() {
  return (
    <footer className="bg-[#0b2447] text-white border-t border-blue-900/50 pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">

          {/* Column 1: Branding */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/CIS-Community-Main-Logo.png"
                alt="Community logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </Link>
            <h3 className="text-lg font-bold mb-2">CIS Community NEDUET</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              We're a student-run community for the CIS department at NED University.
              Building, coding, and growing together since 2024.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/events" className="text-slate-400 hover:text-white transition-colors">Events</Link>
              </li>
              <li>
                <Link href="/teams" className="text-slate-400 hover:text-white transition-colors">Our Team</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Resources</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <Link href="/registration" className="text-slate-400 hover:text-white transition-colors">Join the Community</Link>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Code of Conduct</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Hackathon Rules</a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Contact Support</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-6 gap-4">
          <div className="text-xs text-blue-200 text-center md:text-left font-medium">
            © {new Date().getFullYear()} CISCommunityNEDUET. All rights reserved.
          </div>

          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/ciscommunity.official/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/5 rounded-full hover:bg-[#E1306C] hover:text-white text-slate-400 transition-all duration-300 group"
              aria-label="Instagram"
            >
              <IconBrandInstagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.facebook.com/people/CIS-Community-NED/61577627304848"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/5 rounded-full hover:bg-[#1877F2] hover:text-white text-slate-400 transition-all duration-300 group"
              aria-label="Facebook"
            >
              <IconBrandFacebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/company/cis-community-neduet/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/5 rounded-full hover:bg-[#0A66C2] hover:text-white text-slate-400 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.youtube.com/@CISCommunityNEDUET"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/5 rounded-full hover:bg-[#FF0000] hover:text-white text-slate-400 transition-all duration-300 group"
              aria-label="YouTube"
            >
              <IconBrandYoutube className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
