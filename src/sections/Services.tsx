import React from 'react';
import type { Service, IconMap } from '@/types';
import ServiceCard from '../components/ServiceCard';
import { MdHeadsetMic } from 'react-icons/md';
import { AiOutlineLayout, AiOutlineCode } from 'react-icons/ai';
import { 
  SiN8N,
} from 'react-icons/si';
import { useT } from '@/context/LanguageContext';

const iconMap: IconMap = {
  'Web': AiOutlineCode, 
  'N8N': SiN8N,      
  'Layout': AiOutlineLayout,       
  'Headphones': MdHeadsetMic,
};

const Services: React.FC = () => {
  const { t } = useT()
  const servicest = t.services.items
  return (
    <section className="w-full p-4 flex flex-col justify-start align-middle rounded-b-none rounded-xl bg-transparent lg:-mx-0 "> 
        <h2 className="text-4xl font-bold text-center mb-12">{t.services.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {servicest.map((service, index) => { 
            return(
              <ServiceCard key={index} service={service} iconMap={iconMap} />
            )
          })}
      </div>
    </section>
  );
};

export default Services;