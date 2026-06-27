"use client";

import { Canvas } from "@react-three/fiber";
import { Scene3D } from "./Scene3D";
import { Suspense } from "react";

export default function CanvasBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </Canvas>
    </div>
  );
}
