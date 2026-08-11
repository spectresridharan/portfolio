import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Edges, Float } from '@react-three/drei';
import * as THREE from 'three';

// Floating code-line particles rising upward
const CodeParticles = ({ count = 120 }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const data = useMemo(() => {
    const items = [];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 3.5 + Math.random() * 5;
      items.push({
        x: Math.cos(angle) * radius,
        y: (Math.random() - 0.5) * 16,
        z: Math.sin(angle) * radius,
        speed: 0.4 + Math.random() * 0.8,
        len: 0.1 + Math.random() * 0.5,
      });
    }
    return items;
  }, [count]);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    const dummy = new THREE.Object3D();
    data.forEach((p, i) => {
      p.y += p.speed * delta;
      if (p.y > 8) p.y = -8;
      dummy.position.set(p.x, p.y, p.z);
      dummy.scale.set(0.02, p.len, 0.02);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="#00ff66" transparent opacity={0.35} />
    </instancedMesh>
  );
};

// Orbit ring of small cyan cubes simulating data packets
const DataPackets = ({ count = 60, radius = 5.5, speed = 0.4 }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const offsets = useMemo(
    () => Array.from({ length: count }, (_, i) => (i / count) * Math.PI * 2),
    [count]
  );

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.elapsedTime * speed;
    const dummy = new THREE.Object3D();
    offsets.forEach((offset, i) => {
      const angle = offset + t;
      dummy.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle * 0.5) * 0.5,
        Math.sin(angle) * radius
      );
      dummy.scale.setScalar(0.07);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="#00f0ff" transparent opacity={0.7} />
    </instancedMesh>
  );
};

// STM32-style IC chip geometry
const STM32Chip = () => {
  const chipRef = useRef<THREE.Group>(null);

  // Pin positions for a 64-pin LQFP-style package (16 per side)
  const { pins, pinStep } = useMemo(() => {
    const result: [number, number, number][] = [];
    const n = 16;
    const halfChip = 1.6;
    const pinStep = 3.2 / n;
    for (let i = 0; i < n; i++) {
      const offset = -halfChip + pinStep * 0.5 + i * pinStep;
      result.push([offset, 0, -halfChip - 0.15]);
      result.push([offset, 0, halfChip + 0.15]);
      result.push([-halfChip - 0.15, 0, offset]);
      result.push([halfChip + 0.15, 0, offset]);
    }
    return { pins: result, pinStep };
  }, []);

  return (
    <group ref={chipRef}>
      {/* Main IC body */}
      <mesh>
        <boxGeometry args={[3.2, 0.18, 3.2]} />
        <meshStandardMaterial color="#0d0d10" metalness={0.9} roughness={0.3} />
        <Edges scale={1.01} color="#2a2a3a" />
      </mesh>

      {/* Top face markings - inner die shadow */}
      <mesh position={[0, 0.095, 0]}>
        <boxGeometry args={[2.4, 0.01, 2.4]} />
        <meshStandardMaterial color="#111118" metalness={0.5} roughness={0.8} />
      </mesh>

      {/* Centre die / core area */}
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[1.2, 0.01, 1.2]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
        <Edges color="#00f0ff" scale={1.01} />
      </mesh>

      {/* Pin-1 marker dot */}
      <mesh position={[-1.4, 0.1, -1.4]}>
        <cylinderGeometry args={[0.08, 0.08, 0.02, 16]} />
        <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={2} />
      </mesh>

      {/* Pins */}
      {pins.map((pos, i) => {
        const isTopBottom = i < 32;
        return (
          <mesh key={i} position={pos}>
              <boxGeometry
              args={isTopBottom ? [pinStep * 0.55, 0.06, 0.3] : [0.3, 0.06, pinStep * 0.55]}
            />
            <meshStandardMaterial color="#b8b8c0" metalness={1} roughness={0.15} />
          </mesh>
        );
      })}

      {/* Glowing circuit trace lines on top */}
      {[-0.5, 0, 0.5].map((x, i) => (
        <mesh key={`htrace-${i}`} position={[x, 0.1, 0]}>
          <boxGeometry args={[0.02, 0.005, 1.0]} />
          <meshBasicMaterial color="#00f0ff" transparent opacity={0.4} />
        </mesh>
      ))}
      {[-0.5, 0, 0.5].map((z, i) => (
        <mesh key={`vtrace-${i}`} position={[0, 0.1, z]}>
          <boxGeometry args={[1.0, 0.005, 0.02]} />
          <meshBasicMaterial color="#ffb800" transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  );
};

// Main export
export default function MCUCore() {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.18;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.12;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.06;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * 0.04;
      ring2Ref.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
    }
  });

  return (
    <group>
      {/* The chip */}
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
        <group ref={groupRef}>
          <STM32Chip />
        </group>
      </Float>

      {/* Orbit rings */}
      <mesh ref={ring1Ref} rotation-x={Math.PI / 2}>
        <torusGeometry args={[5, 0.012, 16, 120]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.2} />
      </mesh>

      <mesh ref={ring2Ref} rotation-x={Math.PI / 2.2} rotation-y={0.6}>
        <torusGeometry args={[7, 0.008, 16, 120]} />
        <meshBasicMaterial color="#ffb800" transparent opacity={0.12} />
      </mesh>

      {/* Data packets orbiting */}
      <DataPackets count={50} radius={5} speed={0.3} />
      <DataPackets count={30} radius={3.5} speed={-0.25} />

      {/* Code-rain particles */}
      <CodeParticles count={140} />

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[6, 6, 6]} intensity={3} color="#00f0ff" />
      <pointLight position={[-6, -4, -6]} intensity={2} color="#ffb800" />
      <pointLight position={[0, 8, 0]} intensity={1.5} color="#ffffff" />
    </group>
  );
}
