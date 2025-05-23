'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiNodedotjs, SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb, SiFramer, SiVite, SiOpenai, SiExpress } from 'react-icons/si';
import ProjectCarousel from './ProjectCarousel';
import ProjectModal from './ProjectModal';

// Sample project data - replace with your actual projects
const featuredProjects = [
  {
    id: '1',
    title: 'ByteBattle',
    description: 'An interactive quiz application designed to assess and enhance users\' JavaScript skills through gamified learning.',
    image: '/projects/bytebattle.png',
    result: 'Interactive coding quiz platform with gamified learning experience',
    complexity: 'Advanced',
    techStack: [
      { icon: SiNextdotjs, name: 'Next.js' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiTailwindcss, name: 'Tailwind CSS' },
      { icon: SiReact, name: 'React' },
      { icon: SiMongodb, name: 'MongoDB' },
    ],
    demoUrl: 'https://nesters-bytebattle-quiz-app-eta.vercel.app/',
    repoUrl: 'https://github.com/codedpro/BYTE-BATTLE',
  },
  {
    id: '2',
    title: 'SaaSify',
    description: 'A professional SaaS landing page showcasing modular architecture and animated user experience for team collaboration tools.',
    image: '/projects/saasify.png',
    result: 'Modern SaaS landing page with engaging animations and modular design',
    complexity: 'Intermediate',
    techStack: [
      { icon: SiNextdotjs, name: 'Next.js' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiTailwindcss, name: 'Tailwind CSS' },
      { icon: SiReact, name: 'React' },
      { icon: SiFramer, name: 'Framer Motion' },
    ],
    demoUrl: 'https://nesters-saas-landing-page.vercel.app/',
    repoUrl: 'https://github.com/codedpro/SaaSify',
  },
  {
    id: '3',
    title: 'Donezo',
    description: 'A clean, functional dashboard designed to organize tasks and boost team productivity through intuitive UI.',
    image: '/projects/donezo.png',
    result: 'Efficient task management dashboard with intuitive user interface',
    complexity: 'Advanced',
    techStack: [
      { icon: SiNextdotjs, name: 'Next.js' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiTailwindcss, name: 'Tailwind CSS' },
      { icon: SiReact, name: 'React' },
      { icon: SiFramer, name: 'Framer Motion' },
    ],
    demoUrl: 'https://nesters-donezo-landing-delta.vercel.app/',
    repoUrl: 'https://github.com/codedpro/Donezo',
  },
  {
    id: '4',
    title: 'NorthernAI Robotics',
    description: 'A sleek, modern front-end for a high-tech robotics firm, emphasizing innovation and clean design.',
    image: '/projects/northernai.png',
    result: 'Professional corporate landing page showcasing robotics innovation',
    complexity: 'Intermediate',
    techStack: [
      { icon: SiNextdotjs, name: 'Next.js' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiTailwindcss, name: 'Tailwind CSS' },
      { icon: SiReact, name: 'React' },
      { icon: SiFramer, name: 'Framer Motion' },
    ],
    demoUrl: 'https://nesters-ai-robotics-landing-page.vercel.app/',
    repoUrl: 'https://github.com/codedpro/NorthenAI---Robotics',
  },
  {
    id: '5',
    title: 'KidLearn',
    description: 'A vibrant educational site aimed at making learning fun and interactive for kids with colorful design and modular content.',
    image: '/projects/kidlearn.png',
    result: 'Engaging educational platform for children with interactive content',
    complexity: 'Advanced',
    techStack: [
      { icon: SiNextdotjs, name: 'Next.js' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiTailwindcss, name: 'Tailwind CSS' },
      { icon: SiReact, name: 'React' },
      { icon: SiFramer, name: 'Framer Motion' },
      { icon: SiNodedotjs, name: 'Node.js' },
      { icon: SiExpress, name: 'Express.js' },
      { icon: SiMongodb, name: 'MongoDB' },
    ],
    demoUrl: 'https://nesters-kidlearn-landing-two.vercel.app/',
    repoUrl: 'https://github.com/codedpro/Kidlearn',
  },
  {
    id: '6',
    title: 'Pixel Galaxy',
    description: 'A cutting-edge platform for multilingual AI-powered image creation with intuitive UX and fast performance.',
    image: '/projects/aiuniverse.png',
    result: 'Advanced AI image generation platform with multilingual support',
    complexity: 'Advanced',
    techStack: [
      { icon: SiReact, name: 'React' },
      { icon: SiVite, name: 'Vite' },
      { icon: SiTailwindcss, name: 'Tailwind CSS' },
      { icon: SiNodedotjs, name: 'Node.js' },
      { icon: SiExpress, name: 'Express.js' },
      { icon: SiMongodb, name: 'MongoDB' },
      { icon: SiOpenai, name: 'OpenAI API' },
    ],
    demoUrl: 'https://main-universe.vercel.app/',
    repoUrl: 'https://github.com/codedpro/Pixel-Galaxy',
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