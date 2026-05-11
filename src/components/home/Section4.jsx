import React from 'react';
import { motion } from 'framer-motion';
import skills from '../../data/skills';
import Column from '../core/Column';
import ConstrainedBox from '../core/ConstrainedBox';
import ResponsiveBox from '../core/ResponsiveBox';

const Section4 = ({ id = '' }) => {
  return (
    <ResponsiveBox
      id={id}
      classNames="dark:bg-black bg-gray-50 py-16 lg:py-24"
    >
      <ConstrainedBox classNames="px-4 flex-col">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-gray-900 mb-4">
            Skills
          </h2>
          <p className="text-lg dark:text-gray-300 text-gray-600">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div>
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: groupIndex * 0.1, duration: 0.6 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-8">
                {skillGroup.title}
              </h3>
              
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: skillIndex * 0.05, duration: 0.4 }}
                    className="flex flex-col items-center justify-center p-4 dark:bg-gray-900 bg-white rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <img 
                      src={skill.icon} 
                      alt={skill.title}
                      className="w-12 h-12 mb-3 object-contain"
                      onError={(e) => e.target.style.display = 'none'}
                    />
                    <span className="text-sm font-medium dark:text-white text-gray-900 text-center">
                      {skill.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default Section4;
