import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/angle.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shape_IndexedFaceSet.geometry}
        material={materials.Shape}
        rotation={[Math.PI / 2, 0, Math.PI]}
        position={[0, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/angle.glb");
