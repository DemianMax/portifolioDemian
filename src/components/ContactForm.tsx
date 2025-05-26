
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactForm = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contato@designer.com",
      href: "mailto:contato@designer.com"
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (11) 99999-9999",
      href: "tel:+5511999999999"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São Paulo, SP",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "#"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Tem um projeto em mente? Adoraria ouvir suas ideias e discutir 
            como posso ajudar a transformá-las em realidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-slate-700 border-slate-600">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-6">Entre em Contato</h3>
              
              <div className="space-y-4 mb-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-3 text-slate-300 hover:text-yellow-400 transition-colors duration-200"
                  >
                    <info.icon className="w-5 h-5 text-yellow-400" />
                    <div>
                      <div className="text-sm text-slate-400">{info.label}</div>
                      <div className="font-medium">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="border-t border-slate-600 pt-6">
                <div className="text-slate-300 mb-4">Me siga nas redes sociais</div>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="p-2 bg-slate-600 text-slate-300 transition-all duration-200 hover:bg-yellow-400 hover:text-slate-900"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-700 border-slate-600">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-6">Envie uma Mensagem</h3>
              
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Seu Nome"
                    className="w-full p-3 bg-slate-600 border border-slate-500 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Seu Email"
                    className="w-full p-3 bg-slate-600 border border-slate-500 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    placeholder="Assunto"
                    className="w-full p-3 bg-slate-600 border border-slate-500 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <textarea
                    rows={4}
                    placeholder="Sua Mensagem"
                    className="w-full p-3 bg-slate-600 border border-slate-500 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                  ></textarea>
                </div>
                
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 py-3 font-medium transition-colors duration-200">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-slate-600">
          <p className="text-slate-400">
            © 2024 Designer UX/UI. Todos os direitos reservados. | Feito com ❤️ em São Paulo
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
