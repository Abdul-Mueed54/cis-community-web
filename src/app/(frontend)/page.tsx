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
  IconCalendarEvent,
  IconBrandFacebook,
  IconBrandGmail
} from "@tabler/icons-react";
import { getPayload } from "payload";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { StickyJoinWidget } from "@/components/ui/StickyJoinWidget";

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise });

  // 1. Fetch YouTube Videos
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

  // 2. Fetch Payload Data (Using 'as any' to bypass strict TS while you build)
  const teamReq = await payload.find({ collection: 'team' as any, limit: 5 });
  const teamMembers = teamReq.docs;
  const teamCountReq = await payload.count({ collection: 'team' as any });
  const membersCount = teamCountReq.totalDocs;

  const eventsCountReq = await payload.count({ collection: 'events' as any });
  const totalEvents = eventsCountReq.totalDocs;

  const upcomingEventsReq = await payload.find({
    collection: 'events' as any,
    where: { status: { equals: 'upcoming' } },
    sort: 'date',
    limit: 1,
  });
  const nextEvent = upcomingEventsReq.docs[0];

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
                  <a href="https://www.facebook.com/share/19MMCqRXhv/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                    <IconBrandFacebook size={20} />
                  </a>
                  <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRnZFLsmjfKzqNtKSTDLbGBtbfVdxFFjZfcGLxHlGWmFPpdKklScQXQGtzwBpJmxGNFTCFL" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                    <IconBrandGmail size={20} />
                  </a>
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
            </div>
          </FadeIn>
        </div>

        {/* ============================================= */}
        {/* 2. BENTO BOX GRID — What we do               */}
        {/* ============================================= */}
        <section className="pt-8 pb-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">What we do</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
                Building beyond the syllabus.
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
              {/* Large Bento Box (Updated to Realistic Image) */}
              <FadeIn className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 min-h-[400px]">
                <Image
                  src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1200&auto=format&fit=crop"
                  alt="Career Growth Event"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 66vw"
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
        {/* 2.5 TEAM & MANIFESTO SNIPPET (FLOATING)      */}
        {/* ============================================= */}
        <section className="px-6 relative z-30 -my-25 mt-10 pointer-events-none">
          <div className="max-w-4xl mx-auto text-center bg-white/80 backdrop-blur-xl rounded-3xl p-10 md:p-12 shadow-[0_20px_40px_-15px_rgba(11,36,71,0.1)] border border-white/60 pointer-events-auto">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6">
                Built by students, for students.
              </h2>

              {/* Overlapping Avatars */}
              <div className="flex justify-center items-center mb-6">
                <div className="flex -space-x-4">
                  {teamMembers.map((member: any, i: number) => (
                    <div key={i} className="relative w-14 h-14 rounded-full border-4 border-white shadow-sm overflow-hidden bg-slate-100 z-10 hover:z-20 hover:scale-110 transition-all">
                      <Image
                        src={typeof member.photo === 'object' && member.photo?.url ? member.photo.url : `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0b2447&color=fff&size=256`}
                        alt={ member.name|| 'Team member'}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                  <div className="relative w-14 h-14 rounded-full border-4 border-white shadow-sm bg-blue-50 flex items-center justify-center z-10 text-blue-600 font-bold text-sm">
                    +{membersCount - 5 > 0 ? membersCount - 5 : 'More'}
                  </div>
                </div>
              </div>

              <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
                We don't just write code. We build the future of CIS. Meet the executive body and the visionaries keeping this community alive.
              </p>

              <div className="flex justify-center gap-4">
                <Button asChild variant="outline" className="rounded-lg border-slate-200 hover:bg-slate-50 shadow-sm">
                  <Link href="/team">View full team</Link>
                </Button>
                <Button asChild variant="ghost" className="text-blue-600 hover:bg-blue-50">
                  <Link href="/about">Our story</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ============================================= */}
        {/* 3. LATEST CONTENT / VIDEOS (NAVY BLUE)       */}
        {/* ============================================= */}
        <section id="content" className="pt-40 pb-24 px-6 bg-[#0b2447] relative">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-blue-500/10 blur-[100px] pointer-events-none"></div>

          <div className="max-w-6xl mx-auto relative z-10">
            <FadeIn>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
                <div>
                  <p className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-2">Latest Event</p>
                </div>
                  <Button asChild variant="outline" className="rounded-lg border-white/20 text-slate-200 hover:text-white hover:bg-white/10 bg-transparent">
                  <Link href="/events">
                    View all Events <IconArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </Button>

              </div>
            </FadeIn>

            {/* UPCOMING EVENT HIGHLIGHT */}
            {nextEvent && (
              <FadeIn className="mb-16">
                <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/10 rounded-2xl p-[1px] shadow-2xl">
                  <div className="bg-[#102a52] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 justify-between relative overflow-hidden backdrop-blur-xl">

                    <IconCalendarEvent className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 pointer-events-none" />

                    <div className="relative z-10 flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <p className="text-sm font-bold text-emerald-400 uppercase tracking-widest">Next Upcoming Event</p>
                      </div>

                      <h3 className="text-3xl font-black text-white mb-2">{nextEvent.title}</h3>
                      <div className="flex items-center gap-4 text-blue-200 font-medium text-sm mb-6">
                        <span className="flex items-center gap-1"><IconClock size={16} className="text-blue-400"/> {new Date(nextEvent.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        <span className="flex items-center gap-1"><IconBriefcase size={16} className="text-blue-400"/> {nextEvent.venue}</span>
                      </div>
                    </div>

                    <div className="relative z-10 w-full md:w-auto shrink-0">
                      <Button asChild size="lg" className="w-full md:w-auto bg-white hover:bg-slate-100 text-[#0b2447] rounded-xl py-6 px-10 text-lg font-bold shadow-xl transition-all hover:-translate-y-1">
                        <Link href={`/events/${nextEvent.slug}`}>
                          RSVP & Details <IconArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            )}

            {youtubeVideos.length > 0 ? (
              <div>

<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">

                <div>

                <h2 className="text-3xl flex flex-col md:text-4xl font-extrabold text-white tracking-tight">Recent Tech Talks</h2>
              </div>
              <Button asChild variant="outline" className="rounded-lg border-white/20 text-slate-200 hover:text-white hover:bg-white/10 bg-transparent">
                  <a href="https://www.youtube.com/@CISCommunityNEDUET"
                  target="_blank"
                  >
                    View YT Channel <IconArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </Button>
                </div>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {youtubeVideos.map((video) => (
                  <StaggerItem key={video.id}>
                    <Card className="h-full flex flex-col border-0 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-xl bg-white/5 backdrop-blur-md overflow-hidden group">
                      <div className="relative w-full aspect-video overflow-hidden bg-[#0b2447]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={video.thumbnail} alt={video.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
                      </div>
                      <CardHeader className="p-5 pb-2">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-red-500/10 text-red-400 border-0 font-bold text-[10px] px-2 py-0.5 uppercase tracking-wider rounded">
                            YouTube
                          </Badge>
                        </div>
                        <CardTitle className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors leading-snug line-clamp-2">
                          {video.title.replace(/&amp;/g, '&')}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="px-5 pb-4 flex-grow">
                        <div className="flex items-center gap-2 text-xs text-blue-200/60 font-bold uppercase tracking-wide">
                          <IconClock size={14} className="text-blue-400/60" /> {video.date}
                        </div>
                      </CardContent>
                      <CardFooter className="px-5 pb-5 pt-0 mt-auto">
                        <Button asChild className="w-full bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg py-5 transition-colors border border-white/5">
                          <a href={video.link} target="_blank" rel="noopener noreferrer">Watch Now</a>
                        </Button>
                      </CardFooter>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
            ) : (
              <FadeIn>
                <div className="text-center py-16 bg-white/5 rounded-xl border border-dashed border-white/20 shadow-sm">
                  <p className="text-blue-200/70 text-lg font-medium">No recent videos found.</p>
                </div>
              </FadeIn>
            )}
          </div>
        </section>

        {/* ============================================= */}
        {/* 4. TESTIMONIALS                              */}
        {/* ============================================= */}
        <section className="py-24 px-6 bg-slate-50 overflow-hidden">
          <div className="max-w-6xl mx-auto">
             <FadeIn className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Word on campus</h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6">
              <FadeIn delay={0.1}>
                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm relative">
                  <IconQuote className="absolute top-6 right-6 w-8 h-8 text-slate-100" />
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
                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm relative">
                  <IconQuote className="absolute top-6 right-6 w-8 h-8 text-slate-100" />
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
        <section id="faq" className="py-24 px-6 bg-white text-slate-900 border-t border-slate-100">
          <div className="max-w-3xl mx-auto">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
                Questions?
              </h2>
              <p className="text-slate-500 text-base">Here's what people usually ask us.</p>
            </FadeIn>

            <StaggerContainer className="space-y-4">
              <StaggerItem>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:bg-slate-100 transition-colors">
                  <h3 className="font-bold text-lg mb-2">Who can join?</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Any student currently enrolled in the CIS department at NED University.
                    Year doesn&apos;t matter — we&apos;ve got freshmen and final-years. No coding prerequisites either.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:bg-slate-100 transition-colors">
                  <h3 className="font-bold text-lg mb-2">How much time does it take?</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Totally up to you. Events are usually on weekends or after classes.
                    There&apos;s no attendance requirement — show up when you can, contribute when you want to.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <FadeIn delay={0.4}>
              <div className="mt-12 text-center">
                <Button asChild size="lg" className="bg-[#0b2447] hover:bg-blue-700 text-white font-bold px-8 py-6 rounded-lg shadow-xl hover:scale-105 transition-all text-base">
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