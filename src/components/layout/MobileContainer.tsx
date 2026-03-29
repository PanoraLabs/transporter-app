"use client";

import { ReactNode } from "react";

interface MobileContainerProps {
  children: ReactNode;
}

export function MobileContainer({ children }: MobileContainerProps) {
  return (
    <div className="min-h-screen bg-[#060606] flex items-center justify-center p-5">
      {/* Phone Frame */}
      <div
        className="w-[390px] h-[844px] bg-[#0c0c0d] rounded-[44px] overflow-hidden relative flex flex-col shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_0_10px_#111,0_0_0_11px_rgba(255,255,255,0.03),0_60px_120px_rgba(0,0,0,0.9),0_0_80px_rgba(255,107,43,0.07)]"
      >
        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[120px] h-[34px] bg-black rounded-[20px] z-[100] flex items-center justify-center gap-1.5">
          <div className="w-2.5 h-2.5 bg-[#0d0d0d] rounded-full border border-[#1a1a1a] relative">
            <div className="absolute inset-0 m-auto w-1 h-1 bg-[#0a1a10] rounded-full" />
          </div>
        </div>

        {/* Status Bar */}
        <div className="h-[54px] shrink-0 flex items-end justify-between px-7 pb-2 text-[12px] text-[#6e6e7a]" style={{ fontFamily: "Roboto Mono, monospace" }}>
          <span>{new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}</span>
          <div className="flex items-center gap-1.5">
            <svg width="16" height="11" viewBox="0 0 16 11" className="text-current">
              <rect x="0" y="4" width="3" height="7" rx="1" fill="currentColor" opacity="0.4" />
              <rect x="4.5" y="2.5" width="3" height="8.5" rx="1" fill="currentColor" opacity="0.6" />
              <rect x="9" y="0.5" width="3" height="10.5" rx="1" fill="currentColor" />
            </svg>
            <svg width="25" height="12" viewBox="0 0 25 12" className="text-current">
              <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="currentColor" strokeOpacity="0.35" />
              <rect x="2" y="2" width="17" height="8" rx="2" fill="currentColor" />
              <path d="M23 4V8C23.8 7.5 24.5 6.9 24.5 6S23.8 4.5 23 4Z" fill="currentColor" opacity="0.4" />
            </svg>
          </div>
        </div>

        {/* Main Content - fills remaining space */}
        <div className="flex-1 relative overflow-hidden flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
}
