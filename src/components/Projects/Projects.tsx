'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiNodedotjs, SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb, SiPostgresql, SiDocker, SiPython, SiDjango } from 'react-icons/si';
import ProjectCarousel from './ProjectCarousel';
import ProjectModal from './ProjectModal';

// Sample project data - replace with your actual projects
const featuredProjects = [
  {
    id: '1',
    title: 'Code Nest Platform',
    description: 'A comprehensive learning platform for developers, featuring interactive courses, real-time code execution, and personalized learning paths.',
    image: '/placeholder.svg',
    result: 'Successfully launched with 1000+ active users and 95% course completion rate',
    techStack: [
      { icon: SiReact, name: 'React' },
      { icon: SiNodedotjs, name: 'Node.js' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiMongodb, name: 'MongoDB' },
      { icon: SiDocker, name: 'Docker' },
    ],
    complexity: 'High',
    demoUrl: 'https://code-nest.dev',
    repoUrl: 'https://github.com/yourusername/code-nest',
  },
  {
    id: '2',
    title: 'E-Commerce Platform',
    description: 'A scalable e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.',
    image: '/placeholder.svg',
    result: 'Processed $1M+ in transactions with 99.9% uptime',
    techStack: [
      { icon: SiNextdotjs, name: 'Next.js' },
      { icon: SiPostgresql, name: 'PostgreSQL' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiTailwindcss, name: 'Tailwind' },
    ],
    complexity: 'High',
    demoUrl: 'https://demo-ecommerce.com',
    repoUrl: 'https://github.com/yourusername/ecommerce',
  },
  {
    id: '3',
    title: 'Task Management System',
    description: 'A collaborative task management system with real-time updates, team workspaces, and advanced reporting features.',
    image: '/placeholder.svg',
    result: 'Adopted by 50+ teams, improving productivity by 40%',
    techStack: [
      { icon: SiReact, name: 'React' },
      { icon: SiNodedotjs, name: 'Node.js' },
      { icon: SiMongodb, name: 'MongoDB' },
      { icon: SiTailwindcss, name: 'Tailwind' },
    ],
    complexity: 'Medium',
    demoUrl: 'https://task-manager-demo.com',
    repoUrl: 'https://github.com/yourusername/task-manager',
  },
  {
    id: '4',
    title: 'AI Content Generator',
    description: 'An AI-powered content generation platform that creates high-quality articles, blog posts, and social media content.',
    image: '/placeholder.svg',
    result: 'Generated 10,000+ articles with 95% user satisfaction rate',
    techStack: [
      { icon: SiPython, name: 'Python' },
      { icon: SiDjango, name: 'Django' },
      { icon: SiReact, name: 'React' },
      { icon: SiPostgresql, name: 'PostgreSQL' },
    ],
    complexity: 'High',
    demoUrl: 'https://ai-content-demo.com',
    repoUrl: 'https://github.com/yourusername/ai-content',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof featuredProjects[0] | null>(null);

  const handleLearnMore = (project: typeof featuredProjects[0]) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A showcase of my most impactful work, demonstrating expertise in full-stack development
            and innovative problem-solving.
          </p>
        </motion.div>

        <ProjectCarousel
          projects={featuredProjects}
          onLearnMore={handleLearnMore}
        />

        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
} 