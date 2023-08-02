import React from 'react';
import { Html, useProgress, useGLTFLoader } from "drei";
export default function Model({ url }: any) {
    const gltf = useGLTFLoader(url, true);
    return <primitive object={gltf.scene} dispose={null} />;
}