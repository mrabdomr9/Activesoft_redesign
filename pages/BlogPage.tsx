import React, { useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

const BrochuresPage: React.FC = () => {
  const { t, language } = useTranslation();

  useEffect(() => {
    const title = t('seo.brochures.title', 'Download Our Brochures | Active Soft');
    const description = t('seo.brochures.description', 'Get detailed information about our services and solutions by downloading our official company brochures.');
    const keywords = t('seo.brochures.keywords', 'Active Soft Brochure, Company Profile, Service Catalog, Oracle ERP Details, Download');

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

  // PDF files information
  const pdfFiles = [
    {
      id: 1,
      name: t('brochures.generalFeatures', 'General Features'),
      fileName: '1 السمات العامة.pdf',
      description: t('brochures.generalFeaturesDesc', 'Overview of our general software features and capabilities')
    },
    {
      id: 2,
      name: t('brochures.generalAccounts', 'General Accounts'),
      fileName: '2 الحسابات العامة.pdf',
      description: t('brochures.generalAccountsDesc', 'Detailed information about our general accounting systems')
    },
    {
      id: 3,
      name: t('brochures.costSystem', 'Cost System'),
      fileName: '3 نظام التكاليف.pdf',
      description: t('brochures.costSystemDesc', 'Comprehensive guide to our cost management system')
    },
    {
      id: 4,
      name: t('brochures.inventorySystem', 'Inventory System'),
      fileName: '4 نظام المخازن.pdf',
      description: t('brochures.inventorySystemDesc', 'Complete documentation of our inventory management solution')
    },
    {
      id: 5,
      name: t('brochures.exportSystem', 'Export System'),
      fileName: '5 التصدير.pdf',
      description: t('brochures.exportSystemDesc', 'Information about our export management system')
    }
  ];

  const inputClasses = "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:ring-primary focus:border-primary transition-colors text-white placeholder-gray-400";

  return (
    <div className="bg-transparent py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white font-display animate-on-scroll">{t('brochures.title')}</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto animate-on-scroll" style={{ transitionDelay: '100ms' }}>
            {t('brochures.subtitle')}
          </p>
        </div>
        
        {/* PDF Download Section */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 animate-on-scroll">
            {pdfFiles.map((pdf) => (
              <div key={pdf.id} className="glass-panel p-6 rounded-xl hover:border-primary transition-all duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white">{pdf.name}</h3>
                    <p className="mt-2 text-gray-300">{pdf.description}</p>
                    <a 
                      href={`/PDFs/${pdf.fileName}`} 
                      download
                      className="mt-4 inline-flex items-center px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-secondary transition-colors"
                    >
                      {t('brochures.download', 'Download')} ({(pdf.id * 500) + 100} KB)
                      <svg className="ml-2 -mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-md mx-auto glass-panel p-8 md:p-12 rounded-xl animate-on-scroll" style={{ transitionDelay: '200ms' }}>
          <h2 className="text-2xl font-bold text-white mb-6">{t('brochures.requestFormTitle', 'Request More Information')}</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">{t('brochures.namePlaceholder')}</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder={t('brochures.namePlaceholder')} 
                required 
                className={inputClasses}
              />
            </div>
             <div>
              <label htmlFor="email" className="sr-only">{t('brochures.emailPlaceholder')}</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder={t('brochures.emailPlaceholder')} 
                required 
                className={inputClasses}
              />
            </div>
            <div className="text-center pt-2">
              <button 
                type="submit" 
                className="w-full px-8 py-3 bg-primary text-white font-bold rounded-md shadow-lg hover:bg-secondary transition-colors"
              >
                {t('brochures.requestInfo', 'Request Information')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BrochuresPage;