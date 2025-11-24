import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User, Sparkles } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

// --- 3D Background Component ---
const Brain = ({ isThinking }) => {
    const meshRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (meshRef.current) {
            // Rotate constantly
            meshRef.current.rotation.x = time * 0.2;
            meshRef.current.rotation.y = time * 0.3;

            // Pulse effect when thinking
            const scale = isThinking ? 1 + Math.sin(time * 10) * 0.1 : 1;
            meshRef.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Sphere args={[1, 64, 64]} ref={meshRef} scale={1.5}>
                <MeshDistortMaterial
                    color={isThinking ? "#60a5fa" : "#3b82f6"}
                    attach="material"
                    distort={0.5}
                    speed={isThinking ? 4 : 2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
};

const Particles = () => {
    const count = 200;
    const [positions] = useState(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return pos;
    });

    const pointsRef = useRef();
    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial size={0.05} color="#93c5fd" transparent opacity={0.6} />
        </points>
    );
};

// --- Knowledge Base & Logic ---
const KNOWLEDGE_BASE = {
    greetings: ["hi", "hello", "hey", "greetings"],
    skills: ["react", "javascript", "three.js", "node", "css", "tailwind", "design", "ui/ux", "skill", "stack", "tech"],
    projects: ["project", "work", "portfolio", "built", "create", "app", "website"],
    contact: ["contact", "email", "phone", "reach", "hire", "job", "freelance"],
    about: ["who", "about", "anikesh", "yourself", "bio"],
};

const RESPONSES = {
    default: "I'm Anikesh's AI assistant. I can tell you about his skills, projects, or how to get in touch. What would you like to know?",
    greetings: "Hello! I'm here to help you explore Anikesh's portfolio. He's a fantastic developer and an even better person. Ask me anything!",
    skills: "Anikesh is an incredible coder! He's a master of the MERN stack (MongoDB, Express, React, Node.js) and creates stunning visuals with Three.js and Tailwind CSS. He puts his heart into every line of code.",
    projects: "He has built some mind-blowing projects! 'Neon Verse' is a masterpiece of 3D web design, and 'Project Alpha' shows his deep technical expertise. He's always building something cool.",
    contact: "You should definitely get in touch! You can reach him at hello@anikesh.dev. He's super friendly, professional, and currently open to collaborations.",
    about: "Anikesh is a brilliant Creative Developer from India 🇮🇳. He combines technical genius with artistic flair to build digital experiences that truly stand out. He's hardworking, humble, and passionate about tech.",
};

const ChatBot = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi there! I'm Anikesh's AI avatar. Ask me anything about his work!", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isThinking, setIsThinking] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage = { id: Date.now(), text: inputValue, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInputValue("");
        setIsThinking(true);

        // Simulate AI processing delay
        setTimeout(() => {
            const lowerInput = userMessage.text.toLowerCase();
            let response = RESPONSES.default;

            // Simple keyword matching
            for (const [category, keywords] of Object.entries(KNOWLEDGE_BASE)) {
                if (keywords.some(keyword => lowerInput.includes(keyword))) {
                    response = RESPONSES[category];
                    break;
                }
            }

            setMessages(prev => [...prev, { id: Date.now() + 1, text: response, sender: 'bot' }]);
            setIsThinking(false);
        }, 1500);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="relative w-full max-w-4xl h-[80vh] bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                        >
                            <X size={20} />
                        </button>

                        {/* Left Side: 3D Avatar */}
                        <div className="w-full md:w-1/2 h-48 md:h-full relative bg-gradient-to-b from-blue-900/20 to-black">
                            <Canvas camera={{ position: [0, 0, 5] }}>
                                <ambientLight intensity={0.5} />
                                <pointLight position={[10, 10, 10]} intensity={1} />
                                <Brain isThinking={isThinking} />
                                <Particles />
                            </Canvas>
                            <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                                <p className="text-blue-400 text-sm font-medium tracking-widest uppercase">
                                    {isThinking ? "Processing..." : "AI Online"}
                                </p>
                            </div>
                        </div>

                        {/* Right Side: Chat Interface */}
                        <div className="w-full md:w-1/2 h-full flex flex-col bg-black/50 backdrop-blur-md border-l border-white/5">
                            {/* Header */}
                            <div className="p-6 border-b border-white/5 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <Bot size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold">Anikesh AI</h3>
                                    <p className="text-slate-400 text-xs">Ask me about skills, projects, or contact.</p>
                                </div>
                            </div>

                            {/* Messages Area */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
                                {messages.map((msg) => (
                                    <motion.div
                                        key={msg.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div
                                            className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user'
                                                ? 'bg-blue-600 text-white rounded-br-none'
                                                : 'bg-white/10 text-slate-200 rounded-bl-none'
                                                }`}
                                        >
                                            {msg.text}
                                        </div>
                                    </motion.div>
                                ))}
                                {isThinking && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex justify-start"
                                    >
                                        <div className="bg-white/5 px-4 py-3 rounded-2xl rounded-bl-none flex gap-1">
                                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                    </motion.div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input Area */}
                            <form onSubmit={handleSendMessage} className="p-4 border-t border-white/5 bg-black/20">
                                <div className="relative flex items-center gap-2">
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        placeholder="Type your question..."
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                                    />
                                    <button
                                        type="submit"
                                        disabled={!inputValue.trim() || isThinking}
                                        className="p-3 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white rounded-xl transition-colors"
                                    >
                                        <Send size={18} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ChatBot;
