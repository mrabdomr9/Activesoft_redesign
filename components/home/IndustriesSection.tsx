import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';

const IndustriesSection: React.FC = () => {
    const { t } = useTranslation();

    const industriesData = [
        {
            key: 'manufacturing',
            image: "https://images.unsplash.com/photo-1610891015188-5369212db097?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1529",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
        },
        {
            key: 'healthcare',
            image: "https://images.unsplash.com/photo-1651525669944-00de65d3b8a5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
        },
        {
            key: 'financial',
            image: "https://images.unsplash.com/photo-1758691736545-5c33b6255dca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
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
