// import { headers as getHeaders } from "next/headers"
// import Image from "next/image"
// import { getPayload } from "payload"
// import React from "react"
// import { fileURLToPath } from "url"

// import config from "@/payload.config"
// import "./global.css"
// import ContactForm from "@/components/forms/ContactUs"

// export default async function HomePage() {
//   const headers = await getHeaders()
//   const payloadConfig = await config
//   const payload = await getPayload({ config: payloadConfig })
//   const { user } = await payload.auth({ headers })

//   const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

//   return (
//     <div>
//       <ContactForm />
//     </div>
//   )
// }
import Link from "next/link";
import configPromise from '@payload-config'
import ContactForm from "@/components/forms/ContactUs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  IconCalendarEvent,
  IconArrowRight,
  IconAlertCircle,
  IconUsers,
  IconCode,
  IconBriefcase,
  IconMicrophone,
  IconUserPlus,
  IconNetwork,
  IconRocket
} from "@tabler/icons-react";
import { getPayload } from "payload";

export default async function HomePage() {
  // 1. Boot up the Payload database connection
  const   payload = await getPayload({ config: configPromise })

  // 2. Ask the database for the newest events
  const eventsRequest = await payload.find({
    collection: 'events',
    limit: 3, // Only get 2 events for the homepage
    sort: '-createdAt', // Newest first
  })

  // 3. This is your live data!
  const liveEvents = eventsRequest.docs
  // =========================================================================
  // 🔥 API INTEGRATION POINT (PAYLOAD CMS) 🔥
  // Later, replace these static arrays with:
  // const eventReq = await fetch('http://localhost:3000/api/events?limit=2');
  // const eventData = await eventReq.json();
  // =========================================================================

  const featuredEvents = [
    {
      id: "1",
      title: "Web3 & Blockchain Seminar",
      date: "March 8th, 2026",
      description: "Explore the decentralized future with industry leaders from Karachi's tech ecosystem. Learn about smart contracts and decentralized apps.",
      tag: "Seminar",
    },
    {
      id: "2",
      title: "Annual CIS Hackathon",
      date: "March 15th, 2026",
      description: "Test your coding speed, algorithmic logic, and product building skills against the sharpest minds in the university. Prizes up to 50k PKR.",
      tag: "Competition",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-blue-900 selection:text-white">
      <main className="flex-grow">

        {/* 1. PREMIUM HERO SECTION */}
        <section className="relative pt-32 pb-40 px-6 overflow-hidden bg-slate-950">
          {/* Abstract Background Gradients */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full"></div>
            <div className="absolute top-40 -left-20 w-[500px] h-[500px] bg-sky-400/10 blur-[100px] rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8 mt-10">
            <Badge variant="outline" className="border-blue-400/30 text-blue-300 bg-blue-950/50 px-4 py-1.5 text-sm uppercase tracking-widest backdrop-blur-sm">
              CISans: Unite for Excellence!
            </Badge>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white">
              Bridging Minds & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                Technology
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
              Become the driving force behind the Computer and Information Systems community. Of CIS, For CIS, By CIS.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-6 rounded-full shadow-lg shadow-blue-900/20 transition-all hover:scale-105">
                <Link href="/registration">Join Community</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-700 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold px-10 py-6 rounded-full backdrop-blur-sm transition-all">
                <Link href="#events">Explore Events</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 2. FLOATING STATS BAR (Glassmorphism overlap) */}
        <div className="max-w-6xl mx-auto px-6 relative z-20 -mt-16">
          <div className="bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-2xl shadow-slate-200/50 rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-3 bg-blue-50 rounded-2xl text-blue-600"><IconUsers className="w-6 h-6" /></div>
              <p className="text-3xl font-black text-slate-900">40+</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Members</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-3 bg-sky-50 rounded-2xl text-sky-600"><IconCode className="w-6 h-6" /></div>
              <p className="text-3xl font-black text-slate-900">4</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Hackathons</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 border-none md:border-solid">
              <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600"><IconBriefcase className="w-6 h-6" /></div>
              <p className="text-3xl font-black text-slate-900">6</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Projects</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="p-3 bg-violet-50 rounded-2xl text-violet-600"><IconMicrophone className="w-6 h-6" /></div>
              <p className="text-3xl font-black text-slate-900">12</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Seminars</p>
            </div>
          </div>
        </div>

        {/* 3. HOW TO JOIN SECTION */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4">How to join</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full opacity-50"></div>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting dashed line (Hidden on mobile) */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-slate-300 -z-10"></div>

            {/* Step 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-xl shadow-slate-200/50 mb-6 group-hover:scale-110 group-hover:border-blue-100 transition-all duration-300 relative">
                <span className="absolute -top-2 -left-2 w-8 h-8 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center border-4 border-slate-50">1</span>
                <IconUserPlus className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Register</h3>
              <p className="text-slate-500 font-medium">Sign up using your university credentials and become an official member of the CIS community.</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-xl shadow-slate-200/50 mb-6 group-hover:scale-110 group-hover:border-sky-100 transition-all duration-300 relative">
                <span className="absolute -top-2 -left-2 w-8 h-8 bg-sky-500 text-white font-bold rounded-full flex items-center justify-center border-4 border-slate-50">2</span>
                <IconNetwork className="w-10 h-10 text-sky-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Connect</h3>
              <p className="text-slate-500 font-medium">Meet fellow CIS students, seniors, and mentors through exclusive events and meetups.</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-xl shadow-slate-200/50 mb-6 group-hover:scale-110 group-hover:border-indigo-100 transition-all duration-300 relative">
                <span className="absolute -top-2 -left-2 w-8 h-8 bg-indigo-600 text-white font-bold rounded-full flex items-center justify-center border-4 border-slate-50">3</span>
                <IconRocket className="w-10 h-10 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Contribute</h3>
              <p className="text-slate-500 font-medium">Participate in projects, workshops, and initiatives to grow your skills and give back.</p>
            </div>
          </div>
        </section>

        {/* 4. WHAT'S NEXT (EVENTS) SECTION */}
        <section id="events" className="py-24 px-6 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight flex items-center gap-3">
              <IconCalendarEvent className="text-blue-600 w-10 h-10" />
              What's Next at CIS?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {liveEvents.map((event) => (
               <Card key={event.id} className="border-0 shadow-lg shadow-slate-200/60 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-[2rem] bg-white overflow-hidden group relative">
                {/* Decorative background accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-0 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>

                <CardHeader className="p-8 relative z-10">
                  <div className="flex justify-between items-center mb-4">
                    <Badge className="bg-blue-100 hover:bg-blue-200 text-blue-800 border-0 font-bold px-3 py-1 uppercase tracking-wider">
                      {event.tag}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-tight mb-2">
                    {event.title}
                  </CardTitle>
                  <p className="text-sm font-bold text-slate-400 flex items-center gap-1.5">
                    <IconCalendarEvent className="w-4 h-4" /> {event.date}
                  </p>
                </CardHeader>
                <CardContent className="px-8 relative z-10">
                  <CardDescription className="text-slate-500 text-base leading-relaxed">
                    {event.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="px-8 pb-8 pt-4 relative z-10">
                  <Button className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold rounded-xl py-6 group/btn transition-colors">
                    Register Now
                    <IconArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* 5. ANNOUNCEMENT BANNER */}
        <section className="px-6 pb-24 max-w-5xl mx-auto">
          <div className="bg-red-50 border-2 border-red-100 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left shadow-lg shadow-red-100/50">
            <div className="p-4 bg-red-100 text-red-600 rounded-full animate-pulse">
              <IconAlertCircle className="w-10 h-10" />
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-black text-red-900 mb-1">Important Announcement</h3>
              <p className="text-red-700 font-medium text-lg">Registrations for the Annual CIS Hackathon close tonight at 11:59 PM!</p>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-6 rounded-xl shrink-0 shadow-md shadow-red-600/20">
              Apply Immediately
            </Button>
          </div>
        </section>

        {/* CONTACT US (Imported Component) */}
        <section id="contact-section">
          <ContactForm />
        </section>

      </main>
    </div>
  );
}