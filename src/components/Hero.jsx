import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-transparent z-10">
            {/* Decorative Orbs */}
            <motion.div
                animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-[100px] pointer-events-none"
            />
            <motion.div
                animate={{ y: [0, 30, 0], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"
            />



            {/* MAIN CONTENT CENTER */}
            <div className="relative z-10 text-center max-w-6xl flex flex-col items-center">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-accent tracking-[0.2em] mb-4 font-semibold text-xs md:text-sm uppercase backdrop-blur-sm px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5"
                >
                    Full Stack Developer
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-6xl font-black text-textPrimary leading-[1.0] mb-4 tracking-tight"
                >
                    Crafting Digital Experiences
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400 relative inline-block mt-1">
                        That Matter
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-base md:text-lg text-textSecondary max-w-2xl mx-auto leading-relaxed mb-8"
                >
                    I design and build high-performance web applications with modern technologies, focusing on speed, scalability, and user experience.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto mt-4"
                >
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-3.5 bg-textPrimary text-background rounded-lg font-semibold text-base transition-all shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:bg-white w-full sm:w-auto flex items-center justify-center gap-2 group"
                    >
                        View Work <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-3.5 bg-surface text-textPrimary border border-white/10 rounded-lg font-semibold text-base transition-all hover:bg-surfaceHover hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] w-full sm:w-auto"
                    >
                        Contact
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
