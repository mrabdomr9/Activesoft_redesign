import React, { useContext } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { LanguageContext } from '../context/LanguageContext';
import SEOHead from '../components/SEOHead';
import { 
  Sparkles, 
  HelpCircle, 
  Settings, 
  ArrowRight,
  TrendingUp,
  Cpu,
  Package,
  Layers
} from 'lucide-react';

const IndustriesPage: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);

  const industriesData = [
    { key: 'agriExport', image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=800&auto=format&fit=crop" },
    { key: 'concreteCement', image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=800&auto=format&fit=crop" },
    { key: 'metalForming', image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop" },
    { key: 'plasticPipes', image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=800&auto=format&fit=crop" },
    { key: 'fertilizersPesticides', image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=800&auto=format&fit=crop" },
    { key: 'appliancesAssembly', image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" },
    { key: 'foodProduction', image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop" },
    { key: 'internationalSchools', image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop" },
    { key: 'commercialAgencies', image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#070714] text-white">
      <SEOHead
        title={t('seo.industries.title', 'Industry-Specific ERP Solutions | ActiveSoft')}
        description={t('seo.industries.description', 'Customized ERP and software solutions for diverse sectors including manufacturing, construction, retail, healthcare, and education in Egypt.')}
        keywords={t('seo.industries.keywords', 'Manufacturing ERP, Ready Mix ERP, Construction ERP, Retail ERP, Distribution ERP, Medical ERP, School Management System, ActiveSoft Industries, Industry Solutions Egypt')}
      />
      
      {/* Background Graphic Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-primary/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2.5s' }}></div>

        {/* Technical schematics */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h120v120H0z' fill='none'/%3E%3Cpath d='M0 60h24m24 0h12m24 0h36M60 0v24m0 24v12m0 24v36' stroke='%2306B6D4' stroke-width='1'/%3E%3Ccircle cx='24' cy='60' r='2' fill='%2306B6D4'/%3E%3Ccircle cx='60' cy='24' r='2' fill='%2306B6D4'/%3E%3Ccircle cx='60' cy='96' r='2' fill='%2306B6D4'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20 animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              <span>{language === 'ar' ? 'قطاعات حيوية قمنا بتمكينها تقنياً' : 'Empowering Core Verticals'}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient-x">
              {t('industries.title', 'Industry Solutions')}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('industries.subtitle', 'Engineered workflows and enterprise costing methodologies custom-tailored for leading industrial, educational, and trade sectors.')}
            </p>
          </div>

          {/* Alternating Panels */}
          <div className="space-y-16">
            {industriesData.map((industry, index) => (
              <div 
                key={industry.key} 
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 animate-on-scroll group"
              >
                
                {/* Image panel with tech overlay */}
                <div className={`relative overflow-hidden rounded-3xl h-80 ring-1 ring-white/10 group-hover:ring-primary/30 transition-all duration-500 ${
                  index % 2 !== 0 ? 'lg:order-last' : ''
                }`}>
                  <img 
                    src={industry.image} 
                    alt={t(`industries.${industry.key}.name`)} 
                    className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070714] via-transparent to-transparent"></div>
                  
                  {/* Decorative tag */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-slate-950/70 border border-white/10 text-primary text-xs font-semibold backdrop-blur-md">
                    ActiveSoft Core
                  </div>
                </div>

                {/* Details info */}
                <div className="flex flex-col justify-center h-full">
                  <h2 className="text-2xl md:text-3xl font-bold text-white font-display mb-6 group-hover:text-primary transition-colors">
                    {t(`industries.${industry.key}.name`)}
                  </h2>

                  <div className="space-y-6">
                    {/* Challenge Block */}
                    <div className="flex gap-4 items-start">
                      <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 flex-shrink-0 mt-1">
                        <HelpCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                          {t('industries.challengesLabel', 'The Challenges:')}
                        </h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {t(`industries.${industry.key}.challenges`)}
                        </p>
                      </div>
                    </div>

                    {/* Solution Block */}
                    <div className="flex gap-4 items-start">
                      <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 flex-shrink-0 mt-1">
                        <Settings className="w-5 h-5 animate-spin-slow" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                          {t('industries.solutionLabel', 'The Solution:')}
                        </h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {t(`industries.${industry.key}.solution`)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* CTA Footer */}
          <div className="mt-20 glass-panel p-8 md:p-12 rounded-[2.5rem] border border-primary/20 relative overflow-hidden animate-on-scroll">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl z-0 animate-pulse"></div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 font-display">
                  {language === 'ar' ? 'هل يحتاج قطاع شركتك لتصميم دورة مستندية خاصة؟' : 'Need a Specific Document Workflow?'}
                </h3>
                <p className="text-gray-300 text-sm max-w-2xl">
                  {language === 'ar' 
                    ? 'فريق المهندسين والمستشارين لدينا جاهز لدراسة وتحليل طبيعة عملك وتوفير النظام الأفضل لك.' 
                    : 'Our engineering staff will analyze your operations cycle to build tailored ERP integrations.'}
                </p>
              </div>
              <a 
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-bold rounded-2xl shadow-xl shadow-primary/25 transition-all duration-300 flex-shrink-0"
              >
                <span>{language === 'ar' ? 'طلب استشارة مجانية' : 'Request Consultation'}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default IndustriesPage;