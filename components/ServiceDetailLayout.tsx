import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import SEOHead from './SEOHead';
import { Link } from 'react-router-dom';

interface ServiceDetailLayoutProps {
  title: string;
  subtitle?: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  children: React.ReactNode;
  heroImage?: string;
  currentPath: string;
}

const ServiceDetailLayout: React.FC<ServiceDetailLayoutProps> = ({
  title,
  subtitle,
  description,
  seoTitle,
  seoDescription,
  seoKeywords,
  children,
  heroImage,
  currentPath
}) => {
  const { t } = useTranslation();
  const [isAnimated, setIsAnimated] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.current?.observe(el));

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const relatedServices = [
    { path: '/erp-system', label: t('nav.erp', 'ERP System'), icon: 'erp' },
    { path: '/accounting-software', label: t('nav.accounting', 'Accounting Software'), icon: 'accounting' },
    { path: '/inventory-management', label: t('nav.inventory', 'Inventory Management'), icon: 'inventory' },
    { path: '/hr-payroll', label: t('nav.hr', 'HR & Payroll'), icon: 'hr' },
    { path: '/manufacturing-erp', label: t('nav.manufacturing', 'Manufacturing ERP'), icon: 'manufacturing' },
    { path: '/pos-system', label: t('nav.pos', 'POS System'), icon: 'pos' },
    { path: '/concrete-management-system', label: t('nav.concrete', 'Concrete Management'), icon: 'concrete' }
  ].filter(service => service.path !== currentPath);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'erp':
        return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;
      case 'accounting':
        return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>;
      case 'inventory':
        return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>;
      case 'hr':
        return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
      case 'crm':
        return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
      case 'manufacturing':
        return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
      case 'pos':
        return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>;
      case 'concrete':
        return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>;
      default:
        return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 50h20m20 0h10m20 0h30M50 0v20m0 20v10m0 20v30' stroke='%2306B6D4' stroke-width='1'/%3E%3Ccircle cx='20' cy='50' r='2' fill='%2306B6D4'/%3E%3Ccircle cx='50' cy='20' r='2' fill='%2306B6D4'/%3E%3Ccircle cx='50' cy='80' r='2' fill='%2306B6D4'/%3E%3C/svg%3E")`,
            backgroundSize: '150px 150px'
          }}></div>
        </div>
        
        {/* Animated Orbs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              {title}
            </h1>
            {subtitle && (
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-cyan-400">
                {subtitle}
              </h2>
            )}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Related Services Section (Internal Linking) */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%2306B6D4' stroke-width='0.5'%3E%3Cpath d='M36 34v-4H20v4M30 30V20M30 50V40'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('services.relatedTitle', 'Explore Other Solutions')}</h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto" />
            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
              {t('services.relatedSubtitle', 'Our integrated ecosystem works better together. Discover how our other solutions can transform your business.')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedServices.map((service, index) => (
              <Link 
                key={service.path} 
                to={service.path}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                  {service.label}
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {t('services.viewSolution', 'View Solution')} &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-on-scroll">
            {t('services.ctaTitleGlobal', 'Ready to Scale Your Business?')}
          </h2>
          <p className="text-xl mb-10 text-cyan-100 max-w-2xl mx-auto animate-on-scroll" style={{ transitionDelay: '100ms' }}>
            {t('services.ctaDescGlobal', 'Join hundreds of companies that trust ActiveSoft for their digital transformation journey.')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll" style={{ transitionDelay: '200ms' }}>
            <Link to="/contact" className="px-8 py-4 bg-white text-cyan-600 font-bold rounded-xl hover:bg-cyan-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
              {t('nav.contact', 'Contact Us Now')}
            </Link>
            <Link to="/prices" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              {t('nav.prices', 'View Pricing')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailLayout;
