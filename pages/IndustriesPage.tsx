
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
    { key: 'healthcare', image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" },
    { key: 'financial', image: "https://images.unsplash.com/photo-1758691736545-5c33b6255dca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332" },
  ];

  return (
    <div className="py-20 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white font-display animate-on-scroll">{t('industries.title')}</h1>
          <p className="mt-4 text-lg text-gray-300 animate-on-scroll" style={{ transitionDelay: '100ms' }}>{t('industries.subtitle')}</p>
        </div>
        <div className="space-y-16">
          {industriesData.map((industry, index) => (
            <div key={industry.key} className="grid md:grid-cols-2 gap-12 items-center glass-panel p-8 md:p-12 rounded-xl animate-on-scroll">
              <div className={`${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                <img src={industry.image} alt={t(`industries.${industry.key}.name`)} className="rounded-lg shadow-xl" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-4 font-display">{t(`industries.${industry.key}.name`)}</h2>
                <h3 className="text-xl font-semibold text-white mb-2">{t('industries.challengesLabel')}</h3>
                <p className="text-gray-300 mb-4">{t(`industries.${industry.key}.challenges`)}</p>
                <h3 className="text-xl font-semibold text-white mb-2">{t('industries.solutionLabel')}</h3>
                <p className="text-gray-300">{t(`industries.${industry.key}.solution`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesPage;