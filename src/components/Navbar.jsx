import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const links = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150; // Offset for navbar height

            const sections = links.map(link => link.href.substring(1));
            let current = 'home';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    if (scrollPosition >= offsetTop) {
                        current = section;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once to set initial state

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (e, href) => {
        e.preventDefault();
        setIsMobileMenuOpen(false); // Close menu on click
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(href.substring(1));
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={`fixed top-6 left-0 right-0 mx-auto z-50 w-[90%] md:w-[70%] lg:w-[50%] max-w-4xl bg-[#13141C]/80 backdrop-blur-xl border border-white/5 shadow-2xl transition-all duration-300 flex flex-col ${isMobileMenuOpen ? 'rounded-3xl p-6' : 'rounded-full px-6 py-2.5'}`}
        >
            <div className="flex items-center justify-between w-full">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-xl font-bold cursor-pointer tracking-tight z-10 flex-shrink-0"
                    onClick={(e) => scrollTo(e, '#home')}
                >
                    <span className="text-white">Suresh</span>
                    <span className="text-[#00E5FF]">.dev</span>
                </motion.div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-gray-300 hover:text-white transition-colors z-10 p-1"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-1 z-10">
                    {links.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollTo(e, link.href)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-5 py-2 text-[13px] font-medium tracking-wide transition-all duration-300 rounded-full ${isActive
                                        ? 'bg-[#2A2B38]/80 text-white border border-white/10 shadow-[0_0_15px_rgba(162,119,255,0.15)]'
                                        : 'text-gray-400 hover:text-white border border-transparent'
                                    }`}
                            >
                                {link.name}
                            </motion.a>
                        );
                    })}
                </div>
            </div>

            {/* Mobile Links */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        className="md:hidden flex flex-col items-center gap-2 overflow-hidden w-full"
                    >
                        {links.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollTo(e, link.href)}
                                    className={`w-full text-center px-4 py-3 text-sm font-medium transition-all duration-300 rounded-xl ${isActive
                                            ? 'bg-[#2A2B38]/80 text-white border border-white/10 shadow-[0_0_15px_rgba(162,119,255,0.15)]'
                                            : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
