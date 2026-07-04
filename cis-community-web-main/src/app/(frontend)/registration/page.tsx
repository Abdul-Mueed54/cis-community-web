import React from 'react';
import { IconUserPlus } from '@tabler/icons-react';
import { Button } from "@/components/ui/button";

export default function RegistrationPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="inline-flex p-4 rounded-full bg-rose-100 text-rose-600 mb-4 shadow-lg shadow-rose-100/50 animate-bounce">
          <IconUserPlus size={48} />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight">
          Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-400">Us</span>
        </h1>
        <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
          Become a part of the fastest-growing tech community on campus and supercharge your career.
        </p>
        <div className="mt-12 p-12 bg-white/60 backdrop-blur-xl border border-white rounded-3xl shadow-2xl shadow-slate-200/50 hover:shadow-rose-200/50 transition-all duration-500 flex flex-col items-center">
          <h2 className="text-3xl font-black text-slate-800 mb-6">Registration Opening Soon</h2>
          <p className="text-lg text-slate-500 mb-8 max-w-lg text-center">
            We're putting the final touches on our new registration portal. Leave your email below to get notified when we launch.
          </p>
          <div className="flex w-full max-w-md items-center space-x-2">
            <input type="email" placeholder="Email address" className="flex h-12 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50" />
            <Button className="h-12 px-6 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold transition-colors">Notify Me</Button>
          </div>
        </div>
      </div>
      
      {/* Decorative background */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[30%] w-[500px] h-[500px] rounded-full bg-orange-200/30 blur-[100px]"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-rose-200/20 blur-[120px]"></div>
      </div>
    </div>
  );
}
