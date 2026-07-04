import React from 'react';
import { IconCalendarEvent } from '@tabler/icons-react';

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="inline-flex p-4 rounded-full bg-indigo-100 text-indigo-600 mb-4 shadow-lg shadow-indigo-100/50 animate-bounce">
          <IconCalendarEvent size={48} />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight">
          Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-400">Events</span>
        </h1>
        <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
          Discover all the amazing hackathons, seminars, and meetups we are organizing to help you grow.
        </p>
        <div className="mt-12 p-12 bg-white/60 backdrop-blur-xl border border-white rounded-3xl shadow-2xl shadow-slate-200/50 hover:shadow-indigo-200/50 transition-all duration-500">
          <h2 className="text-3xl font-black text-slate-800 mb-4">Calendar Coming Soon</h2>
          <p className="text-lg text-slate-500">We're gathering the best events for you. Check back shortly!</p>
        </div>
      </div>
      
      {/* Decorative background */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-200/30 blur-[100px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-violet-200/20 blur-[120px]"></div>
      </div>
    </div>
  );
}
