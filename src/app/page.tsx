"use client";

import { useState } from "react";
import { MobileContainer } from "@/components/layout/MobileContainer";
import { BottomNav } from "@/components/layout/BottomNav";
import { DashboardScreen } from "@/components/screens/DashboardScreen";
import { PengirimanScreen } from "@/components/screens/PengirimanScreen";
import { RiwayatScreen } from "@/components/screens/RiwayatScreen";
import { ProfilScreen } from "@/components/screens/ProfilScreen";
import { IoTLogScreen } from "@/components/screens/IoTLogScreen";
import { BackloadScreen } from "@/components/screens/BackloadScreen";
import { AsuransiScreen } from "@/components/screens/AsuransiScreen";
import { Toast } from "@/components/ui/Toast";

export default function Home() {
  const [activeTab, setActiveTab] = useState("beranda");
  const [toast, setToast] = useState({ message: "", isVisible: false });

  const showToast = (message: string) => {
    setToast({ message, isVisible: true });
    setTimeout(() => {
      setToast({ message: "", isVisible: false });
    }, 2400);
  };

  return (
    <MobileContainer>
      <div className="flex-1 relative overflow-hidden pb-[calc(64px+env(safe-area-inset-bottom,0px))]">
        <DashboardScreen isActive={activeTab === "beranda"} />
        <PengirimanScreen isActive={activeTab === "pengiriman"} />
        <RiwayatScreen isActive={activeTab === "riwayat"} />
        <ProfilScreen isActive={activeTab === "profil"} />
        {/* Additional screens accessible from dashboard quick actions */}
        <IoTLogScreen isActive={activeTab === "iot-log"} />
        <BackloadScreen isActive={activeTab === "backload"} />
        <AsuransiScreen isActive={activeTab === "asuransi"} />
        <Toast message={toast.message} isVisible={toast.isVisible} />
      </div>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </MobileContainer>
  );
}
