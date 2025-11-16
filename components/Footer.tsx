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
    <footer className="bg-slate-900/50 border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* About Section */}
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-bold text-white font-display">
              Active<span className="text-secondary">Soft</span>
            </h3>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              {t('footer.aboutText')}
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white tracking-wider uppercase">{t('footer.quickLinks')}</h4>
            <ul className="mt-4 space-y-3">
              {navLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-400 hover:text-white transition-colors text-sm">{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
             <h4 className="font-semibold text-white tracking-wider uppercase">{t('footer.contactUs')}</h4>
             <div className="mt-4 space-y-3 text-sm text-gray-400">
                <p>{t('footer.address')}</p>
                <p>
                  <a href={`mailto:${t('footer.email')}`} className="hover:text-white transition-colors">{t('footer.email')}</a>
                </p>
                <p>
                  <a href="tel:+201225077433" className="hover:text-white transition-colors">{t('footer.supportPhone')}</a>
                </p>
                 <p>
                  <a href="tel:+201006467081" className="hover:text-white transition-colors">{t('footer.salesPhone')}</a>
                </p>
             </div>
          </div>
          
          {/* Social Links */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white tracking-wider uppercase">{t('footer.followUs')}</h4>
            <div className="mt-4 flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:scale-125" aria-label="Twitter">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
               <a href="https://web.facebook.com/Active.soft.erp" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:scale-125" aria-label="Facebook">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" /></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:scale-125" aria-label="LinkedIn">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ActiveSoft. {t('footer.rightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;