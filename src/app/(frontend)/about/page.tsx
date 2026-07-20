import Image from 'next/image';
import { getPayload } from "payload";
import configPromise from '@payload-config';
import { IconQuote, IconCalendarEvent, IconUsers, IconRocket, IconBrandLinkedin } from '@tabler/icons-react';

export default async function AboutPage() {
  const payload = await getPayload({ config: configPromise });
  const aboutData = await payload.findGlobal({ slug: 'about' });
  const eventsCount = await payload.count({ collection: 'events' });
  const teamCount = await payload.count({ collection: 'team' });
  const FOUNDATION_YEAR = 2024;
  const activeYears = new Date().getFullYear() - FOUNDATION_YEAR;
  const focalImageUrl = typeof aboutData.focalPerson?.image === 'object' && aboutData.focalPerson?.image?.url
    ? aboutData.focalPerson.image.url
    : '/placeholder-user.jpg';
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
                <div className="flex flex-wrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-8 w-full">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl mx-auto">
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