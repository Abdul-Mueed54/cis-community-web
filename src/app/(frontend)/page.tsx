// // import Link from "next/link";
// // import configPromise from '@payload-config'
// // import ContactForm from "@/components/forms/ContactUs";
// // import { Button } from "@/components/ui/button";
// // import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";
// // import { IconCalendarEvent, IconArrowRight, IconAlertCircle, IconUsers, IconCode, IconBriefcase, IconMicrophone, IconUserPlus, IconNetwork, IconRocket, } from "@tabler/icons-react";
// // import { getPayload } from "payload";

// // export default async function HomePage() {
// //   // 1. Boot up the Payload database connection
// //   const   payload = await getPayload({ config: configPromise })

// //   // 2. Ask the database for the newest events
// //   const eventsRequest = await payload.find({
// //     collection: 'events',
// //     limit: 3, // Only get 2 events for the homepage
// //     sort: '-createdAt', // Newest first
// //   })

// //   // 3. This is your live data!
// //   const liveEvents = eventsRequest.docs
// //   // =========================================================================
// //   // 🔥 API INTEGRATION POINT (PAYLOAD CMS) 🔥
// //   // Later, replace these static arrays with:
// //   // const eventReq = await fetch('http://localhost:3000/api/events?limit=2');
// //   // const eventData = await eventReq.json();
// //   // =========================================================================

// //   const featuredEvents = [
// //     {
// //       id: "1",
// //       title: "Web3 & Blockchain Seminar",
// //       date: "March 8th, 2026",
// //       description: "Explore the decentralized future with industry leaders from Karachi's tech ecosystem. Learn about smart contracts and decentralized apps.",
// //       tag: "Seminar",
// //     },
// //     {
// //       id: "2",
// //       title: "Annual CIS Hackathon",
// //       date: "March 15th, 2026",
// //       description: "Test your coding speed, algorithmic logic, and product building skills against the sharpest minds in the university. Prizes up to 50k PKR.",
// //       tag: "Competition",
// //     },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-blue-900 selection:text-white">
// //       <main className="flex-grow">

// //         {/* 1. PREMIUM HERO SECTION */}
// //         <section className="relative pt-32 pb-40 px-6 overflow-hidden bg-slate-950">
// //           {/* Abstract Background Gradients */}
// //           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] overflow-hidden pointer-events-none">
// //             <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full"></div>
// //             <div className="absolute top-40 -left-20 w-[500px] h-[500px] bg-sky-400/10 blur-[100px] rounded-full"></div>
// //           </div>

// //           <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8 mt-10">
// //             <Badge variant="outline" className="border-blue-400/30 text-blue-300 bg-blue-950/50 px-4 py-1.5 text-sm uppercase tracking-widest backdrop-blur-sm">
// //               CISans: Unite for Excellence!
// //             </Badge>

// //             <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white">
// //               Bridging Minds & <br />
// //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
// //                 Technology
// //               </span>
// //             </h1>

// //             <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
// //               Become the driving force behind the Computer and Information Systems community. Of CIS, For CIS, By CIS.
// //             </p>

// //             <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
// //               <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-6 rounded-full shadow-lg shadow-blue-900/20 transition-all hover:scale-105">
// //                 <Link href="/registration">Join Community</Link>
// //               </Button>
// //               <Button asChild size="lg" variant="outline" className="border-slate-700 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold px-10 py-6 rounded-full backdrop-blur-sm transition-all">
// //                 <Link href="#events">Explore Events</Link>
// //               </Button>
// //             </div>
// //           </div>
// //         </section>

// //         {/* 2. FLOATING STATS BAR (Glassmorphism overlap) */}
// //         <div className="max-w-6xl mx-auto px-6 relative z-20 -mt-16">
// //           <div className="bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-2xl shadow-slate-200/50 rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
// //             <div className="flex flex-col items-center text-center space-y-2">
// //               <div className="p-3 bg-blue-50 rounded-2xl text-blue-600"><IconUsers className="w-6 h-6" /></div>
// //               <p className="text-3xl font-black text-slate-900">40+</p>
// //               <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Members</p>
// //             </div>
// //             <div className="flex flex-col items-center text-center space-y-2">
// //               <div className="p-3 bg-sky-50 rounded-2xl text-sky-600"><IconCode className="w-6 h-6" /></div>
// //               <p className="text-3xl font-black text-slate-900">4</p>
// //               <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Hackathons</p>
// //             </div>
// //             <div className="flex flex-col items-center text-center space-y-2 border-none md:border-solid">
// //               <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600"><IconBriefcase className="w-6 h-6" /></div>
// //               <p className="text-3xl font-black text-slate-900">6</p>
// //               <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Projects</p>
// //             </div>
// //             <div className="flex flex-col items-center text-center space-y-2">
// //               <div className="p-3 bg-violet-50 rounded-2xl text-violet-600"><IconMicrophone className="w-6 h-6" /></div>
// //               <p className="text-3xl font-black text-slate-900">12</p>
// //               <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Seminars</p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* 3. HOW TO JOIN SECTION */}
// //         <section className="py-24 px-6 bg-slate-50">
// //           <div className="max-w-5xl mx-auto text-center mb-16">
// //             <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4">How to join</h2>
// //             <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full opacity-50"></div>
// //           </div>

// //           <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative">
// //             {/* Connecting dashed line (Hidden on mobile) */}
// //             <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-slate-300 -z-10"></div>

// //             {/* Step 1 */}
// //             <div className="flex flex-col items-center text-center group">
// //               <div className="w-24 h-24 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-xl shadow-slate-200/50 mb-6 group-hover:scale-110 group-hover:border-blue-100 transition-all duration-300 relative">
// //                 <span className="absolute -top-2 -left-2 w-8 h-8 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center border-4 border-slate-50">1</span>
// //                 <IconUserPlus className="w-10 h-10 text-blue-600" />
// //               </div>
// //               <h3 className="text-2xl font-bold text-slate-800 mb-3">Register</h3>
// //               <p className="text-slate-500 font-medium">Sign up using your university credentials and become an official member of the CIS community.</p>
// //             </div>

// //             {/* Step 2 */}
// //             <div className="flex flex-col items-center text-center group">
// //               <div className="w-24 h-24 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-xl shadow-slate-200/50 mb-6 group-hover:scale-110 group-hover:border-sky-100 transition-all duration-300 relative">
// //                 <span className="absolute -top-2 -left-2 w-8 h-8 bg-sky-500 text-white font-bold rounded-full flex items-center justify-center border-4 border-slate-50">2</span>
// //                 <IconNetwork className="w-10 h-10 text-sky-500" />
// //               </div>
// //               <h3 className="text-2xl font-bold text-slate-800 mb-3">Connect</h3>
// //               <p className="text-slate-500 font-medium">Meet fellow CIS students, seniors, and mentors through exclusive events and meetups.</p>
// //             </div>

// //             {/* Step 3 */}
// //             <div className="flex flex-col items-center text-center group">
// //               <div className="w-24 h-24 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-xl shadow-slate-200/50 mb-6 group-hover:scale-110 group-hover:border-indigo-100 transition-all duration-300 relative">
// //                 <span className="absolute -top-2 -left-2 w-8 h-8 bg-indigo-600 text-white font-bold rounded-full flex items-center justify-center border-4 border-slate-50">3</span>
// //                 <IconRocket className="w-10 h-10 text-indigo-600" />
// //               </div>
// //               <h3 className="text-2xl font-bold text-slate-800 mb-3">Contribute</h3>
// //               <p className="text-slate-500 font-medium">Participate in projects, workshops, and initiatives to grow your skills and give back.</p>
// //             </div>
// //           </div>
// //         </section>

// //         {/* 4. WHAT'S NEXT (EVENTS) SECTION */}
// //         <section id="events" className="py-24 px-6 max-w-6xl mx-auto">
// //           <div className="flex flex-col md:flex-row justify-between items-center mb-12">
// //             <h2 className="text-4xl font-black text-slate-900 tracking-tight flex items-center gap-3">
// //               <IconCalendarEvent className="text-blue-600 w-10 h-10" />
// //               What's Next at CIS?
// //             </h2>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //             {liveEvents.map((event) => (
// //                <Card key={event.id} className="border-0 shadow-lg shadow-slate-200/60 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-[2rem] bg-white overflow-hidden group relative">
// //                 {/* Decorative background accent */}
// //                 <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-0 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>

// //                 <CardHeader className="p-8 relative z-10">
// //                   <div className="flex justify-between items-center mb-4">
// //                     <Badge className="bg-blue-100 hover:bg-blue-200 text-blue-800 border-0 font-bold px-3 py-1 uppercase tracking-wider">
// //                       {event.tag}
// //                     </Badge>
// //                   </div>
// //                   <CardTitle className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-tight mb-2">
// //                     {event.title}
// //                   </CardTitle>
// //                   <p className="text-sm font-bold text-slate-400 flex items-center gap-1.5">
// //                     <IconCalendarEvent className="w-4 h-4" /> {event.date}
// //                   </p>
// //                 </CardHeader>
// //                 <CardContent className="px-8 relative z-10">
// //                   <CardDescription className="text-slate-500 text-base leading-relaxed">
// //                     {event.description}
// //                   </CardDescription>
// //                 </CardContent>
// //                 <CardFooter className="px-8 pb-8 pt-4 relative z-10">
// //                   <Button className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold rounded-xl py-6 group/btn transition-colors">
// //                     Register Now
// //                     <IconArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
// //                   </Button>
// //                 </CardFooter>
// //               </Card>
// //             ))}
// //           </div>
// //         </section>

// //         {/* 5. ANNOUNCEMENT BANNER */}
// //         <section className="px-6 pb-24 max-w-5xl mx-auto">
// //           <div className="bg-red-50 border-2 border-red-100 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left shadow-lg shadow-red-100/50">
// //             <div className="p-4 bg-red-100 text-red-600 rounded-full animate-pulse">
// //               <IconAlertCircle className="w-10 h-10" />
// //             </div>
// //             <div className="flex-grow">
// //               <h3 className="text-2xl font-black text-red-900 mb-1">Important Announcement</h3>
// //               <p className="text-red-700 font-medium text-lg">Registrations for the Annual CIS Hackathon close tonight at 11:59 PM!</p>
// //             </div>
// //             <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-6 rounded-xl shrink-0 shadow-md shadow-red-600/20">
// //               Apply Immediately
// //             </Button>
// //           </div>
// //         </section>

// //         {/* CONTACT US (Imported Component) */}
// //         <section id="contact-section">
// //           <ContactForm />
// //         </section>

// //       </main>
// //     </div>
// //   );
// // }

// import Link from "next/link";
// import Image from "next/image";
// import configPromise from '@payload-config'
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
//   IconArrowRight,
//   IconBrandInstagram,
//   IconBrandLinkedin,
//   IconBrandWhatsapp,
//   IconChevronDown,
//   IconClock,
//   IconQuote,
//   IconBriefcase,
//   IconCode,
//   IconUsers,
//   IconBrandGithub
// } from "@tabler/icons-react";
// import { getPayload } from "payload";
// import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
// import { StickyJoinWidget } from "@/components/ui/StickyJoinWidget";

// export default async function HomePage() {
//   const payload = await getPayload({ config: configPromise })

//   let youtubeVideos: Array<{ id: string, title: string, link: string, date: string, thumbnail: string }> = [];
//   try {
//     const res = await fetch('https://www.youtube.com/feeds/videos.xml?channel_id=UC63qtVJAixd8fRihC-OXGVQ', { next: { revalidate: 3600 } });
//     const xml = await res.text();
//     const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];
//     youtubeVideos = entries.slice(0, 3).map(e => {
//       const entryXml = e[1];
//       const title = entryXml.match(/<title>([^<]+)<\/title>/)?.[1] || 'Video';
//       const link = entryXml.match(/<link rel="alternate" href="([^"]+)"\/>/)?.[1] || '#';
//       const pubDate = entryXml.match(/<published>([^<]+)<\/published>/)?.[1] || '';
//       const thumbnail = entryXml.match(/<media:thumbnail url="([^"]+)"/)?.[1] || '';
//       return {
//         id: link,
//         title,
//         link,
//         date: pubDate ? new Date(pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '',
//         thumbnail
//       };
//     });
//   } catch (error) {
//     console.error("Error fetching YouTube videos:", error);
//   }

//   // @ts-ignore
//   const teamCountReq = await payload.count({ collection: 'team' })
//   // @ts-ignore
//   const eventsCountReq = await payload.count({ collection: 'events' })
//   const membersCount = teamCountReq.totalDocs
//   const totalEvents = eventsCountReq.totalDocs

//   return (
//     <div className="min-h-screen bg-white flex flex-col justify-between selection:bg-blue-900 selection:text-white">
//       <main className="flex-grow">

//         {/* ============================================= */}
//         {/* 1. HERO — Left-aligned, honest, no gimmicks  */}
//         {/* ============================================= */}
//         <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-6 bg-[#0b2447] overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-br from-[#0b2447] via-[#153a6f] to-[#0b2447]"></div>

//           <div className="max-w-6xl mx-auto relative z-10">
//             <div className="grid md:grid-cols-2 gap-12 items-center">
//               <div className="space-y-6">
//                 <p className="text-blue-400 font-mono text-sm tracking-wide">// est. 2024 — NED University</p>

//                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
//                   CIS Community<br />
//                   <span className="text-slate-400 font-semibold text-3xl md:text-4xl lg:text-5xl">NEDUET</span>
//                 </h1>

//                 <p className="text-base md:text-lg text-slate-300 max-w-md leading-relaxed">
//                   We&apos;re a student-run community for the CIS department at NED.
//                   We host hackathons, run coding workshops, and occasionally convince
//                   each other to finish assignments on time.
//                 </p>

//                 <div className="pt-2 flex flex-wrap gap-3">
//                   <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-8 py-6 rounded-xl transition-all">
//                     <Link href="/registration">Join us →</Link>
//                   </Button>
//                   <Button asChild size="lg" variant="ghost" className="text-slate-300 hover:text-white hover:bg-white/5 font-medium px-6 py-6 rounded-xl">
//                     <Link href="#faq">How does it work?</Link>
//                   </Button>
//                 </div>

//                 <div className="flex items-center gap-4 pt-4">
//                   <a href="https://www.instagram.com/ciscommunity.official/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
//                     <IconBrandInstagram size={20} />
//                   </a>
//                   <a href="https://www.linkedin.com/company/cis-community-neduet/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
//                     <IconBrandLinkedin size={20} />
//                   </a>
//                   <span className="text-slate-400 text-sm ml-2">@ciscommunity.official</span>
//                 </div>
//               </div>

//               <div className="hidden md:flex justify-center items-center">
//                 <div className="relative">
//                   <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm shadow-2xl">
//                     <Image
//                       src="/CIS-Community-Main-Logo.png"
//                       alt="CIS Community Logo"
//                       width={220}
//                       height={220}
//                       className="object-contain opacity-90"
//                       priority
//                     />
//                   </div>
//                   <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-slate-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg">
//                     📍 NED Karachi
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Removed InfiniteMarquee */}
//         {/* ============================================= */}
//         {/* 2. BENTO BOX GRID — What we do               */}
//         {/* ============================================= */}
//         <section className="py-24 px-6 bg-slate-50 border-b border-slate-100">
//           <div className="max-w-6xl mx-auto">
//             <FadeIn>
//               <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">What we do</p>
//               <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-10">
//                 Building beyond the syllabus.
//               </h2>
//             </FadeIn>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
//               {/* Large Bento Box */}
//               <FadeIn className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 min-h-[400px]">
//                 {/* Background Image */}
//                 <Image
//                   src="/hackathon_placeholder.png"
//                   alt="Career Growth Event"
//                   fill
//                   className="object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//                 {/* Dark overlay so text is readable */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

//                 <div className="p-10 h-full flex flex-col justify-end relative z-10">
//                   <div className="w-14 h-14 bg-white/20 backdrop-blur-md text-white rounded-2xl flex items-center justify-center mb-6">
//                     <IconBriefcase size={28} />
//                   </div>
//                   <h3 className="text-3xl font-black text-white mb-4">Mentorship & Career Growth</h3>
//                   <p className="text-slate-300 text-lg leading-relaxed max-w-md">
//                     From CV building to mock interviews, our community prepares you for the professional world. Our seniors and alumni provide guidance to help you easily crack your first internship.
//                   </p>
//                 </div>
//               </FadeIn>

//               {/* Small Bento Box 1 */}
//               <FadeIn delay={0.2} className="relative group overflow-hidden rounded-3xl bg-[#0b2447] border border-blue-900 shadow-sm hover:shadow-xl transition-all duration-500">
//                 <div className="p-8 h-full flex flex-col justify-end relative z-10">
//                    <div className="w-12 h-12 bg-white/10 text-yellow-400 rounded-2xl flex items-center justify-center mb-4">
//                     <IconCode size={24} />
//                   </div>
//                   <h3 className="text-xl font-bold text-white mb-2">Workshops</h3>
//                   <p className="text-blue-200 text-sm leading-relaxed">
//                     Industry speakers, Git tutorials, and hands-on API sessions led by seniors who actually know what they're doing.
//                   </p>
//                 </div>
//               </FadeIn>

//               {/* Small Bento Box 2 */}
//               <FadeIn delay={0.4} className="relative group overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500">
//                 <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 <div className="p-8 h-full flex flex-col justify-end relative z-10">
//                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-4">
//                     <IconUsers size={24} />
//                   </div>
//                   <h3 className="text-xl font-bold text-slate-800 mb-2">Community</h3>
//                   <p className="text-slate-500 text-sm leading-relaxed">
//                     Connecting freshmen with seniors, sharing internship leads, and building a support network.
//                   </p>
//                 </div>
//               </FadeIn>
//             </div>
//           </div>
//         </section>





//         {/* ============================================= */}
//         {/* 4. EVENTS — From the CMS                     */}
//         {/* ============================================= */}
//         <section id="events" className="py-24 px-6 bg-slate-50">
//           <div className="max-w-6xl mx-auto">
//             <FadeIn>
//               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
//                 <div>
//                   <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Upcoming</p>
//                   <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Events</h2>
//                 </div>
//                 <Button asChild variant="outline" className="rounded-xl border-slate-300 text-slate-700 hover:text-slate-900">
//                   <Link href="/events">
//                     View all events <IconArrowRight className="ml-1 w-4 h-4" />
//                   </Link>
//                 </Button>
//               </div>
//             </FadeIn>

//             {youtubeVideos.length > 0 ? (
//               <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {youtubeVideos.map((video) => (
//                   <StaggerItem key={video.id}>
//                     <Card className="h-full flex flex-col border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-[2rem] bg-white overflow-hidden group">
//                       <div className="relative w-full aspect-video overflow-hidden bg-slate-100">
//                         {/* eslint-disable-next-line @next/next/no-img-element */}
//                         <img src={video.thumbnail} alt={video.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
//                       </div>
//                       <CardHeader className="p-6 pb-2">
//                         <div className="flex items-center gap-2 mb-3">
//                           <Badge className="bg-[#FF0000]/10 text-[#FF0000] border-0 font-bold text-xs px-3 py-1 uppercase tracking-wider">
//                             YouTube
//                           </Badge>
//                         </div>
//                         <CardTitle className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
//                           {video.title.replace(/&amp;/g, '&')}
//                         </CardTitle>
//                       </CardHeader>
//                       <CardContent className="px-6 pb-4 flex-grow">
//                         <div className="flex items-center gap-2 text-sm text-slate-400 font-bold uppercase tracking-wide">
//                           <IconClock size={16} className="text-slate-300" /> {video.date}
//                         </div>
//                       </CardContent>
//                       <CardFooter className="px-6 pb-6 pt-0 mt-auto">
//                         <Button asChild className="w-full bg-[#0b2447] hover:bg-blue-600 text-white font-bold rounded-xl py-6 transition-colors">
//                           <a href={video.link} target="_blank" rel="noopener noreferrer">Watch Now</a>
//                         </Button>
//                       </CardFooter>
//                     </Card>
//                   </StaggerItem>
//                 ))}
//               </StaggerContainer>
//             ) : (
//               <FadeIn>
//                 <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300 shadow-sm">
//                   <p className="text-slate-500 text-xl font-medium">No latest videos right now.</p>
//                   <p className="text-slate-400 text-base mt-2">Subscribe to our YouTube to stay in the loop.</p>
//                 </div>
//               </FadeIn>
//             )}
//           </div>
//         </section>


//         {/* ============================================= */}
//         {/* 5. TESTIMONIALS                              */}
//         {/* ============================================= */}
//         <section className="py-24 px-6 bg-white overflow-hidden">
//           <div className="max-w-6xl mx-auto">
//              <FadeIn className="text-center mb-16">
//               <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Word on campus</h2>
//             </FadeIn>

//             <div className="grid md:grid-cols-2 gap-8">
//               <FadeIn delay={0.1}>
//                 <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 relative">
//                   <IconQuote className="absolute top-6 right-8 w-12 h-12 text-slate-200" />
//                   <p className="text-lg text-slate-700 italic font-medium leading-relaxed mb-8 relative z-10">
//                     "I didn't know how to use Git until the CIS workshop. Two weeks later I was contributing to open source. The community here actually cares about your growth."
//                   </p>
//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
//                       S
//                     </div>
//                     <div>
//                       <p className="font-bold text-slate-900">Sara Ahmed</p>
//                       <p className="text-sm text-slate-500">Batch '24</p>
//                     </div>
//                   </div>
//                 </div>
//               </FadeIn>

//               <FadeIn delay={0.3}>
//                 <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 relative">
//                   <IconQuote className="absolute top-6 right-8 w-12 h-12 text-slate-200" />
//                   <p className="text-lg text-slate-700 italic font-medium leading-relaxed mb-8 relative z-10">
//                     "SOFTEC was intimidating, but going with the CIS team made it an incredible experience. We built a full-stack app in 24 hours. Exhausting, but amazing."
//                   </p>
//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg">
//                       U
//                     </div>
//                     <div>
//                       <p className="font-bold text-slate-900">Usman Tariq</p>
//                       <p className="text-sm text-slate-500">Batch '22</p>
//                     </div>
//                   </div>
//                 </div>
//               </FadeIn>
//             </div>
//           </div>
//         </section>


//         {/* ============================================= */}
//         {/* 6. FAQ — Real questions students ask           */}
//         {/* ============================================= */}
//         <section id="faq" className="py-24 px-6 bg-[#0b2447] text-white">
//           <div className="max-w-4xl mx-auto">
//             <FadeIn className="text-center mb-16">
//               <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
//                 Questions?
//               </h2>
//               <p className="text-blue-200 text-lg">Here's what people usually ask us.</p>
//             </FadeIn>

//             <StaggerContainer className="space-y-6">
//               <StaggerItem>
//                 <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
//                   <h3 className="font-bold text-xl mb-3">Who can join?</h3>
//                   <p className="text-blue-100/70 leading-relaxed">
//                     Any student currently enrolled in the CIS department at NED University.
//                     Year doesn&apos;t matter — we&apos;ve got freshmen and final-years. No coding prerequisites either.
//                   </p>
//                 </div>
//               </StaggerItem>

//               <StaggerItem>
//                 <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
//                   <h3 className="font-bold text-xl mb-3">How much time does it take?</h3>
//                   <p className="text-blue-100/70 leading-relaxed">
//                     Totally up to you. Events are usually on weekends or after classes.
//                     There&apos;s no attendance requirement — show up when you can, contribute when you want to.
//                   </p>
//                 </div>
//               </StaggerItem>

//               <StaggerItem>
//                 <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
//                   <h3 className="font-bold text-xl mb-3">What if I can&apos;t code?</h3>
//                   <p className="text-blue-100/70 leading-relaxed">
//                     That&apos;s fine. We need people for event management, content, design, and outreach too.
//                     Not every role involves writing code. But if you want to learn, we do workshops for that.
//                   </p>
//                 </div>
//               </StaggerItem>
//             </StaggerContainer>

//             <FadeIn delay={0.4}>
//               <div className="mt-16 text-center">
//                 <Button asChild size="lg" className="bg-white hover:bg-slate-100 text-[#0b2447] font-bold px-10 py-7 rounded-2xl shadow-xl hover:scale-105 transition-all text-lg">
//                   <Link href="/registration">
//                     Join the community
//                   </Link>
//                 </Button>
//               </div>
//             </FadeIn>
//           </div>
//         </section>


//         {/* ============================================= */}
//         {/* 7. SOCIAL PROOF                              */}
//         {/* ============================================= */}
//         {/* <section className=""> */}
//           <div className="max-w-5xl mx-auto z-50">
//             <FadeIn>
//               <div className="bg-slate-50 rounded-lg p-10 md:p-16 text-center border border-slate-100 shadow-sm">
//                 <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-10">By the numbers</p>
//                 <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
//                   <div>
//                     <p className="text-4xl md:text-6xl font-black text-slate-900">{membersCount}</p>
//                     <p className="text-slate-500 text-sm font-medium mt-2">Members</p>
//                   </div>
//                   <div>
//                     <p className="text-4xl md:text-6xl font-black text-slate-900">{totalEvents}</p>
//                     <p className="text-slate-500 text-sm font-medium mt-2">Events</p>
//                   </div>
//                 </div>
//               </div>
//             </FadeIn>
//           </div>
//         {/* </section> */}

//       </main>

//       {/* STICKY WIDGET FOR MOBILE */}
//       <StickyJoinWidget />

//     </div>
//   );
// }


import Link from "next/link";
import Image from "next/image";
import configPromise from '@payload-config'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  IconArrowRight,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconClock,
  IconQuote,
  IconBriefcase,
  IconCode,
  IconUsers,
} from "@tabler/icons-react";
import { getPayload } from "payload";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { StickyJoinWidget } from "@/components/ui/StickyJoinWidget";

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise })

  let youtubeVideos: Array<{ id: string, title: string, link: string, date: string, thumbnail: string }> = [];
  try {
    const res = await fetch('https://www.youtube.com/feeds/videos.xml?channel_id=UC63qtVJAixd8fRihC-OXGVQ', { next: { revalidate: 3600 } });
    const xml = await res.text();
    const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];
    youtubeVideos = entries.slice(0, 3).map(e => {
      const entryXml = e[1];
      const title = entryXml.match(/<title>([^<]+)<\/title>/)?.[1] || 'Video';
      const link = entryXml.match(/<link rel="alternate" href="([^"]+)"\/>/)?.[1] || '#';
      const pubDate = entryXml.match(/<published>([^<]+)<\/published>/)?.[1] || '';
      const thumbnail = entryXml.match(/<media:thumbnail url="([^"]+)"/)?.[1] || '';
      return {
        id: link,
        title,
        link,
        date: pubDate ? new Date(pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '',
        thumbnail
      };
    });
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
  }

  // @ts-ignore
  const teamCountReq = await payload.count({ collection: 'team' })
  // @ts-ignore
  const eventsCountReq = await payload.count({ collection: 'events' })
  const membersCount = teamCountReq.totalDocs
  const totalEvents = eventsCountReq.totalDocs

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between selection:bg-blue-900 selection:text-white font-sans">
      <main className="flex-grow">

        {/* ============================================= */}
        {/* 1. HERO — Left-aligned, honest, no gimmicks  */}
        {/* ============================================= */}
        <section className="relative pt-28 pb-24 md:pt-36 md:pb-32 px-6 bg-[#0b2447] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b2447] via-[#153a6f] to-[#0b2447]"></div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-blue-400 font-mono text-sm tracking-wide">// est. 2024 — NED University</p>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                  CIS Community<br />
                  <span className="text-slate-400 font-semibold text-3xl md:text-4xl lg:text-5xl">NEDUET</span>
                </h1>

                <p className="text-base md:text-lg text-slate-300 max-w-md leading-relaxed">
                  We&apos;re a student-run community for the CIS department at NED.
                  We host hackathons, run coding workshops, and occasionally convince
                  each other to finish assignments on time.
                </p>

                <div className="pt-2 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-8 py-6 rounded-lg transition-all shadow-lg hover:shadow-xl">
                    <Link href="/registration">Join us →</Link>
                  </Button>
                  <Button asChild size="lg" variant="ghost" className="text-slate-300 hover:text-white hover:bg-white/5 font-medium px-6 py-6 rounded-lg">
                    <Link href="#faq">How does it work?</Link>
                  </Button>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <a href="https://www.instagram.com/ciscommunity.official/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                    <IconBrandInstagram size={20} />
                  </a>
                  <a href="https://www.linkedin.com/company/cis-community-neduet/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                    <IconBrandLinkedin size={20} />
                  </a>
                  <span className="text-slate-400 text-sm ml-2">@ciscommunity.official</span>
                </div>
              </div>

              <div className="hidden md:flex justify-center items-center">
                <div className="relative">
                  <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm shadow-2xl">
                    <Image
                      src="/CIS-Community-Main-Logo.png"
                      alt="CIS Community Logo"
                      width={220}
                      height={220}
                      className="object-contain opacity-90"
                      priority
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-slate-900 text-xs font-bold px-4 py-2 rounded-md shadow-lg">
                    📍 NED Karachi
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* 1.5 FLOATING STATS BAR                       */}
        {/* ============================================= */}
        <div className="max-w-4xl mx-auto px-6 relative z-20 -mt-12 mb-12">
          <FadeIn>
            <div className="bg-white/90 backdrop-blur-md rounded-xl p-8 border border-slate-200 shadow-xl flex justify-around items-center divide-x divide-slate-100">
              <div className="flex-1 text-center">
                <p className="text-4xl font-black text-[#0b2447]">{membersCount}+</p>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mt-1">Members</p>
              </div>
              <div className="flex-1 text-center">
                <p className="text-4xl font-black text-[#0b2447]">{totalEvents}</p>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mt-1">Events</p>
              </div>
              <div className="flex-1 text-center hidden md:block">
                <p className="text-4xl font-black text-[#0b2447]">100%</p>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mt-1">Student Led</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ============================================= */}
        {/* 2. BENTO BOX GRID — What we do               */}
        {/* ============================================= */}
        <section className="pt-8 pb-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">What we do</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
                Building beyond the syllabus.
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
              {/* Large Bento Box */}
              <FadeIn className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 min-h-[400px]">
                <Image
                  src="/hackathon_placeholder.png"
                  alt="Career Growth Event"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90" />

                <div className="p-8 md:p-10 h-full flex flex-col justify-end relative z-10">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md text-white rounded-lg flex items-center justify-center mb-4">
                    <IconBriefcase size={24} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-3">Mentorship & Career Growth</h3>
                  <p className="text-slate-300 text-base leading-relaxed max-w-md">
                    From CV building to mock interviews, our community prepares you for the professional world. Our seniors provide guidance to help you crack your first internship.
                  </p>
                </div>
              </FadeIn>

              {/* Small Bento Box 1 */}
              <FadeIn delay={0.2} className="relative group overflow-hidden rounded-xl bg-[#0b2447] border border-blue-900 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="p-6 md:p-8 h-full flex flex-col justify-end relative z-10">
                   <div className="w-10 h-10 bg-white/10 text-yellow-400 rounded-lg flex items-center justify-center mb-4">
                    <IconCode size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Workshops</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">
                    Industry speakers, Git tutorials, and hands-on API sessions led by seniors.
                  </p>
                </div>
              </FadeIn>

              {/* Small Bento Box 2 */}
              <FadeIn delay={0.4} className="relative group overflow-hidden rounded-xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="p-6 md:p-8 h-full flex flex-col justify-end relative z-10">
                   <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-4">
                    <IconUsers size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Community</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Connecting freshmen with seniors, sharing leads, and building a network.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* 3. LATEST CONTENT / VIDEOS                   */}
        {/* ============================================= */}
        <section id="content" className="py-24 px-6 bg-slate-50 border-y border-slate-100">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
                <div>
                  <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Latest Content</p>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Recent Tech Talks</h2>
                </div>
                <Button asChild variant="outline" className="rounded-lg border-slate-300 text-slate-700 hover:text-slate-900">
                  <Link href="/events">
                    View all content <IconArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>

            {youtubeVideos.length > 0 ? (
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {youtubeVideos.map((video) => (
                  <StaggerItem key={video.id}>
                    <Card className="h-full flex flex-col border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 rounded-xl bg-white overflow-hidden group">
                      <div className="relative w-full aspect-video overflow-hidden bg-slate-100 border-b border-slate-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={video.thumbnail} alt={video.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <CardHeader className="p-5 pb-2">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-red-50 text-red-600 border border-red-100 font-bold text-[10px] px-2 py-0.5 uppercase tracking-wider rounded">
                            YouTube
                          </Badge>
                        </div>
                        <CardTitle className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                          {video.title.replace(/&amp;/g, '&')}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="px-5 pb-4 flex-grow">
                        <div className="flex items-center gap-2 text-xs text-slate-500 font-bold uppercase tracking-wide">
                          <IconClock size={14} className="text-slate-400" /> {video.date}
                        </div>
                      </CardContent>
                      <CardFooter className="px-5 pb-5 pt-0 mt-auto">
                        <Button asChild className="w-full bg-[#0b2447] hover:bg-blue-700 text-white font-medium rounded-lg py-5 transition-colors">
                          <a href={video.link} target="_blank" rel="noopener noreferrer">Watch Now</a>
                        </Button>
                      </CardFooter>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            ) : (
              <FadeIn>
                <div className="text-center py-16 bg-white rounded-xl border border-dashed border-slate-300 shadow-sm">
                  <p className="text-slate-500 text-lg font-medium">No recent videos found.</p>
                </div>
              </FadeIn>
            )}
          </div>
        </section>

        {/* ============================================= */}
        {/* 4. TESTIMONIALS                              */}
        {/* ============================================= */}
        <section className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto">
             <FadeIn className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Word on campus</h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6">
              <FadeIn delay={0.1}>
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-sm relative">
                  <IconQuote className="absolute top-6 right-6 w-8 h-8 text-slate-200" />
                  <p className="text-base text-slate-700 italic font-medium leading-relaxed mb-6 relative z-10 pr-6">
                    "I didn't know how to use Git until the CIS workshop. Two weeks later I was contributing to open source. The community here actually cares about your growth."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
                      S
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">Sara Ahmed</p>
                      <p className="text-xs text-slate-500">Batch '24</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-sm relative">
                  <IconQuote className="absolute top-6 right-6 w-8 h-8 text-slate-200" />
                  <p className="text-base text-slate-700 italic font-medium leading-relaxed mb-6 relative z-10 pr-6">
                    "SOFTEC was intimidating, but going with the CIS team made it an incredible experience. We built a full-stack app in 24 hours. Exhausting, but amazing."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm">
                      U
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">Usman Tariq</p>
                      <p className="text-xs text-slate-500">Batch '22</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* 5. FAQ                                       */}
        {/* ============================================= */}
        <section id="faq" className="py-24 px-6 bg-[#0b2447] text-white">
          <div className="max-w-3xl mx-auto">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
                Questions?
              </h2>
              <p className="text-blue-200 text-base">Here's what people usually ask us.</p>
            </FadeIn>

            <StaggerContainer className="space-y-4">
              <StaggerItem>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <h3 className="font-bold text-lg mb-2">Who can join?</h3>
                  <p className="text-blue-100/70 text-sm leading-relaxed">
                    Any student currently enrolled in the CIS department at NED University.
                    Year doesn&apos;t matter — we&apos;ve got freshmen and final-years. No coding prerequisites either.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <h3 className="font-bold text-lg mb-2">How much time does it take?</h3>
                  <p className="text-blue-100/70 text-sm leading-relaxed">
                    Totally up to you. Events are usually on weekends or after classes.
                    There&apos;s no attendance requirement — show up when you can, contribute when you want to.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <FadeIn delay={0.4}>
              <div className="mt-12 text-center">
                <Button asChild size="lg" className="bg-white hover:bg-slate-100 text-[#0b2447] font-bold px-8 py-6 rounded-lg shadow-xl hover:scale-105 transition-all text-base">
                  <Link href="/registration">
                    Join the community
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>

      <StickyJoinWidget />
    </div>
  );
}