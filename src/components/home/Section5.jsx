import React from 'react';
import { motion } from 'framer-motion';
import projects from '../../data/projects';
import ConstrainedBox from '../core/ConstrainedBox';
import ResponsiveBox from '../core/ResponsiveBox';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="dark:bg-gray-900 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold dark:text-white text-gray-900 mb-2">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className="flex-1 px-4 py-2 text-center text-sm font-semibold text-white bg-gray-800 hover:bg-gray-900 rounded-lg transition-colors"
            >
              GitHub
            </a>
          )}
          {project.url && (
            <a
              href={project.url}
              className="flex-1 px-4 py-2 text-center text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              View Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Section5 = ({ id = '' }) => {
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
            Featured Projects
          </h2>
          <p className="text-lg dark:text-gray-300 text-gray-600">
            Some of my recent work
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default Section5;
