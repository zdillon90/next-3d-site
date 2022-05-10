import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Kong.glb");
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
        geometry={nodes["810_merged_(repaired)"].geometry}
        material={materials["material_1.001"]}
        rotation={[-Math.PI / 1.15, -0.0, Math.PI/0.95]}
        />
  </group>
  );
}

useGLTF.preload("/Kong.glb");