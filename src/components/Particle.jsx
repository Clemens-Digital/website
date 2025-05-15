import { Particles, initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Particle() {
    initParticlesEngine(async (engine) => {
        await loadSlim(engine);
    });

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
            <Particles
                id="tsparticles"
                init={initParticlesEngine}
                loaded={particlesLoaded}
                className="w-full h-full z-1"
                options={{
                    background: {
                        color: {
                            value: "#333333",
                        },
                    },
                    fpsLimit: 120,
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#3d9970",
                            distance: 200,
                            enable: true,
                            opacity: 1,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: true,
                            speed: 4,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                            },
                            value: 100,
                        },
                        opacity: {
                            value: 0.8,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 4 },
                        },
                    },
                    detectRetina: true,
                    fullScreen: {
                        enable: false,
                        zIndex: 1,
                    },
                }}
            />
    );
};
