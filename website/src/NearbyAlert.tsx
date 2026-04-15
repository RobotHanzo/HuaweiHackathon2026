import { Radio, X, Brain, MapPin, Users, ExternalLink } from "lucide-react";
import { AiDraftGenerator } from "./components/AiDraftGenerator";
const imgContactIdentity = "https://randomuser.me/api/portraits/women/44.jpg";
const imgBackgroundBorder = "https://placehold.co/400x400/transparent/transparent.svg";

export default function NearbyAlert() {
  return (
    <div className="bg-[#131313] flex flex-col items-start relative w-full" data-name="Nearby Alert" data-node-id="7:2">
      <div className="content-stretch flex flex-col items-center justify-center min-h-[700px] overflow-clip py-[24px] px-[24px] relative shrink-0 w-full" data-name="Main" data-node-id="7:3">
        <div className="absolute bg-[rgba(186,200,220,0.05)] blur-[50px] inset-[-10%_-5%_71.25%_6.54%] rounded-[9999px]" data-name="Ambient Background Decoration (Asymmetry)" data-node-id="7:4" />
        <div className="absolute bg-[rgba(233,193,118,0.05)] blur-[60px] inset-[57.71%_27.95%_10%_-10%] rounded-[9999px]" data-name="Overlay+Blur" data-node-id="7:5" />
        <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[448px] relative shrink-0 w-full" data-name="Alert Container: Bento Style / Glassmorphism Overlay" data-node-id="7:6">
          <div className="bg-[#1b1b1b] border-[rgba(69,70,82,0.1)] border-solid border-t content-stretch flex flex-col gap-[32px] items-start overflow-clip pb-[32px] pt-[33px] px-[32px] relative rounded-[32px] shadow-[0px_-8px_24px_0px_rgba(0,0,0,0.06)] shrink-0 w-full" data-name="Interaction Alert Card" data-node-id="7:7">
            <div className="relative shrink-0 w-full" data-name="Status Indicator (Luxe)" data-node-id="7:8">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
                <div className="bg-[rgba(64,44,0,0.3)] border border-[rgba(233,193,118,0.2)] border-solid content-stretch flex gap-[8px] items-center px-[13px] py-[5px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border" data-node-id="7:9">
                  <div className="relative shrink-0 size-[10.95px] text-[#e9c176]" data-name="Container" data-node-id="7:10">
                    <Radio className="absolute block inset-0 max-w-none size-full" strokeWidth={2} />
                  </div>
                  <div className="relative shrink-0" data-name="Container" data-node-id="7:12">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e9c176] text-[10px] tracking-[1px] uppercase whitespace-nowrap" data-node-id="7:13">
                        <p className="leading-[15px]">PROXIMITY ALERT</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 size-[14px] text-[#e9c176]" data-name="Button" data-node-id="7:14">
                  <X className="absolute block inset-0 max-w-none size-full" strokeWidth={2} />
                </div>
              </div>
            </div>
            <div className="h-[228px] relative shrink-0 w-full" data-name="Contact Identity" data-node-id="7:16">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                <div className="absolute content-stretch flex flex-col items-start left-[33.44px] pb-[8px] top-[144px]" data-name="Heading 1:margin" data-node-id="7:17">
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 1" data-node-id="7:18">
                    <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#e5e2e1] text-[30px] text-center tracking-[-0.75px] whitespace-nowrap" data-node-id="7:19">
                      <p className="leading-[36px]">Julianne Vance</p>
                    </div>
                  </div>
                </div>
                <div className="-translate-x-1/2 absolute content-stretch flex gap-[29.1px] items-center justify-center left-1/2 pl-[26.61px] pr-[21.05px] top-[187.5px]" data-name="Container" data-node-id="7:20">
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c6c5d4] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap" data-node-id="7:21">
                    <p className="leading-[20px] mb-0">MANAGING</p>
                    <p className="leading-[20px]">DIRECTOR</p>
                  </div>
                  <div className="bg-[#454652] h-[4px] rounded-[9999px] shrink-0 w-[3.23px]" data-name="Background" data-node-id="7:22" />
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c6c5d4] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap" data-node-id="7:23">
                    <p className="leading-[20px] mb-0">STRATOS</p>
                    <p className="leading-[20px]">GLOBAL</p>
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col items-start left-[83px] pb-[24px] top-[8px]" data-name="Margin" data-node-id="7:24">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container" data-node-id="7:25">
                    <div className="content-stretch flex flex-col items-start justify-center p-[4px] relative rounded-[9999px] shrink-0 size-[112px]" data-name="Background" data-node-id="7:26" style={{ backgroundImage: "linear-gradient(135deg, rgb(233, 193, 118) 0%, rgb(186, 200, 220) 50%, rgba(186, 200, 220, 0) 100%)" }}>
                      <div className="bg-[#20201f] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip relative rounded-[9999px] w-full" data-name="Background" data-node-id="7:27">
                        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Contact Identity" data-node-id="7:28">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgContactIdentity} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-[4px] h-[31.75px] right-[4px] w-[32.5px]" data-name="Background+Border" data-node-id="7:29">
                      <div className="absolute inset-[-6.3%_-38.46%_-70.08%_-36.92%]">
                        <img alt="" className="block max-w-none size-full" src={imgBackgroundBorder} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#20201f] relative rounded-[16px] shrink-0 w-full" data-name="Connection Context (Bento Sub-item)" data-node-id="7:32">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center pb-[20px] pt-[28px] px-[20px] relative size-full">
                <div className="bg-[#353535] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Background" data-node-id="7:33">
                  <div className="h-[20px] relative shrink-0 w-[18px] text-[#c6c5d4]" data-name="Container" data-node-id="7:34">
                    <Brain className="absolute block inset-0 max-w-none size-full" strokeWidth={2.5} />
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[161.69px]" data-name="Container" data-node-id="7:36">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container" data-node-id="7:37">
                    <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#c6c5d4] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap" data-node-id="7:38">
                      <p className="leading-[15px]">CONTEXTUAL MEMORY</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container" data-node-id="7:39">
                    <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e5e2e1] text-[14px] whitespace-nowrap" data-node-id="7:40">
                      <p className="leading-[20px]">Met at 2026 Tech Forum</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container" data-node-id="7:41">
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c5d4] text-[12px] whitespace-nowrap" data-node-id="7:42">
                      <p className="leading-[16px]">London, Exhibition Hall A</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Actions" data-node-id="7:43">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[auto_56px] relative size-full">
                <div className="col-1 row-1">
                  <AiDraftGenerator 
                    recipientName="Julianne" 
                    buttonLabel="Say Hello"
                    message={`Hi Julianne,\n\nGreat bumping into you at the Tech Forum! Let's connect.`} 
                  />
                </div>
                <button className="bg-[#353535] col-1 content-stretch flex flex-row gap-[8px] h-[56px] items-center justify-center justify-self-stretch px-4 w-full relative rounded-[12px] row-2 shrink-0 transition-opacity hover:opacity-80 active:scale-[0.98]" data-name="Button" data-node-id="7:49">
                  <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e5e2e1] text-[16px] text-center whitespace-nowrap" data-node-id="7:50">
                    <p className="leading-[24px]">View Profile</p>
                  </div>
                  <ExternalLink size={16} strokeWidth={2.5} className="text-[#e5e2e1]" />
                </button>
              </div>
            </div>
          </div>
          <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_113px] relative shrink-0 w-full" data-name="Nearby Context List (Mini Bento)" data-node-id="7:51">
            <div className="backdrop-blur-[6px] bg-[rgba(27,27,27,0.6)] border border-[rgba(255,255,255,0.05)] border-solid col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch p-[17px] relative rounded-[16px] row-1 self-start shrink-0" data-name="Overlay+Border+OverlayBlur" data-node-id="7:52">
              <div className="h-[12.667px] relative shrink-0 w-[12.667px] text-[#e5e2e1]" data-name="Container" data-node-id="7:53">
                <MapPin className="absolute block inset-0 max-w-none size-full" strokeWidth={2.5} />
              </div>
              <div className="relative shrink-0 w-full" data-name="Container" data-node-id="7:55">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                  <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#c6c5d4] text-[10px] tracking-[-0.5px] uppercase w-full" data-node-id="7:56">
                    <p className="leading-[15px]">CURRENT DISTANCE</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="Container" data-node-id="7:57">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                  <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e5e2e1] text-[18px] w-full" data-node-id="7:58">
                    <p className="leading-[28px]">12 Meters</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="backdrop-blur-[6px] bg-[rgba(27,27,27,0.6)] border border-[rgba(255,255,255,0.05)] border-solid col-2 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch p-[17px] relative rounded-[16px] row-1 self-start shrink-0" data-name="Overlay+Border+OverlayBlur" data-node-id="7:59">
              <div className="h-[12.667px] relative shrink-0 w-[12.667px] text-[#e5e2e1]" data-name="Container" data-node-id="7:60">
                <Users className="absolute block inset-0 max-w-none size-full" strokeWidth={2.5} />
              </div>
              <div className="relative shrink-0 w-full" data-name="Container" data-node-id="7:62">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                  <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#c6c5d4] text-[10px] tracking-[-0.5px] uppercase w-full" data-node-id="7:63">
                    <p className="leading-[15px]">MUTUALS PRESENT</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="Container" data-node-id="7:64">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                  <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e5e2e1] text-[18px] w-full" data-node-id="7:65">
                    <p className="leading-[28px]">2 Others</p>
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
