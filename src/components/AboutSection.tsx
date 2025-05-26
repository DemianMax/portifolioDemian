
import React from 'react';
import { Award, Coffee, Heart, BookOpen } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    {
      icon: Award,
      title: "Design Awards",
      count: "12+",
      description: "Industry recognition"
    },
    {
      icon: Coffee,
      title: "Coffee Cups",
      count: "2,847",
      description: "Fuel for creativity"
    },
    {
      icon: Heart,
      title: "Happy Users",
      count: "50K+",
      description: "Positive impact made"
    },
    {
      icon: BookOpen,
      title: "Learning Hours",
      count: "500+",
      description: "Continuous growth"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About Me
            </h2>
            
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                I'm a passionate UX designer with over 5 years of experience crafting 
                digital experiences that put users first. My journey began in psychology, 
                which gave me deep insights into human behavior and motivation.
              </p>
              
              <p>
                I believe great design is invisible—it should feel so natural that users 
                never have to think about it. My approach combines user research, data-driven 
                insights, and creative problem-solving to create solutions that are both 
                beautiful and functional.
              </p>
              
              <p>
                When I'm not designing, you'll find me exploring local coffee shops, 
                reading about emerging technologies, or sketching ideas in my notebook. 
                I'm always curious about what makes people tick and how design can make 
                their lives better.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">My Design Philosophy</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-slate-600">Empathy-driven design that understands real user needs</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-slate-600">Iterative process with continuous testing and refinement</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-slate-600">Collaboration with stakeholders throughout the journey</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&crop=face"
                alt="Alex Chen"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-xl">
                5+
                <br />
                Years
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl text-center"
                >
                  <achievement.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
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

export default AboutSection;
