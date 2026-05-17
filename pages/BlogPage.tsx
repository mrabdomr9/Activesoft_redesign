import React, { useEffect, useContext, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { LanguageContext } from '../context/LanguageContext';
import { 
  Sparkles, 
  FileDown, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Send
} from 'lucide-react';

const BrochuresPage: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  // PDF files information with high-quality descriptions
  const pdfFiles = [
    {
      id: 1,
      name: t('brochures.generalFeatures', 'General Features'),
      fileName: '1 السمات العامة.pdf',
      description: t('brochures.generalFeaturesDesc', 'Overview of our general software features, platform speed, security, and multi-user configurations.'),
      size: '620 KB'
    },
    {
      id: 2,
      name: t('brochures.generalAccounts', 'General Accounts'),
      fileName: '2 الحسابات العامة.pdf',
      description: t('brochures.generalAccountsDesc', 'Detailed features of General Ledgers, cost centers, automated balances, and fiscal reporting.'),
      size: '1.2 MB'
    },
    {
      id: 3,
      name: t('brochures.costSystem', 'Cost System'),
      fileName: '3 نظام التكاليف.pdf',
      description: t('brochures.costSystemDesc', 'A deep dive into actual costing, industrial slaughterhouses costing, and ready-mix concrete batch ratios.'),
      size: '1.8 MB'
    },
    {
      id: 4,
      name: t('brochures.inventorySystem', 'Inventory System'),
      fileName: '4 نظام المخازن.pdf',
      description: t('brochures.inventorySystemDesc', 'Documentation covering lot tracking, multi-warehouse controls, and automated item coding rules.'),
      size: '950 KB'
    },
    {
      id: 5,
      name: t('brochures.exportSystem', 'Export System'),
      fileName: '5 التصدير.pdf',
      description: t('brochures.exportSystemDesc', 'Custom framework for farming container exports, customs clearance costs, and multi-currency tracking.'),
      size: '1.1 MB'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const inputClasses = "w-full px-4 py-3.5 bg-slate-950/60 border border-white/10 rounded-xl focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300 text-white placeholder-gray-400 text-sm";

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#070714] text-white">
      {/* Background Schema */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-secondary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>

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
              <span>{language === 'ar' ? 'كتالوجات الأنظمة والحلول المتكاملة' : 'System Specifications & Catalogs'}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient-x">
              {t('brochures.title', 'Download Our Brochures')}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('brochures.subtitle', 'Access detailed technical brochures for our core Modules to explore full specifications and workflow integrations.')}
            </p>
          </div>

          {/* Brochures Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {pdfFiles.map((pdf) => (
              <div 
                key={pdf.id} 
                className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 flex flex-col justify-between items-stretch animate-on-scroll group"
              >
                <div className="flex gap-6 items-start mb-8">
                  <div className="p-4 rounded-2xl bg-primary/15 text-primary border border-primary/20 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors font-display">
                      {pdf.name}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {pdf.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-xs text-gray-400 font-mono">
                    PDF • {pdf.size}
                  </span>
                  
                  <a
                    href={`/PDFs/${pdf.fileName}`}
                    download
                    className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white text-xs font-bold rounded-xl shadow-lg shadow-primary/20 transition-all duration-300"
                  >
                    <span>{t('brochures.download', 'Download')}</span>
                    <FileDown className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Secure Interactive Request Form */}
          <div className="max-w-2xl mx-auto glass-panel p-8 md:p-12 rounded-[2.5rem] border border-primary/20 relative overflow-hidden animate-on-scroll">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl z-0 animate-pulse"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-secondary/15 text-secondary border border-secondary/20">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-white font-display">
                  {t('brochures.requestFormTitle', 'Request Custom Technical Specs')}
                </h2>
              </div>
              
              <p className="text-sm text-gray-300 leading-relaxed mb-8">
                {language === 'ar' 
                  ? 'اترك بريدك الإلكتروني وسيقوم مهندس برمجيات بإرسال الكتالوجات المخصصة والتفاصيل الهندسية الفورية إليك.' 
                  : 'Submit your email to receive specific custom ERP costing cycles and database structures from our team.'}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {submitted && (
                  <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 p-4 rounded-xl text-sm font-semibold animate-pulse">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>
                      {language === 'ar' ? 'تم استلام طلبك بنجاح! تحقق من بريدك الإلكتروني.' : 'Request successfully sent! Check your inbox shortly.'}
                    </span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder={t('brochures.namePlaceholder', 'Your Name')}
                      required
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder={t('brochures.emailPlaceholder', 'Your Email Address')}
                      required
                      className={inputClasses}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-bold py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-primary/25 disabled:opacity-50"
                >
                  <span>
                    {isSubmitting ? (language === 'ar' ? 'جاري الإرسال...' : 'Sending request...') : t('brochures.requestInfo', 'Request Specifications')}
                  </span>
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BrochuresPage;