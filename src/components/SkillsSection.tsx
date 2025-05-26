
import React from 'react';
import { Palette, Users, Lightbulb, Zap, Target, Layers } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      icon: Palette,
      title: "UI/Visual Design",
      description: "Creating beautiful, cohesive interfaces with strong visual hierarchy and brand alignment.",
      tools: ["Figma", "Adobe XD", "Sketch", "Principle"]
    },
    {
      icon: Users,
      title: "User Research",
      description: "Understanding user needs through interviews, surveys, usability testing, and analytics.",
      tools: ["UserTesting", "Hotjar", "Maze", "Google Analytics"]
    },
    {
      icon: Lightbulb,
      title: "UX Strategy",
      description: "Aligning user experience with business goals through strategic thinking and planning.",
      tools: ["Miro", "FigJam", "Whimsical", "Notion"]
    },
    {
      icon: Zap,
      title: "Prototyping",
      description: "Bringing ideas to life with interactive prototypes for testing and validation.",
      tools: ["Figma", "Framer", "InVision", "Marvel"]
    },
    {
      icon: Target,
      title: "Information Architecture",
      description: "Organizing content and features in intuitive, logical structures for optimal user flow.",
      tools: ["OptimalSort", "Treejack", "Lucidchart", "Draw.io"]
    },
    {
      icon: Layers,
      title: "Design Systems",
      description: "Building scalable design systems that ensure consistency across products and teams.",
      tools: ["Figma Libraries", "Storybook", "Abstract", "Zeplin"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional user experiences
            from concept to implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <skill.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {skill.title}
              </h3>
              
              <p className="text-slate-600 mb-4 leading-relaxed">
                {skill.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {skill.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
