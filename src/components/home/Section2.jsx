import React from 'react';
import { motion } from 'framer-motion';
import services from '../../data/services';
import Column from '../core/Column';
import Row from '../core/Row';
import ConstrainedBox from '../core/ConstrainedBox';
import ResponsiveBox from '../core/ResponsiveBox';

const Section2 = ({ id = '' }) => {
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
            Services
          </h2>
          <p className="text-lg dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
            I provide comprehensive software development services tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="dark:bg-gray-900 bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold dark:text-white text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {service.shortDescription}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default Section2;
