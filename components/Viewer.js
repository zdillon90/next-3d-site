import { useState, useEffect, Suspense } from 'react';
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, OrbitControls, Text } from '@react-three/drei'
import { LayerMaterial, Depth, Noise } from 'lamina'

import Gyroid from '../components/Gyroid'

export default function Viewer() {
  return (
    <Canvas dpr={[1, 2]} style={{ height: '100vh', width: '100%' }} camera={{ position: [0, 0, 10], fov: 22 }}>
      <Bg />
      <Suspense fallback={null}>
        {/* <Gyroid /> */}
        <Rig />
        <Environment preset="sunset" background />
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