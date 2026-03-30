"use client";

import { motion } from "framer-motion";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navItems = [
  {
    id: "beranda",
    label: "beranda",
    icon: ({ active }: { active: boolean }) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 9.5L12 4l9 5.5v9.5a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z"
          stroke={active ? "#FF6B00" : "currentColor"}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={active ? "rgba(255,107,0,0.08)" : "none"}
        />
      </svg>
    ),
  },
  {
    id: "pengiriman",
    label: "pengiriman",
    badge: 2,
    icon: ({ active }: { active: boolean }) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6l-4-4H6l-4 4v2"
          stroke={active ? "#FF6B00" : "currentColor"}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="9"
          cy="19"
          r="1.5"
          fill={active ? "#FF6B00" : "currentColor"}
        />
        <circle
          cx="15"
          cy="19"
          r="1.5"
          fill={active ? "#FF6B00" : "currentColor"}
        />
        <path
          d="M12 6v4"
          stroke={active ? "#FF6B00" : "currentColor"}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "riwayat",
    label: "riwayat",
    icon: ({ active }: { active: boolean }) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M8 6h8M8 10h8M8 14h5"
          stroke={active ? "#FF6B00" : "currentColor"}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="2"
          stroke={active ? "#FF6B00" : "currentColor"}
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
  {
    id: "profil",
    label: "profil",
    icon: ({ active }: { active: boolean }) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="8"
          r="4"
          stroke={active ? "#FF6B00" : "currentColor"}
          strokeWidth="1.8"
        />
        <path
          d="M4 20c0-4 4-6 8-6s8 2 8 6"
          stroke={active ? "#FF6B00" : "currentColor"}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <div 
      className="h-[72px] bg-white border-t border-[rgba(17,24,39,0.08)] flex items-center px-2 pb-2 z-50"
      style={{ boxShadow: "0 -4px 20px rgba(0,0,0,0.04)" }}
    >
      {navItems.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <motion.button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`flex-1 flex flex-col items-center gap-1 py-2 rounded-xl cursor-pointer relative ${
              isActive ? "text-[#FF6B00]" : "text-[#6B7280]"
            }`}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <item.icon active={isActive} />
              {item.badge && (
                <div className="absolute -top-0.5 -right-1 w-4 h-4 bg-[#FF6B00] rounded-full text-[10px] font-bold flex items-center justify-center text-white">
                  {item.badge}
                </div>
              )}
            </div>
            <span
              className={`text-[11px] font-medium ${
                isActive ? "text-[#FF6B00]" : "text-[#6B7280]"
              }`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {item.label}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
