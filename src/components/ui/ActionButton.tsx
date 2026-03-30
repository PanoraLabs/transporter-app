"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ActionButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: ReactNode;
}

export function ActionButton({
  children,
  variant = "primary",
  size = "lg",
  onClick,
  disabled = false,
  className = "",
  icon,
}: ActionButtonProps) {
  const variants = {
    primary: {
      bg: "#FF6B00",
      color: "#FFFFFF",
      border: "none",
    },
    secondary: {
      bg: "#F3F4F6",
      color: "#111827",
      border: "none",
    },
    outline: {
      bg: "transparent",
      color: "#FF6B00",
      border: "1px solid rgba(255, 107, 0, 0.4)",
    },
    danger: {
      bg: "#111827",
      color: "#FFFFFF",
      border: "none",
    },
  };

  const sizes = {
    sm: "py-2 text-[13px]",
    md: "py-3 text-[14px]",
    lg: "py-4 text-[16px]",
  };

  const config = variants[variant];

  return (
    <motion.button
      whileTap={disabled ? {} : { scale: 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={`w-full flex items-center justify-center gap-2 rounded-lg font-semibold tracking-tight ${sizes[size]} ${className}`}
      style={{
        background: config.bg,
        color: config.color,
        border: config.border,
        fontFamily: "Inter, sans-serif",
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
        minHeight: size === "lg" ? 56 : size === "md" ? 48 : 40,
      }}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </motion.button>
  );
}
