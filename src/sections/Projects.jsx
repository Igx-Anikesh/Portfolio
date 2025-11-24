import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
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
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
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

const Projects = () => {
    return (
        <section id="projects" className="py-32 px-6 bg-[#0a0a0a]">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Selected <span className="text-blue-400">Works</span>
                        </h2>
                        <p className="text-slate-400 text-lg max-w-xl">
                            A glimpse into my portfolio of digital experiences.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            to="/projects"
                            className="group flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors"
                        >
                            View All Projects
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
