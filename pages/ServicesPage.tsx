import React, { useEffect, useState, useMemo, useRef } from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface Service {
  id: string;
  title: string;
  description: string;
  features?: string[];
  icon?: React.ReactNode;
  pricing?: {
    currency: string;
    startingAt: number;
    billingPeriod: string;
  };
  category?: string;
}

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('erp');
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Get all services from translations
  const allServices = t('prices.services', []);

  // Find the sales management service by ID
  const salesService = allServices.find((service: any) =>
    service && service.id === "c1d2e3f4-5678-90ab-cdef-1234567890ab"
  ) || {};

  // Find smart scale system service by ID
  const smartScaleService = allServices.find((service: any) =>
    service && service.id === "e8f9a2b1-c3d4-5678-9abc-def012345678"
  ) || {};

  // Ensure we have fallback data
  const safeSalesService: Service = {
    id: "sales",
    title: salesService.title || 'Sales Representatives and Sales Managers Management',
    description: salesService.description || 'Comprehensive solution for managing sales representatives and sales managers with detailed performance tracking and commission management.',
    features: salesService.features || [
      "Periodic reports on representative and branch performance",
      "Monitoring sales representatives' performance and linking their sales to customers",
      "Special permissions for sales managers to monitor the market and make faster decisions",
      "Tracking cash collections and checks for each representative",
      "Ability to link representative commissions to actual collections or sales volume",
      "Setting sales targets (Goals) and comparing actual results"
    ],
    pricing: {
      currency: (salesService.pricing && salesService.pricing.currency) || 'EGP',
      startingAt: (salesService.pricing && salesService.pricing.startingAt) || 30000,
      billingPeriod: (salesService.pricing && salesService.pricing.billingPeriod) || 'project'
    },
    category: 'sales'
  };

  // Ensure we have fallback data for smart scale system
  const safeSmartScaleService: Service = {
    id: "smartScale",
    title: t('services.smartScaleTitle', 'Smart Scale System'),
    description: t('services.smartScaleDesc', 'Intelligent weighing system that automates weight recording and integrates directly with your inventory and financial systems.'),
    features: [
      t('services.smartScaleFeatures.feature1', 'Automatic recording of actual weight for products, pallets, or containers without human intervention'),
      t('services.smartScaleFeatures.feature2', 'Prevention of manipulation or manual input errors'),
      t('services.smartScaleFeatures.feature3', 'Comparison of actual weight with standard weight to detect deviations or losses'),
      t('services.smartScaleFeatures.feature4', 'Direct generation of invoices and costs based on real weight'),
      t('services.smartScaleFeatures.feature5', 'Instant updating of inventory and financial accounts with each weighing operation'),
      t('services.smartScaleFeatures.feature6', 'Direct integration between electronic scales and packaging stations within system')
    ],
    pricing: {
      currency: 'EGP',
      startingAt: 25000,
      billingPeriod: 'project'
    },
    category: 'inventory'
  };

  // Define all services with icons and categories
  const services: Service[] = [
    {
      id: "erp",
      title: t('services.erpTitle', 'Oracle ERP Solutions'),
      description: t('services.erpDesc', 'Full-cycle Oracle ERP services including implementation, customization, migration, and support to optimize your business processes.'),
      icon: (
        <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      category: 'erp'
    },
    {
      id: "costing",
      title: t('services.costingModule.title', 'Costing Module'),
      description: t('services.costingModule.subtitle', 'Comprehensive production cost management system with actual costing methodology'),
      icon: (
        <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      category: 'production'
    },
    {
      id: "inventory",
      title: t('services.inventoryModule.title', 'Inventory Management'),
      description: t('services.inventoryModule.subtitle', 'Comprehensive inventory management system with advanced tracking and valuation capabilities'),
      icon: (
        <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      category: 'inventory'
    },
    {
      id: "export",
      title: t('exportModule.title', 'Export Management System'),
      description: t('exportModule.subtitle', 'Comprehensive export management system with detailed shipment tracking and financial analysis'),
      icon: (
        <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
        </svg>
      ),
      category: 'logistics'
    },
    {
      ...safeSalesService,
      icon: (
        <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      ...safeSmartScaleService,
      icon: (
        <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: "hrPayroll",
      title: t('services.hrPayroll.title', 'HR and Payroll Management System'),
      description: t('services.hrPayroll.desc', 'Complete and integrated system with financial accounts for managing employee affairs and payroll calculations.'),
      icon: (
        <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      category: 'hr',
      pricing: {
        currency: 'EGP',
        startingAt: 35000,
        billingPeriod: 'project'
      }
    }
  ];

  // Define categories for filtering
  const categories = [
    { id: 'all', label: t('services.categories.all', 'All Services') },
    { id: 'erp', label: t('services.categories.erp', 'ERP Solutions') },
    { id: 'production', label: t('services.categories.production', 'Production') },
    { id: 'inventory', label: t('services.categories.inventory', 'Inventory') },
    { id: 'logistics', label: t('services.categories.logistics', 'Logistics') },
    { id: 'sales', label: t('services.categories.sales', 'Sales Management') },
    { id: 'hr', label: t('services.categories.hr', 'HR & Payroll') }
  ];

  // Filter services based on category and search query
  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesCategory = filterCategory === 'all' || service.category === filterCategory;
      const matchesSearch = searchQuery === '' || 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [filterCategory, searchQuery, services]);

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

  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      const scrollPosition = window.scrollY + 100;

      for (const service of services) {
        const element = sectionRefs.current[service.id];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop && 
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(service.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [services]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
        <section className="pt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white font-display animate-on-scroll">{t('services.title', 'Our Comprehensive Services')}</h1>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto animate-on-scroll" style={{ transitionDelay: '100ms' }}>
              {t('services.subtitle', 'Tailored technology solutions to drive your business forward.')}
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <div className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-panel rounded-xl p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={t('services.searchPlaceholder', 'Search services...')}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-2 pl-10 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setFilterCategory(category.id)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        filterCategory === category.id
                          ? 'bg-primary text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
              {filteredServices.map(service => (
                <div key={service.id} className="glass-panel rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
                  <div className="bg-primary p-6">
                    <div className="flex items-center">
                      <div className="bg-white/20 p-3 rounded-full mr-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <button
                      onClick={() => scrollToSection(service.id)}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/80 transition-colors"
                    >
                      {t('home.learnMore', 'Learn More')}
                      <svg className="ml-2 -mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="sticky top-0 z-10 bg-gray-900/90 backdrop-blur-sm border-b border-gray-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto py-3 space-x-6">
              {services.map(service => (
                <button
                  key={service.id}
                  onClick={() => scrollToSection(service.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-lg transition-colors ${
                    activeSection === service.id
                      ? 'bg-primary text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* ERP Solutions Section */}
            <div id="erp" ref={el => sectionRefs.current['erp'] = el} className="glass-panel p-8 rounded-xl mb-12 animate-on-scroll">
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
                  <p className="text-gray-300 mb-6">{t('services.erpDesc', 'Full-cycle Oracle ERP services including implementation, customization, migration, and support to optimize your business processes.')}</p>
                  <h3 className="text-xl font-bold text-white mb-4">{t('services.erpFeaturesTitle', 'ERP System Features')}</h3>
                  <p className="text-gray-300 mb-6">{t('services.erpFeaturesDesc', 'Our ERP system is designed to provide comprehensive solutions for businesses of all sizes. Here are some of the key features it offers:')}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3">{t('services.generalFeatures', 'General Features')}</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">{t('services.features.oracleDB', 'Powerful and stable Oracle database')}</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">{t('services.features.multiUser', 'Multiple user permissions with precise management')}</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">{t('services.features.remoteAccess', 'Ability to work from anywhere via the Internet')}</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">{t('services.features.autoBackup', 'Automatic backups created multiple times daily')}</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">{t('services.features.auditTrail', 'Complete audit trail showing who added, modified, or deleted')}</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3">{t('services.mainModules', 'Main System Modules')}</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">{t('services.modules.generalLedger', 'General Ledger')}</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">{t('services.modules.inventory', 'Inventory Management')}</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">{t('services.modules.costing', 'Costing System')}</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">{t('services.modules.hr', 'HR & Payroll')}</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">{t('services.modules.purchasesSales', 'Purchases & Sales')}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Costing Module Section */}
            <div id="costing" ref={el => sectionRefs.current['costing'] = el} className="glass-panel p-8 rounded-xl mb-12 animate-on-scroll">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <div className="bg-primary/10 p-6 rounded-full">
                    <svg className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <h2 className="text-3xl font-bold text-white font-display mb-4">{t('services.costingModule.title', 'Costing Module')}</h2>
                  <p className="text-gray-300 mb-6">{t('services.costingModule.subtitle', 'Comprehensive production cost management system with actual costing methodology')}</p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{t('services.costingModule.methodologyTitle', 'Production Cost Calculation Methodology')}</h3>
                      <p className="text-gray-300 mb-3">{t('services.costingModule.methodologyDesc', 'The system is based on Actual Costing during the production month.')}</p>
                      <h4 className="text-lg font-bold text-white mb-2">{t('services.costingModule.methodologyIncludes', 'Cost includes:')}</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {t('services.costingModule.methodologyItems', []).map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{t('services.costingModule.bomTitle', 'Raw Materials and BOM (Bill of Materials)')}</h3>
                      <p className="text-gray-300 mb-2">{t('services.costingModule.bomDesc1', 'Material ratios for each product are determined through BOM.')}</p>
                      <p className="text-gray-300 mb-2">{t('services.costingModule.bomDesc2', 'The system automatically issues raw material documents according to BOM ratios.')}</p>
                      <p className="text-gray-300 mb-2">{t('services.costingModule.bomDesc3', 'Variable materials are manually issued based on workshop instructions.')}</p>
                      <p className="text-gray-300 mb-2">{t('services.costingModule.bomDesc4', 'When entering actual inventory at the end of the month:')}</p>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                        {t('services.costingModule.bomItems', []).map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{t('services.costingModule.qualityTitle', 'Inspection and Quality Cost')}</h3>
                      <p className="text-gray-300 mb-2">{t('services.costingModule.qualityDesc1', 'A portion of production is issued for inspection and loaded to Quality Inspection cost.')}</p>
                      <p className="text-gray-300">{t('services.costingModule.qualityDesc2', 'Quantity can be returned for inspection or to the warehouse, resulting in automatic reduction of quality expense.')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Inventory Management Section */}
            <div id="inventory" ref={el => sectionRefs.current['inventory'] = el} className="glass-panel p-8 rounded-xl mb-12 animate-on-scroll">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <div className="bg-primary/10 p-6 rounded-full">
                    <svg className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <h2 className="text-3xl font-bold text-white font-display mb-4">{t('services.inventoryModule.title', 'Inventory Management')}</h2>
                  <p className="text-gray-300 mb-6">{t('services.inventoryModule.subtitle', 'Comprehensive inventory management system with advanced tracking and valuation capabilities')}</p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{t('services.inventoryModule.structureTitle', 'Inventory Structure and Item Coding')}</h3>
                      <p className="text-gray-300 mb-3">{t('services.inventoryModule.structureDesc', 'Inventory classification into:')}</p>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {t('services.inventoryModule.structureItems', []).map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      <p className="text-gray-300 mt-3">{t('services.inventoryModule.structureAdditional', 'Additional flexible classification based on business activity that does not affect coding')}</p>
                      <p className="text-gray-300">{t('services.inventoryModule.structureLots', 'Dividing a single item into multiple lots')}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{t('services.inventoryModule.lotsFunctionsTitle', 'Lot Functions')}</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {t('services.inventoryModule.lotsFunctionsItems', []).map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{t('services.inventoryModule.itemAttributesTitle', 'Item Attributes')}</h3>
                      <p className="text-gray-300 mb-3">{t('services.inventoryModule.itemAttributesDesc', 'Complete technical specifications including:')}</p>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {t('services.inventoryModule.itemAttributesItems', []).map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      <p className="text-gray-300 mt-3">{t('services.inventoryModule.itemAttributesReports', 'Ability to display inventory reports based on any of these attributes')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Export Management System Section */}
            <div id="export" ref={el => sectionRefs.current['export'] = el} className="glass-panel p-8 rounded-xl mb-12 animate-on-scroll">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <div className="bg-primary/10 p-6 rounded-full">
                    <svg className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
                    </svg>
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <h2 className="text-3xl font-bold text-white font-display mb-4">{t('exportModule.title', 'Export Management System')}</h2>
                  <p className="text-gray-300 mb-6">{t('exportModule.subtitle', 'Comprehensive export management system with detailed shipment tracking and financial analysis')}</p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{t('exportModule.shipmentTrackingTitle', 'Shipment Data Tracking')}</h3>
                      <p className="text-gray-300 mb-3">{t('exportModule.shipmentTrackingDesc', 'The system displays detailed information for each shipment, including:')}</p>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {t('exportModule.shipmentTrackingItems', []).map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{t('exportModule.financialValuesTitle', 'Shipment Financial Values')}</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {t('exportModule.financialValuesItems', []).map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{t('exportModule.costBreakdownTitle', 'Shipment Cost Breakdown')}</h3>
                      <p className="text-gray-300 mb-3">{t('exportModule.costBreakdownDesc', 'The system clearly displays the cost breakdown into:')}</p>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {t('exportModule.costBreakdownItems', []).map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sales Representatives and Sales Managers Management Section */}
            <div id="sales" ref={el => sectionRefs.current['sales'] = el} className="glass-panel p-8 rounded-xl mb-12 animate-on-scroll">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <div className="bg-primary/10 p-6 rounded-full">
                    <svg className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <h2 className="text-3xl font-bold text-white font-display mb-4">{safeSalesService.title}</h2>
                  <p className="text-gray-300 mb-6">{safeSalesService.description}</p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {safeSalesService.features.map((feature: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Smart Scale System Section */}
            <div id="smartScale" ref={el => sectionRefs.current['smartScale'] = el} className="glass-panel p-8 rounded-xl mb-12 animate-on-scroll">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <div className="bg-primary/10 p-6 rounded-full">
                    <svg className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <h2 className="text-3xl font-bold text-white font-display mb-4">{safeSmartScaleService.title}</h2>
                  <p className="text-gray-300 mb-6">{safeSmartScaleService.description}</p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {safeSmartScaleService.features.map((feature: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HR and Payroll Management Section */}
        <div id="hrPayroll" ref={el => sectionRefs.current['hrPayroll'] = el} className="glass-panel p-8 rounded-xl mb-12 animate-on-scroll">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
              <div className="bg-primary/10 p-6 rounded-full">
                <svg className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h2 className="text-3xl font-bold text-white font-display mb-4">{t('services.hrPayroll.title', 'HR and Payroll Management System')}</h2>
              <p className="text-gray-300 mb-6">{t('services.hrPayroll.desc', 'Complete and integrated system with financial accounts for managing employee affairs and payroll calculations.')}</p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{t('services.hrPayroll.features.feature1', 'Based on variable settings for insurance, vacations, and taxes that can be modified when laws change')}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{t('services.hrPayroll.features.feature2', 'Respects all payroll calculation rules and penalty provisions, carrying over excess of five days to subsequent months')}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{t('services.hrPayroll.features.feature3', 'Maintains employee photos and all employment documents with reports on missing documents')}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{t('services.hrPayroll.features.feature4', 'Tracks document expiration dates to notify employees of renewals')}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{t('services.hrPayroll.features.feature5', 'Records who entered and modified data with a period transfer system to prevent tampering')}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{t('services.hrPayroll.features.feature6', 'Ability to reverse period transfers to modify data according to permissions')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
