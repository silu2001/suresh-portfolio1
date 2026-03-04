import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Sparkles, Heart } from 'lucide-react';

const About = () => {
    const skills = [
        { name: 'React', color: 'bg-blue-100 text-blue-500' },
        { name: 'JavaScript', color: 'bg-yellow-100 text-yellow-600' },
        { name: 'Tailwind CSS', color: 'bg-teal-100 text-teal-500' },
        { name: 'UI/UX Design', color: 'bg-purple-100 text-purple-500' },
        { name: 'Framer Motion', color: 'bg-pink-100 text-pink-500' },
        { name: 'Node.js', color: 'bg-green-100 text-green-600' },
    ];

    const cards = [
        { icon: Code2, title: 'Clean Code', desc: 'Writing readable and maintainable solutions' },
        { icon: Palette, title: 'Playful UI', desc: 'Designing interfaces that bring smiles' },
        { icon: Sparkles, title: 'Animations', desc: 'Adding life with fluid motion' },
        { icon: Heart, title: 'A11y', desc: 'Building for everyone' },
    ];

    return (
        <section id="about" className="py-24 bg-white relative">
            {/* Playful Divider Top */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -mt-[1px]">
                <svg fill="#fff0f5" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-[100%] h-[40px] rotate-180">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-[#ff4757] mb-4">About Me 🧸</h2>
                    <p className="text-xl text-[#ff6b81] max-w-2xl mx-auto">
                        I'm a frontend developer who loves turning complex problems into beautiful, intuitive, and fun user experiences.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-[#ff4757]">My Toolbox 🧰</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                                    whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 5 : -5 }}
                                    className={`px-6 py-3 rounded-full font-bold text-lg shadow-sm cursor-pointer ${skill.color}`}
                                >
                                    {skill.name}
                                </motion.div>
                            ))}
                        </div>

                        <p className="text-lg text-gray-600 mt-8 leading-relaxed">
                            When I'm not coding, you can find me sketching out new UI ideas, exploring the latest animation libraries, or petting every dog I see on the street.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {cards.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                whileHover={{ y: -10 }}
                                className="bg-[#fff0f5] p-6 rounded-3xl border-2 border-[#ffb8b8] text-center"
                            >
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm text-[#ff4757]">
                                    <card.icon size={28} />
                                </div>
                                <h4 className="font-bold text-[#ff4757] mb-2">{card.title}</h4>
                                <p className="text-sm text-[#ff6b81]">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
