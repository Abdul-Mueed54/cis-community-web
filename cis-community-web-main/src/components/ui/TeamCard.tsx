"use client";

import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";

export const TeamCard = ({ member }: { member: any }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useMotionTemplate`${mouseYSpring}deg`;
  const rotateY = useMotionTemplate`${mouseXSpring}deg`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct * 20); // max rotation 20 deg
    y.set(yPct * -20);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full h-[400px] rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col items-center p-8 group cursor-pointer"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-100 shadow-lg mb-6 relative"
      >
        <Image 
          src={member.photo?.url || "/placeholder-user.jpg"} 
          alt={member.name} 
          fill
          className="object-cover"
        />
      </div>

      <div style={{ transform: "translateZ(40px)" }} className="text-center">
        <h3 className="text-2xl font-black text-slate-800">{member.name}</h3>
        <p className="text-emerald-600 font-bold tracking-wide uppercase text-sm mt-1 mb-4">{member.role}</p>
      </div>

      <div 
        style={{ transform: "translateZ(30px)" }}
        className="flex gap-4 mt-auto"
      >
        {member.linkedin && (
          <a href={member.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-[#0A66C2] hover:text-white transition-colors shadow-sm">
            <IconBrandLinkedin size={20} />
          </a>
        )}
        {member.github && (
          <a href={member.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white transition-colors shadow-sm">
            <IconBrandGithub size={20} />
          </a>
        )}
      </div>

      {/* Gloss effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-transparent via-white/50 to-transparent pointer-events-none transition-opacity duration-500" style={{ transform: "translateZ(60px)" }} />
    </motion.div>
  );
};
