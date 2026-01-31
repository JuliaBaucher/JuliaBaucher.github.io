import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { projects, projectDetails } from '../mock';
import Header from './Header';
import Footer from './Footer';
import Chatbot from './Chatbot';

const ProjectDetail = ({ currentDesign = 'dark' }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isDark = currentDesign === 'dark';
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  const project = projects.find(p => p.id === parseInt(id));
  const details = projectDetails[id];

  if (!project || !details) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        isDark ? 'bg-black text-white' : 'bg-white text-gray-900'
      }`}>
        <div className="text-center">
          <h2 className="text-2xl mb-4">Project not found</h2>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  const sectionClasses = `min-h-screen ${
    isDark ? 'bg-black' : 'bg-white'
  }`;

  return (
    <div className={sectionClasses}>
      <Header currentDesign={currentDesign} />
      
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className={`mb-8 ${
            isDark 
              ? 'text-gray-400 hover:text-white hover:bg-gray-900' 
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
          }`}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Button>

        {/* Hero Image */}
        <div className="relative h-96 rounded-lg overflow-hidden mb-12">
          <img
            src={project.image.startsWith('/') ? `${process.env.PUBLIC_URL}${project.image}` : project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${
            isDark ? 'bg-black/40' : 'bg-black/20'
          }`}></div>
          <div className="absolute top-6 right-6">
            <Badge className={`${
              project.status === 'Production' 
                ? 'bg-green-600 hover:bg-green-700' 
                : 'bg-blue-600 hover:bg-blue-700'
            } text-white text-sm px-4 py-2`}>
              {project.status}
            </Badge>
          </div>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <Badge variant="secondary" className={`mb-4 ${
            isDark ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-700'
          }`}>
            {project.category}
          </Badge>
          <h1 className={`text-4xl md:text-5xl font-light mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {details.title}
          </h1>
          <p className={`text-xl leading-relaxed ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {details.subtitle}
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {details.sections.map((section, index) => (
            <Card key={index} className={`${
              isDark 
                ? 'bg-gray-900 border-gray-800' 
                : 'bg-gray-50 border-gray-200'
            }`}>
              <CardContent className="p-8">
                <h2 className={`text-2xl font-normal mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {section.heading}
                </h2>
                <div className={`prose max-w-none ${
                  isDark ? 'prose-invert' : ''
                }`}>
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className={`mb-4 leading-relaxed ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {paragraph}
                    </p>
                  ))}
                  {section.list && (
                    <ul className={`list-disc list-inside space-y-2 mt-4 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {section.list.map((item, lIndex) => (
                        <li key={lIndex}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technologies */}
        <Card className={`mt-12 ${
          isDark 
            ? 'bg-gray-900 border-gray-800' 
            : 'bg-gray-50 border-gray-200'
        }`}>
          <CardContent className="p-8">
            <h2 className={`text-2xl font-normal mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Technologies & Tools
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className={`text-sm px-4 py-2 ${
                  isDark 
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                    : 'border-gray-300 text-gray-600 hover:bg-gray-100'
                }`}>
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className={`text-lg mb-6 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Want to learn more about this project?
          </p>
          <Button 
            size="lg"
            onClick={() => navigate('/#contact')}
            className={`${
              isDark 
                ? 'bg-white text-black hover:bg-gray-200' 
                : 'bg-gray-900 text-white hover:bg-gray-800'
            } transition-all duration-300 hover:scale-105`}
          >
            Get in Touch
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <Footer currentDesign={currentDesign} />
      <Chatbot currentDesign={currentDesign} />
    </div>
  );
};

export default ProjectDetail;
