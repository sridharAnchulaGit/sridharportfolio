import React from 'react';
import { Phone, Mail, MapPin, Heart, GraduationCap } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-background to-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="bg-card rounded-2xl shadow-lg p-8 border border-border hover:shadow-xl transition-all duration-500 animate-scale-in">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center animate-fade-in delay-300">
              <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center border-4 border-primary/30 hover:scale-105 transition-transform duration-300">
                <img 
                  src="profile.png" 
                  alt="Profile" 
                  className="w-56 h-56 rounded-full object-cover" 
                />
              </div>
            </div>

            <div className="space-y-6 animate-fade-in delay-500">
              <div className="text-lg text-muted-foreground leading-relaxed">
                <span className="text-2xl">👋</span> Hello, I am <span className="font-semibold text-primary">ANCHULA SRIDHAR</span>, 
                a B.Tech student specializing in Cloud and Edge Computing in the Computer Science and Engineering (CSE) branch.
              </div>

              <div className="grid gap-4">
                <div className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-all duration-300 hover:scale-105">
                  <Phone className="h-5 w-5 text-primary animate-pulse" />
                  <span className="text-foreground">7674069294</span>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-all duration-300 hover:scale-105">
                  <Mail className="h-5 w-5 text-primary animate-pulse delay-75" />
                  <span className="text-foreground">sridharanchula@gmail.com</span>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-all duration-300 hover:scale-105">
                  <MapPin className="h-5 w-5 text-primary animate-pulse delay-150" />
                  <span className="text-foreground">Anchulavaripalem</span>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-all duration-300 hover:scale-105">
                  <Heart className="h-5 w-5 text-primary animate-pulse delay-200" />
                  <span className="text-foreground">Listening music, Doing exercise</span>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-all duration-300 hover:scale-105">
                  <GraduationCap className="h-5 w-5 text-primary animate-pulse delay-300" />
                  <span className="text-foreground">BTech - CSE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;