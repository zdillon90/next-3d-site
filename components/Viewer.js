import { useState, useEffect, Suspense, useRef } from 'react';
import * as THREE from 'three'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { Environment, OrbitControls, Text, PerspectiveCamera, useTexture} from '@react-three/drei'
import { LayerMaterial, Depth, Noise, Texture } from 'lamina'
import dynamic from 'next/dynamic'
import Image from 'next/image';
// import Spline from '@splinetool/react-spline';

const StarField = dynamic(
  () => import('./StarField'),
  { ssr: false }
)

const BlackHole = dynamic(
  () => import('./BlackHole'),
  { ssr: false }
)

export default function Viewer() {
  return (
    <Canvas dpr={[1, 2]} style={{ height: '100vh', width: '100%' }}>
      <color attach="background" args={['#4b4d52']} />
      <PerspectiveCamera
          name="Camera"
          makeDefault={true}
          far={100000}
          near={5}
          fov={45}
          position={[958.9, 264, -103.99]}
          rotation={[-1.95, 1.28, 1.96]}
          />
      <Suspense fallback={null}>
        <MyRotatingBox />
      </Suspense>
    </Canvas>
  )
}

function MyRotatingBox() {
  const myMesh = useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    const b = a * 0.03;
    // myMesh.current.rotation.x = b;
    myMesh.current.rotation.y = b;
  });

  return (
    <mesh ref={myMesh}>
      <StarField />
      <BlackHole />
    </mesh>
  );
}