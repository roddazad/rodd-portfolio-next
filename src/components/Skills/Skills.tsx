'use client';

import { motion } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiDjango, 
  SiAmazon, SiDocker, SiGithubactions, SiVercel, SiGit,
  SiFramer, SiRedux, SiJest, SiCypress, SiPrisma
} from 'react-icons/si';
import { FaJs } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces',
    skills: [
      { name: 'React', icon: SiReact, level: 95, category: 'Most Used' },
      { name: 'Next.js', icon: SiNextdotjs, level: 90, category: 'Most Used' },
      { name: 'TypeScript', icon: SiTypescript, level: 85, category: 'Most Used' },
      { name: 'JavaScript', icon: FaJs, level: 90, category: 'Most Used' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 95, category: 'Most Used' },
      { name: 'Framer Motion', icon: SiFramer, level: 80, category: 'Familiar' },
      { name: 'Redux', icon: SiRedux, level: 85, category: 'Familiar' },
    ],
  },
  {
    title: 'Backend Development',
    description: 'Creating robust and scalable server-side applications',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 90, category: 'Most Used' },
      { name: 'Express.js', icon: SiExpress, level: 85, category: 'Most Used' },
      { name: 'MongoDB', icon: SiMongodb, level: 85, category: 'Most Used' },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 80, category: 'Most Used' },
      { name: 'Django', icon: SiDjango, level: 75, category: 'Familiar' },
      { name: 'Prisma', icon: SiPrisma, level: 80, category: 'Familiar' },
    ],
  },
  {
    title: 'DevOps & Cloud',
    description: 'Deploying and maintaining applications in the cloud',
    skills: [
      { name: 'AWS', icon: SiAmazon, level: 80, category: 'Most Used' },
      { name: 'Docker', icon: SiDocker, level: 75, category: 'Familiar' },
      { name: 'GitHub Actions', icon: SiGithubactions, level: 85, category: 'Most Used' },
      { name: 'Vercel', icon: SiVercel, level: 90, category: 'Most Used' },
      { name: 'Git', icon: SiGit, level: 90, category: 'Most Used' },
    ],
  },
  {
    title: 'Testing & Quality',
    description: 'Ensuring code quality and reliability',
    skills: [
      { name: 'Jest', icon: SiJest, level: 85, category: 'Most Used' },
      { name: 'Cypress', icon: SiCypress, level: 80, category: 'Familiar' },
    ],
  },
];

const ProgressBar = ({ level, category }: { level: number; category: string }) => {
  const colorClass = category === 'Most Used' 
    ? 'bg-blue-500' 
    : 'bg-purple-500';

  return (
    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`h-full ${colorClass} rounded-full`}
      />
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                {category.title}
              </h3>
              <p className="text-gray-400 mb-6">
                {category.description}
              </p>
              
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <skill.icon className="w-6 h-6 text-blue-400" />
                        <span className="text-gray-200 font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className={`text-sm font-medium ${
                        skill.category === 'Most Used' 
                          ? 'text-blue-400' 
                          : 'text-purple-400'
                      }`}>
                        {skill.category}
                      </span>
                    </div>
                    <ProgressBar level={skill.level} category={skill.category} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 