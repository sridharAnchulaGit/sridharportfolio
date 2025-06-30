
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '../components/ThemeProvider';
import Navbar from '../components/Navbar';
import HomePage from '../components/pages/HomePage';
import AboutPage from '../components/pages/AboutPage';
import EducationPage from '../components/pages/EducationPage';
import ProjectsPage from '../components/pages/ProjectsPage';
import ResumePage from '../components/pages/ResumePage';
import SkillsPage from '../components/pages/SkillsPage';
import CertificationsPage from '../components/pages/CertificationsPage';
import ContactPage from '../components/pages/ContactPage';
import Footer from '../components/Footer';
import { useTheme } from '../components/ThemeProvider';

const PortfolioContent: React.FC = () => {
  const [activeSection, setActiveSection] = useState('Home');
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'projects', 'resume', 'skills', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.charAt(0).toUpperCase() + section.slice(1));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background transition-colors duration-300 relative overflow-hidden">
      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${encodeURIComponent('6366f1')}' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Navbar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
      
      <main className="relative z-10">
        <section id="home" className="scroll-mt-16">
          <HomePage />
        </section>
        <section id="about" className="scroll-mt-16">
          <AboutPage />
        </section>
        <section id="education" className="scroll-mt-16">
          <EducationPage />
        </section>
        <section id="projects" className="scroll-mt-16">
          <ProjectsPage />
        </section>
        <section id="resume" className="scroll-mt-16">
          <ResumePage />
        </section>
        <section id="skills" className="scroll-mt-16">
          <SkillsPage />
        </section>
        <section id="certifications" className="scroll-mt-16">
          <CertificationsPage />
        </section>
        <section id="contact" className="scroll-mt-16">
          <ContactPage />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

const Index: React.FC = () => {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
};

export default Index;
