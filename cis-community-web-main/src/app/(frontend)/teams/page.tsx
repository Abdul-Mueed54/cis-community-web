import React from 'react';
import { IconUsers } from '@tabler/icons-react';
import { getPayload } from "payload";
import configPromise from '@payload-config';
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { TeamCard } from "@/components/ui/TeamCard";

export default async function TeamsPage() {
  const payload = await getPayload({ config: configPromise });
  const teamReq = await payload.find({
    // @ts-ignore
    collection: 'team',
    limit: 100,
  });

  const teamMembers = teamReq.docs;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-8 relative z-10 w-full">
        <FadeIn delay={0.1}>
          <div className="inline-flex p-4 rounded-full bg-emerald-100 text-emerald-600 mb-4 shadow-lg shadow-emerald-100/50">
            <IconUsers size={48} />
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-400">Team</span>
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed mb-16">
            Meet the brilliant minds and dedicated individuals who make the CIS community thrive.
          </p>
        </FadeIn>

        {teamMembers.length > 0 ? (
          <div className="space-y-24 pt-8">
            {[
              { id: 'executive_board', name: 'Executive Board' },
              { id: 'cooperation_marketing', name: 'Co-operation & Marketing' },
              { id: 'coding_innovation', name: 'Coding & Innovation' },
              { id: 'media', name: 'Media' },
              { id: 'publisher', name: 'Publisher' },
            ].map((dept) => {
              const deptMembers = teamMembers.filter((m: any) => m.department === dept.id);
              if (deptMembers.length === 0) return null;

              return (
                <div key={dept.id} className="space-y-12">
                  <FadeIn>
                    <div className="flex items-center justify-center gap-6">
                      <div className="h-px bg-slate-200 flex-1 max-w-[100px]"></div>
                      <h2 className="text-3xl md:text-4xl font-bold text-slate-800">{dept.name}</h2>
                      <div className="h-px bg-slate-200 flex-1 max-w-[100px]"></div>
                    </div>
                  </FadeIn>
                  
                  <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
                    {deptMembers.map((member) => (
                      <StaggerItem key={member.id}>
                        <TeamCard member={member} />
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              );
            })}
          </div>
        ) : (
          <FadeIn delay={0.4}>
            <div className="mt-12 p-12 bg-white/60 backdrop-blur-xl border border-white rounded-3xl shadow-2xl shadow-slate-200/50">
              <h2 className="text-3xl font-black text-slate-800 mb-4">Roster Coming Soon</h2>
              <p className="text-lg text-slate-500">We are currently assembling our team page in the CMS. Stay tuned!</p>
            </div>
          </FadeIn>
        )}
      </div>
      
      {/* Decorative background */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-emerald-200/30 blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-teal-200/20 blur-[120px]"></div>
      </div>
    </div>
  );
}
