import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

const DigitalTransformationPage: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const { t } = useTranslation();

  // Define the services data
  const services = [
    {
      title: language === 'ar' ? 'الاستشارات الاستراتيجية' : 'Strategic Consulting',
      description: language === 'ar' 
        ? 'مساعدة الشركات على وضع استراتيجيات التحول الرقمي وتحديد الأهداف والمجالات التي يمكن رقمنتها.' 
        : 'Helping businesses develop digital transformation strategies and identify goals and areas that can be digitized.'
    },
    {
      title: language === 'ar' ? 'تطوير البرمجيات والتطبيقات' : 'Software & Application Development',
      description: language === 'ar' 
        ? 'بناء وتطوير تطبيقات الويب والجوال والمنصات الرقمية المخصصة.' 
        : 'Building and developing custom web, mobile applications, and digital platforms.'
    },
    {
      title: language === 'ar' ? 'إدارة البنية التحتية السحابية' : 'Cloud Infrastructure Management',
      description: language === 'ar' 
        ? 'بناء وتشغيل البنية التحتية السحابية لتمكين العمليات الرقمية.' 
        : 'Building and operating cloud infrastructure to enable digital operations.'
    },
    {
      title: language === 'ar' ? 'تحليل البيانات الضخمة' : 'Big Data Analytics',
      description: language === 'ar' 
        ? 'استخدام البيانات لاتخاذ قرارات مستنيرة، والتنبؤ بالاتجاهات، وتقديم توصيات مخصصة.' 
        : 'Using data to make informed decisions, predict trends, and provide personalized recommendations.'
    },
    {
      title: language === 'ar' ? 'الأمن السيبراني' : 'Cybersecurity',
      description: language === 'ar' 
        ? 'حماية الأنظمة والبيانات من التهديدات الإلكترونية.' 
        : 'Protecting systems and data from electronic threats.'
    },
    {
      title: language === 'ar' ? 'حلول التجارة الإلكترونية' : 'E-commerce Solutions',
      description: language === 'ar' 
        ? 'تصميم وتطوير منصات التجارة الإلكترونية، بما في ذلك تكامل أنظمة الدفع والشحن.' 
        : 'Designing and developing e-commerce platforms, including payment and shipping system integration.'
    },
    {
      title: language === 'ar' ? 'أتمتة العمليات' : 'Process Automation',
      description: language === 'ar' 
        ? 'تبسيط المهام الروتينية والمتكررة من خلال الأتمتة لتحسين الكفاءة وخفض التكاليف.' 
        : 'Simplifying routine and repetitive tasks through automation to improve efficiency and reduce costs.'
    },
    {
      title: language === 'ar' ? 'بناء النماذج الأولية' : 'Prototyping',
      description: language === 'ar' 
        ? 'إنشاء نماذج قابلة للاختبار للتقنيات الجديدة لتجربة الأفكار وتحسينها قبل التطوير الكامل.' 
        : 'Creating testable prototypes of new technologies to experiment with ideas and improve them before full development.'
    },
    {
      title: language === 'ar' ? 'إنترنت الأشياء (IoT)' : 'Internet of Things (IoT)',
      description: language === 'ar' 
        ? 'ربط الأجهزة والأنظمة لجمع البيانات وتسهيل العمليات.' 
        : 'Connecting devices and systems to collect data and facilitate processes.'
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
                  className="glass-panel rounded-lg p-6 hover:bg-slate-800/50 transition-all duration-300 border border-transparent hover:border-primary/30"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
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