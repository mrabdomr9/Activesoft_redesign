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
  
  const testimonials = t('home.testimonials', { title: '', subtitle: '', quotes: [] });
  const totalTestimonials = testimonials.quotes.length;

  useEffect(() => {
    if (totalTestimonials > 1) {
      const timer = setTimeout(() => {
        setCurrentTestimonial((prevIndex) => (prevIndex + 1) % totalTestimonials);
      }, 7000); // Change testimonial every 7 seconds
      return () => clearTimeout(timer);
    }
  }, [currentTestimonial, totalTestimonials]);
    
  const nextTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex + 1) % totalTestimonials);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex - 1 + totalTestimonials) % totalTestimonials);
  };


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

      {/* Testimonials Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white font-display animate-on-scroll">{testimonials.title}</h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto animate-on-scroll" style={{ transitionDelay: '100ms' }}>{testimonials.subtitle}</p>
          </div>
          
          <div className="relative max-w-3xl mx-auto animate-on-scroll" style={{ transitionDelay: '200ms' }}>
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out rtl:space-x-reverse" 
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.quotes.map((item: { quote: string; name: string; company: string; }, index: number) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
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
            </div>
            {totalTestimonials > 1 && (
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
           {totalTestimonials > 1 && (
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