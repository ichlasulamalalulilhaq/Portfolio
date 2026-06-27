"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export function CyberOcean() {
  const pointsRef = useRef<THREE.Points>(null);
  const { mouse } = useThree();

  // Grid configuration
  const gridX = 80;
  const gridZ = 80;
  const separation = 0.5;

  // Generate initial grid points
  const { positions, originalPositions } = useMemo(() => {
    const positions = new Float32Array(gridX * gridZ * 3);
    const originalPositions = new Float32Array(gridX * gridZ * 3);
    
    let i = 0;
    for (let ix = 0; ix < gridX; ix++) {
      for (let iz = 0; iz < gridZ; iz++) {
        // Center the grid
        const x = ix * separation - ((gridX * separation) / 2);
        const z = iz * separation - ((gridZ * separation) / 2);
        const y = 0; // Initial flat Y
        
        positions[i] = x;
        positions[i + 1] = y;
        positions[i + 2] = z;

        originalPositions[i] = x;
        originalPositions[i + 1] = y;
        originalPositions[i + 2] = z;
        
        i += 3;
      }
    }
    return { positions, originalPositions };
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    
    const time = state.clock.getElapsedTime();
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;

    let i = 0;
    for (let ix = 0; ix < gridX; ix++) {
      for (let iz = 0; iz < gridZ; iz++) {
        const x = originalPositions[i];
        const z = originalPositions[i + 2];
        
        // Complex wave math for organic ocean feel
        const waveX = Math.sin((ix * 0.3) + (time * 1.5)) * 0.5;
        const waveZ = Math.cos((iz * 0.2) + (time * 1.0)) * 0.5;
        const waveCombined = Math.sin((ix * 0.1) + (iz * 0.1) + time) * 1.5;
        
        // Apply Y movement based on waves
        positions[i + 1] = waveX + waveZ + waveCombined;
        
        i += 3;
      }
    }
    
    // Notify Three.js that positions have been updated
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Subtle group rotation and parallax based on mouse
    pointsRef.current.rotation.y = mouse.x * 0.1;
    pointsRef.current.rotation.x = mouse.y * 0.1;
  });

  return (
    <group position={[0, -5, -15]} rotation={[0.2, 0, 0]}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color="#2c8e8e" // Matching Home page teal color
          transparent
          opacity={0.8}
          sizeAttenuation={true}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}
