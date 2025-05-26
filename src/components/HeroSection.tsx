
import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const skills = [
    "Design Thinking",
    "User Experience", 
    "Sistemas B2B & B2C",
    "Product Owner",
    "Ilustração Digital",
    "Infografia"
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 bg-slate-900">
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Design que
            <span className="text-yellow-400">
              {" "}conecta
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-slate-300 mb-6 font-medium">
            UX/UI Designer • Ilustradora • Infografista
          </h2>

          <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Criando experiências digitais intuitivas que unem design centrado no usuário 
            com storytelling visual impactante.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-800 border border-slate-600 text-slate-300 text-sm font-medium hover:border-yellow-400 hover:text-yellow-400 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-8 py-3 font-semibold">
              Ver Projetos
              <ArrowDown className="ml-2 w-4 h-4" />
            </Button>
            
            <Button variant="outline" size="lg" className="px-8 py-3 border-2 border-slate-600 text-slate-300 hover:border-yellow-400 hover:text-yellow-400 bg-transparent">
              <Download className="mr-2 w-4 h-4" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
