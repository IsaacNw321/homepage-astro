import type { ServiceCardProps } from "@/types";

const ServiceCard: React.FC<ServiceCardProps> = ({ service, iconMap }) => {
  const IconComponent = iconMap[service.icon] || iconMap['Placeholder'];
   return (
    <div className="flex justify-center align-middle">
      <div className="relative group w-10/12 max-w-sm">
        <div 
  className="absolute inset-0 z-0 bg-blue-600/50 rounded-lg animate-spin-glow hidden sm:block" 
  style={{ 
    width: '100%', 
    height: '100%',
  }}
>
</div>
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
}

export default ServiceCard;