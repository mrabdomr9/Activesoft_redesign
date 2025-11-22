import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface Client {
    name: string;
    logo: string;
}

const ClientLogoSlider: React.FC = () => {
    const { t, language } = useTranslation();
    const clientList: Client[] = t('clients.clientList', []);
    const isRTL = language === 'ar';

    // Duplicate the client list for seamless infinite scroll
    const duplicatedClients = [...clientList, ...clientList];

    return (
        <section className="py-16 bg-transparent overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white font-display animate-on-scroll">
                        {t('clients.sliderTitle', 'Trusted by Industry Leaders')}
                    </h2>
                    <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                        {t('clients.sliderSubtitle', 'Partnering with leading companies to deliver exceptional results')}
                    </p>
                </div>

                {/* Logo Slider Container */}
                <div className="relative">
                    {/* Sliding Track */}
                    <div className="flex overflow-hidden">
                        <div className={`flex ${isRTL ? 'animate-slide-right' : 'animate-slide-left'}`}>
                            {duplicatedClients.map((client, index) => (
                                <div
                                    key={`${client.name}-${index}`}
                                    className="flex-shrink-0 mx-8 w-40 flex flex-col items-center justify-center"
                                >
                                    <div className="glass-panel p-4 rounded-lg hover:border-primary transition-all duration-300 hover:scale-110 w-full h-24 flex items-center justify-center mb-3">
                                        <img
                                            src={client.logo}
                                            alt={client.name}
                                            className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                                            loading="lazy"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                            }}
                                        />
                                    </div>
                                    <p className="text-gray-300 text-xs text-center font-medium line-clamp-2 w-full">
                                        {client.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* View All Clients Link */}
                <div className="text-center mt-8">
                    <a
                        href="/clients"
                        className="inline-flex items-center text-primary hover:text-secondary transition-colors font-semibold"
                    >
                        {t('clients.viewAll', 'View All Our Clients')}
                        <svg
                            className={`${isRTL ? 'mr-2 rotate-180' : 'ml-2'} h-5 w-5`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>
                </div>
            </div>

            <style>{`
        @keyframes slide-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes slide-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(50%);
          }
        }

        .animate-slide-left {
          animation: slide-left 40s linear infinite;
        }

        .animate-slide-right {
          animation: slide-right 40s linear infinite;
        }

        .animate-slide-left:hover,
        .animate-slide-right:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
};

export default ClientLogoSlider;
