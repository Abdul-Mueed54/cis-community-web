"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { IconUserPlus } from "@tabler/icons-react";

export const StickyJoinWidget = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show widget after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-0 w-full px-6 md:hidden z-40"
        >
          <Link href="/registration" className="block">
            <div className="bg-[#1e3a8a]/90 backdrop-blur-xl border border-blue-400/30 shadow-2xl shadow-blue-900/50 rounded-2xl p-4 flex items-center justify-between text-white active:scale-95 transition-transform">
              <div>
                <p className="font-bold text-sm">Join the Community</p>
                <p className="text-xs text-blue-200">Connect with CIS students</p>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <IconUserPlus size={20} />
              </div>
            </div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
