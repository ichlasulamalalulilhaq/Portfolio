"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { CyberOcean } from "./CyberOcean";

export default function PageBackground() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Hanya tampilkan di halaman selain Home
  if (!mounted || pathname === "/") return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-br from-[#07070e] via-[#0f111a] to-[#141824]">
      {/* 3D WebGL Canvas for Cyber Ocean */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 5, 20], fov: 60 }}>
          <Suspense fallback={null}>
            <CyberOcean />
          </Suspense>
        </Canvas>
      </div>

      {/* Subtle grid overlay to exactly match Home page */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: `linear-gradient(rgba(91,76,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(91,76,212,0.5) 1px, transparent 1px)`,
        backgroundSize: '64px 64px'
      }} />
    </div>
  );
}
