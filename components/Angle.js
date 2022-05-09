import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/angle2.glb");
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
        geometry={nodes.HeroFoxVariant2.geometry}
        material={materials.material_1}
        rotation={[-Math.PI, -0.02, Math.PI/2]}
        // scale={0.1}
        // position={[-3, 2, -1]}
        />
  </group>
  );
}

useGLTF.preload("/angle2.glb");
