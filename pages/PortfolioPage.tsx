import React, { useEffect, useContext } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { LanguageContext } from '../context/LanguageContext';
import { 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Building2, 
  Monitor, 
  ArrowRight 
} from 'lucide-react';

const PortfolioPage: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const title = t('seo.portfolio.title', 'Application Portfolio & Success Implementations | Active Soft');
    const description = t('seo.portfolio.description', 'Explore the comprehensive portfolio of Oracle ERP integrations and custom business applications developed by Active Soft for leading enterprises.');
    const keywords = t('seo.portfolio.keywords', 'ERP Portfolio, Active Soft Success, Custom Software Showcase, Client Implementations Egypt, Ready-Mix Concrete ERP, Food Costing Systems');

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

  // Premium fallback values matching our realistic client portfolio items
  const defaultItems = [
    {
      title: language === 'ar' 
        ? "نظام إدارة محطات الخرسانة الجاهزة (العروبة للخرسانة الجاهزة)" 
        : "Ready-Mix Concrete Management System (Al-Orouba Concrete)",
      description: language === 'ar'
        ? "حل تقني متكامل لإدارة وتشغيل محطات الخرسانة الجاهزة، يشمل التخطيط المؤتمت لحركة الخلاطات ومضخات الصب، وتتبع استهلاك المواد الخام اللحظي (الأسمنت، البحس، المياه)، والربط المباشر مع موازين البسكول والإنتاج لضمان الجودة والكفاءة التشغيلية."
        : "A fully integrated ERP solution for ready-mix concrete batching plants. It automates concrete mixers and pumps dispatching, tracks real-time raw material consumption (cement, aggregates, water), and bridges directly with scales and production machinery to ensure standard compliance and operation efficiency.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: language === 'ar'
        ? "نظام التكاليف والإنتاج للمجازر والمسالخ الصناعية (شركة دلتا لإنتاج اللحوم)"
        : "Industrial Costing & Production for Meat Processing (Delta Meat Group)",
      description: language === 'ar'
        ? "نظام متخصص في حساب التكاليف الصناعية والإنتاج لقطاع اللحوم والصناعات الغذائية، يتتبع عمليات التشغيل بدءاً من حيازة الماشية الحية، مروراً بعمليات الذبح، والتقطيع والفرز، وحتى المنتج النهائي، مع حساب دقيق لنسب الهالك وتوزيع تكاليف مراكز الخدمة والإنتاج والربط بالتبريد."
        : "A specialized ERP and cost accounting system for industrial slaughterhouses and food processing. It tracks operations from live animals receiving, through slaughtering, cutting, and grading, to the final packaged products, automatically distributing service costs and computing precise waste and yield metrics.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: language === 'ar'
        ? "نظام تخطيط موارد المؤسسات لقطاع الغزل والنسيج (مجموعة الأمراء للسجاد)"
        : "Textile & Carpet Manufacturing ERP System (Al-Omaraa Carpet Group)",
      description: language === 'ar'
        ? "نظام ERP متطور لخطوط إنتاج السجاد والغزل والنسيج، يتتبع مراحل التصنيع المتعددة كالصباغة، النسيج، والتشطيب، مع إدارة دقيقة لمخزون خيوط الغزل بمختلف الأوزان والألوان، وربط الماكينات بجدول تخطيط الإنتاج لضمان تسليم الطلبيات الكبرى في مواعيدها."
        : "A state-of-the-art ERP system for carpet and textile production lines. It tracks multi-stage manufacturing including dyeing, weaving, and finishing, manages complex yarn inventory across weights and colors, and aligns machines capacity with production planning to ensure on-time delivery of major contracts.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: language === 'ar'
        ? "نظام إدارة محطات التعبئة وتصدير الحاصلات الزراعية (شركة VEGEX وشريكاتها)"
        : "Agricultural Packing House & Export Management System (VEGEX & Partners)",
      description: language === 'ar'
        ? "نظام ذكي وشامل لإدارة محطات الفرز وتعبئة الخضار والفواكه، يربط الموردين والمزارع الخارجية بعمليات الاستلام، الفرز، والتعبئة، ويتتبع مسارات الحاويات والشحنات الخارجية، والفواتير بعملات أجنبية متعددة وتكاليف التصدير والتخليص الجمركي."
        : "An end-to-end intelligent system designed for fresh produce grading and packing stations. It integrates farm suppliers with receiving, sorting, and packing processes, manages container tracking, customs clearing costs, export documentation, and foreign currency invoicing for global clients.",
      image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: language === 'ar'
        ? "نظام إدارة المخازن المتعددة وتركيبات المواد الكيماوية (بودي مصر للدهانات BMC)"
        : "Multi-Warehouse & Chemical Formulation Management (Bodi Masr Paints BMC)",
      description: language === 'ar'
        ? "نظام ريادي لإدارة الخدمات اللوجستية والإنتاج الكيماوي لدهانات السيارات والمباني، يشمل مراقبة حركة المخازن المتعددة والمخزون الحساس، وإدارة معادلات التركيبات الكيميائية للمنتجات، وجدولة تسليم طلبيات الموزعين وتتبع الأرصدة والحدود الائتمانية للعملاء."
        : "An enterprise solution built for chemical production and logistics in paint manufacturing. It manages strict chemical formulations (Bill of Materials), tracks sensitive raw materials across multiple warehouses, schedules wholesale orders, and monitors customer credit limits and outstanding balances.",
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: language === 'ar'
        ? "نظام الإدارة المالية والرواتب للقطاع التعليمي (مدارس الجيل الجديد NGI)"
        : "Educational Financials & HR Payroll ERP (New Generation Schools NGI)",
      description: language === 'ar'
        ? "حل مالي متكامل مصمم خصيصاً لإدارة المدارس والمؤسسات التعليمية، يدير شؤون أقساط الطلاب، المصاريف الإدارية والخصومات، مع حساب رواتب المعلمين والموظفين بدقة تامة اعتماداً على أنظمة الحضور والانصراف وقواعد الضرائب والتأمينات الاجتماعية."
        : "A complete financial and administrative system customized for schools. It processes student tuition billing, administrative expenses, and scholarships, while executing precise monthly HR payroll for teachers and staff with active integration with attendance machines, taxes, and social insurance.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop"
    }
  ];

  // Fetch portfolio items from translation database, fallback to realistic list above
  const portfolioItems = t('portfolio.items', defaultItems);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#070714] text-white">
      {/* Dynamic Technological Schematics Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-secondary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* HUD schematics */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h120v120H0z' fill='none'/%3E%3Cpath d='M0 60h24m24 0h12m24 0h36M60 0v24m0 24v12m0 24v36' stroke='%2306B6D4' stroke-width='1'/%3E%3Ccircle cx='24' cy='60' r='2' fill='%2306B6D4'/%3E%3Ccircle cx='60' cy='24' r='2' fill='%2306B6D4'/%3E%3Ccircle cx='60' cy='96' r='2' fill='%2306B6D4'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              <span>{language === 'ar' ? 'سجل مشاريعنا وتطبيقاتنا الحية' : 'Live Applications Showcase'}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient-x">
              {t('portfolio.title', 'Our Application Portfolio')}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('portfolio.subtitle', 'A detailed showcase of custom ERP integrations, costing frameworks, and production tools implemented for leading enterprises.')}
            </p>
          </div>

          {/* Premium Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {portfolioItems.map((item: any, index: number) => (
              <div
                key={index}
                className="group glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col justify-between animate-on-scroll"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div>
                  {/* Image with zoom effect and elegant tech overlay */}
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                    
                    {/* Tech details symbol */}
                    <div className="absolute bottom-4 right-4 p-2 rounded-xl bg-slate-950/70 border border-white/10 text-white backdrop-blur-sm">
                      <Monitor className="w-4 h-4" />
                    </div>
                  </div>
                  
                  {/* Details */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4 font-display group-hover:text-primary transition-colors flex items-center gap-2">
                      <span>{item.title}</span>
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Sub-footer inside card */}
                <div className="px-8 pb-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    <span>{language === 'ar' ? 'تم النشر والتشغيل' : 'Fully Deployed & Live'}</span>
                  </span>
                  
                  <div className="flex items-center gap-1 text-primary group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300 font-bold">
                    <span>{language === 'ar' ? 'تفاصيل التكنولوجيا' : 'Tech Spec'}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Majestic Glowing Call to Action */}
          <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-primary/20 relative overflow-hidden animate-on-scroll">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-2xl z-0 animate-pulse"></div>
            <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold text-white font-display mb-4">
                  {t('portfolio.cta.title', 'Ready to Transform Your Business?')}
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {t('portfolio.cta.description', 'Discover how our custom-tailored integrations and Oracle ERP applications can streamline your day-to-day operations and maximize workflow efficiency.')}
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 w-full md:w-auto text-center bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-xl shadow-primary/25"
                >
                  <span>{t('portfolio.cta.button', 'Request a Demo')}</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;