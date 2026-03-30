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
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 px-4 py-3 bg-[#111827] text-white rounded-lg text-[13px] font-medium shadow-lg z-[60] min-w-[200px] text-center"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
