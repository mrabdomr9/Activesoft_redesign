import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import { LanguageContext } from '../../context/LanguageContext';
import { ClipboardList, Eye, Settings2, CheckCircle2, ArrowRight } from 'lucide-react';

const WorkStagesSection: React.FC = () => {
    const { t } = useTranslation();
    const { language } = useContext(LanguageContext);

    const stagesData = [
        { icon: ClipboardList, color: 'text-primary' },
        { icon: Eye, color: 'text-secondary' },
        { icon: Settings2, color: 'text-primary' },
        { icon: CheckCircle2, color: 'text-secondary' }
    ];

    return (
        <section className="py-20 bg-transparent relative overflow-hidden">
            {/* Ambient glowing tech lines */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-5" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 60h120M60 0v120' stroke='%2306B6D4' stroke-width='0.5'/%3E%3C/svg%3E")`,
                backgroundSize: '120px 120px'
            }}></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Header */}
                <div className="text-center mb-16 animate-on-scroll">
                    <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">
                        {t('workStages.title', 'Work Stages')}
                    </h2>
                    <p className="mt-4 text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        {t('workStages.slogan', 'Smart planning is one of the most important factors of distinction and success')}
                    </p>
                </div>

                {/* Timeline Grid */}
                <div className="max-w-4xl mx-auto">
                    <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                            {[0, 1, 2, 3].map((index) => {
                                const stage = stagesData[index];
                                const StageIcon = stage.icon;

                                return (
                                    <div 
                                        key={index} 
                                        className="flex gap-5 animate-on-scroll group" 
                                        style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                                    >
                                        {/* Icon Container */}
                                        <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-2xl bg-slate-900 border border-white/5 group-hover:border-primary/40 text-primary shadow-lg transition-all duration-300 group-hover:scale-105">
                                            <StageIcon className={`w-6 h-6 ${stage.color}`} />
                                        </div>

                                        {/* Info */}
                                        <div>
                                            <span className="text-[10px] uppercase font-bold tracking-wider text-secondary">
                                                {language === 'ar' ? `المرحلة ${index + 1}` : `Stage 0${index + 1}`}
                                            </span>
                                            <h3 className="text-lg font-bold text-white font-display mt-1 group-hover:text-primary transition-colors">
                                                {t(`workStages.stages.${index}`, `Work stage ${index + 1}`)}
                                            </h3>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Team CTA */}
                    <div className="mt-12 text-center animate-on-scroll">
                        <Link 
                            to="/about" 
                            className="group inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-white transition-colors"
                        >
                            <span>{t('home.meetOurTeam', 'Meet Our Team')}</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WorkStagesSection;
export { WorkStagesSection };
