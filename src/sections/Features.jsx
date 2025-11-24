import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Globe, Zap, Shield, Terminal } from 'lucide-react';

const features = [
    {
        icon: <Code2 className="w-6 h-6" />,
        title: "Natural Language",
        description: "Code at the speed of thought. Intent over syntax.",
        colSpan: "col-span-1 md:col-span-2",
    },
    {
        icon: <Cpu className="w-6 h-6" />,
        title: "Context Aware",
        description: "Deep understanding of your entire codebase.",
        colSpan: "col-span-1",
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Instant Tests",
        description: "Generate comprehensive test suites in seconds.",
        colSpan: "col-span-1",
    },
    {
        icon: <Globe className="w-6 h-6" />,
        title: "Global Edge",
        description: "Deploy to the edge with a single click.",
        colSpan: "col-span-1 md:col-span-2",
    },
    {
        icon: <Shield className="w-6 h-6" />,
        title: "Enterprise Security",
        description: "Bank-grade encryption and compliance built-in.",
        colSpan: "col-span-1",
    },
    {
        icon: <Terminal className="w-6 h-6" />,
        title: "Smart Terminal",
        description: "A terminal that predicts your next move.",
        colSpan: "col-span-1",
    },
];

const FeatureCard = ({ feature, index }) => {
    const divRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 ${feature.colSpan}`}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.06), transparent 40%)`,
                }}
            />
            <div className="relative z-10 flex flex-col h-full">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-blue-400 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110">
                    {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-medium text-white">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{feature.description}</p>
            </div>
        </motion.div>
    );
};

const Features = () => {
    return (
        <section id="features" className="relative overflow-hidden bg-[#0a0a0a] py-32 px-6">
            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Powered by <span className="text-blue-400">Intelligence</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-slate-400">
                        Tools designed for the next generation of creators.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
