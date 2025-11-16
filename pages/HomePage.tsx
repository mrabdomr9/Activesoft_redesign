import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const title = t('seo.home.title', 'Active Soft | Enterprise Solutions & Custom Software');
    const description = t('seo.home.description', 'Active Soft delivers expert Oracle ERP solutions, managed IT services, and custom application development to drive business growth and efficiency.');
    const keywords = t('seo.home.keywords', 'Active Soft, Oracle ERP, Managed IT, Custom Software, Business Solutions');

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

  const features = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" /></svg>,
      title: t('services.erpTitle'),
      description: t('home.features.erpDesc', 'Streamline your operations with our expert Oracle ERP implementation and support.'),
      link: '/services'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 18.75V16.5M16.5 3.75V16.5M12 12.75h4.5m-4.5 3H12M10.5 21l-1.5-1.5L7.5 21l-1.5-1.5L4.5 21l-1.5-1.5L1.5 21M21 3.75v.75m0 0h-4.5m4.5 0l-1.5 1.5M3.75 3.75h.75m0 0V3m0 0L3 3.75M3.75 21v-4.5m0 4.5h.75m0 0l-1.5-1.5M16.5 3.75l-1.5 1.5M21 3.75L19.5 5.25" /></svg>,
      title: t('services.itSupportTitle'),
      description: t('home.features.itSupportDesc', 'Reliable, proactive managed IT services to keep your systems running smoothly 24/7.'),
      link: '/services'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-1.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg>,
      title: t('services.customAppsTitle'),
      description: t('home.features.customAppsDesc', 'Bespoke desktop and web applications tailored to your unique business needs and workflows.'),
      link: '/services'
    }
  ];
  
  const testimonials = t('home.testimonials', { title: 'What Our Clients Say', subtitle: 'Real feedback from businesses we\'ve empowered.', quotes: [] });
  const totalTestimonials = testimonials && testimonials.quotes ? testimonials.quotes.length : 0;
  const { language } = useTranslation();

  // Reset current testimonial index when testimonials or language change
  useEffect(() => {
    setCurrentTestimonial(0);
  }, [testimonials, language]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (testimonials && testimonials.quotes && testimonials.quotes.length > 1) {
      timer = setTimeout(() => {
        if (language === 'ar') {
          setCurrentTestimonial((prevIndex) => (prevIndex - 1 + testimonials.quotes.length) % testimonials.quotes.length);
        } else {
          setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.quotes.length);
        }
      }, 7000); // Change testimonial every 7 seconds
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [currentTestimonial, testimonials, language]);
    
  const nextTestimonial = () => {
    if (language === 'ar') {
      setCurrentTestimonial((prevIndex) => (prevIndex - 1 + testimonials.quotes.length) % testimonials.quotes.length);
    } else {
      setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.quotes.length);
    }
  };

  const prevTestimonial = () => {
    if (language === 'ar') {
      setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.quotes.length);
    } else {
      setCurrentTestimonial((prevIndex) => (prevIndex - 1 + testimonials.quotes.length) % testimonials.quotes.length);
    }
  };

  const industriesData = [
    { key: 'manufacturing', image: "https://images.unsplash.com/photo-1610891015188-5369212db097?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1529" },
    { key: 'healthcare', image: "https://images.unsplash.com/photo-1576091160550-2173dba99ef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" },
    { key: 'financial', image: "https://images.unsplash.com/photo-1758691736545-5c33b6255dca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332" },
  ];

  return (
    <div className="bg-transparent">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden -mt-20 pt-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://picsum.photos/seed/tech-hero/1920/1080')" }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10" style={{ maskImage: 'radial-gradient(ellipse at center, white 20%, transparent 70%)' }}></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-display leading-tight animate-on-scroll">
            {t('home.hero.title', 'Empowering Your Business with Innovative Technology')}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-on-scroll" style={{ transitionDelay: '150ms' }}>
            {t('home.hero.subtitle', 'We deliver cutting-edge ERP solutions, managed IT services, and custom software to help you achieve your goals.')}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-on-scroll" style={{ transitionDelay: '300ms' }}>
            <Link to="/services" className="px-8 py-3 bg-primary text-white font-bold rounded-md shadow-lg hover:bg-secondary transition-colors duration-300 transform hover:scale-105">
              {t('home.hero.ctaPrimary', 'Explore Our Services')}
            </Link>
            <Link to="/contact" className="px-8 py-3 bg-white/10 text-white font-bold rounded-md hover:bg-white/20 transition-colors duration-300 transform hover:scale-105">
              {t('home.hero.ctaSecondary', 'Get in Touch')}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white font-display animate-on-scroll">{t('home.services.title', 'Our Core Solutions')}</h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto animate-on-scroll" style={{transitionDelay: '100ms'}}>{t('home.services.subtitle', 'Providing comprehensive services to meet the demands of modern business.')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-panel p-8 rounded-xl hover:border-primary hover:-translate-y-2 transition-all duration-300 h-full flex flex-col animate-on-scroll" style={{ transitionDelay: `${(index + 2) * 100}ms` }}>
                <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-primary/80 text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-display">{feature.title}</h3>
                <p className="text-gray-300 flex-grow">{feature.description}</p>
                 <div className="mt-6">
                    <Link to={feature.link} className="font-semibold text-primary hover:text-secondary transition-colors">
                        {t('home.learnMore', 'Learn More')} &rarr;
                    </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-20 bg-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white font-display animate-on-scroll">{t('home.impact.title', 'Our Impact in Numbers')}</h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto animate-on-scroll" style={{ transitionDelay: '100ms' }}>{t('home.impact.subtitle', 'We are proud of our achievements and the value we deliver to our clients.')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-xl text-center animate-on-scroll" style={{ transitionDelay: '200ms' }}>
              <p className="text-5xl font-bold text-accent font-display">{t('home.impact.experienceVal', '15+')}</p>
              <p className="mt-2 text-lg text-gray-300">{t('home.impact.experience', 'Years of Experience')}</p>
            </div>
            <div className="glass-panel p-8 rounded-xl text-center animate-on-scroll" style={{ transitionDelay: '300ms' }}>
              <p className="text-5xl font-bold text-accent font-display">{t('home.impact.applicationsVal', '500+')}</p>
              <p className="mt-2 text-lg text-gray-300">{t('home.impact.applications', 'Applications Delivered')}</p>
            </div>
            <div className="glass-panel p-8 rounded-xl text-center animate-on-scroll" style={{ transitionDelay: '400ms' }}>
              <p className="text-5xl font-bold text-accent font-display">{t('home.impact.satisfactionVal', '98%')}</p>
              <p className="mt-2 text-lg text-gray-300">{t('home.impact.satisfaction', 'Client Satisfaction')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Stages Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white font-display animate-on-scroll">{t('workStages.title', 'Work Stages')}</h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto animate-on-scroll" style={{ transitionDelay: '100ms' }}>
              {t('workStages.slogan', 'Smart planning is one of the most important factors of distinction and success')}
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="glass-panel p-8 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[0, 1, 2, 3].map((index) => (
                  <div key={index} className="flex animate-on-scroll" style={{ transitionDelay: `${(index + 1) * 100}ms` }}>
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary/80 text-white mr-4">
                      {index === 0 && (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2" />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c-.94 1.543-.826 3.31-2.37 2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                      {index === 3 && (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{t(`workStages.stages.${index}`, `Work stage ${index + 1}`)}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Oracle ERP Solutions Card */}
            <div className="glass-panel rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="bg-primary p-6">
                <div className="flex items-center">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">{t('services.erpTitle', 'Oracle ERP Solutions')}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">{t('services.erpDesc', 'Full-cycle Oracle ERP services including implementation, customization, migration, and support to optimize your business processes.')}</p>
                <Link to="/services#erp" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/80 transition-colors">
                  {t('home.learnMore', 'Learn More')}
                  <svg className="ml-2 -mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Costing Module Card */}
            <div className="glass-panel rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="bg-primary p-6">
                <div className="flex items-center">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">{t('services.costingModule.title', 'Costing Module')}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">{t('services.costingModule.subtitle', 'Comprehensive production cost management system with actual costing methodology')}</p>
                <Link to="/services#costing" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/80 transition-colors">
                  {t('home.learnMore', 'Learn More')}
                  <svg className="ml-2 -mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Inventory Management Card */}
            <div className="glass-panel rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="bg-primary p-6">
                <div className="flex items-center">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">{t('services.inventoryModule.title', 'Inventory Management')}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">{t('services.inventoryModule.subtitle', 'Comprehensive inventory management system with advanced tracking and valuation capabilities')}</p>
                <Link to="/services#inventory" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/80 transition-colors">
                  {t('home.learnMore', 'Learn More')}
                  <svg className="ml-2 -mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Export Management System Card */}
            <div className="glass-panel rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="bg-primary p-6">
                <div className="flex items-center">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">{t('exportModule.title', 'Export Management System')}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">{t('exportModule.subtitle', 'Comprehensive export management system with detailed shipment tracking and financial analysis')}</p>
                <Link to="/services#export" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/80 transition-colors">
                  {t('home.learnMore', 'Learn More')}
                  <svg className="ml-2 -mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white font-display animate-on-scroll">{t('industries.title', 'Tailored Solutions for Your Industry')}</h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto animate-on-scroll" style={{ transitionDelay: '100ms' }}>
              {t('industries.subtitle', 'We understand the unique challenges of your sector and deliver targeted solutions.')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesData.map((industry) => (
              <div key={industry.key} className="glass-panel rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img src={industry.image} alt={t(`industries.${industry.key}.name`)} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3">{t(`industries.${industry.key}.name`)}</h3>
                  <h4 className="text-md font-semibold text-primary mb-2">{t('industries.challengesLabel', 'Challenges')}</h4>
                  <p className="text-gray-300 text-sm mb-3 flex-grow">{t(`industries.${industry.key}.challenges`)}</p>
                  <h4 className="text-md font-semibold text-primary mb-2">{t('industries.solutionLabel', 'Our Solution')}</h4>
                  <p className="text-gray-300 text-sm mb-4 flex-grow">{t(`industries.${industry.key}.solution`)}</p>
                  <Link to="/industries" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/80 transition-colors mt-auto">
                    {t('home.learnMore', 'Learn More')}
                    <svg className="ml-2 -mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Logo Slider */}
      <section className="py-12 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white font-display animate-on-scroll">
              {t('clients.title', language === 'ar' ? 'محبتكم تسامت كالنجوم فى سماء قلوبنا' : 'Your Love Soared Like Stars in the Sky of Our Hearts')}
            </h2>
            <p className="mt-2 text-lg text-gray-300 max-w-2xl mx-auto animate-on-scroll" style={{ transitionDelay: '100ms' }}>
              {t('clients.subtitle', language === 'ar' ? 'عملاء الشركة' : 'Company Clients')}
            </p>
          </div>
          
          {/* Logo Slider */}
          <div className="glass-panel p-8 rounded-xl overflow-hidden">
            <div className="overflow-hidden">
              <div className={`flex animate-loop-scroll ${language === 'ar' ? 'rtl' : ''}`}>
                {language === 'ar' ? 
                  [...t('clients.clientList', [])].reverse().map((client: { name: string; logo: string }, index: number) => (
                    <div key={index} className="flex-shrink-0 mx-8 flex items-center justify-center" style={{ minWidth: '150px' }}>
                      <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  )) : 
                  t('clients.clientList', []).map((client: { name: string; logo: string }, index: number) => (
                    <div key={index} className="flex-shrink-0 mx-8 flex items-center justify-center" style={{ minWidth: '150px' }}>
                      <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  ))
                }
                {/* Duplicate the logos for seamless looping */}
                {language === 'ar' ? 
                  [...t('clients.clientList', [])].reverse().map((client: { name: string; logo: string }, index: number) => (
                    <div key={`duplicate-${index}`} className="flex-shrink-0 mx-8 flex items-center justify-center" style={{ minWidth: '150px' }}>
                      <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  )) : 
                  t('clients.clientList', []).map((client: { name: string; logo: string }, index: number) => (
                    <div key={`duplicate-${index}`} className="flex-shrink-0 mx-8 flex items-center justify-center" style={{ minWidth: '150px' }}>
                      <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white font-display animate-on-scroll">{testimonials.title}</h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto animate-on-scroll" style={{ transitionDelay: '100ms' }}>{testimonials.subtitle}</p>
          </div>
          
          <div className="relative max-w-3xl mx-auto animate-on-scroll" style={{ transitionDelay: '200ms' }}>
            <div className="overflow-hidden w-full">
              {testimonials && testimonials.quotes && testimonials.quotes.length > 0 && (
              <div 
                key={`testimonials-${testimonials.quotes.length}`}
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: language === 'ar' ? `translateX(${currentTestimonial * (100 / testimonials.quotes.length)}%)` : `translateX(-${currentTestimonial * (100 / testimonials.quotes.length)}%)`, width: `${testimonials.quotes.length * 100}%` }}
              >
                {testimonials.quotes.map((item: { quote: string; name: string; company: string; }, index: number) => (
                  <div key={index} className="w-full flex-shrink-0 px-4" style={{ width: `${100 / testimonials.quotes.length}%` }}>
                    <div className="glass-panel p-8 rounded-xl text-center h-full">
                      <svg className="h-10 w-10 text-primary mx-auto mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.333 22.667h4L16 16V9.333H9.333v13.334zM22.667 22.667h4L29.333 16V9.333h-6.666v13.334z"></path>
                      </svg>
                      <blockquote className="text-lg text-gray-200 leading-relaxed italic">
                        "{item.quote}"
                      </blockquote>
                      <div className="mt-6">
                        <p className="font-bold text-white text-lg">{item.name}</p>
                        <p className="text-secondary text-sm">{item.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              )}
            </div>
            {testimonials && testimonials.quotes && testimonials.quotes.length > 1 && (
              <>
                 <button onClick={prevTestimonial} className="absolute top-1/2 -translate-y-1/2 start-0 transform -translate-x-4 bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors z-10 rtl:rotate-180" aria-label="Previous testimonial">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                 </button>
                 <button onClick={nextTestimonial} className="absolute top-1/2 -translate-y-1/2 end-0 transform translate-x-4 bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors z-10 rtl:rotate-180" aria-label="Next testimonial">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                 </button>
              </>
            )}
          </div>
           {testimonials && testimonials.quotes && testimonials.quotes.length > 1 && (
              <div className="flex justify-center mt-8 space-x-2 rtl:space-x-reverse">
                  {testimonials.quotes.map((_, index) => (
                      <button
                          key={index}
                          onClick={() => setCurrentTestimonial(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${currentTestimonial === index ? 'bg-primary' : 'bg-white/20 hover:bg-white/40'}`}
                          aria-label={`Go to testimonial ${index + 1}`}
                      />
                  ))}
              </div>
            )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-panel p-12 rounded-xl text-center animate-on-scroll bg-gradient-to-br from-primary/20 to-transparent">
               <h2 className="text-3xl font-bold text-white font-display">{t('home.cta.title', "Ready to Transform Your Business?")}</h2>
               <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">{t('home.cta.subtitle', "Let's discuss how our solutions can help you achieve your strategic objectives. Get a free consultation today.")}</p>
               <div className="mt-8">
                  <Link to="/contact" className="px-8 py-3 bg-primary text-white font-bold rounded-md shadow-lg hover:bg-secondary transition-colors duration-300 transform hover:scale-105">
                     {t('home.cta.button', 'Request a Consultation')}
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default HomePage;