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
  IconBrandWhatsapp,
  IconChevronDown,
  IconClock,
  IconQuote,
  IconBriefcase,
  IconCode,
  IconUsers,
  IconBrandGithub
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
    <div className="min-h-screen bg-white flex flex-col justify-between selection:bg-blue-900 selection:text-white">
      <main className="flex-grow">

        {/* ============================================= */}
        {/* 1. HERO — Left-aligned, honest, no gimmicks  */}
        {/* ============================================= */}
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-6 bg-[#0b2447] overflow-hidden">
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
                  <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-8 py-6 rounded-xl transition-all">
                    <Link href="/registration">Join us →</Link>
                  </Button>
                  <Button asChild size="lg" variant="ghost" className="text-slate-300 hover:text-white hover:bg-white/5 font-medium px-6 py-6 rounded-xl">
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
                  <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm shadow-2xl">
                    <Image
                      src="/CIS-Community-Main-Logo.png"
                      alt="CIS Community Logo"
                      width={220}
                      height={220}
                      className="object-contain opacity-90"
                      priority
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-slate-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                    📍 NED Karachi
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Removed InfiniteMarquee */}
        {/* ============================================= */}
        {/* 2. BENTO BOX GRID — What we do               */}
        {/* ============================================= */}
        <section className="py-24 px-6 bg-slate-50 border-b border-slate-100">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">What we do</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-10">
                Building beyond the syllabus.
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
              {/* Large Bento Box */}
              <FadeIn className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 min-h-[400px]">
                {/* Background Image */}
                <Image 
                  src="/hackathon_placeholder.png" 
                  alt="Career Growth Event" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark overlay so text is readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="p-10 h-full flex flex-col justify-end relative z-10">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md text-white rounded-2xl flex items-center justify-center mb-6">
                    <IconBriefcase size={28} />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4">Mentorship & Career Growth</h3>
                  <p className="text-slate-300 text-lg leading-relaxed max-w-md">
                    From CV building to mock interviews, our community prepares you for the professional world. Our seniors and alumni provide guidance to help you easily crack your first internship.
                  </p>
                </div>
              </FadeIn>

              {/* Small Bento Box 1 */}
              <FadeIn delay={0.2} className="relative group overflow-hidden rounded-3xl bg-[#0b2447] border border-blue-900 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="p-8 h-full flex flex-col justify-end relative z-10">
                   <div className="w-12 h-12 bg-white/10 text-yellow-400 rounded-2xl flex items-center justify-center mb-4">
                    <IconCode size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Workshops</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">
                    Industry speakers, Git tutorials, and hands-on API sessions led by seniors who actually know what they're doing.
                  </p>
                </div>
              </FadeIn>

              {/* Small Bento Box 2 */}
              <FadeIn delay={0.4} className="relative group overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="p-8 h-full flex flex-col justify-end relative z-10">
                   <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                    <IconUsers size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Community</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Connecting freshmen with seniors, sharing internship leads, and building a support network.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>





        {/* ============================================= */}
        {/* 4. EVENTS — From the CMS                     */}
        {/* ============================================= */}
        <section id="events" className="py-24 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
                <div>
                  <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Upcoming</p>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Events</h2>
                </div>
                <Button asChild variant="outline" className="rounded-xl border-slate-300 text-slate-700 hover:text-slate-900">
                  <Link href="/events">
                    View all events <IconArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>

            {youtubeVideos.length > 0 ? (
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {youtubeVideos.map((video) => (
                  <StaggerItem key={video.id}>
                    <Card className="h-full flex flex-col border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-[2rem] bg-white overflow-hidden group">
                      <div className="relative w-full aspect-video overflow-hidden bg-slate-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={video.thumbnail} alt={video.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <CardHeader className="p-6 pb-2">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge className="bg-[#FF0000]/10 text-[#FF0000] border-0 font-bold text-xs px-3 py-1 uppercase tracking-wider">
                            YouTube
                          </Badge>
                        </div>
                        <CardTitle className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                          {video.title.replace(/&amp;/g, '&')}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="px-6 pb-4 flex-grow">
                        <div className="flex items-center gap-2 text-sm text-slate-400 font-bold uppercase tracking-wide">
                          <IconClock size={16} className="text-slate-300" /> {video.date}
                        </div>
                      </CardContent>
                      <CardFooter className="px-6 pb-6 pt-0 mt-auto">
                        <Button asChild className="w-full bg-[#0b2447] hover:bg-blue-600 text-white font-bold rounded-xl py-6 transition-colors">
                          <a href={video.link} target="_blank" rel="noopener noreferrer">Watch Now</a>
                        </Button>
                      </CardFooter>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            ) : (
              <FadeIn>
                <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300 shadow-sm">
                  <p className="text-slate-500 text-xl font-medium">No latest videos right now.</p>
                  <p className="text-slate-400 text-base mt-2">Subscribe to our YouTube to stay in the loop.</p>
                </div>
              </FadeIn>
            )}
          </div>
        </section>


        {/* ============================================= */}
        {/* 5. TESTIMONIALS                              */}
        {/* ============================================= */}
        <section className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto">
             <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Word on campus</h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8">
              <FadeIn delay={0.1}>
                <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 relative">
                  <IconQuote className="absolute top-6 right-8 w-12 h-12 text-slate-200" />
                  <p className="text-lg text-slate-700 italic font-medium leading-relaxed mb-8 relative z-10">
                    "I didn't know how to use Git until the CIS workshop. Two weeks later I was contributing to open source. The community here actually cares about your growth."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                      S
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Sara Ahmed</p>
                      <p className="text-sm text-slate-500">Batch '24</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 relative">
                  <IconQuote className="absolute top-6 right-8 w-12 h-12 text-slate-200" />
                  <p className="text-lg text-slate-700 italic font-medium leading-relaxed mb-8 relative z-10">
                    "SOFTEC was intimidating, but going with the CIS team made it an incredible experience. We built a full-stack app in 24 hours. Exhausting, but amazing."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg">
                      U
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Usman Tariq</p>
                      <p className="text-sm text-slate-500">Batch '22</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>


        {/* ============================================= */}
        {/* 6. FAQ — Real questions students ask           */}
        {/* ============================================= */}
        <section id="faq" className="py-24 px-6 bg-[#0b2447] text-white">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                Questions?
              </h2>
              <p className="text-blue-200 text-lg">Here's what people usually ask us.</p>
            </FadeIn>

            <StaggerContainer className="space-y-6">
              <StaggerItem>
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <h3 className="font-bold text-xl mb-3">Who can join?</h3>
                  <p className="text-blue-100/70 leading-relaxed">
                    Any student currently enrolled in the CIS department at NED University. 
                    Year doesn&apos;t matter — we&apos;ve got freshmen and final-years. No coding prerequisites either.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <h3 className="font-bold text-xl mb-3">How much time does it take?</h3>
                  <p className="text-blue-100/70 leading-relaxed">
                    Totally up to you. Events are usually on weekends or after classes. 
                    There&apos;s no attendance requirement — show up when you can, contribute when you want to.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <h3 className="font-bold text-xl mb-3">What if I can&apos;t code?</h3>
                  <p className="text-blue-100/70 leading-relaxed">
                    That&apos;s fine. We need people for event management, content, design, and outreach too. 
                    Not every role involves writing code. But if you want to learn, we do workshops for that.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <FadeIn delay={0.4}>
              <div className="mt-16 text-center">
                <Button asChild size="lg" className="bg-white hover:bg-slate-100 text-[#0b2447] font-bold px-10 py-7 rounded-2xl shadow-xl hover:scale-105 transition-all text-lg">
                  <Link href="/registration">
                    Join the community
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>


        {/* ============================================= */}
        {/* 7. SOCIAL PROOF                              */}
        {/* ============================================= */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 text-center border border-slate-100 shadow-sm">
                <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-10">By the numbers</p>
                <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
                  <div>
                    <p className="text-4xl md:text-6xl font-black text-slate-900">{membersCount}</p>
                    <p className="text-slate-500 text-sm font-medium mt-2">Members</p>
                  </div>
                  <div>
                    <p className="text-4xl md:text-6xl font-black text-slate-900">{totalEvents}</p>
                    <p className="text-slate-500 text-sm font-medium mt-2">Events</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>

      {/* STICKY WIDGET FOR MOBILE */}
      <StickyJoinWidget />
      
    </div>
  );
}