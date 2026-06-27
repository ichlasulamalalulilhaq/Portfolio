"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export function Scene3D() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse, viewport } = useThree();

  // Generate random points for the network
  const particleCount = 200;
  
  const { positions, lines } = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const positions = new Float32Array(particleCount * 3);
    
    // Generate random points in a sphere
    for (let i = 0; i < particleCount; i++) {
      const radius = 4 + Math.random() * 4;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      points.push(new THREE.Vector3(x, y, z));
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    // Connect points that are close to each other
    const linePositions: number[] = [];
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dist = points[i].distanceTo(points[j]);
        if (dist < 1.8) {
          linePositions.push(
            points[i].x, points[i].y, points[i].z,
            points[j].x, points[j].y, points[j].z
          );
        }
      }
    }

    return { 
      positions, 
      lines: new Float32Array(linePositions) 
    };
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    // Slow continuous rotation
    groupRef.current.rotation.y += delta * 0.05;
    groupRef.current.rotation.x += delta * 0.02;

    // Mouse parallax effect (subtle movement based on cursor)
    const targetX = (mouse.x * viewport.width) / 20;
    const targetY = (mouse.y * viewport.height) / 20;

    groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.05;
    groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.05;
  });

  return (
    <group ref={groupRef}>
      {/* Particles (The Dots) */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#2c8e8e"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>

      {/* Network Connections (The Lines) */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={lines.length / 3}
            args={[lines, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#5b4cd4"
          transparent
          opacity={0.15}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}
