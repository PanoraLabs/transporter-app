"use client";

import { motion } from "framer-motion";
import { ActionButton } from "@/components/ui/ActionButton";

interface ProfilScreenProps {
  isActive: boolean;
}

export function ProfilScreen({ isActive }: ProfilScreenProps) {
  if (!isActive) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute inset-0 overflow-y-auto overflow-x-hidden scrollbar-hide pb-6"
    >
      {/* Header */}
      <div className="px-5 pt-5 pb-3">
        <div className="text-[12px] text-[#6B7280] mb-0.5" style={{ fontFamily: "Inter, sans-serif" }}>
          pengaturan akun
        </div>
        <div className="text-[24px] font-bold text-[#111827]" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>
          profil
        </div>
      </div>

      {/* Profile Card */}
      <div className="mx-5 mb-4 bg-white border border-[rgba(17,24,39,0.08)] rounded-xl p-4 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-[#F3F4F6] rounded-full flex items-center justify-center text-[28px]">
            👤
          </div>
          <div className="flex-1">
            <div className="text-[18px] font-bold text-[#111827]" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>
              hendra kusuma
            </div>
            <div className="text-[13px] text-[#6B7280]">driver level 3</div>
            <div className="text-[12px] text-[#FF6B00] font-medium">★ 4.9 rating</div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#F9FAFB] rounded-lg p-3">
            <div className="text-[11px] text-[#6B7280] mb-0.5">nopol</div>
            <div className="text-[14px] font-semibold text-[#111827]">B 9234 XK</div>
          </div>
          <div className="bg-[#F9FAFB] rounded-lg p-3">
            <div className="text-[11px] text-[#6B7280] mb-0.5">kendaraan</div>
            <div className="text-[14px] font-semibold text-[#111827]">truk box 8T</div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-5 mb-2">
        <div className="text-[12px] text-[#6B7280]" style={{ fontFamily: "Inter, sans-serif" }}>
          statistik
        </div>
      </div>
      
      <div className="mx-5 mb-4 bg-white border border-[rgba(17,24,39,0.08)] rounded-xl p-4 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-[11px] text-[#6B7280] mb-1">bergabung</div>
            <div className="text-[16px] font-bold text-[#111827]">Jan 2024</div>
          </div>
          <div>
            <div className="text-[11px] text-[#6B7280] mb-1">trip total</div>
            <div className="text-[16px] font-bold text-[#FF6B00]">127</div>
          </div>
          <div>
            <div className="text-[11px] text-[#6B7280] mb-1">jarak tempuh</div>
            <div className="text-[16px] font-bold text-[#111827]">45.230 km</div>
          </div>
          <div>
            <div className="text-[11px] text-[#6B7280] mb-1">penghasilan total</div>
            <div className="text-[16px] font-bold text-[#10B981]">Rp 89.4jt</div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-5 mb-2">
        <div className="text-[12px] text-[#6B7280]" style={{ fontFamily: "Inter, sans-serif" }}>
          pengaturan
        </div>
      </div>
      
      <div className="mx-5 mb-4 flex flex-col gap-2">
        {[
          { label: "edit profil", icon: "✏️" },
          { label: "dokumen kendaraan", icon: "📄" },
          { label: "riwayat pembayaran", icon: "💳" },
          { label: "notifikasi", icon: "🔔" },
          { label: "pusat bantuan", icon: "❓" },
        ].map((item) => (
          <motion.button
            key={item.label}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center gap-3 px-4 py-3.5 bg-white border border-[rgba(17,24,39,0.08)] rounded-xl cursor-pointer shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
          >
            <span className="text-[18px]">{item.icon}</span>
            <span className="flex-1 text-[14px] font-medium text-[#111827] text-left">
              {item.label}
            </span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#6B7280]">
              <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
        ))}
      </div>

      {/* Logout */}
      <div className="px-5 mb-6">
        <ActionButton variant="danger">
          keluar akun
        </ActionButton>
      </div>
    </motion.div>
  );
}
