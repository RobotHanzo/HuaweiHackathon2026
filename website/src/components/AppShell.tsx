import { type ReactNode, useRef, useState } from "react";
import { Settings, Globe, Camera, Clock, Briefcase, Radar } from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────
export type AppTab = "network" | "capture" | "timeline" | "crm" | "nearby";

const TAB_ORDER: AppTab[] = ["network", "capture", "timeline", "crm", "nearby"];

interface AppShellProps {
  activeTab: AppTab;
  onTabChange: (tab: AppTab) => void;
  children: ReactNode;
}

// ── Shared Header ────────────────────────────────────────────────────────────
export function AppHeader() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-[12px] bg-[rgba(19,19,19,0.7)] flex h-[64px] items-center justify-between px-6 w-full shrink-0">
      {/* Logo group */}
      <div className="flex gap-3 items-center">
        <div className="bg-[#353535] overflow-hidden rounded-full shrink-0 size-8">
          <img alt="Profile" className="size-full object-cover" src="/logo.png" />
        </div>
        <p className="font-['Manrope:Bold',sans-serif] font-bold text-[#bac8dc] text-[20px] leading-7 tracking-[-1px] whitespace-nowrap">
          Cufflink
        </p>
      </div>
      {/* Settings */}
      <Settings size={20} className="text-[#bac8dc] shrink-0" strokeWidth={2} />
    </div>
  );
}

// ── Shared Bottom Nav ─────────────────────────────────────────────────────────
interface NavItem {
  id: AppTab;
  label: string;
  icon: ReactNode;
}

const NAV_ITEMS: NavItem[] = [
  { id: "network",  label: "NETWORK",  icon: <Globe     size={18} strokeWidth={2} /> },
  { id: "capture",  label: "CAPTURE",  icon: <Camera    size={18} strokeWidth={2} /> },
  { id: "timeline", label: "TIMELINE", icon: <Clock     size={18} strokeWidth={2} /> },
  { id: "crm",      label: "CRM",      icon: <Briefcase size={18} strokeWidth={2} /> },
  { id: "nearby",   label: "NEARBY",   icon: <Radar     size={18} strokeWidth={2} /> },
];

export function BottomNav({
  activeTab,
  onTabChange,
}: Pick<AppShellProps, "activeTab" | "onTabChange">) {
  return (
    <div className="sticky bottom-0 z-50 backdrop-blur-[20px] bg-[rgba(19,19,19,0.8)] flex h-[80px] items-center justify-around px-4 rounded-tl-2xl rounded-tr-2xl shadow-[0px_-8px_24px_0px_rgba(0,0,0,0.06)] w-full shrink-0">
      {NAV_ITEMS.map(({ id, label, icon }) => {
        const active = activeTab === id;
        return (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            /* nav-tab-btn drives the springy scale transition via CSS */
            className={`nav-tab-btn flex flex-col items-center gap-1 px-2 py-1 relative ${
              active ? "opacity-100 scale-110" : "opacity-60 scale-100"
            }`}
          >
            {/* Icon — colour transitions smoothly */}
            <span
              className="transition-colors duration-200"
              style={{ color: active ? "#e9c176" : "#c6c5d4" }}
            >
              {icon}
            </span>

            {/* Label */}
            <span
              className="font-['Inter:Medium',sans-serif] font-medium text-[10px] leading-4 tracking-[0.25px] uppercase whitespace-nowrap transition-colors duration-200"
              style={{ color: active ? "#e9c176" : "#c6c5d4" }}
            >
              {label}
            </span>

            {/* Gold indicator dot — springs in when active */}
            <span
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#e9c176] transition-all duration-300"
              style={{
                opacity:   active ? 1 : 0,
                transform: `translateX(-50%) scale(${active ? 1 : 0})`,
              }}
            />
          </button>
        );
      })}
    </div>
  );
}

// ── App Shell ─────────────────────────────────────────────────────────────────
// Renders: [sticky header] [animated page content] [sticky bottom nav]
export default function AppShell({
  activeTab,
  onTabChange,
  children,
}: AppShellProps) {
  // Track the slide direction based on tab index comparison
  const prevTabRef = useRef<AppTab>(activeTab);
  const [direction, setDirection] = useState<"right" | "left">("right");

  function handleTabChange(tab: AppTab) {
    if (tab === prevTabRef.current) return; // no-op on same tab
    const fromIdx = TAB_ORDER.indexOf(prevTabRef.current);
    const toIdx   = TAB_ORDER.indexOf(tab);
    setDirection(toIdx > fromIdx ? "right" : "left");
    prevTabRef.current = tab;
    onTabChange(tab);
  }

  return (
    <div className="flex flex-col w-full h-full overflow-hidden">
      <AppHeader />

      {/* Scrollable content area — key forces remount → CSS animation fires */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <div
          key={activeTab}
          className={direction === "right" ? "page-enter-right" : "page-enter-left"}
        >
          {children}
        </div>
      </div>

      <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
}
