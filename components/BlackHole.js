/*
  Auto-generated by Spline
*/

import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/CcnZm93l535W2jop/scene.splinecode')
  return (
    <>
      <color attach="background" args={['#4b4d52']} />
      <group {...props} dispose={null}>
        <mesh
          name="Lathe"
          geometry={nodes.Lathe.geometry}
          material={materials['Lathe Material']}
          castShadow
          receiveShadow
          position={[0, -250, 0]}
          scale={[4, 8, 4]}
        />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" position={[0, 1, 0]} />
      </group>
    </>
  )
}