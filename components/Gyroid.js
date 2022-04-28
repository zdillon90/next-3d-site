import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Gyroid(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Gyroid.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        scale={[0.05, 0.05, 0.05]}
        geometry={nodes["Gyroid_3mm_(repaired)_(color)"].geometry}
        material={materials.material_1}
        rotation={[Math.PI / 2, 0, 0]}
        position={[-1.2, -0.5, 0]}
      />
    </group>
  );
}

useGLTF.preload("/Gyroid.gltf");