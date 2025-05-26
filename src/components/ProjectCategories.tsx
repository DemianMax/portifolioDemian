
import React, { useState } from 'react';
import { Monitor, Palette, BarChart3, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ProjectCategories = () => {
  const [activeCategory, setActiveCategory] = useState('ux');

  const categories = [
    { id: 'ux', name: 'UX Design', icon: Monitor, color: 'yellow' },
    { id: 'illustration', name: 'Ilustração', icon: Palette, color: 'yellow' },
    { id: 'infographic', name: 'Infografia', icon: BarChart3, color: 'yellow' }
  ];

  const projects = {
    ux: [
      {
        title: "App de Delivery Sustentável",
        description: "Redesign completo focado em usabilidade e conversão, aumentando engajamento em 40%.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
        tags: ["Mobile", "B2C", "Design System"]
      },
      {
        title: "Dashboard Analytics B2B",
        description: "Interface para análise de dados complexos com foco em tomada de decisões rápidas.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        tags: ["Web", "B2B", "Data Visualization"]
      },
      {
        title: "Plataforma Educacional",
        description: "Sistema de gestão de aprendizado com gamificação e acessibilidade.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        tags: ["EdTech", "Accessibility", "Gamification"]
      }
    ],
    illustration: [
      {
        title: "Ilustrações para App Infantil",
        description: "Personagens e cenários coloridos para aplicativo educativo infantil.",
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
        tags: ["Digital Art", "Character Design", "Kids"]
      },
      {
        title: "Branding e Identidade Visual",
        description: "Criação de mascote e elementos visuais para startup de tecnologia.",
        image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=600&fit=crop",
        tags: ["Branding", "Logo Design", "Startup"]
      }
    ],
    infographic: [
      {
        title: "Relatório de Sustentabilidade",
        description: "Infográficos interativos para comunicar dados ambientais complexos.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
        tags: ["Data Viz", "Sustainability", "Interactive"]
      },
      {
        title: "Guia de Processo UX",
        description: "Visualização didática do processo de design thinking para equipes.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        tags: ["Process", "Education", "UX"]
      }
    ]
  };

  return (
    <section id="projects" className="py-20 px-4 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais relevantes em UX Design, 
            Ilustração e Infografia.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex bg-slate-700 p-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-yellow-400 text-slate-900'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects[activeCategory].map((project, index) => (
            <Card key={index} className="group overflow-hidden bg-slate-700 border-slate-600 hover:border-yellow-400 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="bg-yellow-400 text-slate-900 hover:bg-yellow-500">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-600 text-slate-300 text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCategories;
