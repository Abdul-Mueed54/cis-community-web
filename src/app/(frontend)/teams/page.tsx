import { getPayload } from "payload";
import configPromise from '@payload-config';
import { MemberCard } from '@/components/ui/TeamCard';

export default async function TeamsPage() {

  const payload = await getPayload({ config: configPromise });
  const teamReq = await payload.find({
    collection: 'team',
    limit: 100, // Fetch all members
  });

  const teamMembers = teamReq.docs;
  const executives = teamMembers.filter((m: any) => m.department === "executive_board");
  const president = executives.find((m: any) => m.roleTier === '1');
  const vicePresidents = executives.filter((m: any) => m.roleTier === '2');
  const departments = [
    { slug: "media", name: "Media" },
    { slug: "publisher", name: "Publisher" },
    { slug: "cooperation_marketing", name: "Co-operation & Marketing" },
    { slug: "coding_innovation", name: "Coding & Innovation" }
  ];

  return (
    <div className="min-h-screen relative font-sans pb-24 overflow-hidden">
      {/* BACKGROUND ORBS */}
      <div className="fixed inset-0 -z-10 bg-slate-50">
        <div className="absolute bottom-1/3 -left-40 w-[15rem] h-[15rem] lg:w-[30rem] lg:h-[50rem] rounded-full bg-blue-300/40 blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[15rem] h-[15rem] lg:w-[30rem] lg:h-[50rem] rounded-full bg-teal-300/40 blur-3xl" />
      </div>

      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Leadership & Core</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6"> Meet The Team </h1>
        </div>
      </section>

      {/* EXECUTIVE BODY */}
      <section className="px-6 mb-24 text-center">
        <div className="max-w-4xl mx-auto relative">
         {teamMembers && (
          <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-widest mb-10">Executive Body</h2>
          )}
          {president && (
            <div className="flex justify-center mb-8">
              <div className="w-full max-w-sm">
                <MemberCard member={president} size="lg" />
              </div>
            </div>
          )}

          {vicePresidents.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {vicePresidents.map((vp: any) => (
                <MemberCard key={vp.id} member={vp} size="md" />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* DEPARTMENTAL TEAMS */}
      <section className="px-6 space-y-16">
        {departments.map(dept => {
          // Filter by Payload slug
          const deptMembers = teamMembers.filter((m: any) => m.department === dept.slug);
          if (deptMembers.length === 0) return null;

          const heads = deptMembers
            .filter((m: any) => m.roleTier === '3' || m.roleTier === '4')
            .sort((a: any, b: any) => Number(a.roleTier) - Number(b.roleTier));

          const members = deptMembers.filter((m: any) => m.roleTier === '5');

          return (
            <div key={dept.slug} className="max-w-5xl mx-auto rounded-2xl p-8 md:p-12 shadow-[0_8px_32px_rgba(15,23,42,0.06)] border border-white/50 bg-white/25 backdrop-blur-2xl backdrop-saturate-150">
              <div className="mb-10">
                <h2 className="text-3xl font-extrabold text-slate-900">{dept.name} Team</h2>
              </div>
              <div className="flex flex-col gap-8">

                {/* HEADS - Wide 2 Column Grid */}
                {heads.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {heads.map((head: any) => (
                      <MemberCard key={head.id} member={head} size="wide" />
                    ))}
                  </div>
                )}

                {/* MEMBERS - 4 Column Grid */}
                {members.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {members.map((member: any) => (
                      <MemberCard key={member.id} member={member} size="sm" />
                    ))}
                  </div>
                )}

              </div>
            </div>
          );
        })}
      </section>

    </div>
  );
}