
import React from 'react';
import { Award, Coffee, Heart, BookOpen } from 'lucide-react';

const AboutDesigner = () => {
  const achievements = [
    {
      icon: Award,
      title: "Projetos",
      count: "80+",
      description: "Entregues com sucesso"
    },
    {
      icon: Coffee,
      title: "Cafés",
      count: "1,247",
      description: "Inspiração em xícaras"
    },
    {
      icon: Heart,
      title: "Usuários",
      count: "100K+",
      description: "Impactados positivamente"
    },
    {
      icon: BookOpen,
      title: "Aprendizado",
      count: "24/7",
      description: "Sempre evoluindo"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Sobre Mim
            </h2>
            
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                Sou uma designer apaixonada por criar experiências digitais que fazem 
                a diferença na vida das pessoas. Com mais de 5 anos de experiência, 
                combino design centrado no usuário com storytelling visual.
              </p>
              
              <p>
                Minha jornada começou na ilustração, evoluindo para UX/UI Design e 
                infografia. Essa combinação única me permite criar soluções visuais 
                completas, desde a pesquisa com usuários até a comunicação visual final.
              </p>
              
              <p>
                Acredito que bom design é invisível - deve funcionar tão naturalmente 
                que o usuário nem percebe. Trabalho com metodologias ágeis e sempre 
                busco equilibrar as necessidades do usuário com os objetivos de negócio.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Minha Filosofia</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span className="text-slate-600">Design baseado em dados e research com usuários reais</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span className="text-slate-600">Processos iterativos com testes constantes e melhorias</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span className="text-slate-600">Colaboração próxima com stakeholders e times de desenvolvimento</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span className="text-slate-600">Comunicação visual clara para simplificar o complexo</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=700&fit=crop&crop=face"
                alt="Designer UX/UI"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-xl">
                5+
                <br />
                Anos
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-blue-50 p-4 rounded-xl text-center"
                >
                  <achievement.icon className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-800">{achievement.count}</div>
                  <div className="text-sm text-slate-600 font-medium">{achievement.title}</div>
                  <div className="text-xs text-slate-500">{achievement.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDesigner;
