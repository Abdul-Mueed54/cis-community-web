import React from 'react';
import { getPayload } from "payload";
import configPromise from '@payload-config';
import { IconCalendarEvent, IconClock, IconMapPin, IconTicket, IconArrowRight } from '@tabler/icons-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default async function EventsPage() {
  const payload = await getPayload({ config: configPromise });
  const eventsData = await payload.find({
    collection: 'events',
    sort: 'date',
    limit: 100,
  });

  const now = new Date();

  // Categorize events
  const allEvents = eventsData.docs as any[];
  const upcomingEvents = allEvents.filter(e => new Date(e.date) >= now).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const pastEvents = allEvents.filter(e => new Date(e.date) < now).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Extract the very next event for the Hero section
  const nextFeaturedEvent = upcomingEvents.length > 0 ? upcomingEvents[0] : null;
  const remainingUpcomingEvents = upcomingEvents.length > 0 ? upcomingEvents.slice(1) : [];

  const getTagColor = (tag: string) => {
    switch(tag?.toLowerCase()) {
      case 'hackathon': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'workshop': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'seminar': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'meetup': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'competition': return 'bg-rose-100 text-rose-700 border-rose-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen relative font-sans pb-24 overflow-hidden">

      {/* BACKGROUND ORBS (Matches Teams Page) */}
      <div className="fixed inset-0 -z-10 bg-slate-50">
        <div className="absolute bottom-1/3 -left-40 w-[15rem] h-[15rem] lg:w-[35rem] lg:h-[50rem] rounded-full bg-blue-300/40 blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[15rem] h-[15rem] lg:w-[30rem] lg:h-[50rem] rounded-full bg-teal-300/40 blur-3xl" />
      </div>

      {/* HEADER */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Community Hub</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Events & Workshops
          </h1>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Discover all the amazing hackathons, seminars, and meetups we organize to help you build, learn, and grow.
          </p>
        </div>
      </section>

      {/* 1. FEATURED NEXT EVENT */}
      {nextFeaturedEvent && (
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto rounded-2xl p-8 md:p-12 shadow-[0_8px_32px_rgba(15,23,42,0.06)] border border-white/50 bg-white/25 backdrop-blur-2xl backdrop-saturate-150 relative overflow-hidden">

            {/* Subtle internal gradient for the featured box */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3">
                  <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">Next Big Event</p>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                  {nextFeaturedEvent.title}
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
                  {nextFeaturedEvent.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-lg border border-slate-200/50 text-slate-700 font-medium text-sm shadow-sm">
                    <IconCalendarEvent size={18} className="text-blue-600" />
                    <span>{formatDate(nextFeaturedEvent.date)}</span>
                  </div>
                  <Badge variant="outline" className={`${getTagColor(nextFeaturedEvent.tag)} px-4 py-2 text-sm shadow-sm bg-white/60`}>
                    {nextFeaturedEvent.tag}
                  </Badge>
                </div>
              </div>

              <div className="shrink-0 w-full md:w-auto">
                <Button size="lg" className="w-full md:w-auto bg-[#0b2447] hover:bg-blue-600 text-white rounded-xl py-7 px-10 text-lg font-bold shadow-xl shadow-blue-900/20 transition-all hover:-translate-y-1">
                  <IconTicket className="mr-2 h-6 w-6" /> Register Now
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 2. UPCOMING EVENTS GRID */}
      {remainingUpcomingEvents.length > 0 && (
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto rounded-2xl p-8 md:p-12 shadow-[0_8px_32px_rgba(15,23,42,0.06)] border border-white/50 bg-white/25 backdrop-blur-2xl backdrop-saturate-150">
            <div className="mb-10">
              <h2 className="text-3xl font-extrabold text-slate-900">Upcoming Schedule</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {remainingUpcomingEvents.map((event) => (
                <div key={event.id} className="bg-white/70 hover:bg-white transition-all duration-300 rounded-xl p-6 border border-white shadow-sm hover:shadow-md flex flex-col h-full group">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline" className={`${getTagColor(event.tag)} bg-white/50`}>{event.tag}</Badge>
                    <div className="text-slate-400 text-xs font-bold uppercase tracking-wider flex items-center">
                      <IconClock size={14} className="mr-1" /> Soon
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">{event.title}</h3>
                  <p className="text-slate-500 text-sm line-clamp-3 leading-relaxed mb-6 flex-grow">{event.description}</p>

                  <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between">
                    <div className="flex items-center text-slate-600 text-sm font-medium">
                      <IconCalendarEvent size={16} className="mr-2 text-blue-500" />
                      {formatDate(event.date)}
                    </div>
                    <IconArrowRight size={18} className="text-slate-300 group-hover:text-blue-500 transition-colors group-hover:translate-x-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. PAST EVENTS (ARCHIVE) */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto rounded-2xl p-8 md:p-12 shadow-[0_8px_32px_rgba(15,23,42,0.06)] border border-white/50 bg-white/25 backdrop-blur-2xl backdrop-saturate-150">
          <div className="mb-10 flex items-center gap-4">
            <h2 className="text-3xl font-extrabold text-slate-900">Past Events</h2>
            <span className="bg-slate-200 text-slate-600 text-xs font-bold px-3 py-1 rounded-full">{pastEvents.length}</span>
          </div>

          {pastEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <div key={event.id} className="bg-slate-50/50 rounded-xl p-6 border border-slate-200/60 shadow-sm opacity-90 hover:opacity-100 transition-opacity flex flex-col h-full grayscale hover:grayscale-0">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline" className={`${getTagColor(event.tag)} bg-white/50`}>{event.tag}</Badge>
                  </div>

                  <h3 className="text-lg font-bold text-slate-700 mb-2">{event.title}</h3>
                  <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed mb-6 flex-grow">{event.description}</p>

                  <div className="flex items-center text-slate-400 text-xs font-medium mt-auto">
                    <IconCalendarEvent size={14} className="mr-1.5" />
                    {formatDate(event.date)}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white/40 rounded-xl border border-dashed border-slate-300">
              <IconCalendarEvent size={32} className="mx-auto text-slate-300 mb-3" />
              <h3 className="text-lg font-bold text-slate-700 mb-1">No history yet</h3>
              <p className="text-slate-500 text-sm">We're just getting started. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}