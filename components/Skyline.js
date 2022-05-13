import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/skyline.glb");
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8
    group.current.rotation.y = Math.sin(t / 4) / 8
    group.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20
    group.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["zdillon90-2019_-_stlmesh"].geometry}
        material={materials["Default OBJ"]}
        rotation={[0.5, 3.1, 0]}
        scale={[0.8, 0.8, 0.8]}
      />
    </group>
  );
}

useGLTF.preload("/skyline.glb");
