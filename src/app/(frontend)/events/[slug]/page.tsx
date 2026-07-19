import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPayload } from "payload";
import configPromise from '@payload-config';
import { IconCalendarEvent, IconMapPin, IconTicket, IconUsers, IconPhoto, IconBrandYoutube, IconTrophy, IconArrowRight, IconHandMove, } from '@tabler/icons-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default async function EventDynamicPage({ params }: { params: { slug: string } }) {
  const payload = await getPayload({ config: configPromise });
  const {slug} = await params;
  const eventReq = await payload.find({
    collection: 'events',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  });

  const event = eventReq.docs[0];

  if (!event) {
    notFound();
  }

  const isCompleted = event.status === 'completed';

  const featuredImageUrl = typeof event.featuredImage === 'object' && event.featuredImage?.url
    ? event.featuredImage.url
    : '/placeholder-event.jpg'; // Optional: Add a fallback image in your public folder

  const insightsImageUrl = typeof event.insightsImage === 'object' && event.insightsImage?.url
    ? event.insightsImage.url
    : '/placeholder-event.jpg';

  // Safely map the gallery array to just get the URL strings
  const galleryImages = event.gallery?.map((item: any) => {
    if (typeof item.image === 'object' && item.image?.url) {
      return item.image.url;
    }
    return null;
  }).filter(Boolean) || [];

  return (
    <div className="min-h-screen relative font-sans pb-24 text-slate-800">

      {/* BACKGROUND ORBS */}
      <div className="fixed inset-0 -z-10 bg-slate-50 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[20rem] h-[20rem] lg:w-[40rem] lg:h-[40rem] rounded-full bg-blue-300/30 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[20rem] h-[20rem] lg:w-[40rem] lg:h-[40rem] rounded-full bg-indigo-300/20 blur-[120px]" />
      </div>

      <main className="pt-32 px-6 max-w-5xl mx-auto space-y-12">

        {/* ==========================================
            1. UNIVERSAL HERO SECTION
        ========================================== */}
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
                  <span>
                    {/* Render Payload's Date object cleanly */}
                    {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} • {event.time}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <IconMapPin size={20} className="text-blue-500" />
                  <span>{event.venue}</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto flex flex-col gap-4">
              {!isCompleted ? (
                <Button asChild size="lg" className="w-full bg-[#0b2447] hover:bg-blue-600 text-white rounded-xl py-8 px-10 text-lg font-bold shadow-xl transition-all hover:-translate-y-1">
                  <a href={event.registrationLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer">
                    <IconTicket className="mr-2 h-6 w-6" /> RSVP Now
                  </a>
                </Button>
              ) : (
                event.videoLink ? (
                  <Button asChild size="lg" variant="outline" className="w-full bg-white/60 border-slate-300 text-slate-700 rounded-xl py-8 px-10 text-lg font-bold hover:bg-white transition-all">
                    <Link href={event.videoLink} target="_blank" rel="noopener noreferrer">
                      <IconBrandYoutube className="mr-2 h-6 w-6 text-red-500" /> Watch Recording
                    </Link>
                  </Button>
                ) : null
              )}
            </div>
          </div>
        </section>

        {/* ==========================================
            2. DYNAMIC CONTENT SECTION
        ========================================== */}

        {!isCompleted ? (
          /* --- PRE-EVENT: THE HYPE --- */
          <section className="grid md:grid-cols-3 lg:grid-cols-1 grid-rows-2 gap-8">
            {event.featuredImage && (
              <div className="w-full h-[300px] md:h-[450px] row-span-1 rounded-2xl overflow-hidden shadow-sm border border-white/50 relative min-h-[250px] md:min-h-full">
                <Image
                  src={featuredImageUrl}
                  alt={`${event.title} Publicity Banner`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
              </div>
            )}

            <div className="md:col-span-2 rounded-2xl p-8 md:p-10 shadow-[0_8px_32px_rgba(15,23,42,0.06)] border border-white/50 bg-white/25 backdrop-blur-2xl backdrop-saturate-150">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <IconUsers className="text-blue-500" /> About the Event
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-wrap">
                {event.about}
              </p>
            </div>
          </section>

        ) : (
          /* --- POST-EVENT: THE LEGACY --- */
          <div className="space-y-12">

            <section className="rounded-2xl p-8 md:p-10 shadow-[0_8px_32px_rgba(15,23,42,0.06)] border border-white/50 bg-white/40 backdrop-blur-2xl backdrop-saturate-150">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <IconTrophy className="text-yellow-500" /> Event Insights
              </h2>

              {/* BIG INSIGHTS HERO IMAGE */}
              {event.insightsImage && (
                <div className="w-full h-[300px] md:h-[450px] relative rounded-xl overflow-hidden mb-8 shadow-sm border border-white/60">
                  <Image
                    src={insightsImageUrl}
                    alt="Event Highlight"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 1024px"
                  />
                </div>
              )}

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1 prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed whitespace-pre-wrap">
                  <p>{event.insights}</p>
                </div>

                {event.winners && (
                  <div className="shrink-0 w-full md:w-64 p-6 bg-slate-50/80 rounded-xl border border-slate-100 flex flex-col gap-2">
                    <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 text-yellow-700 rounded-lg mb-2">
                      <IconTrophy size={24}/>
                    </div>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Winners</p>
                    <p className="font-bold text-lg text-slate-900">{event.winners}</p>
                  </div>
                )}
              </div>
            </section>

            {/* Photo Gallery - Horizontal Scroll Snap */}
            {galleryImages.length > 0 && (
              <section className="rounded-2xl py-10 shadow-[0_8px_32px_rgba(15,23,42,0.06)] border border-white/50 bg-white/25 backdrop-blur-2xl backdrop-saturate-150 overflow-hidden relative">
                <div className="px-8 md:px-12 mb-6 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                    <IconPhoto className="text-blue-500" /> Event Gallery
                  </h2>
                  <span className="text-sm font-medium text-slate-400 hidden md:flex items-center gap-2">
                    Scroll to view <IconArrowRight size={16}/>
                  </span>
                </div>

                <div className="md:hidden px-8 mb-4 flex items-center gap-2 text-blue-500 text-sm font-bold">
                  <IconHandMove size={18} />
                  {/* <span>Swipe to explore gallery</span> */}
                </div>

                <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-8 md:px-12 pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  {galleryImages.map((imgUrl: string, i: number) => (
                    <div
                      key={i}
                      className="relative snap-center shrink-0 w-[85vw] md:w-[400px] h-[280px] rounded-2xl overflow-hidden shadow-sm border border-white/60 bg-slate-100 group"
                    >
                      <Image
                        src={imgUrl}
                        alt={`Gallery image ${i + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 85vw, 400px"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>
        )}

      </main>
    </div>
  );
}