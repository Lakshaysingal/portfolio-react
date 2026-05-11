import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ConstrainedBox from '../core/ConstrainedBox';
import ResponsiveBox from '../core/ResponsiveBox';
import { socialLinks } from '../../data/socialLinks';

const Section6 = ({ id = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setSubmitStatus(null); // Clear status when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        setSubmitStatus('error');
        alert(data.message || 'Error submitting form');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      alert('Error submitting form. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ResponsiveBox
      id={id}
      classNames="dark:bg-black bg-gray-50 py-16 lg:py-24"
    >
      <ConstrainedBox classNames="px-4 flex-col max-w-3xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg dark:text-gray-300 text-gray-600">
            Let's connect and create something amazing together
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          onSubmit={handleSubmit}
          className="dark:bg-gray-900 bg-white p-8 rounded-xl shadow-lg mb-12"
        >
          <div className="mb-6">
            <label className="block text-sm font-medium dark:text-white text-gray-900 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 dark:bg-gray-800 bg-gray-50 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Your name"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium dark:text-white text-gray-900 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 dark:bg-gray-800 bg-gray-50 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium dark:text-white text-gray-900 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-2 dark:bg-gray-800 bg-gray-50 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Your message here..."
            ></textarea>
          </div>

          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 text-green-900 dark:text-green-100 rounded-lg">
              ✓ Thank you! Your message has been sent successfully. You'll receive a confirmation email shortly.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-900 dark:text-red-100 rounded-lg">
              ✕ Error sending message. Please try again later.
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-colors"
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">Or connect with me on social media</p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => {
              const iconMap = {
                github: faGithub,
                linkedin: faLinkedin,
                twitter: faTwitter,
                email: faEnvelope,
              };
              return (
                <a
                  key={link.id}
                  href={link.url}
                  className="p-3 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors"
                  aria-label={link.name}
                >
                  <FontAwesomeIcon icon={iconMap[link.id]} size="2x" className="dark:text-white text-gray-900" />
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2026 Lakshay Singal. All rights reserved.
          </p>
        </motion.div>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default Section6;
