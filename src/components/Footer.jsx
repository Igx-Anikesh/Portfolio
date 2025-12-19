import React from 'react';
import { Github, Twitter, Linkedin, Rocket } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-white/5 bg-[#0a0a0a] py-16">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                    <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10">
                            <Rocket className="h-4 w-4 text-blue-400" />
                        </div>
                        <span className="text-lg font-bold tracking-tight text-white">
                            Anikesh Kumar<span className="text-blue-400">.</span>
                        </span>
                    </div>

                    <div className="flex gap-8 text-sm font-medium text-slate-400">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Contact</a>
                    </div>

                    <div className="flex gap-4">
                         <a href="https://github.com/Igx-Anikesh" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-400 transition-all hover:bg-white/10 hover:text-white hover:scale-110">
                            <Github className="h-4 w-4" />
                        </a>
                        <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-400 transition-all hover:bg-white/10 hover:text-white hover:scale-110">
                            <Twitter className="h-4 w-4" />
                        </a>
                        <a href="https://www.linkedin.com/in/igx-anikesh/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-400 transition-all hover:bg-white/10 hover:text-white hover:scale-110">
                            <Linkedin className="h-4 w-4" />
                        </a>
                    </div>
                </div>

                <div className="mt-12 text-center text-xs text-slate-600">
                    © 2025 | Anikesh Kumar | All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

