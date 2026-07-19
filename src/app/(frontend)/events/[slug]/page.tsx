import React from 'react';
import Image from 'next/image';
import { IconCalendarEvent,
  IconMapPin,
  IconTicket,
  IconUsers,
  IconPhoto,
  IconBrandYoutube,
  IconTrophy,
  IconArrowRight,
  IconHandMove
} from '@tabler/icons-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// ==========================================
// MOCK DATA
// ==========================================
const mockEventData = {
  title: "Annual CIS Hackathon",
  date: "March 15th, 2026",
  time: "09:00 AM - 09:00 PM",
  venue: "CIS Department Lab 1 & 2",
  tag: "Hackathon",

  // 🔥 Toggle between 'upcoming' and 'completed' 🔥
  status: "completed",

  // --- PRE-EVENT CONTENT ---
  about: "Test your coding speed, algorithmic logic, and product building skills against the sharpest minds in the university. Build a full-stack application in 12 hours to solve real-world campus problems.",
  registrationLink: "#",
  // New: Featured Image for publicity
  featuredImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",

  // --- POST-EVENT CONTENT ---
  insights: "The Annual Hackathon brought together over 120 students. We saw incredible projects ranging from AI-powered attendance systems to decentralized campus marketplaces. The energy was unmatched, and the winning team managed to deploy a fully functional mobile app in just 12 hours.",
  winners: "Team CodeBlooded (Batch '23)",
  videoLink: "#",
  // New: Main highlight picture for the recap
  insightsImage:
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop",
  gallery: [
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1528605105345-5344ea20e269?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop"
  ]
};

export default function EventDynamicPage() {
  const event = mockEventData;
  const isCompleted = event.status === 'completed';

  return (
    <div className="min-h-screen relative font-sans pb-24 text-slate-800">

      {/* BACKGROUND ORBS */}
      <div className="fixed inset-0 -z-10 bg-slate-50 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[20rem] h-[20rem] lg:w-[40rem] lg:h-[40rem] rounded-full bg-blue-300/30 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[20rem] h-[20rem] lg:w-[40rem] lg:h-[40rem] rounded-full bg-indigo-300/20 blur-[120px]" />
      </div>

      <main className="pt-32 px-6 max-w-5xl mx-auto space-y-12">
        <section className="rounded-2xl p-8 md:p-12 shadow-[0_8px_32px_rgba(15,23,42,0.06)] border border-white/50 bg-white/40 backdrop-blur-2xl backdrop-saturate-150">
          <div className="flex flex-col md:flex-row gap-10 justify-between items-start">
            <div className="space-y-6 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="outline" className="bg-white/60 border-slate-200 text-blue-600 px-3 py-1">
                  {event.tag}
                </Badge>
                {isCompleted ? (
                  <Badge className="bg-slate-800 text-white hover:bg-slate-800 px-3 py-1">Archived</Badge>
                ) : (
                  <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-0 px-3 py-1">Registration Live</Badge>
                )}
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {event.title}
              </h1>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <IconCalendarEvent size={20} className="text-blue-500" />
                  <span>{event.date} • {event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconMapPin size={20} className="text-blue-500" />
                  <span>{event.venue}</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto flex flex-col gap-4">
              {!isCompleted ? (
                <Button size="lg" className="w-full bg-[#0b2447] hover:bg-blue-600 text-white rounded-xl py-8 px-10 text-lg font-bold shadow-xl transition-all hover:-translate-y-1">
                  <IconTicket className="mr-2 h-6 w-6" /> RSVP Now
                </Button>
              ) : (
                <Button size="lg" variant="outline" className="w-full bg-white/60 border-slate-300 text-slate-700 rounded-xl py-8 px-10 text-lg font-bold hover:bg-white transition-all">
                  <IconBrandYoutube className="mr-2 h-6 w-6 text-red-500" /> Watch Recording
                </Button>
              )}
            </div>
          </div>
        </section>
        {!isCompleted ? (
          /* --- PRE-EVENT: THE HYPE --- */
          <section className="grid md:grid-cols-3 lg:grid-cols-1 grid-rows-2 gap-8">
            <div className="w-full h-[300px] md:h-[450px] row-span-10 rounded-2xl overflow-hidden shadow-sm border border-white/50 relative min-h-[250px] md:min-h-full">
              <Image
                src={event.featuredImage}
                alt="Event Publicity Banner"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
            <div className="md:col-span-2 rounded-2xl p-8 md:p-10 shadow-[0_8px_32px_rgba(15,23,42,0.06)] border border-white/50 bg-white/25 backdrop-blur-2xl backdrop-saturate-150">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <IconUsers className="text-blue-500" /> About the Event
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {event.about}
              </p>
            </div>

            {/* UPCOMING FEATURED IMAGE */}
          </section>

        ) : (
          /* --- POST-EVENT: THE LEGACY --- */
          <div className="space-y-12">
            <section className="rounded-2xl p-8 md:p-10 shadow-[0_8px_32px_rgba(15,23,42,0.06)] border border-white/50 bg-white/40 backdrop-blur-2xl backdrop-saturate-150">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <IconTrophy className="text-yellow-500" /> Event Insights
              </h2>

              {/* BIG INSIGHTS HERO IMAGE */}
              <div className="w-full h-[300px] md:h-[450px] relative rounded-xl overflow-hidden mb-8 shadow-sm border border-white/60">
                <Image
                  src={event.insightsImage}
                  alt="Event Highlight"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>

              <div className="gap-8 items-start">
                <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed">
                  <p>{event.insights}</p>
                </div>
              </div>
            </section>

            {/* Photo Gallery - Horizontal Scroll Snap */}
            <section className="rounded-2xl py-10 shadow-[0_8px_32px_rgba(15,23,42,0.06)] border border-white/50 bg-white/25 backdrop-blur-2xl backdrop-saturate-150 overflow-hidden relative">
              <div className="px-8 md:px-12 mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                  <IconPhoto className="text-blue-500" /> Event Gallery
                </h2>
                {/* Desktop Clue */}
                <span className="text-sm font-medium text-slate-400 hidden md:flex items-center gap-2">
                  Scroll to view <IconArrowRight size={16}/>
                </span>
              </div>

              {/* MOBILE SWIPE CLUE */}
              <div className="md:hidden px-8 mb-4 flex items-center gap-2 text-blue-500 text-sm font-bold animate-pulse">
                <IconHandMove size={18} />
                <span>Swipe to explore gallery</span>
              </div>

              <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-8 md:px-12 pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {event.gallery.map((img, i) => (
                  <div
                    key={i}
                    className="relative snap-center shrink-0 w-[85vw] md:w-[400px] h-[280px] rounded-2xl overflow-hidden shadow-sm border border-white/60 bg-slate-100 group"
                  >
                    <Image
                      src={img}
                      alt={`Gallery image ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 85vw, 400px"
                    />
                  </div>
                ))}
              </div>
            </section>

          </div>
        )}
      </main>
    </div>
  );
}