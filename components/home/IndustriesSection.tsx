import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';

const IndustriesSection: React.FC = () => {
    const { t } = useTranslation();

    const industriesData = [
        {
            key: 'agriExport',
            image: "https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?q=80&w=1500&auto=format&fit=crop",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
        },
        {
            key: 'concreteCement',
            image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1470&auto=format&fit=crop",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
        },
        {
            key: 'foodProduction',
            image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1331&auto=format&fit=crop",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.703 2.703 0 00-3 0 2.704 2.704 0 01-3 0 2.703 2.703 0 00-3 0 2.704 2.704 0 01-1.5-.454M3 8V4a2 2 0 012-2h14a2 2 0 012 2v4M3 8v6c0 2.757 2.243 5 5 5s5-2.243 5-5v-6M3 8a2 2 0 012-2h14a2 2 0 012 2v2M17 16v2a2 2 0 01-2 2H9a2 2 0 01-2-2v-2m10 0a2 2 0 002-2v-3a2 2 0 00-2-2H7a2 2 0 00-2 2v3a2 2 0 002 2" /></svg>
        }
    ];

    return (
        <section className="py-24 bg-dark relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white font-display mb-4 animate-on-scroll">
                        {t('industries.title', 'Tailored Solutions for Your Industry')}
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                        {t('industries.subtitle', 'We understand the unique challenges of your sector and deliver targeted solutions.')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {industriesData.map((industry, index) => (
                        <div
                            key={industry.key}
                            className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer animate-on-scroll"
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={industry.image}
                                    alt={t(`industries.${industry.key}.name`)}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {industry.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-2 font-display">
                                        {t(`industries.${industry.key}.name`)}
                                    </h3>

                                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                                        <p className="text-gray-300 text-sm mb-4 mt-2">
                                            {t(`industries.${industry.key}.solution`)}
                                        </p>
                                        <Link
                                            to="/industries"
                                            className="inline-flex items-center text-primary text-sm font-bold hover:text-white transition-colors"
                                        >
                                            {t('home.learnMore', 'Learn More')}
                                            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Border Gradient */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-2xl transition-colors duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;
