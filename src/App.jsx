import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { AntiGravityCanvas } from './components/ui/particle-effect-for-hero';

const App = () => {
    return (
        <>
            <AntiGravityCanvas />
            <div className="font-sans text-textPrimary selection:bg-accent selection:text-white overflow-x-hidden min-h-screen">
                <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
        </>
    );
};

export default App;
