import { Check, Send, Star, Info, Mic, MapPin, Users } from "lucide-react";
const imgNewContact = "https://randomuser.me/api/portraits/women/68.jpg";

export default function ContactCapture() {
  return (
    <div className="bg-[#131313] flex flex-col items-start relative w-full" data-name="Contact Capture" data-node-id="7:100">
      <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[512px] min-h-[1307px] py-[24px] px-[24px] relative shrink-0 w-full" data-name="Main" data-node-id="7:101">
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Success Confirmation" data-node-id="7:102">
          <div className="content-stretch flex flex-col h-[80px] items-start pb-[16px] relative shrink-0 w-[64px]" data-name="Margin" data-node-id="7:103">
            <div className="bg-[#233141] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[64px]" data-name="Background" data-node-id="7:104">
              <div className="relative shrink-0 size-[25px] text-[#2ac947]" data-name="Container" data-node-id="7:105">
                <Check className="absolute block inset-0 max-w-none size-full" strokeWidth={2.5} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Heading 1:margin" data-node-id="7:107">
            <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#e5e2e1] text-[30px] tracking-[-0.75px] whitespace-nowrap" data-node-id="7:108">
              <p className="leading-[36px]">Contact Synced</p>
            </div>
          </div>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c5d4] text-[14px] text-center whitespace-nowrap" data-node-id="7:109">
            <p className="leading-[20px]">Connection established via proximity scan</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full" data-name="Section - Main Profile Card - Bento Style" data-node-id="7:110">
          {/* â”€â”€ Hero Card â”€â”€ */}
          <div className="relative flex flex-col overflow-hidden rounded-2xl bg-[#1b1b1b] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.35)] w-full" data-name="Hero Card" data-node-id="7:111">



            {/* Gradient banner */}
            <div className="h-28 w-full shrink-0" style={{ background: "linear-gradient(159deg, rgb(186,200,220) 0%, rgb(35,49,65) 100%)", opacity: 0.55 }} />

            {/* Profile body */}
            <div className="relative flex flex-col items-center px-6 pt-0 pb-5">

              {/* Avatar â€” overlaps the gradient */}
              <div className="-mt-12 mb-3">
                <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-[#1b1b1b] shadow-xl bg-[#20201f]">
                  <img src={imgNewContact} alt="Elena Vance" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Name */}
              <p className="font-['Manrope:Bold',sans-serif] font-extrabold text-[#e5e2e1] text-2xl leading-8 tracking-[-0.5px] text-center mb-1">
                Elena Vance
              </p>

              {/* Title */}
              <p className="font-['Inter:Regular',sans-serif] text-[#c6c5d4] text-[11px] tracking-[1.2px] uppercase leading-4 text-center mb-4">
                Senior Design Partner Â· Arca Studio
              </p>

              {/* Chips */}
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-[#394857] text-[#a7b7c8] font-['Manrope:Bold',sans-serif] font-bold text-[10px] tracking-[-0.4px] uppercase px-3 py-[5px] rounded-full">Fintech</span>
                <span className="bg-[#394857] text-[#a7b7c8] font-['Manrope:Bold',sans-serif] font-bold text-[10px] tracking-[-0.4px] uppercase px-3 py-[5px] rounded-full">London, UK</span>
                <span className="border border-[rgba(233,193,118,0.25)] bg-[rgba(233,193,118,0.08)] text-[#e9c176] font-['Manrope:Bold',sans-serif] font-bold text-[10px] tracking-[-0.4px] uppercase px-3 py-[5px] rounded-full">Mutual (12)</span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/[0.06] mx-0" />

            {/* Action buttons */}
            <div className="flex gap-3 px-5 py-4">
              <button
                className="flex flex-1 items-center justify-center gap-2 py-3 rounded-xl font-['Manrope:Bold',sans-serif] font-bold text-[#1e3048] text-sm"
                style={{ background: "linear-gradient(160.829deg, rgb(186,200,220) 0%, rgb(35,49,65) 100%)" }}
              >
                <Send size={14} strokeWidth={2.5} />
                Follow Up
              </button>
              <button className="flex flex-1 items-center justify-center gap-2 py-3 rounded-xl bg-[#353535] font-['Manrope:Bold',sans-serif] font-bold text-[#e5e2e1] text-sm">
                <Star size={15} strokeWidth={2.5} />
                Priority
              </button>
            </div>

          </div>

          <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[16px] shrink-0 w-full" data-name="Context Capture Section" data-node-id="7:141">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container" data-node-id="7:142">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3" data-node-id="7:143">
                <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#c6c5d4] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap" data-node-id="7:144">
                  <p className="leading-[20px]">MEETING CONTEXT</p>
                </div>
              </div>
              <div className="h-[14px] relative shrink-0 w-[14px] text-[#e5e2e1]" data-name="Container" data-node-id="7:145">
                <Info className="absolute block inset-0 max-w-none size-full" strokeWidth={2.5} />
              </div>
            </div>
            <div className="bg-[#0e0e0e] content-stretch flex flex-col isolate items-center p-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Voice Recording Area" data-node-id="7:147">
              <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 z-[2]" data-name="Margin" data-node-id="7:148">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container" data-node-id="7:149">
                  <div className="absolute flex inset-[-16px] items-center justify-center" style={{ containerType: "size" }}>
                    <div className="flex-none h-[100cqh] w-[100cqw]">
                      <div className="bg-[rgba(233,193,118,0.2)] rounded-[9999px] size-full" data-name="Pulsing visual for recording effect" data-node-id="7:150" />
                    </div>
                  </div>
                  <div className="bg-[#e9c176] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[64px]" data-name="Button" data-node-id="7:151">
                    <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[64px] top-0" data-name="Button:shadow" data-node-id="7:152" />
                    <div className="h-[23.75px] relative shrink-0 w-[23.75px] text-[#412d00]" data-name="Container" data-node-id="7:153">
                      <Mic className="absolute block inset-0 max-w-none size-full" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e9c176] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap z-[1]" data-node-id="7:155">
                <p className="leading-[15px]">HOLD TO RECORD VOICE MEMO</p>
              </div>
            </div>
            <div className="bg-[rgba(14,14,14,0.5)] border-[rgba(186,200,220,0.3)] border-l-2 border-solid content-stretch flex flex-col gap-[12px] items-start pb-[16px] pl-[18px] pr-[16px] pt-[15.125px] relative rounded-[12px] shrink-0 w-full" data-name="Transcription Preview" data-node-id="7:156">
              <div className="opacity-80 relative shrink-0 w-full" data-name="Container" data-node-id="7:157">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.875px] relative size-full">
                  <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e5e2e1] text-[14px] w-full" data-node-id="7:158">
                    <p className="leading-[22.75px] mb-0">{`"Met at the Neo-Con summit. Interested`}</p>
                    <p className="leading-[22.75px] mb-0">in the Q3 design roadmap and</p>
                    <p className="leading-[22.75px] mb-0">mentioned a potential collab with their</p>
                    <p className="leading-[22.75px]">{`London office. Follow up on Monday..."`}</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="Container" data-node-id="7:159">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                  <div className="bg-[#bac8dc] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" data-node-id="7:160" />
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container" data-node-id="7:161">
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8b99ac] text-[10px] uppercase whitespace-nowrap" data-node-id="7:162">
                      <p className="leading-[15px]">TRANSCRIBING AUDIO...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_79px] relative shrink-0 w-full" data-name="Tags & Location" data-node-id="7:163">
            <div className="col-1 content-stretch flex gap-[12px] h-[79px] items-center justify-self-stretch p-[16px] relative rounded-[16px] row-1 shrink-0" data-name="Container" data-node-id="7:164">
              <div className="bg-[#20201f] content-stretch flex h-[40px] items-center justify-center relative rounded-[8px] shrink-0 w-[36.14px]" data-name="Background" data-node-id="7:165">
                <div className="h-[20px] relative shrink-0 w-[20px] text-[#e5e2e1]" data-name="Container" data-node-id="7:166">
                  <MapPin className="absolute block inset-0 max-w-none size-full" strokeWidth={2} />
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[73.34px]" data-name="Container" data-node-id="7:168">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container" data-node-id="7:169">
                  <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#c6c5d4] text-[10px] uppercase whitespace-nowrap" data-node-id="7:170">
                    <p className="leading-[15px]">LOCATION</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container" data-node-id="7:171">
                  <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e5e2e1] text-[12px] whitespace-nowrap" data-node-id="7:172">
                    <p className="leading-[16px] mb-0">Soho House,</p>
                    <p className="leading-[16px]">NY</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2 content-stretch flex gap-[12px] h-[79px] items-center justify-self-stretch p-[16px] relative rounded-[16px] row-1 shrink-0" data-name="Container" data-node-id="7:173">
              <div className="bg-[#20201f] content-stretch flex h-[40px] items-center justify-center relative rounded-[8px] shrink-0 w-[39.52px]" data-name="Background" data-node-id="7:174">
                <div className="h-[20px] relative shrink-0 w-[20px] text-[#e5e2e1]" data-name="Container" data-node-id="7:175">
                  <Users className="absolute block inset-0 max-w-none size-full" strokeWidth={2} />
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[50.07px]" data-name="Container" data-node-id="7:177">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container" data-node-id="7:178">
                  <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#c6c5d4] text-[10px] uppercase whitespace-nowrap" data-node-id="7:179">
                    <p className="leading-[15px]">GROUP</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container" data-node-id="7:180">
                  <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e5e2e1] text-[12px] whitespace-nowrap" data-node-id="7:181">
                    <p className="leading-[16px] mb-0">Tech</p>
                    <p className="leading-[16px]">Partners</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
