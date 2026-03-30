"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ActionButton } from "@/components/ui/ActionButton";

interface BackloadScreenProps {
  isActive: boolean;
}

const backloadOffers = [
  { id: 1, from: "Cibitung", to: "Yogyakarta", volume: "5.5 ton", commodity: "sayur", price: "Rp 1.37jt", hot: true },
  { id: 2, from: "Cikarang", to: "Semarang", volume: "3.2 ton", commodity: "bumbu", price: "Rp 720rb", hot: false },
  { id: 3, from: "Bekasi", to: "Solo", volume: "7.0 ton", commodity: "beras", price: "Rp 1.75jt", hot: false },
];

export function BackloadScreen({ isActive }: BackloadScreenProps) {
  const [route] = useState("Cibitung → Sleman");
  const [capacity] = useState("8.0");

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
          optimasi muatan balik
        </div>
        <div className="text-[24px] font-bold text-[#111827]" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>
          backload
        </div>
      </div>

      {/* Current Trip Status */}
      <div className="mx-5 mb-4 bg-[rgba(255,107,0,0.06)] border border-[rgba(255,107,0,0.15)] rounded-xl p-4">
        <div className="text-[11px] font-medium text-[#FF6B00] mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
          trip aktif · sleman → cibitung
        </div>
        <div className="text-[16px] font-bold text-[#111827] mb-1" style={{ fontFamily: "Inter, sans-serif" }}>
          ruang muatan balik tersedia
        </div>
        <div className="text-[13px] text-[#6B7280] mb-4">
          perjalanan kembali cibitung → sleman belum ada muatan
        </div>
        
        <div className="flex gap-6">
          <div>
            <div className="text-[20px] font-bold text-[#FF6B00]" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>8.0T</div>
            <div className="text-[11px] text-[#6B7280]">kapasitas balik</div>
          </div>
          <div>
            <div className="text-[20px] font-bold text-[#10B981]" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>≥30%</div>
            <div className="text-[11px] text-[#6B7280]">diskon tarif</div>
          </div>
          <div>
            <div className="text-[20px] font-bold text-[#111827]" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>4</div>
            <div className="text-[11px] text-[#6B7280]">penawaran masuk</div>
          </div>
        </div>
      </div>

      {/* Offer Form */}
      <div className="px-5 mb-2">
        <div className="text-[12px] text-[#6B7280]" style={{ fontFamily: "Inter, sans-serif" }}>
          tawarkan ruang balik
        </div>
      </div>
      
      <div className="mx-5 mb-4 bg-white border border-[rgba(17,24,39,0.08)] rounded-xl p-4 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <label className="text-[11px] text-[#6B7280] mb-1.5 block" style={{ fontFamily: "Inter, sans-serif" }}>rute balik</label>
            <select className="w-full px-3 py-2.5 bg-[#F9FAFB] border border-[rgba(17,24,39,0.08)] rounded-lg text-[13px] text-[#111827] outline-none focus:border-[rgba(255,107,0,0.4)] appearance-none">
              <option>cibitung → sleman</option>
              <option>cibitung → bandung</option>
              <option>cibitung → purwokerto</option>
            </select>
          </div>
          <div>
            <label className="text-[11px] text-[#6B7280] mb-1.5 block" style={{ fontFamily: "Inter, sans-serif" }}>kapasitas (ton)</label>
            <input 
              type="number" 
              defaultValue="8.0" 
              className="w-full px-3 py-2.5 bg-[#F9FAFB] border border-[rgba(17,24,39,0.08)] rounded-lg text-[13px] text-[#111827] outline-none focus:border-[rgba(255,107,0,0.4)]" 
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <label className="text-[11px] text-[#6B7280] mb-1.5 block" style={{ fontFamily: "Inter, sans-serif" }}>harga/ton (Rp)</label>
            <input 
              type="number" 
              placeholder="250.000" 
              className="w-full px-3 py-2.5 bg-[#F9FAFB] border border-[rgba(17,24,39,0.08)] rounded-lg text-[13px] text-[#111827] outline-none focus:border-[rgba(255,107,0,0.4)]" 
            />
          </div>
          <div>
            <label className="text-[11px] text-[#6B7280] mb-1.5 block" style={{ fontFamily: "Inter, sans-serif" }}>komoditas diterima</label>
            <select className="w-full px-3 py-2.5 bg-[#F9FAFB] border border-[rgba(17,24,39,0.08)] rounded-lg text-[13px] text-[#111827] outline-none focus:border-[rgba(255,107,0,0.4)] appearance-none">
              <option>semua</option>
              <option>sayuran</option>
              <option>buah</option>
              <option>sembako</option>
            </select>
          </div>
        </div>
        
        <ActionButton>
          publikasikan
        </ActionButton>
      </div>

      {/* Incoming Offers */}
      <div className="px-5 mb-2">
        <div className="text-[12px] text-[#6B7280]" style={{ fontFamily: "Inter, sans-serif" }}>
          4 permintaan masuk
        </div>
      </div>
      
      <div className="px-5 flex flex-col gap-3">
        {backloadOffers.map((offer) => (
          <motion.div
            key={offer.id}
            whileTap={{ scale: 0.99 }}
            className={`bg-white border rounded-xl p-4 cursor-pointer shadow-[0_1px_3px_rgba(0,0,0,0.05)] ${
              offer.hot ? "border-[rgba(255,107,0,0.3)]" : "border-[rgba(17,24,39,0.08)]"
            }`}
          >
            {offer.hot && (
              <div className="absolute top-3 right-3 bg-[#FF6B00] text-white text-[9px] font-bold px-2 py-0.5 rounded-md" style={{ fontFamily: "Inter, sans-serif" }}>
                hot
              </div>
            )}
            
            <div className="flex items-center gap-2 mb-3">
              <div className="flex-1">
                <div className="text-[15px] font-bold text-[#111827]" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>{offer.from}</div>
              </div>
              <div className="flex items-center px-1.5">
                <div className="w-3 h-px bg-[#6B7280]" />
                <span className="text-[14px] mx-1 text-[#6B7280]">→</span>
                <div className="w-3 h-px bg-[#6B7280]" />
              </div>
              <div className="flex-1">
                <div className="text-[15px] font-bold text-[#111827]" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>{offer.to}</div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div>
                <div className="text-[10px] text-[#6B7280] tracking-wide" style={{ fontFamily: "Inter, sans-serif" }}>volume</div>
                <div className="text-[14px] font-bold text-[#111827]" style={{ fontFamily: "Inter, sans-serif" }}>{offer.volume}</div>
              </div>
              <div>
                <div className="text-[10px] text-[#6B7280] tracking-wide" style={{ fontFamily: "Inter, sans-serif" }}>komoditas</div>
                <div className="text-[14px] font-bold text-[#111827]">{offer.commodity}</div>
              </div>
              <div>
                <div className="text-[10px] text-[#6B7280] tracking-wide" style={{ fontFamily: "Inter, sans-serif" }}>harga</div>
                <div className="text-[14px] font-bold text-[#FF6B00]" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>{offer.price}</div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <ActionButton variant="secondary" size="sm" className="flex-1">
                tolak
              </ActionButton>
              <ActionButton size="sm" className="flex-1">
                terima
              </ActionButton>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
