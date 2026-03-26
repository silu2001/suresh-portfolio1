import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, Code2, Database, Layout } from 'lucide-react';

import movieBookingImg from '../MovieBooking.png';
import ecommerceImg from '../E-commerce website.png';
import gymWebsiteImg from '../Gym Website.png';
import maacProjectImg from '../MAACProject.png';

const Projects = () => {
    const projects = [
        {
            title: 'Movie Booking website',
            description: 'A sleek cinematic platform allowing users to browse the latest releases, pick their favorite seats, and book tickets seamlessly online.',
            image: movieBookingImg,
            icons: [Code2, Layout, Database],
            liveUrl: "https://movie-website-quick-shows.vercel.app/"
        },
        {
            title: 'E-commerce website',
            description: 'A comprehensive online store featuring an intuitive product catalog, shopping cart logic, and a seamless checkout experience.',
            image: ecommerceImg,
            icons: [Database, Layout, Code2],
            liveUrl: "https://e-commerce-project-one-ashen.vercel.app/"
        },
        {
            title: 'Gym Website',
            description: 'A modern fitness platform showcasing membership plans, expert trainer profiles, and up-to-date class schedules for health enthusiasts.',
            image: gymWebsiteImg,
            icons: [Layout, Code2, Database],
            liveUrl: "https://cross-fit-gym-project.vercel.app/"
        },
        {
            title: 'MAAC Project',
            description: 'A creative portfolio and educational showcase highlighting dynamic 3D animation, VFX, and engaging multimedia design courses.',
            image: maacProjectImg,
            icons: [Code2, Layout, Database],
            liveUrl: "https://maac-project-react.vercel.app/"
        }
    ];

    return (
        <section id="projects" className="py-24 bg-transparent relative">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-400">
                            Selected Works
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Some of my recent projects and experiments.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative flex flex-col rounded-[2.5rem] bg-surface/30 border border-white/5 overflow-hidden transition-all shadow-xl backdrop-blur-sm"
                        >
                            {/* Faint Background Number */}
                            <div className="absolute right-10 bottom-32 text-[12rem] leading-none font-black text-white/[0.02] pointer-events-none z-0">
                                0{index + 1}
                            </div>

                            {/* Image Container with Padding */}
                            <div className="p-6 pb-2 z-10">
                                <div className="relative h-64 overflow-hidden rounded-3xl border border-white/10 bg-surfaceHover">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 pt-4 flex flex-col flex-grow z-10">
                                <h3 className="text-2xl font-black text-textPrimary mb-3 tracking-tight">{project.title}</h3>
                                <p className="text-base text-textSecondary mb-10 leading-relaxed max-w-sm">{project.description}</p>

                                {/* Footer: Icons & Button */}
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex gap-2">
                                        {project.icons.map((Icon, i) => (
                                            <div key={i} className="w-10 h-10 rounded-xl bg-surface border border-white/5 flex items-center justify-center text-textSecondary shadow-inner transition-colors group-hover:border-white/10">
                                                <Icon size={18} />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="relative group/btn">
                                        {/* Tooltip */}
                                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-surface/90 backdrop-blur-md border border-white/10 text-white text-xs py-1.5 px-3 rounded-lg opacity-0 group-hover/btn:opacity-100 group-hover/btn:-translate-y-2 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl font-medium tracking-wide z-20">
                                            View Live
                                        </div>

                                        <motion.a
                                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                                            whileTap={{ scale: 0.95 }}
                                            href={project.liveUrl || "#"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-full bg-surface border border-white/5 flex items-center justify-center text-textSecondary transition-colors group-hover:text-white group-hover/btn:border-white/20 group-hover/btn:text-white"
                                            aria-label="View Project"
                                        >
                                            <Navigation size={18} className="rotate-45" />
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
