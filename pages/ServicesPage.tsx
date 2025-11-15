
import React, { useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="glass-panel p-8 rounded-xl hover:border-white/20 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col animate-on-scroll">
    <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-primary/80 text-white mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-white mb-3 font-display">{title}</h3>
    <p className="text-gray-300 flex-grow">{description}</p>
  </div>
);

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const title = t('seo.services.title', 'Our Services | Active Soft');
    const description = t('seo.services.description', 'Explore our comprehensive technology services, including Oracle ERP implementation, managed IT support, custom desktop applications, and enterprise security.');
    const keywords = t('seo.services.keywords', 'Oracle ERP Services, IT Support, Custom Applications, Enterprise Security, Active Soft');

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

  const services = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" /></svg>,
      title: t('services.erpTitle'),
      description: t('services.erpDesc')
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 18.75V16.5M16.5 3.75V16.5M12 12.75h4.5m-4.5 3H12M10.5 21l-1.5-1.5L7.5 21l-1.5-1.5L4.5 21l-1.5-1.5L1.5 21M21 3.75v.75m0 0h-4.5m4.5 0l-1.5 1.5M3.75 3.75h.75m0 0V3m0 0L3 3.75M3.75 21v-4.5m0 4.5h.75m0 0l-1.5-1.5M16.5 3.75l-1.5 1.5M21 3.75L19.5 5.25" /></svg>,
      title: t('services.itSupportTitle'),
      description: t('services.itSupportDesc')
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-1.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg>,
      title: t('services.customAppsTitle'),
      description: t('services.customAppsDesc')
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" /></svg>,
      title: t('services.securityTitle'),
      description: t('services.securityDesc')
    }
  ];

  return (
    <div className="bg-transparent py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white font-display animate-on-scroll">{t('services.title')}</h1>
          <p className="mt-4 text-lg text-gray-300 animate-on-scroll" style={{transitionDelay: '100ms'}}>{t('services.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-white font-display mb-6">{t('services.erpFeaturesTitle', 'ERP System Features')}</h2>
          <p className="text-lg text-gray-300">{t('services.erpFeaturesDesc', 'Our ERP system is designed to provide comprehensive solutions for businesses of all sizes. Here are some of the key features it offers:')}</p>

          {/* General Features Section */}
          <div className="glass-panel p-6 rounded-xl mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
              <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              {t('services.generalFeatures', 'General Features')}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('services.features.oracleDB', 'Powerful and stable Oracle database')}
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('services.features.multiUser', 'Multiple user permissions with precise management')}
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('services.features.remoteAccess', 'Ability to work from anywhere via the Internet')}
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('services.features.autoBackup', 'Automatic backups created multiple times daily')}
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('services.features.auditTrail', 'Complete audit trail showing who added, modified, or deleted')}
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('services.features.employeeDocs', 'Entry of employee photos and documents')}
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('services.features.foreignCurrency', 'Foreign currency support with fixed or variable rates per transaction')}
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('services.features.multiCompany', 'Multiple companies or branches with consolidated reports')}
              </li>
            </ul>
          </div>

          {/* Main Modules Section */}
          <div className="glass-panel p-6 rounded-xl mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
              <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
              {t('services.mainModules', 'Main System Modules')}
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>{t('services.modules.generalLedger', 'General Ledger')}</li>
              <li>{t('services.modules.inventory', 'Inventory Management')}</li>
              <li>{t('services.modules.costing', 'Costing System')}</li>
              <li>{t('services.modules.hr', 'HR & Payroll')}</li>
              <li>{t('services.modules.planning', 'Planning')}</li>
              <li>{t('services.modules.purchasesSales', 'Purchases & Sales')}</li>
            </ol>
          </div>

          {/* Detailed Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t('services.generalLedger', 'General Ledger')}
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-accent mr-2 mt-1" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                  </svg>
                  {t('services.features.accountingChart', 'Accounting chart with 4 levels')}
                </li>
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-accent mr-2 mt-1" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                  </svg>
                  {t('services.features.exchangeRate', 'Exchange rate determination for foreign currencies')}
                </li>
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-accent mr-2 mt-1" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                  </svg>
                  {t('services.features.notes', 'Notes entry for each journal entry item')}
                </li>
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-accent mr-2 mt-1" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                  </svg>
                  {t('services.features.multiEntry', 'Support for multi-entry vouchers')}
                </li>
              </ul>
            </div>

            <div className="glass-panel p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                {t('services.cashManagement', 'Cash Management')}
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-accent mr-2 mt-1" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                  </svg>
                  {t('services.features.unlimitedCashiers', 'Unlimited number of cashiers')}
                </li>
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-accent mr-2 mt-1" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                  </svg>
                  {t('services.features.cashierLink', 'Link each cashier to a specific employee')}
                </li>
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-accent mr-2 mt-1" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                  </svg>
                  {t('services.features.collectionPayment', 'Recording collection and payment operations with separate documents')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;