'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter, FaDatabase } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb, SiPostgresql } from 'react-icons/si';

const techStack = [
  { icon: SiReact, name: 'React' },
  { icon: SiNodedotjs, name: 'Node.js' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiTailwindcss, name: 'Tailwind' },
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiMongodb, name: 'MongoDB' },
  { icon: SiPostgresql, name: 'PostgreSQL' },
  { icon: FaDatabase, name: 'SQL/NoSQL' },
];

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Background animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient" />
      
      {/* Content container */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Full-Stack Developer
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Turning complex problems into clean, scalable solutions
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              10+ years building fast, secure, and maintainable web applications.
              Specializing in React, Node.js, and cloud architecture.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="#projects"
                className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-lg border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-6 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </motion.div>

            {/* Tech Stack */}
            <motion.div 
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-gray-800 shadow-md"
                >
                  <tech.icon className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {tech.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Profile image */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" />
              <div className="absolute inset-2 rounded-full overflow-hidden bg-white dark:bg-gray-800">
                <Image
                  src="/profile.jpg"
                  alt="Rodd Azad"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 