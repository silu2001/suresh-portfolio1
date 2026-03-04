import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Mail } from 'lucide-react';

const Navbar = () => {
    const links = [
        { name: 'Home', icon: Home, href: '#home' },
        { name: 'About', icon: User, href: '#about' },
        { name: 'Projects', icon: Briefcase, href: '#projects' },
        { name: 'Contact', icon: Mail, href: '#contact' },
    ];

    const scrollTo = (e, href) => {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, x: "-50%" }}
            animate={{ y: 0, x: "-50%" }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/70 backdrop-blur-lg px-6 py-3 rounded-full shadow-[0_8px_30px_rgba(255,107,129,0.15)] flex gap-6 border border-white/50"
        >
            {links.map((link) => (
                <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-[#ff6b81] hover:text-[#ff4757] font-medium transition-colors p-2 rounded-full hover:bg-[#fff0f5]"
                >
                    <link.icon size={18} />
                    <span className="hidden sm:block">{link.name}</span>
                </motion.a>
            ))}
        </motion.nav>
    );
};

export default Navbar;
