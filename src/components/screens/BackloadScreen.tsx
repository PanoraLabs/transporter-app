"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface BackloadScreenProps {
  isActive: boolean;
}

const backloadOffers = [
  { id: 1, from: "Cibitung", to: "Yogyakarta", volume: "5.5 Ton", commodity: "🥬 Sayur", price: "Rp 1.37jt", hot: true },
  { id: 2, from: "Cikarang", to: "Semarang", volume: "3.2 Ton", commodity: "🧅 Bumbu", price: "Rp 720rb", hot: false },
  { id: 3, from: "Bekasi", to: "Solo", volume: "7.0 Ton", commodity: "🌾 Beras", price: "Rp 1.75jt", hot: false },
];

export function BackloadScreen({ isActive }: BackloadScreenProps) {
  const [route] = useState("Cibitung → Sleman");
  const [capacity] = useState("8.0");

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
          // Optimasi Muatan Balik
        </div>
        <div className="text-[24px] font-bold" style={{ fontFamily: "Bitter, serif" }}>
          Backload<em className="italic text-[#f5c518]">Optimizer</em>
        </div>
      </div>

      <div className="mx-[22px] mb-[18px] bg-gradient-to-br from-[#12100a] via-[#1a1408] to-[#0c0c0d] border border-[rgba(245,197,24,0.3)] rounded-xl p-[22px] relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-[120px] h-[120px] rounded-full bg-[radial-gradient(circle,rgba(245,197,24,0.1),transparent_70%)]" />
        <div className="text-[9px] tracking-[0.22em] uppercase text-[#f5c518] mb-2" style={{ fontFamily: "Roboto Mono, monospace" }}>
          // Trip Aktif · Sleman → Cibitung
        </div>
        <div className="text-[22px] font-bold mb-1" style={{ fontFamily: "Bitter, serif" }}>
          Ruang Muatan<br />Balik Tersedia
        </div>
        <div className="text-[12px] text-[#6e6e7a] mb-[18px]">Perjalanan kembali Cibitung → Sleman belum ada muatan</div>
        
        <div className="flex gap-4 mb-3">
          <div>
            <div className="text-[20px] font-bold text-[#f5c518]" style={{ fontFamily: "Bitter, serif" }}>8.0T</div>
            <div className="text-[10px] text-[#6e6e7a]">Kapasitas Balik</div>
          </div>
          <div>
            <div className="text-[20px] font-bold text-[#2ecc71]" style={{ fontFamily: "Bitter, serif" }}>≥30%</div>
            <div className="text-[10px] text-[#6e6e7a]">Diskon Tarif</div>
          </div>
          <div>
            <div className="text-[20px] font-bold text-[#ff6b2b]" style={{ fontFamily: "Bitter, serif" }}>4</div>
            <div className="text-[10px] text-[#6e6e7a]">Penawaran Masuk</div>
          </div>
        </div>
      </div>

      <div className="px-[22px] mb-4">
        <div className="text-[9px] tracking-[0.22em] uppercase text-[rgba(240,240,242,0.28)] mb-3" style={{ fontFamily: "Roboto Mono, monospace" }}>
          // Tawarkan Ruang Balik
        </div>
        <div className="bg-[#1c1c1f] border border-[rgba(255,255,255,0.08)] rounded-xl p-[18px]">
          <div className="text-[15px] font-bold text-[#f5c518] mb-3.5" style={{ fontFamily: "Bitter, serif" }}>
            📣 Tawarkan Ruang Balik
          </div>
          <div className="grid grid-cols-2 gap-2.5 mb-3">
            <div>
              <label className="text-[9px] tracking-[0.18em] uppercase text-[#6e6e7a] mb-1.5 block" style={{ fontFamily: "Roboto Mono, monospace" }}>Rute Balik</label>
              <select className="w-full px-3 py-2.5 bg-[#242428] border border-[rgba(255,255,255,0.08)] rounded-lg text-[13px] text-[#f0f0f2] outline-none focus:border-[rgba(245,197,24,0.5)] appearance-none">
                <option>Cibitung → Sleman</option>
                <option>Cibitung → Bandung</option>
                <option>Cibitung → Purwokerto</option>
              </select>
            </div>
            <div>
              <label className="text-[9px] tracking-[0.18em] uppercase text-[#6e6e7a] mb-1.5 block" style={{ fontFamily: "Roboto Mono, monospace" }}>Kapasitas (Ton)</label>
              <input type="number" defaultValue="8.0" className="w-full px-3 py-2.5 bg-[#242428] border border-[rgba(255,255,255,0.08)] rounded-lg text-[13px] text-[#f0f0f2] outline-none focus:border-[rgba(245,197,24,0.5)]" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2.5 mb-3">
            <div>
              <label className="text-[9px] tracking-[0.18em] uppercase text-[#6e6e7a] mb-1.5 block" style={{ fontFamily: "Roboto Mono, monospace" }}>Harga/Ton (Rp)</label>
              <input type="number" placeholder="250.000" className="w-full px-3 py-2.5 bg-[#242428] border border-[rgba(255,255,255,0.08)] rounded-lg text-[13px] text-[#f0f0f2] outline-none focus:border-[rgba(245,197,24,0.5)]" />
            </div>
            <div>
              <label className="text-[9px] tracking-[0.18em] uppercase text-[#6e6e7a] mb-1.5 block" style={{ fontFamily: "Roboto Mono, monospace" }}>Komoditas OK</label>
              <select className="w-full px-3 py-2.5 bg-[#242428] border border-[rgba(255,255,255,0.08)] rounded-lg text-[13px] text-[#f0f0f2] outline-none focus:border-[rgba(245,197,24,0.5)] appearance-none">
                <option>Semua</option>
                <option>Sayuran</option>
                <option>Buah</option>
                <option>Sembako</option>
              </select>
            </div>
          </div>
          <motion.button 
            whileTap={{ scale: 0.97 }}
            className="w-full py-3 bg-[#f5c518] text-[#0c0c0d] rounded-lg text-[13px] font-extrabold tracking-wide cursor-pointer"
          >
            Publikasikan ke PANORA →
          </motion.button>
        </div>
      </div>

      <div className="px-[22px]">
        <div className="text-[9px] tracking-[0.22em] uppercase text-[rgba(240,240,242,0.28)] mb-3" style={{ fontFamily: "Roboto Mono, monospace" }}>
          // 4 Permintaan Masuk dari Shipper
        </div>
        <div className="flex flex-col gap-2.5">
          {backloadOffers.map((offer) => (
            <motion.div
              key={offer.id}
              whileTap={{ scale: 0.98 }}
              className={`bg-[#1c1c1f] border rounded-xl p-[18px] cursor-pointer relative ${offer.hot ? "border-[rgba(255,107,43,0.3)]" : "border-[rgba(255,255,255,0.08)]"}`}
            >
              {offer.hot && (
                <div className="absolute top-3.5 right-3.5 bg-[#ff6b2b] text-white text-[9px] font-extrabold px-2 py-0.5 rounded-[10px]" style={{ fontFamily: "Roboto Mono, monospace" }}>
                  HOT 🔥
                </div>
              )}
              <div className="flex items-center gap-2 mb-3">
                <div className="text-[15px] font-bold" style={{ fontFamily: "Bitter, serif" }}>{offer.from}</div>
                <div className="flex-1 flex items-center px-1.5">
                  <div className="flex-1 h-px bg-gradient-to-r from-[rgba(245,197,24,0.4)] to-[rgba(245,197,24,0.15)]" />
                  <span className="text-[14px] mx-1">→</span>
                </div>
                <div className="text-[15px] font-bold" style={{ fontFamily: "Bitter, serif" }}>{offer.to}</div>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-3.5">
                <div>
                  <div className="text-[9px] text-[rgba(240,240,242,0.28)] tracking-wide uppercase" style={{ fontFamily: "Roboto Mono, monospace" }}>Volume</div>
                  <div className="text-[14px] font-bold text-[#2ecc71]" style={{ fontFamily: "Bitter, serif" }}>{offer.volume}</div>
                </div>
                <div>
                  <div className="text-[9px] text-[rgba(240,240,242,0.28)] tracking-wide uppercase" style={{ fontFamily: "Roboto Mono, monospace" }}>Komoditas</div>
                  <div className="text-[14px] font-bold">{offer.commodity}</div>
                </div>
                <div>
                  <div className="text-[9px] text-[rgba(240,240,242,0.28)] tracking-wide uppercase" style={{ fontFamily: "Roboto Mono, monospace" }}>Harga Tawar</div>
                  <div className="text-[14px] font-bold text-[#f5c518]" style={{ fontFamily: "Bitter, serif" }}>{offer.price}</div>
                </div>
              </div>
              <motion.button 
                whileTap={{ scale: 0.98 }}
                className="w-full py-2.5 bg-gradient-to-r from-[rgba(245,197,24,0.15)] to-[rgba(245,197,24,0.08)] border border-[rgba(245,197,24,0.35)] rounded-lg text-[12px] font-extrabold text-[#f5c518] tracking-wide cursor-pointer"
              >
                Terima Penawaran → {offer.price}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
