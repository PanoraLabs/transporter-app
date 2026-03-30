"use client";

import { motion } from "framer-motion";

interface IoTLogScreenProps {
  isActive: boolean;
}

export function IoTLogScreen({ isActive }: IoTLogScreenProps) {
  if (!isActive) return null;

  const sensors = [
    { label: "suhu kargo", value: "4.2", unit: "°C", status: "normal", color: "#10B981" },
    { label: "kelembaban", value: "78", unit: "% RH", status: "normal", color: "#4A9EFF" },
    { label: "gps signal", value: "94", unit: "%", status: "lock", color: "#FF6B00" },
    { label: "getaran", value: "2.8", unit: "G", status: "warning", color: "#F59E0B" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute inset-0 overflow-y-auto overflow-x-hidden scrollbar-hide pb-[90px]"
    >
      {/* Header */}
      <div className="px-5 pt-5 pb-3 flex justify-between items-end">
        <div>
          <div className="text-[12px] text-[#6B7280] mb-0.5" style={{ fontFamily: "Inter, sans-serif" }}>
            monitoring realtime
          </div>
          <div className="text-[24px] font-bold text-[#111827]" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>
            sensor IoT
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[rgba(16,185,129,0.12)] border border-[rgba(16,185,129,0.3)] rounded-full">
          <motion.div 
            className="w-1.5 h-1.5 bg-[#10B981] rounded-full"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-[10px] font-semibold text-[#10B981] tracking-wide" style={{ fontFamily: "Inter, sans-serif" }}>
            live
          </span>
        </div>
      </div>

      {/* Map Visualization */}
      <div className="mx-5 mb-4 h-[180px] bg-white border border-[rgba(17,24,39,0.08)] rounded-xl relative overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
        <div className="absolute top-3 left-3 text-[10px] font-medium text-[#FF6B00] bg-[rgba(255,107,0,0.08)] px-2.5 py-1 rounded-md border border-[rgba(255,107,0,0.15)]" style={{ fontFamily: "Inter, sans-serif" }}>
          gps live · jawa tengah
        </div>
        
        {/* Simple Route Visualization */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 350 180" fill="none">
          {/* Route path - dashed line */}
          <path 
            d="M30 140 Q100 120 150 100 Q200 80 250 70 Q300 60 320 50" 
            stroke="rgba(17,24,39,0.1)" 
            strokeWidth="3" 
            strokeDasharray="6,4"
            fill="none"
          />
          {/* Active route - solid */}
          <path 
            d="M30 140 Q100 120 150 100 Q200 80 220 75" 
            stroke="#FF6B00" 
            strokeWidth="2.5" 
            strokeLinecap="round"
            fill="none"
          />
          {/* Current position */}
          <circle cx="220" cy="75" r="7" fill="rgba(255,107,0,0.2)" stroke="#FF6B00" strokeWidth="2" />
          <circle cx="220" cy="75" r="4" fill="#FF6B00" />
          {/* Start point */}
          <circle cx="30" cy="140" r="4" fill="#10B981" />
          {/* End point */}
          <circle cx="320" cy="50" r="4" fill="rgba(17,24,39,0.3)" />
        </svg>

        {/* Distance indicator */}
        <div className="absolute bottom-3 right-3 bg-white border border-[rgba(17,24,39,0.08)] rounded-lg px-3 py-1.5">
          <div className="text-[10px] text-[#6B7280]">sisa jarak</div>
          <div className="text-[14px] font-bold text-[#111827]">342 km</div>
        </div>
      </div>

      {/* Sensor Grid */}
      <div className="px-5 mb-2">
        <div className="text-[12px] text-[#6B7280]" style={{ fontFamily: "Inter, sans-serif" }}>
          data sensor
        </div>
      </div>
      
      <div className="px-5 mb-4">
        <div className="grid grid-cols-2 gap-3">
          {sensors.map((sensor) => (
            <div 
              key={sensor.label}
              className="bg-white border border-[rgba(17,24,39,0.08)] rounded-xl p-4 shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
            >
              <div className="text-[11px] text-[#6B7280] mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                {sensor.label}
              </div>
              <div className="flex items-baseline gap-1">
                <div 
                  className="text-[32px] font-bold leading-none" 
                  style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em", color: sensor.color }}
                >
                  {sensor.value}
                </div>
                <div className="text-[13px] text-[#6B7280]">{sensor.unit}</div>
              </div>
              <div className="mt-2 flex items-center gap-1">
                {sensor.status === "normal" && (
                  <span className="text-[11px] text-[#10B981] font-medium">✓ normal</span>
                )}
                {sensor.status === "warning" && (
                  <span className="text-[11px] text-[#F59E0B] font-medium">⚠ perhatian</span>
                )}
                {sensor.status === "lock" && (
                  <span className="text-[11px] text-[#FF6B00] font-medium">● lock 12 satelit</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Status Summary */}
      <div className="mx-5 mb-4 bg-[rgba(16,185,129,0.08)] border border-[rgba(16,185,129,0.2)] rounded-xl p-4">
        <div className="flex items-start gap-3">
          <div className="text-[20px] shrink-0">✓</div>
          <div>
            <div className="text-[14px] font-semibold text-[#10B981] mb-1">kondisi kargo optimal</div>
            <div className="text-[12px] text-[#6B7280] leading-relaxed">
              suhu terjaga 4.2°C · kontrak asuransi tidak terpicu · data tersinkron setiap 30 detik
            </div>
          </div>
        </div>
      </div>

      {/* Last Update */}
      <div className="px-5 text-center">
        <div className="text-[11px] text-[#6B7280]">
          update terakhir: 2 detik yang lalu
        </div>
      </div>
    </motion.div>
  );
}
