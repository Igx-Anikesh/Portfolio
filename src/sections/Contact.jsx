import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Let's Create <span className="text-blue-400">Something</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto">
                        Ready to start your next project? I'm currently available for freelance work and collaborations.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors"
                    >
                        <div className="w-12 h-12 mx-auto bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                            <Mail className="w-6 h-6" />
                        </div>
                        <h3 className="text-white font-semibold mb-2">Email</h3>
                        <p className="text-slate-400 text-sm">hello@anikesh.dev</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors"
                    >
                        <div className="w-12 h-12 mx-auto bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                            <Phone className="w-6 h-6" />
                        </div>
                        <h3 className="text-white font-semibold mb-2">Phone</h3>
                        <p className="text-slate-400 text-sm">+1 (555) 123-4567</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors"
                    >
                        <div className="w-12 h-12 mx-auto bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <h3 className="text-white font-semibold mb-2">Location</h3>
                        <p className="text-slate-400 text-sm">San Francisco, CA</p>
                    </motion.div>
                </div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="max-w-xl mx-auto space-y-6"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"
                        />
                    </div>
                    <textarea
                        rows="4"
                        placeholder="Message"
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                    />
                    <button className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-slate-200 transition-colors">
                        Send Message
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
