import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category?: string;
  pricing?: {
    currency: string;
    startingAt: number;
    billingPeriod: string;
  };
  features?: string[];
}

const safeSalesService = {
  id: "sales",
  title: "Sales Management System",
  description: "Complete sales management solution with customer relationship management, order processing, and comprehensive reporting.",
  category: 'sales'
};

const safeSmartScaleService = {
  id: "smartScale",
  title: "Smart Scale System",
  description: "Intelligent weighing and measurement system with real-time data integration and automated reporting.",
  category: 'production'
};

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const sectionRefs = useRef<{[key: string]: HTMLElement | null}>({});

  // Get services data from translation files
  const servicesData = t('prices.services', []);
  
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
      category: 'erp',
      pricing: {
        currency: 'EGP',
        startingAt: 75000,
        billingPeriod: 'project'
      },
      features: [
        t('prices.services.0.features.0', 'Cloud infrastructure setup and optimization'),
        t('prices.services.0.features.1', 'Legacy system data migration with zero data loss'),
        t('prices.services.0.features.2', 'Custom module development for industry-specific needs'),
        t('prices.services.0.features.3', 'Real-time integration with existing business systems'),
        t('prices.services.0.features.4', 'Comprehensive user training and change management')
      ]
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
      category: 'production',
      pricing: {
        currency: 'EGP',
        startingAt: 30000,
        billingPeriod: 'project'
      },
      features: [
        t('services.costingModule.methodologyItems.0', 'Direct materials cost'),
        t('services.costingModule.methodologyItems.1', 'Direct labor cost'),
        t('services.costingModule.methodologyItems.2', 'Manufacturing overhead costs')
      ]
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
      category: 'inventory',
      pricing: {
        currency: 'EGP',
        startingAt: 30000,
        billingPeriod: 'project'
      },
      features: [
        t('services.inventoryModule.structureItems.0', 'Raw materials'),
        t('services.inventoryModule.structureItems.1', 'Semi-finished goods'),
        t('services.inventoryModule.structureItems.2', 'Finished products'),
        t('services.inventoryModule.structureItems.3', 'Supplies and consumables')
      ]
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
      category: 'logistics',
      pricing: {
        currency: 'EGP',
        startingAt: 45000,
        billingPeriod: 'project'
      },
      features: [
        t('exportModule.shipmentTrackingItems.0', 'Shipment date and memo numbers'),
        t('exportModule.shipmentTrackingItems.1', 'Container No.'),
        t('exportModule.shipmentTrackingItems.2', 'Lot No. associated with raw materials or products'),
        t('exportModule.shipmentTrackingItems.3', 'Customer name and export destination')
      ]
    },
    {
      ...safeSalesService,
      icon: (
        <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      pricing: {
        currency: 'EGP',
        startingAt: 30000,
        billingPeriod: 'project'
      },
      features: [
        t('services.salesModule.features.0', 'Customer relationship management'),
        t('services.salesModule.features.1', 'Order processing and tracking'),
        t('services.salesModule.features.2', 'Comprehensive reporting and analytics'),
        t('services.salesModule.features.3', 'Integration with inventory and accounting systems')
      ]
    },
    {
      ...safeSmartScaleService,
      icon: (
        <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      pricing: {
        currency: 'EGP',
        startingAt: 25000,
        billingPeriod: 'project'
      },
      features: [
        t('services.smartScaleFeatures.feature1', 'Automatic recording of actual weight for products, pallets, or containers without human intervention'),
        t('services.smartScaleFeatures.feature2', 'Prevention of manipulation or manual input errors'),
        t('services.smartScaleFeatures.feature3', 'Comparison of actual weight with standard weight to detect deviations or losses'),
        t('services.smartScaleFeatures.feature4', 'Direct generation of invoices and costs based on real weight')
      ]
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
      },
      features: [
        t('services.hrPayroll.features.feature1', 'Based on variable settings for insurance, vacations, and taxes that can be modified when laws change'),
        t('services.hrPayroll.features.feature2', 'Respects all payroll calculation rules and penalty provisions, carrying over excess of five days to subsequent months'),
        t('services.hrPayroll.features.feature3', 'Maintains employee photos and all employment documents with reports on missing documents'),
        t('services.hrPayroll.features.feature4', 'Tracks document expiration dates to notify employees of renewals')
      ]
    },
    {
      id: "concrete",
      title: t('concreteManagement.title', 'Ready-Mix Concrete Plant Management System'),
      description: t('concreteManagement.description', 'A comprehensive, interconnected accounting software with extreme precision and flexibility, specifically designed to meet the requirements of ready-mix concrete plants of all types.'),
      icon: (
        <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
        </svg>
      ),
      category: 'production',
      pricing: {
        currency: 'EGP',
        startingAt: 50000,
        billingPeriod: 'project'
      },
      features: t('concreteManagement.features', [
        'Multi-plant operations with ability to transfer vehicles (cost centers) between branches',
        'Complete tracking of production process from raw materials entry to concrete preparation',
        'Automatic inventory alerts to prevent production interruption',
        'Quality control linking final product to raw materials with ability to modify components during production',
        'Direct sales capability with one-step manufacturing and daily invoice issuance',
        'Comprehensive reports for production operations matching with laboratory reports'
      ])
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

  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredServices, setFilteredServices] = useState<Service[]>(services);

  useEffect(() => {
    // Set page title and meta tags
    document.title = t('seo.services.title', 'Our Services - Active Soft');
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('seo.services.description', 'Explore our comprehensive range of Oracle ERP solutions, custom software development, and managed IT services tailored for your business needs.'));
    }

    // Scroll to section if hash is present
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location, t]);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredServices(services);
    } else {
      setFilteredServices(services.filter(service => service.category === activeCategory));
    }
  }, [activeCategory, services]);

  const scrollToSection = (id: string) => {
    const element = sectionRefs.current[id];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Digital Transformation Background Elements */}
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
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display animate-on-scroll">
              {t('services.hero.title', 'Our Comprehensive Services')}
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-on-scroll" style={{ transitionDelay: '150ms' }}>
              {t('services.hero.subtitle', 'Tailored solutions to drive your business forward with cutting-edge technology and expertise.')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-on-scroll" style={{ transitionDelay: '300ms' }}>
              <Link to="/contact" className="px-8 py-3 bg-primary text-white font-bold rounded-md shadow-lg hover:bg-secondary transition-colors duration-300 transform hover:scale-105">
                {t('services.hero.cta', 'Get Started')}
              </Link>
              <Link to="/portfolio" className="px-8 py-3 bg-white/10 text-white font-bold rounded-md hover:bg-white/20 transition-colors duration-300 transform hover:scale-105">
                {t('services.hero.portfolio', 'View Our Work')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display animate-on-scroll">
              {t('services.overview.title', 'What We Offer')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-on-scroll" style={{ transitionDelay: '100ms' }}>
              {t('services.overview.subtitle', 'Comprehensive solutions designed to meet the unique needs of your business.')}
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 animate-on-scroll" style={{ transitionDelay: '200ms' }}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-lg transform hover:scale-105'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:-translate-y-1'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div 
                key={service.id} 
                className="glass-panel p-8 rounded-xl hover:border-primary transition-all duration-300 h-full flex flex-col animate-on-scroll hover:-translate-y-2"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 font-display">{service.title}</h3>
                <p className="text-gray-300 mb-6 flex-grow">{service.description}</p>
                
                {/* Service Features */}
                {service.features && service.features.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2 text-cyan-400">{t('prices.features', 'Key Features')}</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="h-5 w-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="mt-auto">
                  <Link 
                    to={`/services#${service.id}`} 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(service.id);
                    }}
                    className="font-semibold text-primary hover:text-secondary transition-colors"
                  >
                    {t('services.learnMore', 'Learn More')} &rarr;
                  </Link>
                </div>
                {service.pricing && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-sm text-gray-400">
                      {t('services.startingAt', 'Starting at')}{' '}
                      <span className="text-primary font-bold">
                        {service.pricing.currency} {service.pricing.startingAt.toLocaleString()}
                      </span>{' '}
                      {service.pricing.billingPeriod === 'project' 
                        ? t('services.perProject', 'per project') 
                        : t('services.perMonth', 'per month')}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section 
          key={service.id}
          id={service.id}
          ref={el => sectionRefs.current[service.id] = el}
          className="glass-panel p-8 rounded-xl mb-12 animate-on-scroll"
          style={{ transitionDelay: `${(index + 1) * 100}ms` }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
              <div className="bg-primary/10 p-6 rounded-full">
                {service.icon}
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h2 className="text-3xl font-bold mb-4 text-white font-display">{service.title}</h2>
              <p className="text-gray-300 mb-6">{service.description}</p>
              
              {/* Detailed Features List */}
              {service.features && service.features.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">{t('prices.features', 'Key Features')}</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="h-5 w-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Pricing Information */}
              {service.pricing && (
                <div className="mb-6 p-4 bg-slate-800/50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-cyan-400">{t('services.pricing', 'Pricing')}</h3>
                  <p className="text-lg">
                    <span className="text-primary font-bold">
                      {service.pricing.currency} {service.pricing.startingAt.toLocaleString()}
                    </span>{' '}
                    <span className="text-gray-400">
                      {service.pricing.billingPeriod === 'project' 
                        ? t('services.perProject', 'per project') 
                        : t('services.perMonth', 'per month')}
                    </span>
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    {t('prices.subtitle', 'All plans are fully customizable to your specific requirements.')}
                  </p>
                </div>
              )}
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/contact" 
                  className="px-6 py-2 bg-primary text-white font-bold rounded-md hover:bg-secondary transition-colors duration-300 transform hover:scale-105"
                >
                  {t('services.getInTouch', 'Get in Touch')}
                </Link>
                <Link 
                  to="/portfolio" 
                  className="px-6 py-2 bg-white/10 text-white font-bold rounded-md hover:bg-white/20 transition-colors duration-300 transform hover:scale-105"
                >
                  {t('services.viewCaseStudies', 'View Case Studies')}
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display animate-on-scroll">
            {t('services.cta.title', 'Ready to Transform Your Business?')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-on-scroll" style={{ transitionDelay: '100ms' }}>
            {t('services.cta.subtitle', 'Let\'s discuss how our services can help you achieve your goals.')}
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-on-scroll" style={{ transitionDelay: '200ms' }}>
            <Link to="/contact" className="px-8 py-3 bg-white text-primary font-bold rounded-md shadow-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              {t('services.cta.contact', 'Contact Us')}
            </Link>
            <Link to="/about" className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-md hover:bg-white/10 transition-colors duration-300 transform hover:scale-105">
              {t('services.cta.learnMore', 'Learn More')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;