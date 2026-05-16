import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import ClientLogoSlider from '../components/ClientLogoSlider';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import IndustriesSection from '../components/home/IndustriesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ImpactSection from '../components/home/ImpactSection';
import WorkStagesSection from '../components/home/WorkStagesSection';
import CTASection from '../components/home/CTASection';
import SEOHead from '../components/SEOHead';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen relative">
      <SEOHead
        title={t('seo.home.title', 'ERP Software & Business Management System | ActiveSoft')}
        description={t('seo.home.description', 'ActiveSoft provides ERP software, accounting systems, inventory management, HR, POS, and business automation solutions for companies in Egypt.')}
        keywords={t('seo.home.keywords', 'ERP System Egypt, ERP Software Egypt, Best ERP System, Accounting Software Egypt, Inventory Management System, POS System Egypt, HR & Payroll System, Manufacturing ERP, CRM Software Egypt, Business Management Software, Concrete Management System, Ready Mix ERP, Factory Management System, Construction ERP, Retail ERP System, Distribution ERP, Medical ERP System, School Management System, How to manage inventory, Best accounting software for factories, ERP for multi branch companies, Reduce warehouse mistakes, Automate payroll system, Inventory tracking software')}
      />
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
        {/* Hero Section */}
        <HeroSection />

        {/* Services Overview Section */}
        <ServicesSection />

        {/* Our Impact Section */}
        <ImpactSection />

        {/* Work Stages Section */}
        <WorkStagesSection />

        {/* Industries Section */}
        <IndustriesSection />

        {/* Client Logo Slider Section */}
        <ClientLogoSlider />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* CTA Section */}
        <CTASection />
      </div>
    </div>
  );
};

export default HomePage;