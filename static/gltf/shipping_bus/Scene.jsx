/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 scene.gltf 
Author: Mateusz Woliński (https://sketchfab.com/jeandiz)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/shipping-containers-cc3f7136710f4905905eae1d10ac50b7
Title: Shipping containers
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.Crate_Crate_0.geometry} material={materials.Crate} position={[0, 129.722, -0.646]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Crate001_Crate2_0.geometry} material={materials.Crate2} position={[3.005, 388.368, -4.869]} rotation={[-Math.PI / 2, 0, 0.01]} scale={100} />
        <mesh geometry={nodes.Crate002_Crate3_0.geometry} material={materials.Crate3} position={[336.528, 131.617, -24.99]} rotation={[-Math.PI / 2, 0, 0.17]} scale={100} />
        <mesh geometry={nodes.Crate003_Crate4_0.geometry} material={materials.Crate4} position={[129.583, 131.617, -469.187]} rotation={[-Math.PI / 2, 0, 1.638]} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
