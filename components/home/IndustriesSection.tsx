import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import { LanguageContext } from '../../context/LanguageContext';
import { ArrowRight, Leaf, Building2, Apple } from 'lucide-react';

const IndustriesSection: React.FC = () => {
    const { t } = useTranslation();
    const { language } = useContext(LanguageContext);

    const industriesData = [
        {
            key: 'agriExport',
            image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=800&auto=format&fit=crop",
            icon: <Leaf className="h-6 w-6 text-primary" />
        },
        {
            key: 'concreteCement',
            image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=800&auto=format&fit=crop",
            icon: <Building2 className="h-6 w-6 text-primary" />
        },
        {
            key: 'foodProduction',
            image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop",
            icon: <Apple className="h-6 w-6 text-primary" />
        }
    ];

    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[90px] animate-pulse"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Header */}
                <div className="text-center mb-16 animate-on-scroll">
                    <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">
                        {t('industries.title', 'Tailored Solutions for Your Industry')}
                    </h2>
                    <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        {t('industries.subtitle', 'We understand the unique challenges of your sector and deliver targeted solutions.')}
                    </p>
                </div>

                {/* Industries Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {industriesData.map((industry, index) => (
                        <div
                            key={industry.key}
                            className="group relative h-[480px] rounded-3xl overflow-hidden cursor-pointer animate-on-scroll border border-white/5 hover:border-primary/45 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={industry.image}
                                    alt={t(`industries.${industry.key}.name`)}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#070714] via-[#070714]/80 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>
                            </div>

                            {/* Content Overlays */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                                    
                                    {/* Icon Panel */}
                                    <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {industry.icon}
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-display group-hover:text-primary transition-colors">
                                        {t(`industries.${industry.key}.name`)}
                                    </h3>

                                    {/* Collapsed Description */}
                                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                                        <p className="text-gray-300 text-xs md:text-sm mb-5 mt-2 leading-relaxed">
                                            {t(`industries.${industry.key}.solution`)}
                                        </p>
                                        
                                        <Link
                                            to="/industries"
                                            className="group/btn inline-flex items-center gap-1.5 text-primary text-xs font-bold hover:text-white transition-colors"
                                        >
                                            <span>{t('home.learnMore', 'Learn More')}</span>
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 rtl:group-hover/btn:-translate-x-0.5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;
export { IndustriesSection };
