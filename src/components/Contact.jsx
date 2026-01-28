import React from 'react';
import { Mail, Phone, Linkedin, ExternalLink, MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { personalInfo } from '../mock';

const Contact = ({ currentDesign = 'dark' }) => {
  const isDark = currentDesign === 'dark';

  const sectionClasses = `py-20 ${
    isDark ? 'bg-black' : 'bg-white'
  }`;

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      description: 'Drop me a line anytime'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      description: 'Let\'s have a conversation'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: `https://${personalInfo.linkedin}`,
      description: 'Professional networking'
    },
    {
      icon: ExternalLink,
      label: 'CV website with chatbot',
      value: 'View my profile',
      href: personalInfo.portfolio,
      description: 'Chat with my AI Assistant to get more details'
    }
  ];

  return (
    <section id="contact" className={sectionClasses}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-light mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Let's Connect
          </h2>
          <div className={`w-24 h-1 mx-auto ${
            isDark ? 'bg-gray-600' : 'bg-gray-300'
          }`}></div>
          <p className={`mt-6 text-lg max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Ready to discuss your next product challenge? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-normal mb-6 ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}>
                Get in Touch
              </h3>
              <p className={`text-lg leading-relaxed mb-8 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about product management and technology.
              </p>

              {/* Location */}
              <div className="flex items-center gap-3 mb-8">
                <MapPin className={`h-5 w-5 ${
                  isDark ? 'text-gray-500' : 'text-gray-400'
                }`} />
                <span className={`${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Based in {personalInfo.location}
                </span>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <a
                    key={index}
                    href={method.href}
                    target={method.label === 'LinkedIn' || method.label === 'Portfolio' ? '_blank' : undefined}
                    rel={method.label === 'LinkedIn' || method.label === 'Portfolio' ? 'noopener noreferrer' : undefined}
                    className="group"
                  >
                    <Card className={`${
                      isDark 
                        ? 'bg-gray-900 border-gray-800 hover:bg-gray-800' 
                        : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:shadow-md'
                    } transition-all duration-300 hover:scale-[1.02] cursor-pointer`}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-full ${
                            isDark ? 'bg-gray-800 group-hover:bg-gray-700' : 'bg-white group-hover:bg-gray-50'
                          } transition-colors duration-300`}>
                            <IconComponent className={`h-5 w-5 ${
                              isDark ? 'text-gray-300' : 'text-gray-600'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <h4 className={`font-semibold mb-1 ${
                              isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                              {method.label}
                            </h4>
                            <p className={`text-sm mb-1 ${
                              isDark ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                              {method.value}
                            </p>
                            <p className={`text-xs ${
                              isDark ? 'text-gray-500' : 'text-gray-500'
                            }`}>
                              {method.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;