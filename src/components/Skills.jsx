import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const frontendSkills = [
    { name: 'React', level: 95 },
    { name: 'JavaScript', level: 92 },
    { name: 'TypeScript', level: 88 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Next.js', level: 85 },
  ];

  const animationSkills = [
    { name: 'Three.js', level: 82 },
    { name: 'React Three Fiber', level: 80 },
    { name: 'Framer Motion', level: 88 },
    { name: 'GSAP', level: 75 },
  ];

  const toolsSkills = [
    { name: 'Git', level: 90 },
    { name: 'Vite', level: 88 },
    { name: 'Webpack', level: 78 },
    { name: 'Figma', level: 85 },
    { name: 'REST APIs', level: 87 },
    { name: 'Responsive Design', level: 93 },
  ];

  const SkillBar = ({ name, level, index = 0 }) => (
    <div className="mb-6 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-200 font-medium text-sm sm:text-base">{name}</span>
        <span className="text-[#c4b5fd] text-xs sm:text-sm font-semibold">{level}%</span>
      </div>
      <div className="h-2 w-full bg-[#1e1e2d] rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-accent to-blue-500 rounded-full" 
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-24 relative z-10 px-6 sm:px-10 lg:px-20 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-400">
            Skills & Expertise
          </span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Frontend Card */}
        <div className="bg-surface/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5 shadow-2xl hover:border-accent/30 transition-colors duration-300">
          <h3 className="text-2xl font-bold text-white mb-8">Frontend</h3>
          <div className="space-y-2">
            {frontendSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} index={index} />
            ))}
          </div>
        </div>

        {/* 3D & Animation Card */}
        <div className="bg-surface/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5 shadow-2xl relative hover:border-accent/30 transition-colors duration-300">
          <h3 className="text-2xl font-bold text-white mb-8">3D & Animation</h3>
          <div className="space-y-2">
            {animationSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} index={index} />
            ))}
          </div>
        </div>

        {/* Tools & Others Card */}
        <div className="bg-surface/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5 shadow-2xl hover:border-accent/30 transition-colors duration-300">
          <h3 className="text-2xl font-bold text-white mb-8">Tools & Others</h3>
          <div className="space-y-2">
            {toolsSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
