"use client";

import { motion } from "framer-motion";
import { StatusBadge } from "@/components/ui/StatusBadge";

interface RiwayatScreenProps {
  isActive: boolean;
}

const trips = [
  {
    id: "TRIP-2025-0142",
    date: "14 Jul",
    from: "Sleman",
    to: "Cibitung",
    commodity: "cabai",
    weight: "6.8 ton",
    duration: "2j 14m",
    earnings: "Berjalan",
    status: "dalam perjalanan" as const,
    temp: "4.2°C OK",
    gps: "GPS lock",
  },
  {
    id: "TRIP-2025-0139",
    date: "12 Jul",
    from: "Yogyakarta",
    to: "Jakarta",
    commodity: "padi",
    weight: "5.2 ton",
    duration: "7j 22m",
    earnings: "Rp 780rb",
    rating: "5.0",
    status: "selesai" as const,
    temp: "3.9°C sempurna",
    backload: "+Rp 450rb",
  },
  {
    id: "TRIP-2025-0135",
    date: "10 Jul",
    from: "Magelang",
    to: "Jakarta",
    commodity: "cabai",
    weight: "2.1 ton",
    duration: "insiden suhu",
    earnings: "Rp 520rb",
    claim: "Klaim Rp 8.5jt",
    status: "klaim" as const,
    temp: "⚠ suhu 12.4°C 18mnt",
  },
  {
    id: "TRIP-2025-0131",
    date: "8 Jul",
    from: "Sleman",
    to: "Bandung",
    commodity: "jagung",
    weight: "8.0 ton",
    duration: "6j 45m",
    earnings: "Rp 960rb",
    rating: "5.0",
    status: "selesai" as const,
    temp: "stabil 22°C",
    backload: "backload OK",
  },
];

export function RiwayatScreen({ isActive }: RiwayatScreenProps) {
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
      <div className="px-5 pt-5 pb-3 flex justify-between items-end">
        <div>
          <div className="text-[12px] text-[#6B7280] mb-0.5" style={{ fontFamily: "Inter, sans-serif" }}>
            14 trip bulan ini
          </div>
          <div className="text-[24px] font-bold text-[#111827]" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>
            riwayat trip
          </div>
        </div>
        <motion.button 
          whileTap={{ scale: 0.97 }}
          className="px-3.5 py-2 bg-[rgba(255,107,0,0.08)] border border-[rgba(255,107,0,0.2)] rounded-lg text-[12px] font-medium text-[#FF6B00] cursor-pointer"
        >
          export
        </motion.button>
      </div>

      {/* Summary */}
      <div className="mx-5 mb-4 grid grid-cols-3 bg-white border border-[rgba(17,24,39,0.08)] rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
        <div className="py-4 px-2 text-center border-r border-[rgba(17,24,39,0.06)]">
          <div className="text-[20px] font-bold text-[#FF6B00] leading-none" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>14</div>
          <div className="text-[11px] text-[#6B7280] mt-1">trip</div>
        </div>
        <div className="py-4 px-2 text-center border-r border-[rgba(17,24,39,0.06)]">
          <div className="text-[18px] font-bold text-[#10B981] leading-none" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>Rp 8.4jt</div>
          <div className="text-[11px] text-[#6B7280] mt-1">total</div>
        </div>
        <div className="py-4 px-2 text-center">
          <div className="text-[20px] font-bold text-[#111827] leading-none" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>4.9★</div>
          <div className="text-[11px] text-[#6B7280] mt-1">rating</div>
        </div>
      </div>

      {/* Trip List */}
      <div className="px-5 flex flex-col gap-3">
        {trips.map((trip) => (
          <motion.div
            key={trip.id}
            whileTap={{ scale: 0.99 }}
            className="bg-white border border-[rgba(17,24,39,0.08)] rounded-xl overflow-hidden cursor-pointer shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
          >
            <div className="px-4 py-3 border-b border-[rgba(17,24,39,0.06)] flex justify-between items-center">
              <div className="text-[11px] text-[#6B7280]" style={{ fontFamily: "Inter, sans-serif" }}>
                {trip.id} · {trip.date}
              </div>
              <StatusBadge status={trip.status} />
            </div>
            
            <div className="px-4 py-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex-1">
                  <div className="text-[16px] font-bold text-[#111827]" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>
                    {trip.from}
                  </div>
                </div>
                <div className="flex items-center px-1.5">
                  <div className="w-4 h-px bg-[#6B7280]" />
                  <span className="text-[14px] mx-1 text-[#6B7280]">→</span>
                  <div className="w-4 h-px bg-[#6B7280]" />
                </div>
                <div className="flex-1">
                  <div className="text-[16px] font-bold text-[#111827]" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>
                    {trip.to}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <div className="text-[13px] text-[#6B7280]">
                  {trip.commodity} · {trip.weight}
                </div>
                <div className="text-right">
                  <div className="text-[18px] font-bold text-[#FF6B00]" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>
                    {trip.earnings}
                  </div>
                  {trip.rating && <div className="text-[12px] text-[#111827]">★ {trip.rating}</div>}
                  {trip.claim && <div className="text-[12px] text-[#FF6B00]">{trip.claim}</div>}
                </div>
              </div>
            </div>
            
            <div className="px-4 py-2.5 bg-[#F9FAFB] flex gap-2 overflow-x-auto scrollbar-hide">
              <div className="shrink-0 px-2.5 py-1 rounded-full text-[10px] font-medium bg-white border border-[rgba(17,24,39,0.08)] text-[#6B7280]">
                {trip.temp}
              </div>
              {trip.gps && (
                <div className="shrink-0 px-2.5 py-1 rounded-full text-[10px] font-medium bg-white border border-[rgba(17,24,39,0.08)] text-[#10B981]">
                  {trip.gps}
                </div>
              )}
              {trip.backload && (
                <div className="shrink-0 px-2.5 py-1 rounded-full text-[10px] font-medium bg-white border border-[rgba(17,24,39,0.08)] text-[#111827]">
                  {trip.backload}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
