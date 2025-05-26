
import React from 'react';
import { Monitor, Lightbulb, Users, Target, Palette, BarChart } from 'lucide-react';

const SkillsExperience = () => {
  const softwareSkills = [
    { name: 'Figma', level: 95, category: 'Design' },
    { name: 'Framer', level: 85, category: 'Prototyping' },
    { name: 'Photoshop', level: 90, category: 'Visual' },
    { name: 'Illustrator', level: 88, category: 'Illustration' },
    { name: 'After Effects', level: 75, category: 'Motion' }
  ];

  const expertise = [
    {
      icon: Lightbulb,
      title: "Design Thinking",
      description: "Metodologia centrada no usuário para resolver problemas complexos"
    },
    {
      icon: Monitor,
      title: "User Experience",
      description: "Criação de jornadas e interfaces intuitivas e eficientes"
    },
    {
      icon: Target,
      title: "Sistemas B2B & B2C",
      description: "Experiência em produtos para diferentes públicos e contextos"
    },
    {
      icon: Users,
      title: "Product Owner",
      description: "Gestão de produto com foco em valor e resultados de negócio"
    },
    {
      icon: Palette,
      title: "Ilustração Digital",
      description: "Criação de elementos visuais únicos e identidades visuais"
    },
    {
      icon: BarChart,
      title: "Infografia",
      description: "Transformação de dados complexos em narrativas visuais claras"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Habilidades & Experiência
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Ferramentas, metodologias e competências desenvolvidas ao longo da carreira.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Softwares & Ferramentas</h3>
            <div className="space-y-6">
              {softwareSkills.map((skill, index) => (
                <div key={index} className="bg-slate-800 p-4 border border-slate-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-white">{skill.name}</span>
                    <span className="text-sm text-slate-400">{skill.category}</span>
                  </div>
                  <div className="w-full bg-slate-600 h-2">
                    <div
                      className="bg-yellow-400 h-2 transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-sm text-slate-400 mt-1">{skill.level}%</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Áreas de Especialização</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expertise.map((skill, index) => (
                <div
                  key={index}
                  className="bg-slate-800 p-6 border border-slate-700 hover:border-yellow-400 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center mb-4">
                    <skill.icon className="w-6 h-6 text-slate-900" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2">
                    {skill.title}
                  </h4>
                  
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsExperience;
