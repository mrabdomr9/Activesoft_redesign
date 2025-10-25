
import React, { useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="glass-panel p-8 rounded-xl hover:border-accent hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 h-full flex flex-col animate-on-scroll">
    <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-primary/80 text-white mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-white mb-3 font-display">{title}</h3>
    <p className="text-gray-300 flex-grow">{description}</p>
  </div>
);

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const title = t('seo.services.title', 'Our Services | Active Soft');
    const description = t('seo.services.description', 'Explore our comprehensive technology services, including Oracle ERP implementation, managed IT support, custom desktop applications, and enterprise security.');
    const keywords = t('seo.services.keywords', 'Oracle ERP Services, IT Support, Custom Applications, Enterprise Security, Active Soft');

    if (title) document.title = title;

    const setMetaTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    if (description) setMetaTag('description', description);
    if (keywords) setMetaTag('keywords', keywords);
  }, [t]);

  const services = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" /></svg>,
      title: t('services.erpTitle'),
      description: t('services.erpDesc')
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 18.75V16.5M16.5 3.75V16.5M12 12.75h4.5m-4.5 3H12M10.5 21l-1.5-1.5L7.5 21l-1.5-1.5L4.5 21l-1.5-1.5L1.5 21M21 3.75v.75m0 0h-4.5m4.5 0l-1.5 1.5M3.75 3.75h.75m0 0V3m0 0L3 3.75M3.75 21v-4.5m0 4.5h.75m0 0l-1.5-1.5M16.5 3.75l-1.5 1.5M21 3.75L19.5 5.25" /></svg>,
      title: t('services.itSupportTitle'),
      description: t('services.itSupportDesc')
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-1.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg>,
      title: t('services.customAppsTitle'),
      description: t('services.customAppsDesc')
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" /></svg>,
      title: t('services.securityTitle'),
      description: t('services.securityDesc')
    }
  ];

  return (
    <div className="bg-transparent py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white font-display animate-on-scroll">{t('services.title')}</h1>
          <p className="mt-4 text-lg text-gray-300 animate-on-scroll" style={{transitionDelay: '100ms'}}>{t('services.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;