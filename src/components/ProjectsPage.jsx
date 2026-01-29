import React from 'react';
import Header from './Header';
import Projects from './Projects';
import Footer from './Footer';
import Chatbot from './Chatbot';

const ProjectsPage = ({ currentDesign = 'dark' }) => {
  const isDark = currentDesign === 'dark';

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black' : 'bg-white'}`}>
      <Header currentDesign={currentDesign} />
      <Projects currentDesign={currentDesign} />
      <Footer currentDesign={currentDesign} />
      <Chatbot currentDesign={currentDesign} />
    </div>
  );
};

export default ProjectsPage;
