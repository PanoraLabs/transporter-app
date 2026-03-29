"use client";

import { motion } from "framer-motion";

interface RiwayatScreenProps {
  isActive: boolean;
}

const trips = [
  {
    id: "TRIP-2025-0142",
    date: "14 Jul",
    from: "Sleman",
    to: "Cibitung",
    commodity: "Cabai 6.8T",
    duration: "ETA 2j 14m",
    earnings: "Berjalan",
    status: "active",
    statusColor: "#ff6b2b",
    chips: ["🌡 4.2°C OK", "📍 GPS Lock", "⏱ ETA 2j14m"],
  },
  {
    id: "TRIP-2025-0139",
    date: "12 Jul",
    from: "Yogyakarta",
    to: "Jakarta",
    commodity: "Padi 5.2T",
    duration: "7j 22m",
    earnings: "Rp 780rb",
    rating: "⭐ 5.0",
    status: "completed",
    statusColor: "#2ecc71",
    chips: ["🌡 3.9°C Sempurna", "🔄 +Backload Rp 450rb", "⛓ On-chain ✓"],
  },
  {
    id: "TRIP-2025-0135",
    date: "10 Jul",
    from: "Magelang",
    to: "Jakarta",
    commodity: "Cabai 2.1T",
    duration: "Insiden suhu",
    earnings: "Rp 520rb",
    claim: "Klaim Rp 8.5jt",
    status: "claim",
    statusColor: "#f5c518",
    chips: ["⚠ Suhu 12.4°C 18mnt", "🛡 Klaim diproses", "⛓ Bukti on-chain"],
  },
  {
    id: "TRIP-2025-0131",
    date: "8 Jul",
    from: "Sleman",
    to: "Bandung",
    commodity: "Jagung 8.0T",
    duration: "6j 45m",
    earnings: "Rp 960rb",
    rating: "⭐ 5.0",
    status: "completed",
    statusColor: "#2ecc71",
    chips: ["🌡 Stabil 22°C", "🔄 Backload ✓", "⛓ On-chain ✓"],
  },
];

export function RiwayatScreen({ isActive }: RiwayatScreenProps) {
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
          <div className="text-[9px] tracking-[0.22em] uppercase text-[rgba(240,240,242,0.28)] mb-1" style={{ fontFamily: "Roboto Mono, monospace" }}>
            // 14 Trip Bulan Ini
          </div>
          <div className="text-[24px] font-bold" style={{ fontFamily: "Bitter, serif" }}>
            Riwayat<em className="italic text-[#ff6b2b]">Trip</em>
          </div>
        </div>
        <motion.button 
          whileTap={{ scale: 0.97 }}
          className="px-3.5 py-2 bg-[rgba(255,107,43,0.12)] border border-[rgba(255,107,43,0.3)] rounded-lg text-[11px] font-bold text-[#ff6b2b] cursor-pointer"
        >
          Export PDF
        </motion.button>
      </div>

      <div className="mx-[22px] mb-4 grid grid-cols-3 bg-[#1c1c1f] border border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden">
        <div className="py-4 px-2 text-center border-r border-[rgba(255,255,255,0.08)]">
          <div className="text-[20px] font-bold text-[#ff8c5a] leading-none" style={{ fontFamily: "Bitter, serif" }}>14</div>
          <div className="text-[10px] text-[#6e6e7a] mt-[3px]">Trip</div>
        </div>
        <div className="py-4 px-2 text-center border-r border-[rgba(255,255,255,0.08)]">
          <div className="text-[20px] font-bold text-[#2ecc71] leading-none" style={{ fontFamily: "Bitter, serif" }}>Rp 8.45jt</div>
          <div className="text-[10px] text-[#6e6e7a] mt-[3px]">Total</div>
        </div>
        <div className="py-4 px-2 text-center">
          <div className="text-[20px] font-bold text-[#f5c518] leading-none" style={{ fontFamily: "Bitter, serif" }}>4.9★</div>
          <div className="text-[10px] text-[#6e6e7a] mt-[3px]">Rating</div>
        </div>
      </div>

      <div className="px-[22px] flex flex-col gap-2.5">
        {trips.map((trip) => (
          <motion.div
            key={trip.id}
            whileTap={{ scale: 0.98 }}
            className="bg-[#1c1c1f] border border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden cursor-pointer active:border-[rgba(255,255,255,0.16)]"
          >
            <div className="px-4 py-3 border-b border-[rgba(255,255,255,0.08)] flex justify-between items-center">
              <div className="text-[10px] text-[#6e6e7a] tracking-wide" style={{ fontFamily: "Roboto Mono, monospace" }}>
                {trip.id} · {trip.date}
              </div>
              <div
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[20px] text-[9px] font-bold tracking-wide uppercase"
                style={{
                  background: trip.status === "active" ? "rgba(255,107,43,0.12)" : trip.status === "claim" ? "rgba(245,197,24,0.12)" : "rgba(46,204,113,0.12)",
                  color: trip.statusColor,
                  border: `1px solid ${trip.status === "active" ? "rgba(255,107,43,0.3)" : trip.status === "claim" ? "rgba(245,197,24,0.3)" : "rgba(46,204,113,0.3)"}`,
                }}
              >
                {trip.status === "active" ? "Berjalan" : trip.status === "claim" ? "Klaim Aktif" : "Selesai"}
              </div>
            </div>
            <div className="px-4 py-3 flex items-center gap-2.5">
              <div className="flex-1">
                <div className="text-[15px] font-bold" style={{ fontFamily: "Bitter, serif" }}>
                  {trip.from} → {trip.to}
                </div>
                <div className="text-[11px] text-[#6e6e7a] mt-[2px]">
                  {trip.commodity} · {trip.duration}
                </div>
              </div>
              <div className="text-right">
                <div className="text-[18px] font-bold text-[#ff8c5a]" style={{ fontFamily: "Bitter, serif" }}>
                  {trip.earnings}
                </div>
                {trip.rating && <div className="text-[11px] text-[#f5c518] mt-[2px]">{trip.rating}</div>}
                {trip.claim && <div className="text-[11px] text-[#f5c518] mt-[2px]">{trip.claim}</div>}
              </div>
            </div>
            <div className="px-4 py-2.5 bg-[#242428] flex gap-2 overflow-x-auto scrollbar-hide">
              {trip.chips.map((chip, i) => (
                <div key={i} className="shrink-0 px-2.5 py-1 rounded-[20px] text-[10px] font-semibold bg-[#2c2c32] text-[#6e6e7a]">
                  {chip}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
