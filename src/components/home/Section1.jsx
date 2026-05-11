import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Column from '../core/Column';
import Row from '../core/Row';
import ConstrainedBox from '../core/ConstrainedBox';
import ResponsiveBox from '../core/ResponsiveBox';
import FlipWords from '../common/FlipWords';

const Section1 = ({ id = '' }) => {
  return (
    <ResponsiveBox
      id={id}
      classNames="dark:bg-gray-900 bg-white min-h-screen items-center justify-center relative overflow-hidden"
    >
      <ConstrainedBox classNames="px-4 py-8 z-20 items-center justify-center">
        <Column classNames="w-full items-center justify-center">
          {/* Hero Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center flex-wrap justify-center gap-2"
          >
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl dark:text-white text-gray-900 font-bold text-center">
              Hi there, I am
            </p>
            <FlipWords
              words={['Lakshay Singal.', 'a Developer.', 'Creative.']}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl dark:text-blue-500 text-blue-600 font-bold"
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base md:text-lg mt-4 dark:text-gray-300 text-gray-600 text-center"
          >
            Software Devloper 💻 | Building Amazing Web Experiences 🚀
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="gap-4 mt-12 lg:mt-16 flex flex-col md:flex-row"
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg font-semibold transition-colors"
            >
              View My Work
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-12 lg:mt-16 w-full flex flex-col items-center"
          >
            <p className="text-base font-medium dark:text-white text-gray-900">Follow me here</p>
            <Row classNames="mt-4 gap-6 justify-center">
              <a href="https://github.com/Lakshaysingal " className="dark:text-gray-300 hover:text-blue-600 transition-colors">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/lakshay-singal-409085247/" className="dark:text-gray-300 hover:text-blue-600 transition-colors">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://x.com/Lakshay__singal" className="dark:text-gray-300 hover:text-blue-600 transition-colors">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </Row>
          </motion.div>
        </Column>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default Section1;
