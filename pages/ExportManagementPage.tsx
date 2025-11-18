import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const ExportManagementPage: React.FC = () => {
  const { t } = useTranslation();

  // Get translation data with fallbacks
  const features = t('exportManagement.features', []);
  const cards = t('exportManagement.cards', []);

  // Ensure features and cards are arrays
  const featuresArray = Array.isArray(features) ? features : [];
  const cardsArray = Array.isArray(cards) ? cards : [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 50h20m20 0h10m20 0h30M50 0v20m0 20v10m0 20v30' stroke='%2306B6D4' stroke-width='1'/%3E%3Ccircle cx='20' cy='50' r='2' fill='%2306B6D4'/%3E%3Ccircle cx='50' cy='20' r='2' fill='%2306B6D4'/%3E%3Ccircle cx='50' cy='80' r='2' fill='%2306B6D4'/%3E%3C/svg%3E")`,
            backgroundSize: '150px 150px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('exportManagement.title')}</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-cyan-300">{t('exportManagement.subtitle')}</h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {t('exportManagement.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{t('exportManagement.featuresTitle')}</h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {featuresArray.map((feature: string, index: number) => (
              <div key={index} className="flex items-start rtl:flex-row-reverse bg-slate-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold ml-4 rtl:ml-0 rtl:mr-4">
                  {index + 1}
                </div>
                <p className="text-slate-700 text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{t('exportManagement.keyFeaturesTitle')}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('exportManagement.keyFeaturesDescription')}
            </p>
            <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Export Documentation */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{t('exportManagement.exportDocumentationTitle')}</h3>
              <p className="text-slate-600">
                {t('exportManagement.exportDocumentationDescription')}
              </p>
            </div>

            {/* Customs Clearance */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{t('exportManagement.customsClearanceTitle')}</h3>
              <p className="text-slate-600">
                {t('exportManagement.customsClearanceDescription')}
              </p>
            </div>

            {/* Shipping Management */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{t('exportManagement.shippingManagementTitle')}</h3>
              <p className="text-slate-600">
                {t('exportManagement.shippingManagementDescription')}
              </p>
            </div>

            {/* Quality Control */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{t('exportManagement.qualityControlTitle')}</h3>
              <p className="text-slate-600">
                {t('exportManagement.qualityControlDescription')}
              </p>
            </div>

            {/* Financial Management */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{t('exportManagement.financialManagementTitle')}</h3>
              <p className="text-slate-600">
                {t('exportManagement.financialManagementDescription')}
              </p>
            </div>

            {/* Reporting and Analytics */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{t('exportManagement.reportingTitle')}</h3>
              <p className="text-slate-600">
                {t('exportManagement.reportingDescription')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{t('exportManagement.cardsTitle')}</h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsArray.map((card: any, index: number) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {card.icon ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    )}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{card.title}</h3>
                <p className="text-slate-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('exportManagement.ctaTitle', 'Interested in an export station management system?')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{t('exportManagement.ctaDescription', 'Contact us today to learn more about how our system can help you manage your export operations efficiently and accurately.')}</p>
          <a href="/contact" className="inline-block bg-white text-cyan-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
            {t('exportManagement.contactUs', 'Contact Us')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default ExportManagementPage;
