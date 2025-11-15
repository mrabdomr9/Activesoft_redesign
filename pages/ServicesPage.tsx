import React, { useEffect, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('erp');

  useEffect(() => {
    const title = t('seo.services.title', 'Our Services | Active Soft');
    const description = t('seo.services.description', 'Explore our comprehensive technology solutions including Oracle ERP, custom applications, and IT support.');
    const keywords = t('seo.services.keywords', 'ERP Solutions, Oracle ERP, Custom Software, IT Support, Technology Services');

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

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-transparent">
      <section className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white font-display animate-on-scroll">{t('services.title', 'Our Comprehensive Services')}</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto animate-on-scroll" style={{ transitionDelay: '100ms' }}>
            {t('services.subtitle', 'Tailored technology solutions to drive your business forward.')}
          </p>
        </div>
      </section>

      {/* Navigation Menu */}
      <div className="sticky top-0 z-10 bg-gray-900/90 backdrop-blur-sm border-b border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-3 space-x-6">
            <button 
              onClick={() => scrollToSection('erp')} 
              className={`whitespace-nowrap px-4 py-2 rounded-lg transition-colors ${activeSection === 'erp' ? 'bg-primary text-white' : 'text-gray-300 hover:text-white hover:bg-gray-800'}`}
            >
              {t('services.erpTitle', 'Oracle ERP Solutions')}
            </button>
            <button 
              onClick={() => scrollToSection('costing')} 
              className={`whitespace-nowrap px-4 py-2 rounded-lg transition-colors ${activeSection === 'costing' ? 'bg-primary text-white' : 'text-gray-300 hover:text-white hover:bg-gray-800'}`}
            >
              {t('services.costingModule.title', 'Costing Module')}
            </button>
            <button 
              onClick={() => scrollToSection('inventory')} 
              className={`whitespace-nowrap px-4 py-2 rounded-lg transition-colors ${activeSection === 'inventory' ? 'bg-primary text-white' : 'text-gray-300 hover:text-white hover:bg-gray-800'}`}
            >
              {t('services.inventoryModule.title', 'Inventory Management')}
            </button>
            <button 
              onClick={() => scrollToSection('export')} 
              className={`whitespace-nowrap px-4 py-2 rounded-lg transition-colors ${activeSection === 'export' ? 'bg-primary text-white' : 'text-gray-300 hover:text-white hover:bg-gray-800'}`}
            >
              {t('exportModule.title', 'Export Management System')}
            </button>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* ERP Solutions Section */}
          <div id="erp" className="glass-panel p-8 rounded-xl mb-12 animate-on-scroll">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                <div className="bg-primary/10 p-6 rounded-full">
                  <svg className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h2 className="text-3xl font-bold text-white font-display mb-4">{t('services.erpTitle', 'Oracle ERP Solutions')}</h2>
                <p className="text-lg text-gray-300 mb-6">{t('services.erpDesc', 'Full-cycle Oracle ERP services including implementation, customization, migration, and support to optimize your business processes.')}</p>
                <a href="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/80 transition-colors">
                  {t('home.learnMore', 'Learn More')}
                  <svg className="ml-2 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* ERP Features Section */}
          <div className="mb-12 animate-on-scroll">
            <h3 className="text-2xl font-bold text-white font-display mb-6">{t('services.erpFeaturesTitle', 'ERP System Features')}</h3>
            <p className="text-lg text-gray-300 mb-8">{t('services.erpFeaturesDesc', 'Our ERP system is designed to provide comprehensive solutions for businesses of all sizes. Here are some of the key features it offers:')}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-primary mb-4">{t('services.generalFeatures', 'General Features')}</h4>
                <ul className="space-y-3">
                  {[
                    'oracleDB', 'multiUser', 'remoteAccess', 'autoBackup', 'auditTrail', 'employeeDocs', 
                    'foreignCurrency', 'multiCompany', 'accountingChart', 'exchangeRate', 'notes', 
                    'multiEntry', 'unlimitedCashiers', 'cashierLink', 'collectionPayment'
                  ].map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{t(`services.features.${feature}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-primary mb-4">{t('services.mainModules', 'Main System Modules')}</h4>
                <ul className="space-y-3">
                  {['generalLedger', 'inventory', 'costing', 'hr', 'planning', 'purchasesSales'].map((module) => (
                    <li key={module} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{t(`services.modules.${module}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Costing Module Section */}
          <div id="costing" className="mt-16">
            <div className="border-l-4 border-primary pl-4 mb-6">
              <h2 className="text-3xl font-bold text-white font-display">{t('services.costingModule.title', 'Costing Module')}</h2>
            </div>
            <p className="text-lg text-gray-300 mb-8">{t('services.costingModule.subtitle', 'Comprehensive production cost management system with actual costing methodology')}</p>
            
            {/* Production Cost Calculation Methodology */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">{t('services.costingModule.methodologyTitle', 'Production Cost Calculation Methodology')}</h3>
              <p className="text-gray-300 mb-2">{t('services.costingModule.methodologyDesc', 'The system is based on Actual Costing during the production month.')}</p>
              <p className="text-gray-300 mb-2">{t('services.costingModule.methodologyIncludes', 'Cost includes:')}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                {t('services.costingModule.methodologyItems', [
                  'Raw materials cost',
                  'Direct industrial expenses',
                  'Indirect industrial expenses (General service centers + Production services)'
                ]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Raw Materials and BOM */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">{t('services.costingModule.bomTitle', 'Raw Materials and BOM (Bill of Materials)')}</h3>
              <p className="text-gray-300 mb-2">{t('services.costingModule.bomDesc1', 'Material ratios for each product are determined through BOM.')}</p>
              <p className="text-gray-300 mb-2">{t('services.costingModule.bomDesc2', 'The system automatically issues raw material documents according to BOM ratios.')}</p>
              <p className="text-gray-300 mb-2">{t('services.costingModule.bomDesc3', 'Variable materials are manually issued based on workshop instructions.')}</p>
              <p className="text-gray-300 mb-2">{t('services.costingModule.bomDesc4', 'When entering actual inventory at the end of the month:')}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                {t('services.costingModule.bomItems', [
                  'The system modifies automatic issue documents to accommodate inventory differences (increase/decrease).',
                  'Inventory differences are distributed to production orders.'
                ]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Inspection and Quality Cost */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">{t('services.costingModule.qualityTitle', 'Inspection and Quality Cost')}</h3>
              <p className="text-gray-300 mb-2">{t('services.costingModule.qualityDesc1', 'A portion of production is issued for inspection and loaded to Quality Inspection cost.')}</p>
              <p className="text-gray-300">{t('services.costingModule.qualityDesc2', 'Quantity can be returned for inspection or to the warehouse, resulting in automatic reduction of quality expense.')}</p>
            </div>

            {/* Direct Industrial Expenses */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">{t('services.costingModule.directExpensesTitle', 'Direct Industrial Expenses')}</h3>
              <p className="text-gray-300 mb-2">{t('services.costingModule.directExpensesDesc', 'Recorded in one of two ways:')}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                {t('services.costingModule.directExpensesItems', [
                  'Daily entries loaded to production lines.',
                  'Or raw material issuance from warehouses to production lines.'
                ]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Indirect Industrial Expenses */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">{t('services.costingModule.indirectExpensesTitle', 'Indirect Industrial Expenses')}</h3>
              <p className="text-gray-300 mb-2">{t('services.costingModule.indirectExpensesDesc1', 'Recorded on General or Production service centers.')}</p>
              <p className="text-gray-300 mb-2">{t('services.costingModule.indirectExpensesDesc2', 'Monthly distribution ratios are recorded showing the benefit of each production line from each service center.')}</p>
              <p className="text-gray-300 mb-2">{t('services.costingModule.indirectExpensesDesc3', 'The system issues entries to load expenses from service centers to production lines.')}</p>
              <p className="text-gray-300">{t('services.costingModule.indirectExpensesDesc4', 'If part of the expenses remains unloaded, it appears in the Income Statement.')}</p>
            </div>

            {/* Cost Distribution to Production Orders */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">{t('services.costingModule.costDistributionTitle', 'Cost Distribution to Production Orders')}</h3>
              <p className="text-gray-300 mb-2">{t('services.costingModule.costDistributionDesc1', 'Each production order is loaded with its share of expenses based on:')}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4 mb-2">
                {t('services.costingModule.costDistributionItems', [
                  'Operating time (Original method),',
                  'Or production quantity as an alternative when time is not recorded.'
                ]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-300 mb-2">{t('services.costingModule.costDistributionDesc2', 'To improve accuracy:')}</p>
              <p className="text-gray-300">{t('services.costingModule.costDistributionDesc3', 'Production quantity is weighted by product selling price to achieve fair distribution of industrial expenses.')}</p>
            </div>

            {/* Production Valuation */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">{t('services.costingModule.valuationTitle', 'Production Valuation')}</h3>
              <p className="text-gray-300 mb-2">{t('services.costingModule.valuationDesc1', 'Product valuation is done at actual cost monthly.')}</p>
              <p className="text-gray-300">{t('services.costingModule.valuationDesc2', 'Valuation is fixed as an inventory addition document affecting Cost of Goods Sold (COGS).')}</p>
            </div>

            {/* Production Orders Spanning Multiple Financial Periods */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">{t('services.costingModule.multiPeriodTitle', 'Production Orders Spanning Multiple Financial Periods')}</h3>
              <p className="text-gray-300 mb-2">{t('services.costingModule.multiPeriodDesc1', 'When a production order spans multiple periods:')}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                {t('services.costingModule.multiPeriodItems', [
                  'Cost is accumulated throughout the entire order duration.',
                  'If previous period costs are different, the system requests reopening periods to modify valuation.'
                ]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Production Stages System */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">{t('services.costingModule.stagesTitle', 'Production Stages System')}</h3>
              <p className="text-gray-300 mb-2">{t('services.costingModule.stagesDesc1', 'The system supports products requiring multiple production stages.')}</p>
              <p className="text-gray-300 mb-2">{t('services.costingModule.stagesDesc2', 'Each stage cost is calculated separately.')}</p>
              <p className="text-gray-300 mb-2">{t('services.costingModule.stagesDesc3', "A stage's production is revalued as raw material for the next stage.")}</p>
              <p className="text-gray-300">{t('services.costingModule.stagesDesc4', 'The sequence continues until the final stage.')}</p>
            </div>

            {/* Lots Tracking System */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">{t('services.costingModule.lotsTitle', 'Lots Tracking System')}</h3>
              <p className="text-gray-300 mb-2">{t('services.costingModule.lotsDesc1', 'Definition of different lots for incoming raw materials.')}</p>
              <p className="text-gray-300 mb-2">{t('services.costingModule.lotsDesc2', 'Raw material issuance to work orders is done according to lots.')}</p>
              <p className="text-gray-300 mb-2">{t('services.costingModule.lotsDesc3', 'Helps track poor raw materials and load responsibility on the supplier.')}</p>
              <p className="text-gray-300">{t('services.costingModule.lotsDesc4', 'Example: Cement from 3 suppliers → 3 lots for the same item.')}</p>
            </div>

            {/* Shifts System */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">{t('services.costingModule.shiftsTitle', 'Shifts System')}</h3>
              <p className="text-gray-300 mb-2">{t('services.costingModule.shiftsDesc1', 'Production recording according to shifts.')}</p>
              <p className="text-gray-300 mb-2">{t('services.costingModule.shiftsDesc2', 'Helps identify human errors when quality issues arise.')}</p>
              <p className="text-gray-300">{t('services.costingModule.shiftsDesc3', 'Multiple shift systems can be used (e.g., Ramadan shifts).')}</p>
            </div>

            {/* Special Production and Shipment Data */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">{t('services.costingModule.productionDataTitle', 'Special Production and Shipment Data')}</h3>
              <p className="text-gray-300 mb-2">{t('services.costingModule.productionDataDesc', 'In the production document, the following are recorded:')}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                {t('services.costingModule.productionDataItems', [
                  'Truck mixer - Pump - Loader - Driver',
                  'Station and silo',
                  'Departure and return time',
                  'Mixer counter before and after operation to calculate distance traveled'
                ]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Production Document Evaluation */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">{t('services.costingModule.productionEvaluationTitle', 'Production Document Evaluation')}</h3>
              <p className="text-gray-300 mb-2">{t('services.costingModule.productionEvaluationDesc1', 'Production document is evaluated at actual cost automatically.')}</p>
              <p className="text-gray-300 mb-2">{t('services.costingModule.productionEvaluationDesc2', 'Raw materials under processing are reduced by automatic entries.')}</p>
              <p className="text-gray-300">{t('services.costingModule.productionEvaluationDesc3', 'Update is done directly when any cost element changes.')}</p>
            </div>

            {/* Cost Reports */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">{t('services.costingModule.reportsTitle', 'Cost Reports')}</h3>
              <p className="text-gray-300 mb-2">{t('services.costingModule.reportsDesc', 'Key Reports:')}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                {t('services.costingModule.reportsItems', [
                  'Production cost report for any time period showing: Production orders (start - end date), Production quantities, Total cost, Average unit cost, Totals by effort/content/stage/period.',
                  'Detailed production order cost list showing: Production quantity and cost by quality grades, Unit cost price, Raw material cost analysis, Industrial expenses, Expense analysis at any account level, Quantities used, their value, and average consumption per production unit.'
                ]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* BOM Example */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">{t('services.costingModule.bomExampleTitle', 'BOM Example - Product: 1m³ Concrete Strength 350 Content 450')}</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                {t('services.costingModule.bomExampleItems', [
                  'Sand 1 (0.425 m³ / 580 kg)',
                  'Sand 1.5 (0.344 m³ / 470 kg)',
                  'Sand (0.431 m³ / 690 kg)',
                  'Cement (0.450 ton / 450 kg)'
                ]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Sales Orders Tracking */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">{t('services.costingModule.salesTrackingTitle', 'Sales Orders Tracking')}</h3>
              <p className="text-gray-300 mb-2">{t('services.costingModule.salesTrackingDesc1', 'Sales orders are recorded before production orders.')}</p>
              <p className="text-gray-300 mb-2">{t('services.costingModule.salesTrackingDesc2', 'Complete order tracking:')}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4 mb-2">
                {t('services.costingModule.salesTrackingItems', [
                  'Produced quantity',
                  'Delivered quantity by invoices'
                ]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-300">{t('services.costingModule.salesTrackingDesc3', 'Display showing each production movement and each sales transaction made on the sales order.')}</p>
            </div>
          </div>

          {/* Inventory Management Section */}
          <div id="inventory" className="mt-16">
            <div className="border-l-4 border-primary pl-4 mb-6">
              <h2 className="text-3xl font-bold text-white font-display">{t('services.inventoryModule.title', 'Inventory Management')}</h2>
            </div>
            <p className="text-lg text-gray-300 mb-8">{t('services.inventoryModule.subtitle', 'Comprehensive inventory management system with advanced tracking and valuation capabilities')}</p>
            
            {/* Inventory Structure and Item Coding */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">{t('services.inventoryModule.structureTitle', 'Inventory Structure and Item Coding')}</h3>
              <p className="text-gray-300 mb-2">{t('services.inventoryModule.structureDesc', 'Inventory classification into:')}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4 mb-2">
                {t('services.inventoryModule.structureItems', [
                  'Main commodity groups',
                  'Subgroups',
                  'Multiple items within each group'
                ]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-300 mb-2">{t('services.inventoryModule.structureAdditional', 'Additional flexible classification based on business activity that does not affect coding')}</p>
              <p className="text-gray-300">{t('services.inventoryModule.structureLots', 'Dividing a single item into multiple lots')}</p>
            </div>

            {/* Lot Functions */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">{t('services.inventoryModule.lotsFunctionsTitle', 'Lot Functions')}</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                {t('services.inventoryModule.lotsFunctionsItems', [
                  'Track raw material source and identify supplier in case of defects',
                  'Expiry tracking',
                  'Manage orders that depend on a specific supplier or batch'
                ]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Item Attributes */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">{t('services.inventoryModule.itemAttributesTitle', 'Item Attributes')}</h3>
              <p className="text-gray-300 mb-2">{t('services.inventoryModule.itemAttributesDesc', 'Complete technical specifications including:')}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4 mb-2">
                {t('services.inventoryModule.itemAttributesItems', [
                  'Grade - Color - Size - Dimensions',
                  'Type - Design - Model',
                  'Quantity per package - Item image'
                ]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-300">{t('services.inventoryModule.itemAttributesReports', 'Ability to display inventory reports based on any of these attributes')}</p>
            </div>

            {/* Warehouse Management */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">{t('services.inventoryModule.warehousesTitle', 'Warehouse Management')}</h3>
              <p className="text-gray-300 mb-2">{t('services.inventoryModule.warehousesDesc', 'Warehouse classification by type (raw materials - finished products - work in progress - spare parts)')}</p>
              <p className="text-gray-300">{t('services.inventoryModule.warehousesLocations', 'Internal division into storage locations within each warehouse')}</p>
            </div>

            {/* Reorder Level System */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">{t('services.inventoryModule.reorderTitle', 'Reorder Level System')}</h3>
              <p className="text-gray-300 mb-2">{t('services.inventoryModule.reorderDesc1', 'Apply reorder level for materials')}</p>
              <p className="text-gray-300">{t('services.inventoryModule.reorderDesc2', 'System automatically identifies items that need to be reordered')}</p>
            </div>

            {/* Inventory System */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">{t('services.inventoryModule.inventorySystemTitle', 'Inventory System')}</h3>
              <p className="text-gray-300 mb-2">{t('services.inventoryModule.inventorySystemDesc', 'Flexible inventory system:')}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                {t('services.inventoryModule.inventorySystemItems', [
                  'Accurately identify shortages and surpluses',
                  'Inventory differences are processed accounting-wise in documents and warehouses'
                ]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Quality Tests */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">{t('services.inventoryModule.qualityTestsTitle', 'Quality Tests')}</h3>
              <p className="text-gray-300 mb-2">{t('services.inventoryModule.qualityTestsDesc1', 'Quality testing available for finished products or purchases')}</p>
              <p className="text-gray-300">{t('services.inventoryModule.qualityTestsDesc2', 'Support for testing at any stage of production')}</p>
            </div>

            {/* Inventory Movement Documents */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">{t('services.inventoryModule.inventoryDocsTitle', 'Inventory Movement Documents (20+ document types)')}</h3>
              <p className="text-gray-300 mb-2">{t('services.inventoryModule.inventoryDocsDesc', 'Includes:')}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4 mb-4">
                {t('services.inventoryModule.inventoryDocsItems', [
                  'Purchase receipts - Production receipts - Additions',
                  'Sales issues - Production issues - Cost center issues',
                  'Purchase returns - Sales returns',
                  'Contract transactions',
                  'Export shipments',
                  'Goods exchange between branches',
                  'Any documents specific to business activity'
                ]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <h4 className="text-xl font-bold text-primary mb-2">{t('services.inventoryModule.inventoryDocsAccountingTitle', 'All documents automatically generate accounting entries including:')}</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                {t('services.inventoryModule.inventoryDocsAccountingItems', [
                  'Inventory control account',
                  'Suppliers',
                  'Customers',
                  'Taxes',
                  'Cost of goods sold',
                  'Sales revenue',
                  'Work in progress (WIP)',
                  'Inventory adjustment accounts'
                ]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Inventory Valuation */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">{t('services.inventoryModule.valuationTitle', 'Inventory Valuation')}</h3>
              <p className="text-gray-300 mb-2">{t('services.inventoryModule.valuationDesc1', 'Valuation using monthly moving average')}</p>
              <p className="text-gray-300">{t('services.inventoryModule.valuationDesc2', 'Valuation of new purchases directly affects inventory cost')}</p>
            </div>

            {/* Inventory Reports and Inquiries */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">{t('services.inventoryModule.reportsTitle', 'Inventory Reports and Inquiries')}</h3>
              <p className="text-gray-300 mb-2">{t('services.inventoryModule.reportsDesc', 'Summary and detailed reports including:')}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                {t('services.inventoryModule.reportsItems', [
                  'Inventory balances',
                  'Item cards (quantities - values - average cost)',
                  'Issue and receipt movements',
                  'Purchases and sales',
                  'Issues to cost centers',
                  'Production order movements',
                  'Production cost (raw materials + absorbed expenses)'
                ]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Production Materials Issue Documents */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">{t('services.inventoryModule.productionIssueTitle', 'Production Materials Issue Documents')}</h3>
              <p className="text-gray-300 mb-2">{t('services.inventoryModule.productionIssueDesc1', 'Automatic issuance of raw materials according to product BOM')}</p>
              <p className="text-gray-300 mb-2">{t('services.inventoryModule.productionIssueDesc2', 'During actual inventory:')}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                {t('services.inventoryModule.productionIssueItems', [
                  'Differences are automatically accommodated in all issue documents',
                  'Difference distribution on production orders with precise ratio'
                ]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Basic Accounts Required to Define a Product Group */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">{t('services.inventoryModule.basicAccountsTitle', 'Basic Accounts Required to Define a Product Group')}</h3>
              <p className="text-gray-300 mb-2">{t('services.inventoryModule.basicAccountsDesc', 'The following accounts must be defined before using the group:')}</p>
              {t('services.inventoryModule.basicAccountsItems', [
                { account: 'Inventory Account', details: ['Debit side for additions and credit side for issues'] },
                { account: 'Adjustment Account', details: ['Debit for inventory shortages and credit for surpluses'] },
                { account: 'Expense Account', details: ['For issuing items to cost centers'] },
                { account: 'WIP Account - Work in Progress', details: ['For issuing raw materials to production orders'] },
                { account: 'Sales Revenue Account' },
                { account: 'Cost of Goods Sold Account' }
              ]).map((item: any, index: number) => (
                <div key={index} className="mb-3">
                  <p className="font-semibold text-gray-300">{item.account}</p>
                  {item.details && (
                    <ul className="list-disc list-inside ml-4 text-gray-300">
                      {item.details.map((detail: string, detailIndex: number) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              <p className="text-gray-300 font-semibold">{t('services.inventoryModule.basicAccountsNote', 'Without these accounts, inventory documents cannot be recorded')}</p>
            </div>

            {/* Examples of Reports Supported by the System */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">{t('services.inventoryModule.reportExamplesTitle', 'Examples of Reports Supported by the System')}</h3>
              
              <h4 className="text-xl font-bold text-primary mb-2">{t('services.inventoryModule.reportExamplesInventory', 'Inventory Reports:')}</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4 mb-4">
                {t('services.inventoryModule.reportExamplesInventoryItems', [
                  'Inventory movement (quantities and values)',
                  'Item movement (item card)',
                  'Balances - Receipts - Issues - Purchases - Sales'
                ]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              <h4 className="text-xl font-bold text-primary mb-2">{t('services.inventoryModule.reportExamplesProduction', 'Production Reports:')}</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4 mb-4">
                {t('services.inventoryModule.reportExamplesProductionItems', [
                  'Production cost report during a period',
                  'Cost of raw materials for orders + absorbed expenses',
                  'Production order movement (quantity - raw material cost - stage cost - unit cost)',
                  'Average unit cost for each order'
                ]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              <h4 className="text-xl font-bold text-primary mb-2">{t('services.inventoryModule.reportExamplesCostCenters', 'Cost Center Issue Reports:')}</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                {t('services.inventoryModule.reportExamplesCostCentersItems', [
                  'Analysis of what was issued from raw materials to each cost center'
                ]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Export Management System Section */}
          <div id="export" className="mt-12">
            <div className="border-l-4 border-primary pl-4 mb-6">
              <h2 className="text-3xl font-bold text-white font-display">{t('exportModule.title', 'Export Management System')}</h2>
            </div>
            <p className="text-lg text-gray-300 mb-8">{t('exportModule.subtitle', 'Comprehensive export management system with detailed shipment tracking and financial analysis')}</p>
            
            {/* Shipment Data Tracking */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                {t('exportModule.shipmentTrackingTitle', 'Shipment Data Tracking')}
              </h3>
              <p className="text-gray-300 mb-2">{t('exportModule.shipmentTrackingDesc', 'The system displays detailed information for each shipment, including:')}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                {t('exportModule.shipmentTrackingItems', [
                  'Shipment date and memo numbers',
                  'Container No.',
                  'Lot No. associated with raw materials or products',
                  'Customer name and export destination'
                ]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            {/* Shipment Financial Values */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t('exportModule.financialValuesTitle', 'Shipment Financial Values')}
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                {t('exportModule.financialValuesItems', [
                  'Shipment value in the client\'s foreign currency',
                  'Equivalent value in Egyptian pounds according to the exchange rate recorded in the system'
                ]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            {/* Shipment Cost Breakdown */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                {t('exportModule.costBreakdownTitle', 'Shipment Cost Breakdown')}
              </h3>
              <p className="text-gray-300 mb-2">{t('exportModule.costBreakdownDesc', 'The system clearly displays the cost breakdown into:')}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4 mb-4">
                {t('exportModule.costBreakdownItems', [
                  'Raw material costs (raw materials - packaging materials - auxiliary materials)',
                  'Station operating costs',
                  'Shipping and customs clearance costs',
                  'Other expenses (if any)'
                ]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              <h4 className="text-xl font-bold text-primary mb-2">{t('exportModule.reportsTitle', 'Reports')}</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                {t('exportModule.reportsItems', [
                  'Total shipment cost',
                  'Net shipment profitability before support',
                  'Net shipment profitability after support'
                ]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            {/* Actual Expenses Tracking */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t('exportModule.actualExpensesTitle', 'Actual Expenses Tracking')}
              </h3>
              <p className="text-gray-300 mb-2">{t('exportModule.actualExpensesDesc', 'Monitor all expenses associated with each shipment, including:')}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4 mb-2">
                {t('exportModule.actualExpensesItems', [
                  'Supplier service invoices',
                  'Labor invoices',
                  'Clearance and shipping invoices',
                  'Raw material supply invoices for the shipment'
                ]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-300">{t('exportModule.internalCostBreakdown', 'Internal cost breakdown into main elements with precision')}</p>
            </div>
            
            {/* Collections & Discounts Tracking */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                {t('exportModule.collectionsDiscountsTitle', 'Collections & Discounts Tracking')}
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                {t('exportModule.collectionsDiscountsItems', [
                  'Shipment data (memo - date - container)',
                  'Invoice value in client currency',
                  'Discount granted to the client (if any)',
                  'Net invoice after discount',
                  'Collections: Collection percentage, amount collected, cash payment dates',
                  'Net invoice after collections: (Invoice value - Discount - Collected payments)',
                  'Remaining balance on the client for their transactions with the company: Total invoices, Total collections, Total discounts'
                ]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            {/* Comprehensive Shipment Documentation Archive */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t('exportModule.archiveTitle', 'Comprehensive Shipment Documentation Archive')}
              </h3>
              <p className="text-gray-300 mb-2">{t('exportModule.archiveDesc1', 'Save all shipment data in a complete electronic file')}</p>
              <p className="text-gray-300 mb-2">{t('exportModule.archiveDesc2', 'Maintain a special archive for documents:')}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4 mb-2">
                {t('exportModule.archiveItems', [
                  'Shipping documents',
                  'Supplier and service invoices',
                  'Container papers',
                  'Clearance and export documents'
                ]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-300">{t('exportModule.archiveBenefit', 'This facilitates reference for any review or accounting reconciliation')}</p>
            </div>
            
            {/* Shipment Items / Pallets */}
            <div className="glass-panel p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                {t('exportModule.shipmentItemsTitle', 'Shipment Items / Pallets')}
              </h3>
              <p className="text-gray-300 mb-2">{t('exportModule.shipmentItemsDesc', 'Divide the shipment into items according to:')}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4 mb-4">
                {t('exportModule.shipmentItemsItems', [
                  'Number of pallets',
                  'Number of units inside each pallet'
                ]).map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-300 mb-2">{t('exportModule.expenseDistribution', 'The system uses this data to distribute general expenses (shipping - preparation - clearance):')}</p>
              <p className="text-gray-300">{t('exportModule.distributionMethod', 'The system distributes expenses according to the number of pallets as a percentage of total monthly operations')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;