import React, { useEffect, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const title = t('seo.contact.title', 'Contact Us | Active Soft');
    const description = t('seo.contact.description', 'Get in touch with Active Soft for a free consultation on your next project.');
    const keywords = t('seo.contact.keywords', 'Contact Active Soft, Request a Demo, Free Consultation, Technology Solutions, Cairo Egypt');

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here (e.g., send to an API).
    alert('Thank you for your message! We will get back to you shortly.');
  };

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
  
  const faqData = t('contact.faq', { title: '', subtitle: '', questions: [] });
  const inputClasses = "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:ring-primary focus:border-primary transition-colors text-white placeholder-gray-400";

  return (
    <div className="bg-transparent py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white font-display animate-on-scroll">{t('contact.title')}</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto animate-on-scroll" style={{ transitionDelay: '100ms' }}>{t('contact.subtitle')}</p>
        </div>
        
        {/* FAQ Section */}
        {faqData && faqData.questions.length > 0 && (
          <section className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-white font-display animate-on-scroll" style={{ transitionDelay: '200ms' }}>{faqData.title}</h2>
               <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto animate-on-scroll" style={{ transitionDelay: '300ms' }}>{faqData.subtitle}</p>
            </div>
            <div className="space-y-4 animate-on-scroll" style={{ transitionDelay: '400ms' }}>
              {faqData.questions.map((item: { q: string, a: string }, index: number) => (
                <div key={index} className="glass-panel rounded-lg overflow-hidden border border-transparent transition-colors duration-300 hover:border-primary/50">
                  <button
                    onClick={() => handleFaqToggle(index)}
                    className="w-full flex justify-between items-center text-start p-6"
                    aria-expanded={openFaqIndex === index}
                  >
                    <span className="font-semibold text-white">{item.q}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${openFaqIndex === index ? 'rotate-180' : ''}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{ maxHeight: openFaqIndex === index ? '200px' : '0' }}
                  >
                    <div className="px-6 pb-6 pt-0 text-gray-300">
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
        
        <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-xl animate-on-scroll" style={{ transitionDelay: '200ms' }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">{t('contact.nameLabel')}</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder={t('contact.namePlaceholder')} 
                required 
                className={inputClasses}
              />
            </div>
             <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">{t('contact.emailLabel')}</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder={t('contact.emailPlaceholder')} 
                required 
                className={inputClasses}
              />
            </div>
             <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">{t('contact.subjectLabel')}</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                placeholder={t('contact.subjectPlaceholder')} 
                required 
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">{t('contact.messageLabel')}</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5} 
                placeholder={t('contact.messagePlaceholder')} 
                required 
                className={inputClasses}
              ></textarea>
            </div>
            <div className="text-center">
              <button 
                type="submit" 
                className="px-8 py-3 bg-primary text-white font-bold rounded-md shadow-lg hover:bg-secondary transition-colors w-full sm:w-auto"
              >
                {t('contact.submitButton')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;