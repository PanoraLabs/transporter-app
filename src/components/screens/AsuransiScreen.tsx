"use client";

import { motion } from "framer-motion";

interface AsuransiScreenProps {
  isActive: boolean;
}

export function AsuransiScreen({ isActive }: AsuransiScreenProps) {
  if (!isActive) return null;

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="absolute inset-0 overflow-y-auto overflow-x-hidden scrollbar-hide pb-[90px]"
    >
      <div className="px-[22px] pt-5 pb-4">
        <div className="text-[9px] tracking-[0.22em] uppercase text-[rgba(240,240,242,0.28)] mb-1" style={{ fontFamily: "Roboto Mono, monospace" }}>
          // Smart Contract Insurance
        </div>
        <div className="text-[24px] font-bold" style={{ fontFamily: "Bitter, serif" }}>
          Klaim<em className="italic text-[#ff4444]">Asuransi</em>
        </div>
      </div>

      <div className="mx-[22px] mb-4 bg-[#1c1c1f] border border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden">
        <div className="px-4 py-4 bg-gradient-to-r from-[rgba(46,204,113,0.12)] to-transparent border-b border-[rgba(255,255,255,0.08)] flex items-center gap-2.5">
          <div className="text-[24px]">🛡️</div>
          <div>
            <div className="text-[14px] font-bold mb-0.5">Polis Aktif · PANORA-INS</div>
            <div className="text-[11px] text-[#6e6e7a]">Smart contract otomatis · Metaplex · Solana</div>
          </div>
        </div>
        <div className="px-4 py-4 grid grid-cols-2 gap-3">
          <div>
            <div className="text-[10px] text-[rgba(240,240,242,0.28)] tracking-wide uppercase" style={{ fontFamily: "Roboto Mono, monospace" }}>No. Polis</div>
            <div className="text-[13px] text-[#ff6b2b]" style={{ fontFamily: "Roboto Mono, monospace" }}>INS-2025-0842</div>
          </div>
          <div>
            <div className="text-[10px] text-[rgba(240,240,242,0.28)] tracking-wide uppercase" style={{ fontFamily: "Roboto Mono, monospace" }}>Coverage</div>
            <div className="text-[16px] font-bold text-[#2ecc71]" style={{ fontFamily: "Bitter, serif" }}>Rp 500jt</div>
          </div>
          <div>
            <div className="text-[10px] text-[rgba(240,240,242,0.28)] tracking-wide uppercase" style={{ fontFamily: "Roboto Mono, monospace" }}>Trip Tercakup</div>
            <div className="text-[16px] font-bold" style={{ fontFamily: "Bitter, serif" }}>14 trip</div>
          </div>
          <div>
            <div className="text-[10px] text-[rgba(240,240,242,0.28)] tracking-wide uppercase" style={{ fontFamily: "Roboto Mono, monospace" }}>Masa Berlaku</div>
            <div className="text-[13px] font-bold" style={{ fontFamily: "Bitter, serif" }}>31 Des 2025</div>
          </div>
        </div>
      </div>

      <div className="px-[22px] mb-3">
        <div className="text-[9px] tracking-[0.22em] uppercase text-[rgba(240,240,242,0.28)]" style={{ fontFamily: "Roboto Mono, monospace" }}>
          // 1 Klaim Aktif
        </div>
      </div>

      <motion.div 
        whileTap={{ scale: 0.98 }} 
        className="mx-[22px] mb-3 bg-[rgba(245,197,24,0.07)] border border-[rgba(245,197,24,0.3)] rounded-xl p-[18px] cursor-pointer"
      >
        <div className="flex justify-between items-start mb-3">
          <div>
            <div className="text-[9px] tracking-[0.15em] uppercase text-[#6e6e7a]" style={{ fontFamily: "Roboto Mono, monospace" }}>// CLAIM-2025-0031</div>
            <div className="text-[17px] font-bold text-[#f5c518]" style={{ fontFamily: "Bitter, serif" }}>Kerusakan Suhu<br />Terdeteksi</div>
          </div>
          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[20px] text-[9px] font-bold tracking-wide uppercase bg-[rgba(245,197,24,0.12)] text-[#f5c518] border border-[rgba(245,197,24,0.3)]">Diproses</div>
        </div>
        <div className="text-[12px] text-[#6e6e7a] leading-relaxed mb-3.5">
          Pada trip Magelang → Jakarta tgl 10 Jul, suhu kargo mencapai 12.4°C selama 18 menit (threshold: 8°C). Smart contract otomatis terpicu dan klaim dikirim ke insurer.
        </div>
        <div className="grid grid-cols-2 gap-2.5 mb-3.5">
          <div>
            <div className="text-[9px] text-[rgba(240,240,242,0.28)] tracking-wide uppercase" style={{ fontFamily: "Roboto Mono, monospace" }}>Nilai Klaim</div>
            <div className="text-[15px] font-bold text-[#f5c518]" style={{ fontFamily: "Bitter, serif" }}>Rp 8.500.000</div>
          </div>
          <div>
            <div className="text-[9px] text-[rgba(240,240,242,0.28)] tracking-wide uppercase" style={{ fontFamily: "Roboto Mono, monospace" }}>Penyebab</div>
            <div className="text-[13px] font-bold">Kompresor AC mati 18 mnt</div>
          </div>
          <div>
            <div className="text-[9px] text-[rgba(240,240,242,0.28)] tracking-wide uppercase" style={{ fontFamily: "Roboto Mono, monospace" }}>Komoditas</div>
            <div className="text-[14px] font-bold">🥬 Cabai 2.1T</div>
          </div>
          <div>
            <div className="text-[9px] text-[rgba(240,240,242,0.28)] tracking-wide uppercase" style={{ fontFamily: "Roboto Mono, monospace" }}>Bukti On-Chain</div>
            <div className="text-[11px] text-[#ff6b2b]" style={{ fontFamily: "Roboto Mono, monospace" }}>Tx: 7mPq...kR4x</div>
          </div>
        </div>
        
        {/* Timeline */}
        <div className="flex flex-col gap-1.5 mb-3.5">
          <div className="flex items-center gap-2 text-[11px]">
            <div className="w-2 h-2 rounded-full bg-[#2ecc71] shrink-0" />
            <span className="text-[#2ecc71] font-bold">✓ Smart contract terpicu otomatis</span>
            <span className="text-[#6e6e7a] text-[10px] ml-auto">10 Jul 14:22</span>
          </div>
          <div className="flex items-center gap-2 text-[11px]">
            <div className="w-2 h-2 rounded-full bg-[#2ecc71] shrink-0" />
            <span className="text-[#2ecc71] font-bold">✓ Data IoT diverifikasi on-chain</span>
            <span className="text-[#6e6e7a] text-[10px] ml-auto">10 Jul 14:23</span>
          </div>
          <div className="flex items-center gap-2 text-[11px]">
            <div className="w-2 h-2 rounded-full bg-[#f5c518] animate-blink-pulse shrink-0" />
            <span className="text-[#f5c518] font-bold">⏳ Verifikasi insurer (1–2 hari kerja)</span>
            <span className="text-[#6e6e7a] text-[10px] ml-auto">Pending</span>
          </div>
          <div className="flex items-center gap-2 text-[11px]">
            <div className="w-2 h-2 rounded-full bg-[rgba(255,255,255,0.08)] shrink-0" />
            <span className="text-[#6e6e7a]">Pencairan ke wallet PANORA</span>
          </div>
        </div>
        
        <motion.button 
          whileTap={{ scale: 0.97 }}
          className="w-full py-2.5 bg-[#f5c518] text-[#0c0c0d] rounded-lg text-[12px] font-extrabold tracking-wide cursor-pointer"
        >
          Lihat Bukti On-Chain →
        </motion.button>
      </motion.div>

      <div className="px-[22px] mb-3">
        <div className="text-[9px] tracking-[0.22em] uppercase text-[rgba(240,240,242,0.28)]" style={{ fontFamily: "Roboto Mono, monospace" }}>// Klaim Selesai</div>
      </div>

      <motion.div 
        whileTap={{ scale: 0.98 }} 
        className="mx-[22px] bg-[rgba(46,204,113,0.12)] border border-[rgba(46,204,113,0.3)] rounded-xl p-[18px] cursor-pointer"
      >
        <div className="flex justify-between items-start mb-3">
          <div>
            <div className="text-[9px] tracking-[0.15em] uppercase text-[#6e6e7a]" style={{ fontFamily: "Roboto Mono, monospace" }}>// CLAIM-2025-0018</div>
            <div className="text-[17px] font-bold text-[#2ecc71]" style={{ fontFamily: "Bitter, serif" }}>Klaim Dicairkan</div>
          </div>
          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[20px] text-[9px] font-bold tracking-wide uppercase bg-[rgba(46,204,113,0.12)] text-[#2ecc71] border border-[rgba(46,204,113,0.3)]">Selesai</div>
        </div>
        <div className="text-[12px] text-[#6e6e7a] leading-relaxed mb-3.5">
          Kerusakan suhu pada rute Semarang → Jakarta. Smart contract mencairkan klaim dalam 48 jam kerja.
        </div>
        <div className="grid grid-cols-2 gap-2.5 mb-3.5">
          <div>
            <div className="text-[9px] text-[rgba(240,240,242,0.28)] tracking-wide uppercase" style={{ fontFamily: "Roboto Mono, monospace" }}>Dicairkan</div>
            <div className="text-[15px] font-bold text-[#2ecc71]" style={{ fontFamily: "Bitter, serif" }}>Rp 4.200.000</div>
          </div>
          <div>
            <div className="text-[9px] text-[rgba(240,240,242,0.28)] tracking-wide uppercase" style={{ fontFamily: "Roboto Mono, monospace" }}>Waktu Proses</div>
            <div className="text-[15px] font-bold">2 Hari Kerja</div>
          </div>
        </div>
        <motion.button 
          whileTap={{ scale: 0.97 }}
          className="w-full py-2.5 bg-[#2ecc71] text-[#0c0c0d] rounded-lg text-[12px] font-extrabold tracking-wide cursor-pointer"
        >
          Lihat Riwayat Pencairan
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
