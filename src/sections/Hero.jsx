import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const TinyParticles = ({ count = 8000 }) => {
    const points = useRef();
    const { mouse, viewport } = useThree();

    // Generate random positions
    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 120; // Increased spread
            positions[i * 3 + 1] = (Math.random() - 0.5) * 120;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 120;
        }
        return positions;
    }, [count]);

    // Generate circle texture
    const texture = useMemo(() => {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const context = canvas.getContext('2d');
        context.beginPath();
        context.arc(16, 16, 14, 0, 2 * Math.PI);
        context.fillStyle = 'white';
        context.fill();
        return new THREE.CanvasTexture(canvas);
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        // Rotate the entire system slowly
        points.current.rotation.x = time * 0.05;
        points.current.rotation.y = time * 0.03;

        // Mouse interaction (subtle parallax)
        const targetX = (mouse.x * viewport.width) / 50;
        const targetY = (mouse.y * viewport.height) / 50;

        points.current.rotation.x += (targetY - points.current.rotation.x) * 0.02;
        points.current.rotation.y += (targetX - points.current.rotation.y) * 0.02;
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesPosition.length / 3}
                    array={particlesPosition}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.3}
                color="#38bdf8"
                map={texture}
                sizeAttenuation={true}
                transparent
                depthWrite={false}
                opacity={0.9}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};

const Hero = () => {
    return (
        <section id="hero" className="relative w-full h-screen overflow-hidden bg-[#0a0a0a]">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 20], fov: 60 }} gl={{ preserveDrawingBuffer: true }}>
                    <color attach="background" args={['#0a0a0a']} />
                    <fog attach="fog" args={['#0a0a0a', 10, 50]} />
                    <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                    <TinyParticles />
                </Canvas>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="pointer-events-auto"
                >
                    <h2 className="text-blue-400 font-medium tracking-[0.3em] text-sm uppercase mb-6">
                        Portfolio
                    </h2>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 text-white pointer-events-auto mix-blend-overlay"
                >
                    I am Anikesh
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="text-slate-400 text-lg md:text-2xl max-w-3xl mb-12 leading-relaxed pointer-events-auto font-light"
                >
                    Creative Developer & UI/UX Designer.
                    <span className="text-slate-200"> Crafting digital experiences that defy expectations.</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-6 pointer-events-auto"
                >
                    <button
                        onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105"
                    >
                        <div className="absolute inset-0 w-full h-full bg-blue-400/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <span className="relative z-10">View Work</span>
                    </button>

                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all hover:border-white/40"
                    >
                        Contact Me
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
