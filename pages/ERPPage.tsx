import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import ServiceDetailLayout from '../components/ServiceDetailLayout';

const ERPPage: React.FC = () => {
  const { t } = useTranslation();

  const categories = [
    'mainFeatures',
    'generalAccounts',
    'salesCustomers',
    'purchasesSuppliers',
    'inventoryWarehouses',
    'treasuriesBanks',
    'costManagement',
    'fixedAssets',
    'hrOptional',
    'reports',
    'additionalFeatures'
  ];

  return (
    <ServiceDetailLayout
      title={t('services.erp.title', 'Active Soft ERP Solutions')}
      subtitle={t('services.erp.concept.title', 'Comprehensive Business Management')}
      description={t('services.erp.concept.points.0', 'Integrated accounting and administrative system for managing all commercial and industrial activities')}
      seoTitle={t('seo.erp.title', 'ERP Software & Business Management System | ActiveSoft')}
      seoDescription={t('seo.erp.description', 'Comprehensive ERP solution for businesses in Egypt. Integrate sales, inventory, and accounting into one powerful system.')}
      seoKeywords={t('seo.erp.keywords', 'ERP System Egypt, ERP Software Egypt, Business Management Software, ActiveSoft ERP')}
      currentPath="/erp-system"
    >
      {/* Hero-like Intro Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
            <div className="lg:w-1/2 animate-on-scroll">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
                {t('services.erp.title')}
              </h2>
              <div className="space-y-6">
                {(t('services.erp.concept.points', []) as string[] || []).map((point, idx) => (
                  <p key={idx} className="text-xl text-slate-600 leading-relaxed">
                    {point}
                  </p>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 rounded-[4rem] blur-3xl animate-pulse" />
              <div className="relative bg-slate-900 rounded-[3rem] p-8 shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-40 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm" />
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-cyan-500 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/50">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">{t('services.title')}</h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {categories.map((category, index) => (
              <div 
                key={category} 
                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-cyan-500/30 hover:shadow-2xl transition-all duration-500 animate-on-scroll group"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-cyan-600 mb-8 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500 shadow-sm">
                  <span className="font-black text-2xl">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6 group-hover:text-cyan-600 transition-colors">
                  {t(`services.erp.${category}.title`)}
                </h3>
                <ul className="space-y-4">
                  {(t(`services.erp.${category}.points`, []) as string[] || []).map((point: string, idx: number) => (
                    <li key={idx} className="flex items-start text-slate-600 group-hover:text-slate-700 transition-colors">
                      <svg className="h-5 w-5 text-cyan-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Highlight */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-gradient-to-r from-slate-900 to-slate-800 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden animate-on-scroll">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 opacity-10 rounded-full blur-[120px]" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  {t('services.erp.additionalFeatures.title')}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {(t('services.erp.additionalFeatures.points', []) as string[] || []).map((point, idx) => (
                    <div key={idx} className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mr-4 rtl:mr-0 rtl:ml-4" />
                      <span className="text-gray-200 font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center lg:text-right rtl:lg:text-left">
                <a 
                  href="/contact" 
                  className="inline-block px-12 py-5 bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-xl rounded-full shadow-2xl shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
                >
                  {t('contact.button', 'Get Started')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServiceDetailLayout>
  );
};

export default ERPPage;
