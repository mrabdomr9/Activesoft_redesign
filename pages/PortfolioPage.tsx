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
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Inventory Management System",
      description: "An intuitive inventory system for a retail chain, providing real-time stock levels and automated reordering.",
      image: "https://picsum.photos/seed/inventory/800/600"
    },
    {
      title: "Healthcare Management System",
      description: "A comprehensive healthcare management solution integrating patient records, billing, and regulatory compliance in a unified platform.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Financial Services Platform",
      description: "A secure financial services platform with real-time transaction processing, risk management, and regulatory compliance features.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "E-Commerce Solution",
      description: "A complete e-commerce platform with inventory management, payment processing, and customer analytics.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Manufacturing ERP System",
      description: "An end-to-end manufacturing ERP solution with production planning, quality control, and supply chain management.",
      image: "https://images.unsplash.com/photo-1581091226033-d5d88e9218aa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ]);

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
    </div>
    </div>
  );
};

export default PortfolioPage;