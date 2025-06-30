
import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Cloud } from 'lucide-react';

const EducationPage: React.FC = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science and Engineering (CSE)",
      specialization: "Cloud and Edge Computing",
      institution: "KL University",
      location: "Vijayawada, Andhra Pradesh",
      duration: "2022 - 2026",
      grade: "9.25 CGPA",
      highlights: [
        "Cloud Computing Technologies",
        "Edge Computing Systems", 
        "Intership at Prodigy",
        "Full Stack Development",
        "Database Management Systems",
        "Problem Solving Skills"
      ]
    },
    {
      degree: "Intermediate (12th Grade)",
      field: "Mathematics, Physics, Chemistry (MPC)",
      institution: "Sri Bhavishya Junior College",
      location: "Vijayawada, Andhra Pradesh", 
      duration: "2020 - 2022",
      grade: "86%",
      highlights: [
        "Mathematics Excellence",
        "Physics Fundamentals",
        "Chemistry Concepts",
        "Problem Solving Skills"
      ]
    },
    {
      degree: "Secondary School Certificate (10th Grade)",
      field: "General Studies",
      institution: " S.F.S SCHOOL, CBSE",
      location: "Rajupalem",
      duration: "2019 - 2020", 
      grade: "62%",
      highlights: [
        "Academic Excellence",
        "Leadership Skills",
        "Extracurricular Activities",
        "Community Service"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-background via-primary/5 to-secondary/10 relative overflow-hidden">
      {/* Cloud Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <Cloud className="h-16 w-16 text-primary/20" />
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <Cloud className="h-12 w-12 text-primary/15" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float">
          <Cloud className="h-14 w-14 text-primary/10" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <GraduationCap className="h-10 w-10 text-primary animate-bounce" />
            <h2 className="text-5xl font-bold text-foreground">Educational Journey</h2>
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full animate-pulse"></div>
          <p className="text-xl text-muted-foreground mt-4 animate-fade-in delay-300">
            Building expertise in Cloud and Edge Computing
          </p>
        </div>

        <div className="space-y-12">
          {educationData.map((education, index) => (
            <div 
              key={index} 
              className="bg-card/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-border/50 hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-slide-in-up group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start space-x-6">
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-10 w-10 text-primary animate-pulse" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {education.degree}
                      </h3>
                      <h4 className="text-xl text-primary mb-2 font-semibold">
                        {education.field}
                      </h4>
                      {education.specialization && (
                        <p className="text-lg text-secondary-foreground mb-3 font-medium bg-primary/10 px-3 py-1 rounded-full inline-block">
                          🎯 {education.specialization}
                        </p>
                      )}
                    </div>
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-2xl">
                      <span className="text-2xl font-bold text-primary">{education.grade}</span>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center space-x-3 p-3 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-all duration-300">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-foreground font-medium">{education.duration}</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-all duration-300">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="text-foreground font-medium">{education.location}</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-all duration-300">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span className="text-foreground font-medium">{education.institution}</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl p-6">
                    <h5 className="font-bold text-foreground mb-4 flex items-center space-x-2">
                      <Award className="h-5 w-5 text-primary" />
                      <span>Key Highlights & Achievements:</span>
                    </h5>
                    <div className="grid md:grid-cols-2 gap-3">
                      {education.highlights.map((highlight, highlightIndex) => (
                        <div 
                          key={highlightIndex} 
                          className="flex items-center space-x-3 p-2 bg-background/50 rounded-lg hover:bg-background/70 transition-all duration-300 hover:scale-105"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                          <span className="text-muted-foreground font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cloud Computing Focus Section */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 border border-primary/20 animate-fade-in">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Cloud className="h-8 w-8 text-primary animate-spin-slow" />
              <h3 className="text-3xl font-bold text-foreground">Cloud Computing Specialization</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
             Cloud computing has been the main focus of my academic career, and I have a solid foundation in edge computing, and cloud architectures. Building scalable, secure, and data-driven solutions is something I've learned how to do practically through my coursework and practical projects. I love utilizing cloud technologies to solve practical issues and promote digital transformation, and I love working with contemporary platforms like AWS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
