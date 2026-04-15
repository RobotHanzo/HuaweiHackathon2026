import { History, Clock, Mic, Sparkles } from "lucide-react";
import { AiDraftGenerator } from "./components/AiDraftGenerator";

const imgContainer = "https://picsum.photos/seed/crm/400/200";
const imgElenaRossi = "https://randomuser.me/api/portraits/women/68.jpg";
const imgMarcusThorne = "https://randomuser.me/api/portraits/men/32.jpg";
const imgContainer3 = "https://placehold.co/400x400/transparent/transparent.svg";

const DRAFT_MESSAGE =
  `Hi Julian,

It was great meeting you at the gala last week — I hope your daughter's tennis finals went well!

I'd love to follow up on our conversation about the Series B roadmap. I believe there's a real alignment with what we're building, and I'd value your perspective.

Would you be open to a quick call this week?

Best,
Alex`;

export default function RelationshipCrm() {
  return (
    <div className="bg-[#131313] flex flex-col items-start relative w-full" data-name="Relationship CRM" data-node-id="7:217">
      <div className="flex flex-col max-w-[1280px] relative shrink-0 w-full pb-8" data-name="Main" data-node-id="7:218">
        <div className="content-stretch flex flex-col gap-[8px] items-start px-[24px] pt-[32px] max-w-[576px] w-full" data-name="Hero Section: Editorial Design" data-node-id="7:219">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container" data-node-id="7:220">
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e9c176] text-[12px] tracking-[1.2px] uppercase w-full" data-node-id="7:221">
              <p className="leading-[16px]">PRIORITY OUTREACH</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2" data-node-id="7:222">
            <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#e5e2e1] text-[30px] tracking-[-0.75px] w-full" data-node-id="7:223">
              <p className="leading-[38px] mb-0 text-[#bac8dc]">8 High-Value</p>
              <p className="leading-[38px] mb-0">Starred</p>
              <p className="leading-[38px]">Contacts.</p>
            </div>
          </div>
        </div>
        <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[auto_auto] mt-[48px] px-[24px] w-full" data-name="Bento Grid Layout for Starred Contacts" data-node-id="7:224">
          <div className="flex flex-col gap-[16px] col-1 row-1 self-start justify-self-stretch w-full shrink-0">
            <div className="bg-[#1b1b1b] content-stretch flex flex-col isolate items-start w-full overflow-clip relative rounded-[12px] shadow-[0px_-8px_24px_0px_rgba(0,0,0,0.06)] shrink-0" data-name="Main Featured Contact" data-node-id="7:225">
              <div className="h-[256px] relative shrink-0 w-full z-[2]" data-name="Container" data-node-id="7:226">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[133.59%] left-0 max-w-none top-[-16.8%] w-full" src={imgContainer} />
              </div>
              <div className="absolute bg-gradient-to-t from-[#131313] inset-0 to-[rgba(19,19,19,0)] via-1/2 via-[rgba(19,19,19,0)]" data-name="Gradient" data-node-id="7:228" />
              <div className="absolute bottom-[21px] content-stretch flex flex-col items-start left-[24px]" data-name="Container" data-node-id="7:229">
                <div className="bg-[#e9c176] content-stretch flex items-start px-[12px] py-[3.5px] relative rounded-[9999px] shrink-0" data-name="Background" data-node-id="7:230">
                  <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#412d00] text-[10px] tracking-[-0.5px] uppercase whitespace-nowrap" data-node-id="7:231">
                    <p className="leading-[15px]">PRIORITY 1</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start justify-between p-[32px] relative shrink-0 w-full z-[1]" data-name="Container" data-node-id="7:232">
              <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Container" data-node-id="7:233">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3" data-node-id="7:234">
                  <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e5e2e1] text-[30px] w-full" data-node-id="7:235">
                    <p className="leading-[36px]">Julian Vance</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container" data-node-id="7:236">
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c5d4] text-[14px] w-full" data-node-id="7:237">
                    <p className="leading-[20px]">Managing Director at Aetherial Ventures</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] items-start pt-[24px] relative shrink-0 w-full" data-name="Container" data-node-id="7:238">
                  <div className="h-[15.083px] relative shrink-0 w-[15.083px] text-[#bac8dc]" data-name="Margin" data-node-id="7:239">
                    <Mic className="absolute block inset-0 max-w-none size-full" strokeWidth={2} />
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-[215.03px]" data-name="Container" data-node-id="7:241">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container" data-node-id="7:242">
                      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c5d4] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap" data-node-id="7:243">
                        <p className="leading-[16px]">LAST VOICE NOTE MEMO</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container" data-node-id="7:244">
                      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e5e2e1] text-[14px] whitespace-nowrap" data-node-id="7:245">
                        <p className="leading-[20px] mb-0">{`"Met at the gala. Interested in the`}</p>
                        <p className="leading-[20px] mb-0">Series B roadmap. Mentioned his</p>
                        <p className="leading-[20px]">{`daughter's tennis finals."`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <AiDraftGenerator recipientName="Julian Vance" message={DRAFT_MESSAGE} />
            </div>
          </div>
        </div>
          <div className="col-1 gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[auto_auto] justify-self-stretch relative row-2 self-start shrink-0" data-name="Secondary Contact Cards" data-node-id="7:250">
            <div className="bg-[#20201f] col-1 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch overflow-clip p-[24px] relative rounded-[12px] row-1 self-start shrink-0" data-name="Background" data-node-id="7:251">
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container" data-node-id="7:252">
                <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[48px]" data-name="Container" data-node-id="7:253">
                  <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Elena Rossi" data-node-id="7:254">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgElenaRossi} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[117.2px]" data-name="Container" data-node-id="7:255">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4" data-node-id="7:256">
                    <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e5e2e1] text-[16px] whitespace-nowrap" data-node-id="7:257">
                      <p className="leading-[24px]">Elena Rossi</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container" data-node-id="7:258">
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c5d4] text-[12px] whitespace-nowrap" data-node-id="7:259">
                      <p className="leading-[16px]">Product Lead, Figma</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Container" data-node-id="7:260">
                <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c6c5d4] text-[14px] w-full" data-node-id="7:261">
                  <p className="leading-[20px]">Last interaction: 12 days ago via LinkedIn</p>
                </div>
              </div>
              <AiDraftGenerator 
                recipientName="Elena Rossi" 
                message={`Hi Elena,\n\nJust circling back on our conversation from 12 days ago. Let me know if you still have bandwidth to touch base!\n\nBest,\nAlex`} 
              />
              <div className="absolute h-[82px] right-0 top-0 w-[77px]" data-name="Container" data-node-id="7:266">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer3} />
              </div>
            </div>
            <div className="bg-[#20201f] col-1 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch overflow-clip p-[24px] relative rounded-[12px] row-2 self-start shrink-0" data-name="Background" data-node-id="7:268">
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container" data-node-id="7:269">
                <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[48px]" data-name="Container" data-node-id="7:270">
                  <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Marcus Thorne" data-node-id="7:271">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMarcusThorne} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[127.48px]" data-name="Container" data-node-id="7:272">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4" data-node-id="7:273">
                    <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e5e2e1] text-[16px] whitespace-nowrap" data-node-id="7:274">
                      <p className="leading-[24px]">Marcus Thorne</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container" data-node-id="7:275">
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c5d4] text-[12px] whitespace-nowrap" data-node-id="7:276">
                      <p className="leading-[16px]">Founding Partner, TPV</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Container" data-node-id="7:277">
                <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c6c5d4] text-[14px] w-full" data-node-id="7:278">
                  <p className="leading-[20px] mb-0">{`"Waiting for partnership deck." (Recorded via`}</p>
                  <p className="leading-[20px]">Voice)</p>
                </div>
              </div>
              <AiDraftGenerator 
                recipientName="Marcus Thorne" 
                message={`Hi Marcus,\n\nI just sent the partnership deck to your email. I'd love to walk you through our updated strategy.\n\nTalk soon,\nAlex`} 
              />
            </div>
          </div>
          <div className="w-full mt-[8px]">
            <button className="w-full py-[16px] rounded-[12px] bg-[rgba(233,193,118,0.03)] border border-[rgba(233,193,118,0.15)] text-[#e9c176] font-['Manrope:Bold',sans-serif] text-[14px] font-bold tracking-[0.5px] transition-all hover:bg-[rgba(233,193,118,0.08)] active:scale-[0.98]">
              View more contacts
            </button>
          </div>
        </div>

        <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[auto_auto] mt-[64px] px-[24px] w-full" data-name="CRM Insights & Feed Section" data-node-id="7:283">
          <div className="col-1 content-stretch flex flex-col gap-[32px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container" data-node-id="7:284">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Heading 3" data-node-id="7:285">
              <div className="h-[16px] relative shrink-0 w-[16px] text-[#e5e2e1]" data-name="Container" data-node-id="7:286">
                <Clock className="absolute block inset-0 max-w-none size-full" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e5e2e1] text-[24px] whitespace-nowrap" data-node-id="7:288">
                <p className="leading-[32px]">Relationship Timeline</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container" data-node-id="7:289">
              <div className="bg-[#1b1b1b] content-stretch flex flex-col gap-[14.75px] items-end p-[24px] relative rounded-[12px] shrink-0 w-full" data-name="Feed Item" data-node-id="7:290">
                <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container" data-node-id="7:291">
                  <div className="content-stretch flex gap-[16px] h-[72px] items-start relative shrink-0" data-name="Container" data-node-id="7:292">
                    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container" data-node-id="7:293">
                      <div className="h-[21px] relative shrink-0 w-[21px] text-[#e9c176]" data-name="Icon" data-node-id="7:294">
                        <Sparkles className="absolute block inset-0 max-w-none size-full" strokeWidth={2} />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[169.29px]" data-name="Container" data-node-id="7:295">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container" data-node-id="7:296">
                        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e5e2e1] text-[14px] whitespace-nowrap" data-node-id="7:297">
                          <p className="leading-[20px] mb-0">Insight Generated: Sarah</p>
                          <p className="leading-[20px]">Chen</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container" data-node-id="7:298">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c5d4] text-[12px] whitespace-nowrap" data-node-id="7:299">
                          <p className="leading-[16px] mb-0">{`AI detected a "warm lead"`}</p>
                          <p className="leading-[16px]">transition in your last call.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pr-[5.56px] relative shrink-0" data-name="Container" data-node-id="7:300">
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c5d4] text-[10px] uppercase whitespace-nowrap" data-node-id="7:301">
                      <p className="leading-[15px] mb-0">2 HOURS</p>
                      <p className="leading-[15px]">AGO</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0 w-full" data-name="Container" data-node-id="7:302">
                  <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e5e2e1] text-[14px]" data-node-id="7:303">
                    <p className="leading-[22.75px] mb-0">Strategy: Mention her recent keynote</p>
                    <p className="leading-[22.75px] mb-0">at TechCrunch Disrupt to validate her</p>
                    <p className="leading-[22.75px]">new position on AI Ethics.</p>
                  </div>
                </div>

              </div>
              <div className="bg-[#1b1b1b] content-stretch flex flex-col items-start pb-[40px] pt-[24px] px-[24px] relative rounded-[12px] shrink-0 w-full" data-name="Feed Item" data-node-id="7:304">
                <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container" data-node-id="7:305">
                  <div className="content-stretch flex gap-[16px] h-[56px] items-start relative shrink-0" data-name="Container" data-node-id="7:306">
                    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container" data-node-id="7:307">
                      <div className="h-[20px] relative shrink-0 w-[20px] text-[#c6c5d4]" data-name="Icon" data-node-id="7:308">
                        <History className="absolute block inset-0 max-w-none size-full" strokeWidth={2} />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[187.82px]" data-name="Container" data-node-id="7:309">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container" data-node-id="7:310">
                        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#e5e2e1] text-[14px] whitespace-nowrap" data-node-id="7:311">
                          <p className="leading-[20px] mb-0">Contact Re-surfaced: David</p>
                          <p className="leading-[20px]">Kim</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container" data-node-id="7:312">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c5d4] text-[12px] whitespace-nowrap" data-node-id="7:313">
                          <p className="leading-[16px]">3 months since last interaction.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c5d4] text-[10px] uppercase whitespace-nowrap" data-node-id="7:314">
                    <p className="leading-[15px]">YESTERDAY</p>
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

