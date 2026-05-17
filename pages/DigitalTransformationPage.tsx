import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { 
  Lightbulb, 
  Code, 
  Cloud, 
  Database, 
  ShieldCheck, 
  ShoppingBag, 
  Zap, 
  Layers, 
  Network, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  TrendingUp,
  Award
} from 'lucide-react';

const DigitalTransformationPage: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const { t } = useTranslation();

  // SEO metadata
  useEffect(() => {
    const title = t('seo.digitalTransformation.title', 'Digital Transformation Services - ERP & Custom Software Solutions | Active Soft');
    const description = t('seo.digitalTransformation.description', 'Comprehensive digital transformation services including Oracle ERP implementation, custom software development, cloud infrastructure, and cybersecurity solutions for businesses in Egypt and the Middle East.');
    const keywords = t('seo.digitalTransformation.keywords', 'Digital Transformation Egypt, ERP Implementation, Custom Software Development, Cloud Infrastructure, Cybersecurity Solutions, Business Technology Transformation');

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

  // Define services data with Lucide icons
  const services = [
    {
      icon: Lightbulb,
      title: language === 'ar' ? 'الاستشارات الاستراتيجية' : 'Strategic Consulting',
      description: language === 'ar'
        ? 'مساعدة الشركات على وضع استراتيجيات التحول الرقمي وتحديد الأهداف والمجالات التي يمكن رقمنتها.'
        : 'Helping businesses develop digital transformation strategies and identify goals and areas that can be digitized.',
      details: {
        benefits: language === 'ar'
          ? ['تحديد أولويات التحول الرقمي', 'تخطيط التنفيذ على المدى الطويل', 'تحديد العوائق والفرص']
          : ['Identifying digital transformation priorities', 'Long-term implementation planning', 'Identifying barriers and opportunities'],
        technologies: language === 'ar'
          ? ['تحليل SWOT', 'نماذج التقييم', 'أدوات التخطيط الاستراتيجي']
          : ['SWOT Analysis', 'Assessment Models', 'Strategic Planning Tools'],
        approach: language === 'ar'
          ? 'نهج شامل يبدأ بتقييم الحالة الحالية وينتهي بخطة تنفيذية مفصلة'
          : 'Comprehensive approach starting with current state assessment and ending with a detailed implementation plan'
      }
    },
    {
      icon: Code,
      title: language === 'ar' ? 'تطوير البرمجيات والتطبيقات' : 'Software & Application Development',
      description: language === 'ar'
        ? 'بناء وتطوير تطبيقات الويب والجوال والمنصات الرقمية المخصصة.'
        : 'Building and developing custom web, mobile applications, and digital platforms.',
      details: {
        benefits: language === 'ar'
          ? ['حلول مخصصة تناسب احتياجاتك', 'تحسين تجربة المستخدم', 'تكامل سلس مع الأنظمة الحالية']
          : ['Custom solutions tailored to your needs', 'Enhanced user experience', 'Seamless integration with existing systems'],
        technologies: language === 'ar'
          ? ['React, Node.js, Python', 'Flutter, Swift, Kotlin', 'AWS, Azure, Google Cloud']
          : ['React, Node.js, Python', 'Flutter, Swift, Kotlin', 'AWS, Azure, Google Cloud'],
        approach: language === 'ar'
          ? 'تطوير مرن باستخدام منهجيات Agile مع مراحل اختبار صارمة'
          : 'Agile development with iterative approach and rigorous testing phases'
      }
    },
    {
      icon: Cloud,
      title: language === 'ar' ? 'إدارة البنية التحتية السحابية' : 'Cloud Infrastructure Management',
      description: language === 'ar'
        ? 'بناء وتشغيل البنية التحتية السحابية لتمكين العمليات الرقمية.'
        : 'Building and operating cloud infrastructure to enable digital operations.',
      details: {
        benefits: language === 'ar'
          ? ['قابلية التوسع والمرونة', 'تقليل التكاليف التشغيلية', 'أمان محسن وموثوقية عالية']
          : ['Scalability and flexibility', 'Reduced operational costs', 'Enhanced security and reliability'],
        technologies: language === 'ar'
          ? ['Amazon Web Services', 'Microsoft Azure', 'Google Cloud Platform']
          : ['Amazon Web Services', 'Microsoft Azure', 'Google Cloud Platform'],
        approach: language === 'ar'
          ? 'تصميم معماري مرن مع خطة نسخ احتياطي واستعادة شاملة'
          : 'Flexible architecture design with comprehensive backup and recovery plan'
      }
    },
    {
      icon: Database,
      title: language === 'ar' ? 'تحليل البيانات الضخمة' : 'Big Data Analytics',
      description: language === 'ar'
        ? 'استخدام البيانات لاتخاذ قرارات مستنيرة، والتنبؤ بالاتجاهات، وتقديم توصيات مخصصة.'
        : 'Using data to make informed decisions, predict trends, and provide personalized recommendations.',
      details: {
        benefits: language === 'ar'
          ? ['رؤى قائمة على البيانات الكبيرة', 'تحسين اتخاذ القرار الاستثماري', 'تحديد الفرص الجديدة بدقة']
          : ['Data-driven insights', 'Improved decision making', 'Identification of new opportunities'],
        technologies: language === 'ar'
          ? ['Apache Spark, Hadoop', 'Tableau, Power BI', 'Python, R, SQL']
          : ['Apache Spark, Hadoop', 'Tableau, Power BI', 'Python, R, SQL'],
        approach: language === 'ar'
          ? 'تحليل شامل للبيانات مع نماذج تنبؤية متقدمة'
          : 'Comprehensive data analysis with advanced predictive modeling'
      }
    },
    {
      icon: ShieldCheck,
      title: language === 'ar' ? 'الأمن السيبراني وحماية البيانات' : 'Cybersecurity & Data Protection',
      description: language === 'ar'
        ? 'حماية الأنظمة والبيانات والشبكات من التهديدات الإلكترونية والقرصنة.'
        : 'Protecting systems, data, and networks from electronic threats and hacking.',
      details: {
        benefits: language === 'ar'
          ? ['حماية البيانات الحساسة والمالية', 'الامتثال للوائح الدولية والمحلية', 'تعزيز ثقة العملاء والشركاء']
          : ['Protection of sensitive data', 'Regulatory compliance', 'Enhanced customer trust'],
        technologies: language === 'ar'
          ? ['Firewalls, SIEM', 'Zero Trust Architecture', 'Encryption Technologies']
          : ['Firewalls, SIEM', 'Zero Trust Architecture', 'Encryption Technologies'],
        approach: language === 'ar'
          ? 'نهج شامل للأمان مع تقييم المخاطر المستمر والمراقبة اللحظية'
          : 'Comprehensive security approach with continuous risk assessment and monitoring'
      }
    },
    {
      icon: ShoppingBag,
      title: language === 'ar' ? 'حلول التجارة الإلكترونية' : 'E-commerce Solutions',
      description: language === 'ar'
        ? 'تصميم وتطوير منصات التجارة الإلكترونية، بما في ذلك تكامل أنظمة الدفع والشحن.'
        : 'Designing and developing e-commerce platforms, including payment and shipping system integration.',
      details: {
        benefits: language === 'ar'
          ? ['توسيع نطاق السوق والانتشار الجغرافي', 'تجربة تسوق رقمية استثنائية وسلسة', 'تحليلات المبيعات وتتبع أداء المنتجات']
          : ['Market reach expansion', 'Enhanced shopping experience', 'Advanced sales analytics'],
        technologies: language === 'ar'
          ? ['Shopify, Magento, WooCommerce', 'Stripe, PayPal, Local Gateways', 'Shipping APIs & Tracking']
          : ['Shopify, Magento', 'Stripe, PayPal', 'Shipping APIs'],
        approach: language === 'ar'
          ? 'تطوير منصات مرنة وسريعة وآمنة تماماً مع تهيئة كاملة لمحركات البحث'
          : 'Flexible and secure platform development with SEO optimization'
      }
    },
    {
      icon: Zap,
      title: language === 'ar' ? 'أتمتة العمليات والمهام (RPA)' : 'Process Automation (RPA)',
      description: language === 'ar'
        ? 'تبسيط المهام الروتينية والمتكررة من خلال الأتمتة لتحسين الكفاءة وخفض التكاليف التشغيلية.'
        : 'Simplifying routine and repetitive tasks through automation to improve efficiency and reduce costs.',
      details: {
        benefits: language === 'ar'
          ? ['زيادة الإنتاجية وتقليل الوقت المهدر', 'تقليل الأخطاء البشرية بنسبة 99%', 'تحسين رضا الموظفين والعملاء']
          : ['Increased productivity', 'Reduced human errors', 'Improved employee satisfaction'],
        technologies: language === 'ar'
          ? ['RPA Tools, AI/ML Integrations', 'Workflow Engines', 'API Integration & Sync']
          : ['RPA Tools, AI/ML', 'Workflow Engines', 'API Integration'],
        approach: language === 'ar'
          ? 'تحديد العمليات المناسبة للأتمتة وتنفيذ حلول ذكية مخصصة'
          : 'Identifying suitable processes for automation and implementing customized solutions'
      }
    },
    {
      icon: Layers,
      title: language === 'ar' ? 'بناء النماذج الأولية (MVP)' : 'Prototyping & MVP Creation',
      description: language === 'ar'
        ? 'إنشاء نماذج قابلة للاختبار للتقنيات الجديدة لتجربة الأفكار وتحسينها قبل التطوير الكامل.'
        : 'Creating testable prototypes of new technologies to experiment with ideas and improve them before full development.',
      details: {
        benefits: language === 'ar'
          ? ['تقليل مخاطر الاستثمار المالي', 'الحصول على ملاحظات المستخدمين في مرحلة مبكرة', 'تسريع إطلاق المنتجات في السوق']
          : ['Reduced investment risk', 'Early user feedback', 'Accelerated development process'],
        technologies: language === 'ar'
          ? ['Figma, Adobe XD', 'Rapid Development Frameworks', 'MVP Tools & Templates']
          : ['Figma, Adobe XD', 'Rapid Development Frameworks', 'MVP Tools'],
        approach: language === 'ar'
          ? 'تطوير نماذج أولية سريعة وعملية خاضعة للاختبار والتحسين التكراري'
          : 'Rapid prototyping with iterative testing'
      }
    },
    {
      icon: Network,
      title: language === 'ar' ? 'إنترنت الأشياء (IoT)' : 'Internet of Things (IoT)',
      description: language === 'ar'
        ? 'ربط الأجهزة والأنظمة لجمع البيانات وتسهيل العمليات التشغيلية التلقائية.'
        : 'Connecting devices and systems to collect data and facilitate processes.',
      details: {
        benefits: language === 'ar'
          ? ['أتمتة العمليات في الوقت الفعلي', 'تحليلات تشغيلية متقدمة ولحظية', 'تحسين استغلال الموارد والطاقة']
          : ['Real-time process automation', 'Advanced analytics', 'Resource efficiency improvement'],
        technologies: language === 'ar'
          ? ['Sensors, Smart Gateways', 'Edge Computing', 'IoT Cloud Platforms']
          : ['Sensors, Gateways', 'Edge Computing', 'IoT Platforms'],
        approach: language === 'ar'
          ? 'تنفيذ حلول IoT متكاملة مع تركيز تام على الأمان الفائق والقابلية للتوسع'
          : 'End-to-end IoT solutions implementation with focus on security and scalability'
      }
    }
  ];

  // Define transformation objectives
  const objectives = [
    {
      title: language === 'ar' ? 'تحسين كفاءة العمليات' : 'Optimize Operations',
      desc: language === 'ar' ? 'رقمنة وتبسيط كافة الخطوات التشغيلية وإلغاء المعاملات الورقية تماماً.' : 'Digitize and streamline all operational steps, completely eliminating paperwork.'
    },
    {
      title: language === 'ar' ? 'تعزيز تجربة العملاء' : 'Elevate Customer Experience',
      desc: language === 'ar' ? 'تقديم خدمات وحلول ذكية، فورية، ومخصصة تلبي تطلعات عملائكم وسهلة الاستخدام.' : 'Provide smart, instant, and personalized solutions that match customer aspirations.'
    },
    {
      title: language === 'ar' ? 'المرونة وسرعة الاستجابة' : 'Agility & Adaptability',
      desc: language === 'ar' ? 'تمكين شركتك من الاستجابة اللحظية لتقلبات ومتغيرات السوق التنافسية الحديثة.' : 'Enable your business to respond instantly to competitive market fluctuations.'
    },
    {
      title: language === 'ar' ? 'ابتكار نماذج أعمال حديثة' : 'Business Model Innovation',
      desc: language === 'ar' ? 'خلق قنوات بيع وخدمات رقمية جديدة تضمن لك الريادة والميزة التنافسية.' : 'Create new digital sales channels and services that ensure market leadership.'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#070714] text-white">
      {/* Dynamic Background Schematics */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Technical Circuit Board Lines */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 50h20m20 0h10m20 0h30M50 0v20m0 20v10m0 20v30' stroke='%2306B6D4' stroke-width='1'/%3E%3Ccircle cx='20' cy='50' r='2' fill='%2306B6D4'/%3E%3Ccircle cx='50' cy='20' r='2' fill='%2306B6D4'/%3E%3Ccircle cx='50' cy='80' r='2' fill='%2306B6D4'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}></div>

        {/* HUD Circles */}
        <div className="absolute top-20 right-10 w-64 h-64 border border-white/5 rounded-full flex items-center justify-center">
          <div className="w-48 h-48 border border-white/5 rounded-full border-dashed animate-spin" style={{ animationDuration: '40s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Futuristic Hero Section */}
          <div className="text-center mb-20 animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              <span>{language === 'ar' ? 'بوابة المستقبل الرقمي' : 'Future of Business is Digital'}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient-x">
              {language === 'ar' ? 'خدمات التحول الرقمي الشامل' : 'Digital Transformation'}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {language === 'ar'
                ? 'نمكّن الشركات والمؤسسات من دمج التقنيات الرقمية المتقدمة في صميم عملياتها التشغيلية، لتسريع النمو الإداري، وتعزيز الكفاءة التشغيلية، وتقديم تجارب ذكاء اصطناعي للمستخدمين النهائيين.'
                : 'We empower companies to integrate advanced digital technologies into the core of their operations, accelerating administrative growth, enhancing operational efficiency, and delivering smart experiences.'}
            </p>
          </div>

          {/* Interactive Info Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {/* Detailed Intro Card */}
            <div className="lg:col-span-2 glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between animate-on-scroll">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-secondary/15 text-secondary border border-secondary/20">
                    <Award className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white font-display">
                    {language === 'ar' ? 'مفهوم التحول الرقمي الاستراتيجي' : 'Strategic Concept'}
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {language === 'ar'
                    ? 'التحول الرقمي ليس مجرد تركيب برمجيات جديدة؛ بل هو إعادة تصميم ثقافة العمل واستراتيجياته. في أكتيف سوفت، نجمع بين عراقة الاستشارات المالية والإدارية وأحدث التقنيات البرمجية لتزويدك ببنية تحتية رقمية ذكية. نضمن لك اتصالاً انسيابياً بين مخازنك، ومحطات إنتاجك، وحساباتك العامة، وأمن معلوماتك.'
                    : 'Digital transformation is not just about installing new software; it is a fundamental redesign of business culture and strategy. At Active Soft, we blend rich financial and administrative consulting legacy with state-of-the-art coding to equip your enterprise with smart infrastructure.'}
                </p>
              </div>
              <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-secondary" /> {language === 'ar' ? 'حلول مخصصة' : 'Custom Tailored'}</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-secondary" /> {language === 'ar' ? 'أمان سيبراني كامل' : 'Enterprise Security'}</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-secondary" /> {language === 'ar' ? 'تكامل الأنظمة' : 'Seamless Integration'}</span>
              </div>
            </div>

            {/* Glowing CTA Sidebar */}
            <div className="bg-gradient-to-br from-primary/15 via-slate-900/50 to-secondary/15 rounded-3xl p-8 border border-primary/30 backdrop-blur-md flex flex-col justify-between animate-on-scroll" style={{ transitionDelay: '100ms' }}>
              <div>
                <h3 className="text-2xl font-bold text-white font-display mb-4 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary animate-bounce" />
                  <span>{language === 'ar' ? 'هل أنت مستعد للتغيير؟' : 'Ready to Transform?'}</span>
                </h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  {language === 'ar'
                    ? 'اتخذ الخطوة الأولى نحو أتمتة مؤسستك وتحقيق أقصى درجات الإنتاجية. تواصل مع مستشارينا المعتمدين اليوم للحصول على جلسة تقييم شاملة مجاناً.'
                    : 'Take the first step toward automating your business and achieving maximum productivity. Contact our certified consultants today for a comprehensive evaluation session.'}
                </p>
              </div>
              <Link
                to="/contact"
                className="group flex items-center justify-center gap-2 w-full text-center bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-primary/30"
              >
                <span>{language === 'ar' ? 'ابدأ رحلتك الآن' : 'Start Your Journey'}</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Objectives Grid */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-white font-display text-center mb-12 animate-on-scroll">
              {language === 'ar' ? 'أهداف استراتيجية نسعى لتحقيقها' : 'Core Objectives We Achieve'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {objectives.map((obj, index) => (
                <div 
                  key={index}
                  className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-secondary/30 transition-all duration-300 animate-on-scroll flex flex-col justify-between"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 font-bold font-display">
                      0{index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 font-display">{obj.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{obj.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Services Grid */}
          <div className="mb-24">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {language === 'ar' ? 'أبرز خدمات وحلول التحول الرقمي' : 'Key Digital Transformation Solutions'}
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                {language === 'ar'
                  ? 'باقة متكاملة من الخدمات التقنية المصممة خصيصاً لمساعدة الشركات الصناعية والتجارية على قيادة السوق بثقة وأمان.'
                  : 'A complete suite of technological solutions crafted specifically to guide commercial and industrial enterprises.'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group flex flex-col justify-between animate-on-scroll"
                    style={{ transitionDelay: `${(index % 3) * 100}ms` }}
                  >
                    <div>
                      {/* Icon */}
                      <div className="p-4 rounded-2xl bg-primary/10 text-primary border border-primary/20 inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white font-display mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-300 text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>

                    {/* Detailed Dropdown Specs */}
                    <div className="pt-6 border-t border-white/5 space-y-4">
                      {/* Benefits */}
                      <div>
                        <h4 className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                          {language === 'ar' ? 'أبرز الفوائد:' : 'Key Benefits:'}
                        </h4>
                        <ul className="text-xs text-gray-400 space-y-1.5">
                          {service.details.benefits.map((benefit, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                          {language === 'ar' ? 'التقنيات المستخدمة:' : 'Core Technologies:'}
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {service.details.technologies.map((tech, tIdx) => (
                            <span key={tIdx} className="text-[10px] bg-slate-900 border border-white/5 text-gray-300 px-2 py-0.5 rounded-md font-mono">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Approach */}
                      <div>
                        <h4 className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">
                          {language === 'ar' ? 'منهجيتنا:' : 'Our Approach:'}
                        </h4>
                        <p className="text-xs text-gray-400 leading-relaxed italic">
                          {service.details.approach}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Custom Dynamic Essential Info Banner */}
          <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-primary/20 relative overflow-hidden animate-on-scroll">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold text-white font-display mb-4">
                  {language === 'ar' ? 'لماذا يعد التحول الرقمي ضرورة بقاء وليس مجرد خيار؟' : 'Why is Digital Transformation Essential?'}
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {language === 'ar'
                    ? 'في العصر الرقمي المتسارع، لم يعد التطوير التكنولوجي رفاهية. الشركات والمصانع التي لا تطور بنيتها التحتية وتتبنى أنظمة إدارة موارد متقدمة وذكية تواجه خطر التراجع وفقدان الميزة التنافسية. الاستثمار في التحول الرقمي اليوم هو الضمان الأكيد لاستمرارية أعمالك ونموها وغزو الأسواق العالمية في المستقبل.'
                    : 'In today\'s hyper-accelerated corporate landscape, digital adaptation is no longer an option. Companies that fail to update their infrastructure risk becoming obsolete. Investing in custom systems and secure cloud capabilities today guarantees your future market leadership.'}
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="w-24 h-24 rounded-full bg-secondary/10 border-2 border-secondary/30 flex items-center justify-center text-secondary animate-pulse">
                  <Sparkles className="w-10 h-10" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DigitalTransformationPage;