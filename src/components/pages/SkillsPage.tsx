
import React from 'react';
import { Code, Database, Globe, MessageSquare } from 'lucide-react';

const SkillsPage: React.FC = () => {
  const skillCategories = [
    {
      title: 'Coding',
      icon: Code,
      skills: ['C', 'Java', 'Spring'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Full Stack',
      icon: Globe,
      skills: ['JFSD', 'MSWD', 'PFSD'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Frontend',
      icon: Globe,
      skills: ['CSS', 'HTML', 'Spring'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['MySQL', 'MongoDb'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Communication',
      icon: MessageSquare,
      skills: ['Telugu', 'English', 'Japanese'],
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card rounded-2xl shadow-lg p-6 border border-border hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="mb-6">
                <div className={`bg-gradient-to-r ${category.color} p-3 rounded-full w-fit mb-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
