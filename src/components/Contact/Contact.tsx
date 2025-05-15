'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaTimes } from 'react-icons/fa';
import { IconType } from 'react-icons';

const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/codedpro',
    color: 'hover:text-gray-300',
    bgColor: 'bg-gray-800 hover:bg-gray-700'
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/roddazad',
    color: 'hover:text-blue-400',
    bgColor: 'bg-gray-800 hover:bg-gray-700'
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    url: 'https://x.com/RoddAzad',
    color: 'hover:text-blue-400',
    bgColor: 'bg-gray-800 hover:bg-gray-700'
  }
];

const contactMethods = [
  {
    name: 'Email',
    icon: FaEnvelope,
    value: 'roddazad@gmail.com',
    url: 'mailto:roddazad@gmail.com',
    color: 'hover:text-blue-400',
    bgColor: 'bg-gray-800 hover:bg-gray-700'
  },
  {
    name: 'Phone',
    icon: FaPhone,
    value: '(425) 479-5895',
    url: 'tel:+14254795895',
    color: 'hover:text-blue-400',
    bgColor: 'bg-gray-800 hover:bg-gray-700'
  }
];

type SocialLink = {
  name: string;
  icon: IconType;
  url: string;
  color: string;
  bgColor: string;
};

type ContactMethod = {
  name: string;
  icon: IconType;
  value: string;
  url: string;
  color: string;
  bgColor: string;
};

const ContactButton = ({ item }: { item: SocialLink | ContactMethod }) => {
  const Icon = item.icon;
  
  return (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className={`flex items-center gap-3 px-6 py-4 rounded-xl ${item.bgColor} ${item.color} transition-colors duration-200`}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">
        {'value' in item ? item.value : item.name}
      </span>
    </motion.a>
  );
};

const ContactForm = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xeogvknn', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-gray-800 rounded-xl p-6 w-full max-w-lg relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-500'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-400 text-center">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function Contact() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Let&apos;s Connect
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            I&apos;m always open to discussing new opportunities and interesting projects. Whether you&apos;re looking for a developer or just want to connect, feel free to reach out!
          </p>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-16"
          >
            <button
              onClick={() => setIsFormOpen(true)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-lg font-medium transition-colors duration-200"
            >
              <FaEnvelope className="w-5 h-5" />
              Get in Touch
            </button>
          </motion.div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {contactMethods.map((method) => (
              <ContactButton key={method.name} item={method} />
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social) => (
              <ContactButton key={social.name} item={social} />
            ))}
          </div>

          {/* Additional Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-gray-400"
          >
            Available for immediate interviews and ready to discuss how I can bring value to your organization.
          </motion.p>
        </motion.div>
      </div>

      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
} 