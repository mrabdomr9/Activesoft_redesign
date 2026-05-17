import React, { useState, useEffect, useContext } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { LanguageContext } from '../../context/LanguageContext';
import { ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
    const { t } = useTranslation();
    const { language } = useContext(LanguageContext);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = t('home.testimonials', { 
        title: 'What Our Clients Say', 
        subtitle: 'Real feedback from businesses we\'ve empowered.', 
        quotes: [] 
    });

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
        <section className="py-20 bg-transparent relative overflow-hidden">
            {/* Ambient background glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-secondary/5 rounded-full blur-[90px] pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Header */}
                <div className="text-center mb-16 animate-on-scroll">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold mb-6">
                        <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
                        <span>{language === 'ar' ? 'شركاء النجاح الحقيقيون' : 'Verified Partner Testimonials'}</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white font-display">
                        {testimonials?.title || t('home.testimonials.title', 'What Our Clients Say')}
                    </h2>
                    <p className="mt-4 text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        {testimonials?.subtitle || t('home.testimonials.subtitle', 'Real feedback from businesses we\'ve empowered.')}
                    </p>
                </div>

                {testimonials && testimonials.quotes && testimonials.quotes.length > 0 && (
                    <div className="max-w-4xl mx-auto">
                        <div className="glass-panel rounded-[2.5rem] p-8 md:p-12 relative border border-white/5 hover:border-primary/20 transition-all duration-500">
                            
                            {/* Giant Background Quote Icon */}
                            <Quote className="absolute top-8 right-8 w-24 h-24 text-primary/5 pointer-events-none" />

                            {/* Testimonial Content */}
                            {testimonials.quotes[currentTestimonial] && (
                                <div className="text-center animate-fade-in relative z-10">
                                    <div className="flex justify-center mb-6">
                                        <img
                                            src={testimonials.quotes[currentTestimonial].logo}
                                            alt={`${testimonials.quotes[currentTestimonial].name} - ${testimonials.quotes[currentTestimonial].company}`}
                                            className="h-20 w-20 rounded-full object-cover border border-primary/30 p-1.5 bg-[#070714]"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                            }}
                                            loading="lazy"
                                        />
                                    </div>

                                    <blockquote className="text-base md:text-xl text-gray-200 italic mb-6 leading-relaxed px-4 md:px-12">
                                        "{testimonials.quotes[currentTestimonial].quote}"
                                    </blockquote>

                                    <div className="font-bold text-white text-lg font-display">
                                        {testimonials.quotes[currentTestimonial].name}
                                    </div>
                                    <div className="text-xs font-semibold uppercase tracking-wider text-primary mt-1">
                                        {testimonials.quotes[currentTestimonial].company}
                                    </div>
                                </div>
                            )}

                            {/* Slide Actions */}
                            {testimonials.quotes.length > 1 && (
                                <div className="flex justify-between items-center mt-10 pt-6 border-t border-white/5">
                                    {/* Left Chevron */}
                                    <button
                                        onClick={prevTestimonial}
                                        className="p-3 rounded-xl bg-slate-900 border border-white/5 hover:border-primary/30 text-gray-400 hover:text-white transition-all duration-300"
                                        aria-label="Previous testimonial"
                                    >
                                        <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
                                    </button>

                                    {/* Dots Indicator */}
                                    <div className="flex gap-2">
                                        {testimonials.quotes.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentTestimonial(index)}
                                                className={`h-2 rounded-full transition-all duration-300 ${
                                                    index === currentTestimonial 
                                                        ? 'bg-primary w-6' 
                                                        : 'bg-gray-700 hover:bg-gray-600 w-2'
                                                }`}
                                                aria-label={`Go to testimonial ${index + 1}`}
                                            />
                                        ))}
                                    </div>

                                    {/* Right Chevron */}
                                    <button
                                        onClick={nextTestimonial}
                                        className="p-3 rounded-xl bg-slate-900 border border-white/5 hover:border-primary/30 text-gray-400 hover:text-white transition-all duration-300"
                                        aria-label="Next testimonial"
                                    >
                                        <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                                    </button>
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
export { TestimonialsSection };
