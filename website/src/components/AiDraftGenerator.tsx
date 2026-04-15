import { useState, useEffect, useRef } from "react";
import { Wand2, Send, Sparkles, CheckCircle } from "lucide-react";

export interface AiDraftGeneratorProps {
  recipientName: string;
  message: string;
  buttonLabel?: string;
}

type DraftState = 'idle' | 'generating' | 'done' | 'sent';

export function AiDraftGenerator({ recipientName, message, buttonLabel }: AiDraftGeneratorProps) {
  const [draftState, setDraftState] = useState<DraftState>('idle');
  const [draftText, setDraftText] = useState('');
  const draftPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (draftState === 'generating') {
      setTimeout(() => {
        draftPanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
    }
    
    if (draftState !== 'generating') return;
    let i = 0;
    setDraftText('');
    const id = setInterval(() => {
      i++;
      setDraftText(message.slice(0, i));
      if (i >= message.length) { clearInterval(id); setDraftState('done'); }
    }, 14);
    return () => clearInterval(id);
  }, [draftState, message]);

  return (
    <div className="flex flex-col gap-[16px] w-full">
      {/* Trigger Button */}
      {draftState === 'sent' ? (
        <div
          className="content-stretch flex gap-[8px] items-center justify-center py-[16px] relative rounded-[12px] shrink-0 w-full"
          style={{ background: 'rgba(186,200,220,0.08)', border: '1px solid rgba(186,200,220,0.18)' }}
        >
          <CheckCircle className="shrink-0 size-[20px] text-[#bac8dc]" strokeWidth={2} />
          <p className="font-['Manrope:Bold',sans-serif] font-bold text-[#bac8dc] text-[14px]">Sent to {recipientName.split(" ")[0]} ✓</p>
        </div>
      ) : (
        <button
          onClick={() => draftState === 'idle' && setDraftState('generating')}
          disabled={draftState !== 'idle'}
          className={`content-stretch flex gap-[8px] items-center justify-center py-[16px] relative rounded-[12px] shrink-0 w-full transition-all duration-200 ${
            draftState === 'idle'
              ? 'hover:brightness-110 hover:scale-[1.01] active:scale-[0.99] cursor-pointer'
              : 'opacity-80 cursor-default'
          }`}
          style={{ backgroundImage: 'linear-gradient(135deg, rgb(186, 200, 220) 0%, rgb(35, 49, 65) 100%)' }}
        >
          <div className="relative shrink-0 size-[22px] text-[#243141]">
            {draftState === 'generating'
              ? <Sparkles className="absolute block inset-0 max-w-none size-full cursor-blink" strokeWidth={2} />
              : <Wand2 className="absolute block inset-0 max-w-none size-full" strokeWidth={2} />}
          </div>
          <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#243141] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[24px]">
              {draftState === 'generating' ? 'Composing…' : draftState === 'done' ? 'Draft Ready ↓' : (buttonLabel || 'AI Outreach Draft')}
            </p>
          </div>
        </button>
      )}

      {/* Expanded Panel */}
      {draftState !== 'idle' && (
        <div className="w-full slide-up-fade" ref={draftPanelRef}>
          <div
            className="flex flex-col gap-3 p-5 rounded-xl"
            style={{ background: '#1b1b1b', border: '1px solid rgba(233,193,118,0.12)' }}
          >
            <div className="flex items-center gap-1.5">
              <Sparkles
                size={12}
                className="text-[#e9c176]"
                strokeWidth={2}
                style={{ animation: draftState === 'generating' ? 'cursor-blink 1s ease-in-out infinite' : 'none' }}
              />
              <span className="font-['Inter:Regular',sans-serif] text-[#e9c176] text-[10px] tracking-[1.2px] uppercase">
                {draftState === 'generating' ? 'Composing draft…' : draftState === 'done' ? 'Draft ready' : 'Sent'}
              </span>
            </div>

            {(draftState === 'generating' || draftState === 'done') && (
              <>
                <div
                  className="rounded-xl p-4 relative min-h-[110px]"
                  style={{ background: '#0e0e0e', border: '1px solid rgba(233,193,118,0.13)' }}
                >
                  <pre className="font-['Manrope:Regular',sans-serif] text-[#e5e2e1] text-[12px] leading-[1.75] whitespace-pre-wrap m-0 p-0">
                    {draftText}
                    {draftState === 'generating' && (
                      <span
                        className="cursor-blink"
                        style={{ display: 'inline-block', width: 2, height: 14, background: '#e9c176', marginLeft: 1, verticalAlign: 'middle', borderRadius: 1 }}
                      />
                    )}
                  </pre>
                </div>
                {draftState === 'done' && (
                  <button
                    onClick={() => setDraftState('sent')}
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl font-['Manrope:Bold',sans-serif] font-bold text-[12px] tracking-[0.5px] text-[#243141] transition-all duration-200 hover:scale-[1.02] active:scale-[0.97] slide-up-fade"
                    style={{ background: '#bac8dc', boxShadow: '0 4px 14px rgba(186,200,220,0.22)' }}
                  >
                    <Send size={13} strokeWidth={2.5} />
                    Send to {recipientName}
                  </button>
                )}
              </>
            )}

            {draftState === 'sent' && (
              <div className="flex items-center gap-3 sent-pop">
                <CheckCircle size={18} className="text-[#bac8dc] shrink-0" strokeWidth={2} />
                <div className="flex flex-col">
                  <span className="font-['Manrope:Bold',sans-serif] text-[#e5e2e1] text-[13px] leading-5">Sent to {recipientName}</span>
                  <span className="font-['Inter:Regular',sans-serif] text-[#c6c5d4] text-[10px] tracking-[0.8px] uppercase mt-0.5">via LinkedIn · just now</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
