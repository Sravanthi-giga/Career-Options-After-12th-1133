import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { coursesData } from '../data/coursesData';

const { FiArrowLeft, FiClock, FiDollarSign, FiTrendingUp, FiBookOpen, FiBriefcase, FiUsers, FiAward } = FiIcons;

const CourseDetail = () => {
  const { id } = useParams();
  const course = coursesData.find(c => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Course not found</h2>
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          Return to courses
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        to="/" 
        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-8 transition-colors"
      >
        <SafeIcon icon={FiArrowLeft} />
        <span>Back to Courses</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
          <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
          <p className="text-xl opacity-90 mb-6">{course.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiClock} className="text-xl" />
              <div>
                <p className="text-sm opacity-75">Duration</p>
                <p className="font-semibold">{course.duration}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiDollarSign} className="text-xl" />
              <div>
                <p className="text-sm opacity-75">Average Salary</p>
                <p className="font-semibold">₹{course.averageSalary} LPA</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiTrendingUp} className="text-xl" />
              <div>
                <p className="text-sm opacity-75">Growth Rate</p>
                <p className="font-semibold">{course.growthRate}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiUsers} className="text-xl" />
              <div>
                <p className="text-sm opacity-75">Stream</p>
                <p className="font-semibold capitalize">{course.stream}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Key Skills */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <SafeIcon icon={FiAward} className="text-blue-600 text-xl" />
                  <h2 className="text-2xl font-bold text-gray-800">Key Skills</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {course.keySkills.map((skill, index) => (
                    <span key={index} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Eligibility */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <SafeIcon icon={FiBookOpen} className="text-green-600 text-xl" />
                  <h2 className="text-2xl font-bold text-gray-800">Eligibility</h2>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800 font-medium">{course.eligibility}</p>
                </div>
              </div>

              {/* Entrance Exams */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <SafeIcon icon={FiBookOpen} className="text-purple-600 text-xl" />
                  <h2 className="text-2xl font-bold text-gray-800">Entrance Exams</h2>
                </div>
                <div className="space-y-2">
                  {course.entranceExams.map((exam, index) => (
                    <div key={index} className="bg-purple-50 p-3 rounded-lg">
                      <p className="text-purple-800 font-medium">{exam}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Career Opportunities */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <SafeIcon icon={FiBriefcase} className="text-orange-600 text-xl" />
                  <h2 className="text-2xl font-bold text-gray-800">Career Opportunities</h2>
                </div>
                <div className="space-y-3">
                  {course.careerOpportunities.map((career, index) => (
                    <div key={index} className="bg-orange-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-orange-800 mb-1">{career.role}</h3>
                      <p className="text-orange-700 text-sm">{career.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Colleges */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <SafeIcon icon={FiAward} className="text-indigo-600 text-xl" />
                  <h2 className="text-2xl font-bold text-gray-800">Top Colleges</h2>
                </div>
                <div className="space-y-2">
                  {course.topColleges.map((college, index) => (
                    <div key={index} className="bg-indigo-50 p-3 rounded-lg">
                      <p className="text-indigo-800 font-medium">{college}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CourseDetail;