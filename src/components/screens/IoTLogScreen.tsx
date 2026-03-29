"use client";

import { motion } from "framer-motion";

interface IoTLogScreenProps {
  isActive: boolean;
}

export function IoTLogScreen({ isActive }: IoTLogScreenProps) {
  if (!isActive) return null;

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="absolute inset-0 overflow-y-auto overflow-x-hidden scrollbar-hide pb-[90px]"
    >
      <div className="px-[22px] pt-5 pb-4 flex justify-between items-end">
        <div>
          <div className="text-[9px] tracking-[0.18em] uppercase text-[rgba(240,240,242,0.28)] mb-1" style={{ fontFamily: "Roboto Mono, monospace" }}>
            // IoT Tracking Aktif
          </div>
          <div className="text-[24px] font-bold" style={{ fontFamily: "Bitter, serif" }}>
            Panora<em className="italic text-[#ff6b2b]">-Log</em>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[rgba(46,204,113,0.12)] border border-[rgba(46,204,113,0.3)] rounded-[20px]">
          <div className="w-1.5 h-1.5 bg-[#2ecc71] rounded-full animate-blink-pulse" />
          <span className="text-[9px] font-bold text-[#2ecc71] tracking-wide uppercase" style={{ fontFamily: "Roboto Mono, monospace" }}>
            LIVE
          </span>
        </div>
      </div>

      <div className="mx-[22px] mb-4 h-[200px] bg-[#1c1c1f] border border-[rgba(255,255,255,0.08)] rounded-xl relative overflow-hidden flex items-center justify-center">
        <div className="absolute top-3 left-3.5 text-[9px] tracking-[0.18em] uppercase text-[#ff6b2b] bg-[rgba(12,12,13,0.8)] px-2.5 py-1 rounded-md border border-[rgba(255,107,43,0.2)]" style={{ fontFamily: "Roboto Mono, monospace" }}>
          GPS LIVE · Jawa Tengah
        </div>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 390 200" fill="none">
          <path d="M40 160 Q120 140 180 120 Q240 100 300 90 Q340 85 360 80" stroke="rgba(255,107,43,0.25)" strokeWidth="3" strokeDasharray="8,6" />
          <path d="M40 160 Q120 140 180 120 Q220 106 248 98" stroke="#ff6b2b" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="248" cy="98" r="8" fill="rgba(255,107,43,0.2)" stroke="#ff6b2b" strokeWidth="1.5" />
          <circle cx="248" cy="98" r="4" fill="#ff6b2b" />
          <circle cx="40" cy="160" r="5" fill="#2ecc71" />
          <circle cx="360" cy="80" r="5" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="px-[22px] mb-4">
        <div className="text-[9px] tracking-[0.18em] uppercase text-[rgba(240,240,242,0.28)] mb-3" style={{ fontFamily: "Roboto Mono, monospace" }}>
          // Sensor IoT On-Chain
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-[#1c1c1f] border border-[rgba(255,255,255,0.08)] rounded-xl p-4">
            <div className="text-[9px] tracking-[0.18em] uppercase text-[#6e6e7a] mb-2" style={{ fontFamily: "Roboto Mono, monospace" }}>Suhu Kargo</div>
            <div className="text-[32px] font-bold text-[#2ecc71] leading-none" style={{ fontFamily: "Bitter, serif" }}>4.2</div>
            <div className="text-[12px] text-[#6e6e7a] mb-2">°Celsius</div>
            <div className="text-[10px] text-[#2ecc71]">✓ Normal (0-8°C)</div>
          </div>
          <div className="bg-[#1c1c1f] border border-[rgba(255,255,255,0.08)] rounded-xl p-4">
            <div className="text-[9px] tracking-[0.18em] uppercase text-[#6e6e7a] mb-2" style={{ fontFamily: "Roboto Mono, monospace" }}>Kelembaban</div>
            <div className="text-[32px] font-bold text-[#4a9eff] leading-none" style={{ fontFamily: "Bitter, serif" }}>78</div>
            <div className="text-[12px] text-[#6e6e7a] mb-2">% RH</div>
            <div className="text-[10px] text-[#4a9eff]">✓ Normal</div>
          </div>
          <div className="bg-[#1c1c1f] border border-[rgba(255,255,255,0.08)] rounded-xl p-4">
            <div className="text-[9px] tracking-[0.18em] uppercase text-[#6e6e7a] mb-2" style={{ fontFamily: "Roboto Mono, monospace" }}>GPS Signal</div>
            <div className="text-[32px] font-bold text-[#ff8c5a] leading-none" style={{ fontFamily: "Bitter, serif" }}>94</div>
            <div className="text-[12px] text-[#6e6e7a] mb-2">% Akurasi</div>
            <div className="text-[10px] text-[#ff6b2b]">● Lock 12 Satelit</div>
          </div>
          <div className="bg-[#1c1c1f] border border-[rgba(245,197,24,0.3)] rounded-xl p-4 bg-gradient-to-br from-[rgba(245,197,24,0.05)] to-[#1c1c1f]">
            <div className="text-[9px] tracking-[0.18em] uppercase text-[#6e6e7a] mb-2" style={{ fontFamily: "Roboto Mono, monospace" }}>Getaran</div>
            <div className="text-[32px] font-bold text-[#f5c518] leading-none" style={{ fontFamily: "Bitter, serif" }}>2.8</div>
            <div className="text-[12px] text-[#6e6e7a] mb-2">G-Force</div>
            <div className="text-[10px] text-[#f5c518]">⚠ Sedikit Tinggi</div>
          </div>
        </div>
      </div>

      <div className="mx-[22px] mb-4 bg-[rgba(46,204,113,0.12)] border border-[rgba(46,204,113,0.3)] rounded-xl p-4 flex gap-3.5">
        <div className="text-[24px] shrink-0">✅</div>
        <div>
          <div className="text-[13px] font-bold text-[#2ecc71] mb-1">Kondisi Kargo Optimal</div>
          <div className="text-[11px] text-[#6e6e7a] leading-relaxed">
            Suhu terjaga 4.2°C · Kontrak asuransi tidak terpicu · Data tersinkron ke Solana setiap 30 detik
          </div>
        </div>
      </div>
    </motion.div>
  );
}
