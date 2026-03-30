"use client";

interface MicroGridProps {
  className?: string;
}

export function MicroGrid({ className = "" }: MicroGridProps) {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(17, 24, 39, 0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(17, 24, 39, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: '24px 24px',
        backgroundColor: '#F9FAFB',
      }}
    />
  );
}
