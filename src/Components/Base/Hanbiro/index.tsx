import { OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Hanbiro } from "./Hanbiro";

const HanbiroComponent = () => {
    return (
        <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[0, 5, 2]} intensity={1} />
            <Suspense fallback={null}>
                <Hanbiro />
            </Suspense>
        </Canvas>
    );
};
export default HanbiroComponent;