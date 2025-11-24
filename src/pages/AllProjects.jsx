import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const allProjects = [
    {
        title: "Project Alpha",
        category: "Full Stack",
        description: "A comprehensive dashboard for data visualization.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        tech: ["React", "Node.js", "D3.js"]
    },
    {
        title: "Neon Verse",
        category: "3D Web",
        description: "Immersive 3D portfolio experience.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        tech: ["Three.js", "WebGL", "GSAP"]
    },
    {
        title: "EcoTrack",
        category: "Mobile App",
        description: "Sustainability tracking application.",
        image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop",
        tech: ["React Native", "Firebase"]
    },
    {
        title: "CryptoDash",
        category: "Fintech",
        description: "Real-time cryptocurrency tracking dashboard.",
        image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1974&auto=format&fit=crop",
        tech: ["Next.js", "CoinGecko API", "Tailwind"]
    },
    {
        title: "AI Chatbot",
        category: "AI/ML",
        description: "Context-aware customer support agent.",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop",
        tech: ["Python", "OpenAI", "FastAPI"]
    },
    {
        title: "E-Commerce Pro",
        category: "E-Commerce",
        description: "Modern shopping platform with headless CMS.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop",
        tech: ["Shopify", "Remix", "Sanity"]
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10"
        >
            <div className="aspect-video overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                        <ExternalLink className="w-5 h-5" />
                    </button>
                    <button className="p-3 bg-white/10 text-white backdrop-blur-md rounded-full hover:scale-110 transition-transform">
                        <Github className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="p-8">
                <div className="text-blue-400 text-sm font-medium mb-2">{project.category}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                        <span key={i} className="text-xs font-medium text-slate-500 bg-white/5 px-3 py-1 rounded-full">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const AllProjects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-12">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Home
                    </Link>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold text-white mb-6"
                    >
                        All <span className="text-blue-400">Projects</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-xl max-w-2xl"
                    >
                        A complete collection of my work, experiments, and open source contributions.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProjects;
