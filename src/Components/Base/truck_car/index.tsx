import { OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { TruckCar } from "./TruckCar";

const TruckCarComponent = () => {
    return (
        <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[0, 5, 2]} intensity={1} />
            <Suspense fallback={null}>
                <TruckCar />
            </Suspense>
        </Canvas>
    );
};
export default TruckCarComponent;