import React, { useState } from 'react';
import { Eye, X } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    {
      id: 'evisa',
      title: 'E-VISA Processing System',
      category: 'PFSD',
      description: 'A comprehensive visa processing system that streamlines the entire visa application workflow. The system handles document verification, application tracking, and automated approval processes. Built using the MERN stack for scalability and performance.',
      technologies: ['React', 'Node.js', 'MongoDB', 'JWT Authentication'],
      features: ['Document upload & verification', 'Application tracking', 'Payment integration', 'Admin review system'],
      image: 'evisa.png'
    },
    {
      id: 'hospital',
      title: 'Hospital Management System',
      category: 'MERN',
      description: 'An integrated hospital management solution that digitizes healthcare operations. The system manages patient records, appointment scheduling, staff management, and billing processes. Designed to improve efficiency and patient care quality.',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      features: ['Patient management', 'Appointment scheduling', 'Medical records', 'Billing system'],
      image: 'hospital.png'
    },
    {
      id: 'edocument',
      title: 'E-Document Approval System',
      category: 'EP',
      description: 'A digital document workflow system that automates document approval processes. Features multi-level approval workflows, digital signatures, and audit trails. Reduces processing time and improves transparency in organizational document handling.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf'],
      features: ['Multi-level approvals', 'Digital signatures', 'Audit trails', 'Document versioning'],
      image: 'edocument.png'
    },
    {
      id: 'Heritage',
      title: 'Indian Heritage and Management System',
      category: 'JFSD',
      description: 'An integrated system designed to preserve, manage, and showcase India’s rich culture and heritage. It features digital archiving, cultural site management, and multilingual support. The system helps in protecting traditional knowledge, improving public access to cultural resources, and promoting awareness and appreciation of India diverse cultural legacy.',
      technologies: ['Java', 'Spring Framework', 'Oracle DB', 'REST APIs'],
      features: ['A digital system that helps preserve and promote Indian culture and heritage, with features like digitization of cultural assets, multilingual support, heritage site mapping, version control, expert approvals, and transparent tracking.'],
      image: 'indian.png'
    }
  ];

  const closeModal = () => setSelectedProject(null);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-card rounded-2xl shadow-lg p-6 border border-border hover:shadow-xl transition-all duration-300 hover:scale-105">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="w-full h-48 object-cover rounded-lg mb-4 shadow-md"
              />
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
              </div>
              
              <button
                onClick={() => setSelectedProject(project.id)}
                className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Eye className="h-5 w-5" />
                <span>Overview</span>
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {projects.find(p => p.id === selectedProject)?.title}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-secondary rounded-lg transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  return project ? (
                    <div className="space-y-6">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {project.category}
                      </span>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span key={index} className="px-3 py-1 bg-secondary text-foreground text-sm rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : null;
                })()}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;