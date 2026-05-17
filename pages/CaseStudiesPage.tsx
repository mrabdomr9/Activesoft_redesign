import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { 
  HelpCircle, 
  Cpu, 
  TrendingUp, 
  Filter, 
  FolderOpen, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

interface CaseStudy {
  industryKey: string;
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
}

type Filters = Record<string, string>;

const CaseStudiesPage: React.FC = () => {
  const { t, language } = useTranslation();

  useEffect(() => {
    const title = t('seo.caseStudies.title', 'Case Studies | Active Soft');
    const description = t('seo.caseStudies.description', 'Read our success stories and see how we\'ve helped businesses achieve remarkable results.');
    const keywords = t('seo.caseStudies.keywords', 'Success Stories, Client Results, Oracle ERP Case Study, Custom Software Projects, Active Soft');

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

  const pageTitle = t('caseStudies.title');
  const pageSubtitle = t('caseStudies.subtitle');
  const filters: Filters = t('caseStudies.filters', {}) as any;
  const studies: CaseStudy[] = t('caseStudies.studies', []) as any;

  const [activeFilterKey, setActiveFilterKey] = useState<string>('all');

  const filteredStudies = activeFilterKey === 'all'
    ? studies
    : studies.filter(cs => cs.industryKey === activeFilterKey);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#070714] text-white">
      {/* Technical Background Graphics */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-secondary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Technical schematics */}
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
              <Sparkles className="w-4 h-4" />
              <span>{language === 'ar' ? 'قصص حقيقية وتأثير ملموس' : 'Real Stories, Tangible Results'}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient-x">
              {pageTitle || (language === 'ar' ? 'قصص النجاح ودراسات الحالة' : 'Case Studies')}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {pageSubtitle || (language === 'ar' ? 'اكتشف كيف ساعدت حلولنا الذكية كبرى الشركات والمصانع على أتمتة عملياتها بكفاءة مطلقة.' : 'Explore how our custom business solutions helped industry leaders automate operations and maximize productivity.')}
            </p>
          </div>

          {/* Futuristic Filters Menu */}
          <div className="glass-panel p-4 rounded-2xl border border-white/10 mb-16 flex flex-wrap items-center justify-center gap-2 animate-on-scroll" style={{ transitionDelay: '150ms' }}>
            <div className="flex items-center gap-2 text-sm text-gray-400 px-3 py-2 border-r border-white/10 rtl:border-r-0 rtl:border-l rtl:pl-4">
              <Filter className="w-4 h-4 text-primary" />
              <span>{language === 'ar' ? 'تصنيف القطاع:' : 'Filter Sector:'}</span>
            </div>
            
            {Object.entries(filters).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setActiveFilterKey(key)}
                className={`px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeFilterKey === key 
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20 scale-105' 
                    : 'bg-slate-900/50 text-gray-400 border border-white/5 hover:border-white/20 hover:text-white'
                }`}
              >
                {value}
              </button>
            ))}
          </div>

          {/* Success Stories Cards */}
          <div className="space-y-16 mb-24">
            {filteredStudies.length > 0 ? (
              filteredStudies.map((study, index) => (
                <div 
                  key={index} 
                  className="glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-500 lg:flex group animate-on-scroll"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Left Column: Image with dynamic zoom */}
                  <div className="lg:w-2/5 relative h-72 lg:h-auto overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      loading="lazy"
                    />
                    {/* Shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/80 to-transparent"></div>
                    
                    {/* Industry badge in the corner */}
                    <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-slate-950/80 border border-white/10 backdrop-blur-sm text-xs font-semibold text-primary font-display tracking-widest uppercase">
                      {study.industry}
                    </div>
                  </div>

                  {/* Right Column: High-end Details with customized icons */}
                  <div className="p-8 md:p-12 lg:w-3/5 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 font-display group-hover:text-primary transition-colors">
                        {study.title}
                      </h2>
                      
                      <div className="space-y-6">
                        {/* Challenge */}
                        <div className="flex gap-4">
                          <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 h-10 w-10 flex items-center justify-center flex-shrink-0">
                            <ShieldAlert className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-200 text-sm mb-1 uppercase tracking-wider">
                              {language === 'ar' ? 'التحدي والمشكلة:' : 'The Challenge:'}
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed">{study.challenge}</p>
                          </div>
                        </div>

                        {/* Solution */}
                        <div className="flex gap-4">
                          <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 h-10 w-10 flex items-center justify-center flex-shrink-0">
                            <Cpu className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-200 text-sm mb-1 uppercase tracking-wider">
                              {language === 'ar' ? 'الحل المطبق:' : 'The Solution:'}
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                          </div>
                        </div>

                        {/* Result */}
                        <div className="flex gap-4 bg-primary/5 p-4 rounded-2xl border border-primary/10">
                          <div className="p-2.5 rounded-xl bg-secondary/15 text-secondary border border-secondary/20 h-10 w-10 flex items-center justify-center flex-shrink-0">
                            <TrendingUp className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-bold text-secondary text-sm mb-1 uppercase tracking-wider">
                              {language === 'ar' ? 'الأثر والنتائج المحققة:' : 'The Result:'}
                            </h3>
                            <p className="text-gray-200 font-semibold text-sm leading-relaxed">{study.result}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-20 glass-panel rounded-3xl border border-white/5 max-w-lg mx-auto animate-on-scroll">
                <FolderOpen className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  {language === 'ar' ? 'لا توجد دراسات حالة متوفرة' : 'No case studies available'}
                </h3>
                <p className="text-gray-400">
                  {language === 'ar' ? 'يرجى اختيار قطاع آخر للمشاهدة.' : 'Please select another sector to view.'}
                </p>
              </div>
            )}
          </div>

          {/* Bottom Custom Panel */}
          <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-primary/20 relative overflow-hidden animate-on-scroll">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold text-white font-display mb-4">
                  {language === 'ar' ? 'انضم إلى ركب قصص نجاحنا المتواصلة' : 'Be Our Next Success Story'}
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {language === 'ar'
                    ? 'اكتشف كيف يمكن لأنظمتنا ومستشارينا تحويل التحديات التشغيلية في شركتك إلى محركات ربحية حقيقية وأتمتة مريحة تضمن لك السيطرة على السوق.'
                    : 'Discover how our customized Oracle ERP solutions and cloud capabilities can convert your operational struggles into powerful business models and real profit.'}
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-primary/25"
                >
                  <span>{language === 'ar' ? 'اطلب استشارة مجانية' : 'Request Free Audit'}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;