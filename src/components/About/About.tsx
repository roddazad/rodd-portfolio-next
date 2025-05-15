'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaHeart, FaChess, FaBook, FaGamepad } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            About Me
          </h2>

          {/* Professional Value Proposition */}
          <div className="bg-gray-800 rounded-xl p-8 mb-12 shadow-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                I'm a full-stack developer and founder of CodeNest, specializing in crafting high-performance digital experiences. With a Master's in Electrical Engineering from UW and currently pursuing a Master's in Information Technology (Cloud Computing) at ASU, I bridge the gap between technical excellence and human-centered design.
              </p>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                My approach combines technical expertise with a deep understanding of business needs. I specialize in optimizing React applications for >90 Lighthouse scores and building scalable systems that evolve with your business.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                At CodeNest, we don't just build websites — we create digital homes where brands live, connect, and grow. Every project is an opportunity to blend clean code, beautiful UI, and meaningful impact.
              </p>
            </motion.div>
          </div>

          {/* Personal Touch */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <FaHeart className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Family First</h3>
              </div>
              <p className="text-gray-300">
                When I'm not coding, I'm a proud father to a 9-year-old son and a loving husband. Our family time is filled with chess matches, board games, and shared adventures in reading and learning.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <FaRocket className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Beyond the Code</h3>
              </div>
              <p className="text-gray-300">
                From late-night coding sessions in 2019 to building a team of passionate developers, my journey has been about creating technology that feels human. Every project is a chance to blend technical excellence with genuine care.
              </p>
            </motion.div>
          </div>

          {/* Fun Facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full">
              <span className="text-blue-400 font-medium">Fun Fact:</span>
              <span className="text-gray-300">My secret superpower? Creating delicious dishes that never fail to surprise my wife, and my legendary BBQ skills that have friends always asking for the next cookout</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 