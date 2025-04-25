import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand/Logo Section */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-2">Newsmonk</h2>
            <p className="text-gray-400">
              Your trusted source for the latest news and updates.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/trending" className="text-gray-400 hover:text-white transition-colors">
                  Trending
                </a>
              </li>
              <li>
                <a href="/bookmarked" className="text-gray-400 hover:text-white transition-colors">
                  Bookmarks
                </a>
              </li>
              <li>
                <a href="/account" className="text-gray-400 hover:text-white transition-colors">
                  Account
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: </li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 123 News Street, Media City</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-700" />

        {/* Copyright & Creator Info */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Newsmonk. All rights reserved.</p>
          <p>
            Made by{' '}
            <a
              href="https://github.com/CodeFusionEhsan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Ehsan Saleem
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;