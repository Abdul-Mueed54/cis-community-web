import Link from "next/link"
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube } from '@tabler/icons-react';
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-[#1e3a8a] text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/10 pb-8">
          <div className="mb-6 md:mb-0 flex items-center hover:opacity-80 transition-opacity">
            <Link href="/">
              <Image
                src="/CIS-Community-Main-Logo.png"
                alt="Community logo"
                width={170}
                height={170}
                className="object-contain"
              />
            </Link>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs md:text-sm text-blue-100/80 text-center md:text-left">
            © {new Date().getFullYear()} CISCommunityNEDUET. All rights reserved.
          </div>

          <div className="flex space-x-6 justify-center">
            <a
              href="https://www.instagram.com/ciscommunity.official/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 group"
            >
              <IconBrandInstagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61577627304848"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 group"
            >
              <IconBrandFacebook className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/company/cis-community-neduet/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 group"
            >
              <IconBrandLinkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.youtube.com/@CISCommunityNEDUET"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 group"
            >
              <IconBrandYoutube className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
