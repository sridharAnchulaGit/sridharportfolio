
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/20 animate-pulse"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${encodeURIComponent('hsl(var(--primary))')}'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="text-center z-10 px-4">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-8 tracking-tight animate-scale-in">
            ANCHULA SRIDHAR
          </h1>
          <div className="h-1 w-32 bg-primary mx-auto mb-8 rounded-full animate-slide-in-right"></div>
          <p className="text-2xl md:text-3xl text-muted-foreground font-light tracking-wide animate-fade-in delay-300">
  Making cloud and edge technologies accessible, scalable,<br className="hidden md:inline" />
  and impactful for all.
</p>  
        </div>
        
        <div className="mt-12 flex justify-center space-x-2">
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-primary/60 rounded-full animate-pulse delay-75"></div>
          <div className="w-3 h-3 bg-primary/30 rounded-full animate-pulse delay-150"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
