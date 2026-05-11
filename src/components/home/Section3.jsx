import React from 'react';
import { motion } from 'framer-motion';
import experiences from '../../data/experiences';
import Column from '../core/Column';
import ConstrainedBox from '../core/ConstrainedBox';
import ResponsiveBox from '../core/ResponsiveBox';

const Section3 = ({ id = '' }) => {
  return (
    <ResponsiveBox
      id={id}
      classNames="dark:bg-gray-900 bg-white py-16 lg:py-24"
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
            Experience
          </h2>
          <p className="text-lg dark:text-gray-300 text-gray-600">
            My professional journey
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative mb-8 pl-8 border-l-2 border-blue-500 dark:border-blue-400"
            >
              <div className="absolute -left-4 top-0 w-6 h-6 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
              
              <div className="dark:bg-black bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold dark:text-white text-gray-900">
                    {exp.designation}
                  </h3>
                  {exp.isCurrentJob && (
                    <span className="px-3 py-1 bg-green-500 text-white text-xs rounded-full">
                      Current
                    </span>
                  )}
                </div>
                
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  {exp.company}
                </p>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {exp.startDate} - {exp.endDate || 'Present'} • {exp.location}
                </p>
                
                <ul className="space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-gray-700 dark:text-gray-300 text-sm flex items-start">
                      <span className="mr-2 text-blue-500">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default Section3;
