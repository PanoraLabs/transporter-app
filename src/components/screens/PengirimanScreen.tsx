"use client";

import { motion } from "framer-motion";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ActionButton } from "@/components/ui/ActionButton";

interface PengirimanScreenProps {
  isActive: boolean;
}

const deliveries = [
  {
    id: "ORD-2025-0142",
    pickup: "Sleman, Yogyakarta",
    dropoff: "Cibitung, Bekasi",
    commodity: "cabai merah",
    weight: "6.8 ton",
    price: "Rp 2.450.000",
    eta: "2j 14m",
    status: "dalam perjalanan" as const,
    temp: "4.2°C",
    distance: "542 km",
  },
  {
    id: "ORD-2025-0139",
    pickup: "Yogyakarta",
    dropoff: "Jakarta",
    commodity: "padi",
    weight: "5.2 ton",
    price: "Rp 780.000",
    eta: "selesai",
    status: "selesai" as const,
    rating: "5.0",
    completedAt: "12 Jul",
  },
  {
    id: "ORD-2025-0135",
    pickup: "Magelang",
    dropoff: "Jakarta",
    commodity: "cabai",
    weight: "2.1 ton",
    price: "Rp 520.000",
    eta: "klaim diproses",
    status: "klaim" as const,
    issue: "suhu melebihi threshold",
  },
];

export function PengirimanScreen({ isActive }: PengirimanScreenProps) {
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
      <div className="px-5 pt-5 pb-3">
        <div className="text-[12px] text-[#6B7280] mb-0.5" style={{ fontFamily: "Inter, sans-serif" }}>
          daftar pengiriman
        </div>
        <div className="text-[24px] font-bold text-[#111827]" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>
          pengiriman aktif
        </div>
      </div>

      {/* Active Delivery */}
      <div className="px-5 mb-4">
        {deliveries.filter(d => d.status === "dalam perjalanan").map((delivery) => (
          <motion.div
            key={delivery.id}
            whileTap={{ scale: 0.99 }}
            className="bg-white border border-[rgba(255,107,0,0.3)] rounded-xl p-4 shadow-[0_1px_3px_rgba(0,0,0,0.05)] cursor-pointer"
          >
            <div className="flex items-center justify-between mb-3">
              <StatusBadge status="dalam perjalanan" />
              <span className="text-[13px] font-medium text-[#6B7280]">{delivery.eta}</span>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1">
                <div className="text-[16px] font-bold text-[#111827]">{delivery.pickup}</div>
                <div className="text-[12px] text-[#6B7280]">pickup</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-px bg-[#FF6B00]" />
                <span className="text-[18px]">🚛</span>
                <div className="w-6 h-px bg-[#FF6B00]" />
              </div>
              <div className="flex-1 text-right">
                <div className="text-[16px] font-bold text-[#111827]">{delivery.dropoff}</div>
                <div className="text-[12px] text-[#6B7280]">tujuan</div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="bg-[#F9FAFB] rounded-lg p-2.5 text-center">
                <div className="text-[11px] text-[#6B7280] mb-0.5">muatan</div>
                <div className="text-[14px] font-bold text-[#111827]">{delivery.weight}</div>
              </div>
              <div className="bg-[#F9FAFB] rounded-lg p-2.5 text-center">
                <div className="text-[11px] text-[#6B7280] mb-0.5">suhu</div>
                <div className="text-[14px] font-bold text-[#10B981]">{delivery.temp}</div>
              </div>
              <div className="bg-[#F9FAFB] rounded-lg p-2.5 text-center">
                <div className="text-[11px] text-[#6B7280] mb-0.5">jarak</div>
                <div className="text-[14px] font-bold text-[#111827]">{delivery.distance}</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-[12px] text-[#6B7280]">bayaran</div>
                <div className="text-[18px] font-bold text-[#FF6B00]" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>
                  {delivery.price}
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <ActionButton variant="secondary" size="sm" className="flex-1">
                navigasi
              </ActionButton>
              <ActionButton size="sm" className="flex-1">
                update status
              </ActionButton>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Completed Deliveries */}
      <div className="px-5 mb-2">
        <div className="text-[12px] text-[#6B7280]" style={{ fontFamily: "Inter, sans-serif" }}>
          riwayat pengiriman
        </div>
      </div>

      <div className="px-5 flex flex-col gap-3">
        {deliveries.filter(d => d.status !== "dalam perjalanan").map((delivery) => (
          <motion.div
            key={delivery.id}
            whileTap={{ scale: 0.99 }}
            className="bg-white border border-[rgba(17,24,39,0.08)] rounded-xl p-4 shadow-[0_1px_3px_rgba(0,0,0,0.05)] cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] text-[#6B7280]" style={{ fontFamily: "Inter, sans-serif" }}>
                {delivery.id}
              </span>
              <StatusBadge status={delivery.status} />
            </div>
            
            <div className="flex items-center gap-2 mb-2">
              <div className="flex-1">
                <div className="text-[15px] font-bold text-[#111827]">{delivery.pickup}</div>
              </div>
              <span className="text-[14px] text-[#6B7280]">→</span>
              <div className="flex-1">
                <div className="text-[15px] font-bold text-[#111827]">{delivery.dropoff}</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-[13px] text-[#6B7280]">
                {delivery.commodity} · {delivery.weight}
              </div>
              <div className="text-[16px] font-bold text-[#FF6B00]" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>
                {delivery.price}
              </div>
            </div>
            
            {delivery.issue && (
              <div className="mt-2 px-3 py-2 bg-[rgba(239,68,68,0.08)] border border-[rgba(239,68,68,0.2)] rounded-lg">
                <div className="text-[12px] text-[#EF4444]">⚠ {delivery.issue}</div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
