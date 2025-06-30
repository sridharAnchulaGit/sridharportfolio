import React, { useState } from 'react';
import { Download, FileText, Eye, X, Cloud, Code, Database } from 'lucide-react';

const ResumePage: React.FC = () => {
  const [showPreview, setShowPreview] = useState(false);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Anchula_Sridhar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resumeContent = {
    personalInfo: {
      name: "ANCHULA SRIDHAR",
      title: "Cloud Computing & Data Science Specialist",
      email: "sridharanchula@gmail.com",
      phone: "7674069294",
      location: "Anchulavaripalem"
    },
    summary: "Passionate B.Tech Computer Science student specializing in Cloud and Edge Computing with hands-on experience in full-stack development, cloud technologies, and data science. Proven track record in developing scalable applications and implementing modern cloud solutions.",
    education: [
      {
        degree: "B.Tech in Computer Science Engineering",
        specialization: "Cloud and Edge Computing",
        institution: "KL University",
        year: "2022-2026",
        grade: "9.26 CGPA"
      }
    ],
    skills: {
      programming: ["C", "C++", "Java", "Spring Framework"],
      fullStack: ["JFSD", "MSWD", "PFSD"],
      frontend: ["HTML", "CSS", "React", "JavaScript"],
      database: ["MySQL", "Oracle"],
      cloud: ["AWS", "Azure", "Google Cloud", "Edge Computing"],
      languages: ["Telugu", "English", "Hindi"]
    },
    projects: [
      "Online Voting System (PFSD)",
      "E-VISA Processing System",
      "Hospital Management System (MERN)",
      "E-Document Approval System (EP)",
      "Indian Culture Management (JFSD)"
    ],
    certifications: ["Salesforce Certification", "Red Hat Certification", "RPA Certification"]
  };

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-background via-primary/5 to-secondary/10 relative overflow-hidden">
      {/* Cloud Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 animate-float">
          <Cloud className="h-20 w-20 text-primary/10" />
        </div>
        <div className="absolute bottom-20 left-10 animate-float-delayed">
          <FileText className="h-16 w-16 text-primary/15" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <FileText className="h-10 w-10 text-primary animate-bounce" />
            <h2 className="text-5xl font-bold text-foreground">Professional Resume</h2>
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full animate-pulse"></div>
          <p className="text-xl text-muted-foreground mt-4">
            Cloud Computing & Data Science Expertise
          </p>
        </div>

        <div className="bg-card/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-border/50 hover:shadow-3xl transition-all duration-500 animate-scale-in">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <FileText className="h-12 w-12 text-primary animate-pulse" />
            </div>
            
            <h3 className="text-3xl font-bold text-foreground mb-4">Resume Overview</h3>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground mb-8 leading-relaxed">
            <p className="text-center text-lg">
              My journey as an enthusiastic student of computer science engineering with a focus on cloud and edge computing is reflected in my resume. It displays my technical Skill in cloud computing platforms like AWS and Azure, and full-stack web development.
            </p>
            
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                <h4 className="font-bold text-foreground mb-3 flex items-center space-x-2">
                  <Cloud className="h-5 w-5 text-primary" />
                  <span>Cloud Technologies</span>
                </h4>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>AWS, Azure, Google Cloud Platform</li>
                  <li>Serverless Architecture</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                <h4 className="font-bold text-foreground mb-3 flex items-center space-x-2">
                  <Code className="h-5 w-5 text-primary" />
                  <span>Development Skills</span>
                </h4>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Full-Stack Development</li>
                  <li>Database Design</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setShowPreview(true)}
              className="bg-secondary text-secondary-foreground py-4 px-8 rounded-xl font-medium text-lg hover:bg-secondary/80 transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Eye className="h-6 w-6" />
              <span>Preview Resume</span>
            </button>
            
            <button
              onClick={handleDownloadResume}
              className="bg-primary text-primary-foreground py-4 px-8 rounded-xl font-medium text-lg hover:bg-primary/90 transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Download className="h-6 w-6" />
              <span>Download Resume</span>
            </button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6 text-center">
            Click to preview or download my complete professional resume
          </p>
        </div>
      </div>

      {/* Resume Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-card max-w-4xl max-h-[90vh] w-full rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
            <div className="flex justify-between items-center p-6 border-b border-border bg-gradient-to-r from-primary/10 to-secondary/10">
              <h3 className="text-2xl font-bold text-foreground">Resume Preview</h3>
              <button
                onClick={() => setShowPreview(false)}
                className="p-2 hover:bg-secondary rounded-lg transition-colors duration-300"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
              <div className="bg-background p-8 rounded-xl border border-border">
                {/* PDF Preview */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
                    <FileText className="h-6 w-6 text-primary" />
                    <span>Resume PDF</span>
                  </h2>
                  <iframe
                    src="/Resume.pdf"
                    title="Resume PDF Preview"
                    className="w-full h-[600px] rounded-lg border border-border"
                  />
                  <p className="text-sm text-muted-foreground mt-2 text-center">
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Open PDF in new tab
                    </a>
                  </p>
                </div>

                {/* Structured Resume Content */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
                    <FileText className="h-6 w-6 text-primary" />
                    <span>Professional Summary</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{resumeContent.summary}</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
                    <Code className="h-6 w-6 text-primary" />
                    <span>Technical Skills</span>
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {Object.entries(resumeContent.skills).map(([category, skills]) => (
                      <div key={category} className="bg-secondary/20 p-4 rounded-lg">
                        <h3 className="font-semibold text-foreground mb-2 capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
                        <p className="text-muted-foreground">{skills.join(', ')}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
                    <Database className="h-6 w-6 text-primary" />
                    <span>Key Projects</span>
                  </h2>
                  <ul className="space-y-2">
                    {resumeContent.projects.map((project, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumePage;