import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import ServiceDetailLayout from '../components/ServiceDetailLayout';

const ManufacturingPage: React.FC = () => {
  const { t } = useTranslation();

  const section1Items = t('services.manufacturingModule.section1Items', []) as { title: string; desc: string }[] || [];
  const section2Items = t('services.manufacturingModule.section2Items', []) as { title: string; desc: string }[] || [];
  const section3Items = t('services.manufacturingModule.section3Items', []) as { title: string; desc: string }[] || [];
  const section4Items = t('services.manufacturingModule.section4Items', []) as string[] || [];
  const section5Items = t('services.manufacturingModule.section5Items', []) as { title: string; desc: string }[] || [];
  const section6Items = t('services.manufacturingModule.section6Items', []) as { title: string; desc: string }[] || [];

  return (
    <ServiceDetailLayout
      title={t('services.manufacturingModule.title')}
      subtitle={t('services.manufacturingModule.subtitle')}
      description={t('services.manufacturingModule.desc')}
      seoTitle={t('seo.manufacturing.title', 'Costing & Manufacturing ERP System Egypt | ActiveSoft')}
      seoDescription={t('seo.manufacturing.description', 'ActiveSoft ERP uses advanced work-order methods for accurate Actual Costing in production management.')}
      seoKeywords={t('seo.manufacturing.keywords', 'Manufacturing ERP Egypt, Actual Costing Software, Factory Management System, BOM Tracking')}
      currentPath="/manufacturing-erp"
    >
      {/* 1. Pillars of Monthly Actual Cost */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">{t('services.manufacturingModule.section1Title')}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">{t('services.manufacturingModule.section1Desc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {section1Items.map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-3xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 animate-on-scroll group" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center text-cyan-600 mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                  <span className="text-2xl font-bold">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. AI in Material Issuance (BOM) & 3. Tracking Inspection */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            
            {/* Section 2 */}
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-10 text-cyan-400">{t('services.manufacturingModule.section2Title')}</h2>
              <div className="space-y-6">
                {section2Items.map((item, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3 */}
            <div className="animate-on-scroll" style={{ animationDelay: '200ms' }}>
              <h2 className="text-3xl font-bold mb-10 text-blue-400">{t('services.manufacturingModule.section3Title')}</h2>
              <div className="space-y-6">
                {section3Items.map((item, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Fair Distribution & 5. 3D Tracking System */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          
          {/* Section 4 */}
          <div className="max-w-6xl mx-auto bg-white rounded-[3rem] p-10 md:p-16 shadow-xl border border-slate-100 mb-20 animate-on-scroll flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t('services.manufacturingModule.section4Title')}</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">{t('services.manufacturingModule.section4Desc')}</p>
            </div>
            <div className="lg:w-1/2 space-y-4">
              {section4Items.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-5 bg-cyan-50 rounded-2xl border border-cyan-100">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-sm">
                    {index + 1}
                  </div>
                  <p className="text-slate-700 font-medium leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5 */}
          <div className="max-w-6xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900 mb-16">{t('services.manufacturingModule.section5Title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {section5Items.map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-3xl shadow-md border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl mb-6 shadow-lg flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. Ready-Mix Concrete Logistics */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl animate-on-scroll">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500 opacity-20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 opacity-20 rounded-full blur-[100px]" />
            
            <div className="relative z-10 text-center mb-12">
              <span className="inline-block px-4 py-1 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-full text-sm font-bold mb-4">
                Exclusive Feature
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('services.manufacturingModule.section6Title')}</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">{t('services.manufacturingModule.section6Desc')}</p>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {section6Items.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl hover:bg-white/20 transition-colors duration-300">
                  <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg">
                    {index === 0 ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    : index === 1 ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                    : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </ServiceDetailLayout>
  );
};

export default ManufacturingPage;
