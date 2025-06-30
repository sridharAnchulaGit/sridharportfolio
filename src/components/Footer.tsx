import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Cloud, Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/sridhar-anchula-44a07824a/',
      color: 'hover:text-blue-500'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/sridharAnchulaGit',
      color: 'hover:text-gray-600'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:sridharanchula@gmail.com',
      color: 'hover:text-red-500'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  const cloudTechnologies = [
    'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Serverless'
  ];

  return (
    <footer className="bg-gradient-to-br from-background via-secondary/20 to-primary/10 border-t border-border/50 relative overflow-hidden">
      {/* Background Cloud Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-10 left-10 animate-float">
          <Cloud className="h-32 w-32 text-primary" />
        </div>
        <div className="absolute top-20 right-20 animate-float-delayed">
          <Cloud className="h-24 w-24 text-primary" />
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
          <Cloud className="h-28 w-28 text-primary" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* About Section */}
          <div className="lg:col-span-2 animate-fade-in">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-2xl">
                <Cloud className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">ANCHULA SRIDHAR</h3>
                <p className="text-primary font-medium">Cloud Computing Specialist</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Passionate B.Tech Computer Science student specializing in Cloud and Edge Computing. 
              Building the future of scalable, distributed systems and cloud-native applications.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300">
                <MapPin className="h-5 w-5" />
                <span>Anchulavaripalem, Andhra Pradesh</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300">
                <Phone className="h-5 w-5" />
                <span>+91 7674069294</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300">
                <Mail className="h-5 w-5" />
                <span>sridharanchula@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in delay-200">
            <h4 className="text-xl font-bold text-foreground mb-6 flex items-center space-x-2">
              <Code className="h-6 w-6 text-primary" />
              <span>Quick Navigation</span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(link.href.substring(1));
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cloud Technologies */}
          <div className="animate-fade-in delay-300">
            <h4 className="text-xl font-bold text-foreground mb-6 flex items-center space-x-2">
              <Cloud className="h-6 w-6 text-primary" />
              <span>Cloud Technologies</span>
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {cloudTechnologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-secondary/30 text-center py-2 px-3 rounded-lg text-sm text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links & Bottom Section */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-6 animate-fade-in delay-500">
              <span className="text-muted-foreground font-medium">Connect with me:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-secondary/30 rounded-full transition-all duration-300 hover:scale-110 hover:bg-primary/20 ${social.color} group`}
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5 group-hover:animate-pulse" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right animate-fade-in delay-600">
              <p className="text-muted-foreground flex items-center space-x-2">
                <span>© {currentYear} ANCHULA SRIDHAR</span>
              </p>
            </div>
          </div>
        </div>

        {/* Floating Cloud Elements */}
        <div className="absolute bottom-5 left-5 animate-bounce">
          <Cloud className="h-6 w-6 text-primary/30" />
        </div>
        <div className="absolute bottom-5 right-5 animate-bounce delay-300">
          <Cloud className="h-6 w-6 text-primary/30" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
