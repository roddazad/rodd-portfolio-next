'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb, SiPostgresql, SiDocker } from 'react-icons/si';
import ProjectCard from '@/components/Projects/ProjectCard';
import ProjectModal from '@/components/Projects/ProjectModal';

// Sample project data - replace with your actual projects
const allProjects = [
  // Featured Projects
  {
    id: '1',
    title: 'Code Nest Platform',
    description: 'A comprehensive learning platform for developers, featuring interactive courses, real-time code execution, and personalized learning paths.',
    image: 'https://placehold.co/600x400/2563eb/ffffff?text=Code+Nest+Platform',
    result: 'Successfully launched with 1000+ active users and 95% course completion rate',
    techStack: [
      { icon: SiReact, name: 'React' },
      { icon: SiNodedotjs, name: 'Node.js' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiMongodb, name: 'MongoDB' },
      { icon: SiDocker, name: 'Docker' },
    ],
    complexity: 'High',
    category: 'Full Stack',
    demoUrl: 'https://code-nest.dev',
    repoUrl: 'https://github.com/yourusername/code-nest',
  },
  {
    id: '2',
    title: 'E-Commerce Platform',
    description: 'A scalable e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.',
    image: 'https://placehold.co/600x400/2563eb/ffffff?text=E-Commerce+Platform',
    result: 'Processed $1M+ in transactions with 99.9% uptime',
    techStack: [
      { icon: SiNextdotjs, name: 'Next.js' },
      { icon: SiPostgresql, name: 'PostgreSQL' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiTailwindcss, name: 'Tailwind' },
    ],
    complexity: 'High',
    category: 'Full Stack',
    demoUrl: 'https://demo-ecommerce.com',
    repoUrl: 'https://github.com/yourusername/ecommerce',
  },
  // Additional Projects
  {
    id: '5',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS.',
    image: 'https://placehold.co/600x400/2563eb/ffffff?text=Portfolio',
    result: 'Achieved 100/100 Lighthouse score for performance and accessibility',
    techStack: [
      { icon: SiNextdotjs, name: 'Next.js' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiTailwindcss, name: 'Tailwind' },
    ],
    complexity: 'Medium',
    category: 'Frontend',
    demoUrl: 'https://your-portfolio.com',
    repoUrl: 'https://github.com/yourusername/portfolio',
  },
  {
    id: '6',
    title: 'Real-time Chat Application',
    description: 'A real-time chat application with end-to-end encryption and file sharing capabilities.',
    image: 'https://placehold.co/600x400/2563eb/ffffff?text=Chat+App',
    result: 'Supports 10,000+ concurrent users with sub-100ms message delivery',
    techStack: [
      { icon: SiReact, name: 'React' },
      { icon: SiNodedotjs, name: 'Node.js' },
      { icon: SiMongodb, name: 'MongoDB' },
    ],
    complexity: 'High',
    category: 'Full Stack',
    demoUrl: 'https://chat-app-demo.com',
    repoUrl: 'https://github.com/yourusername/chat-app',
  },
  // Add more projects as needed
];

const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'DevOps'];

export default function AllProjects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof allProjects[0] | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? allProjects
    : allProjects.filter(project => project.category === selectedCategory);

  const handleLearnMore = (project: typeof allProjects[0]) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            All Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my complete portfolio of projects, showcasing expertise across various technologies
            and domains.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              onLearnMore={() => handleLearnMore(project)}
            />
          ))}
        </motion.div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      </div>
    </main>
  );
} 