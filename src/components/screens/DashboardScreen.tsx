"use client";

import { motion } from "framer-motion";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ActionButton } from "@/components/ui/ActionButton";

interface DashboardScreenProps {
  isActive: boolean;
}

export function DashboardScreen({ isActive }: DashboardScreenProps) {
  if (!isActive) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute inset-0 overflow-y-auto overflow-x-hidden scrollbar-hide pb-[90px]"
    >
      {/* Header */}
      <div className="px-5 pt-4 pb-2">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="text-[12px] text-[#6B7280] mb-0.5" style={{ fontFamily: "Inter, sans-serif" }}>
              driver · panora-log
            </div>
            <div className="text-[22px] font-bold text-[#111827]" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>
              hendra kusuma
            </div>
            <div className="text-[13px] text-[#6B7280] mt-0.5">nopol: B 9234 XK · truk box 8T</div>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[rgba(16,185,129,0.12)] border border-[rgba(16,185,129,0.3)] rounded-full">
            <motion.div 
              className="w-2 h-2 bg-[#10B981] rounded-full"
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-[12px] font-semibold text-[#10B981]" style={{ fontFamily: "Inter, sans-serif" }}>online</span>
          </div>
        </div>
      </div>

      {/* Earnings Card */}
      <div className="mx-5 mb-4 bg-white border border-[rgba(17,24,39,0.08)] rounded-xl p-4 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
        <div className="text-[12px] text-[#6B7280] mb-1" style={{ fontFamily: "Inter, sans-serif" }}>
          pendapatan bulan ini
        </div>
        <div className="text-[32px] font-bold text-[#FF6B00] leading-none mb-1" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>
          Rp 8.450.000
        </div>
        <div className="text-[13px] text-[#6B7280] mb-4">14 trip selesai · +Rp 1.2jt vs bulan lalu</div>
        
        <div className="flex gap-2">
          <motion.button 
            whileTap={{ scale: 0.98 }}
            className="flex-1 py-2.5 bg-[#F3F4F6] rounded-lg text-center cursor-pointer"
          >
            <div className="text-[12px] font-medium text-[#111827]">riwayat</div>
          </motion.button>
          <motion.button 
            whileTap={{ scale: 0.98 }}
            className="flex-1 py-2.5 bg-[#F3F4F6] rounded-lg text-center cursor-pointer"
          >
            <div className="text-[12px] font-medium text-[#111827]">tarik</div>
          </motion.button>
          <motion.button 
            whileTap={{ scale: 0.98 }}
            className="flex-1 py-2.5 bg-[#F3F4F6] rounded-lg text-center cursor-pointer"
          >
            <div className="text-[12px] font-medium text-[#111827]">backload</div>
          </motion.button>
        </div>
      </div>

      {/* Active Trip */}
      <div className="px-5 mb-2">
        <div className="text-[12px] text-[#6B7280] mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
          trip aktif
        </div>
      </div>
      
      <motion.div 
        whileTap={{ scale: 0.99 }}
        className="mx-5 mb-4 bg-white border border-[rgba(255,107,0,0.3)] rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.05)] cursor-pointer"
      >
        <div className="px-4 py-3 bg-gradient-to-r from-[rgba(255,107,0,0.06)] to-transparent border-b border-[rgba(17,24,39,0.06)] flex items-center justify-between">
          <StatusBadge status="dalam perjalanan" />
          <div className="text-[13px] font-medium text-[#6B7280]">ETA 2j 14m</div>
        </div>
        
        <div className="px-4 py-3">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex-1">
              <div className="text-[18px] font-bold text-[#111827]" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>Sleman</div>
              <div className="text-[12px] text-[#6B7280]">pickup</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-px bg-[#FF6B00]" />
              <div className="text-[20px]">🚛</div>
              <div className="w-8 h-px bg-[#FF6B00]" />
            </div>
            <div className="flex-1 text-right">
              <div className="text-[18px] font-bold text-[#111827]" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>Cibitung</div>
              <div className="text-[12px] text-[#6B7280]">tujuan</div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-[#F9FAFB] rounded-lg p-2.5 text-center border border-[rgba(17,24,39,0.06)]">
              <div className="text-[11px] text-[#6B7280] mb-0.5">suhu</div>
              <div className="text-[18px] font-bold text-[#10B981]" style={{ fontFamily: "Inter, sans-serif" }}>4.2°C</div>
            </div>
            <div className="bg-[#F9FAFB] rounded-lg p-2.5 text-center border border-[rgba(17,24,39,0.06)]">
              <div className="text-[11px] text-[#6B7280] mb-0.5">kecepatan</div>
              <div className="text-[18px] font-bold text-[#111827]" style={{ fontFamily: "Inter, sans-serif" }}>68</div>
              <div className="text-[10px] text-[#6B7280]">km/j</div>
            </div>
            <div className="bg-[#F9FAFB] rounded-lg p-2.5 text-center border border-[rgba(17,24,39,0.06)]">
              <div className="text-[11px] text-[#6B7280] mb-0.5">muatan</div>
              <div className="text-[18px] font-bold text-[#FF6B00]" style={{ fontFamily: "Inter, sans-serif" }}>6.8T</div>
            </div>
          </div>
        </div>
        
        <div className="px-4 pb-4">
          <ActionButton size="md">
            lihat detail pengiriman
          </ActionButton>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="px-5 mb-2 mt-5">
        <div className="text-[12px] text-[#6B7280]" style={{ fontFamily: "Inter, sans-serif" }}>
          statistik armada
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3 px-5 mb-4">
        <motion.div 
          whileTap={{ scale: 0.98 }} 
          className="bg-white border border-[rgba(17,24,39,0.08)] rounded-xl p-4 cursor-pointer shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
        >
          <div className="text-[24px] font-bold text-[#FF6B00] leading-none mb-1" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>14</div>
          <div className="text-[13px] text-[#6B7280]">trip bulan ini</div>
          <div className="text-[11px] text-[#10B981] mt-1">▲ 3 vs bulan lalu</div>
        </motion.div>
        
        <motion.div 
          whileTap={{ scale: 0.98 }} 
          className="bg-white border border-[rgba(17,24,39,0.08)] rounded-xl p-4 cursor-pointer shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
        >
          <div className="text-[24px] font-bold text-[#111827] leading-none mb-1" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>4</div>
          <div className="text-[13px] text-[#6B7280]">backload ditawar</div>
          <div className="text-[11px] text-[#10B981] mt-1">+Rp 640rb extra</div>
        </motion.div>
        
        <motion.div 
          whileTap={{ scale: 0.98 }} 
          className="bg-white border border-[rgba(17,24,39,0.08)] rounded-xl p-4 cursor-pointer shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
        >
          <div className="text-[24px] font-bold text-[#10B981] leading-none mb-1" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>aktif</div>
          <div className="text-[13px] text-[#6B7280]">status asuransi</div>
          <div className="text-[11px] text-[#6B7280] mt-1">1 klaim diproses</div>
        </motion.div>
        
        <motion.div 
          whileTap={{ scale: 0.98 }} 
          className="bg-white border border-[rgba(17,24,39,0.08)] rounded-xl p-4 cursor-pointer shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
        >
          <div className="text-[24px] font-bold text-[#111827] leading-none mb-1" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>4.9★</div>
          <div className="text-[13px] text-[#6B7280]">rating on-chain</div>
          <div className="text-[11px] text-[#6B7280] mt-1">18 ulasan</div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <div className="px-5 mt-6 mb-4">
        <div className="text-[12px] text-[#6B7280] mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
          aksi cepat
        </div>
        <div className="flex flex-col gap-2">
          <ActionButton icon={<span>📍</span>}>
            terima order baru
          </ActionButton>
        </div>
      </div>
    </motion.div>
  );
}
