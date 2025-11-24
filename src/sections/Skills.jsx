import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Palette, Terminal, Cpu } from 'lucide-react';

const skills = [
    {
        category: "Frontend",
        icon: <Layout className="w-6 h-6" />,
        items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js"]
    },
    {
        category: "Backend",
        icon: <Database className="w-6 h-6" />,
        items: ["Node.js", "Express", "PostgreSQL", "Supabase", "Firebase"]
    },
    {
        category: "Design",
        icon: <Palette className="w-6 h-6" />,
        items: ["Figma", "UI/UX", "Prototyping", "Design Systems"]
    },
    {
        category: "Tools",
        icon: <Terminal className="w-6 h-6" />,
        items: ["Git", "Docker", "VS Code", "Vite", "Webpack"]
    }
];

const SkillCard = ({ skill, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
                <div className="mb-6 p-3 w-fit rounded-2xl bg-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform duration-500">
                    {skill.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{skill.category}</h3>

                <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 text-sm text-slate-400 bg-white/5 rounded-full border border-white/5 group-hover:border-white/20 group-hover:text-white transition-colors duration-300"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Technical <span className="text-blue-400">Arsenal</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        A curated stack of technologies I use to build scalable and beautiful applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <SkillCard key={index} skill={skill} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
