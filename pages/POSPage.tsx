import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import ServiceDetailLayout from '../components/ServiceDetailLayout';

const POSPage: React.FC = () => {
  const { t } = useTranslation();

  const posFeatures = [
    { title: t('services.pos.features.fastCheckout'), desc: t('services.pos.features.fastCheckoutDesc') },
    { title: t('services.pos.features.multiBranchSync'), desc: t('services.pos.features.multiBranchSyncDesc') },
    { title: t('services.pos.features.paymentMethods'), desc: t('services.pos.features.paymentMethodsDesc') },
    { title: t('services.pos.features.hardwareSupport'), desc: t('services.pos.features.hardwareSupportDesc') },
    { title: t('services.pos.features.userPermissions'), desc: t('services.pos.features.userPermissionsDesc') },
    { title: t('services.pos.features.salesAnalytics'), desc: t('services.pos.features.salesAnalyticsDesc') }
  ];

  return (
    <ServiceDetailLayout
      title={t('services.pos.title', 'Point of Sale (POS) System')}
      subtitle={t('nav.pos', 'POS System')}
      description={t('services.pos.desc', 'Fast and reliable retail solution integrated with your central ERP for seamless multi-branch management.')}
      seoTitle={t('seo.pos.title', 'POS System Egypt | ActiveSoft')}
      seoDescription={t('seo.pos.description', 'Best POS system for retail and multi-branch companies in Egypt. Fast, reliable, and fully integrated with inventory and accounting.')}
      seoKeywords={t('seo.pos.keywords', 'POS System Egypt, Point of Sale Software, Retail Management System, ActiveSoft POS')}
      currentPath="/pos-system"
    >
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
              <div className="animate-on-scroll">
                <h3 className="text-4xl font-bold text-slate-800 mb-8">{t('services.pos.modernizeTitle', 'Modernize Your Checkout')}</h3>
                <p className="text-xl text-slate-600 leading-relaxed mb-10">
                  {t('services.pos.modernizeDesc', 'Our POS system is built for speed and accuracy. Whether you have a single store or a nationwide chain, our solution scales with your growth.')}
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="text-3xl font-bold text-cyan-600 mb-2">0.5s</div>
                    <p className="text-sm text-slate-500 uppercase tracking-wider">{t('services.pos.speedLabel', 'Checkout Speed')}</p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="text-3xl font-bold text-cyan-600 mb-2">100%</div>
                    <p className="text-sm text-slate-500 uppercase tracking-wider">{t('services.pos.syncLabel', 'Data Sync')}</p>
                  </div>
                </div>
              </div>
              <div className="animate-on-scroll" style={{ transitionDelay: '200ms' }}>
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1974&auto=format&fit=crop" 
                  alt="POS System" 
                  className="rounded-[3rem] shadow-2xl"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-cyan-500/30 hover:bg-white hover:shadow-2xl transition-all duration-300 animate-on-scroll"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="w-10 h-10 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ServiceDetailLayout>
  );
};

export default POSPage;
