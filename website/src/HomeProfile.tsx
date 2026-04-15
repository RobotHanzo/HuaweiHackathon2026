import { useState, useRef, useEffect } from "react";
import { QrCode, User, ArrowLeft, Camera, Share2, Sparkles } from "lucide-react";
import { Scanner } from '@yudiel/react-qr-scanner';

interface HomeProfileProps {
  onScanSuccess?: () => void;
}

export default function HomeProfile({ onScanSuccess }: HomeProfileProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [scanMode, setScanMode] = useState(false);
  const scannedRef = useRef(false);

  // Reset scan flag when entering scan mode
  useEffect(() => {
    if (scanMode) {
      scannedRef.current = false;
    }
  }, [scanMode]);

  const userAvatar = "https://randomuser.me/api/portraits/men/32.jpg";
  const qrCodeImage = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=Contact_Profile_Cufflink&color=ffffff&bgcolor=1b1b1b";

  // (Simulated interval removed in favor of real camera)

  if (scanMode) {
    return (
      <div className="bg-[#131313] flex flex-col items-center relative w-full h-full text-[#e5e2e1]">
        {/* Header */}
        <div className="flex items-center w-full p-6 pt-12">
          <button onClick={() => setScanMode(false)} className="bg-[#20201f] p-3 rounded-full shadow-[0px_8px_24px_rgba(0,0,0,0.12)] active:scale-95 transition-transform">
            <ArrowLeft size={20} className="text-[#e5e2e1]" />
          </button>
          <div className="flex-1 text-center font-['Manrope:Bold',sans-serif] font-bold text-[18px] mr-12">
            Scan Code
          </div>
        </div>

        {/* Fake Camera Viewfinder */}
        <div className="flex-1 flex flex-col justify-center items-center px-8 w-full mt-[-60px]">
          <p className="font-['Inter:Regular',sans-serif] text-[#8b99ac] text-[14px] text-center mb-8 max-w-[250px]">
            Align the QR code within the frame to instantly connect
          </p>
          
          <div className="relative w-full aspect-square max-w-[300px] border-2 border-[rgba(233,193,118,0.2)] rounded-3xl overflow-hidden shadow-[0px_0px_50px_rgba(233,193,118,0.05)] bg-[#111]">
            <Scanner
              onScan={(detected) => {
                if (detected && detected.length > 0 && !scannedRef.current) {
                  scannedRef.current = true;
                  setTimeout(() => {
                    setScanMode(false);
                    onScanSuccess?.();
                  }, 100);
                }
              }}
              components={{
                finder: false,
              }}
              styles={{
                container: { borderRadius: '1.5rem', overflow: 'hidden' },
              }}
            />
            
            {/* Custom Overlay */}
            <div className="absolute inset-0 pointer-events-none z-10">
              {/* Scanning line animation */}
              <div className="absolute inset-x-0 h-1 bg-[#e9c176] shadow-[0_0_15px_#e9c176] animate-scan-line opacity-80"></div>

              {/* Viewfinder corners */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#e9c176] rounded-tl-[1.3rem]"></div>
              <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-[#e9c176] rounded-tr-[1.3rem]"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-[#e9c176] rounded-bl-[1.3rem]"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#e9c176] rounded-br-[1.3rem]"></div>
            </div>
          </div>

          <button 
            onClick={() => {
              setScanMode(false);
              onScanSuccess?.();
            }}
            className="mt-12 flex items-center gap-2 bg-[#e9c176] text-[#412d00] px-6 py-3 rounded-full font-['Manrope:Bold',sans-serif] font-bold text-[14px] shadow-lg active:scale-95 transition-all"
          >
            <Sparkles size={16} />
            Instant Capture
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#131313] flex flex-col items-center relative w-full min-h-[90vh] pb-24 px-6 pt-12 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-[-100px] right-[-50px] w-[300px] h-[300px] bg-[rgba(186,200,220,0.05)] blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-50px] left-[-100px] w-[400px] h-[400px] bg-[rgba(233,193,118,0.04)] blur-[90px] rounded-full pointer-events-none" />
      
      {/* Top Bar */}
      <div className="w-full flex justify-between items-center mb-10 relative z-10">
        <h1 className="font-['Manrope:ExtraBold',sans-serif] font-extrabold text-[#e5e2e1] text-[28px] tracking-[-0.5px]">Your Pass</h1>
        <button className="bg-[#20201f] p-3 rounded-full border border-[rgba(255,255,255,0.05)] text-[#c6c5d4] hover:text-white transition-colors">
          <Share2 size={18} strokeWidth={2} />
        </button>
      </div>

      {/* Profile Card Container (Perspective for 3D Flip) */}
      <div 
        className="relative w-full max-w-[340px] aspect-[3/4.5] z-10 cursor-pointer"
        style={{ perspective: "1200px" }}
      >
        {/* Card Flipper Inner */}
        <div 
          className="w-full h-full relative transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
          style={{ 
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
          }}
        >
          {/* FRONT SIDE (Profile) */}
          <div 
            className="absolute inset-0 w-full h-full bg-[#1b1b1b] rounded-3xl border border-[rgba(255,255,255,0.08)] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col"
            style={{ backfaceVisibility: "hidden" }}
          >
            {/* Top Gradient Banner */}
            <div className="h-[120px] w-full shrink-0 relative" style={{ background: "linear-gradient(159deg, rgb(186,200,220) 0%, rgb(35,49,65) 100%)" }}>
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-white/[0.05] backdrop-blur-sm" />
            </div>

            {/* Profile Content */}
            <div className="flex flex-col items-center px-6 pb-8 relative flex-1">
              <div className="w-24 h-24 rounded-full overflow-hidden border-[6px] border-[#1b1b1b] shadow-xl bg-[#20201f] -mt-12 mb-4">
                <img src={userAvatar} alt="Profile" className="w-full h-full object-cover" />
              </div>

              <h2 className="font-['Manrope:Bold',sans-serif] font-bold text-[#e5e2e1] text-[24px] leading-8 tracking-[-0.5px] text-center mb-1">
                Alex Rivera
              </h2>
              <p className="font-['Inter:Regular',sans-serif] text-[#bac8dc] text-[12px] tracking-[1.5px] uppercase leading-4 text-center mb-6">
                Product Architect
              </p>

              <div className="w-full h-px bg-white/[0.06] mb-6" />

              <div className="flex flex-col gap-3 w-full w-full max-w-[200px] mx-auto text-center">
                <p className="font-['Inter:Medium',sans-serif] text-[#8b99ac] text-[13px] leading-5">
                  Building the future of spatial computing and mixed reality networks.
                </p>
              </div>

              <div className="mt-auto pt-6 w-full">
                <button
                  onClick={(e) => { e.stopPropagation(); setIsFlipped(true); }}
                  className="w-full bg-[#2a2a2a] hover:bg-[#333] transition-colors flex items-center justify-center gap-2 py-[14px] rounded-2xl border border-[rgba(255,255,255,0.05)] shadow-inner"
                >
                  <QrCode size={18} className="text-[#e9c176]" strokeWidth={2.5} />
                  <span className="font-['Manrope:Bold',sans-serif] font-bold text-[#e5e2e1] text-[15px]">Show QR Code</span>
                </button>
              </div>
            </div>
          </div>

          {/* BACK SIDE (QR Code) */}
          <div 
            className="absolute inset-0 w-full h-full bg-[#1b1b1b] rounded-3xl border border-[rgba(233,193,118,0.2)] shadow-[0px_0px_50px_rgba(233,193,118,0.08)] flex flex-col p-6 items-center justify-center"
            style={{ 
              backfaceVisibility: "hidden", 
              transform: "rotateY(180deg)" 
            }}
          >
            <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-[#e5e2e1] text-[20px] mb-2 tracking-[-0.5px]">Your Contact Card</h3>
            <p className="font-['Inter:Regular',sans-serif] text-[#8b99ac] text-[12px] text-center mb-8 px-4">
              Let others scan this to instantly trade details
            </p>
            
            <div className="bg-[#2a2a2a] p-4 rounded-3xl shadow-xl border border-[rgba(255,255,255,0.05)]">
              <div className="bg-[#1b1b1b] rounded-2xl overflow-hidden w-[200px] h-[200px] flex items-center justify-center">
                {/* Fake QR Image */}
                <img src={qrCodeImage} alt="QR Code" className="w-[180px] h-[180px] rounded-lg mix-blend-screen opacity-90" />
              </div>
            </div>

            <div className="mt-auto w-full pt-8">
               <button
                  onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }}
                  className="w-full bg-[#20201f] transition-colors flex items-center justify-center gap-2 py-[14px] rounded-2xl"
                >
                  <User size={18} className="text-[#bac8dc]" strokeWidth={2.5} />
                  <span className="font-['Manrope:Bold',sans-serif] font-bold text-[#bac8dc] text-[15px]">Back to Profile</span>
                </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Scanner Action Button */}
      <div className="w-full mt-12 mb-8 z-10 flex justify-center hidden">
        {/* Kept wrapper for spacing, we will just use absolute positioning if needed, or normal flex */}
      </div>

      <div className="w-full mt-12 z-10 px-2">
        <button
          onClick={() => setScanMode(true)}
          className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl shadow-[0px_8px_30px_rgba(186,200,220,0.15)] transition-all hover:scale-[1.02] active:scale-95"
          style={{ background: "linear-gradient(135deg, rgb(186,200,220) 0%, rgb(35,49,65) 100%)" }}
        >
          <Camera size={20} className="text-[#131b26]" strokeWidth={2.5} />
          <span className="font-['Manrope:Bold',sans-serif] font-extrabold text-[#131b26] text-[16px] tracking-[-0.3px]">
            Scan Connection
          </span>
        </button>
      </div>
    </div>
  );
}
