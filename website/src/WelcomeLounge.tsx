import { ChevronRight, Globe, Coffee, BarChart2, User } from "lucide-react";

const imgLogo = "/logo.png";

interface WelcomeLoungeProps {
  onEnter: () => void;
}

export default function WelcomeLounge({ onEnter }: WelcomeLoungeProps) {
  return (
    <div className="bg-[#131313] flex flex-col relative w-full h-full min-h-screen overflow-hidden" data-node-id="7:514" data-name="Welcome Lounge">

      {/* ── Ambient background glows ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" data-node-id="7:516">
        {/* Centre indigo radial bloom */}
        <div className="absolute left-1/2 top-[221px] -translate-x-1/2 w-[800px] h-[800px] bg-[rgba(26,35,126,0.10)] blur-[60px] rounded-full" />
        {/* Bottom-right gold accent */}
        <div className="absolute right-0 bottom-[160px] w-[400px] h-[400px] bg-[rgba(233,193,118,0.05)] blur-[50px] rounded-full" />
      </div>

      {/* ── Sticky Header ── */}
      <div className="sticky top-0 z-50 backdrop-blur-[12px] bg-[rgba(19,19,19,0.7)] flex items-center justify-between px-6 py-4 w-full" data-node-id="7:537">
        {/* Logo + wordmark */}
        <div className="flex gap-3 items-center">
          <Globe size={18} className="text-[#bac8dc]" strokeWidth={2} />
          <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold text-[#bac8dc] text-[20px] leading-7 tracking-[2px] uppercase">Cufflink</p>
        </div>
        {/* User avatar */}
        <div className="border border-[rgba(255,255,255,0.1)] flex items-center justify-center overflow-hidden rounded-full shrink-0 size-10">
          <img src={imgLogo} alt="Profile" className="size-full object-cover" />
        </div>
      </div>

      {/* ── Hero Section: vertically centred ── */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 relative" data-node-id="7:519">

        {/* App icon anchor */}
        <div className="relative mb-10" data-node-id="7:525">
          {/* Ambient glow behind icon */}
          <div className="absolute inset-[-24px] bg-[rgba(186,200,220,0.15)] blur-[32px] rounded-full pointer-events-none" />
          {/* Icon card */}
          <div className="bg-[#20201f] border border-[rgba(255,255,255,0.05)] flex items-center justify-center p-1 relative rounded-2xl shadow-[0px_8px_24px_0px_rgba(0,0,0,0.06)] size-24" data-node-id="7:528">
            <img src={imgLogo} alt="Cufflink" className="size-full object-cover rounded-xl" />
          </div>
        </div>

        {/* Headline */}
        <div className="flex flex-col items-center mb-4" data-node-id="7:521">
          <p className="font-['Manrope:ExtraBold',sans-serif] font-extrabold text-[#e5e2e1] text-[48px] leading-[1] tracking-[-1.2px] text-center">
            Your Digital
          </p>
          <p
            className="font-['Manrope:ExtraBold',sans-serif] font-extrabold text-[48px] leading-[1] tracking-[-1.2px] text-center bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(159.586deg, rgb(186, 200, 220) 0%, rgb(35, 49, 65) 100%)" }}
          >
            Cufflink
          </p>
        </div>

        {/* Subtitle */}
        <p className="font-['Inter:Regular',sans-serif] text-[#c6c5d4] text-[18px] leading-[1.625] text-center mb-12 max-w-[300px]" data-node-id="7:524">
          Elevating professional connections through seamless intelligence.
        </p>

        {/* CTA button */}
        <button
          onClick={onEnter}
          className="flex items-center gap-2 px-8 py-4 rounded-xl shadow-[0px_8px_24px_0px_rgba(0,0,0,0.06)] overflow-hidden relative"
          style={{ backgroundImage: "linear-gradient(164.645deg, rgb(186, 200, 220) 0%, rgb(35, 49, 65) 100%)" }}
          data-node-id="7:531"
        >
          <span className="font-['Manrope:Bold',sans-serif] font-bold text-[#243141] text-[16px] leading-6 tracking-[-0.4px] whitespace-nowrap">
            Enter the Lounge
          </span>
          <ChevronRight size={14} className="text-[#243141]" strokeWidth={2.5} />
        </button>
      </div>

      {/* ── Bottom Nav ── */}
      <div
        className="sticky bottom-0 z-50 backdrop-blur-[20px] bg-[rgba(19,19,19,0.8)] h-[80px] rounded-tl-2xl rounded-tr-2xl shadow-[0px_-8px_24px_0px_rgba(0,0,0,0.06)] w-full"
        data-node-id="7:545"
      >
        <div className="flex h-full items-center justify-around px-4">
          {/* Active: Lounge */}
          <div className="bg-[#20201f] flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl">
            <Coffee size={18} className="text-[#e9c176]" strokeWidth={2} />
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[#e9c176] text-[10px] tracking-[1px] uppercase">Lounge</p>
          </div>
          {/* Inactive: Network */}
          <div className="opacity-60 flex flex-col items-center gap-1 px-4 py-2">
            <Globe size={18} className="text-[#c6c5d4]" strokeWidth={2} />
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[#c6c5d4] text-[10px] tracking-[1px] uppercase">Network</p>
          </div>
          {/* Inactive: Insights */}
          <div className="opacity-60 flex flex-col items-center gap-1 px-4 py-2">
            <BarChart2 size={18} className="text-[#c6c5d4]" strokeWidth={2} />
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[#c6c5d4] text-[10px] tracking-[1px] uppercase">Insights</p>
          </div>
          {/* Inactive: Profile */}
          <div className="opacity-60 flex flex-col items-center gap-1 px-4 py-2">
            <User size={18} className="text-[#c6c5d4]" strokeWidth={2} />
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[#c6c5d4] text-[10px] tracking-[1px] uppercase">Profile</p>
          </div>
        </div>
      </div>

    </div>
  );
}
