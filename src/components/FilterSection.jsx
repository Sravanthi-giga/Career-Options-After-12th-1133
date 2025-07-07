import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiFilter } = FiIcons;

const FilterSection = ({ 
  selectedStream, 
  setSelectedStream, 
  selectedDuration, 
  setSelectedDuration, 
  searchTerm, 
  setSearchTerm 
}) => {
  const streams = [
    { value: 'all', label: 'All Streams' },
    { value: 'science', label: 'Science' },
    { value: 'commerce', label: 'Commerce' },
    { value: 'arts', label: 'Arts' },
    { value: 'technical', label: 'Technical' },
    { value: 'creative', label: 'Creative' }
  ];

  const durations = [
    { value: 'all', label: 'All Durations' },
    { value: '1 year', label: '1 Year' },
    { value: '2 years', label: '2 Years' },
    { value: '3 years', label: '3 Years' },
    { value: '4 years', label: '4 Years' },
    { value: '5+ years', label: '5+ Years' }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="flex items-center space-x-2 mb-6">
        <SafeIcon icon={FiFilter} className="text-blue-600 text-xl" />
        <h2 className="text-xl font-semibold text-gray-800">Filter Courses</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Search */}
        <div className="relative">
          <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        {/* Stream Filter */}
        <select
          value={selectedStream}
          onChange={(e) => setSelectedStream(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {streams.map(stream => (
            <option key={stream.value} value={stream.value}>
              {stream.label}
            </option>
          ))}
        </select>
        
        {/* Duration Filter */}
        <select
          value={selectedDuration}
          onChange={(e) => setSelectedDuration(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {durations.map(duration => (
            <option key={duration.value} value={duration.value}>
              {duration.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterSection;