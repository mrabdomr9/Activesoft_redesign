import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import ServiceDetailLayout from '../components/ServiceDetailLayout';
import { Scale, Cpu, Network, Database, LayoutDashboard, Settings, CheckCircle2, TrendingDown, Zap, ShieldCheck, PieChart, Wallet } from 'lucide-react';

const SmartScalePage: React.FC = () => {
  const { t } = useTranslation();

  const components = [
    { icon: Scale, text: t('services.smartScale.components.item1') },
    { icon: Cpu, text: t('services.smartScale.components.item2') },
    { icon: Network, text: t('services.smartScale.components.item3') },
    { icon: Database, text: t('services.smartScale.components.item4') },
    { icon: LayoutDashboard, text: t('services.smartScale.components.item5') },
    { icon: Settings, text: t('services.smartScale.components.item6') },
  ];

  const benefits = [
    { icon: CheckCircle2, title: t('services.smartScale.benefits.benefit1.title'), desc: t('services.smartScale.benefits.benefit1.desc') },
    { icon: TrendingDown, title: t('services.smartScale.benefits.benefit2.title'), desc: t('services.smartScale.benefits.benefit2.desc') },
    { icon: Zap, title: t('services.smartScale.benefits.benefit3.title'), desc: t('services.smartScale.benefits.benefit3.desc') },
    { icon: ShieldCheck, title: t('services.smartScale.benefits.benefit4.title'), desc: t('services.smartScale.benefits.benefit4.desc') },
    { icon: PieChart, title: t('services.smartScale.benefits.benefit5.title'), desc: t('services.smartScale.benefits.benefit5.desc') },
    { icon: Wallet, title: t('services.smartScale.benefits.benefit6.title'), desc: t('services.smartScale.benefits.benefit6.desc') },
  ];

  return (
    <ServiceDetailLayout
      title={t('services.smartScale.title')}
      subtitle={t('services.smartScale.desc')}
      description={t('services.smartScale.desc')}
      seoTitle={t('seo.smartScale.title', 'Smart Weighing System | ActiveSoft')}
      seoDescription={t('seo.smartScale.description', 'Integrated electronic weighing system that connects industrial scales directly to ERP to prevent manipulation and errors.')}
      seoKeywords={t('seo.smartScale.keywords', 'Smart Weighing System, Smart Scale System, Industrial Electronic Scales')}
      currentPath="/smart-scale"
      heroImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070"
    >
      {/* Components Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">{t('services.smartScale.componentsTitle')}</h2>
            <div className="w-24 h-1.5 bg-cyan-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {components.map((item, index) => (
              <div 
                key={index} 
                className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:bg-white hover:shadow-2xl hover:border-cyan-100 transition-all duration-500 animate-on-scroll group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center text-cyan-600 mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <item.icon className="w-8 h-8" />
                </div>
                <p className="text-slate-700 leading-relaxed font-medium">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">{t('services.smartScale.benefitsTitle')}</h2>
            <div className="w-24 h-1.5 bg-green-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-green-500/30 transition-all duration-300 animate-on-scroll backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-green-500/30 transition-all duration-300">
                  <benefit.icon className="w-7 h-7 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-slate-300 leading-relaxed text-sm">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServiceDetailLayout>
  );
};

export default SmartScalePage;
