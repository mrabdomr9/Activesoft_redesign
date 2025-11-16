import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

const SiteMapPage: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const { t } = useTranslation();

  // Define the site structure based on navigation
  const siteStructure = [
    {
      title: t('nav.home'),
      path: '/',
      children: []
    },
    {
      title: t('nav.solutions'),
      path: null,
      children: [
        { title: t('nav.services'), path: '/services' },
        { title: t('nav.industries'), path: '/industries' },
        { title: t('nav.pricing'), path: '/prices' }
      ]
    },
    {
      title: t('nav.ourWork'),
      path: null,
      children: [
        { title: t('nav.caseStudies'), path: '/case-studies' },
        { title: t('nav.portfolio'), path: '/portfolio' },
        { title: t('nav.clients'), path: '/clients' }
      ]
    },
    {
      title: t('nav.company'),
      path: null,
      children: [
        { title: t('nav.about'), path: '/about' },
        { title: t('nav.brochures'), path: '/brochures' }
      ]
    },
    {
      title: t('nav.contact'),
      path: '/contact',
      children: []
    }
  ];

  // Additional detailed sections from services page
  const detailedSections = [
    {
      title: t('services.erpTitle'),
      path: '/services',
      children: [
        { title: t('services.erpFeaturesTitle'), path: '/services#erp-features' },
        { title: t('services.generalLedger'), path: '/services#general-ledger' },
        { title: t('services.cashManagement'), path: '/services#cash-management' },
        { title: t('services.modules.generalLedger'), path: '/services#general-ledger-module' },
        { title: t('services.modules.inventory'), path: '/services#inventory-module' },
        { title: t('services.modules.costing'), path: '/services#costing-module' },
        { title: t('services.modules.hr'), path: '/services#hr-module' },
        { title: t('services.modules.planning'), path: '/services#planning-module' },
        { title: t('services.modules.purchasesSales'), path: '/services#purchases-sales-module' }
      ]
    },
    {
      title: t('services.costingModule.title'),
      path: '/services#costing-module',
      children: [
        { title: t('services.costingModule.methodologyTitle'), path: '/services#costing-methodology' },
        { title: t('services.costingModule.bomTitle'), path: '/services#bom' },
        { title: t('services.costingModule.qualityTitle'), path: '/services#quality-cost' },
        { title: t('services.costingModule.directExpensesTitle'), path: '/services#direct-expenses' },
        { title: t('services.costingModule.indirectExpensesTitle'), path: '/services#indirect-expenses' },
        { title: t('services.costingModule.costDistributionTitle'), path: '/services#cost-distribution' },
        { title: t('services.costingModule.valuationTitle'), path: '/services#production-valuation' },
        { title: t('services.costingModule.multiPeriodTitle'), path: '/services#multi-period' },
        { title: t('services.costingModule.stagesTitle'), path: '/services#production-stages' },
        { title: t('services.costingModule.lotsTitle'), path: '/services#lots-tracking' },
        { title: t('services.costingModule.shiftsTitle'), path: '/services#shifts' },
        { title: t('services.costingModule.productionDataTitle'), path: '/services#production-data' },
        { title: t('services.costingModule.productionEvaluationTitle'), path: '/services#production-evaluation' },
        { title: t('services.costingModule.reportsTitle'), path: '/services#cost-reports' },
        { title: t('services.costingModule.salesTrackingTitle'), path: '/services#sales-tracking' }
      ]
    },
    {
      title: t('services.inventoryModule.title'),
      path: '/services#inventory-module',
      children: [
        { title: t('services.inventoryModule.structureTitle'), path: '/services#inventory-structure' },
        { title: t('services.inventoryModule.lotsFunctionsTitle'), path: '/services#lot-functions' },
        { title: t('services.inventoryModule.itemAttributesTitle'), path: '/services#item-attributes' },
        { title: t('services.inventoryModule.warehousesTitle'), path: '/services#warehouse-management' },
        { title: t('services.inventoryModule.reorderTitle'), path: '/services#reorder-level' },
        { title: t('services.inventoryModule.inventorySystemTitle'), path: '/services#inventory-system' },
        { title: t('services.inventoryModule.qualityTestsTitle'), path: '/services#quality-tests' },
        { title: t('services.inventoryModule.inventoryDocsTitle'), path: '/services#inventory-docs' },
        { title: t('services.inventoryModule.valuationTitle'), path: '/services#inventory-valuation' },
        { title: t('services.inventoryModule.reportsTitle'), path: '/services#inventory-reports' },
        { title: t('services.inventoryModule.productionIssueTitle'), path: '/services#production-issue' },
        { title: t('services.inventoryModule.basicAccountsTitle'), path: '/services#basic-accounts' },
        { title: t('services.inventoryModule.reportExamplesTitle'), path: '/services#report-examples' }
      ]
    },
    {
      title: t('exportModule.title'),
      path: '/services#export-module',
      children: [
        { title: t('exportModule.shipmentTrackingTitle'), path: '/services#shipment-tracking' },
        { title: t('exportModule.financialValuesTitle'), path: '/services#financial-values' },
        { title: t('exportModule.costBreakdownTitle'), path: '/services#cost-breakdown' },
        { title: t('exportModule.actualExpensesTitle'), path: '/services#actual-expenses' },
        { title: t('exportModule.collectionsDiscountsTitle'), path: '/services#collections-discounts' },
        { title: t('exportModule.archiveTitle'), path: '/services#shipment-archive' },
        { title: t('exportModule.shipmentItemsTitle'), path: '/services#shipment-items' }
      ]
    },
    {
      title: t('services.itSupportTitle'),
      path: '/services#it-support',
      children: []
    },
    {
      title: t('services.customAppsTitle'),
      path: '/services#custom-apps',
      children: []
    },
    {
      title: t('services.securityTitle'),
      path: '/services#security',
      children: []
    }
  ];

  const industriesSections = [
    {
      title: t('industries.title'),
      path: '/industries',
      children: [
        { title: t('industries.manufacturing.name'), path: '/industries#manufacturing' },
        { title: t('industries.healthcare.name'), path: '/industries#healthcare' },
        { title: t('industries.financial.name'), path: '/industries#financial' },
        { title: t('industries.retail.name'), path: '/industries#retail' },
        { title: t('industries.education.name'), path: '/industries#education' },
        { title: t('industries.logistics.name'), path: '/industries#logistics' }
      ]
    }
  ];

  const pricingSections = [
    {
      title: t('prices.title'),
      path: '/prices',
      children: t('prices.services', []).map((service: any, index: number) => ({
        title: service.title,
        path: `/prices#service-${index}`
      }))
    }
  ];

  const caseStudiesSections = [
    {
      title: t('caseStudies.title'),
      path: '/case-studies',
      children: t('caseStudies.studies', []).map((study: any, index: number) => ({
        title: study.title,
        path: `/case-studies#study-${index}`
      }))
    }
  ];

  const portfolioSections = [
    {
      title: t('portfolio.title'),
      path: '/portfolio',
      children: t('portfolio.items', []).map((item: any, index: number) => ({
        title: item.title,
        path: `/portfolio#item-${index}`
      }))
    }
  ];

  const clientsSections = [
    {
      title: t('clients.title'),
      path: '/clients',
      children: []
    }
  ];

  const aboutSections = [
    {
      title: t('about.title'),
      path: '/about',
      children: [
        { title: t('about.teamTitle'), path: '/about#team' }
      ]
    }
  ];

  const brochuresSections = [
    {
      title: t('brochures.title'),
      path: '/brochures',
      children: [
        { title: t('brochures.generalFeatures'), path: '/brochures#general-features' },
        { title: t('brochures.generalAccounts'), path: '/brochures#general-accounts' },
        { title: t('brochures.costSystem'), path: '/brochures#cost-system' },
        { title: t('brochures.inventorySystem'), path: '/brochures#inventory-system' },
        { title: t('brochures.exportSystem'), path: '/brochures#export-system' }
      ]
    }
  ];

  const contactSections = [
    {
      title: t('contact.title'),
      path: '/contact',
      children: [
        { title: t('contact.faq.title'), path: '/contact#faq' }
      ]
    }
  ];

  const renderSiteMapSection = (section: any, level = 0) => {
    const paddingLeft = `${level * 20}px`;
    
    return (
      <div key={section.path || section.title} className="mb-2">
        {section.path ? (
          <Link 
            to={section.path} 
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
            style={{ paddingLeft }}
          >
            {section.title}
          </Link>
        ) : (
          <span 
            className="text-gray-300 font-medium"
            style={{ paddingLeft }}
          >
            {section.title}
          </span>
        )}
        
        {section.children && section.children.length > 0 && (
          <div className="mt-1">
            {section.children.map((child: any) => renderSiteMapSection(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen digital-transformation-bg relative">
      {/* Technical Background Elements */}
      <div className="absolute inset-0">
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 50h20m20 0h10m20 0h30M50 0v20m0 20v10m0 20v30' stroke='%2306B6D4' stroke-width='1'/%3E%3Ccircle cx='20' cy='50' r='2' fill='%2306B6D4'/%3E%3Ccircle cx='50' cy='20' r='2' fill='%2306B6D4'/%3E%3Ccircle cx='50' cy='80' r='2' fill='%2306B6D4'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px'
        }}></div>
        
        {/* HUD Elements */}
        <div className="absolute inset-0 opacity-3" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20h40M20 40h30M20 60h20M140 20h40M150 40h30M160 60h20' stroke='%2306B6D4' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}></div>
        
        {/* Data Flow Lines */}
        <div className="absolute inset-0 opacity-2" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='300' height='300' viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 150 Q75 100 150 150 T300 150' stroke='%2306B6D4' stroke-width='0.5' fill='none' stroke-dasharray='5,5'/%3E%3C/svg%3E")`,
          backgroundSize: '300px 300px'
        }}></div>
        
        {/* Technical Schematics */}
        <div className="absolute inset-0 opacity-1" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50 L100 100 M150 50 L200 100 M250 50 L300 100 M50 150 L100 200 M150 150 L200 200 M250 150 L300 200' stroke='%2306B6D4' stroke-width='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: '400px 400px'
        }}></div>
      </div>
      
      {/* Content */}
      <div className="digital-transformation-content">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="glass-panel rounded-xl p-8 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white font-display mb-4">
              {language === 'ar' ? 'خريطة الموقع' : 'Site Map'}
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'نظرة عامة هرمية لجميع أقسام ومحتويات الموقع' 
                : 'A hierarchical overview of all site sections and content'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Main Navigation Sections */}
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-primary/30">
                {language === 'ar' ? 'أقسام التنقل الرئيسية' : 'Main Navigation Sections'}
              </h2>
              <div className="space-y-2">
                {siteStructure.map(section => renderSiteMapSection(section))}
              </div>
            </div>

            {/* Detailed Content Sections */}
            <div className="space-y-8">
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-primary/30">
                  {language === 'ar' ? 'خدماتنا' : 'Our Services'}
                </h2>
                <div className="space-y-2">
                  {detailedSections.map(section => renderSiteMapSection(section))}
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-primary/30">
                  {language === 'ar' ? 'القطاعات' : 'Industries'}
                </h2>
                <div className="space-y-2">
                  {industriesSections.map(section => renderSiteMapSection(section))}
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-primary/30">
                  {language === 'ar' ? 'التسعير' : 'Pricing'}
                </h2>
                <div className="space-y-2">
                  {pricingSections.map(section => renderSiteMapSection(section))}
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-primary/30">
                  {language === 'ar' ? 'دراسات الحالة' : 'Case Studies'}
                </h2>
                <div className="space-y-2">
                  {caseStudiesSections.map(section => renderSiteMapSection(section))}
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-primary/30">
                  {language === 'ar' ? 'معرض الأعمال' : 'Portfolio'}
                </h2>
                <div className="space-y-2">
                  {portfolioSections.map(section => renderSiteMapSection(section))}
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-primary/30">
                  {language === 'ar' ? 'عملاؤنا' : 'Our Clients'}
                </h2>
                <div className="space-y-2">
                  {clientsSections.map(section => renderSiteMapSection(section))}
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-primary/30">
                  {language === 'ar' ? 'من نحن' : 'About Us'}
                </h2>
                <div className="space-y-2">
                  {aboutSections.map(section => renderSiteMapSection(section))}
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-primary/30">
                  {language === 'ar' ? 'الكتيبات' : 'Brochures'}
                </h2>
                <div className="space-y-2">
                  {brochuresSections.map(section => renderSiteMapSection(section))}
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-primary/30">
                  {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
                </h2>
                <div className="space-y-2">
                  {contactSections.map(section => renderSiteMapSection(section))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SiteMapPage;