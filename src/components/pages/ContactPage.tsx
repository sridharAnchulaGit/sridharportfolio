import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const ContactPage: React.FC = () => {
  const contactMethods = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/sridhar-anchula-44a07824a/',
      description: 'Connect with me professionally',
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/sridharAnchulaGit',
      description: 'Check out my code repositories',
      color: 'from-gray-800 to-gray-900'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:sridharanchula@gmail.com',
      description: 'Send me a direct message',
      color: 'from-red-500 to-red-600'
    }
  ];

  const handleContactClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a conversation 
            about technology and innovation. Feel free to reach out through any of these platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <button
              key={index}
              onClick={() => handleContactClick(method.url)}
              className="group bg-card rounded-2xl shadow-lg p-8 border border-border hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
            >
              <div className={`bg-gradient-to-r ${method.color} p-4 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {method.name}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {method.description}
              </p>
              
              <div className="inline-flex items-center text-primary font-medium group-hover:text-primary/80 transition-colors">
                <span>Connect Now</span>
                <svg className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        <div className="bg-card rounded-2xl shadow-lg p-8 border border-border">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Let's Build Something Amazing Together
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-semibold text-foreground mb-3">What I'm Looking For:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Internship opportunities in cloud computing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Open source contributions</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3">How I Can Help:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Full-stack web development</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Cloud solutions architecture</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-primary/10 rounded-lg">
              <a
                href="mailto:sridharanchula@gmail.com"
                className="text-primary font-medium hover:underline"
              >
                📧 Direct Email: sridharanchula@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
