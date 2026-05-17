import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import { LanguageContext } from '../../context/LanguageContext';
import { Database, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';

const ServicesSection: React.FC = () => {
    const { t } = useTranslation();
    const { language } = useContext(LanguageContext);

    const features = [
        {
            icon: <Database className="h-6 w-6 text-primary" />,
            title: t('services.erpTitle', 'Oracle ERP Solutions'),
            description: t('home.features.erpDesc', 'Streamline your operations with our expert Oracle ERP implementation and support.'),
            link: '/services#erp',
            color: 'from-secondary to-primary'
        },
        {
            icon: <ShieldCheck className="h-6 w-6 text-primary" />,
            title: t('services.itSupportTitle', 'Managed IT Services'),
            description: t('home.features.itSupportDesc', 'Reliable, proactive managed IT services to keep your systems running smoothly 24/7.'),
            link: '/services#it-support',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: <Cpu className="h-6 w-6 text-primary" />,
            title: t('services.customAppsTitle', 'Custom Software'),
            description: t('home.features.customAppsDesc', 'Bespoke desktop and web applications tailored to your unique business needs and workflows.'),
            link: '/services#custom-dev',
            color: 'from-primary to-teal-400'
        }
    ];

    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute top-0 right-[-10%] w-[450px] h-[450px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-[-10%] w-[450px] h-[450px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Header */}
                <div className="text-center mb-16 animate-on-scroll">
                    <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">
                        {t('home.services.title', 'Our Core Solutions')}
                    </h2>
                    <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        {t('home.services.subtitle', 'Providing comprehensive services to meet the demands of modern business.')}
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative p-[1px] rounded-3xl bg-white/5 hover:bg-gradient-to-br hover:from-primary/40 hover:to-secondary/40 transition-all duration-500 animate-on-scroll"
                            style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                        >
                            <div className="relative h-full bg-slate-950/90 backdrop-blur-2xl p-8 rounded-[23px] flex flex-col justify-between items-stretch">
                                <div>
                                    {/* Icon */}
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-display group-hover:text-primary transition-colors">
                                        {feature.title}
                                    </h3>

                                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed mb-6">
                                        {feature.description}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-white/5">
                                    <Link
                                        to={feature.link}
                                        className="group/link inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-white transition-colors"
                                    >
                                        <span>{t('home.learnMore', 'Learn More')}</span>
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 rtl:group-hover/link:-translate-x-0.5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Portfolio CTA */}
                <div className="mt-16 text-center animate-on-scroll">
                    <Link 
                        to="/portfolio" 
                        className="group inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-primary/30 rounded-full text-xs font-bold text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300"
                    >
                        <span>{t('home.viewPortfolio', 'View Our Work')}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;
export { ServicesSection };
