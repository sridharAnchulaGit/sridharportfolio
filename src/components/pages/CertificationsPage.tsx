import React, { useState } from 'react';
import { Award, ExternalLink, Eye, X, Cloud, Shield, Bot, Download } from 'lucide-react';

const CertificationsPage: React.FC = () => {
  const [previewCert, setPreviewCert] = useState<number | null>(null);

  const certifications = [
    {
      title: 'Salesforce Certification',
      provider: 'Salesforce',
      description: 'Comprehensive certification in Salesforce platform development, administration, and cloud solutions. Covers CRM implementation, custom application development, and integration strategies.',
      icon: '☁️',
      color: 'from-blue-500 to-cyan-500',
      skills: ['CRM Development', 'Cloud Solutions', 'Apex Programming', 'Lightning Framework'],
      issueDate: 'March 2024',
      validUntil: 'March 2027',
      credentialId: 'SF-CC-2024-001',
      certificatePath: '/Salesforce.pdf', // Retained PDF path
      verificationLink: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=HyZ1hQH1RuG4Cs+r8w8DiHuMjv44pWHZaCjUdlTM18vVNKdog4tzOW75zFAZaTos', // No verification link
      details: {
        modules: ['Salesforce Administration', 'Apex Development', 'Lightning Platform', 'Integration Patterns'],
        practicalProjects: ['Custom CRM Implementation', 'Automated Workflow Design', 'API Integration'],
        skills: ['Force.com Platform', 'SOQL/SOSL', 'Visualforce', 'Lightning Components']
      }
    },
    {
      title: 'Red Hat Certification',
      provider: 'Red Hat',
      description: 'Linux system administration and enterprise solutions certification. Demonstrates expertise in Red Hat Enterprise Linux, system configuration, and network services management.',
      icon: '🎩',
      color: 'from-red-500 to-orange-500',
      skills: ['Linux Administration', 'System Configuration', 'Network Services', 'Security Management'],
      issueDate: 'January 2024',
      validUntil: 'January 2027',
      credentialId: 'RH-SA-2024-002',
      certificatePath: '/RedHat.pdf', // Confirmed PDF path
      verificationLink: 'https://www.credly.com/badges/7abe9ac5-111d-46ee-b085-202d4d1b0afe/public_url', // Retained verification link
      details: {
        modules: ['RHEL Administration', 'Network Configuration', 'Security Hardening', 'Container Management'],
        practicalProjects: ['Enterprise Server Setup', 'Security Policy Implementation', 'Container Deployment'],
        skills: ['Command Line Interface', 'Shell Scripting', 'System Monitoring', 'Troubleshooting']
      }
    },
    {
      title: 'RPA Certification',
      provider: 'Automation Anywhere',
      description: 'Robotic Process Automation certification focusing on business process automation, bot development, and workflow optimization using modern RPA tools and technologies.',
      icon: '🤖',
      color: 'from-purple-500 to-pink-500',
      skills: ['Process Automation', 'Bot Development', 'Workflow Design', 'Business Intelligence'],
      issueDate: 'February 2024',
      validUntil: 'February 2027',
      credentialId: 'AA-RPA-2024-003',
      certificatePath: '/rps.pdf', // Updated to rps.pdf
      verificationLink: ' https://www.credential.net/profile/anchulasridhar166014/wallet', // Retained verification link
      details: {
        modules: ['Bot Development', 'Process Mining', 'Workflow Automation', 'Analytics Dashboard'],
        practicalProjects: ['Invoice Processing Automation', 'Data Entry Bot', 'Report Generation System'],
        skills: ['Bot Framework', 'Process Optimization', 'Exception Handling', 'Analytics']
      }
    },
       {
      title: 'MongoDb Certification',
      provider: 'MongoDb',
      description: 'Demonstrates expertise in MongoDB architecture, CRUD operations, indexing, aggregation, performance tuning, backup and recovery, and deployment of MongoDB in enterprise environments.',
      icon: '🌿',
      color: 'from-green-600 to-emerald-500',
      skills: ['CRUD', 'Java (Programming Language)', 'MongoDB Tools & Tooling', 'Software Engineering'],
      issueDate: 'July 2025',
      validUntil: 'Lifetime (No Expiry)',
      credentialId: 'MDB-DA-2025-001',
      certificatePath: '/MongoDBAssociate.pdf', // Confirmed PDF path
      verificationLink: 'https://www.credly.com/badges/fd36c7e3-3773-47fb-8e9d-2f2b6f173031/public_url', // Retained verification link
      details: {
        modules: ['Data Modeling & Schema Design', 'Security and Backup Strategies', 'CRUD Operations with Mongo Shell', 'MongoDB Architecture and Concepts'],
        practicalProjects: ['E-Commerce Product Catalog with MongoDB', 'Real-Time Chat App Message Storage', 'Inventory Management System using Mongoose'],
        skills: ['MongoDB Document Model', 'MongoDB Tools & Tooling', 'Java (Programming Language)', 'Software Engineering']
      }
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-background via-primary/5 to-secondary/10 relative overflow-hidden">
      {/* Cloud Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <Cloud className="h-16 w-16 text-primary/10" />
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <Award className="h-12 w-12 text-primary/15" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float">
          <Shield className="h-14 w-14 text-primary/10" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float-delayed">
          <Bot className="h-18 w-18 text-primary/5" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Award className="h-10 w-10 text-primary animate-bounce" />
            <h2 className="text-5xl font-bold text-foreground">Professional Certifications</h2>
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full animate-pulse"></div>
          <p className="text-xl text-muted-foreground mt-4">
            Certified in the latest innovations like Red Hat for enterprise, Salesforce, and Automation Anywhere for robotic process automation, demonstrating a solid foundation, intelligent automation, and enterprise systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-card/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-border/50 hover:shadow-3xl transition-all duration-500 hover:scale-105 overflow-hidden group animate-slide-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`bg-gradient-to-r ${cert.color} p-8 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="text-center relative z-10">
                  <div className="text-5xl mb-4 animate-bounce">{cert.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-white/90 font-medium text-lg">
                    {cert.provider}
                  </p>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-foreground mb-4 flex items-center space-x-2">
                    <Cloud className="h-5 w-5 text-primary" />
                    <span>Key Competencies:</span>
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-3 p-2 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-all duration-300">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        <span className="text-sm text-muted-foreground font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-foreground">Issued:</span>
                      <p className="text-muted-foreground">{cert.issueDate}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Valid Until:</span>
                      <p className="text-muted-foreground">{cert.validUntil}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button 
                    onClick={() => setPreviewCert(index)}
                    className="flex-1 bg-secondary/20 text-foreground py-3 px-4 rounded-xl font-medium hover:bg-secondary/30 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
                  >
                    <Eye className="h-5 w-5" />
                    <span>Preview</span>
                  </button>
                  {cert.verificationLink && (
                    <a
                      href={cert.verificationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary/10 text-primary py-3 px-4 rounded-xl font-medium hover:bg-primary/20 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
                    >
                      <Award className="h-5 w-5" />
                      <span>Verify</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Stats */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 border border-primary/20 animate-fade-in">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center space-x-3">
              <Award className="h-8 w-8 text-primary animate-spin-slow" />
              <span>Certification Excellence</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
              My certifications demonstrate a strong commitment to lifelong learning and keeping abreast of the most recent developments in automation, cloud computing, and enterprise systems. Each one not only attests to my technical proficiency but also provides practical experience utilizing these technologies in authentic situations. These accomplishments, which have been acknowledged by the industry, demonstrate my ability to contribute successfully in fast-paced, technologically advanced settings.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-bold text-primary mb-2 animate-bounce">3+</div>
                <div className="text-muted-foreground">Active Certifications</div>
              </div>
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-bold text-primary mb-2 animate-bounce delay-100">150+</div>
                <div className="text-muted-foreground">Training Hours</div>
              </div>
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-bold text-primary mb-2 animate-bounce delay-200">2024</div>
                <div className="text-muted-foreground">Latest Achievement</div>
              </div>
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-bold text-primary mb-2 animate-bounce delay-300">100%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certification Preview Modal */}
      {previewCert !== null && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-card max-w-4xl max-h-[90vh] w-full rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
            <div className={`flex justify-between items-center p-6 border-b border-border bg-gradient-to-r ${certifications[previewCert].color}`}>
              <h3 className="text-2xl font-bold text-white">Certification Details</h3>
              <button
                onClick={() => setPreviewCert(null)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-300 text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-8 overflow-y-auto max-h-[calc(90vh-100px)]">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{certifications[previewCert].icon}</div>
                <h1 className="text-3xl font-bold text-foreground mb-2">{certifications[previewCert].title}</h1>
                <p className="text-xl text-primary">{certifications[previewCert].provider}</p>
                <p className="text-muted-foreground mt-2">Credential ID: {certifications[previewCert].credentialId}</p>
              </div>

              {/* Certificate PDF Link */}
              {certifications[previewCert].certificatePath ? (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center space-x-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Certificate</span>
                  </h3>
                  <div className="flex justify-center gap-4">
                    <a
                      href={certifications[previewCert].certificatePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-secondary/20 text-foreground py-3 px-4 rounded-xl font-medium hover:bg-secondary/30 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
                    >
                      <Eye className="h-5 w-5" />
                      <span>View Certificate</span>
                    </a>
                    <a
                      href={certifications[previewCert].certificatePath}
                      download={`${certifications[previewCert].title.replace(/\s+/g, '_')}.pdf`}
                      className="bg-primary/10 text-primary py-3 px-4 rounded-xl font-medium hover:bg-primary/20 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
                    >
                      <Download className="h-5 w-5" />
                      <span>Download Certificate</span>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="mb-8 text-center">
                  <p className="text-muted-foreground">Certificate not available.</p>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-secondary/20 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-foreground mb-4">Certification Modules</h3>
                  <ul className="space-y-2">
                    {certifications[previewCert].details.modules.map((module, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{module}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary/10 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-foreground mb-4">Practical Projects</h3>
                  <ul className="space-y-2">
                    {certifications[previewCert].details.practicalProjects.map((project, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Cloud className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-secondary/20 to-primary/20 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-foreground mb-4">Technical Skills Acquired</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {certifications[previewCert].details.skills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 bg-background/50 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificationsPage;