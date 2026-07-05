import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';
import HeroImg from '../assets/Images/Hero1.png';

const Hero = () => {
    return (
        <section id="home" className="hero-container">
            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.h2
                    className="hero-subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Hello, I'm
                </motion.h2>

                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    Adithya Kumar
                </motion.h1>

                <motion.p
                    className="hero-description"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                >
                    A passionate Software Engineer & Full Stack Developer crafting modern, user-friendly web experiences.
                </motion.p>

                <motion.div
                    className="hero-buttons"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                >
                    <a href="#projects" className="btn btn-primary">View My Work</a>
                    <a href="#contact" className="btn btn-outline">Contact Me</a>
                </motion.div>
            </motion.div>

            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
                <span>Scroll Down</span>
                <div style={{ fontSize: '24px', marginTop: '5px' }}>↓</div>
            </motion.div>
        </section>
    );
};

export default Hero;
