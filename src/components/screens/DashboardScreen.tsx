"use client";

import { motion } from "framer-motion";

interface DashboardScreenProps {
  isActive: boolean;
}

export function DashboardScreen({ isActive }: DashboardScreenProps) {
  if (!isActive) return null;

  return (
    <motion.div 
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="absolute inset-0 overflow-y-auto overflow-x-hidden scrollbar-hide pb-[90px]"
    >
      {/* Hero Section */}
      <div className="px-[22px] pt-4 pb-0 bg-gradient-to-b from-[#141416] to-transparent">
        <div className="flex justify-between items-start mb-[18px]">
          <div>
            <div className="text-[9px] tracking-[0.22em] uppercase text-[#ff6b2b] mb-1" style={{ fontFamily: "Roboto Mono, monospace" }}>
              // Driver · PANORA-LOG
            </div>
            <div className="text-[22px] font-bold leading-tight" style={{ fontFamily: "Bitter, serif" }}>
              Hendra<br />Kusuma
            </div>
            <div className="text-[12px] text-[#6e6e7a] mt-[3px]">Nopol: B 9234 XK · Truk Box 8T</div>
          </div>
          <motion.button whileTap={{ scale: 0.95 }} className="flex items-center gap-1.5 px-3.5 py-2 bg-[rgba(46,204,113,0.12)] border border-[rgba(46,204,113,0.3)] rounded-[20px] cursor-pointer">
            <div className="w-[7px] h-[7px] bg-[#2ecc71] rounded-full animate-blink-pulse" />
            <span className="text-[11px] font-bold text-[#2ecc71] tracking-wide" style={{ fontFamily: "Roboto Mono, monospace" }}>Online</span>
          </motion.button>
        </div>
      </div>

      {/* Earnings Card */}
      <div className="mx-[22px] mb-4 bg-gradient-to-br from-[#1a1008] via-[#1c1510] to-[#0e0e10] border border-[rgba(255,107,43,0.25)] rounded-xl p-5 relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-[150px] h-[150px] rounded-full bg-[radial-gradient(circle,rgba(255,107,43,0.1),transparent_70%)]" />
        <div className="text-[9px] tracking-[0.2em] uppercase text-[#6e6e7a] mb-1.5" style={{ fontFamily: "Roboto Mono, monospace" }}>// Pendapatan Bulan Ini</div>
        <div className="text-[34px] font-bold text-[#ff8c5a] leading-none mb-1" style={{ fontFamily: "Bitter, serif" }}>Rp 8.450.000</div>
        <div className="text-[12px] text-[#6e6e7a] mb-[18px]">14 trip selesai · +Rp 1.2jt vs bulan lalu</div>
        <div className="flex gap-2.5">
          <motion.button whileTap={{ scale: 0.95 }} className="flex-1 py-2.5 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-lg text-center cursor-pointer">
            <div className="text-[15px] mb-0.5">📊</div>
            <div className="text-[10px] text-[#6e6e7a] font-semibold">Riwayat</div>
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} className="flex-1 py-2.5 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-lg text-center cursor-pointer">
            <div className="text-[15px] mb-0.5">↑</div>
            <div className="text-[10px] text-[#6e6e7a] font-semibold">Tarik</div>
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} className="flex-1 py-2.5 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-lg text-center cursor-pointer">
            <div className="text-[15px] mb-0.5">🔄</div>
            <div className="text-[10px] text-[#6e6e7a] font-semibold">Backload</div>
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} className="flex-1 py-2.5 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-lg text-center cursor-pointer">
            <div className="text-[15px] mb-0.5">🛡</div>
            <div className="text-[10px] text-[#6e6e7a] font-semibold">Klaim</div>
          </motion.button>
        </div>
      </div>

      {/* Active Trip */}
      <div className="text-[9px] tracking-[0.22em] uppercase text-[rgba(240,240,242,0.28)] px-[22px] mb-2.5" style={{ fontFamily: "Roboto Mono, monospace" }}>// Trip Aktif</div>
      <motion.div whileTap={{ scale: 0.98 }} className="mx-[22px] mb-4 bg-[#1c1c1f] border border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden cursor-pointer">
        <div className="px-4 py-3.5 bg-gradient-to-r from-[rgba(255,107,43,0.08)] to-transparent border-b border-[rgba(255,255,255,0.08)] flex items-center gap-2.5">
          <div className="w-2 h-2 bg-[#ff6b2b] rounded-full animate-blink-pulse shrink-0" />
          <div className="text-[12px] font-bold text-[#ff6b2b] flex-1 tracking-wide uppercase" style={{ fontFamily: "Roboto Mono, monospace" }}>Pengiriman Berlangsung</div>
          <div className="text-[11px] text-[#6e6e7a]">ETA 2j 14m</div>
        </div>
        <div className="px-4 py-3.5 flex items-center gap-0">
          <div className="text-[16px] font-bold" style={{ fontFamily: "Bitter, serif" }}>Sleman</div>
          <div className="flex-1 flex items-center px-2.5 gap-1">
            <div className="flex-1 h-px bg-gradient-to-r from-[#ff6b2b] to-[rgba(255,107,43,0.3)]" />
            <div className="text-[16px]">🚛</div>
            <div className="flex-1 h-px bg-gradient-to-r from-[rgba(255,107,43,0.3)] to-[rgba(255,107,43,0.08)]" />
          </div>
          <div className="text-[16px] font-bold" style={{ fontFamily: "Bitter, serif" }}>Cibitung</div>
        </div>
        <div className="px-4 pb-3.5 grid grid-cols-3 gap-2.5">
          <div className="bg-[#242428] rounded-lg p-2.5 text-center">
            <div className="text-[14px] mb-1">🌡️</div>
            <div className="text-[15px] font-bold text-[#2ecc71] leading-none" style={{ fontFamily: "Bitter, serif" }}>4.2°C</div>
            <div className="text-[9px] text-[#6e6e7a] mt-0.5 tracking-wide uppercase" style={{ fontFamily: "Roboto Mono, monospace" }}>Suhu</div>
          </div>
          <div className="bg-[#242428] rounded-lg p-2.5 text-center">
            <div className="text-[14px] mb-1">📍</div>
            <div className="text-[15px] font-bold text-[#4a9eff] leading-none" style={{ fontFamily: "Bitter, serif" }}>68km/h</div>
            <div className="text-[9px] text-[#6e6e7a] mt-0.5 tracking-wide uppercase" style={{ fontFamily: "Roboto Mono, monospace" }}>Kecepatan</div>
          </div>
          <div className="bg-[#242428] rounded-lg p-2.5 text-center">
            <div className="text-[14px] mb-1">📦</div>
            <div className="text-[15px] font-bold text-[#ff8c5a] leading-none" style={{ fontFamily: "Bitter, serif" }}>6.8T</div>
            <div className="text-[9px] text-[#6e6e7a] mt-0.5 tracking-wide uppercase" style={{ fontFamily: "Roboto Mono, monospace" }}>Muatan</div>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="text-[9px] tracking-[0.22em] uppercase text-[rgba(240,240,242,0.28)] px-[22px] mb-2.5 mt-4" style={{ fontFamily: "Roboto Mono, monospace" }}>// Statistik Armada</div>
      <div className="grid grid-cols-2 gap-2.5 px-[22px] mb-[18px]">
        <motion.div whileTap={{ scale: 0.98 }} className="bg-[#1c1c1f] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 cursor-pointer">
          <div className="text-[20px] mb-2">🚛</div>
          <div className="text-[24px] font-bold text-[#ff8c5a] leading-none mb-0.5" style={{ fontFamily: "Bitter, serif" }}>14</div>
          <div className="text-[11px] text-[#6e6e7a]">Trip Bulan Ini</div>
          <div className="text-[10px] text-[#2ecc71] mt-[3px]">▲ 3 vs bulan lalu</div>
        </motion.div>
        <motion.div whileTap={{ scale: 0.98 }} className="bg-[#1c1c1f] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 cursor-pointer">
          <div className="text-[20px] mb-2">🔄</div>
          <div className="text-[24px] font-bold text-[#f5c518] leading-none mb-0.5" style={{ fontFamily: "Bitter, serif" }}>4</div>
          <div className="text-[11px] text-[#6e6e7a]">Backload Ditawar</div>
          <div className="text-[10px] text-[#2ecc71] mt-[3px]">Rp 640rb extra</div>
        </motion.div>
        <motion.div whileTap={{ scale: 0.98 }} className="bg-[#1c1c1f] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 cursor-pointer">
          <div className="text-[20px] mb-2">🛡</div>
          <div className="text-[24px] font-bold text-[#2ecc71] leading-none mb-0.5" style={{ fontFamily: "Bitter, serif" }}>Aktif</div>
          <div className="text-[11px] text-[#6e6e7a]">Status Asuransi</div>
          <div className="text-[10px] text-[#6e6e7a] mt-[3px]">1 klaim pending</div>
        </motion.div>
        <motion.div whileTap={{ scale: 0.98 }} className="bg-[#1c1c1f] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 cursor-pointer">
          <div className="text-[20px] mb-2">⭐</div>
          <div className="text-[24px] font-bold text-[#f5c518] leading-none mb-0.5" style={{ fontFamily: "Bitter, serif" }}>4.9</div>
          <div className="text-[11px] text-[#6e6e7a]">Rating On-Chain</div>
          <div className="text-[10px] text-[#6e6e7a] mt-[3px]">18 ulasan</div>
        </motion.div>
      </div>
    </motion.div>
  );
}
