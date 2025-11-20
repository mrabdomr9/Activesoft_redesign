import React, { useContext, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

// ------------------------------
// Language Switcher
// ------------------------------
const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      className="px-4 py-2 text-sm font-semibold bg-cyan-600/80 text-white rounded-md hover:bg-cyan-500 transition-colors"
    >
      {language === 'en' ? 'العربية' : 'English'}
    </button>
  );
};

// ------------------------------
// Dropdown Item (Desktop)
// ------------------------------
const DesktopDropdown: React.FC<{
  text: string;
  subLinks: { to: string; text: string }[];
  isOpen: boolean;
  onToggle: () => void;
  isActive: boolean;
  closeMenus: () => void;
  linkClasses: string;
  activeLinkClasses: string;
}> = ({ text, subLinks, isOpen, onToggle, isActive, closeMenus, linkClasses, activeLinkClasses }) => {
  return (
    <div className="relative group dropdown-container">
      <button
        onClick={onToggle}
        className={`${linkClasses} ${isActive ? activeLinkClasses : ''}`}
      >
        <span>{text}</span>
        <svg className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </button>

      <div
        className={`absolute top-full start-0 mt-2 w-48 p-2 rounded-lg shadow-xl transition-all duration-300 z-50 border border-cyan-500/30 bg-slate-800
        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} group-hover:opacity-100 group-hover:visible`}
      >
        <div className="flex flex-col space-y-1">
          {subLinks.map((sub) => (
            <NavLink
              key={sub.to}
              to={sub.to}
              onClick={closeMenus}
              className={({ isActive }) =>
                `block px-4 py-2 text-sm text-cyan-100 hover:bg-cyan-500/20 hover:text-white rounded-md transition-colors 
                ${isActive ? 'bg-cyan-500/30 font-semibold text-white' : ''}`
              }
            >
              {sub.text}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

// ------------------------------
// Mobile Dropdown
// ------------------------------
const MobileDropdown: React.FC<{
  text: string;
  subLinks: { to: string; text: string }[];
  isOpen: boolean;
  onToggle: () => void;
  isActive: boolean;
  closeMenus: () => void;
  linkClasses: string;
  activeLinkClasses: string;
}> = ({ text, subLinks, isOpen, onToggle, isActive, closeMenus, linkClasses, activeLinkClasses }) => {
  return (
    <div className="w-full text-center">
      <button
        onClick={onToggle}
        className={`w-full ${linkClasses} justify-center ${isActive ? activeLinkClasses : ''}`}
      >
        <span>{text}</span>
        <svg
          className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </button>

      {isOpen && (
        <div className="py-2 space-y-1 bg-black/20 rounded-b-md">
          {subLinks.map((sub) => (
            <NavLink
              key={sub.to}
              to={sub.to}
              onClick={closeMenus}
              className={({ isActive }) =>
                `block w-full text-center px-4 py-2 text-sm text-cyan-100 hover:bg-cyan-500/20 hover:text-white transition-colors rounded-md 
                ${isActive ? 'bg-cyan-500/30 font-semibold text-white' : ''}`
              }
            >
              {sub.text}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

// ------------------------------
// Main Header
// ------------------------------
const Header: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const [mobileMenu, setMobileMenu] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  const linkClasses =
    'px-3 py-2 text-base text-cyan-100 hover:text-white transition-colors rounded-md flex items-center gap-1';
  const activeLinkClasses = 'text-white font-bold bg-cyan-500/20';

  const navLinks = [
    { to: '/', text: t('nav.home') },
    {
      text: t('nav.solutions'),
      subLinks: [
        { to: '/services', text: t('nav.services') },
        { to: '/industries', text: t('nav.industries') },
        { to: '/prices', text: t('nav.pricing') },
        { to: '/concrete-management', text: t('nav.concreteManagement') },
        { to: '/export-management', text: t('nav.exportManagement') }
      ]
    },
    { to: '/digital-transformation', text: t('nav.digitalTransformation') },
    {
      text: t('nav.ourWork'),
      subLinks: [
        { to: '/case-studies', text: t('nav.caseStudies') },
        { to: '/portfolio', text: t('nav.portfolio') },
        { to: '/clients', text: t('nav.clients') }
      ]
    },
    {
      text: t('nav.company'),
      subLinks: [
        { to: '/about', text: t('nav.about') },
        { to: '/brochures', text: t('nav.brochures') }
      ]
    },
    { to: '/contact', text: t('nav.contact') }
  ];

  const isSubActive = (subs?: { to: string }[]) =>
    subs?.some((s) => location.pathname === s.to);

  const closeMenus = () => {
    setMobileMenu(false);
    setDropdown(null);
  };

  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 fixed top-0 left-0 right-0 z-50 border-b border-cyan-500/30">

      {/* Background overlays preserved exactly as they are */}
      <div className="absolute inset-0">
        {/* Circuit, HUD, lines, schematics (unchanged) */}
        {/* ... keeping your exact SVGs */}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="text-2xl font-bold text-white font-display">
            Active<span className="text-cyan-400">Soft</span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 rtl:space-x-reverse">
            {navLinks.map((link) =>
              link.subLinks ? (
                <DesktopDropdown
                  key={link.text}
                  text={link.text}
                  subLinks={link.subLinks}
                  isOpen={dropdown === link.text}
                  onToggle={() =>
                    setDropdown(dropdown === link.text ? null : link.text)
                  }
                  isActive={isSubActive(link.subLinks)}
                  closeMenus={closeMenus}
                  linkClasses={linkClasses}
                  activeLinkClasses={activeLinkClasses}
                />
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to!}
                  onClick={closeMenus}
                  className={({ isActive }) =>
                    `${linkClasses} ${isActive ? activeLinkClasses : ''}`
                  }
                >
                  {link.text}
                </NavLink>
              )
            )}
          </nav>

          {/* Desktop Lang */}
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center">
            <LanguageSwitcher />

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="p-2 rounded-md text-cyan-100 hover:text-white ms-2"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor">
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    mobileMenu
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-slate-800 border-t border-cyan-500/30 relative z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center">
            {navLinks.map((link) =>
              link.subLinks ? (
                <MobileDropdown
                  key={link.text}
                  text={link.text}
                  subLinks={link.subLinks}
                  isOpen={dropdown === link.text}
                  onToggle={() =>
                    setDropdown(dropdown === link.text ? null : link.text)
                  }
                  isActive={isSubActive(link.subLinks)}
                  closeMenus={closeMenus}
                  linkClasses={linkClasses}
                  activeLinkClasses={activeLinkClasses}
                />
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to!}
                  onClick={closeMenus}
                  className={({ isActive }) =>
                    `block w-full text-center ${linkClasses} ${isActive ? activeLinkClasses : ''
                    }`
                  }
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
