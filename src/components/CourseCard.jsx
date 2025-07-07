import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiClock, FiTrendingUp, FiDollarSign, FiArrowRight } = FiIcons;

const CourseCard = ({ course }) => {
  const getStreamColor = (stream) => {
    const colors = {
      science: 'bg-blue-100 text-blue-800',
      commerce: 'bg-green-100 text-green-800',
      arts: 'bg-purple-100 text-purple-800',
      technical: 'bg-orange-100 text-orange-800',
      creative: 'bg-pink-100 text-pink-800'
    };
    return colors[stream] || 'bg-gray-100 text-gray-800';
  };

  const getSalaryColor = (salary) => {
    if (salary.includes('5-15') || salary.includes('10-25')) return 'text-green-600';
    if (salary.includes('3-8') || salary.includes('4-12')) return 'text-blue-600';
    return 'text-gray-600';
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-600">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStreamColor(course.stream)}`}>
            {course.stream.charAt(0).toUpperCase() + course.stream.slice(1)}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-3">{course.description}</p>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiClock} className="text-gray-400" />
            <span className="text-sm text-gray-600">Duration: {course.duration}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiDollarSign} className="text-gray-400" />
            <span className={`text-sm font-medium ${getSalaryColor(course.averageSalary)}`}>
              ₹{course.averageSalary} LPA
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiTrendingUp} className="text-gray-400" />
            <span className="text-sm text-gray-600">Growth: {course.growthRate}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {course.keySkills.slice(0, 3).map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              {skill}
            </span>
          ))}
          {course.keySkills.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              +{course.keySkills.length - 3} more
            </span>
          )}
        </div>
        
        <Link
          to={`/course/${course.id}`}
          className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium"
        >
          <span>Learn More</span>
          <SafeIcon icon={FiArrowRight} className="text-sm" />
        </Link>
      </div>
    </motion.div>
  );
};

export default CourseCard;