"use client";

import { useState } from "react";
import { MobileContainer } from "@/components/layout/MobileContainer";
import { BottomNav } from "@/components/layout/BottomNav";
import { DashboardScreen } from "@/components/screens/DashboardScreen";
import { IoTLogScreen } from "@/components/screens/IoTLogScreen";
import { BackloadScreen } from "@/components/screens/BackloadScreen";
import { AsuransiScreen } from "@/components/screens/AsuransiScreen";
import { RiwayatScreen } from "@/components/screens/RiwayatScreen";
import { Toast } from "@/components/ui/Toast";

export default function Home() {
  const [activeTab, setActiveTab] = useState("dash");
  const [toast, setToast] = useState({ message: "", isVisible: false });

  const showToast = (message: string) => {
    setToast({ message, isVisible: true });
    setTimeout(() => {
      setToast({ message: "", isVisible: false });
    }, 2400);
  };

  return (
    <MobileContainer>
      <div className="flex-1 relative overflow-hidden">
        <DashboardScreen isActive={activeTab === "dash"} />
        <IoTLogScreen isActive={activeTab === "log"} />
        <BackloadScreen isActive={activeTab === "backload"} />
        <AsuransiScreen isActive={activeTab === "asuransi"} />
        <RiwayatScreen isActive={activeTab === "riwayat"} />
        <Toast message={toast.message} isVisible={toast.isVisible} />
      </div>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </MobileContainer>
  );
}
