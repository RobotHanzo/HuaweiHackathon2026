import { MapPin, Users, Star, Map } from "lucide-react";
import React from "react";
import { AiDraftGenerator } from "./components/AiDraftGenerator";

const imgMapBg = "https://picsum.photos/seed/map42/700/400";

interface TimelineEntryProps {
  name: string;
  role: string;
  roleColor: string;
  time: string;
  quote: string;
  borderColor: string;
  icon: React.ReactNode;
  tags?: string[];
}

function TimelineEntry({ name, role, roleColor, time, quote, borderColor, icon, tags }: TimelineEntryProps) {
  return (
    <div
      className={`bg-[#1b1b1b] border-l-2 flex flex-col gap-4 items-start px-[22px] py-5 relative rounded-xl shadow-[0px_8px_24px_0px_rgba(0,0,0,0.06)] w-full`}
      style={{ borderColor }}
    >
      {/* Header row */}
      <div className="flex items-start justify-between w-full">
        <div className="flex gap-3 items-center">
          <div className="bg-[#353535] flex items-center justify-center rounded-lg shrink-0 size-10">
            {icon}
          </div>
          <div className="flex flex-col">
            <p className="font-['Manrope:Bold',sans-serif] font-bold text-[#e5e2e1] text-[16px] leading-6 whitespace-nowrap">{name}</p>
            <p className={`font-['Inter:Regular',sans-serif] text-[10px] leading-4 tracking-[-0.5px] uppercase whitespace-nowrap`} style={{ color: roleColor }}>{role}</p>
          </div>
        </div>
        <div className="flex flex-col items-end shrink-0">
          <Star size={11} className="text-[#c6c5d4] mb-1" strokeWidth={1.5} />
          <p className="font-['Inter:Regular',sans-serif] text-[#c6c5d4] text-[10px] leading-4 whitespace-nowrap">{time}</p>
        </div>
      </div>

      {/* Voice memo quote */}
      <div className="bg-[#0e0e0e] flex gap-3 items-start p-3 rounded-lg w-full">
        <span className="text-[#c6c5d4] text-lg leading-none mt-0.5 shrink-0">"</span>
        <p className="font-['Manrope:Regular',sans-serif] text-[#c6c5d4] text-[13px] leading-[1.65]">{quote}</p>
      </div>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {tags.map(tag => (
            <span key={tag} className="bg-[#394857] text-[#a7b7c8] font-['Inter:Regular',sans-serif] text-[10px] tracking-[1px] uppercase px-3 py-1 rounded-full">{tag}</span>
          ))}
        </div>
      )}

      {/* Follow Up */}
      <div className="w-full mt-2">
        <AiDraftGenerator 
          recipientName={name.split(" ")[0]}
          buttonLabel="Follow Up"
          message={`Hi ${name.split(" ")[0]},\n\nFollowing up on our chat. ${quote.split('.')[0]}.\n\nLet's connect soon!`}
        />
      </div>
    </div>
  );
}

export default function NetworkingTimeline() {
  return (
    <div className="bg-[#131313] flex flex-col items-start relative w-full">

      {/* Main scrollable content */}
      <div className="flex flex-col gap-12 items-start max-w-[672px] pb-8 pt-6 px-6 w-full">

        {/* Page heading */}
        <div className="flex flex-col gap-1 w-full">
          <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold text-[#e5e2e1] text-[36px] leading-10 tracking-[-0.9px]">Interactions</p>
          <p className="font-['Inter:Regular',sans-serif] text-[#c6c5d4] text-[14px] leading-5 tracking-[0.35px] uppercase">Chronological Archive</p>
        </div>

        {/* â”€â”€ Timeline Section 1 â”€â”€ */}
        <div className="flex flex-col gap-8 items-start pl-8 relative w-full">
          {/* Section label */}
          <div className="flex flex-col gap-1 w-full">
            <p className="font-['Manrope:Bold',sans-serif] font-bold text-[#e5e2e1] text-[20px] leading-7">2026 Tech Forum</p>
            <div className="flex gap-2 items-center">
              <MapPin size={10} className="text-[#c6c5d4]" strokeWidth={2} />
              <p className="font-['Inter:Regular',sans-serif] text-[#c6c5d4] text-[12px] leading-4 tracking-[1.2px] uppercase">San Francisco Convention Center</p>
            </div>
          </div>

          {/* Entries */}
          <div className="flex flex-col gap-6 w-full">
            <TimelineEntry
              name="Sarah Chen"
              role="Founding Partner @ Nexus VCs"
              roleColor="#e9c176"
              time="09:45 AM"
              borderColor="rgba(186,200,220,0.2)"
              icon={<Users size={16} className="text-[#c6c5d4]" strokeWidth={1.5} />}
              quote="Interested in our Series B roadmap. Mentioned she knows the team at Stripe. Follow up next Tuesday with the revised deck."
            />
            <TimelineEntry
              name="Julian Thorne"
              role="Head of Design @ Linear"
              roleColor="#c6c5d4"
              time="11:20 AM"
              borderColor="rgba(186,200,220,0.2)"
              icon={<Users size={16} className="text-[#c6c5d4]" strokeWidth={1.5} />}
              quote="Brief chat about the new spatial UI guidelines. Wants to grab coffee in Soho."
            />
          </div>

          {/* Vertical timeline line & dot */}
          <div className="absolute bottom-0 left-0 top-0 flex flex-col items-center" style={{ width: 1 }}>
            <div className="w-px flex-1" style={{ background: "linear-gradient(to bottom, rgba(186,200,220,0.5) 0%, rgba(186,200,220,0.05) 100%)" }} />
          </div>
          <div className="absolute bg-[#e9c176] left-[-5px] rounded-full shadow-[0px_0px_12px_0px_rgba(233,193,118,0.5)] size-[11px] top-[4px]" />
        </div>

        {/* â”€â”€ Timeline Section 2 â”€â”€ */}
        <div className="flex flex-col gap-8 items-start pl-8 pt-4 relative w-full">
          {/* Section label */}
          <div className="flex flex-col gap-1 w-full">
            <p className="font-['Manrope:Bold',sans-serif] font-bold text-[#e5e2e1] text-[20px] leading-7">Web3 Mixer</p>
            <div className="flex gap-2 items-center">
              <MapPin size={10} className="text-[#c6c5d4]" strokeWidth={2} />
              <p className="font-['Inter:Regular',sans-serif] text-[#c6c5d4] text-[12px] leading-4 tracking-[1.2px] uppercase">The Penthouse Lounge</p>
            </div>
          </div>

          {/* Entry */}
          <TimelineEntry
            name="Elena Rodriguez"
            role="Protocol Architect"
            roleColor="#e9c176"
            time="08:15 PM"
            borderColor="rgba(233,193,118,0.4)"
            icon={<Users size={16} className="text-[#e9c176]" strokeWidth={1.5} />}
            quote="High priority technical contact. Discussed zero-knowledge proof optimization for the new L2. Send whitepaper."
            tags={["VIP GUEST", "PROTOCOL"]}
          />

          {/* Vertical line & dot */}
          <div className="absolute bottom-0 left-0 top-4 flex flex-col items-center" style={{ width: 1 }}>
            <div className="w-px flex-1" style={{ background: "linear-gradient(to bottom, rgba(186,200,220,0.4) 0%, rgba(186,200,220,0.02) 100%)" }} />
          </div>
          <div className="absolute bg-[#bac8dc] left-[-5px] rounded-full size-[11px] top-[20px]" />
        </div>

        {/* â”€â”€ Map card â”€â”€ */}
        <div className="bg-[#1b1b1b] h-[208px] overflow-hidden relative rounded-xl shadow-[0px_8px_24px_0px_rgba(0,0,0,0.06)] w-full">
          {/* Map background */}
          <img src={imgMapBg} alt="map" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40" style={{ top: 16 }} />
          {/* Gradient overlay */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #1b1b1b 0%, rgba(27,27,27,0.0) 50%)" }} />
          {/* Bottom info */}
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div>
              <p className="font-['Inter:Regular',sans-serif] text-[#e9c176] text-[10px] leading-4 tracking-[2px] uppercase mb-0.5">Contextual Awareness</p>
              <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold text-[#e5e2e1] text-[20px] leading-7">3 Active Clusters</p>
            </div>
            <button className="bg-[#bac8dc] flex items-center gap-1.5 px-4 py-2 rounded-lg shadow-lg">
              <Map size={12} className="text-[#243141]" strokeWidth={2} />
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#243141] text-[12px] leading-4 tracking-[1.2px] uppercase">View Map</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

