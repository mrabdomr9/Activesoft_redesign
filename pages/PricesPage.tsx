import React, { useEffect, useContext } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { LanguageContext } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

interface Pricing {
  currency: string;
  startingAt: number;
  billingPeriod: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  pricing: Pricing;
}

const PricesPage: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const title = t('seo.prices.title', 'Pricing & Plans | Active Soft');
    const description = t('seo.prices.description', 'Transparent pricing for our Oracle ERP, custom development, and business intelligence solutions. Find a plan that fits your business needs.');
    const keywords = t('seo.prices.keywords', 'Active Soft Pricing, Oracle ERP Cost, Custom Software Price, IT Solutions Pricing');

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

  const services: Service[] = t('prices.services', []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat(language === 'ar' ? 'ar-EG' : 'en-EG', {
      style: 'currency',
      currency: 'EGP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#070714] text-white">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-secondary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* HUD schematics */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h120v120H0z' fill='none'/%3E%3Cpath d='M0 60h24m24 0h12m24 0h36M60 0v24m0 24v12m0 24v36' stroke='%2306B6D4' stroke-width='1'/%3E%3Ccircle cx='24' cy='60' r='2' fill='%2306B6D4'/%3E%3Ccircle cx='60' cy='24' r='2' fill='%2306B6D4'/%3E%3Ccircle cx='60' cy='96' r='2' fill='%2306B6D4'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              <span>{language === 'ar' ? 'حلول استثمارية واضحة وعوائد مضمونة' : 'Transparent Enterprise Investment'}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient-x">
              {t('prices.title', 'Pricing & Modules Plans')}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('prices.subtitle', 'Explore scalable license tiers and setup budgets for our ERP integration, custom developments, and weighing modules.')}
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col justify-between items-stretch animate-on-scroll group"
                style={{ transitionDelay: `${(index % 3) * 100 + 100}ms` }}
              >
                <div>
                  {/* Top status */}
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white font-display group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    {index === 0 && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-secondary/20 text-secondary border border-secondary/30">
                        {language === 'ar' ? 'الأكثر طلباً' : 'Popular'}
                      </span>
                    )}
                  </div>

                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Pricing segment */}
                  <div className="p-5 rounded-2xl bg-slate-900 border border-white/5 mb-6">
                    <p className="text-xs text-secondary font-bold uppercase tracking-wider mb-2">
                      {t('prices.startsAt', 'Investment Starts At:')}
                    </p>
                    
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl md:text-3xl font-bold text-white font-mono">
                        {formatCurrency(service.pricing.startingAt)}
                      </span>
                      <span className="text-xs text-gray-400 font-bold">
                        {t('prices.perProject', ' / Setup')}
                      </span>
                    </div>
                  </div>

                  {/* Features list */}
                  <div className="border-t border-white/5 pt-6 mb-8">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                      {t('prices.features', 'Key Module Features:')}
                    </h4>
                    
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-gray-300 leading-relaxed">
                          <CheckCircle2 className="h-4.5 w-4.5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Submit action */}
                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="group w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-bold py-3.5 rounded-2xl shadow-lg shadow-primary/20 transition-all duration-300 text-sm"
                  >
                    <span>{t('prices.getQuote', 'Request Quote')}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </Link>
                </div>

              </div>
            ))}
          </div>

          {/* Secure and Risk Free Callout */}
          <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-primary/20 relative overflow-hidden animate-on-scroll">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl z-0 animate-pulse"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 justify-between">
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-2xl bg-secondary/15 text-secondary border border-secondary/20 flex-shrink-0 mt-1">
                  <ShieldCheck className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 font-display">
                    {language === 'ar' ? 'ضمان الأمان الفني الكامل' : 'Full Deployment & Security Guarantee'}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed max-w-2xl">
                    {language === 'ar' 
                      ? 'جميع الحلول المطبقة تشمل خطة صيانة سنوية متميزة، مع تدريب مجاني لكافة محاسبي ومشغلي النظام لضمان النجاح التام.' 
                      : 'All setup tiers include detailed system maintenance plans and free staff training to guarantee workflow integration.'}
                  </p>
                </div>
              </div>

              <Link 
                to="/contact" 
                className="group inline-flex items-center gap-1 text-primary hover:text-white font-bold text-sm transition-colors flex-shrink-0"
              >
                <span>{language === 'ar' ? 'تفاصيل باقات الدعم الفني' : 'Explore Support SLA'}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PricesPage;