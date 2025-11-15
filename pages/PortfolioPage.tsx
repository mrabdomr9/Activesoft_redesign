import React, { useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

const PortfolioPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const title = t('seo.portfolio.title', 'ERP System Features | Active Soft');
    const description = t('seo.portfolio.description', 'Explore the comprehensive features of our Oracle ERP system, including general ledger, inventory management, costing, HR & payroll, and more.');
    const keywords = t('seo.portfolio.keywords', 'ERP Features, Oracle ERP, General Ledger, Inventory Management, Costing System, HR Payroll');

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

  // Feature categories
  const featureCategories = [
    {
      id: 'general',
      title: t('portfolio.features.general.title', 'General Features'),
      features: [
        t('portfolio.features.general.oracleDB', 'Powerful and stable Oracle database'),
        t('portfolio.features.general.multiUser', 'Multiple user permissions with precise management'),
        t('portfolio.features.general.remoteAccess', 'Ability to work from anywhere via the Internet'),
        t('portfolio.features.general.autoBackup', 'Automatic backups created multiple times daily'),
        t('portfolio.features.general.auditTrail', 'Complete audit trail showing who added, modified, or deleted'),
        t('portfolio.features.general.employeeDocs', 'Entry of employee photos and documents'),
        t('portfolio.features.general.foreignCurrency', 'Foreign currency support with fixed or variable rates per transaction'),
        t('portfolio.features.general.multiCompany', 'Multiple companies or branches with consolidated reports'),
        t('portfolio.features.general.consolidatedAccounts', 'Support for Consolidated Accounts'),
        t('portfolio.features.general.costSystem', 'Integrated industrial cost system: raw materials – processing – cost centers – service centers'),
        t('portfolio.features.general.fullReports', 'Full financial reports without transfer (trial balance – income statement – debt ages...)'),
        t('portfolio.features.general.productCosts', 'Accurate product cost statements'),
        t('portfolio.features.general.security', 'Complete security against modification and cancellation with monthly and accounting closure')
      ]
    },
    {
      id: 'modules',
      title: t('portfolio.features.modules.title', 'Main System Modules'),
      features: [
        t('portfolio.features.modules.generalLedger', 'General Ledger'),
        t('portfolio.features.modules.inventory', 'Inventory Management'),
        t('portfolio.features.modules.costing', 'Costing System'),
        t('portfolio.features.modules.hr', 'HR & Payroll'),
        t('portfolio.features.modules.planning', 'Planning System'),
        t('portfolio.features.modules.purchasesSales', 'Purchases & Sales')
      ]
    },
    {
      id: 'ledger',
      title: t('portfolio.features.ledger.title', 'General Ledger Features'),
      features: [
        t('portfolio.features.ledger.accountingChart', 'Accounting chart with 4 levels'),
        t('portfolio.features.ledger.exchangeRate', 'Exchange rate determination for foreign currencies with ability to modify in the transaction itself'),
        t('portfolio.features.ledger.notes', 'Notes entry for each journal entry item'),
        t('portfolio.features.ledger.multiEntry', 'Support for multi-entry vouchers'),
        t('portfolio.features.ledger.consolidatedAccounts', 'Consolidated accounts for any number of accounts regardless of their nature'),
        t('portfolio.features.ledger.accountStatements', 'Ability to extract consolidated or separate account statements'),
        t('portfolio.features.ledger.costCenterLink', 'Automatic linking of discounts and additions to cost centers or sales'),
        t('portfolio.features.ledger.yearEnd', 'Automatic closure of revenues and expenses at year-end'),
        t('portfolio.features.ledger.unlimitedYears', 'Opening unlimited fiscal years without programming intervention'),
        t('portfolio.features.ledger.collectionPlans', 'Collection plans and follow-up for sales representatives'),
        t('portfolio.features.ledger.accountDisable', 'Ability to disable any account from use'),
        t('portfolio.features.ledger.userPermissions', 'Customization of account visibility based on user and permissions')
      ]
    },
    {
      id: 'reports',
      title: t('portfolio.features.reports.title', 'General Ledger Reports'),
      features: [
        t('portfolio.features.reports.trialBalance', 'Trial balance for any date'),
        t('portfolio.features.reports.incomeStatement', 'Income statement for any period'),
        t('portfolio.features.reports.accountStatements', 'Detailed and consolidated account statements'),
        t('portfolio.features.reports.expenseComparison', 'Expense comparison by periods'),
        t('portfolio.features.reports.serviceAnalysis', 'Service center analysis and distribution on production'),
        t('portfolio.features.reports.salesPlan', 'Sales plan + monthly collection follow-up')
      ]
    },
    {
      id: 'cash',
      title: t('portfolio.features.cash.title', 'Cash Management'),
      features: [
        t('portfolio.features.cash.unlimitedCashiers', 'Unlimited number of cashiers'),
        t('portfolio.features.cash.employeeLink', 'Link each cashier to a specific employee'),
        t('portfolio.features.cash.collectionPayment', 'Recording collection and payment operations with separate documents')
      ]
    },
    {
      id: 'banks',
      title: t('portfolio.features.banks.title', 'Banks & Checks'),
      features: [
        t('portfolio.features.banks.unlimitedAccounts', 'Opening several unlimited bank accounts'),
        t('portfolio.features.banks.accountTypes', 'Each bank account has 3 accounting accounts (balance – receivable bills – payable bills)'),
        t('portfolio.features.banks.checkRegister', 'Complete register of check movements (issuance – payment – return – cancellation...)'),
        t('portfolio.features.banks.reports', 'Reports: Receivable bills under collection, Returned receivable bills, Due payable bills, Returned payable bills, Comprehensive check statement')
      ]
    },
    {
      id: 'assets',
      title: t('portfolio.features.assets.title', 'Fixed Assets'),
      features: [
        t('portfolio.features.assets.groups', 'Registering assets within groups with a specified depreciation rate'),
        t('portfolio.features.assets.accounts', 'Registering accounts specific to the asset (asset – accumulated – provision)'),
        t('portfolio.features.assets.depreciation', 'Issuing monthly depreciation voucher with one click'),
        t('portfolio.features.assets.details', 'Complete data for each asset (cost – center – commissioning date – serial – model...)'),
        t('portfolio.features.assets.reports', 'Comprehensive reports: Depreciation vouchers by group, Book value report, Assets report by date')
      ]
    },
    {
      id: 'aging',
      title: t('portfolio.features.aging.title', 'Aging Report'),
      features: [
        t('portfolio.features.aging.analysis', 'Debt aging analysis for each customer and supplier'),
        t('portfolio.features.aging.lastTransaction', 'Display of last sale transaction and last collection'),
        t('portfolio.features.aging.customerAnalysis', 'Complete analysis of customer invoices and delay period')
      ]
    },
    {
      id: 'permissions',
      title: t('portfolio.features.permissions.title', 'User Permissions'),
      features: [
        t('portfolio.features.permissions.customization', 'Customizing permissions for each employee'),
        t('portfolio.features.permissions.accountVisibility', 'Determining account visibility'),
        t('portfolio.features.permissions.control', 'Complete control over vouchers and sensitive items')
      ]
    }
  ];

  return (
    <div className="bg-transparent py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white font-display animate-on-scroll">
            {t('portfolio.title', 'ERP System Features')}
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto animate-on-scroll" style={{ transitionDelay: '100ms' }}>
            {t('portfolio.subtitle', 'Explore the comprehensive features of our Oracle ERP system designed to streamline your business operations')}
          </p>
        </div>

        <div className="space-y-12">
          {featureCategories.map((category, index) => (
            <div 
              key={category.id} 
              className="glass-panel p-8 rounded-xl animate-on-scroll"
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
                {category.id === 'general' && (
                  <svg className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )}
                {category.id === 'modules' && (
                  <svg className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                )}
                {category.id === 'ledger' && (
                  <svg className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {category.id === 'reports' && (
                  <svg className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )}
                {category.id === 'cash' && (
                  <svg className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                )}
                {category.id === 'banks' && (
                  <svg className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                )}
                {category.id === 'assets' && (
                  <svg className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )}
                {category.id === 'aging' && (
                  <svg className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                )}
                {category.id === 'permissions' && (
                  <svg className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                )}
                {category.title}
              </h2>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-panel p-8 rounded-xl inline-block max-w-3xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('portfolio.cta.title', 'Ready to Transform Your Business?')}
            </h3>
            <p className="text-gray-300 mb-6">
              {t('portfolio.cta.description', 'Discover how our ERP system can streamline your operations and boost productivity.')}
            </p>
            <a 
              href="/contact" 
              className="px-6 py-3 bg-primary text-white font-bold rounded-md shadow-lg hover:bg-secondary transition-colors duration-300"
            >
              {t('portfolio.cta.button', 'Request a Demo')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;