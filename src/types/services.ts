export interface Service {
  title: string;
  description: string;
  icon: string; 
  link?: string; 
  button?: string; 
}

export interface IconMap {
  [key: string]: React.ElementType;
}

export interface ServiceCardProps {
  service: Service;
  iconMap: IconMap;
}