/*
  Auto-generated by Spline
*/

import React, { useRef, useState, useMemo, useEffect } from 'react'
import useSpline from '@splinetool/r3f-spline'
import { PerspectiveCamera } from '@react-three/drei'
import { useFrame, extend, useThree } from '@react-three/fiber';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
extend({ EffectComposer, RenderPass, UnrealBloomPass })

function Bloom({ children }) {
    const { gl, camera, size } = useThree()
    const [scene, setScene] = useState()
    const composer = useRef()
    useEffect(() => void scene && composer.current.setSize(size.width, size.height), [size])
    useFrame(() => scene && composer.current.render(), 1)
    return (
      <>
        <scene ref={setScene}>{children}</scene>
        <effectComposer ref={composer} args={[gl]}>
          <renderPass attachArray="passes" scene={scene} camera={camera} />
          <unrealBloomPass attachArray="passes" args={[undefined, 1.5, 1, 0]} />
        </effectComposer>
      </>
    )
  }

export default function StarField({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/pJsrrR4cpInxEWzt/scene.splinecode')
  return (
    <>
      <color attach="background" args={['#4b4d52']} />
    {/* <Bloom> */}
      <group {...props} dispose={null}>
        <group name="Group">
          <mesh
            name="Sphere 56"
            geometry={nodes['Sphere 56'].geometry}
            material={materials['Sphere 56 Material']}
            castShadow
            receiveShadow
            position={[477.1, 237.42, 305.04]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 55"
            geometry={nodes['Sphere 55'].geometry}
            material={materials['Sphere 55 Material']}
            castShadow
            receiveShadow
            position={[486.95, 237.42, 135.33]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 54"
            geometry={nodes['Sphere 54'].geometry}
            material={materials['Sphere 54 Material']}
            castShadow
            receiveShadow
            position={[278.92, -365.56, -307.48]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 53"
            geometry={nodes['Sphere 53'].geometry}
            material={materials['Sphere 53 Material']}
            castShadow
            receiveShadow
            position={[365.83, -301.57, 208.43]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 52"
            geometry={nodes['Sphere 52'].geometry}
            material={materials['Sphere 52 Material']}
            castShadow
            receiveShadow
            position={[287.07, -173.56, -361.09]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 51"
            geometry={nodes['Sphere 51'].geometry}
            material={materials['Sphere 51 Material']}
            castShadow
            receiveShadow
            position={[412.41, -148.57, 291.27]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 50"
            geometry={nodes['Sphere 50'].geometry}
            material={materials['Sphere 50 Material']}
            castShadow
            receiveShadow
            position={[165.3, 36.45, -241.95]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 49"
            geometry={nodes['Sphere 49'].geometry}
            material={materials['Sphere 49 Material']}
            castShadow
            receiveShadow
            position={[413.29, 118.42, 501.67]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 48"
            geometry={nodes['Sphere 48'].geometry}
            material={materials['Sphere 48 Material']}
            castShadow
            receiveShadow
            position={[306.61, 307.44, -263.8]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 47"
            geometry={nodes['Sphere 47'].geometry}
            material={materials['Sphere 47 Material']}
            castShadow
            receiveShadow
            position={[386.95, 386.43, 347.89]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 46"
            geometry={nodes['Sphere 46'].geometry}
            material={materials['Sphere 46 Material']}
            castShadow
            receiveShadow
            position={[304.81, -11.56, 200.88]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 45"
            geometry={nodes['Sphere 45'].geometry}
            material={materials['Sphere 45 Material']}
            castShadow
            receiveShadow
            position={[305.22, 237.44, -448.19]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 44"
            geometry={nodes['Sphere 44'].geometry}
            material={materials['Sphere 44 Material']}
            castShadow
            receiveShadow
            position={[180.43, -272.55, -225.05]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 43"
            geometry={nodes['Sphere 43'].geometry}
            material={materials['Sphere 43 Material']}
            castShadow
            receiveShadow
            position={[143.68, -272.55, 407.89]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 42"
            geometry={nodes['Sphere 42'].geometry}
            material={materials['Sphere 42 Material']}
            castShadow
            receiveShadow
            position={[-475.49, -331.5, -154.95]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 41"
            geometry={nodes['Sphere 41'].geometry}
            material={materials['Sphere 41 Material']}
            castShadow
            receiveShadow
            position={[-5.82, -164.54, 501.38]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 40"
            geometry={nodes['Sphere 40'].geometry}
            material={materials['Sphere 40 Material']}
            castShadow
            receiveShadow
            position={[166.88, -116.55, 129.77]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 39"
            geometry={nodes['Sphere 39'].geometry}
            material={materials['Sphere 39 Material']}
            castShadow
            receiveShadow
            position={[278.55, 116.44, 219.39]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 38"
            geometry={nodes['Sphere 38'].geometry}
            material={materials['Sphere 38 Material']}
            castShadow
            receiveShadow
            position={[104.36, 357.45, 200.26]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 37"
            geometry={nodes['Sphere 37'].geometry}
            material={materials['Sphere 37 Material']}
            castShadow
            receiveShadow
            position={[152.82, 156.45, -200.61]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 36"
            geometry={nodes['Sphere 36'].geometry}
            material={materials['Sphere 36 Material']}
            castShadow
            receiveShadow
            position={[-31.91, -231.53, -558.92]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 35"
            geometry={nodes['Sphere 35'].geometry}
            material={materials['Sphere 35 Material']}
            castShadow
            receiveShadow
            position={[-381.33, -205.51, -301.74]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 34"
            geometry={nodes['Sphere 34'].geometry}
            material={materials['Sphere 34 Material']}
            castShadow
            receiveShadow
            position={[137.33, -73.55, 430.56]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 33"
            geometry={nodes['Sphere 33'].geometry}
            material={materials['Sphere 33 Material']}
            castShadow
            receiveShadow
            position={[-82.82, 87.47, -341.5]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 32"
            geometry={nodes['Sphere 32'].geometry}
            material={materials['Sphere 32 Material']}
            castShadow
            receiveShadow
            position={[-39.62, -46.54, 268.03]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 31"
            geometry={nodes['Sphere 31'].geometry}
            material={materials['Sphere 31 Material']}
            castShadow
            receiveShadow
            position={[22.2, 63.46, 574.13]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 30"
            geometry={nodes['Sphere 30'].geometry}
            material={materials['Sphere 30 Material']}
            castShadow
            receiveShadow
            position={[64.11, 236.46, -147.66]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 29"
            geometry={nodes['Sphere 29'].geometry}
            material={materials['Sphere 29 Material']}
            castShadow
            receiveShadow
            position={[157.87, 207.45, 475.82]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 28"
            geometry={nodes['Sphere 28'].geometry}
            material={materials['Sphere 28 Material']}
            castShadow
            receiveShadow
            position={[-235.64, -84.52, -208.14]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 27"
            geometry={nodes['Sphere 27'].geometry}
            material={materials['Sphere 27 Material']}
            castShadow
            receiveShadow
            position={[-53.58, 186.47, -341.81]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 26"
            geometry={nodes['Sphere 26'].geometry}
            material={materials['Sphere 26 Material']}
            castShadow
            receiveShadow
            position={[-59.54, 322.47, 90.57]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 25"
            geometry={nodes['Sphere 25'].geometry}
            material={materials['Sphere 25 Material']}
            castShadow
            receiveShadow
            position={[-226.48, -164.52, -470.05]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 24"
            geometry={nodes['Sphere 24'].geometry}
            material={materials['Sphere 24 Material']}
            castShadow
            receiveShadow
            position={[-84.17, -108.53, -387.66]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 23"
            geometry={nodes['Sphere 23'].geometry}
            material={materials['Sphere 23 Material']}
            castShadow
            receiveShadow
            position={[-509.6, -206.5, -18.7]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 22"
            geometry={nodes['Sphere 22'].geometry}
            material={materials['Sphere 22 Material']}
            castShadow
            receiveShadow
            position={[-59.77, -10.53, -599.6]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 21"
            geometry={nodes['Sphere 21'].geometry}
            material={materials['Sphere 21 Material']}
            castShadow
            receiveShadow
            position={[-382.95, -92.51, 541.59]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 20"
            geometry={nodes['Sphere 20'].geometry}
            material={materials['Sphere 20 Material']}
            castShadow
            receiveShadow
            position={[-22.17, 76.46, 297.09]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 19"
            geometry={nodes['Sphere 19'].geometry}
            material={materials['Sphere 19 Material']}
            castShadow
            receiveShadow
            position={[-129.25, 358.47, -565.57]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 18"
            geometry={nodes['Sphere 18'].geometry}
            material={materials['Sphere 18 Material']}
            castShadow
            receiveShadow
            position={[-218.18, 16.48, -231.16]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 17"
            geometry={nodes['Sphere 17'].geometry}
            material={materials['Sphere 17 Material']}
            castShadow
            receiveShadow
            position={[-128.23, 280.47, 93.6]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 16"
            geometry={nodes['Sphere 16'].geometry}
            material={materials['Sphere 16 Material']}
            castShadow
            receiveShadow
            position={[-367.65, 50.49, 330.12]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 15"
            geometry={nodes['Sphere 15'].geometry}
            material={materials['Sphere 15 Material']}
            castShadow
            receiveShadow
            position={[-239.61, 113.48, 51.07]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 14"
            geometry={nodes['Sphere 14'].geometry}
            material={materials['Sphere 14 Material']}
            castShadow
            receiveShadow
            position={[-364.29, -36.51, -543.16]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 13"
            geometry={nodes['Sphere 13'].geometry}
            material={materials['Sphere 13 Material']}
            castShadow
            receiveShadow
            position={[-232.82, 158.48, 263.82]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 12"
            geometry={nodes['Sphere 12'].geometry}
            material={materials['Sphere 12 Material']}
            castShadow
            receiveShadow
            position={[-298.75, 298.48, 358.16]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 11"
            geometry={nodes['Sphere 11'].geometry}
            material={materials['Sphere 11 Material']}
            castShadow
            receiveShadow
            position={[10.61, 176.46, -562.46]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 10"
            geometry={nodes['Sphere 10'].geometry}
            material={materials['Sphere 10 Material']}
            castShadow
            receiveShadow
            position={[-588.52, 300.51, -134.47]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 9"
            geometry={nodes['Sphere 9'].geometry}
            material={materials['Sphere 9 Material']}
            castShadow
            receiveShadow
            position={[-466.54, 71.5, -14.19]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 8"
            geometry={nodes['Sphere 8'].geometry}
            material={materials['Sphere 8 Material']}
            castShadow
            receiveShadow
            position={[-637.28, -51.49, -58.17]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 7"
            geometry={nodes['Sphere 7'].geometry}
            material={materials['Sphere 7 Material']}
            castShadow
            receiveShadow
            position={[-412.96, 260.5, -433.79]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 6"
            geometry={nodes['Sphere 6'].geometry}
            material={materials['Sphere 6 Material']}
            castShadow
            receiveShadow
            position={[-540.09, 127.5, 558.5]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 5"
            geometry={nodes['Sphere 5'].geometry}
            material={materials['Sphere 5 Material']}
            castShadow
            receiveShadow
            position={[-351.03, 230.49, 564.47]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 4"
            geometry={nodes['Sphere 4'].geometry}
            material={materials['Sphere 4 Material']}
            castShadow
            receiveShadow
            position={[-134.66, 118.47, -489.76]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 3"
            geometry={nodes['Sphere 3'].geometry}
            material={materials['Sphere 3 Material']}
            castShadow
            receiveShadow
            position={[-533.49, 193.51, 10.97]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere 2"
            geometry={nodes['Sphere 2'].geometry}
            material={materials['Sphere 2 Material']}
            castShadow
            receiveShadow
            position={[-359.69, 111.49, -171.26]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            name="Sphere"
            geometry={nodes.Sphere.geometry}
            material={materials['Sphere Material']}
            castShadow
            receiveShadow
            position={[-454.58, 377.5, -202.82]}
            rotation={[0, -0.06, 0]}
          />
        </group>
        {/* <PerspectiveCamera
          name="Camera"
          makeDefault={true}
          far={100000}
          near={5}
          fov={45}
          position={[958.9, 264, -103.99]}
          rotation={[-1.95, 1.28, 1.96]}
        /> */}
        <hemisphereLight name="Default Ambient Light" intensity={10} position={[0, 1, 0]} />
      </group>
    {/* </Bloom> */}
    </>
  )
}
