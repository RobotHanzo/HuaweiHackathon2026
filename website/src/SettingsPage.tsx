import { useState } from 'react';
import { X, Radar, Bell, Shield, LogOut, ChevronRight } from 'lucide-react';

export default function SettingsPage({ onClose }: { onClose: () => void }) {
  const [nearbyScanning, setNearbyScanning] = useState(false);

  return (
    <div className="flex flex-col w-full h-full bg-[#131313] overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 z-50 backdrop-blur-[12px] bg-[rgba(19,19,19,0.7)] flex h-[64px] items-center justify-between px-6 w-full shrink-0">
        <h1 className="font-['Manrope:Bold',sans-serif] font-bold text-[#bac8dc] text-[20px]">
          Settings
        </h1>
        <button onClick={onClose} className="text-[#bac8dc] hover:text-white transition-colors outline-none">
          <X size={24} strokeWidth={2} />
        </button>
      </div>

      <div className="px-6 py-6 pb-[calc(24px+env(safe-area-inset-bottom))] flex flex-col gap-8 text-[#bac8dc]">
        
        {/* Profile Section */}
        <div className="flex items-center gap-4 border-b border-gray-800 pb-6">
          <div className="size-16 rounded-full bg-[#353535] overflow-hidden shrink-0">
            <img alt="Profile" className="size-full object-cover" src={`${import.meta.env.BASE_URL}logo.png`} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Guest User</h2>
            <p className="text-sm text-gray-400">guest@cufflink.app</p>
          </div>
        </div>

        {/* Network & Privacy */}
        <section>
          <h3 className="text-xs font-bold text-gray-500 uppercase mb-4 tracking-wider">Network & Privacy</h3>
          
          {/* Group container */}
          <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden divide-y divide-gray-800 border border-gray-800">
            
            {/* Toggle Setting */}
            <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-[#202020] transition-colors"
                 onClick={() => setNearbyScanning(!nearbyScanning)}>
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-[#e9c176]">
                  <Radar size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Nearby Scanning</p>
                  <p className="text-xs text-gray-400">Discover and be discovered</p>
                </div>
              </div>
              
              {/* Toggle Switch */}
              <div className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 relative ${nearbyScanning ? 'bg-[rgba(233,193,118,0.3)]' : 'bg-gray-700'}`}>
                <div className={`size-4 rounded-full transition-all duration-300 ${nearbyScanning ? 'translate-x-6 bg-[#e9c176]' : 'translate-x-0 bg-white'}`} />
              </div>
            </div>

            {/* Other Mock Settings */}
            <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-[#202020] transition-colors">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-[#bac8dc]">
                  <Shield size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Data Privacy</p>
                  <p className="text-xs text-gray-400">Manage your connected accounts</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-500" />
            </div>

          </div>
        </section>

        {/* System Settings */}
        <section>
          <h3 className="text-xs font-bold text-gray-500 uppercase mb-4 tracking-wider">System Settings</h3>
          
          <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden divide-y divide-gray-800 border border-gray-800">
            <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-[#202020] transition-colors">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-[#bac8dc]">
                  <Bell size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Notifications</p>
                  <p className="text-xs text-gray-400">Push, email and connection alerts</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-500" />
            </div>
          </div>
        </section>

        {/* Actions */}
        <section className="pt-4">
          <button className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-red-400 bg-[rgba(248,113,113,0.1)] border border-[rgba(248,113,113,0.2)] hover:bg-[rgba(248,113,113,0.2)] transition-colors">
            <LogOut size={18} />
            Sign Out
          </button>
        </section>

      </div>
    </div>
  );
}
