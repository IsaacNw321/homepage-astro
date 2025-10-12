import React from 'react';
import { TbWorld, TbLayout } from 'react-icons/tb';
import { MdHeadsetMic } from 'react-icons/md';
import { AiOutlineLayout } from 'react-icons/ai';
import { 
  SiPagekit,
  SiWebflow,
  SiN8N,
  SiZapier,
  SiGlovo,
} from 'react-icons/si';

interface Service {
  title: string;
  description: string;
  icon: string; 
  link?: string; 
  button?: string; 
}

interface IconMap {
  [key: string]: React.ElementType;
}

const iconMap: IconMap = {
  'Web': SiWebflow, 
  'Zapier': SiZapier,
  'N8N': SiN8N,
  'Glovo': SiGlovo,
  'PageKit': SiPagekit,
  'Globe': TbWorld,           
  'Layout': AiOutlineLayout,       
  'Headphones': MdHeadsetMic,
};

const services: Service[] = [ 
  {
    "title": "Sitios Web Estáticos",
    "description": "Sitios web estáticos rápidos, responsivos y optimizados para SEO construidos con tecnologías modernas.",
    "icon": 'Web', 
    "button": "Ver Más",
    "link": "https://angels-app.vercel.app/"
  },
  {
    "title": "Aplicaciones Web",
    "description": "Aplicaciones web full-stack con integración robusta de backend y autenticación de usuarios.",
    "icon": "Layout",
    "button": "Saber Más",
    "link": "https://front-end-chat-nine.vercel.app/"
  },
  {
    "title": "Agente de Soporte al Cliente",
    "description": "Competente en comunicación bilingüe, proporcionando un servicio al cliente excepcional con herramientas como Zendesk.",
    "icon": "Headphones",
    "button": "Ver PDF",
    "link": "https://rxresu.me/isaac.pereira.50159/atencion-al-cliente"
  },
  {
    "title": "Transformo tu flujo de trabajo integrando soluciones con AI",
    "description": "Integramos herramientas de AI como Zapier o n8n directamente en su software existente o creado personalizadamente.",
    "icon": 'N8N', 
    "button": "Ver Más",
    "link": "https://angels-app.vercel.app/"
  },
];

const Services: React.FC = () => {
  return (
    <section className="w-full p-16 flex flex-col justify-center align-middle rounded-b-none rounded-xl bg-transparent lg:-mx-0 ">
      <div className="w-72 m-auto max-w-6xl px-4 sm:px-6 lg:w-full lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Mis servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => { 
            const IconComponent = iconMap[service.icon];
            
            return (
              <div key={index} className="flex justify-center">
                <div className="relative group w-full max-w-sm">
                  <div 
                    className="absolute inset-0 z-0 bg-blue-600/50 rounded-lg animate-spin-glow" 
                    style={{ 
                      width: '100%', 
                      height: '100%',
                    }}
                  ></div>
                  <div className="bg-gray-800 p-6 rounded-lg w-full max-w-sm text-center flex flex-col justify-between lg:h-80 relative z-10">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-gray-400 mb-4">{service.description}</p>
                      {IconComponent && <IconComponent className="mx-auto my-4" color="#2563EB" size={48} />}
                    </div>
                    {service.link && (
                      <div className="mt-4">
                        <a
                          href={service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                        >
                          {service.button}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;