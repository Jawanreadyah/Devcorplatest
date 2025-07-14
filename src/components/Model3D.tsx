import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';

export function Model3D({ scrollProgress }: { scrollProgress: number }) {
  const mesh = useRef<THREE.Mesh>(null);
  const initialRotation = useRef(0);

  useFrame((state) => {
    if (!mesh.current) return;

    // Continuous rotation
    initialRotation.current += 0.001;
    mesh.current.rotation.y = initialRotation.current;

    // Scroll-based transformations
    const targetScale = 1 + scrollProgress * 1.5;
    const targetZ = -2 + scrollProgress * 4;
    
    gsap.to(mesh.current.scale, {
      x: targetScale,
      y: targetScale,
      z: targetScale,
      duration: 0.5,
      ease: "power2.out"
    });

    gsap.to(mesh.current.position, {
      z: targetZ,
      duration: 0.5,
      ease: "power2.out"
    });

    // Floating animation
    mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
  });

  return (
    <mesh ref={mesh} position={[0, 0, -2]} scale={1}>
      <torusGeometry args={[2, 0.5, 32, 100]} />
      <meshStandardMaterial 
        color="#000000"
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}