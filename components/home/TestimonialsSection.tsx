import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../hooks/useTranslation';

const TestimonialsSection: React.FC = () => {
    const { t, language } = useTranslation();
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = t('home.testimonials', { title: 'What Our Clients Say', subtitle: 'Real feedback from businesses we\'ve empowered.', quotes: [] });

    // Reset current testimonial index when testimonials or language change
    useEffect(() => {
        setCurrentTestimonial(0);
    }, [testimonials, language]);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (testimonials && testimonials.quotes && testimonials.quotes.length > 1) {
            timer = setTimeout(() => {
                if (language === 'ar') {
                    setCurrentTestimonial((prevIndex) => (prevIndex - 1 + testimonials.quotes.length) % testimonials.quotes.length);
                } else {
                    setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.quotes.length);
                }
            }, 7000); // Change testimonial every 7 seconds
        }
        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [currentTestimonial, testimonials, language]);

    const nextTestimonial = () => {
        if (language === 'ar') {
            setCurrentTestimonial((prevIndex) => (prevIndex - 1 + testimonials.quotes.length) % testimonials.quotes.length);
        } else {
            setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.quotes.length);
        }
    };

    const prevTestimonial = () => {
        if (language === 'ar') {
            setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.quotes.length);
        } else {
            setCurrentTestimonial((prevIndex) => (prevIndex - 1 + testimonials.quotes.length) % testimonials.quotes.length);
        }
    };

    return (
        <section className="py-20 bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white font-display animate-on-scroll">
                        {testimonials?.title || t('home.testimonials.title', 'What Our Clients Say')}
                    </h2>
                    <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                        {testimonials?.subtitle || t('home.testimonials.subtitle', 'Real feedback from businesses we\'ve empowered.')}
                    </p>
                </div>

                {testimonials && testimonials.quotes && testimonials.quotes.length > 0 && (
                    <div className="max-w-4xl mx-auto">
                        <div className="glass-panel rounded-xl p-8 relative">
                            {/* Navigation Arrows */}
                            {testimonials.quotes.length > 1 && (
                                <>
                                    <button
                                        onClick={prevTestimonial}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/20 hover:bg-primary/40 text-white rounded-full p-2 transition-colors z-10"
                                        aria-label="Previous testimonial"
                                    >
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={nextTestimonial}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/20 hover:bg-primary/40 text-white rounded-full p-2 transition-colors z-10"
                                        aria-label="Next testimonial"
                                    >
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </>
                            )}

                            {/* Testimonial Content */}
                            {testimonials.quotes[currentTestimonial] && (
                                <div className="text-center animate-fade-in">
                                    <div className="flex justify-center mb-6">
                                        <img
                                            src={testimonials.quotes[currentTestimonial].logo}
                                            alt={`${testimonials.quotes[currentTestimonial].name} - ${testimonials.quotes[currentTestimonial].company} - ${t('home.testimonials.title')}`}
                                            className="h-16 w-16 rounded-full object-cover border-2 border-primary/50"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                            }}
                                        />
                                    </div>
                                    <blockquote className="text-xl text-gray-300 italic mb-6 relative px-8">
                                        <span className="text-4xl text-primary/30 absolute top-[-10px] left-0">"</span>
                                        {testimonials.quotes[currentTestimonial].quote}
                                        <span className="text-4xl text-primary/30 absolute bottom-[-20px] right-0">"</span>
                                    </blockquote>
                                    <div className="font-semibold text-white text-lg">
                                        {testimonials.quotes[currentTestimonial].name}
                                    </div>
                                    <div className="text-cyan-400 text-sm">
                                        {testimonials.quotes[currentTestimonial].company}
                                    </div>
                                </div>
                            )}

                            {/* Dots Indicator */}
                            {testimonials.quotes.length > 1 && (
                                <div className="flex justify-center mt-8 space-x-2">
                                    {testimonials.quotes.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentTestimonial(index)}
                                            className={`h-2 w-2 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-cyan-400 w-6' : 'bg-gray-600 hover:bg-gray-500'}`}
                                            aria-label={`Go to testimonial ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default TestimonialsSection;
