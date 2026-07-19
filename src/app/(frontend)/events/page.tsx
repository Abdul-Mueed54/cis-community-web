import React from 'react';
import { IconCalendarEvent, IconClock, IconTicket } from '@tabler/icons-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/FadeIn";
import configPromise from '@payload-config';
import { getPayload } from "payload";

export default async function EventsPage() {
  const payload = await getPayload({ config: configPromise });
  const eventsData = await payload.find({
    // @ts-ignore
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
      case 'hackathon': return 'bg-orange-500/10 text-orange-600 hover:bg-orange-500/20';
      case 'workshop': return 'bg-blue-500/10 text-blue-600 hover:bg-blue-500/20';
      case 'seminar': return 'bg-purple-500/10 text-purple-600 hover:bg-purple-500/20';
      case 'meetup': return 'bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20';
      case 'competition': return 'bg-rose-500/10 text-rose-600 hover:bg-rose-500/20';
      default: return 'bg-slate-500/10 text-slate-600 hover:bg-slate-500/20';
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
    <div className="min-h-screen bg-slate-50 flex flex-col pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto space-y-16 relative z-10 w-full">
        
        {/* ==========================================
            1. HEADER SECTION
        ========================================== */}
        <div className="text-center space-y-6">
          <FadeIn>
            <div className="inline-flex p-4 rounded-full bg-indigo-100 text-indigo-600 mb-4 shadow-lg shadow-indigo-100/50">
              <IconCalendarEvent size={48} />
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight">
              Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">Events</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
              Discover all the amazing hackathons, seminars, and meetups we are organizing to help you grow.
            </p>
          </FadeIn>
        </div>

        {/* ==========================================
            2. FEATURED NEXT EVENT
        ========================================== */}
        {nextFeaturedEvent && (
          <FadeIn delay={0.3}>
            <Card className="w-full bg-[#0b2447] border-0 shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[120px] opacity-20 -mr-20 -mt-20 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-violet-500 rounded-full blur-[100px] opacity-20 -ml-20 -mb-20 pointer-events-none"></div>
              
              <div className="flex flex-col md:flex-row items-center relative z-10 p-8 md:p-12 gap-8 md:gap-12">
                <div className="flex-1 space-y-6 text-center md:text-left">
                  <Badge className="bg-indigo-500/20 text-indigo-200 border-0 uppercase tracking-widest font-bold py-1.5 px-4 mb-2">Next Big Event</Badge>
                  <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                    {nextFeaturedEvent.title}
                  </h2>
                  <p className="text-indigo-100/80 text-lg md:text-xl leading-relaxed max-w-2xl">
                    {nextFeaturedEvent.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 text-indigo-200 pt-4 font-medium">
                    {/* Event Date Box */}
                    <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                      <IconCalendarEvent size={20} />
                      <span>{formatDate(nextFeaturedEvent.date)}</span>
                    </div>
                    {/* Event Tag/Category */}
                    <Badge className="bg-white/10 text-indigo-200 border-0 px-4 py-2 text-sm">{nextFeaturedEvent.tag}</Badge>
                  </div>
                </div>
                
                <div className="shrink-0 w-full md:w-auto">
                  <Button size="lg" className="w-full md:w-auto bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl py-8 px-10 text-xl font-bold shadow-lg shadow-indigo-500/30 transition-all hover:scale-105">
                    <IconTicket className="mr-2 h-6 w-6" /> Register Now
                  </Button>
                </div>
              </div>
            </Card>
          </FadeIn>
        )}

        {/* ==========================================
            3. EVENT ARCHIVES (TABS SECTION)
            This section uses the Shadcn 'Tabs' component to switch 
            between Upcoming and Past events without reloading the page.
        ========================================== */}
        <section className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
          <Tabs defaultValue="upcoming" className="w-full">
            
            {/* --- TAB BUTTONS (The Switcher) --- */}
            <div className="flex justify-center mb-10">
              <TabsList className="bg-slate-100 p-1.5 rounded-xl">
                {/* Upcoming Events Button */}
                <TabsTrigger value="upcoming" className="rounded-lg font-bold text-lg px-8 py-2.5">
                  Upcoming Events
                  {/* Badge showing number of remaining events */}
                  {remainingUpcomingEvents.length > 0 && <span className="ml-2 bg-indigo-100 text-indigo-600 text-xs px-2 py-0.5 rounded-full">{remainingUpcomingEvents.length}</span>}
                </TabsTrigger>
                
                {/* Past Events Button */}
                <TabsTrigger value="past" className="rounded-lg font-bold text-lg px-8 py-2.5">
                  Past Events
                </TabsTrigger>
              </TabsList>
            </div>
            
            {/* --- UPCOMING EVENTS LIST --- */}
            <TabsContent value="upcoming" className="focus-visible:outline-none">
              {remainingUpcomingEvents.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Loop through each upcoming event */}
                  {remainingUpcomingEvents.map((event) => (
                    <Card key={event.id} className="border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-4">
                          {/* Event Category Badge */}
                          <Badge className={`${getTagColor(event.tag)} border-0`}>{event.tag}</Badge>
                          {/* Coming Soon Text */}
                          <div className="text-slate-400 text-sm font-medium flex items-center">
                            <IconClock size={16} className="mr-1" /> Coming soon
                          </div>
                        </div>
                        {/* Event Title */}
                        <CardTitle className="text-2xl font-bold text-slate-800">{event.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        {/* Event Description (Truncated to 3 lines) */}
                        <p className="text-slate-500 line-clamp-3 leading-relaxed mb-6 whitespace-pre-wrap">{event.description}</p>
                        
                        {/* Event Date at bottom */}
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center text-slate-600 text-sm font-medium">
                            <IconCalendarEvent size={18} className="mr-2 text-indigo-500" />
                            {formatDate(event.date)}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                  <IconCalendarEvent size={48} className="mx-auto text-slate-300 mb-4" />
                  <h3 className="text-xl font-bold text-slate-700 mb-2">No more upcoming events</h3>
                  <p className="text-slate-500">We're planning something big. Stay tuned!</p>
                </div>
              )}
            </TabsContent>
            
            {/* --- PAST EVENTS LIST --- */}
            <TabsContent value="past" className="focus-visible:outline-none">
              {pastEvents.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Loop through each past event */}
                  {pastEvents.map((event) => (
                    <Card key={event.id} className="border-slate-200 shadow-sm bg-slate-50 opacity-80 hover:opacity-100 transition-opacity">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-4">
                          {/* Event Category Badge */}
                          <Badge className={`${getTagColor(event.tag)} border-0`}>{event.tag}</Badge>
                          <Badge variant="outline" className="bg-slate-200 text-slate-500 border-0">Completed</Badge>
                        </div>
                        {/* Event Title */}
                        <CardTitle className="text-2xl font-bold text-slate-700">{event.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        {/* Event Description */}
                        <p className="text-slate-500 line-clamp-3 leading-relaxed mb-6 whitespace-pre-wrap">{event.description}</p>
                        
                        {/* Event Date */}
                        <div className="flex items-center text-slate-500 text-sm font-medium">
                          <IconCalendarEvent size={18} className="mr-2" />
                          {formatDate(event.date)}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                  <IconCalendarEvent size={48} className="mx-auto text-slate-300 mb-4" />
                  <h3 className="text-xl font-bold text-slate-700 mb-2">No past events yet</h3>
                  <p className="text-slate-500">We just started! Our history is yet to be written.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </section>

      </div>
      
      {/* ==========================================
          4. DECORATIVE BACKGROUND
      ========================================== */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-200/30 blur-[100px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-violet-200/20 blur-[120px]"></div>
      </div>
    </div>
  );
}
