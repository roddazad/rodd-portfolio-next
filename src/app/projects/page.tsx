'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiNodedotjs, SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb, SiPostgresql, SiDocker } from 'react-icons/si';
import ProjectCard from '@/components/Projects/ProjectCard';
import ProjectModal from '@/components/Projects/ProjectModal';

// Sample project data - replace with your actual projects
const categories = ['All', 'Frontend', 'Full Stack', 'AI/ML'];

const allProjects = [
  {
    id: '1',
    title: 'ByteBattle',
    description: 'An interactive quiz application designed to assess and enhance users\' JavaScript skills through gamified learning.',
    image: '/projects/bytebattle.png',
    result: 'Interactive coding quiz platform with gamified learning experience',
    techStack: [
      { icon: SiNextdotjs, name: 'Next.js' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiTailwindcss, name: 'Tailwind CSS' },
    ],
    category: 'Frontend',
    demoUrl: 'https://nesters-bytebattle-quiz-app-eta.vercel.app/',
    repoUrl: 'https://github.com/codedpro/BYTE-BATTLE',
  },
  {
    id: '2',
    title: 'SaaSify',
    description: 'A professional SaaS landing page showcasing modular architecture and animated user experience for team collaboration tools.',
    image: '/projects/saasify.png',
    result: 'Modern SaaS landing page with engaging animations and modular design',
    techStack: [
      { icon: SiNextdotjs, name: 'Next.js' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiTailwindcss, name: 'Tailwind CSS' },
    ],
    category: 'Frontend',
    demoUrl: 'https://nesters-saas-landing-page.vercel.app/',
    repoUrl: 'https://github.com/codedpro/SaaSify',
  },
  {
    id: '3',
    title: 'Donezo',
    description: 'A clean, functional dashboard designed to organize tasks and boost team productivity through intuitive UI.',
    image: '/projects/donezo.png',
    result: 'Efficient task management dashboard with intuitive user interface',
    techStack: [
      { icon: SiNextdotjs, name: 'Next.js' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiTailwindcss, name: 'Tailwind CSS' },
    ],
    category: 'Frontend',
    demoUrl: 'https://nesters-donezo-landing-delta.vercel.app/',
    repoUrl: 'https://github.com/codedpro/Donezo',
  },
  {
    id: '4',
    title: 'NorthernAI Robotics',
    description: 'A sleek, modern front-end for a high-tech robotics firm, emphasizing innovation and clean design.',
    image: '/projects/northernai.png',
    result: 'Professional corporate landing page showcasing robotics innovation',
    techStack: [
      { icon: SiNextdotjs, name: 'Next.js' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiTailwindcss, name: 'Tailwind CSS' },
    ],
    category: 'Frontend',
    demoUrl: 'https://nesters-ai-robotics-landing-page.vercel.app/',
    repoUrl: 'https://github.com/codedpro/NorthenAI---Robotics',
  },
  {
    id: '5',
    title: 'KidLearn',
    description: 'A vibrant educational site aimed at making learning fun and interactive for kids with colorful design and modular content.',
    image: '/projects/kidlearn.png',
    result: 'Engaging educational platform for children with interactive content',
    techStack: [
      { icon: SiNextdotjs, name: 'Next.js' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiTailwindcss, name: 'Tailwind CSS' },
    ],
    category: 'Frontend',
    demoUrl: 'https://nesters-kidlearn-landing-two.vercel.app/',
    repoUrl: 'https://github.com/codedpro/Kidlearn',
  },
  {
    id: '6',
    title: 'Pixel Galaxy',
    description: 'A cutting-edge platform for multilingual AI-powered image creation with intuitive UX and fast performance.',
    image: '/projects/aiuniverse.png',
    result: 'Advanced AI image generation platform with multilingual support',
    techStack: [
      { icon: SiReact, name: 'React.js' },
      { icon: SiNodedotjs, name: 'Node.js' },
      { icon: SiTailwindcss, name: 'Tailwind CSS' },
    ],
    category: 'AI/ML',
    demoUrl: 'https://main-universe.vercel.app/',
    repoUrl: 'https://github.com/codedpro/Pixel-Galaxy',
  },
];

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