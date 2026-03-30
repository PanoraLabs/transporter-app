"use client";

import { ReactNode } from "react";
import { MicroGrid } from "@/components/ui/MicroGrid";

interface MobileContainerProps {
  children: ReactNode;
}

export function MobileContainer({ children }: MobileContainerProps) {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center p-4 sm:p-6">
      {/* Phone Frame */}
      <div
        className="w-full max-w-[390px] h-[844px] bg-[#F9FAFB] rounded-[44px] overflow-hidden relative flex flex-col shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_25px_50px_-12px_rgba(0,0,0,0.25)]"
      >
        {/* Graph Paper Grid Background */}
        <MicroGrid />
        
        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[120px] h-[34px] bg-black rounded-[20px] z-[100]" />

        {/* Status Bar */}
        <div className="h-[54px] shrink-0 flex items-end justify-between px-7 pb-2 text-[13px] text-[#6B7280]" style={{ fontFamily: "Inter, sans-serif" }}>
          <span className="font-medium">{new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}</span>
          <div className="flex items-center gap-1.5">
            <svg width="18" height="12" viewBox="0 0 18 12" className="text-current">
              <path
                d="M1 8c2.5 0 2.5-4 5-4s2.5 4 5 4 2.5-4 5-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M1 4c2.5 0 2.5-3 5-3s2.5 3 5 3 2.5-3 5-3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
                opacity="0.5"
              />
            </svg>
            <svg width="25" height="12" viewBox="0 0 25 12" className="text-current">
              <rect x="0.5" y="0.5" width="21" height="11" rx="3" stroke="currentColor" strokeOpacity="0.3" />
              <rect x="2" y="2" width="17" height="8" rx="2" fill="currentColor" />
              <path d="M23 4v4c0.8-0.5 1.5-1 1.5-2s-0.7-1.5-1.5-2z" fill="currentColor" opacity="0.4" />
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 relative overflow-hidden flex flex-col z-10">
          {children}
        </div>
      </div>
    </div>
  );
}
