import React, { useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

const BrochuresPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const title = t('seo.brochures.title', 'Download Our Brochures | Active Soft');
    const description = t('seo.brochures.description', 'Get detailed information about our services and solutions by downloading our official company brochures.');
    const keywords = t('seo.brochures.keywords', 'Active Soft Brochure, Company Profile, Service Catalog, Oracle ERP Details, Download');

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
    
    // Create dummy brochure content
    const brochureContent = `
# Active Soft Company Profile

## About Us
Active Soft is a leading provider of technology solutions, specializing in Oracle ERP systems and custom software development to empower businesses.

## Our Services
- Oracle ERP Solutions
- Managed IT Support
- Custom App Development
- Enterprise Security

Contact us at info@activesoft.net for more information.
`;
    // Create a Blob from the content
    const blob = new Blob([brochureContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    // Create a link to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ActiveSoft-Brochure.txt';
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    alert('Your download will begin shortly!');
  };

  const inputClasses = "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:ring-primary focus:border-primary transition-colors text-white placeholder-gray-400";

  return (
    <div className="bg-transparent py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white font-display animate-on-scroll">{t('brochures.title')}</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto animate-on-scroll" style={{ transitionDelay: '100ms' }}>
            {t('brochures.subtitle')}
          </p>
        </div>
        
        <div className="max-w-md mx-auto glass-panel p-8 md:p-12 rounded-xl animate-on-scroll" style={{ transitionDelay: '200ms' }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">{t('brochures.namePlaceholder')}</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder={t('brochures.namePlaceholder')} 
                required 
                className={inputClasses}
              />
            </div>
             <div>
              <label htmlFor="email" className="sr-only">{t('brochures.emailPlaceholder')}</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder={t('brochures.emailPlaceholder')} 
                required 
                className={inputClasses}
              />
            </div>
            <div className="text-center pt-2">
              <button 
                type="submit" 
                className="w-full px-8 py-3 bg-primary text-white font-bold rounded-md shadow-lg hover:bg-secondary transition-colors"
              >
                {t('brochures.cta')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BrochuresPage;
