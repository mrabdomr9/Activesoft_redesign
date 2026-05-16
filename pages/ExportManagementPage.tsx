import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import ServiceDetailLayout from '../components/ServiceDetailLayout';

const ExportManagementPage: React.FC = () => {
  const { t } = useTranslation();

  const features = t('services.exportModule.features', []) as string[] || [];
  const mainFeatures = t('services.exportModule.mainFeatures', []) as { title: string; desc: string }[] || [];
  const components = t('services.exportModule.components', []) as { title: string; desc: string }[] || [];

  return (
    <ServiceDetailLayout
      title={t('services.exportModule.title')}
      subtitle={t('services.exportModule.subtitle')}
      description={t('services.exportModule.desc')}
      seoTitle={t('seo.export.title', 'Export Stations Management System Egypt | ActiveSoft')}
      seoDescription={t('seo.export.description', 'Advanced export management system with shipment tracking, customs clearance, and integrated documents management.')}
      seoKeywords={t('seo.export.keywords', 'Export Management Egypt, Shipment Tracking System, Export Station ERP, ActiveSoft Export')}
      currentPath="/export-management"
    >
      {/* System Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">{t('services.exportModule.featuresTitle')}</h2>
            <div className="w-24 h-1.5 bg-cyan-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-cyan-100 transition-all duration-300 animate-on-scroll group" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 bg-white shadow-md rounded-2xl flex items-center justify-center text-cyan-600 mb-6 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <p className="text-lg text-slate-700 font-medium leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20 animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('services.exportModule.mainFeaturesTitle')}</h2>
            <p className="text-xl text-cyan-100/80 leading-relaxed">
              {t('services.exportModule.mainFeaturesDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="flex gap-6 p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors duration-300 animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-cyan-500/20 text-cyan-400 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Components Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">{t('services.exportModule.componentsTitle')}</h2>
            <div className="w-24 h-1.5 bg-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {components.map((component, index) => (
              <div key={index} className="bg-white p-8 rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-500 group animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center text-slate-600 mb-6 group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-2">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{component.title}</h3>
                <p className="text-slate-600 leading-relaxed">{component.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServiceDetailLayout>
  );
};

export default ExportManagementPage;
