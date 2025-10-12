import React from 'react';
import type { Service, IconMap } from '@/types';
import ServiceCard from '../components/ServiceCard';
import { MdHeadsetMic } from 'react-icons/md';
import { AiOutlineLayout } from 'react-icons/ai';
import { 
  SiWebflow,
  SiN8N,
} from 'react-icons/si';


const iconMap: IconMap = {
  'Web': SiWebflow, 
  'N8N': SiN8N,      
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
            return(
              <ServiceCard key={index} service={service} iconMap={iconMap} />
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;