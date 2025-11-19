import React, { useEffect, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { supabase } from '../supabaseClient';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([data]);

      if (error) throw error;

      setSubmitStatus('success');
      form.reset();

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');

      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqData = t('contact.faq', { title: '', subtitle: '', questions: [] });
  const inputClasses = "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:ring-primary focus:border-primary transition-colors text-white placeholder-gray-400";

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
        <div className="py-20">
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
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="bg-green-500/10 border border-green-500/50 text-green-400 px-4 py-3 rounded-md">
                    ✓ {t('contact.successMessage', 'Thank you for your message! We will get back to you shortly.')}
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-md">
                    ✗ {t('contact.errorMessage', 'Something went wrong. Please try again.')}
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">{t('contact.nameLabel')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={t('contact.namePlaceholder')}
                    required
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
                    className={inputClasses}
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-primary text-white font-bold rounded-md shadow-lg hover:bg-secondary transition-colors w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? t('contact.submittingButton', 'Sending...') : t('contact.submitButton')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;