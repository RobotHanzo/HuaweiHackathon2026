import { useState } from 'react';
import AppShell from './components/AppShell';
import type { AppTab } from './components/AppShell';
import NearbyAlert from './NearbyAlert';
import ContactCapture from './ContactCapture';
import RelationshipCrm from './RelationshipCrm';
import NetworkingTimeline from './NetworkingTimeline';
import WelcomeLounge from './WelcomeLounge';
import HomeProfile from './HomeProfile';
import SettingsPage from './SettingsPage';

function App() {
  const [showLounge, setShowLounge] = useState(true);
  const [activeTab, setActiveTab] = useState<AppTab>('home');
  const [showSettings, setShowSettings] = useState(false);
  const [isClosingSettings, setIsClosingSettings] = useState(false);

  const handleCloseSettings = () => {
    setIsClosingSettings(true);
    setTimeout(() => {
      setShowSettings(false);
      setIsClosingSettings(false);
    }, 200);
  };

  if (showLounge) {
    return (
      <div className="bg-black min-h-[100dvh] flex justify-center">
        <div className="w-full max-w-[448px] border-x border-gray-800 h-[100dvh] overflow-hidden bg-[#131313] flex flex-col">
          {/* page-fade-in → lounge entrance animation */}
          <div className="flex-1 overflow-y-auto page-fade-in">
            <WelcomeLounge onEnter={() => setShowLounge(false)} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-[100dvh] flex justify-center">
      {/* page-fade-in → main app entrance (after leaving lounge) */}
      <div className="relative w-full max-w-[448px] border-x border-gray-800 h-[100dvh] bg-[#131313] page-fade-in overflow-hidden">
        <AppShell activeTab={activeTab} onTabChange={setActiveTab} onOpenSettings={() => setShowSettings(true)}>
          {activeTab === 'nearby'   && <NearbyAlert />}
          {activeTab === 'capture'  && <ContactCapture />}
          {activeTab === 'timeline' && <NetworkingTimeline />}
          {activeTab === 'crm'      && <RelationshipCrm />}
          {activeTab === 'home'     && <HomeProfile onScanSuccess={() => setActiveTab('capture')} />}
        </AppShell>

        {showSettings && (
          <div className={`absolute inset-0 z-[100] ${isClosingSettings ? 'page-fade-out' : 'page-fade-in'}`}>
            <SettingsPage onClose={handleCloseSettings} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
