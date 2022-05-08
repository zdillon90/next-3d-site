import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import dynamic from 'next/dynamic'

const Angle = dynamic(
  () => import('./Angle'),
  { ssr: false }
)

export default function PortViewer() {
  return (
    <Canvas dpr={[1, 2]} style={{ height: '100vh', width: '100vw' }}>
      {/* <Bg /> */}
      <color attach="background" args={['#848587']} />
      {/* <Image src='/public/photo.jpeg' alt='space' height='100%' width='100%'/> */}
      <PerspectiveCamera
          name="Camera"
          makeDefault={true}
          far={100000}
          near={5}
          fov={45}
          position={[200, 50, 300]}
          rotation={[-1.95, 1.28, 1.96]}
          />
      <Suspense fallback={null}>
        <Angle />
        {/* <Background /> */}
        {/* <MyRotatingBox /> */}
        <OrbitControls />
        {/* <Environment preset="sunset" background /> */}
      </Suspense>
    </Canvas>
  )
}
