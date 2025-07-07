import React from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiBookOpen, FiHome } = FiIcons;

const Header = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <SafeIcon icon={FiBookOpen} className="text-white text-2xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">EduPath</h1>
              <p className="text-sm text-gray-600">Your Career Guide</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
              <SafeIcon icon={FiHome} className="text-lg" />
              <span>Home</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;