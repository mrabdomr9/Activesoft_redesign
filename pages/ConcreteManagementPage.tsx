import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import ServiceDetailLayout from '../components/ServiceDetailLayout';

const ConcreteManagementPage: React.FC = () => {
  const { t } = useTranslation();

  // Get translation data with fallbacks
  const features = t('services.concreteManagement.features', []);
  const cards = t('services.concreteManagement.cards', []);

  // Ensure features and cards are arrays
  const featuresArray = Array.isArray(features) ? features : [];
  const cardsArray = Array.isArray(cards) ? cards : [];

  const keyFeatures = [
    { key: 'multiPlant', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
    { key: 'productionTracking', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
    { key: 'inventoryAlerts', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
    { key: 'qualityControl', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
    { key: 'directSales', icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' },
    { key: 'detailedReporting', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' }
  ];

  return (
    <ServiceDetailLayout
      title={t('services.concreteManagement.title')}
      subtitle={t('services.concreteManagement.subtitle')}
      description={t('services.concreteManagement.description')}
      seoTitle={t('seo.concrete.title', 'Ready-Mix Concrete Plant Management System | ActiveSoft')}
      seoDescription={t('seo.concrete.description', 'Advanced ERP system for ready-mix concrete plants, managing BOM, production, inventory, and cost centers with high precision.')}
      seoKeywords={t('seo.concrete.keywords', 'Concrete Management System, Ready Mix ERP, Concrete Factory Software, ActiveSoft Concrete System, Ready Mix Concrete Plant Management Egypt')}
      currentPath="/concrete-management-system"
    >
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">{t('services.concreteManagement.featuresTitle')}</h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {featuresArray.map((feature: string, index: number) => (
              <div key={index} className="flex items-start bg-slate-50 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 animate-on-scroll" style={{animationDelay: `${index * 50}ms`}}>
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-cyan-500 text-white flex items-center justify-center font-bold mr-4 rtl:mr-0 rtl:ml-4">
                  {index + 1}
                </div>
                <p className="text-slate-700 text-lg leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">{t('services.concreteManagement.keyFeaturesTitle')}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('services.concreteManagement.keyFeaturesDescription')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feat, index) => (
              <div key={feat.key} className="bg-white rounded-[2rem] shadow-xl p-8 hover:shadow-2xl transition-all duration-500 animate-on-scroll group" style={{animationDelay: `${index * 100}ms`}}>
                <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-500 transition-colors duration-300">
                  <svg className="w-8 h-8 text-cyan-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feat.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{t(`services.concreteManagement.${feat.key}Title`)}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {t(`services.concreteManagement.${feat.key}Description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Cards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">{t('concreteManagement.cardsTitle')}</h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsArray.map((card: any, index: number) => (
              <div key={index} className="bg-slate-50 rounded-3xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 animate-on-scroll group" style={{animationDelay: `${index * 100}ms`}}>
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {card.icon ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    )}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServiceDetailLayout>
  );
};

export default ConcreteManagementPage;