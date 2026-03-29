"use client";

import { motion } from "framer-motion";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navItems = [
  {
    id: "dash",
    label: "Beranda",
    icon: ({ active }: { active: boolean }) => (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect
          x="2"
          y="2"
          width="8"
          height="8"
          rx="2"
          stroke={active ? "#ff6b2b" : "currentColor"}
          strokeWidth="1.7"
          fill={active ? "rgba(255,107,43,.12)" : "none"}
        />
        <rect
          x="12"
          y="2"
          width="8"
          height="8"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.7"
          opacity="0.35"
        />
        <rect
          x="2"
          y="12"
          width="8"
          height="8"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.7"
          opacity="0.35"
        />
        <rect
          x="12"
          y="12"
          width="8"
          height="8"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.7"
          opacity="0.35"
        />
      </svg>
    ),
  },
  {
    id: "log",
    label: "IoT Log",
    icon: ({ active }: { active: boolean }) => (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle
          cx="11"
          cy="11"
          r="8"
          stroke={active ? "#ff6b2b" : "currentColor"}
          strokeWidth="1.7"
        />
        <path
          d="M11 7V11L14 13"
          stroke={active ? "#ff6b2b" : "currentColor"}
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        {active && (
          <>
            <circle cx="17" cy="5" r="2.5" fill="#ff6b2b" opacity="0.5" />
            <circle cx="17" cy="5" r="2.5" fill="none" stroke="#ff6b2b" strokeWidth="1">
              <animate attributeName="r" from="2.5" to="5" dur="1.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.5" to="0" dur="1.8s" repeatCount="indefinite" />
            </circle>
          </>
        )}
      </svg>
    ),
  },
  {
    id: "backload",
    label: "Backload",
    badge: 4,
    icon: ({ active }: { active: boolean }) => (
      <div className="relative w-[22px] h-[22px] flex items-center justify-center">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path
            d="M4 14L11 18L18 14V8L11 4L4 8V14Z"
            stroke={active ? "#ff6b2b" : "currentColor"}
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M4 8L11 12L18 8"
            stroke={active ? "#ff6b2b" : "currentColor"}
            strokeWidth="1.5"
          />
          <path
            d="M11 12V18"
            stroke={active ? "#ff6b2b" : "currentColor"}
            strokeWidth="1.5"
          />
        </svg>
      </div>
    ),
  },
  {
    id: "asuransi",
    label: "Klaim",
    badge: 1,
    icon: ({ active }: { active: boolean }) => (
      <div className="relative w-[22px] h-[22px] flex items-center justify-center">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path
            d="M11 3L4 6V12C4 15.5 7 18.5 11 20C15 18.5 18 15.5 18 12V6L11 3Z"
            stroke={active ? "#ff6b2b" : "currentColor"}
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M8 11L10 13L14 9"
            stroke={active ? "#ff6b2b" : "currentColor"}
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
  },
  {
    id: "riwayat",
    label: "Riwayat",
    icon: ({ active }: { active: boolean }) => (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect
          x="4"
          y="3"
          width="14"
          height="16"
          rx="2.5"
          stroke={active ? "#ff6b2b" : "currentColor"}
          strokeWidth="1.7"
        />
        <path
          d="M8 8H14M8 11H14M8 14H11"
          stroke={active ? "#ff6b2b" : "currentColor"}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <div className="h-20 bg-[#141416] border-t border-[rgba(255,255,255,0.08)] flex items-center px-1 pb-3 z-50">
      {navItems.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <motion.button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`flex-1 flex flex-col items-center gap-1 py-2 rounded-xl cursor-pointer relative ${
              isActive ? "text-[#ff6b2b]" : "text-[rgba(240,240,242,0.28)]"
            }`}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <item.icon active={isActive} />
              {item.badge && (
                <div className="absolute -top-1 -right-1 w-[15px] h-[15px] bg-[#f5c518] rounded-full text-[8px] font-extrabold flex items-center justify-center text-[#0c0c0d] border-2 border-[#0c0c0d]">
                  {item.badge}
                </div>
              )}
            </div>
            <span
              className={`text-[9px] font-bold tracking-wider uppercase ${
                isActive ? "text-[#ff6b2b]" : "text-[rgba(240,240,242,0.28)]"
              }`}
              style={{ fontFamily: "Roboto Mono, monospace" }}
            >
              {item.label}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
