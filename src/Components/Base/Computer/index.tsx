import { OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Computer } from "./Computer";

const ComputerComponent = () => {
    return (
        <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[0, 5, 2]} intensity={1} />
            <Suspense fallback={null}>
                <Computer />
            </Suspense>
        </Canvas>
    );
};
export default ComputerComponent;