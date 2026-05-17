import React, { useContext, useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { Languages, Menu, X, ChevronDown, Cpu, Sparkles } from 'lucide-react';

// Language switcher component
const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold bg-primary/10 border border-primary/30 text-primary rounded-xl hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 shadow-lg shadow-primary/5"
    >
      <Languages className="w-3.5 h-3.5" />
      <span>{language === 'en' ? 'العربية' : 'English'}</span>
    </button>
  );
};

// Desktop dropdown menu component
const DesktopDropdown: React.FC<{
  link: { text: string; subLinks: { to: string; text: string }[] };
  linkClasses: string;
  activeLinkClasses: string;
  isSubLinkActive: (subLinks?: { to: string }[]) => boolean;
  closeMenus: () => void;
  openDropdown: string | null;
  toggleDesktopDropdown: (text: string) => void;
  language: string;
}> = ({ link, linkClasses, activeLinkClasses, isSubLinkActive, closeMenus, openDropdown, toggleDesktopDropdown, language }) => {
  return (
    <div className="relative group dropdown-container">
      <button
        onClick={() => toggleDesktopDropdown(link.text)}
        className={`${linkClasses} ${isSubLinkActive(link.subLinks) ? activeLinkClasses : ''}`}
        aria-expanded={openDropdown === link.text}
        aria-haspopup="true"
      >
        <span>{link.text}</span>
        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180 text-primary" />
      </button>
      
      {/* Dropdown glass menu */}
      <div className={`absolute top-full ${language === 'ar' ? 'end-0' : 'start-0'} mt-2 w-56 p-2 rounded-2xl shadow-2xl transition-all duration-300 z-50 border border-primary/20 bg-slate-950/95 backdrop-blur-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible`}>
        {/* Decorative corner indicator */}
        <div className="absolute -top-1.5 start-6 w-3 h-3 bg-slate-950 border-t border-s border-primary/20 transform rotate-45"></div>
        
        <div className="flex flex-col space-y-1 relative z-10 pt-1">
          {link.subLinks.map(subLink => (
            <NavLink
              key={subLink.to}
              to={subLink.to}
              onClick={closeMenus}
              className={({ isActive }) => `block px-4 py-2.5 text-xs text-gray-300 hover:bg-primary/10 hover:text-white rounded-xl transition-all duration-200 ${isActive ? 'bg-primary/25 font-bold text-primary border-s-2 border-primary' : ''}`}
            >
              {subLink.text}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

// Mobile dropdown menu component
const MobileDropdown: React.FC<{
  link: { text: string; subLinks: { to: string; text: string }[] };
  linkClasses: string;
  activeLinkClasses: string;
  isSubLinkActive: (subLinks?: { to: string }[]) => boolean;
  closeMenus: () => void;
  openDropdown: string | null;
  toggleMobileDropdown: (text: string) => void;
}> = ({ link, linkClasses, activeLinkClasses, isSubLinkActive, closeMenus, openDropdown, toggleMobileDropdown }) => {
  return (
    <div className="w-full text-center">
      <button
        onClick={() => toggleMobileDropdown(link.text)}
        className={`w-full ${linkClasses} justify-between ${isSubLinkActive(link.subLinks) ? activeLinkClasses : ''}`}
        aria-expanded={openDropdown === link.text}
        aria-haspopup="true"
      >
        <span>{link.text}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 text-primary ${openDropdown === link.text ? 'rotate-180' : ''}`} />
      </button>
      
      {openDropdown === link.text && (
        <div className="py-2 space-y-1 bg-slate-900/50 rounded-2xl border border-white/5 mt-1 z-50">
          {link.subLinks.map(subLink => (
            <NavLink
              key={subLink.to}
              to={subLink.to}
              onClick={closeMenus}
              className={({ isActive }) => `block w-full text-center px-4 py-2.5 text-xs text-gray-300 hover:bg-primary/10 hover:text-white transition-all duration-200 rounded-xl ${isActive ? 'bg-primary/20 font-bold text-primary' : ''}`}
            >
              {subLink.text}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

// Background decoration component
const BackgroundDecoration: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* High-tech matrix pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20h40M20 0v40' stroke='%2306B6D4' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}
      />
      {/* Light neon horizontal line at the very top */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
    </div>
  );
};

// Main Header component
const Header: React.FC = () => {
  const { t, language } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Navigation links configuration
  const navLinks = [
    { to: '/', text: t('nav.home') },
    {
      text: t('nav.solutions'),
      subLinks: [
        { to: '/erp-system', text: t('nav.erp') },
        { to: '/accounting-software', text: t('nav.accounting') },
        { to: '/inventory-management', text: t('nav.inventory') },
        { to: '/hr-payroll', text: t('nav.hr') },
        { to: '/manufacturing-erp', text: t('nav.manufacturing') },
        { to: '/pos-system', text: t('nav.pos') },
        { to: '/smart-weighing-system', text: t('nav.smartScale') },
        { to: '/concrete-management-system', text: t('nav.concreteManagement') },
        { to: '/export-management', text: t('nav.exportManagement') },
        { to: '/industries', text: t('nav.industries') },
        { to: '/prices', text: t('nav.pricing') },
      ],
    },
    { to: '/digital-transformation', text: t('nav.digitalTransformation') },
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

  // CSS classes for navigation links
  const linkClasses = "px-4 py-2 text-sm text-gray-300 hover:text-white transition-all duration-300 rounded-xl flex items-center gap-1.5 justify-center hover:bg-white/5";
  const activeLinkClasses = "text-white font-bold bg-primary/10 border border-primary/20 shadow-lg shadow-primary/5";

  // Helper functions
  const isSubLinkActive = (subLinks?: { to: string }[]) => {
    return subLinks?.some(sub => location.pathname === sub.to);
  };

  const toggleMobileDropdown = (text: string) => {
    setOpenDropdown(prev => (prev === text ? null : text));
  };

  const toggleDesktopDropdown = (text: string) => {
    setOpenDropdown(prev => (prev === text ? null : text));
  };

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  // Render UI
  return (
    <header className="bg-slate-950/80 backdrop-blur-xl fixed top-0 left-0 right-0 z-50 border-b border-white/5">
      {/* Background decoration with tech grid overlays */}
      <BackgroundDecoration />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with technical spark icon */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center gap-2 text-2xl font-bold text-white font-display tracking-tight group">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Cpu className="w-4.5 h-4.5 text-primary animate-pulse" />
              </div>
              <span>
                Active<span className="text-primary font-display font-medium">Soft</span>
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1.5 rtl:space-x-reverse" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.subLinks ? (
                <DesktopDropdown
                  key={link.text}
                  link={link}
                  linkClasses={linkClasses}
                  activeLinkClasses={activeLinkClasses}
                  isSubLinkActive={isSubLinkActive}
                  closeMenus={closeMenus}
                  openDropdown={openDropdown}
                  toggleDesktopDropdown={toggleDesktopDropdown}
                  language={language}
                />
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to!}
                  onClick={closeMenus}
                  className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}
                >
                  {link.text}
                </NavLink>
              )
            )}
          </nav>

          {/* Language Switcher for Desktop */}
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-xl bg-slate-900 border border-white/5 text-gray-300 hover:text-white hover:border-primary/20 transition-all duration-300"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-white/5 bg-slate-950 relative z-50 animate-fade-in" id="mobile-menu">
          <div className="px-4 py-6 space-y-2 flex flex-col items-stretch max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) =>
              link.subLinks ? (
                <MobileDropdown
                  key={link.text}
                  link={link}
                  linkClasses={linkClasses}
                  activeLinkClasses={activeLinkClasses}
                  isSubLinkActive={isSubLinkActive}
                  closeMenus={closeMenus}
                  openDropdown={openDropdown}
                  toggleMobileDropdown={toggleMobileDropdown}
                />
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
export { Header };
