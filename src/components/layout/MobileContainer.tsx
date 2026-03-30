"use client";

import { ReactNode } from "react";
import { MicroGrid } from "@/components/ui/MicroGrid";

interface MobileContainerProps {
  children: ReactNode;
}

export function MobileContainer({ children }: MobileContainerProps) {
  return (
    <div className="min-h-screen w-full bg-[#F9FAFB] relative flex flex-col">
      {/* Graph Paper Grid Background */}
      <MicroGrid />

      {/* Main Content - Full mobile viewport */}
      <div className="flex-1 relative flex flex-col z-10 overflow-hidden">
        {children}
      </div>
    </div>
  );
}
