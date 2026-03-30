"use client";

import { motion } from "framer-motion";
import { ActionButton } from "@/components/ui/ActionButton";
import { StatusBadge } from "@/components/ui/StatusBadge";

interface AsuransiScreenProps {
  isActive: boolean;
}

export function AsuransiScreen({ isActive }: AsuransiScreenProps) {
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
          smart contract insurance
        </div>
        <div className="text-[24px] font-bold text-[#111827]" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>
          asuransi
        </div>
      </div>

      {/* Policy Card */}
      <div className="mx-5 mb-4 bg-white border border-[rgba(17,24,39,0.08)] rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
        <div className="px-4 py-4 bg-[rgba(16,185,129,0.06)] border-b border-[rgba(17,24,39,0.06)] flex items-center gap-3">
          <div className="text-[24px]">🛡️</div>
          <div>
            <div className="text-[14px] font-semibold text-[#111827] mb-0.5">polis aktif · PANORA-INS</div>
            <div className="text-[12px] text-[#6B7280]">smart contract otomatis</div>
          </div>
        </div>
        <div className="px-4 py-4 grid grid-cols-2 gap-4">
          <div>
            <div className="text-[11px] text-[#6B7280] tracking-wide" style={{ fontFamily: "Inter, sans-serif" }}>no. polis</div>
            <div className="text-[13px] font-medium text-[#FF6B00]" style={{ fontFamily: "Inter, sans-serif" }}>INS-2025-0842</div>
          </div>
          <div>
            <div className="text-[11px] text-[#6B7280] tracking-wide" style={{ fontFamily: "Inter, sans-serif" }}>coverage</div>
            <div className="text-[16px] font-bold text-[#10B981]" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>Rp 500jt</div>
          </div>
          <div>
            <div className="text-[11px] text-[#6B7280] tracking-wide" style={{ fontFamily: "Inter, sans-serif" }}>trip tercakup</div>
            <div className="text-[16px] font-bold text-[#111827]" style={{ fontFamily: "Inter, sans-serif" }}>14 trip</div>
          </div>
          <div>
            <div className="text-[11px] text-[#6B7280] tracking-wide" style={{ fontFamily: "Inter, sans-serif" }}>berlaku sampai</div>
            <div className="text-[14px] font-medium text-[#111827]">31 Des 2025</div>
          </div>
        </div>
      </div>

      {/* Active Claim */}
      <div className="px-5 mb-2">
        <div className="text-[12px] text-[#6B7280]" style={{ fontFamily: "Inter, sans-serif" }}>
          klaim aktif
        </div>
      </div>

      <motion.div 
        whileTap={{ scale: 0.99 }} 
        className="mx-5 mb-4 bg-[rgba(245,158,11,0.06)] border border-[rgba(245,158,11,0.2)] rounded-xl p-4 cursor-pointer"
      >
        <div className="flex justify-between items-start mb-3">
          <div>
            <div className="text-[11px] text-[#6B7280] mb-0.5" style={{ fontFamily: "Inter, sans-serif" }}>CLAIM-2025-0031</div>
            <div className="text-[17px] font-bold text-[#F59E0B]" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>
              kerusakan suhu terdeteksi
            </div>
          </div>
          <StatusBadge status="menunggu" />
        </div>
        
        <div className="text-[13px] text-[#6B7280] leading-relaxed mb-4">
          trip magelang → jakarta tgl 10 jul, suhu kargo mencapai 12.4°C selama 18 menit (threshold: 8°C). smart contract otomatis terpicu.
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div>
            <div className="text-[11px] text-[#6B7280] tracking-wide" style={{ fontFamily: "Inter, sans-serif" }}>nilai klaim</div>
            <div className="text-[15px] font-bold text-[#F59E0B]" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>Rp 8.500.000</div>
          </div>
          <div>
            <div className="text-[11px] text-[#6B7280] tracking-wide" style={{ fontFamily: "Inter, sans-serif" }}>komoditas</div>
            <div className="text-[14px] font-medium text-[#111827]">cabai 2.1T</div>
          </div>
        </div>
        
        {/* Timeline */}
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#10B981] shrink-0" />
            <span className="text-[12px] text-[#10B981] font-medium flex-1">smart contract terpicu</span>
            <span className="text-[11px] text-[#6B7280]">10 jul 14:22</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#10B981] shrink-0" />
            <span className="text-[12px] text-[#10B981] font-medium flex-1">data IoT terverifikasi</span>
            <span className="text-[11px] text-[#6B7280]">10 jul 14:23</span>
          </div>
          <div className="flex items-center gap-2">
            <motion.div 
              className="w-2 h-2 rounded-full bg-[#F59E0B] shrink-0"
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-[12px] text-[#F59E0B] font-medium flex-1">verifikasi insurer</span>
            <span className="text-[11px] text-[#6B7280]">1-2 hari</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[rgba(17,24,39,0.15)] shrink-0" />
            <span className="text-[12px] text-[#6B7280] flex-1">pencairan</span>
          </div>
        </div>
        
        <ActionButton variant="secondary" size="sm">
          lihat bukti on-chain
        </ActionButton>
      </motion.div>

      {/* Completed Claims */}
      <div className="px-5 mb-2">
        <div className="text-[12px] text-[#6B7280]" style={{ fontFamily: "Inter, sans-serif" }}>
          klaim selesai
        </div>
      </div>

      <motion.div 
        whileTap={{ scale: 0.99 }} 
        className="mx-5 mb-4 bg-[rgba(16,185,129,0.06)] border border-[rgba(16,185,129,0.2)] rounded-xl p-4 cursor-pointer"
      >
        <div className="flex justify-between items-start mb-3">
          <div>
            <div className="text-[11px] text-[#6B7280] mb-0.5" style={{ fontFamily: "Inter, sans-serif" }}>CLAIM-2025-0018</div>
            <div className="text-[17px] font-bold text-[#10B981]" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>
              klaim dicairkan
            </div>
          </div>
          <StatusBadge status="selesai" />
        </div>
        <div className="text-[13px] text-[#6B7280] leading-relaxed mb-3">
          kerusakan suhu rute semarang → jakarta. smart contract mencairkan klaim dalam 48 jam.
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="text-[11px] text-[#6B7280] tracking-wide" style={{ fontFamily: "Inter, sans-serif" }}>dicairkan</div>
            <div className="text-[15px] font-bold text-[#10B981]" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>Rp 4.200.000</div>
          </div>
          <div>
            <div className="text-[11px] text-[#6B7280] tracking-wide" style={{ fontFamily: "Inter, sans-serif" }}>waktu proses</div>
            <div className="text-[15px] font-medium text-[#111827]">2 hari kerja</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
