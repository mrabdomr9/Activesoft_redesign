import React, { useContext, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 text-sm font-semibold bg-primary/80 text-white rounded-md hover:bg-primary transition-colors"
    >
      {language === 'en' ? 'العربية' : 'English'}
    </button>
  );
};

const Header: React.FC = () => {
  const { t, language } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navLinks = [
    { to: '/', text: t('nav.home') },
    {
      text: t('nav.solutions'),
      subLinks: [
        { to: '/services', text: t('nav.services') },
        { to: '/industries', text: t('nav.industries') },
        { to: '/prices', text: t('nav.pricing') },
        { to: '/digital-transformation', text: t('nav.digitalTransformation') },
      ],
    },
    {
      text: t('nav.ourWork'),
      subLinks: [
        { to: '/case-studies', text: t('nav.caseStudies') },
        { to: '/portfolio', text: t('nav.portfolio') },
        { to: '/clients', text: t('nav.clients') },
      ],
    },
    {
      text: t('nav.company'),
      subLinks: [
        { to: '/about', text: t('nav.about') },
        { to: '/brochures', text: t('nav.brochures') },
      ],
    },
    { to: '/contact', text: t('nav.contact') },
  ];

  const linkClasses = "px-3 py-2 text-base text-gray-300 hover:text-white transition-colors rounded-md flex items-center gap-1";
  const activeLinkClasses = "text-white font-bold bg-white/10";
  
  const isSubLinkActive = (subLinks?: { to: string }[]) => {
    return subLinks?.some(sub => location.pathname === sub.to);
  };
  
  const toggleMobileDropdown = (text: string) => {
    setOpenDropdown(prev => (prev === text ? null : text));
  };

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }

  return (
    <header className="bg-gradient-to-r from-slate-950/80 via-slate-900/80 to-slate-950/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 border-b border-primary/20">
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
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-white font-display">
              Active<span className="text-secondary">Soft</span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 rtl:space-x-reverse">
            {navLinks.map((link) =>
              link.subLinks ? (
                <div key={link.text} className="relative group">
                  <button className={`${linkClasses} ${isSubLinkActive(link.subLinks) ? activeLinkClasses : ''}`}>
                    <span>{link.text}</span>
                    <svg className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  </button>
                  <div className="absolute top-full start-0 mt-2 w-48 p-2 glass-panel rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-10">
                    <div className="flex flex-col space-y-1">
                      {link.subLinks.map(subLink => (
                         <NavLink
                          key={subLink.to}
                          to={subLink.to}
                          className={({ isActive }) => `block px-4 py-2 text-sm text-white hover:bg-primary/20 hover:text-white rounded-md transition-colors ${isActive ? 'bg-primary/30 font-semibold' : ''}`}
                        >
                          {subLink.text}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to!}
                  className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}
                >
                  {link.text}
                </NavLink>
              )
            )}
          </nav>
          
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <LanguageSwitcher />
             <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none ms-2 rtl:ms-0 rtl:me-2"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isMobileMenuOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-panel rounded-none border-x-0 border-t-0" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) =>
              link.subLinks ? (
                <div key={link.text} className="w-full text-center">
                  <button 
                    onClick={() => toggleMobileDropdown(link.text)}
                    className={`w-full ${linkClasses} justify-center ${isSubLinkActive(link.subLinks) ? activeLinkClasses : ''}`}
                    aria-expanded={openDropdown === link.text}
                  >
                    <span>{link.text}</span>
                     <svg className={`h-5 w-5 transition-transform duration-300 ${openDropdown === link.text ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  </button>
                  {openDropdown === link.text && (
                    <div className="py-2 space-y-1 bg-black/20 rounded-b-md">
                      {link.subLinks.map(subLink => (
                         <NavLink
                          key={subLink.to}
                          to={subLink.to}
                          onClick={closeMenus}
                          className={({ isActive }) => `block w-full text-center px-4 py-2 text-sm text-white hover:bg-primary/20 hover:text-white transition-colors rounded-md ${isActive ? 'bg-primary/30 font-semibold' : ''}`}
                        >
                          {subLink.text}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to!}
                  onClick={closeMenus}
                  className={({ isActive }) => `block w-full text-center ${linkClasses} ${isActive ? activeLinkClasses : ''}`}
                >
                  {link.text}
                </NavLink>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;