import useSpline from '@splinetool/r3f-spline'
import React, { useRef } from "react";
import { useFrame } from '@react-three/fiber'

export default function Scene({ ...props }) {
  const scale = [0.1, 0.1, 0.1]
  const rotation = [1.4, 0.1, -0.1]
  const position = [0, 0, 17]
  console.log(position[0])
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
          position={[position[0] + 0, position[1] + -2.5, position[2] + 1.5]}
          scale={scale}
          rotation={rotation}
        />
        <mesh
          name="Cube"
          geometry={nodes.Cube.geometry}
          material={materials['Cube Material']}
          castShadow
          receiveShadow
          scale={scale}
          rotation={rotation}
          position={position}
        />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" position={[0, 1, 0]} />
      </group>
    </>
  )
}
