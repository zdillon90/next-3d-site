import useSpline from '@splinetool/r3f-spline'
import React, { useRef } from "react";
import { useFrame } from '@react-three/fiber'

export default function Scene({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useSpline('https://prod.spline.design/eR-CIHwfBAqGe0Y9/scene.splinecode')
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8
    group.current.rotation.y = Math.sin(t / 4) / 8
    group.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20
    group.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  })
  return (
    <>
      <color attach="background" args={['#4b4d52']} />
      <group {...props} dispose={null} ref={group}>
        <mesh
          name="move_tool.png"
          geometry={nodes['move_tool.png'].geometry}
          material={materials['move_tool.png Material']}
          castShadow
          receiveShadow
          position={[-2.78, 6.01, 26]}
        />
        <mesh
          name="Cube"
          geometry={nodes.Cube.geometry}
          material={materials['Cube Material']}
          castShadow
          receiveShadow
        />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" position={[0, 1, 0]} />
      </group>
    </>
  )
}
