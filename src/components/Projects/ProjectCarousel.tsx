'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProjectCard from './ProjectCard';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  result: string;
  techStack: Array<{
    icon: React.ComponentType<{ className?: string }>;
    name: string;
  }>;
  complexity: string;
  demoUrl?: string;
  repoUrl?: string;
}

interface ProjectCarouselProps {
  projects: Project[];
  onLearnMore: (project: Project) => void;
}

export default function ProjectCarousel({ projects, onLearnMore }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  const updateCurrentIndex = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.offsetWidth / 3; // Since we show 3 cards on large screens
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(newIndex);
    }
  };

  const handleScroll = () => {
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    scrollTimeout.current = setTimeout(updateCurrentIndex, 100);
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth / 3;
      carouselRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth / 3;
      carouselRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollToProject = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth / 3;
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      return () => {
        carousel.removeEventListener('scroll', handleScroll);
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }
      };
    }
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
        }}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex-none w-full md:w-1/2 lg:w-1/3 p-4 snap-center"
            style={{ scrollSnapAlign: 'center' }}
          >
            <ProjectCard
              {...project}
              onLearnMore={() => !isDragging && onLearnMore(project)}
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 p-3 rounded-full bg-gray-800 text-white shadow-lg hover:bg-gray-700 transition-colors"
        aria-label="Previous project"
      >
        <FaChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 p-3 rounded-full bg-gray-800 text-white shadow-lg hover:bg-gray-700 transition-colors"
        aria-label="Next project"
      >
        <FaChevronRight className="w-5 h-5" />
      </button>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-8">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToProject(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex
                ? 'bg-blue-500'
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 