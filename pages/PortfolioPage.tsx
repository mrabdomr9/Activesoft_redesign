
import React, { useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
}

const PortfolioPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const title = t('seo.portfolio.title', 'Our Portfolio | Active Soft');
    const description = t('seo.portfolio.description', 'View our gallery of custom desktop applications, showcasing the high-quality, user-centric interfaces we build.');
    const keywords = t('seo.portfolio.keywords', 'Application Portfolio, UI/UX Design, Custom Software Examples, Desktop Application Gallery, Active Soft');

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

  const portfolioItems: PortfolioItem[] = t('portfolio.items', []);

  return (
    <div className="bg-transparent py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white font-display animate-on-scroll">{t('portfolio.title')}</h1>
          <p className="mt-4 text-lg text-gray-300 animate-on-scroll" style={{ transitionDelay: '100ms' }}>{t('portfolio.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg border border-white/10 animate-on-scroll">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="glass-panel p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-white font-display">{item.title}</h3>
                    <p className="text-gray-200 mt-2">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;