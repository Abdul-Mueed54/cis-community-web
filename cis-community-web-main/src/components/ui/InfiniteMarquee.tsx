"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const InfiniteMarquee = () => {
  // We'll use placeholders for now. 
  // In a real scenario, these would be photos of hackathons, members, etc.
  const images = [
    "/placeholder-user.jpg",
    "/placeholder-user.jpg",
    "/placeholder-user.jpg",
    "/placeholder-user.jpg",
    "/placeholder-user.jpg",
    "/placeholder-user.jpg",
  ];

  // Duplicate the array so the loop is seamless
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative w-full overflow-hidden bg-[#0a1c3a] py-8 border-y border-blue-900/50">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b2447] via-transparent to-[#0b2447] z-10 pointer-events-none w-full h-full" />
      
      <motion.div
        className="flex gap-6 w-max"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          ease: "linear",
          duration: 30, // Adjust speed here
          repeat: Infinity,
        }}
      >
        {duplicatedImages.map((src, index) => (
          <div 
            key={index} 
            className="relative w-[300px] h-[200px] md:w-[400px] md:h-[250px] rounded-2xl overflow-hidden border border-white/10 shrink-0 opacity-80 hover:opacity-100 transition-opacity"
          >
            <div className="absolute inset-0 bg-[#1e3a8a]/20 mix-blend-overlay z-10" />
            <Image
              src={src}
              alt={`Event photo ${index}`}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
