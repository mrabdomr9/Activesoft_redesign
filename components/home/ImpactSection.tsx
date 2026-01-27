import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';

const ImpactSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="py-20 bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white font-display animate-on-scroll">{t('home.impact.title', 'Our Impact in Numbers')}</h2>
                    <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto animate-on-scroll" style={{ transitionDelay: '100ms' }}>{t('home.impact.subtitle', 'We are proud of our achievements and the value we deliver to our clients.')}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="glass-panel p-8 rounded-xl text-center animate-on-scroll hover:border-primary/50 transition-all duration-300 hover:-translate-y-2" style={{ transitionDelay: '200ms' }}>
                        <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 text-primary mb-6">
                            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <p className="text-5xl font-bold text-primary font-display mb-2">{t('home.impact.experienceVal', '15+')}</p>
                        <p className="text-lg text-gray-200">{t('home.impact.experience', 'Years of Experience')}</p>
                    </div>
                    <div className="glass-panel p-8 rounded-xl text-center animate-on-scroll hover:border-secondary/50 transition-all duration-300 hover:-translate-y-2" style={{ transitionDelay: '300ms' }}>
                        <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-secondary/10 text-secondary mb-6">
                            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <p className="text-5xl font-bold text-secondary font-display mb-2">{t('home.impact.applicationsVal', '500+')}</p>
                        <p className="text-lg text-gray-200">{t('home.impact.applications', 'Applications Delivered')}</p>
                    </div>
                    <div className="glass-panel p-8 rounded-xl text-center animate-on-scroll hover:border-primary/50 transition-all duration-300 hover:-translate-y-2" style={{ transitionDelay: '400ms' }}>
                        <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 text-primary mb-6">
                            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                            </svg>
                        </div>
                        <p className="text-5xl font-bold text-primary font-display mb-2">{t('home.impact.satisfactionVal', '98%')}</p>
                        <p className="text-lg text-gray-200">{t('home.impact.satisfaction', 'Client Satisfaction')}</p>
                        <div className="mt-4">
                            <Link to="/clients" className="text-sm text-primary hover:text-secondary transition-colors">
                                {t('home.viewClients', 'View Our Clients')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;
