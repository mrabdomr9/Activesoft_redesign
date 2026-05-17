import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import { LanguageContext } from '../../context/LanguageContext';
import { Hourglass, LayoutGrid, Smile, ArrowRight } from 'lucide-react';

const ImpactSection: React.FC = () => {
    const { t } = useTranslation();
    const { language } = useContext(LanguageContext);

    return (
        <section className="py-20 bg-transparent relative overflow-hidden">
            
            {/* Ambient Background glows */}
            <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Header */}
                <div className="text-center mb-16 animate-on-scroll">
                    <h2 className="text-3xl md:text-5xl font-bold text-white font-display">
                        {t('home.impact.title', 'Our Impact in Numbers')}
                    </h2>
                    <p className="mt-4 text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        {t('home.impact.subtitle', 'We are proud of our achievements and the value we deliver to our clients.')}</p>
                </div>

                {/* Impact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Stat 1 */}
                    <div className="glass-panel p-8 rounded-3xl text-center border border-white/5 hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] flex flex-col items-center justify-between group">
                        <div>
                            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 text-primary border border-primary/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Hourglass className="w-8 h-8" />
                            </div>
                            <p className="text-4xl md:text-5xl font-bold text-white font-display mb-2 font-mono">
                                {t('home.impact.experienceVal', '15+')}
                            </p>
                            <p className="text-sm text-gray-400">
                                {t('home.impact.experience', 'Years of Experience')}
                            </p>
                        </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="glass-panel p-8 rounded-3xl text-center border border-white/5 hover:border-secondary/40 transition-all duration-500 hover:scale-[1.02] flex flex-col items-center justify-between group">
                        <div>
                            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-secondary/10 text-secondary border border-secondary/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                                <LayoutGrid className="w-8 h-8" />
                            </div>
                            <p className="text-4xl md:text-5xl font-bold text-white font-display mb-2 font-mono">
                                {t('home.impact.applicationsVal', '500+')}
                            </p>
                            <p className="text-sm text-gray-400">
                                {t('home.impact.applications', 'Applications Delivered')}
                            </p>
                        </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="glass-panel p-8 rounded-3xl text-center border border-white/5 hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] flex flex-col items-center justify-between group">
                        <div>
                            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 text-primary border border-primary/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Smile className="w-8 h-8" />
                            </div>
                            <p className="text-4xl md:text-5xl font-bold text-white font-display mb-2 font-mono">
                                {t('home.impact.satisfactionVal', '98%')}
                            </p>
                            <p className="text-sm text-gray-400 mb-4">
                                {t('home.impact.satisfaction', 'Client Satisfaction')}
                            </p>
                        </div>
                        <div className="w-full pt-4 border-t border-white/5">
                            <Link 
                                to="/clients" 
                                className="group inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-white transition-colors"
                            >
                                <span>{t('home.viewClients', 'View Our Clients')}</span>
                                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ImpactSection;
export { ImpactSection };
