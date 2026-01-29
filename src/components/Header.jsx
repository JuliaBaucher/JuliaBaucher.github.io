import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = ({ currentDesign = 'dark' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    // Check if we're on the main page
    if (location.pathname === '/' || location.pathname === '/portfolio/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    } else {
      // Navigate to main page with hash
      navigate(`/#${sectionId}`);
      setIsMenuOpen(false);
    }
  };

  const isDark = currentDesign === 'dark';
  
  // Check if we're on the projects page
  const isProjectsPage = location.pathname.includes('/projects');
  
  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled 
      ? `backdrop-blur-md ${isDark ? 'bg-black/80 border-gray-800' : 'bg-white/80 border-gray-200'} border-b`
      : 'bg-transparent'
  }`;

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ].filter(item => !(isProjectsPage && item.id === 'projects')); // Remove Projects if on projects page

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => {
              if (location.pathname === '/' || location.pathname === '/portfolio/') {
                scrollToSection('hero');
              } else {
                navigate('/');
              }
            }}
            className={`text-xl font-bold transition-colors hover:scale-105 transform duration-200 ${
              isDark ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-600'
            }`}
          >
            Julia Baucher
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-all duration-200 hover:-translate-y-1 ${
                  isDark 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-5 w-5 ${isDark ? 'text-white' : 'text-gray-900'}`} />
            ) : (
              <Menu className={`h-5 w-5 ${isDark ? 'text-white' : 'text-gray-900'}`} />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t ${
            isDark ? 'border-gray-800 bg-black/95' : 'border-gray-200 bg-white/95'
          } backdrop-blur-md`}>
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-2 transition-colors ${
                    isDark 
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  } rounded-md`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;