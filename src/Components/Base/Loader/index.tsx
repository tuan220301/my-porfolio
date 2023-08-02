import React, { useEffect } from "react";
// import { Html, useProgress } from "drei";
import { a, useTransition } from "@react-spring/web";
import { Html, useProgress } from "@react-three/drei";
const Loader = () => {
    const { active, progress } = useProgress();
    const transition = useTransition(active, {
        from: { opacity: 1, progress: 0 },
        leave: { opacity: 0 },
        update: { progress },
    });
    // useEffect(() => {
    //     console.log('active: ', active);
    //     console.log('progress: ', progress);
    // }, [active, progress]);
    return transition(
        ({ progress, opacity }, active) =>
            active ? (
                <Html>
                    <a.div
                        className="loading"
                        style={{
                            opacity,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "#171717",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 1000,
                        }}
                    >
                        <div
                            className="loading-bar-container"
                            style={{
                                width: "100px",
                                height: "32px",
                                background: "#272727",
                            }}
                        >
                            <a.div
                                className="loading-bar"
                                style={{
                                    height: "32px",
                                    background: "#f15946",
                                    width: progress,
                                }}
                            ></a.div>
                        </div>
                    </a.div>
                </Html>
            ) : null
    );
};

export default Loader;
