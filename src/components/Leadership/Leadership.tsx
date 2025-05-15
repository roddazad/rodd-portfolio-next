'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaUsers } from 'react-icons/fa';
import Image from 'next/image';

const achievements = [
  {
    icon: FaUsers,
    title: 'Team Leadership',
    description: 'Led a team of 5 developers in migrating a legacy PHP application to Next.js, resulting in 60% faster page loads and improved user experience.',
    metrics: 'Team of 5 • 6-month project • 60% performance improvement',
  },
  {
    icon: FaChartLine,
    title: 'Performance Optimization',
    description: 'Implemented Redis caching strategy that reduced API latency by 40% and improved system reliability.',
    metrics: '40% latency reduction • 99.9% uptime • 50% cost savings',
  },
  {
    icon: FaRocket,
    title: 'Entrepreneurship',
    description: 'Founded Code Nest in 2019, building a collaborative coding platform that helps developers learn and grow together.',
    metrics: 'Founded 2019 • Growing community • Active development',
  },
];

const companies = [
  {
    name: 'Code Nest',
    role: 'Founder & Lead Developer',
    period: '2019 - Present',
    logo: '/projects/logo.png',
    description: 'Building the future of collaborative coding education.',
  },
  // Add more companies as needed
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Leadership & Impact
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Driving innovation and leading teams to deliver exceptional results
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-500 rounded-lg">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {achievement.title}
                </h3>
              </div>
              <p className="text-gray-300 mb-4">{achievement.description}</p>
              <p className="text-sm text-blue-400 font-medium">
                {achievement.metrics}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Company Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Company Experience
          </h3>
          <div className="space-y-8">
            {companies.map((company) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-6 bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className="w-24 h-24 flex-shrink-0 bg-white rounded-lg overflow-hidden">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {company.name}
                      </h4>
                      <p className="text-blue-400">{company.role}</p>
                    </div>
                    <span className="text-sm text-gray-400">{company.period}</span>
                  </div>
                  <p className="text-gray-300">{company.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 