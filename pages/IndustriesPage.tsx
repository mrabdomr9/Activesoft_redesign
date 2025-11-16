import React, { useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

const IndustriesPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const title = t('seo.industries.title', 'Industry Solutions | Active Soft');
    const description = t('seo.industries.description', 'Discover our industry-specific solutions for manufacturing, healthcare, and financial services.');
    const keywords = t('seo.industries.keywords', 'Manufacturing ERP, Healthcare IT, Financial Services Software, Industry Solutions, Active Soft');

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

  const industriesData = [
    { key: 'manufacturing', image: "https://images.unsplash.com/photo-1610891015188-5369212db097?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1529" },
    { key: 'healthcare', image: "https://images.unsplash.com/photo-1651525669944-00de65d3b8a5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { key: 'financial', image: "https://images.unsplash.com/photo-1758691736545-5c33b6255dca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332" },
    { key: 'retail', image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470" },
    { key: 'education', image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470" },
    { key: 'logistics', image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471" },
  ];

  return (
    <div className="min-h-screen digital-transformation-bg relative">
      {/* Technical Background Elements */}
      <div className="absolute inset-0">
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 50h20m20 0h10m20 0h30M50 0v20m0 20v10m0 20v30' stroke='%2306B6D4' stroke-width='1'/%3E%3Ccircle cx='20' cy='50' r='2' fill='%2306B6D4'/%3E%3Ccircle cx='50' cy='20' r='2' fill='%2306B6D4'/%3E%3Ccircle cx='50' cy='80' r='2' fill='%2306B6D4'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px'
        }}></div>
        
        {/* HUD Elements */}
        <div className="absolute inset-0 opacity-3" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20h40M20 40h30M20 60h20M140 20h40M150 40h30M160 60h20' stroke='%2306B6D4' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}></div>
        
        {/* Data Flow Lines */}
        <div className="absolute inset-0 opacity-2" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='300' height='300' viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 150 Q75 100 150 150 T300 150' stroke='%2306B6D4' stroke-width='0.5' fill='none' stroke-dasharray='5,5'/%3E%3C/svg%3E")`,
          backgroundSize: '300px 300px'
        }}></div>
        
        {/* Technical Schematics */}
        <div className="absolute inset-0 opacity-1" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50 L100 100 M150 50 L200 100 M250 50 L300 100 M50 150 L100 200 M150 150 L200 200 M250 150 L300 200' stroke='%2306B6D4' stroke-width='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: '400px 400px'
        }}></div>
      </div>
      
      {/* Content */}
      <div className="digital-transformation-content">
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white font-display animate-on-scroll">{t('industries.title')}</h1>
            <p className="mt-4 text-lg text-gray-300 animate-on-scroll" style={{ transitionDelay: '100ms' }}>{t('industries.subtitle')}</p>
          </div>
          <div className="space-y-16">
            {industriesData.map((industry, index) => (
              <div key={industry.key} className="grid md:grid-cols-2 gap-12 items-stretch glass-panel p-8 md:p-12 rounded-xl animate-on-scroll">
                <div className={`flex items-center justify-center ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                  <div className="w-full h-80 overflow-hidden rounded-lg shadow-xl">
                    <img src={industry.image} alt={t(`industries.${industry.key}.name`)} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-3xl font-bold text-secondary mb-4 font-display">{t(`industries.${industry.key}.name`)}</h2>
                  <h3 className="text-xl font-semibold text-white mb-2">{t('industries.challengesLabel')}</h3>
                  <p className="text-gray-300 mb-4 flex-grow">{t(`industries.${industry.key}.challenges`)}</p>
                  <h3 className="text-xl font-semibold text-white mb-2">{t('industries.solutionLabel')}</h3>
                  <p className="text-gray-300 flex-grow">{t(`industries.${industry.key}.solution`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default IndustriesPage;