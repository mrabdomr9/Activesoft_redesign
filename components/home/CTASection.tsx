import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import { LanguageContext } from '../../context/LanguageContext';
import { Sparkles, ArrowRight, Terminal } from 'lucide-react';

const CTASection: React.FC = () => {
    const { t } = useTranslation();
    const { language } = useContext(LanguageContext);

    return (
        <section className="py-20 bg-transparent relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="glass-panel rounded-[2.5rem] p-12 text-center relative overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-500 shadow-[0_0_50px_-12px_rgba(6,182,212,0.15)] group">
                    
                    {/* Futuristic HUD crosshair lines */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20h40M20 0v40' stroke='%2306B6D4' stroke-width='0.5'/%3E%3C/svg%3E")`,
                        backgroundSize: '40px 40px'
                    }}></div>

                    {/* Glowing Tech Orbs */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6">
                        <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
                        <span>{language === 'ar' ? 'ابدأ رحلة التميز الآن' : 'Initiate Transformation'}</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4 tracking-tight">
                        {t('home.cta.title', 'Ready to Transform Your Business?')}
                    </h2>
                    
                    <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                        {t('home.cta.subtitle', 'Let\'s discuss how our solutions can help you achieve your strategic objectives. Get a free consultation today.')}
                    </p>

                    <Link
                        to="/contact"
                        className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:from-cyan-400 hover:to-purple-500 text-white font-bold rounded-2xl shadow-xl shadow-primary/20 transition-all duration-300 transform hover:scale-[1.03] text-sm md:text-base"
                    >
                        <span>{t('home.cta.button', 'Request a Consultation')}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
