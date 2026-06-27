"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import CanvasBackground from "./CanvasBackground";

export default function HomeBackground() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || pathname !== "/") return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#07070e] via-[#0f111a] to-[#141824]" />

      {/* 3D WebGL Canvas */}
      <CanvasBackground />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: `linear-gradient(rgba(91,76,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(91,76,212,0.5) 1px, transparent 1px)`,
        backgroundSize: '64px 64px'
      }} />
    </div>
  );
}
