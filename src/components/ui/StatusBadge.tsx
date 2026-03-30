"use client";

import { motion } from "framer-motion";

interface StatusBadgeProps {
  status: "menunggu" | "diterima" | "dalam perjalanan" | "selesai" | "klaim";
  className?: string;
}

const statusConfig = {
  menunggu: {
    bg: "rgba(255, 107, 0, 0.12)",
    border: "rgba(255, 107, 0, 0.3)",
    color: "#FF6B00",
    label: "menunggu",
    dot: true,
  },
  diterima: {
    bg: "rgba(0, 209, 255, 0.12)",
    border: "rgba(0, 209, 255, 0.3)",
    color: "#00D1FF",
    label: "diterima",
    dot: false,
  },
  "dalam perjalanan": {
    bg: "rgba(74, 158, 255, 0.12)",
    border: "rgba(74, 158, 255, 0.3)",
    color: "#4A9EFF",
    label: "dalam perjalanan",
    dot: true,
  },
  selesai: {
    bg: "rgba(17, 24, 39, 0.08)",
    border: "rgba(17, 24, 39, 0.15)",
    color: "#111827",
    label: "selesai",
    dot: false,
  },
  klaim: {
    bg: "rgba(255, 107, 0, 0.12)",
    border: "rgba(255, 107, 0, 0.3)",
    color: "#FF6B00",
    label: "klaim aktif",
    dot: true,
  },
};

export function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <motion.div
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold ${className}`}
      style={{
        background: config.bg,
        border: `1px solid ${config.border}`,
        color: config.color,
        fontFamily: "Inter, sans-serif",
      }}
    >
      {config.dot && (
        <motion.span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: config.color }}
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}
      {config.label}
    </motion.div>
  );
}
