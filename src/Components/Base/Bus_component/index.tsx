import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Bus: React.FC = () => {
    const sceneRef = useRef<any>(null);
    const cameraRef = useRef<any>(null);
    const rendererRef = useRef<any>(null);
    const renderCalls = useRef<(() => void)[]>([]);
    const wheelsRef = useRef<THREE.Mesh[]>([]);

    useEffect(() => {
        if (!sceneRef.current || !cameraRef.current || !rendererRef.current) {
            sceneRef.current = new THREE.Scene();
            sceneRef.current.fog = new THREE.Fog(0x242426, 20, 600);

            cameraRef.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 10, 600);
            cameraRef.current.position.z = 90;

            rendererRef.current = new THREE.WebGLRenderer({ antialias: true });
            rendererRef.current.setPixelRatio(window.devicePixelRatio);
            rendererRef.current.setSize(window.innerWidth, window.innerHeight);
            rendererRef.current.setClearColor(0x242426);
            rendererRef.current.toneMapping = THREE.LinearToneMapping;

            rendererRef.current.shadowMap.enabled = true;
            rendererRef.current.shadowMap.type = THREE.PCFSoftShadowMap;

            window.addEventListener("resize", () => {
                if (cameraRef.current) {
                    cameraRef.current.aspect = window.innerWidth / window.innerHeight;
                    cameraRef.current.updateProjectionMatrix();
                }
                if (rendererRef.current) {
                    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
                }
            });

            document.body.appendChild(rendererRef.current.domElement);

            // Create car body
            const carGeometry = new THREE.BoxGeometry(20, 10, 3);
            const carMaterial = new THREE.MeshPhongMaterial({
                color: 0xB74242,
                shininess: 100,
                emissive: 0xFF0000,
                emissiveIntensity: 0.6,
            });
            const carBody = new THREE.Mesh(carGeometry, carMaterial);
            carBody.castShadow = true;
            carBody.receiveShadow = true;
            sceneRef.current.add(carBody);

            // Create car top
            const carTopGeometry = new THREE.BoxGeometry(12, 8, 5);
            const carTopMaterial = new THREE.MeshPhongMaterial({
                color: 0xB74242,
                shininess: 100,
                emissive: 0x990000,
                emissiveIntensity: 0.7,
            });
            const carTop = new THREE.Mesh(carTopGeometry, carTopMaterial);
            carTop.position.x -= 2;
            carTop.position.z += 3.5;
            carTop.castShadow = true;
            carTop.receiveShadow = true;
            sceneRef.current.add(carTop);

            // Create wheels
            const wheelGeometry = new THREE.CylinderGeometry(3, 3, 1, 6);
            const wheelMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });

            wheelsRef.current = Array(4)
                .fill(null)
                .map((_, i) => {
                    const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
                    wheel.position.y = i < 2 ? 6 : -6;
                    wheel.position.x = i % 2 ? 6 : -6;
                    wheel.position.z = -3;
                    sceneRef.current?.add(wheel);
                    return wheel;
                });

            // Add lights and other elements if needed
        }

        animate();

        return () => {
            if (rendererRef.current) {
                document.body.removeChild(rendererRef.current.domElement);
            }
        };
    }, []);

    const animate = () => {
        requestAnimationFrame(animate);

        if (renderCalls.current) {
            renderCalls.current.forEach((callback) => {
                callback();
            });
        }

        if (rendererRef.current && sceneRef.current && cameraRef.current) {
            // ... (code to update the car's movement)

            // Add rotation animation for wheels
            let carSpeed = 0.1;
            if (wheelsRef.current) {
                wheelsRef.current.forEach((wheel, i) => {
                    wheel.rotation.y += 0.1 * carSpeed; // Adjust the rotation speed as needed
                });
            }

            rendererRef.current.toneMappingExposure = Math.pow(0.91, 5.0);
            rendererRef.current.render(sceneRef.current, cameraRef.current);
        }
    };

    return null;
};

export default Bus;
