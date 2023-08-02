import { OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { RainingDay } from "./Raning_day";
import Loader from "../Loader";
const RainingDayComponent = () => {
    return (
        <Canvas style={{ pointerEvents: "none" }}>
            <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[0, 5, 2]} intensity={1} />
            <Suspense fallback={<Loader />}>
                <Loader />
                <RainingDay />
            </Suspense>

        </Canvas>
    );
};
export default RainingDayComponent;