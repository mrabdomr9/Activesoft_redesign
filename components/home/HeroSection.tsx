import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';

const HeroSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden -mt-20 pt-20">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] z-0"></div>

            {/* Animated Grid Overlay */}
            <div
                className="absolute inset-0 opacity-20 z-0"
                style={{
                    backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
                    transform: 'perspective(500px) rotateX(20deg)',
                    transformOrigin: 'top center'
                }}
            ></div>

            {/* Glowing Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>

            {/* Content Container */}
            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Badge */}
                <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md animate-fade-in-down">
                    <span className="text-primary text-sm font-semibold tracking-wide uppercase">
                        {t('home.hero.badge', 'Next Gen ERP Solutions')}
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-7xl font-bold text-white font-display leading-tight mb-6 tracking-tight animate-fade-in-up">
                    {t('home.hero.titleStart', 'Empowering Your Business with')}
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-purple-400 mt-2">
                        {t('home.hero.titleHighlight', 'Innovative Technology')}
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
                    {t('home.hero.subtitle', 'We deliver cutting-edge Oracle ERP solutions, managed IT services, and custom software to help you achieve your strategic goals with precision and efficiency.')}
                </p>

                {/* CTA Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up animation-delay-400">
                    <Link
                        to="/services"
                        className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center justify-center">
                            {t('home.hero.ctaPrimary', 'Explore Our Services')}
                            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>

                    <Link
                        to="/contact"
                        className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <span className="flex items-center justify-center">
                            {t('home.hero.ctaSecondary', 'Get in Touch')}
                        </span>
                    </Link>
                </div>

                {/* Stats / Trust Indicators */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8 animate-fade-in-up animation-delay-400">
                    <div>
                        <p className="text-3xl font-bold text-white">15+</p>
                        <p className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-white">500+</p>
                        <p className="text-sm text-gray-400 uppercase tracking-wider">Projects Done</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-white">98%</p>
                        <p className="text-sm text-gray-400 uppercase tracking-wider">Client Satisfaction</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-white">24/7</p>
                        <p className="text-sm text-gray-400 uppercase tracking-wider">Support</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
