import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { MapPin, Mail, Phone, Cpu, Sparkles } from 'lucide-react';

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
    <footer className="bg-slate-950/80 border-t border-white/5 relative overflow-hidden mt-20 pt-16 pb-8">
      {/* Decorative cyber grid overlays */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20h40M20 0v40' stroke='%2306B6D4' stroke-width='0.5'/%3E%3C/svg%3E")`,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Decorative neon ambient overflow blur */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* About Section */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white font-display tracking-tight group">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Cpu className="w-4.5 h-4.5 text-primary" />
              </div>
              <span>
                Active<span className="text-primary font-display font-medium">Soft</span>
              </span>
            </Link>
            
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-sm">
              {t('footer.aboutText')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5 font-display flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>{t('footer.quickLinks')}</span>
            </h4>
            
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {navLinks.map(link => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-gray-400 hover:text-primary transition-colors text-xs"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
             <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5 font-display flex items-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
               <span>{t('footer.contactUs')}</span>
             </h4>
             
             <div className="space-y-3.5 text-xs text-gray-400">
                <div className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{t('footer.address')}</span>
                </div>
                
                <div className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  <a href={`mailto:${t('footer.email')}`} className="hover:text-primary transition-colors">{t('footer.email')}</a>
                </div>
                
                <div className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <a href="tel:+201225077433" className="hover:text-primary transition-colors">{t('footer.supportPhone')}</a>
                </div>
                
                <div className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <a href="tel:+201006467081" className="hover:text-primary transition-colors">{t('footer.salesPhone')}</a>
                </div>
             </div>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5 font-display">
              {t('footer.followUs')}
            </h4>
            
            <div className="flex gap-3">
              <a 
                href="#" 
                className="p-2.5 rounded-xl bg-slate-900 border border-white/5 hover:border-primary/30 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-105" 
                aria-label="Twitter"
              >
                <svg className="h-4.5 w-4.5 text-gray-400 hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
              
              <a 
                href="https://web.facebook.com/Active.soft.erp" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-xl bg-slate-900 border border-white/5 hover:border-primary/30 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-105" 
                aria-label="Facebook"
              >
                <svg className="h-4.5 w-4.5 text-gray-400 hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" /></svg>
              </a>
              
              <a 
                href="#" 
                className="p-2.5 rounded-xl bg-slate-900 border border-white/5 hover:border-primary/30 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-105" 
                aria-label="LinkedIn"
              >
                <svg className="h-4.5 w-4.5 text-gray-400 hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Rights reserved */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} ActiveSoft. {t('footer.rightsReserved')}</p>
          <div className="flex gap-4">
            <Link to="/sitemap" className="hover:text-primary transition-colors">
              {language === 'ar' ? 'خريطة الموقع' : 'Sitemap'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
export { Footer };