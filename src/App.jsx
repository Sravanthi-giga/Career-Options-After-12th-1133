import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CourseGrid from './components/CourseGrid';
import CourseDetail from './components/CourseDetail';
import FilterSection from './components/FilterSection';
import { coursesData } from './data/coursesData';
import './App.css';

function App() {
  const [selectedStream, setSelectedStream] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = coursesData.filter(course => {
    const matchesStream = selectedStream === 'all' || course.stream === selectedStream;
    const matchesDuration = selectedDuration === 'all' || course.duration === selectedDuration;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesStream && matchesDuration && matchesSearch;
  });

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Header />
        <Routes>
          <Route path="/" element={
            <main className="container mx-auto px-4 py-8">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  Courses After 12th Grade
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Explore diverse career paths and educational opportunities to shape your future
                </p>
              </div>
              
              <FilterSection 
                selectedStream={selectedStream}
                setSelectedStream={setSelectedStream}
                selectedDuration={selectedDuration}
                setSelectedDuration={setSelectedDuration}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
              
              <CourseGrid courses={filteredCourses} />
            </main>
          } />
          <Route path="/course/:id" element={<CourseDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;