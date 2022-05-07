import { useState, useEffect, Suspense, useRef } from 'react';
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, OrbitControls, Text, PerspectiveCamera} from '@react-three/drei'
import { LayerMaterial, Depth, Noise } from 'lamina'
import dynamic from 'next/dynamic'

import Gyroid from '../components/Gyroid'
// import StarField from './StarField';

const StarField = dynamic(
  () => import('./StarField'),
  { ssr: false }
)

export default function Viewer() {
  return (
    <Canvas dpr={[1, 2]} style={{ height: '100vh', width: '100%' }}>
      <color attach="background" args={['#4b4d52']} />
      {/* <Bg /> */}
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
        {/* <Gyroid /> */}
        {/* <StarField /> */}
        <MyRotatingBox />
        {/* <Rig /> */}
        {/* <Environment preset="sunset" background /> */}
      </Suspense>
    </Canvas>
  )
}

function Bg() {
  return (
    <mesh scale={100}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth colorB="red" colorA="skyblue" alpha={1} mode="normal" near={130} far={200} origin={[100, 100, -100]} />
        {/* <Noise mapping="local" type="white" scale={1000} colorA="white" colorB="black" mode="subtract" alpha={0.2} /> */}
      </LayerMaterial>
    </mesh>
  )
}

function Rig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(v.set(state.mouse.x / 2, state.mouse.y / 2, 10), 0.05)
  })
}

function MyRotatingBox() {
  const myMesh = useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y = a;
  });

  return (
    <mesh ref={myMesh}>
      <StarField />
    </mesh>
  );
}