import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen bg-[#fff0f5] flex items-center justify-center p-6 relative overflow-hidden">
            {/* Decorative Blobs */}
            <motion.div
                animate={{ y: [0, -30, 0], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#ffb8b8]/30 rounded-[40%] blur-xl"
            />
            <motion.div
                animate={{ y: [0, 40, 0], rotate: [0, -15, 15, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#ff6b81]/20 rounded-[60%] blur-xl"
            />

            <div className="max-w-4xl mx-auto text-center z-10">
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-40 h-40 bg-gradient-to-br from-[#ffb8b8] to-[#ff4757] rounded-[40%] mx-auto mb-10 shadow-lg border-4 border-white"
                />

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-8xl font-black mb-6 text-[#ff4757] tracking-tight"
                >
                    Hello, I'm <span className="text-[#ff6b81] relative">
                        Suresh!
                        <svg className="absolute w-full h-4 -bottom-2 left-0 text-[#ffb8b8]" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                        </svg>
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl md:text-3xl text-[#ff6b81] mb-10 font-medium"
                >
                    Creating joyful digital experiences ✨
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <motion.button
                        whileHover={{ y: -4 }}
                        whileTap={{ y: 0 }}
                        onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 bg-[#ff4757] text-white rounded-full font-bold text-lg transition-all shadow-[0_8px_0_#ff6b81] hover:shadow-[0_4px_0_#ff6b81] hover:bg-[#ff5e6d] w-full sm:w-auto"
                    >
                        See My Projects
                    </motion.button>

                    <motion.button
                        whileHover={{ y: -4 }}
                        whileTap={{ y: 0 }}
                        onClick={() => window.open('https://drive.google.com/file/d/1APQkYYocSiNsR81iP4L6WVVo0cmy0rcL/view?usp=drive_link', '_blank')}
                        className="px-8 py-4 bg-white text-[#ff4757] border-2 border-[#ffb8b8] rounded-full font-bold text-lg transition-all shadow-[0_8px_0_#ffb8b8] hover:shadow-[0_4px_0_#ffb8b8] hover:bg-[#fff0f5] w-full sm:w-auto"
                    >
                        Resume 📄
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
