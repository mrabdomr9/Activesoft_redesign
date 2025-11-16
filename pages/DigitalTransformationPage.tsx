import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

const DigitalTransformationPage: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const { t } = useTranslation();

  // Define the services data with more detailed information
  const services = [
    {
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
      title: language === 'ar' ? 'إدارة البنية التحتية السحابية' : 'Cloud Infrastructure Management',
      description: language === 'ar' 
        ? 'بناء وتشغيل البنية التحتية السحابية لتمكين العمليات الرقمية.' 
        : 'Building and operating cloud infrastructure to enable digital operations.',
      details: {
        benefits: language === 'ar' 
          ? ['قابلية التوسع وال Soup', 'تقليل التكاليف التشغيلية', 'أمان محسن وموثوقية'] 
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
      title: language === 'ar' ? 'تحليل البيانات الضخمة' : 'Big Data Analytics',
      description: language === 'ar' 
        ? 'استخدام البيانات لاتخاذ قرارات مستنيرة، والتنبؤ بالاتجاهات، وتقديم توصيات مخصصة.' 
        : 'Using data to make informed decisions, predict trends, and provide personalized recommendations.',
      details: {
        benefits: language === 'ar' 
          ? ['رؤى قائمة على البيانات', 'تحسين اتخاذ القرار', 'تحديد الفرص الجديدة'] 
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
      title: language === 'ar' ? 'الأمن السيبراني' : 'Cybersecurity',
      description: language === 'ar' 
        ? 'حماية الأنظمة والبيانات من التهديدات الإلكترونية.' 
        : 'Protecting systems and data from electronic threats.',
      details: {
        benefits: language === 'ar' 
          ? ['حماية البيانات الحساسة', 'الامتثال للوائح', 'الثقة المحسنة للعملاء'] 
          : ['Protection of sensitive data', 'Regulatory compliance', 'Enhanced customer trust'],
        technologies: language === 'ar' 
          ? ['Firewalls, SIEM', 'Zero Trust Architecture', 'Encryption Technologies'] 
          : ['Firewalls, SIEM', 'Zero Trust Architecture', 'Encryption Technologies'],
        approach: language === 'ar' 
          ? 'نهج شامل للأمان مع تقييم المخاطر المستمر والمراقبة' 
          : 'Comprehensive security approach with continuous risk assessment and monitoring'
      }
    },
    {
      title: language === 'ar' ? 'حلول التجارة الإلكترونية' : 'E-commerce Solutions',
      description: language === 'ar' 
        ? 'تصميم وتطوير منصات التجارة الإلكترونية، بما في ذلك تكامل أنظمة الدفع والشحن.' 
        : 'Designing and developing e-commerce platforms, including payment and shipping system integration.',
      details: {
        benefits: language === 'ar' 
          ? ['توسيع نطاق السوق', 'تجربة تسوق محسنة', 'تحليلات المبيعات المتقدمة'] 
          : ['Market reach expansion', 'Enhanced shopping experience', 'Advanced sales analytics'],
        technologies: language === 'ar' 
          ? ['Shopify, Magento', 'Stripe, PayPal', '物流 APIs'] 
          : ['Shopify, Magento', 'Stripe, PayPal', 'Shipping APIs'],
        approach: language === 'ar' 
          ? 'تطوير منصات مرنة وآمنة مع تحسين محركات البحث' 
          : 'Flexible and secure platform development with SEO optimization'
      }
    },
    {
      title: language === 'ar' ? 'أتمتة العمليات' : 'Process Automation',
      description: language === 'ar' 
        ? 'تبسيط المهام الروتينية والمتكررة من خلال الأتمتة لتحسين الكفاءة وخفض التكاليف.' 
        : 'Simplifying routine and repetitive tasks through automation to improve efficiency and reduce costs.',
      details: {
        benefits: language === 'ar' 
          ? ['زيادة الإنتاجية', 'تقليل الأخطاء البشرية', 'تحسين رضا الموظفين'] 
          : ['Increased productivity', 'Reduced human errors', 'Improved employee satisfaction'],
        technologies: language === 'ar' 
          ? ['RPA Tools, AI/ML', 'Workflow Engines', 'API Integration'] 
          : ['RPA Tools, AI/ML', 'Workflow Engines', 'API Integration'],
        approach: language === 'ar' 
          ? 'تحديد العمليات المناسبة للأتمتة وتنفيذ حلول مخصصة' 
          : 'Identifying suitable processes for automation and implementing customized solutions'
      }
    },
    {
      title: language === 'ar' ? 'بناء النماذج الأولية' : 'Prototyping',
      description: language === 'ar' 
        ? 'إنشاء نماذج قابلة للاختبار للتقنيات الجديدة لتجربة الأفكار وتحسينها قبل التطوير الكامل.' 
        : 'Creating testable prototypes of new technologies to experiment with ideas and improve them before full development.',
      details: {
        benefits: language === 'ar' 
          ? ['تقليل مخاطر الاستثمار', 'الحصول على ملاحظات المستخدم مبكرًا', 'تسريع عملية التطوير'] 
          : ['Reduced investment risk', 'Early user feedback', 'Accelerated development process'],
        technologies: language === 'ar' 
          ? ['Figma, Adobe XD', 'Rapid Development Frameworks', 'MVP Tools'] 
          : ['Figma, Adobe XD', 'Rapid Development Frameworks', 'MVP Tools'],
        approach: language === 'ar' 
          ? 'تطوير نماذج أولية سريعة مع اختبارات تكرارية' 
          : 'Rapid prototyping with iterative testing'
      }
    },
    {
      title: language === 'ar' ? 'إنترنت الأشياء (IoT)' : 'Internet of Things (IoT)',
      description: language === 'ar' 
        ? 'ربط الأجهزة والأنظمة لجمع البيانات وتسهيل العمليات.' 
        : 'Connecting devices and systems to collect data and facilitate processes.',
      details: {
        benefits: language === 'ar' 
          ? ['أتمتة العمليات في الوقت الفعلي', 'تحليلات متقدمة', 'تحسين كفاءة الموارد'] 
          : ['Real-time process automation', 'Advanced analytics', 'Resource efficiency improvement'],
        technologies: language === 'ar' 
          ? ['Sensors, Gateways', 'Edge Computing', 'IoT Platforms'] 
          : ['Sensors, Gateways', 'Edge Computing', 'IoT Platforms'],
        approach: language === 'ar' 
          ? 'تنفيذ حلول IoT متكاملة مع تركيز على الأمان والقابلية للتوسع' 
          : 'End-to-end IoT solutions implementation with focus on security and scalability'
      }
    }
  ];

  // Define the objectives
  const objectives = [
    language === 'ar' ? 'تحسين كفاءة العمليات التشغيلية.' : 'Improve operational process efficiency.',
    language === 'ar' ? 'تعزيز تجربة العملاء من خلال تقديم خدمات مخصصة وسلسة.' : 'Enhance customer experience through personalized and seamless services.',
    language === 'ar' ? 'الاستجابة السريعة لتوقعات العملاء ومتغيرات السوق.' : 'Quickly respond to customer expectations and market variables.',
    language === 'ar' ? 'ابتكار نماذج أعمال جديدة وتحقيق ميزة تنافسية.' : 'Innovate new business models and achieve competitive advantage.'
  ];

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 digital-transformation-content">
        <div className="glass-panel rounded-xl p-8 max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white font-display mb-4">
              {language === 'ar' ? 'خدمات التحول الرقمي' : 'Digital Transformation Services'}
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              {language === 'ar' 
                ? 'تشمل خدمات التحول الرقمي مجموعة واسعة من الحلول التكنولوجية التي تهدف إلى دمج التكنولوجيا الرقمية في جميع جوانب العمل لتعزيز الكفاءة وتحسين تجربة العملاء.' 
                : 'Digital transformation services include a wide range of technological solutions aimed at integrating digital technology into all aspects of business to enhance efficiency and improve customer experience.'}
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Services Overview */}
            <div className="lg:col-span-2">
              <div className="bg-slate-800/50 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  {language === 'ar' ? 'ما هي خدمات التحول الرقمي؟' : 'What are Digital Transformation Services?'}
                </h2>
                <p className="text-gray-300 mb-4">
                  {language === 'ar' 
                    ? 'تشمل خدمات التحول الرقمي مجموعة واسعة من الحلول التكنولوجية التي تهدف إلى دمج التكنولوجيا الرقمية في جميع جوانب العمل لتعزيز الكفاءة وتحسين تجربة العملاء. تتضمن هذه الخدمات استشارات استراتيجية، تطوير البرمجيات والتطبيقات، إدارة البنية التحتية السحابية، تحليل البيانات الضخمة، والأمن السيبراني. كما تشمل خدمات أخرى مثل بناء المنصات الرقمية، وتطوير حلول التجارة الإلكترونية، وإنشاء نماذج أولية للتقنيات الناشئة.' 
                    : 'Digital transformation services encompass a wide range of technological solutions aimed at integrating digital technology into all aspects of business to enhance efficiency and improve customer experience. These services include strategic consulting, software and application development, cloud infrastructure management, big data analytics, and cybersecurity. They also include other services such as building digital platforms, developing e-commerce solutions, and creating prototypes for emerging technologies.'}
                </p>
              </div>

              {/* Objectives Section */}
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-white mb-4">
                  {language === 'ar' ? 'أهداف التحول الرقمي' : 'Digital Transformation Objectives'}
                </h2>
                <ul className="space-y-3">
                  {objectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2 mt-1">●</span>
                      <span className="text-gray-300">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Sidebar */}
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl p-6 border border-primary/30">
              <h3 className="text-xl font-bold text-white mb-4">
                {language === 'ar' ? 'هل أنت مستعد للتحول؟' : 'Ready to Transform?'}
              </h3>
              <p className="text-gray-300 mb-6">
                {language === 'ar' 
                  ? 'ابدأ رحلة التحول الرقمي الخاصة بك مع أكتيف سوفت اليوم.' 
                  : 'Start your digital transformation journey with Active Soft today.'}
              </p>
              <Link 
                to="/contact" 
                className="block w-full text-center bg-primary hover:bg-primary/80 text-white font-semibold py-3 px-4 rounded-md transition-colors duration-300"
              >
                {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
              </Link>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              {language === 'ar' ? 'أبرز خدمات التحول الرقمي' : 'Key Digital Transformation Services'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="glass-panel rounded-lg p-6 hover:bg-slate-800/50 transition-all duration-300 border border-transparent hover:border-cyan-500/30"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  {/* Detailed Information */}
                  <div className="mt-4 space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-1">
                        {language === 'ar' ? 'الفوائد:' : 'Benefits:'}
                      </h4>
                      <ul className="text-xs text-gray-300 space-y-1">
                        {service.details.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-cyan-500 mr-1">•</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-1">
                        {language === 'ar' ? 'التقنيات:' : 'Technologies:'}
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {service.details.technologies.map((tech, i) => (
                          <span key={i} className="text-xs bg-cyan-900/30 text-cyan-300 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-1">
                        {language === 'ar' ? 'النهج:' : 'Approach:'}
                      </h4>
                      <p className="text-xs text-gray-300">
                        {service.details.approach}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-slate-800/50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              {language === 'ar' ? 'لماذا التحول الرقمي ضروري؟' : 'Why is Digital Transformation Essential?'}
            </h2>
            <p className="text-gray-300">
              {language === 'ar' 
                ? 'في العصر الرقمي الحالي، أصبح التحول الرقمي ضرورة حتمية للشركات التي تسعى للبقاء والنمو. يمكّن التحول الرقمي الشركات من التكيف مع التغيرات السريعة في السوق، وتحسين الكفاءة التشغيلية، وتقديم تجارب استثنائية للعملاء، والابتكار في نماذج الأعمال. مع تطور التكنولوجيا باستمرار، فإن الشركات التي تستثمر في التحول الرقمي تكون في موقع أفضل للنجاح في المستقبل.' 
                : 'In today\'s digital age, digital transformation has become a necessity for companies striving to survive and grow. Digital transformation enables businesses to adapt to rapid market changes, improve operational efficiency, deliver exceptional customer experiences, and innovate in business models. With technology continuously evolving, companies that invest in digital transformation are better positioned for future success.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalTransformationPage;