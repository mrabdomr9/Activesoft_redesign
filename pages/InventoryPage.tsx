import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import ServiceDetailLayout from '../components/ServiceDetailLayout';

const InventoryPage: React.FC = () => {
  const { t } = useTranslation();

  const structureItems = t('services.inventoryModule.structureItems', []) as string[] || [];
  const reportItems = t('services.inventoryModule.reportsItems', []) as string[] || [];
  const accountItems = t('services.inventoryModule.basicAccountsItems', []) as any[] || [];

  return (
    <ServiceDetailLayout
      title={t('services.inventoryModule.title')}
      subtitle={t('services.inventoryModule.subtitle')}
      description={t('services.inventoryModule.reportsDesc')}
      seoTitle={t('seo.inventory.title', 'Inventory Management System Egypt | ActiveSoft')}
      seoDescription={t('seo.inventory.description', 'Advanced inventory tracking, valuation, and reporting. Integrated with accounting and production modules.')}
      seoKeywords={t('seo.inventory.keywords', 'Inventory System Egypt, Warehouse Management, Stock Tracking Software, ActiveSoft Inventory')}
      currentPath="/inventory-management"
    >
      {/* Stock Structure Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
            <div className="lg:w-1/2 animate-on-scroll">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">{t('services.inventoryModule.structureTitle')}</h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">{t('services.inventoryModule.structureDesc')}</p>
              <div className="space-y-4 mb-8">
                {structureItems.map((item, index) => (
                  <div key={index} className="flex items-center p-5 bg-slate-50 rounded-2xl hover:bg-cyan-50 transition-colors duration-300">
                    <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 mr-4 rtl:mr-0 rtl:ml-4 font-bold">
                      {index + 1}
                    </div>
                    <span className="text-lg font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
              
              {/* Flexible Classification Alert/Highlight */}
              <div className="p-6 bg-cyan-50 border-l-4 border-cyan-500 rounded-r-2xl mb-10 animate-on-scroll">
                <div className="flex items-center">
                   <svg className="w-6 h-6 text-cyan-500 mr-3 rtl:mr-0 rtl:ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-cyan-800 font-bold">{t('services.inventoryModule.structureAdditional')}</p>
                </div>
              </div>

              <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white">
                <h4 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center mr-4 rtl:mr-0 rtl:ml-4 text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                  </span>
                  {t('services.inventoryModule.structureLots')}
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  {(t('services.inventoryModule.lotsFunctionsItems', []) as string[] || []).map((func, i) => (
                    <div key={i} className="flex items-start bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="w-6 h-6 bg-cyan-500/20 rounded flex items-center justify-center mr-3 rtl:mr-0 rtl:ml-3 mt-0.5">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                      </div>
                      <span className="text-gray-300 font-medium">{func}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative animate-on-scroll">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-[3rem] blur-2xl" />
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                alt="Warehouse Structure"
                className="relative z-10 rounded-[3rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700"
              />
              
              <div className="mt-12 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl relative z-10 overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                <h4 className="text-2xl font-bold text-slate-900 mb-6 relative z-10">{t('services.inventoryModule.itemAttributesTitle')}</h4>
                <p className="text-slate-500 mb-6 relative z-10">{t('services.inventoryModule.itemAttributesDesc')}</p>
                <div className="flex flex-wrap gap-3 mb-8 relative z-10">
                  {(t('services.inventoryModule.itemAttributesItems', []) as string[] || []).map((attr, i) => (
                    <span key={i} className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-2xl text-sm font-bold border border-slate-100 group-hover:border-cyan-200 transition-colors">
                      {attr}
                    </span>
                  ))}
                </div>
                <div className="p-4 bg-slate-900 rounded-2xl text-white inline-block relative z-10">
                  <p className="text-cyan-400 font-bold text-sm italic">{t('services.inventoryModule.itemAttributesReports')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valuation & Reports Grid */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -ml-48 -mb-48" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Valuation Method */}
            <div className="p-12 bg-white/5 backdrop-blur-md rounded-[3rem] border border-white/10 animate-on-scroll group hover:border-cyan-500/50 transition-colors">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center text-cyan-400 mb-8 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-3xl font-bold mb-8 text-cyan-400">{t('services.inventoryModule.valuationTitle')}</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-cyan-500/20 rounded flex items-center justify-center mr-4 rtl:mr-0 rtl:ml-4 mt-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  </div>
                  <span className="text-xl text-gray-200">{t('services.inventoryModule.valuationDesc1')}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-cyan-500/20 rounded flex items-center justify-center mr-4 rtl:mr-0 rtl:ml-4 mt-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  </div>
                  <span className="text-xl text-gray-200">{t('services.inventoryModule.valuationDesc2')}</span>
                </li>
              </ul>
            </div>

            {/* Reports List */}
            <div className="p-12 bg-gradient-to-br from-cyan-600 to-blue-700 rounded-[3rem] shadow-2xl animate-on-scroll relative overflow-hidden group" style={{ transitionDelay: '200ms' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
              <h3 className="text-3xl font-bold mb-6 text-white">{t('services.inventoryModule.reportsTitle')}</h3>
              <p className="text-white/80 mb-8 text-lg">{t('services.inventoryModule.reportsDesc')}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {reportItems.map((report, index) => (
                  <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse bg-white/10 p-4 rounded-2xl border border-white/5 hover:bg-white/20 transition-all">
                    <svg className="w-5 h-5 flex-shrink-0 text-cyan-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="text-sm font-medium text-white">{report}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Basic Accounts Required */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">{t('services.inventoryModule.basicAccountsTitle')}</h2>
            <p className="text-xl text-slate-600">{t('services.inventoryModule.basicAccountsDesc')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {accountItems.map((item, index) => (
              <div 
                key={index}
                className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-cyan-500 hover:shadow-2xl transition-all duration-500 animate-on-scroll group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-cyan-600 mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-4">{item.account}</h4>
                <div className="space-y-3">
                  {item.details?.map((detail: string, dIdx: number) => (
                    <div key={dIdx} className="flex items-start text-slate-600 text-sm leading-relaxed">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2 rtl:mr-0 rtl:ml-2 mt-1.5 flex-shrink-0" />
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] text-white overflow-hidden relative group animate-on-scroll">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-cyan-400">{t('services.inventoryModule.reorderTitle', 'Reorder Level System')}</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {t('services.inventoryModule.reorderDesc1', 'Apply reorder level for materials to ensure you never run out of critical stock. The system automatically identifies items that need to be reordered.')}
                </p>
              </div>
              <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-4 text-white">{t('services.inventoryModule.valuationTitle', 'Inventory Valuation')}</h4>
                <p className="text-gray-400">
                  {t('services.inventoryModule.valuationDesc1', 'Valuation using monthly moving average for high precision financial reporting.')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServiceDetailLayout>
  );
};

export default InventoryPage;
