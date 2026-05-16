import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import ServiceDetailLayout from '../components/ServiceDetailLayout';

const AccountingPage: React.FC = () => {
  const { t } = useTranslation();

  // 1. General Accounts
  const generalAccountsFeatures = t('services.accountingModule.generalAccounts.features', []) as { title: string; desc: string }[] || [];
  const generalAccountsReports = t('services.accountingModule.generalAccounts.reports', []) as string[] || [];

  // 2. Treasury
  const treasuryFeatures = t('services.accountingModule.treasury.features', []) as string[] || [];

  // 3. Banks & Checks
  const banksFeatures = t('services.accountingModule.banksAndChecks.features', []) as { title: string; desc: string }[] || [];
  const banksMovements = t('services.accountingModule.banksAndChecks.movements', []) as string[] || [];
  const banksReports = t('services.accountingModule.banksAndChecks.reports', []) as string[] || [];

  // 4. Fixed Assets
  const assetsFeatures = t('services.accountingModule.fixedAssets.features', []) as string[] || [];
  const assetsReports = t('services.accountingModule.fixedAssets.reports', []) as string[] || [];

  return (
    <ServiceDetailLayout
      title={t('services.accountingModule.title')}
      subtitle={t('services.accountingModule.subtitle')}
      description={t('services.accountingModule.desc')}
      seoTitle={t('seo.accounting.title', 'Financial & Accounting ERP System Egypt | ActiveSoft')}
      seoDescription={t('seo.accounting.description', 'Comprehensive financial management software in Egypt. Manage general accounts, treasury, banks, checks, and fixed assets with high accuracy.')}
      seoKeywords={t('seo.accounting.keywords', 'Accounting ERP Egypt, Financial System, Fixed Assets Management, Treasury Software, ActiveSoft Accounting')}
      currentPath="/accounting-erp"
    >
      {/* 1. General Accounts Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">{t('services.accountingModule.generalAccounts.title')}</h2>
            <div className="w-24 h-1.5 bg-cyan-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {generalAccountsFeatures.map((feature, index) => (
                <div key={index} className="bg-slate-50 border border-slate-100 p-6 rounded-3xl hover:bg-white hover:shadow-xl hover:border-cyan-100 transition-all duration-300 animate-on-scroll">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                    <span className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-lg flex items-center justify-center mr-3 rtl:mr-0 rtl:ml-3 flex-shrink-0 shadow-sm text-sm">
                      {index + 1}
                    </span>
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1 animate-on-scroll" style={{ animationDelay: '200ms' }}>
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-[2.5rem] shadow-2xl text-white sticky top-24">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-cyan-400 backdrop-blur-md">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <h3 className="text-2xl font-bold mb-6">{t('services.accountingModule.generalAccounts.reportsTitle')}</h3>
                <ul className="space-y-4">
                  {generalAccountsReports.map((report, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-cyan-400 mt-0.5 mr-3 rtl:mr-0 rtl:ml-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-slate-300 leading-relaxed text-sm">{report}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Treasury Section */}
      <section className="py-24 bg-cyan-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold mb-12">{t('services.accountingModule.treasury.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left rtl:text-right">
              {treasuryFeatures.map((feature, index) => (
                <div key={index} className="bg-black/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-black/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mb-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <p className="text-cyan-50 font-medium leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Banks & Checks Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">{t('services.accountingModule.banksAndChecks.title')}</h2>
              <div className="w-24 h-1.5 bg-cyan-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 animate-on-scroll">
                {banksFeatures.map((feature, index) => (
                  <div key={index} className="flex gap-6 bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 flex-shrink-0">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative animate-on-scroll" style={{ animationDelay: '200ms' }}>
                <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative z-10 border border-slate-800">
                  <h4 className="text-2xl font-bold mb-6 text-cyan-400">{t('services.accountingModule.banksAndChecks.movementsTitle')}</h4>
                  <ul className="space-y-4 mb-10">
                    {banksMovements.map((movement, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 rtl:mr-0 rtl:ml-3 flex-shrink-0" />
                        <span className="text-slate-300 leading-relaxed">{movement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                    <h4 className="text-lg font-bold mb-4 text-white flex items-center">
                      <svg className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      {t('services.accountingModule.banksAndChecks.reportsTitle')}
                    </h4>
                    <ul className="space-y-3">
                      {banksReports.map((report, index) => (
                        <li key={index} className="flex items-center text-slate-400 text-sm">
                          <svg className="w-4 h-4 text-cyan-500 mr-2 rtl:mr-0 rtl:ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          {report}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Decorative blob behind the card */}
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-cyan-200 rounded-[3rem] -z-10 blur-sm opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Fixed Assets Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 animate-on-scroll">
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">{t('services.accountingModule.fixedAssets.title')}</h2>
                <div className="w-24 h-1.5 bg-cyan-500 rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 animate-on-scroll">
                {assetsFeatures.map((feature, index) => (
                  <div key={index} className="p-6 bg-slate-50 border border-slate-100 rounded-3xl hover:shadow-lg transition-all">
                    <div className="w-10 h-10 bg-white shadow-sm rounded-xl flex items-center justify-center text-cyan-600 mb-4">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    </div>
                    <p className="text-slate-700 font-medium leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-4 animate-on-scroll" style={{ animationDelay: '200ms' }}>
                <div className="bg-cyan-50 border border-cyan-100 p-8 rounded-[2.5rem] h-full">
                  <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                    <svg className="w-6 h-6 text-cyan-600 mr-3 rtl:mr-0 rtl:ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    {t('services.accountingModule.fixedAssets.reportsTitle')}
                  </h4>
                  <ul className="space-y-4">
                    {assetsReports.map((report, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-8 h-8 bg-white text-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-sm mr-4 rtl:mr-0 rtl:ml-4 font-bold text-sm">
                          {index + 1}
                        </div>
                        <span className="text-slate-700 leading-relaxed mt-1.5">{report}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </ServiceDetailLayout>
  );
};

export default AccountingPage;
