import { Canvas } from '@react-three/fiber';
import { Model3D } from './Model3D';
import { Environment, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

export function Scene3D({ scrollProgress }: { scrollProgress: number }) {
  return (
    <Canvas 
      className="fixed top-0 left-0 w-full h-full -z-10"
      camera={{ position: [0, 0, 8], fov: 75 }}
    >
      <color attach="background" args={['#E5E5E0']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Model3D scrollProgress={scrollProgress} />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
}