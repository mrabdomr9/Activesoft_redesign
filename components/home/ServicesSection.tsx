import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';

const ServicesSection: React.FC = () => {
    const { t } = useTranslation();

    const features = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" /></svg>,
            title: t('services.erpTitle', 'Oracle ERP Solutions'),
            description: t('home.features.erpDesc', 'Streamline your operations with our expert Oracle ERP implementation and support.'),
            link: '/services#erp',
            color: 'from-secondary to-primary'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 18.75V16.5M16.5 3.75V16.5M12 12.75h4.5m-4.5 3H12M10.5 21l-1.5-1.5L7.5 21l-1.5-1.5L4.5 21l-1.5-1.5L1.5 21M21 3.75v.75m0 0h-4.5m4.5 0l-1.5 1.5M3.75 3.75h.75m0 0V3m0 0L3 3.75M3.75 21v-4.5m0 4.5h.75m0 0l-1.5-1.5M16.5 3.75l-1.5 1.5M21 3.75L19.5 5.25" /></svg>,
            title: t('services.itSupportTitle', 'Managed IT Services'),
            description: t('home.features.itSupportDesc', 'Reliable, proactive managed IT services to keep your systems running smoothly 24/7.'),
            link: '/services#it-support',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-1.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg>,
            title: t('services.customAppsTitle', 'Custom Software'),
            description: t('home.features.customAppsDesc', 'Bespoke desktop and web applications tailored to your unique business needs and workflows.'),
            link: '/services#custom-dev',
            color: 'from-primary to-teal-400'
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white font-display mb-6 animate-on-scroll">
                        {t('home.services.title', 'Our Core Solutions')}
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                        {t('home.services.subtitle', 'Providing comprehensive services to meet the demands of modern business.')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-primary/50 hover:to-secondary/50 transition-all duration-500 animate-on-scroll"
                            style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative h-full bg-[#0f172a]/90 backdrop-blur-xl p-8 rounded-xl border border-white/5 group-hover:border-white/10 transition-colors flex flex-col">
                                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${feature.color} p-0.5 mb-8 transform group-hover:scale-110 transition-transform duration-300`}>
                                    <div className="w-full h-full bg-[#0f172a] rounded-[7px] flex items-center justify-center text-white">
                                        {feature.icon}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 font-display group-hover:text-primary transition-colors">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-400 mb-8 flex-grow leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {feature.description}
                                </p>

                                <div className="mt-auto">
                                    <Link
                                        to={feature.link}
                                        className="inline-flex items-center text-primary font-semibold group-hover:text-cyan-300 transition-colors"
                                    >
                                        <span>{t('home.learnMore', 'Learn More')}</span>
                                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link to="/portfolio" className="inline-flex items-center px-6 py-3 border border-white/10 rounded-full text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300">
                        <span>{t('home.viewPortfolio', 'View Our Work')}</span>
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
