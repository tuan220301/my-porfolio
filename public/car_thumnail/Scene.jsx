/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 scene.gltf 
Author: Maxim Ploshinsky (https://sketchfab.com/ploshinskymaxim)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pixel-car-street-efecee12efc144dfbf93ba5d51558c63
Title: Pixel Car Street
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.507}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh geometry={nodes.Cube001_Road_0.geometry} material={materials.Road} position={[0, 6.25, 0]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
