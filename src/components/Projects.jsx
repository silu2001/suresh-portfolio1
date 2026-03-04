import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Pawsome Fetcher',
            description: 'An app that finds the best dog parks near you using playful maps.',
            tags: ['React', 'Mapbox', 'Node.js'],
            image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=600&h=400&fit=crop',
            color: 'bg-orange-100',
            shadow: 'shadow-orange-200'
        },
        {
            title: 'Study Buddies',
            description: 'A platform to match students based on their favorite snacks and study habits.',
            tags: ['Next.js', 'Firebase', 'Tailwind'],
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
            color: 'bg-purple-100',
            shadow: 'shadow-purple-200'
        },
        {
            title: 'Doodle Dashboard',
            description: 'A productivity tool disguised as a fun digital sketchbook.',
            tags: ['Vue', 'Express', 'MongoDB'],
            image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop',
            color: 'bg-green-100',
            shadow: 'shadow-green-200'
        },
    ];

    return (
        <section id="projects" className="py-24 bg-[#fff0f5]">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-[#ff4757] mb-4">My Playgrounds 🎢</h2>
                    <p className="text-xl text-[#ff6b81] max-w-2xl mx-auto">
                        Some of the fun projects I've brought to life recently.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -15, rotate: index % 2 === 0 ? 2 : -2 }}
                            className={`rounded-[2rem] overflow-hidden bg-white border-4 border-white shadow-xl ${project.shadow} transition-all duration-300`}
                        >
                            <div className="relative h-48 overflow-hidden group">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-[#ff4757]/20 group-hover:bg-transparent transition-colors duration-300" />
                            </div>

                            <div className={`p-8 ${project.color} h-full`}>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-6">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white/60 text-gray-700 font-semibold rounded-full text-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <motion.a
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        href="#"
                                        className="p-3 bg-white text-[#ff4757] rounded-full shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <ExternalLink size={20} />
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        href="#"
                                        className="p-3 bg-white text-gray-700 rounded-full shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <Github size={20} />
                                    </motion.a>
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
