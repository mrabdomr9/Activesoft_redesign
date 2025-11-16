import React, { useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Link } from 'react-router-dom';

interface Pricing {
  currency: string;
  startingAt: number;
  billingPeriod: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  pricing: Pricing;
}

const PricesPage: React.FC = () => {
  const { t, language } = useTranslation();

  useEffect(() => {
    const title = t('seo.prices.title', 'Pricing & Plans | Active Soft');
    const description = t('seo.prices.description', 'Transparent pricing for our Oracle ERP, custom development, and business intelligence solutions. Find a plan that fits your business needs.');
    const keywords = t('seo.prices.keywords', 'Active Soft Pricing, Oracle ERP Cost, Custom Software Price, IT Solutions Pricing');

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

  const services: Service[] = t('prices.services', []);
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-EG', {
      style: 'currency',
      currency: 'EGP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

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
            <h1 className="text-4xl font-bold text-white font-display animate-on-scroll">{t('prices.title')}</h1>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto animate-on-scroll" style={{ transitionDelay: '100ms' }}>
              {t('prices.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="glass-panel p-8 rounded-xl flex flex-col transition-all duration-300 hover:border-primary hover:-translate-y-2 animate-on-scroll"
                style={{ transitionDelay: `${(index % 3) * 100 + 200}ms` }}
              >
                <h3 className="text-2xl font-bold text-white font-display">{service.title}</h3>
                <p className="text-gray-400 mt-2 flex-grow">{service.description}</p>
                
                <div className="my-6">
                  <p className="text-sm text-gray-300">{t('prices.startsAt')}</p>
                  <p className="text-4xl font-bold text-white font-display">
                    {formatCurrency(service.pricing.startingAt)}
                    <span className="text-base font-normal text-gray-400"> {t('prices.perProject')}</span>
                  </p>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <h4 className="font-semibold text-gray-200 mb-4">{t('prices.features')}</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-accent flex-shrink-0 me-3 rtl:me-0 rtl:ms-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-8">
                  <Link 
                    to="/contact"
                    className="w-full block text-center bg-primary text-white py-3 px-6 rounded-md font-bold hover:bg-secondary transition-colors"
                  >
                    {t('prices.getQuote')}
                  </Link>
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

export default PricesPage;