import React, { useEffect, useState, useMemo, useRef, useContext } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { LanguageContext } from '../context/LanguageContext';
import { 
  Building2, 
  Cpu, 
  Package, 
  Globe, 
  Users, 
  Scale, 
  Wallet,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  TrendingUp
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  features?: string[];
  icon?: React.ComponentType<any>;
  link?: string;
  pricing?: {
    currency: string;
    startingAt: number;
    billingPeriod: string;
  };
  category?: string;
}

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);
  const [activeSection, setActiveSection] = useState('erp');
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Get all services from translations
  const allServices = t('prices.services', []);

  // Fallback data for smart scale system
  const safeSmartScaleService: Service = {
    id: "smartScale",
    title: t('services.smartScale.title', 'Smart Scale System'),
    description: t('services.smartScale.desc', 'Intelligent weighing system that automates weight recording and integrates directly with your inventory and financial systems.'),
    features: [
      t('services.smartScale.components.item1'),
      t('services.smartScale.components.item2'),
      t('services.smartScale.components.item3'),
      t('services.smartScale.components.item4'),
      t('services.smartScale.components.item5'),
      t('services.smartScale.components.item6')
    ],
    pricing: {
      currency: 'EGP',
      startingAt: 25000,
      billingPeriod: 'project'
    },
    category: 'inventory'
  };

  // Fallback data for sales management system
  const safeSalesService: Service = {
    id: "sales",
    title: t('services.erp.salesCustomers.title', 'Sales & Representatives Management'),
    description: t('services.erp.salesCustomers.points.0'),
    features: [
      t('services.erp.salesCustomers.points.6', 'Sales Representatives & Managers system'),
      t('services.erp.salesCustomers.points.7', 'Assigning customers to specific representatives'),
      t('services.erp.salesCustomers.points.8', 'Tracking representative performance and collections'),
      t('services.erp.salesCustomers.points.9', 'Automated commission calculation')
    ],
    category: 'erp'
  };

  // Define all services with Lucide icons
  const services: Service[] = [
    {
      id: "erp",
      title: t('services.erp.title', 'Active Soft ERP Solutions'),
      description: t('services.erp.concept.points.0', 'Integrated accounting and administrative system for managing all commercial and industrial activities'),
      link: "/erp-system",
      icon: Building2,
      category: 'erp'
    },
    {
      id: "manufacturing",
      title: t('services.manufacturingModule.title'),
      description: t('services.manufacturingModule.subtitle'),
      link: "/manufacturing-erp",
      icon: Cpu,
      category: 'production'
    },
    {
      id: "inventory",
      title: t('services.inventoryModule.title', 'Inventory Management'),
      description: t('services.inventoryModule.subtitle', 'Comprehensive inventory management system with advanced tracking and valuation capabilities'),
      link: "/inventory-management",
      icon: Package,
      category: 'inventory'
    },
    {
      id: "export",
      title: t('services.exportModule.title', 'Export Management System'),
      description: t('services.exportModule.subtitle', 'Comprehensive export management system with detailed shipment tracking and financial analysis'),
      link: "/export-management",
      icon: Globe,
      category: 'logistics'
    },
    {
      id: "sales",
      ...safeSalesService,
      icon: Users,
      category: 'erp'
    },
    {
      ...safeSmartScaleService,
      id: "smartScale",
      link: "/smart-weighing-system",
      icon: Scale
    },
    {
      id: "hrPayroll",
      title: t('services.hrPayroll.title', 'HR and Payroll Management System'),
      description: t('services.hrPayroll.desc', 'Complete and integrated system with financial accounts for managing employee affairs and payroll calculations.'),
      link: "/hr-payroll",
      icon: Wallet,
      category: 'hr'
    }
  ];

  // Define categories for filtering
  const categories = [
    { id: 'all', label: t('services.categories.all', 'All Services') },
    { id: 'erp', label: t('services.categories.erp', 'ERP Solutions') },
    { id: 'production', label: t('services.categories.production', 'Production') },
    { id: 'inventory', label: t('services.categories.inventory', 'Inventory') },
    { id: 'logistics', label: t('services.categories.logistics', 'Logistics') },
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
  }, [filterCategory, searchQuery]);

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
      const scrollPosition = window.scrollY + 200;

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
      const offset = element.offsetTop - 120;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#070714] text-white">
      {/* Dynamic Futuristic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2.5s' }}></div>

        {/* Technical Grid lines */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h120v120H0z' fill='none'/%3E%3Cpath d='M0 60h24m24 0h12m24 0h36M60 0v24m0 24v12m0 24v36' stroke='%2306B6D4' stroke-width='1'/%3E%3Ccircle cx='24' cy='60' r='2' fill='%2306B6D4'/%3E%3Ccircle cx='60' cy='24' r='2' fill='%2306B6D4'/%3E%3Ccircle cx='60' cy='96' r='2' fill='%2306B6D4'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}></div>
      </div>

      <div className="relative z-10">
        
        {/* Header Hero */}
        <section className="pt-20 pb-8 text-center animate-on-scroll">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              <span>{language === 'ar' ? 'أنظمة برمجية متكاملة لنمو أعمالك' : 'Enterprise Modules for Maximum Efficiency'}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-display bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient-x mb-6">
              {t('services.title', 'Our Comprehensive Services')}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('services.subtitle', 'Tailored technology solutions designed specifically to streamline enterprise workflows and boost productivity.')}
            </p>
          </div>
        </section>

        {/* Dynamic Navigation sticky Menu */}
        <div className="sticky top-20 z-40 bg-slate-950/85 backdrop-blur-md border-y border-white/10 shadow-xl shadow-slate-950/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto py-4 space-x-4 rtl:space-x-reverse scrollbar-hide items-center justify-start lg:justify-center">
              {services.map(service => (
                <button
                  key={service.id}
                  onClick={() => scrollToSection(service.id)}
                  className={`relative whitespace-nowrap px-5 py-2.5 rounded-xl font-bold transition-all duration-300 ${
                    activeSection === service.id
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20 scale-105'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="relative z-10">{service.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Sections List */}
        <div className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-20">

              {/* ERP Solutions Section */}
              <div 
                id="erp" 
                ref={el => sectionRefs.current['erp'] = el} 
                className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/10 animate-on-scroll"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start mb-12">
                  <div className="p-5 rounded-3xl bg-primary/10 text-primary border border-primary/20 flex-shrink-0">
                    <Building2 className="w-12 h-12" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">
                      {t('services.erp.title', 'Active Soft ERP Solutions')}
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-base">
                      {t('services.erp.concept.points.0', 'Integrated accounting and administrative system for managing all commercial and industrial activities')}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    'mainFeatures',
                    'generalAccounts',
                    'salesCustomers',
                    'purchasesSuppliers',
                    'inventoryWarehouses',
                    'treasuriesBanks',
                    'costManagement',
                    'fixedAssets',
                    'hrOptional',
                    'reports',
                    'additionalFeatures'
                  ].map((category) => (
                    <div 
                      key={category} 
                      className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center group-hover:text-primary transition-colors font-display">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 rtl:mr-0 rtl:ml-3"></span>
                          {t(`services.erp.${category}.title`)}
                        </h3>
                        
                        <ul className="space-y-3">
                          {(t(`services.erp.${category}.points`, []) as string[] || []).map((point: string, idx: number) => (
                            <li key={idx} className="flex items-start text-xs text-gray-400 leading-relaxed">
                              <ChevronRight className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Manufacturing Costing Module Section */}
              <div 
                id="manufacturing" 
                ref={el => sectionRefs.current['manufacturing'] = el} 
                className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/10 animate-on-scroll"
              >
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="lg:w-1/3 flex flex-col justify-between">
                    <div>
                      <div className="p-5 rounded-3xl bg-secondary/15 text-secondary border border-secondary/20 inline-block mb-6">
                        <Cpu className="w-12 h-12" />
                      </div>
                      <h2 className="text-3xl font-bold text-white font-display mb-4">
                        {t('services.manufacturingModule.title', 'Costing & Manufacturing Module')}
                      </h2>
                      <p className="text-gray-300 leading-relaxed text-sm mb-8">
                        {t('services.manufacturingModule.subtitle', 'Comprehensive production cost management system with actual costing methodology')}
                      </p>
                    </div>

                    <a 
                      href="/manufacturing-erp"
                      className="group flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-xl shadow-primary/20"
                    >
                      <span>{t('services.learnMore', 'Explore Module')}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </a>
                  </div>

                  <div className="lg:w-2/3 space-y-8 lg:pl-8 lg:border-l lg:border-white/5 rtl:lg:pl-0 rtl:lg:pr-8 rtl:lg:border-l-0 rtl:lg:border-r">
                    <div className="glass-panel p-6 rounded-2xl border border-white/5">
                      <h3 className="text-xl font-bold text-white mb-3 font-display">{t('services.costingModule.methodologyTitle', 'Production Cost Calculation Methodology')}</h3>
                      <p className="text-sm text-gray-300 leading-relaxed mb-4">{t('services.costingModule.methodologyDesc', 'The system is based on Actual Costing during the production month.')}</p>
                      
                      <h4 className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">{t('services.costingModule.methodologyIncludes', 'Cost Includes:')}</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {(t('services.costingModule.methodologyItems', []) as string[] || []).map((item: string, index: number) => (
                          <li key={index} className="flex items-center gap-2 text-xs text-gray-400">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="glass-panel p-6 rounded-2xl border border-white/5">
                      <h3 className="text-xl font-bold text-white mb-3 font-display">{t('services.costingModule.bomTitle', 'Raw Materials and BOM (Bill of Materials)')}</h3>
                      <p className="text-sm text-gray-300 leading-relaxed mb-3">{t('services.costingModule.bomDesc1', 'Material ratios for each product are determined through BOM.')}</p>
                      <p className="text-sm text-gray-300 leading-relaxed mb-3">{t('services.costingModule.bomDesc2', 'The system automatically issues raw material documents according to BOM ratios.')}</p>
                      
                      <h4 className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">{t('services.costingModule.bomItemsTitle', 'Actual Inventory Closeout Actions:')}</h4>
                      <ul className="space-y-2">
                        {(t('services.costingModule.bomItems', []) as string[] || []).map((item: string, index: number) => (
                          <li key={index} className="flex items-start gap-2 text-xs text-gray-400">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inventory Management Section */}
              <div 
                id="inventory" 
                ref={el => sectionRefs.current['inventory'] = el} 
                className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/10 animate-on-scroll"
              >
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="lg:w-1/3 flex flex-col justify-between">
                    <div>
                      <div className="p-5 rounded-3xl bg-primary/10 text-primary border border-primary/20 inline-block mb-6">
                        <Package className="w-12 h-12" />
                      </div>
                      <h2 className="text-3xl font-bold text-white font-display mb-4">
                        {t('services.inventoryModule.title', 'Inventory & Warehouses')}
                      </h2>
                      <p className="text-gray-300 leading-relaxed text-sm mb-8">
                        {t('services.inventoryModule.subtitle', 'Comprehensive inventory management system with advanced tracking and valuation capabilities')}
                      </p>
                    </div>

                    <a 
                      href="/inventory-management"
                      className="group flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-xl shadow-primary/20"
                    >
                      <span>{t('services.learnMore', 'Explore Module')}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </a>
                  </div>

                  <div className="lg:w-2/3 space-y-8 lg:pl-8 lg:border-l lg:border-white/5 rtl:lg:pl-0 rtl:lg:pr-8 rtl:lg:border-l-0 rtl:lg:border-r">
                    <div className="glass-panel p-6 rounded-2xl border border-white/5">
                      <h3 className="text-xl font-bold text-white mb-3 font-display">{t('services.inventoryModule.structureTitle', 'Inventory Structure & Coding')}</h3>
                      <p className="text-sm text-gray-300 leading-relaxed mb-4">{t('services.inventoryModule.structureDesc', 'Divided cleanly into:')}</p>
                      
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                        {(t('services.inventoryModule.structureItems', []) as string[] || []).map((item: string, index: number) => (
                          <li key={index} className="flex items-center gap-2 text-xs text-gray-400">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="glass-panel p-6 rounded-2xl border border-white/5">
                      <h3 className="text-xl font-bold text-white mb-3 font-display">{t('services.inventoryModule.lotsFunctionsTitle', 'Lot Functions')}</h3>
                      <ul className="space-y-2">
                        {(t('services.inventoryModule.lotsFunctionsItems', []) as string[] || []).map((item: string, index: number) => (
                          <li key={index} className="flex items-start gap-2 text-xs text-gray-400">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Export Management System Section */}
              <div 
                id="export" 
                ref={el => sectionRefs.current['export'] = el} 
                className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/10 animate-on-scroll"
              >
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="lg:w-1/3 flex flex-col justify-between">
                    <div>
                      <div className="p-5 rounded-3xl bg-secondary/15 text-secondary border border-secondary/20 inline-block mb-6">
                        <Globe className="w-12 h-12" />
                      </div>
                      <h2 className="text-3xl font-bold text-white font-display mb-4">
                        {t('services.exportModule.title', 'Export Management')}
                      </h2>
                      <p className="text-gray-300 leading-relaxed text-sm mb-8">
                        {t('services.exportModule.subtitle', 'Comprehensive export management system with detailed shipment tracking and financial analysis')}
                      </p>
                    </div>

                    <a 
                      href="/export-management"
                      className="group flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-xl shadow-primary/20"
                    >
                      <span>{t('services.learnMore', 'Explore Module')}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </a>
                  </div>

                  <div className="lg:w-2/3 space-y-8 lg:pl-8 lg:border-l lg:border-white/5 rtl:lg:pl-0 rtl:lg:pr-8 rtl:lg:border-l-0 rtl:lg:border-r">
                    <div className="glass-panel p-6 rounded-2xl border border-white/5">
                      <h3 className="text-xl font-bold text-white mb-3 font-display">{t('services.exportModule.shipmentTrackingTitle', 'Shipment Data Tracking')}</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {(t('services.exportModule.shipmentTrackingItems', []) as string[] || []).map((item: string, index: number) => (
                          <li key={index} className="flex items-center gap-2 text-xs text-gray-400">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="glass-panel p-6 rounded-2xl border border-white/5">
                      <h3 className="text-xl font-bold text-white mb-3 font-display">{t('services.exportModule.financialValuesTitle', 'Shipment Financial Values')}</h3>
                      <ul className="space-y-2">
                        {(t('services.exportModule.financialValuesItems', []) as string[] || []).map((item: string, index: number) => (
                          <li key={index} className="flex items-start gap-2 text-xs text-gray-400">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sales Representatives Management Section */}
              <div 
                id="sales" 
                ref={el => sectionRefs.current['sales'] = el} 
                className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/10 animate-on-scroll"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start mb-8">
                  <div className="p-5 rounded-3xl bg-primary/10 text-primary border border-primary/20 flex-shrink-0">
                    <Users className="w-12 h-12" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white font-display mb-4">
                      {safeSalesService.title}
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-base">
                      {safeSalesService.description}
                    </p>
                  </div>
                </div>

                <div className="glass-panel p-6 rounded-2xl border border-white/5">
                  <h3 className="text-lg font-bold text-white mb-4 font-display">{language === 'ar' ? 'أبرز مميزات نظام مناديب المبيعات:' : 'Key Features:'}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {safeSalesService.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-start bg-slate-900/50 p-4 rounded-xl border border-white/5">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mr-3 rtl:mr-0 rtl:ml-3" />
                        <span className="text-sm text-gray-300 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Smart Scale Weighing System Section */}
              <div 
                id="smartScale" 
                ref={el => sectionRefs.current['smartScale'] = el} 
                className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/10 animate-on-scroll"
              >
                <div className="flex flex-col lg:flex-row gap-12 mb-12">
                  <div className="lg:w-1/3 flex flex-col justify-between">
                    <div>
                      <div className="p-5 rounded-3xl bg-secondary/15 text-secondary border border-secondary/20 inline-block mb-6">
                        <Scale className="w-12 h-12" />
                      </div>
                      <h2 className="text-3xl font-bold text-white font-display mb-4">
                        {t('services.smartScale.title', 'Smart Weighing System')}
                      </h2>
                      <p className="text-gray-300 leading-relaxed text-sm mb-8">
                        {t('services.smartScale.desc', 'Intelligent weighing system that automates weight recording and integrates directly with your inventory and financial systems.')}
                      </p>
                    </div>

                    <a 
                      href="/smart-weighing-system"
                      className="group flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-xl shadow-primary/20"
                    >
                      <span>{t('services.learnMore', 'Explore Module')}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </a>
                  </div>

                  <div className="lg:w-2/3 space-y-6 lg:pl-8 lg:border-l lg:border-white/5 rtl:lg:pl-0 rtl:lg:pr-8 rtl:lg:border-l-0 rtl:lg:border-r">
                    <h3 className="text-xl font-bold text-white mb-4 font-display">{t('services.smartScale.componentsTitle', 'Main System Components')}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <div key={num} className="flex items-start bg-slate-900/50 p-4 rounded-xl border border-white/5">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mr-3 rtl:mr-0 rtl:ml-3" />
                          <span className="text-xs text-gray-300 leading-relaxed">{t(`services.smartScale.components.item${num}`)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5">
                  <h3 className="text-2xl font-bold text-white mb-8 text-center font-display">{t('services.smartScale.benefitsTitle', 'Benefits of Using Smart Scales')}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <div key={num} className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/40 transition-all duration-300 group">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors text-primary font-bold">
                          0{num}
                        </div>
                        <h4 className="text-base font-bold text-white mb-2 group-hover:text-primary transition-colors">
                          {t(`services.smartScale.benefits.benefit${num}.title`)}
                        </h4>
                        <p className="text-xs text-gray-400 leading-relaxed">
                          {t(`services.smartScale.benefits.benefit${num}.desc`)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* HR and Payroll Management Section */}
              <div 
                id="hrPayroll" 
                ref={el => sectionRefs.current['hrPayroll'] = el} 
                className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/10 animate-on-scroll"
              >
                <div className="flex flex-col lg:flex-row gap-12 mb-12">
                  <div className="lg:w-1/3 flex flex-col justify-between">
                    <div>
                      <div className="p-5 rounded-3xl bg-primary/10 text-primary border border-primary/20 inline-block mb-6">
                        <Wallet className="w-12 h-12" />
                      </div>
                      <h2 className="text-3xl font-bold text-white font-display mb-4">
                        {t('services.hrPayroll.title', 'HR and Payroll Management System')}
                      </h2>
                      <p className="text-gray-300 leading-relaxed text-sm mb-8">
                        {t('services.hrPayroll.desc', 'Complete and integrated system with financial accounts for managing employee affairs and payroll calculations.')}
                      </p>
                    </div>

                    <a 
                      href="/hr-payroll"
                      className="group flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-xl shadow-primary/20"
                    >
                      <span>{t('services.learnMore', 'Explore Module')}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </a>
                  </div>

                  <div className="lg:w-2/3 space-y-6 lg:pl-8 lg:border-l lg:border-white/5 rtl:lg:pl-0 rtl:lg:pr-8 rtl:lg:border-l-0 rtl:lg:border-r">
                    <h3 className="text-xl font-bold text-white mb-4 font-display">{t('services.hrPayroll.featuresTitle', 'Key Features')}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <div key={num} className="flex items-start bg-slate-900/50 p-4 rounded-xl border border-white/5">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mr-3 rtl:mr-0 rtl:ml-3" />
                          <span className="text-xs text-gray-300 leading-relaxed">{t(`services.hrPayroll.features.feature${num}`)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5">
                  <h3 className="text-xl font-bold text-white mb-6 text-center font-display">{t('services.hrPayroll.howItChangesWork.title')}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((num) => (
                      <div key={num} className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between">
                        <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm mb-4">
                          {num}
                        </div>
                        <p className="text-xs text-gray-300 leading-relaxed">
                          {t(`services.hrPayroll.howItChangesWork.point${num}`)}
                        </p>
                      </div>
                    ))}
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

export default ServicesPage;
