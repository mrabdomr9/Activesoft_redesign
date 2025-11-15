import React, { useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

const PortfolioPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const title = t('seo.portfolio.title', 'ERP System Features | Active Soft');
    const description = t('seo.portfolio.description', 'Explore the comprehensive features of our Oracle ERP system, including general ledger, inventory management, costing, HR & payroll, and more.');
    const keywords = t('seo.portfolio.keywords', 'ERP Features, Oracle ERP, General Ledger, Inventory Management, Costing System, HR Payroll');

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

  // Get portfolio items from translations
  const portfolioItems = t('portfolio.items', [
    {
      title: "Custom CRM for Sales Teams",
      description: "A powerful desktop CRM application designed for high-performance sales tracking and client management.",
      image: " https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    },
    {
      title: "Inventory Management System",
      description: "An intuitive inventory system for a retail chain, providing real-time stock levels and automated reordering.",
      image: "https://picsum.photos/seed/inventory/800/600"
    }
  ]);

  return (
    <div className="bg-transparent py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white font-display animate-on-scroll">
            {t('portfolio.title', 'Our Application Portfolio')}
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto animate-on-scroll" style={{ transitionDelay: '100ms' }}>
            {t('portfolio.subtitle', 'A glimpse into the custom solutions we\'ve crafted for our clients.')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item: any, index: number) => (
            <div 
              key={index} 
              className="glass-panel rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 animate-on-scroll"
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-3">{item.title}</h2>
                <p className="text-gray-300 mb-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-panel p-8 rounded-xl inline-block max-w-3xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('portfolio.cta.title', 'Ready to Transform Your Business?')}
            </h3>
            <p className="text-gray-300 mb-6">
              {t('portfolio.cta.description', 'Discover how our solutions can streamline your operations and boost productivity.')}
            </p>
            <a 
              href="/contact" 
              className="px-6 py-3 bg-primary text-white font-bold rounded-md shadow-lg hover:bg-secondary transition-colors duration-300"
            >
              {t('portfolio.cta.button', 'Request a Demo')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;