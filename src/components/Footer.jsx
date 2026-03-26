import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Phone, MessageCircle, Mail, Send, Globe, ArrowUp } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative border-t border-white/5 mt-20 pt-6 pb-6 z-10 w-full overflow-hidden">
            {/* Large Background Word */}
            <div className="absolute right-10 bottom-0 pointer-events-none select-none flex justify-end items-end z-[-1] w-full h-full opacity-50">
                <span className="text-[8vw] leading-[0.75] font-black text-white/[0.03] tracking-tighter mr-[-2%]">
                    CONTACT
                </span>
            </div>

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-5">
                {/* Copyright Text */}
                <p className="text-textSecondary/80 text-sm font-medium whitespace-nowrap">
                    © {new Date().getFullYear()} Suresh. All rights reserved.
                </p>
                
                {/* Social Row & Back to Top */}
                <div className="flex items-center gap-4 md:gap-8 flex-col sm:flex-row w-full md:w-auto mt-2 md:mt-0">
                    <div className="flex gap-2 sm:gap-3 flex-wrap justify-center">
                        {[Github, Linkedin, Instagram, Phone, MessageCircle, Mail, Send, Globe].map((Icon, idx) => (
                            <motion.a
                                key={idx}
                                href="#"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 sm:w-11 sm:h-11 bg-surface/40 backdrop-blur-md text-textSecondary border border-white/5 rounded-xl flex items-center justify-center hover:bg-surfaceHover transition-all hover:text-white hover:border-white/20 shadow-xl"
                            >
                                <Icon size={18} strokeWidth={1.5} />
                            </motion.a>
                        ))}
                    </div>

                    {/* Back to top button */}
                    <motion.button 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-11 h-11 shrink-0 rounded-full border border-accent/40 text-accent flex items-center justify-center shadow-[0_0_20px_rgba(196,181,253,0.1)] bg-surface/80 backdrop-blur-md hover:bg-accent hover:text-white transition-all mx-auto sm:ml-auto md:ml-0 hidden md:flex"
                        aria-label="Back to top"
                    >
                        <ArrowUp size={20} strokeWidth={2} />
                    </motion.button>
                    
                    {/* Mobile Back to top button */}
                    <motion.button 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 shrink-0 rounded-full border border-accent/40 text-accent flex items-center justify-center shadow-[0_0_20px_rgba(196,181,253,0.1)] bg-surface/80 backdrop-blur-md hover:bg-accent hover:text-white transition-all mt-4 md:hidden"
                        aria-label="Back to top"
                    >
                        <ArrowUp size={16} strokeWidth={2} />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
