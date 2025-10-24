import React, { useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface Client {
  name: string;
  logo: string;
}

const ClientsPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const title = t('seo.clients.title', 'Our Clients | Active Soft');
    const description = t('seo.clients.description', 'We are proud to partner with a diverse range of leading companies. See the clients who trust Active Soft for their technology solutions.');
    const keywords = t('seo.clients.keywords', 'Active Soft Clients, Our Partners, Client List, Technology Partnerships');

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

  const clientList: Client[] = t('clients.clientList', []);

  return (
    <div className="bg-transparent py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white font-display animate-on-scroll">{t('clients.title')}</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto animate-on-scroll" style={{ transitionDelay: '100ms' }}>
            {t('clients.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {clientList.map((client, index) => (
            <div
              key={index}
              className="group relative glass-panel p-6 rounded-xl flex items-center justify-center aspect-square transition-all duration-300 hover:border-primary hover:-translate-y-1.5 animate-on-scroll"
              style={{ transitionDelay: `${(index % 6) * 50 + 200}ms` }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                <p className="text-white text-center font-semibold text-sm">{client.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;