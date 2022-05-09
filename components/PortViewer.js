import * as THREE from 'three'
import { Canvas } from "@react-three/fiber";
import { useLoader, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, PerspectiveCamera, PresentationControls, ContactShadows } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense, useRef } from "react";
import dynamic from 'next/dynamic'

const Angle = dynamic(
  () => import('./Angle'),
  { ssr: false }
)

export default function PortViewer() {
  return (
    <Canvas dpr={[1, 2]} style={{ height: '100vh', width: '100vw' }}>
      <color attach="background" args={['#4b4d52']} />  
      <ambientLight intensity={0.6} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
        <Angle rotation={[0, 0, 0]} position={[0, 0, 0]} scale={0.05} />
      </PresentationControls>
    </Canvas>
  )
}
