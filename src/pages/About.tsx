import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-16 mt-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
          About Me
        </h1>
        
        <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
            Nur Hasan
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            A passionate developer and gaming enthusiast who created Gamingside to bring classic games to the modern web.
            With expertise in React, TypeScript, and modern web technologies, I strive to create engaging and accessible
            gaming experiences for everyone.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Skills & Expertise
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• React & TypeScript Development</li>
              <li>• Modern Web Technologies</li>
              <li>• UI/UX Design</li>
              <li>• Game Development</li>
              <li>• Performance Optimization</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              My mission is to preserve classic games while making them accessible to modern audiences.
              Through Gamingside, I aim to combine nostalgia with modern web technologies to create
              engaging gaming experiences that can be enjoyed by players of all ages.
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 text-center">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
          >
            <span>Visit my GitHub</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
