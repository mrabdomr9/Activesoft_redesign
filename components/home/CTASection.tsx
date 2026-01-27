import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';

const CTASection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="py-20 bg-transparent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="glass-panel rounded-xl p-12 text-center relative overflow-hidden border border-primary/30 shadow-[0_0_50px_-12px_rgba(6,182,212,0.3)]">
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>

                    <h2 className="text-3xl font-bold text-white font-display mb-4">
                        {t('home.cta.title', 'Ready to Transform Your Business?')}
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                        {t('home.cta.subtitle', 'Let\'s discuss how our solutions can help you achieve your strategic objectives. Get a free consultation today.')}
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:from-cyan-400 hover:to-purple-500 text-white font-bold rounded-full shadow-lg shadow-primary/30 transition-all duration-300 transform hover:scale-105"
                    >
                        {t('home.cta.button', 'Request a Consultation')}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
