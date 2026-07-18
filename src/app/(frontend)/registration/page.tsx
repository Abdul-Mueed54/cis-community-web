"use client"
import React, { useState } from 'react';
import { IconUserPlus, IconCheck } from '@tabler/icons-react';
import { Button } from "@/components/ui/button";
import { submitRegistration } from './actions';

export default function RegistrationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const result = await submitRegistration(formData);

    if (result.success) {
      setIsSuccess(true);
    } else {
      setError(result.error || 'Something went wrong');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 w-full">
        <div className="inline-flex p-4 rounded-full bg-rose-100 text-rose-600 mb-4 shadow-lg shadow-rose-100/50 animate-bounce">
          <IconUserPlus size={48} />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight">
          Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-400">Us</span>
        </h1>
        <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
          Become a part of the fastest-growing tech community on campus and supercharge your career.
        </p>

        <div className="mt-12 p-8 md:p-12 bg-white/60 backdrop-blur-xl border border-white rounded-3xl shadow-2xl shadow-slate-200/50 hover:shadow-rose-200/50 transition-all duration-500 flex flex-col items-center max-w-xl mx-auto">
          {isSuccess ? (
            <div className="flex flex-col items-center space-y-6 py-12">
              <div className="h-24 w-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-100/50">
                <IconCheck size={48} />
              </div>
              <h2 className="text-3xl font-black text-slate-800">Registration Complete!</h2>
              <p className="text-lg text-slate-500 text-center max-w-md">
                Thank you for applying. We will review your application and get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full space-y-6 text-left">
              <h2 className="text-3xl font-black text-slate-800 mb-6 text-center">Registration Form</h2>
              
              {error && (
                <div className="p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 text-sm font-medium">
                  {error}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name <span className="text-rose-500">*</span></label>
                  <input required name="name" type="text" className="flex h-12 w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all" placeholder="John Doe" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address <span className="text-rose-500">*</span></label>
                  <input required name="email" type="email" className="flex h-12 w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all" placeholder="john@example.com" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Student ID <span className="text-rose-500">*</span></label>
                    <input required name="studentId" type="text" className="flex h-12 w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all" placeholder="e.g. 123456" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Department/Major <span className="text-rose-500">*</span></label>
                    <input required name="department" type="text" className="flex h-12 w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all" placeholder="Computer Science" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Why do you want to join? (Optional)</label>
                  <textarea name="reason" rows={4} className="flex w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all resize-none" placeholder="Tell us a bit about yourself..."></textarea>
                </div>
              </div>

              <Button disabled={isSubmitting} type="submit" className="w-full h-14 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-lg shadow-lg shadow-rose-500/30 transition-all hover:scale-[1.02]">
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </form>
          )}
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
