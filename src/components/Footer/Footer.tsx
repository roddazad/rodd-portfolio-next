'use client';

import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';
import { SiNextdotjs, SiVercel } from 'react-icons/si';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://github.com/roddazad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/roddazad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/roddazad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
        </div>

        {/* Tech Stack */}
        <div className="flex justify-center items-center space-x-4 text-gray-500 text-sm mb-6">
          <span>Built with</span>
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <SiNextdotjs className="w-5 h-5" />
          </a>
          <span>and</span>
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <SiVercel className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Rodd Azad. All rights reserved.
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
          aria-label="Back to top"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
} 