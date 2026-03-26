import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.png';

const About = () => {
    return (
        <section id="about" className="py-24 relative bg-transparent px-6 sm:px-10 lg:px-20 max-w-7xl mx-auto z-10">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-400">
                        About Me
                    </span>
                </h2>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                    Turning ideas into real products.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">

                {/* LEFT - IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center relative"
                >
                    <div className="relative">
                        <img
                            src={profilePic}
                            alt="Profile"
                            className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-3xl border-2 border-white/10 shadow-2xl relative z-10 transition-transform duration-500 hover:scale-105 hover:-rotate-1"
                        />

                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-accent to-blue-500 opacity-20 blur-3xl -z-10" />
                    </div>
                </motion.div>

                {/* RIGHT - CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-textSecondary text-lg leading-relaxed mb-8">
                        I'm a MERN stack developer passionate about building fast,
                        responsive, and scalable web applications. I love solving problems
                        and creating user-friendly digital experiences that bridge the gap between design and engineering.
                    </p>

                    {/* SKILLS */}
                    <div className="flex flex-wrap gap-3 mb-10">
                        {["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"].map((tech) => (
                            <span
                                key={tech}
                                className="px-5 py-2.5 bg-[#151521]/80 backdrop-blur-sm border border-white/5 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:border-accent/30 hover:-translate-y-1 transition-all cursor-default shadow-lg"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* STATS */}
                    <div className="flex gap-8 sm:gap-12 mb-10">
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-1 tracking-tight">1+</h3>
                            <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest font-medium">Years Exp</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-1 tracking-tight">10+</h3>
                            <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest font-medium">Projects</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-1 tracking-tight">100%</h3>
                            <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest font-medium">Focus</p>
                        </div>
                    </div>

                    {/* BUTTON */}
                    <button
                        onClick={() => window.open('https://drive.google.com/file/d/1APQkYYocSiNsR81iP4L6WVVo0cmy0rcL/view?usp=drive_link', '_blank')}
                        className="mt-2 bg-textPrimary text-background px-8 py-3.5 rounded-xl font-semibold text-base transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(196,181,253,0.3)] hover:scale-105"
                    >
                        Download CV
                    </button>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
