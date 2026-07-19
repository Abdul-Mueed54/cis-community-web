
const mockTeamData = [
  { id: 1, name: "Ali Khan", role: "President", department: "Executive", roleTier: 1 },
  { id: 2, name: "Sara Ahmed", role: "Vice President", department: "Executive", roleTier: 2 },
  { id: 3, name: "Usman Tariq", role: "Director of Operations", department: "Executive", roleTier: 2 },

  { id: 4, name: "Alice Brown", role: "Head of Media", department: "Media", roleTier: 3 },
  { id: 5, name: "David Wilson", role: "Co-Head", department: "Media", roleTier: 4 },
  { id: 6, name: "Member One", role: "Member", department: "Media", roleTier: 5 },
  { id: 7, name: "Member Two", role: "Photographer", department: "Media", roleTier: 5 },
  { id: 8, name: "Member Three", role: "Editor", department: "Media", roleTier: 5 },
  { id: 15, name: "Member Four", role: "Member", department: "Media", roleTier: 5 },


  { id: 16, name: "Ayesha Malik", role: "Head of Media", department: "Publisher", roleTier: 3 },
  { id: 17, name: "Bilal Raza", role: "Co-Head of Media", department: "Publisher", roleTier: 4 },
  { id: 18, name: "Zainab Noor", role: "Member", department: "Publisher", roleTier: 5 },
  { id: 19, name: "Hamza Sheikh", role: "Member", department: "Publisher", roleTier: 5 },
  { id: 20, name: "Fatima Ali", role: "Member", department: "Publisher", roleTier: 5 },
  { id: 21, name: "Omar Tariq", role: "Member", department: "Publisher", roleTier: 5 },
];

// import { MemberCard } from '@/components/ui/TeamCard';

// export default function TeamsPageWireframe() {
//   const executives = mockTeamData.filter(m => m.department === "Executive");
//   const president = executives.find(m => m.roleTier === 1);
//   const vicePresidents = executives.filter(m => m.roleTier === 2);
//   const departments = ["Media", "Publisher", "Co-operation & Marketing", "Coding & Innovation"];

//   return (
//     <div className="min-h-screen relative font-sans pb-24 overflow-hidden">
//       <div className="fixed inset-0 -z-10 bg-slate-50">
//         <div className="absolute bottom-1/3 -left-40 w-[15rem] h-[15rem] lg:w-[30rem] lg:h-[50rem] rounded-full bg-blue-300/40 blur-3xl" />
//         <div className="absolute top-1/3 -right-40 w-[15rem] h-[15rem] lg:w-[30rem] lg:h-[50rem] rounded-full bg-teal-300/40 blur-3xl" />
//       </div>

//       <section className="pt-32 pb-16 px-6 text-center">
//         <div className="max-w-3xl mx-auto">
//           <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Leadership & Core</p>
//           <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6"> Meet the Team </h1>
//         </div>
//       </section>

//       {/* EXECUTIVE BODY */}
//       <section className="px-6 mb-24 text-center">
//         <div className="max-w-4xl mx-auto relative">
//           <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-widest mb-10">Executive Body</h2>
//           {president && (
//             <div className="flex justify-center mb-8">
//               <div className="w-full max-w-sm">
//                 <MemberCard member={president} size="lg" />
//               </div>
//             </div>
//           )}

//           {vicePresidents.length > 0 && (
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
//               {vicePresidents.map(vp => (
//                 <MemberCard key={vp.id} member={vp} size="md" />
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* DEPARTMENTAL TEAMS */}
//       <section className="px-6 space-y-16">
//         {departments.map(deptName => {
//           const deptMembers = mockTeamData.filter(m => m.department === deptName);
//           if (deptMembers.length === 0) return null;
//           const heads = deptMembers.filter(m => m.roleTier === 3 || m.roleTier === 4).sort((a, b) => a.roleTier - b.roleTier);
//           const members = deptMembers.filter(m => m.roleTier === 5);

//           return (
//             <div key={deptName} className="max-w-5xl mx-auto rounded-2xl p-8 md:p-12 shadow-[0_8px_32px_rgba(15,23,42,0.06)] border border-white/50 bg-white/25 backdrop-blur-2xl backdrop-saturate-150" >
//               <div className="mb-10"> <h2 className="text-3xl font-extrabold text-slate-900">{deptName} Team</h2> </div>
//               <div className="flex flex-col gap-8">

//                 {/* HEADS - Wide 2 Column Grid */}
//                 {heads.length > 0 && (
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
//                     {heads.map(head => (
//                       <MemberCard key={head.id} member={head} size="wide" />
//                     ))}
//                   </div>
//                 )}

//                 {/* MEMBERS - 4 Column Grid */}
//                 {members.length > 0 && (
//                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
//                     {members.map(member => (
//                       <MemberCard key={member.id} member={member} size="sm" />
//                     ))}
//                   </div>
//                 )}

//               </div>
//             </div>
//           );
//         })}
//       </section>

//     </div>
//   );
// }

import { getPayload } from "payload";
import configPromise from '@payload-config';
import { MemberCard } from '@/components/ui/TeamCard';

export default async function TeamsPage() {
  // 1. Fetch live data from Payload
  const payload = await getPayload({ config: configPromise });
  const teamReq = await payload.find({
    collection: 'team',
    limit: 100, // Fetch all members
  });

  const teamMembers = teamReq.docs;

  // 2. Filter Executive Body
  const executives = teamMembers.filter((m: any) => m.department === "executive_board");
  // Note: Ensure roleTier is checked as a string if defined as a select option in Payload
  const president = executives.find((m: any) => m.roleTier === '1');
  const vicePresidents = executives.filter((m: any) => m.roleTier === '2');

  // 3. Define standard departments mapping (CMS slug -> Display Name)
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6"> Meet the Team </h1>
        </div>
      </section>

      {/* EXECUTIVE BODY */}
      <section className="px-6 mb-24 text-center">
        <div className="max-w-4xl mx-auto relative">
          <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-widest mb-10">Executive Body</h2>
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