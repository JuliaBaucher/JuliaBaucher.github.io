import React from 'react';
import Header from './Header';
import Projects from './Projects';
import Footer from './Footer';

const ProjectsPage = ({ currentDesign = 'dark' }) => {
  const isDark = currentDesign === 'dark';

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black' : 'bg-white'}`}>
      <Header currentDesign={currentDesign} />
      
      {/* Page Title */}
      <div className={`pt-32 pb-12 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h1 className={`text-5xl md:text-6xl font-light mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Project Portfolio
          </h1>
          <div className={`w-24 h-1 mx-auto ${
            isDark ? 'bg-gray-600' : 'bg-gray-300'
          }`}></div>
          <p className={`mt-6 text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            A showcase of impactful products across AI, ML, web platforms, and enterprise solutions
          </p>
        </div>
      </div>

      <Projects currentDesign={currentDesign} />
      <Footer currentDesign={currentDesign} />
    </div>
  );
};

export default ProjectsPage;
