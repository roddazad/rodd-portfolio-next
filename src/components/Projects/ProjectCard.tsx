'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  result: string;
  techStack: Array<{
    icon: React.ComponentType<{ className?: string }>;
    name: string;
  }>;
  demoUrl?: string;
  repoUrl?: string;
  onLearnMore: () => void;
}

export default function ProjectCard({
  title,
  description,
  image,
  result,
  techStack,
  demoUrl,
  repoUrl,
  onLearnMore,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
    >
      {/* Project Image */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105 opacity-60"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        
        {/* Title Overlay */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <h3 className="text-2xl font-bold text-white text-center drop-shadow-lg">
            {title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6 text-white">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-3">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-1 px-2 py-1 bg-gray-700 rounded-full text-sm"
            >
              <tech.icon className="w-4 h-4" />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

        <p className="text-gray-300 mb-4 flex-grow">{description}</p>
        
        {/* Result Highlight */}
        <div className="mb-4 p-3 bg-gray-700/50 rounded-lg">
          <p className="text-sm text-blue-400">{result}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mt-auto">
          <button
            onClick={onLearnMore}
            className="px-4 py-2 bg-transparent border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors"
          >
            Read More
          </button>
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-transparent border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors inline-flex items-center gap-2"
            >
              <FaGithub className="w-4 h-4" />
              View Code
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center gap-2"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
} 