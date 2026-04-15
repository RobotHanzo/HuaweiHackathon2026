import { useState } from 'react';
import AppShell from './components/AppShell';
import type { AppTab } from './components/AppShell';
import NearbyAlert from './NearbyAlert';
import ContactCapture from './ContactCapture';
import RelationshipCrm from './RelationshipCrm';
import NetworkingTimeline from './NetworkingTimeline';
import WelcomeLounge from './WelcomeLounge';

function App() {
  const [showLounge, setShowLounge] = useState(true);
  const [activeTab, setActiveTab] = useState<AppTab>('nearby');

  if (showLounge) {
    return (
      <div className="bg-black min-h-screen flex justify-center">
        <div className="w-full max-w-[448px] border-x border-gray-800 h-screen overflow-hidden bg-[#131313] flex flex-col">
          {/* page-fade-in → lounge entrance animation */}
          <div className="flex-1 overflow-y-auto page-fade-in">
            <WelcomeLounge onEnter={() => setShowLounge(false)} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen flex justify-center">
      {/* page-fade-in → main app entrance (after leaving lounge) */}
      <div className="w-full max-w-[448px] border-x border-gray-800 h-screen bg-[#131313] page-fade-in">
        <AppShell activeTab={activeTab} onTabChange={setActiveTab}>
          {activeTab === 'nearby'   && <NearbyAlert />}
          {activeTab === 'capture'  && <ContactCapture />}
          {activeTab === 'timeline' && <NetworkingTimeline />}
          {activeTab === 'crm'      && <RelationshipCrm />}
          {activeTab === 'network'  && <NearbyAlert />}
        </AppShell>
      </div>
    </div>
  );
}

export default App;
