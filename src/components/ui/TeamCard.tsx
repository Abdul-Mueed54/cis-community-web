"use client";

import { IconBrandGithub, IconBrandLinkedin, } from "@tabler/icons-react";
import { useRef, useState } from "react";

export const MemberCard = ({ member, size = "sm" }: { member: any, size?: "lg" | "md" | "wide" | "sm" }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  const [isHovered, setIsHovered] = useState(false);

  const avatarSizes = {
    lg: "w-32 h-32 md:w-36 md:h-36",
    md: "w-24 h-24 md:w-28 md:h-28",
    wide: "w-24 h-24",
    sm: "w-20 h-20"
  };

  const titleSizes = {
    lg: "text-2xl font-black text-slate-900",
    md: "text-xl font-bold text-slate-800",
    wide: "text-xl font-bold text-slate-800",
    sm: "text-base font-bold text-slate-800"
  };

  const photoUrl = typeof member.photo === 'object' && member.photo?.url
    ? member.photo.url
    : `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0b2447&color=fff&size=256`;
  const isHead = member.roleTier === 3;
  const isCoHead = member.roleTier === 4;
  const showBadge = isHead || isCoHead;
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  const cardBaseStyle =
    "relative bg-white/40 backdrop-blur-xl backdrop-saturate-150 rounded-2xl flex flex-col items-center text-center " +
    "border border-white/60 shadow-[0_8px_32px_rgba(15,23,42,0.08)] hover:shadow-[0_8px_40px_rgba(15,23,42,0.14)] " +
    "hover:bg-white/55 transition-colors duration-300";

  let cardSpecificStyle = "";
  if (size === "wide") {
    cardSpecificStyle = "border-[#0f766e]/40 w-full py-12 px-6";
  } else if (size === "lg") {
    cardSpecificStyle = "p-10";
  } else if (size === "md") {
    cardSpecificStyle = "p-8";
  } else {
    cardSpecificStyle = "p-6";
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: isHovered ? "transform 0.1s ease-out, box-shadow 0.2s ease-out, background-color 0.3s" : "transform 0.5s ease-out, box-shadow 0.2s ease-out, background-color 0.3s"
      }}
      className={`${cardBaseStyle} ${cardSpecificStyle}`}
    >

      {/* Absolute Badge for Heads / Co-Heads — glass pill instead of solid fill */}
      {showBadge && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0f766e]/70 backdrop-blur-md text-white px-5 py-1 text-xs font-bold rounded-full shadow-md whitespace-nowrap border border-white/30"
          style={{ transform: "translateZ(20px)" }}
        >
          {isHead ? 'Head' : 'Co-Head'}
        </div>
      )}

      {/* Profile Image — glass ring around the avatar */}
      <div
        className={`${avatarSizes[size]} rounded-full overflow-hidden mb-4 shadow-sm bg-white/30 backdrop-blur-md border border-white/50 p-0.5`}
        style={{ transform: "translateZ(10px)" }}
      >
        <div className="w-full h-full rounded-full overflow-hidden">
          <img src={photoUrl} alt={member.name} className="w-full h-full object-cover opacity-90 pointer-events-none" />
        </div>
      </div>

      {/* Text Info */}
      <h3 className={titleSizes[size]} style={{ transform: "translateZ(15px)" }}>
        {member.name}
      </h3>
      <p className="text-slate-600 font-medium text-sm mt-1" style={{ transform: "translateZ(10px)" }}>
        {member.role}
      </p>

      {/* Social Links — glass chip instead of bare icons */}
      <div className="flex gap-2 mt-4" style={{ transform: "translateZ(20px)" }}>
        <a href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white/40 backdrop-blur-sm border border-white/50 text-slate-500 hover:text-blue-600 hover:bg-white/70 transition-colors">
          <IconBrandLinkedin size={16} />
        </a>
        <a href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white/40 backdrop-blur-sm border border-white/50 text-slate-500 hover:text-blue-600 hover:bg-white/70 transition-colors">
          <IconBrandGithub size={16} />
        </a>
      </div>
    </div>
  );
};
