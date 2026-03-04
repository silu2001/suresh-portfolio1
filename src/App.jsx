import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
    return (
        <div className="font-sans text-gray-800 bg-white selection:bg-[#ffb8b8] selection:text-white overflow-x-hidden">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
        </div>
    );
};

export default App;
