
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProjectCategories from '../components/ProjectCategories';
import SkillsExperience from '../components/SkillsExperience';
import AboutDesigner from '../components/AboutDesigner';
import ContactForm from '../components/ContactForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <HeroSection />
      <ProjectCategories />
      <SkillsExperience />
      <AboutDesigner />
      <ContactForm />
    </div>
  );
};

export default Index;
