"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ToastProps {
  message: string;
  isVisible: boolean;
}

export function Toast({ message, isVisible }: ToastProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 14, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 14, x: "-50%" }}
          transition={{ duration: 0.28 }}
          className="absolute bottom-[100px] left-1/2 bg-[#242428] border border-[rgba(255,255,255,0.16)] text-[#f0f0f2] text-[12px] font-semibold px-5 py-2.5 rounded-[20px] whitespace-nowrap z-[300] pointer-events-none shadow-lg"
          style={{ fontFamily: "Barlow, sans-serif", letterSpacing: "0.02em" }}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
