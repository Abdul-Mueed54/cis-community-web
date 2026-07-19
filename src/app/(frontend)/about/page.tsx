// import React from 'react';
// import {
//   IconInfoCircle,
//   IconUsers,
//   IconBulb,
//   IconRocket,
//   IconCode,
//   IconMicrophone,
//   IconTrophy,
//   IconArrowRight
// } from '@tabler/icons-react';
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
// import Link from 'next/link';
// import configPromise from '@payload-config';
// import { getPayload } from "payload";

// export default async function AboutPage() {
//   const payload = await getPayload({ config: configPromise });
//   const teamsData = await payload.find({
//     // @ts-ignore
//     collection: 'team',
//     limit: 4,
//   });

//   const teamMembers = teamsData.docs;
//   const totalTeamMembers = teamsData.totalDocs;
//   const remainingCount = totalTeamMembers > 4 ? totalTeamMembers - 4 : 0;

//   return (
//     <div className="min-h-screen bg-slate-50 flex flex-col pt-32 pb-20 px-6">
//       <div className="max-w-6xl mx-auto space-y-24 relative z-10 w-full">

//         {/* ==========================================
//             1. HERO SECTION
//             Contains the bouncy icon, main heading, and intro text
//         ========================================== */}
//         <div className="text-center space-y-8">
//           <FadeIn>
//             <div className="inline-flex p-4 rounded-full bg-blue-100 text-blue-600 mb-4 shadow-lg shadow-blue-100/50">
//               <IconInfoCircle size={48} />
//             </div>
//             <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight">
//               About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">Us</span>
//             </h1>
//           </FadeIn>
//           <FadeIn delay={0.2}>
//             <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
//               We are the driving force behind the Computer and Information Systems community.
//               Our mission is to bridge minds and technology to build a better future.
//             </p>
//           </FadeIn>
//         </div>

//         {/* ==========================================
//             2. MISSION & VISION SECTION (Bento Grid)
//             Contains the dark mission card, year founded card, and community card
//         ========================================== */}
//         <section className="space-y-8">
//           <FadeIn>
//             <div className="flex items-center gap-4 mb-8">
//               <div className="h-px bg-slate-200 flex-1"></div>
//               <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Mission & Vision</h2>
//               <div className="h-px bg-slate-200 flex-1"></div>
//             </div>
//           </FadeIn>

//           <StaggerContainer className="grid md:grid-cols-3 gap-6">
//             <StaggerItem className="md:col-span-2">
//               <Card className="h-full bg-[#0b2447] text-white border-0 shadow-xl overflow-hidden relative">
//                 <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20 -mr-10 -mt-10 pointer-events-none"></div>
//                 <CardHeader className="relative z-10 pb-0">
//                   <Badge className="w-fit bg-blue-500/20 text-blue-200 hover:bg-blue-500/20 border-0 mb-4">Our Core Mission</Badge>
//                   <CardTitle className="text-3xl md:text-4xl font-black leading-tight text-white">
//                     Empowering students to build, innovate, and lead the future of technology.
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="relative z-10 pt-6">
//                   <p className="text-blue-100/80 text-lg leading-relaxed max-w-lg">
//                     We believe in learning by doing. Our community is built on the foundation of open collaboration,
//                     continuous learning, and pushing the boundaries of what students can achieve together.
//                   </p>
//                 </CardContent>
//               </Card>
//             </StaggerItem>

//             <StaggerItem>
//               <Card className="h-full flex flex-col justify-center items-center text-center border-slate-200 shadow-sm bg-white p-8 hover:-translate-y-1 transition-transform duration-300">
//                 <div className="text-5xl font-black text-slate-900 mb-2">2024</div>
//                 <p className="text-slate-500 font-medium uppercase tracking-wider text-sm mb-6">Year Founded</p>
//                 <div className="w-16 h-1 bg-blue-600 rounded-full mb-6"></div>
//                 <p className="text-slate-700 font-medium">NED University of Engineering and Technology</p>
//               </Card>
//             </StaggerItem>

//             <StaggerItem className="md:col-span-3">
//               <Card className="h-full bg-[#0b2447] text-white border-0 shadow-xl overflow-hidden relative hover:-translate-y-1 transition-transform duration-300">
//                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500 rounded-full blur-[100px] opacity-20 -ml-10 -mb-10 pointer-events-none"></div>
//                 <CardHeader className="relative z-10 pb-0 flex flex-row items-center gap-6">
//                   <div className="w-16 h-16 shrink-0 rounded-full bg-blue-500/20 text-blue-200 flex items-center justify-center">
//                     <IconUsers size={32} />
//                   </div>
//                   <div>
//                     <Badge className="w-fit bg-sky-500/20 text-sky-200 hover:bg-sky-500/20 border-0 mb-2">Community First</Badge>
//                     <CardTitle className="text-3xl md:text-4xl font-black leading-tight text-white">
//                       A diverse network of passionate developers and future leaders.
//                     </CardTitle>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="relative z-10 pt-6">
//                   <p className="text-blue-100/80 text-lg leading-relaxed max-w-4xl">
//                     We envision a thriving tech ecosystem where every student has the mentorship, resources, and real-world opportunities needed to transform their creative ideas into impactful realities.
//                   </p>
//                 </CardContent>
//               </Card>
//             </StaggerItem>
//           </StaggerContainer>
//         </section>

//         {/* ==========================================
//             3. CORE VALUES SECTION
//             3-Column layout showing Collaboration, Innovation, and Growth
//         ========================================== */}
//         <section className="space-y-12">
//           <FadeIn>
//             <div className="text-center">
//               <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Our Core Values</h2>
//               <p className="text-slate-500 max-w-xl mx-auto">The principles that guide our community, our events, and how we collaborate with each other.</p>
//             </div>
//           </FadeIn>
//           <StaggerContainer className="grid md:grid-cols-3 gap-8">
//             <StaggerItem>
//               <Card className="h-full border-0 shadow-lg shadow-slate-200/50 bg-white hover:-translate-y-2 transition-transform duration-300">
//                 <CardHeader>
//                   <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
//                     <IconUsers size={32} />
//                   </div>
//                   <CardTitle className="text-xl">Collaboration</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-slate-500 leading-relaxed">
//                     We rise by lifting others. We build teams, share knowledge openly, and tackle complex problems together.
//                   </p>
//                 </CardContent>
//               </Card>
//             </StaggerItem>
//             <StaggerItem>
//               <Card className="h-full border-0 shadow-lg shadow-slate-200/50 bg-white hover:-translate-y-2 transition-transform duration-300">
//                 <CardHeader>
//                   <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 mb-4">
//                     <IconBulb size={32} />
//                   </div>
//                   <CardTitle className="text-xl">Innovation</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-slate-500 leading-relaxed">
//                     We don't just follow tutorials. We encourage creative thinking, building unique projects, and pushing boundaries.
//                   </p>
//                 </CardContent>
//               </Card>
//             </StaggerItem>
//             <StaggerItem>
//               <Card className="h-full border-0 shadow-lg shadow-slate-200/50 bg-white hover:-translate-y-2 transition-transform duration-300">
//                 <CardHeader>
//                   <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
//                     <IconRocket size={32} />
//                   </div>
//                   <CardTitle className="text-xl">Growth</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-slate-500 leading-relaxed">
//                     Learning goes beyond the classroom. We provide the resources and environment to accelerate your tech career.
//                   </p>
//                 </CardContent>
//               </Card>
//             </StaggerItem>
//           </StaggerContainer>
//         </section>

//         {/* ==========================================
//             4. WHAT WE DO SECTION (Interactive Tabs)
//             Allows users to click through Workshops, Hackathons, and Podcasts
//         ========================================== */}
//         <section className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl shadow-slate-200/50 border border-slate-100">
//           <FadeIn>
//             <div className="text-center mb-10">
//               <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">What We Do</h2>
//               <p className="text-slate-500">We host a variety of activities to keep our community engaged and learning.</p>
//             </div>
//           </FadeIn>

//           <FadeIn delay={0.2}>
//             <Tabs defaultValue="workshops" className="w-full max-w-3xl mx-auto">
//               <TabsList className="grid w-full grid-cols-3 mb-8 bg-slate-100 p-1 rounded-xl">
//                 <TabsTrigger value="workshops" className="rounded-lg font-bold">Workshops</TabsTrigger>
//                 <TabsTrigger value="hackathons" className="rounded-lg font-bold">Hackathons</TabsTrigger>
//                 <TabsTrigger value="podcasts" className="rounded-lg font-bold">Podcasts</TabsTrigger>
//               </TabsList>

//               <TabsContent value="workshops" className="focus-visible:outline-none">
//                 <Card className="border-0 shadow-none bg-slate-50 rounded-2xl">
//                   <CardHeader className="md:flex-row gap-6 items-center">
//                     <div className="w-20 h-20 shrink-0 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
//                       <IconCode size={40} />
//                     </div>
//                     <div>
//                       <CardTitle className="text-2xl mb-2">Technical Workshops</CardTitle>
//                       <CardDescription className="text-base text-slate-600">
//                         From basic Git & GitHub to advanced web development and AI. We host hands-on sessions led by industry experts and senior students to help you master modern tech stacks.
//                       </CardDescription>
//                     </div>
//                   </CardHeader>
//                 </Card>
//               </TabsContent>

//               <TabsContent value="hackathons" className="focus-visible:outline-none">
//                 <Card className="border-0 shadow-none bg-slate-50 rounded-2xl">
//                   <CardHeader className="md:flex-row gap-6 items-center">
//                     <div className="w-20 h-20 shrink-0 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
//                       <IconTrophy size={40} />
//                     </div>
//                     <div>
//                       <CardTitle className="text-2xl mb-2">Hackathons & Competitions</CardTitle>
//                       <CardDescription className="text-base text-slate-600">
//                         Put your skills to the test. We organize competitive programming events and multi-day hackathons where you can build real products, win prizes, and get noticed by recruiters.
//                       </CardDescription>
//                     </div>
//                   </CardHeader>
//                 </Card>
//               </TabsContent>

//               <TabsContent value="podcasts" className="focus-visible:outline-none">
//                 <Card className="border-0 shadow-none bg-slate-50 rounded-2xl">
//                   <CardHeader className="md:flex-row gap-6 items-center">
//                     <div className="w-20 h-20 shrink-0 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center">
//                       <IconMicrophone size={40} />
//                     </div>
//                     <div>
//                       <CardTitle className="text-2xl mb-2">Tech Talks & Podcasts</CardTitle>
//                       <CardDescription className="text-base text-slate-600">
//                         Learn from those who have been there. We invite alumni and industry leaders to share their journeys, insights, and career advice through our exclusive podcast series.
//                       </CardDescription>
//                     </div>
//                   </CardHeader>
//                 </Card>
//               </TabsContent>
//             </Tabs>
//           </FadeIn>
//         </section>

//         {/* ==========================================
//             5. TEAM TEASER SECTION
//             Shows overlapping avatars and a CTA button to the teams page
//         ========================================== */}
//         <section className="text-center space-y-8 pt-10">
//           <FadeIn>
//             <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Meet the people behind the magic</h2>
//             <div className="flex justify-center -space-x-4 mt-8 mb-8">
//               {teamMembers.map((member: any) => {
//                 const photoUrl = typeof member.photo === 'object' && member.photo?.url
//                   ? member.photo.url
//                   : `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random`;

//                 return (
//                   <Avatar key={member.id} className="w-16 h-16 border-4 border-slate-50 shadow-md">
//                     <AvatarImage src={photoUrl} alt={member.name} className="object-cover" />
//                     <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
//                   </Avatar>
//                 );
//               })}

//               {remainingCount > 0 && (
//                 <div className="w-16 h-16 rounded-full border-4 border-slate-50 bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-500 shadow-md z-10 relative">
//                   +{remainingCount}
//                 </div>
//               )}
//             </div>
//             <Button asChild size="lg" className="rounded-xl font-bold bg-[#0b2447] hover:bg-blue-600 transition-colors">
//               <Link href="/teams">
//                 Meet the entire team <IconArrowRight className="w-5 h-5 ml-2" />
//               </Link>
//             </Button>
//           </FadeIn>
//         </section>

//       </div>

//       {/* ==========================================
//           6. DECORATIVE BACKGROUND
//           The blurry gradient circles behind the content
//       ========================================== */}
//       <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
//         <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-sky-200/30 blur-[100px]"></div>
//         <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-blue-200/20 blur-[120px]"></div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import Image from 'next/image';
import { getPayload } from "payload";
import configPromise from '@payload-config';
import { IconQuote, IconCalendarEvent, IconUsers, IconRocket, IconBrandLinkedin } from '@tabler/icons-react';

export default async function AboutPage() {
  // 1. Fetch the Global "About" data and live counts
  const payload = await getPayload({ config: configPromise });
  const aboutData = await payload.findGlobal({ slug: 'about' });

  // Calculate dynamic stats directly from the database
  const eventsCount = await payload.count({ collection: 'events' });
  const teamCount = await payload.count({ collection: 'team' });

  // Calculate active years (Assuming founded in 2021, adjust as needed!)
  const FOUNDATION_YEAR = 2024;
  const activeYears = new Date().getFullYear() - FOUNDATION_YEAR;

  // Safely extract the Focal Person image URL
  const focalImageUrl = typeof aboutData.focalPerson?.image === 'object' && aboutData.focalPerson?.image?.url
    ? aboutData.focalPerson.image.url
    : '/placeholder-user.jpg';

  // Separate Founder from Co-Founders for hierarchical design
  const founders = aboutData.founders || [];
  const mainFounder = founders.filter((f: any) => f.role === 'founder');
  const coFounders = founders.filter((f: any) => f.role === 'co_founder');

  return (
    <div className="min-h-screen relative font-sans pb-24 overflow-hidden text-slate-800">

      {/* AMBIENT ORBS */}
      <div className="fixed inset-0 -z-10 bg-slate-50">
        <div className="absolute top-20 left-1/4 w-[20rem] h-[20rem] lg:w-[40rem] lg:h-[40rem] rounded-full bg-blue-300/30 blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-[20rem] h-[20rem] lg:w-[35rem] lg:h-[35rem] rounded-full bg-indigo-300/20 blur-[100px]" />
      </div>

      <main className="pt-32 px-6 max-w-5xl mx-auto space-y-20">

        {/* ==========================================
            1. THE HERO (MANIFESTO)
        ========================================== */}
        <section className="text-center max-w-4xl mx-auto space-y-8">
          <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">Who We Are</p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {aboutData.hero?.manifesto || "We build the future."}
          </h1>
          <div className="rounded-2xl p-8 shadow-[0_8px_32px_rgba(15,23,42,0.06)] border border-white/50 bg-white/40 backdrop-blur-2xl backdrop-saturate-150">
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed whitespace-pre-wrap">
              {aboutData.hero?.description}
            </p>
          </div>
        </section>

        {/* ==========================================
            2. THE PROOF (DYNAMIC STATS)
        ========================================== */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Years Active', value: activeYears, icon: <IconRocket size={28} className="text-blue-500"/> },
            { label: 'Events Organized', value: eventsCount.totalDocs, icon: <IconCalendarEvent size={28} className="text-indigo-500"/> },
            { label: 'Members Impacted', value: teamCount.totalDocs, icon: <IconUsers size={28} className="text-teal-500"/> },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-8 rounded-2xl shadow-[0_8px_32px_rgba(15,23,42,0.04)] border border-white/50 bg-white/30 backdrop-blur-md">
              <div className="mb-4 p-3 bg-white/60 rounded-xl shadow-sm">{stat.icon}</div>
              <h3 className="text-5xl font-black text-slate-900 mb-1">{stat.value}+</h3>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* ==========================================
            3. THE ANCHOR (FOCAL PERSON)
        ========================================== */}
        {aboutData.focalPerson && (
          <section className="rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_rgba(15,23,42,0.08)] border border-white/60 bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-2xl backdrop-saturate-150">
            <div className="flex flex-col md:flex-row gap-10 items-center">

              {/* Image Side */}
              <div className="shrink-0 relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-lg border-4 border-white/80">
                <Image
                  src={focalImageUrl}
                  alt={aboutData.focalPerson.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 256px"
                />
              </div>

              {/* Quote Side */}
              <div className="flex-1 relative">
                <IconQuote className="absolute -top-6 -left-6 md:-top-10 md:-left-10 text-blue-500/10 w-20 h-20 md:w-32 md:h-32 -z-10 rotate-180" />
                <blockquote className="text-2xl md:text-3xl font-medium text-slate-800 leading-snug mb-6 italic">
                  "{aboutData.focalPerson.quote}"
                </blockquote>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">{aboutData.focalPerson.name}</h4>
                  <p className="text-blue-600 font-medium uppercase tracking-wide text-sm mt-1">{aboutData.focalPerson.title}</p>
                </div>
              </div>

            </div>
          </section>
        )}

        {/* ==========================================
            4. THE GENESIS (FOUNDERS)
        ========================================== */}
        {founders.length > 0 && (
          <section className="pt-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">The Genesis</h2>
              <p className="text-slate-500 text-lg">The visionaries who started it all.</p>
            </div>

            <div className="flex flex-col items-center gap-12">

              {/* Main Founders Feature (Now supports multiple!) */}
              {mainFounder.length > 0 && (
                <div className="flex flex-wrap justify-center gap-8 w-full">
                  {mainFounder.map((founder: any, idx: number) => (
                    <div key={`founder-${idx}`} className="w-full max-w-sm rounded-2xl p-6 shadow-[0_8px_32px_rgba(15,23,42,0.06)] border border-white/50 bg-white/40 backdrop-blur-xl group hover:-translate-y-1 transition-transform">
                      <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-5">
                        <Image
                          src={typeof founder.image === 'object' ? founder.image?.url : '/placeholder-user.jpg'}
                          alt={founder.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900">{founder.name}</h3>
                          <p className="text-blue-600 font-bold uppercase tracking-widest text-xs mt-1">Founder</p>
                        </div>
                        {founder.linkedin && (
                          <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0A66C2] transition-colors">
                            <IconBrandLinkedin size={24} />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Co-Founders Grid */}
              {coFounders.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
                  {coFounders.map((coFounder: any, idx: number) => (
                    <div key={`cofounder-${idx}`} className="rounded-2xl p-5 shadow-[0_8px_32px_rgba(15,23,42,0.04)] border border-white/50 bg-white/20 backdrop-blur-xl group hover:-translate-y-1 transition-transform">
                      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-4">
                        <Image
                          src={typeof coFounder.image === 'object' ? coFounder.image?.url : '/placeholder-user.jpg'}
                          alt={coFounder.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">{coFounder.name}</h3>
                          <p className="text-slate-500 font-medium uppercase tracking-wider text-xs">Co-Founder</p>
                        </div>
                        {coFounder.linkedin && (
                          <a href={coFounder.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0A66C2] transition-colors">
                            <IconBrandLinkedin size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </section>
        )}

      </main>
    </div>
  );
}