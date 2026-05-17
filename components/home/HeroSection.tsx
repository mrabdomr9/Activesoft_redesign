import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import { LanguageContext } from '../../context/LanguageContext';
import { Sparkles, ArrowRight, Compass, Shield, Database, Cpu } from 'lucide-react';

const HeroSection: React.FC = () => {
    const { t } = useTranslation();
    const { language } = useContext(LanguageContext);

    return (
        <section className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden -mt-20 pt-24 pb-12">
            {/* Dynamic Dark Tech Background */}
            <div className="absolute inset-0 bg-[#04040d] z-0"></div>

            {/* Glowing Tech Orbs */}
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: '2.5s' }}></div>

            {/* Futuristic Animated Grid Overlay */}
            <div
                className="absolute inset-0 opacity-[0.06] z-0 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.15) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)',
                    transform: 'perspective(600px) rotateX(15deg)',
                    transformOrigin: 'top center'
                }}
            ></div>

            {/* Technical HUD lines */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h120v120H0z' fill='none'/%3E%3Cpath d='M0 60h24m24 0h12m24 0h36M60 0v24m0 24v12m0 24v36' stroke='%2306B6D4' stroke-width='1'/%3E%3Ccircle cx='24' cy='60' r='2' fill='%2306B6D4'/%3E%3Ccircle cx='60' cy='24' r='2' fill='%2306B6D4'/%3E%3C/svg%3E")`,
                backgroundSize: '120px 120px'
            }}></div>

            {/* Content Container */}
            <div className="relative z-10 max-w-5xl mx-auto w-full">
                
                {/* Tech Badge */}
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/10 backdrop-blur-md animate-fade-in-down">
                    <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                    <span className="text-primary text-xs font-bold tracking-wider uppercase">
                        {t('home.hero.badge', 'Next Gen ERP Solutions')}
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white font-display leading-tight mb-6 tracking-tight animate-fade-in-up">
                    {t('home.hero.titleStart', 'Empowering Your Business with')}
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-purple-400 mt-2 animate-gradient-x">
                        {t('home.hero.titleHighlight', 'Innovative Technology')}
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
                    {t('home.hero.subtitle', 'We deliver cutting-edge Oracle ERP solutions, managed IT services, and custom software to help you achieve your strategic goals with precision and efficiency.')}
                </p>

                {/* CTA Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up">
                    <Link
                        to="/services"
                        className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-2xl shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden text-sm md:text-base"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            <span>{t('home.hero.ctaPrimary', 'Explore Our Services')}</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>

                    <Link
                        to="/contact"
                        className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-0.5 text-sm md:text-base"
                    >
                        <span>
                            {t('home.hero.ctaSecondary', 'Get in Touch')}
                        </span>
                    </Link>
                </div>

                {/* Dashboard Stats */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/5 pt-10">
                    {[
                        { val: '15+', label: language === 'ar' ? 'عام من الخبرة' : 'Years Experience' },
                        { val: '500+', label: language === 'ar' ? 'تطبيق تم نشره' : 'Projects Done' },
                        { val: '98%', label: language === 'ar' ? 'نسبة رضا العملاء' : 'Client Satisfaction' },
                        { val: '24/7', label: language === 'ar' ? 'دعم فني مستمر' : 'Support SLA' }
                    ].map((stat, idx) => (
                        <div key={idx} className="glass-panel p-5 rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-300">
                          <p className="text-2xl md:text-3xl font-bold text-primary font-display font-mono">
                            {stat.val}
                          </p>
                          <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider mt-1">
                            {stat.label}
                          </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
export { HeroSection };
