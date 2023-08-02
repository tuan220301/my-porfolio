import { OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Note } from "./Note";
import Loader from "../Loader";


const NoteComponent = () => {
    return (
        <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[0, 5, 2]} intensity={1} />
            <Suspense fallback={<Loader />}>
                <Note />
            </Suspense>
        </Canvas>
    );
};
export default NoteComponent;