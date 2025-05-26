
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
      href: "#",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "hover:text-gray-800"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "#",
      color: "hover:text-pink-600"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-900 to-purple-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tem um projeto em mente? Adoraria ouvir suas ideias e discutir 
            como posso ajudar a transformá-las em realidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-6">Entre em Contato</h3>
              
              <div className="space-y-4 mb-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <info.icon className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-sm text-gray-400">{info.label}</div>
                      <div className="font-medium">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="border-t border-white/20 pt-6">
                <div className="text-gray-300 mb-4">Me siga nas redes sociais</div>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`p-2 bg-white/10 rounded-lg text-gray-300 transition-all duration-200 ${social.color} hover:bg-white/20`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-6">Envie uma Mensagem</h3>
              
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Seu Nome"
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Seu Email"
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    placeholder="Assunto"
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <textarea
                    rows={4}
                    placeholder="Sua Mensagem"
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none"
                  ></textarea>
                </div>
                
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition-colors duration-200">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-white/20">
          <p className="text-gray-400">
            © 2024 Designer UX/UI. Todos os direitos reservados. | Feito com ❤️ em São Paulo
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
