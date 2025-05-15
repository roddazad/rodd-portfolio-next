'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaRocket, FaUsers, FaChartLine, FaCode } from 'react-icons/fa';

const experiences = [
  {
    company: 'CodeNest',
    role: 'Senior Full Stack Developer',
    period: '2019 - Present',
    logo: '/projects/logo.png',
    achievements: [
      {
        icon: FaUsers,
        title: 'Team Leadership',
        description: 'Led a team of 5 developers in migrating legacy PHP applications to modern Next.js architecture, improving code maintainability and developer experience.',
        metrics: 'Successfully migrated 3 major applications with zero downtime'
      },
      {
        icon: FaChartLine,
        title: 'Performance Optimization',
        description: 'Implemented Redis caching strategy that reduced API latency by 40% and improved overall application response time.',
        metrics: '40% reduction in API latency, 25% improvement in user experience metrics'
      },
      {
        icon: FaCode,
        title: 'Technical Innovation',
        description: 'Architected and implemented a microservices-based infrastructure that improved system scalability and reduced deployment time.',
        metrics: '60% faster deployment cycles, 99.9% system uptime'
      },
      {
        icon: FaRocket,
        title: 'Business Impact',
        description: 'Spearheaded the adoption of modern development practices and tools, resulting in increased team productivity and code quality.',
        metrics: '30% increase in team velocity, 50% reduction in critical bugs'
      }
    ]
  }
];

const AchievementCard = ({ achievement }: { achievement: typeof experiences[0]['achievements'][0] }) => {
  const Icon = achievement.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-blue-500/10 rounded-lg">
          <Icon className="w-6 h-6 text-blue-400" />
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-bold text-white mb-2">
            {achievement.title}
          </h4>
          <p className="text-gray-300 mb-3">
            {achievement.description}
          </p>
          <div className="inline-block px-3 py-1 bg-blue-500/10 rounded-full">
            <span className="text-sm font-medium text-blue-400">
              {achievement.metrics}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Senior roles and leadership positions with measurable impact
          </p>
        </motion.div>

        {experiences.map((experience, index) => (
          <motion.div
            key={experience.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-16"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
              <div className="relative w-24 h-24 md:w-28 md:h-28 bg-white rounded-full p-3 shadow-lg overflow-hidden">
                <Image
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {experience.company}
                </h3>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-gray-300">
                  <span className="text-xl font-medium text-blue-400">
                    {experience.role}
                  </span>
                  <span className="hidden md:inline">•</span>
                  <span>{experience.period}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experience.achievements.map((achievement, idx) => (
                <AchievementCard key={idx} achievement={achievement} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 