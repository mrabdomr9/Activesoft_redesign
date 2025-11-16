import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

const Footer: React.FC = () => {
  const { t, language } = useTranslation();

  const navLinks = [
    { to: '/about', text: t('nav.about') },
    { to: '/services', text: t('nav.services') },
    { to: '/prices', text: t('nav.pricing') },
    { to: '/portfolio', text: t('nav.portfolio') },
    { to: '/clients', text: t('nav.clients') },
    { to: '/brochures', text: t('nav.brochures') },
    { to: '/contact', text: t('nav.contact') },
    { to: '/sitemap', text: language === 'ar' ? 'خريطة الموقع' : 'Site Map' },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 border-t border-white/10 mt-20 digital-transformation-bg relative">
      {/* Digital Transformation Background Elements */}
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* About Section */}
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-bold text-white font-display mb-4">
              Active<span className="text-secondary">Soft</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('footer.aboutText')}
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold text-white font-display mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-400 hover:text-white transition-colors text-sm hover:underline">{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
             <h4 className="text-lg font-bold text-white font-display mb-4">{t('footer.contactUs')}</h4>
             <div className="space-y-3 text-sm text-gray-300">
                <p className="flex items-start">
                  <svg className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {t('footer.address')}
                </p>
                <p className="flex items-center">
                  <svg className="h-5 w-5 text-secondary mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href={`mailto:${t('footer.email')}`} className="hover:text-white transition-colors hover:underline">{t('footer.email')}</a>
                </p>
                <p className="flex items-center">
                  <svg className="h-5 w-5 text-secondary mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a href="tel:+201225077433" className="hover:text-white transition-colors hover:underline">{t('footer.supportPhone')}</a>
                </p>
                <p className="flex items-center">
                  <svg className="h-5 w-5 text-secondary mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a href="tel:+201006467081" className="hover:text-white transition-colors hover:underline">{t('footer.salesPhone')}</a>
                </p>
             </div>
          </div>
          
          {/* Social Links */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold text-white font-display mb-4">{t('footer.followUs')}</h4>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:scale-110" aria-label="Twitter">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
               <a href="https://web.facebook.com/Active.soft.erp" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:scale-110" aria-label="Facebook">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" /></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:scale-110" aria-label="LinkedIn">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ActiveSoft. {t('footer.rightsReserved')}</p>
        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;