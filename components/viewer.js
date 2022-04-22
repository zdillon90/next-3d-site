import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import { LayerMaterial, Depth, Noise } from 'lamina'

export default function Viewer() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 0], fov: 22 }}>
      <Bg />
    </Canvas>
  )
}

function Bg() {
  return (
    <mesh scale={100}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth colorB="red" colorA="skyblue" alpha={1} mode="normal" near={130} far={200} origin={[100, 100, -100]} />
        <Noise mapping="local" type="white" scale={1000} colorA="white" colorB="black" mode="subtract" alpha={0.2} />
      </LayerMaterial>
    </mesh>
  )
}