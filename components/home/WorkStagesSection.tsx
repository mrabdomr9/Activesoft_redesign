import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';

const WorkStagesSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="py-20 bg-transparent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white font-display animate-on-scroll">{t('workStages.title', 'Work Stages')}</h2>
                    <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                        {t('workStages.slogan', 'Smart planning is one of the most important factors of distinction and success')}
                    </p>
                    <div className="mt-4">
                        <Link to="/about" className="text-sm text-primary hover:text-secondary transition-colors">
                            {t('home.meetOurTeam', 'Meet Our Team')}
                        </Link>
                    </div>
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="glass-panel p-8 rounded-xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[0, 1, 2, 3].map((index) => (
                                <div key={index} className="flex animate-on-scroll" style={{ transitionDelay: `${(index + 1) * 100}ms` }}>
                                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary/80 text-white mr-4 shadow-lg shadow-primary/20">
                                        {index === 0 && (
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2" />
                                            </svg>
                                        )}
                                        {index === 1 && (
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        )}
                                        {index === 2 && (
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c-.94 1.543-.826 3.31-2.37 2.37.996.608 2.296.07 2.572-1.065z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        )}
                                        {index === 3 && (
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">{t(`workStages.stages.${index}`, `Work stage ${index + 1}`)}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkStagesSection;
