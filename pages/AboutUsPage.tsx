import React, { useEffect, useContext } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { LanguageContext } from '../context/LanguageContext';
import { 
  Sparkles, 
  Award, 
  Cpu, 
  ShieldCheck, 
  Flame, 
  Zap, 
  Users,
  Target,
  Compass
} from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  certification: string;
  image: string;
  linkedin: string;
}

const AboutUsPage: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const title = t('seo.about.title', 'About Us | Active Soft');
    const description = t('seo.about.description', 'Learn about Active Soft, our expert team, and our 15+ years of experience.');
    const keywords = t('seo.about.keywords', 'About Active Soft, Expert Team, Oracle Consultants, Technology Partner, Company Profile');

    if (title) document.title = title;

    const setMetaTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    if (description) setMetaTag('description', description);
    if (keywords) setMetaTag('keywords', keywords);
  }, [t]);

  // Premium realistic default fallback values to ensure team members NEVER disappear on language transition
  const defaultTeam: TeamMember[] = [
    {
      name: language === 'ar' ? 'إبراهيم علي الليثي' : 'Ibraheem Ali Ellithy',
      role: language === 'ar' ? 'مستشار أنظمة ERP رائد' : 'Lead Oracle Consultant',
      certification: language === 'ar' ? 'مستشار نظم معتمد' : 'Oracle Certified Professional',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop',
      linkedin: '#'
    },
    {
      name: language === 'ar' ? 'عبد الله يسري' : 'Abdu-Allah Yousrie',
      role: language === 'ar' ? 'مهندس برمجيات أول' : 'Senior Software Engineer',
      certification: language === 'ar' ? 'مطور نظم معتمد' : 'Oracle Certified Professional',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop',
      linkedin: '#'
    },
    {
      name: language === 'ar' ? 'مصطفى أمين' : 'Mostafa Amin',
      role: language === 'ar' ? 'مطور ويب متكامل (Full Stack)' : 'Full Stack & Cloud Consultant',
      certification: language === 'ar' ? 'خبير التحول الرقمي' : 'Digital Transformation Expert',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop',
      linkedin: '#'
    },
    {
      name: language === 'ar' ? 'محمد الصواف' : 'Mohamed Elsawaf',
      role: language === 'ar' ? 'مدير الأنظمة والشبكات' : 'System & Network Administrator',
      certification: language === 'ar' ? 'مدير أنظمة و شبكات' : 'Manager of Systems and Networks',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
      linkedin: '#'
    }
  ];

  const teamMembers: TeamMember[] = t('about.team', defaultTeam);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#070714] text-white">
      {/* Schematic Background Graphics */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-secondary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* HUD schematics */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h120v120H0z' fill='none'/%3E%3Cpath d='M0 60h24m24 0h12m24 0h36M60 0v24m0 24v12m0 24v36' stroke='%2306B6D4' stroke-width='1'/%3E%3Ccircle cx='24' cy='60' r='2' fill='%2306B6D4'/%3E%3Ccircle cx='60' cy='24' r='2' fill='%2306B6D4'/%3E%3Ccircle cx='60' cy='96' r='2' fill='%2306B6D4'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20 animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              <span>{language === 'ar' ? 'تعرف على قادة التميز التقني' : 'Discover the Leaders of Technical Excellence'}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient-x">
              {t('about.title', 'About Active Soft')}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('about.subtitle', 'Empowering enterprises through robust, highly integrated ERP solutions and cutting-edge software engineering.')}
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 animate-on-scroll">
            {[
              { label: language === 'ar' ? 'سنة من الخبرة' : 'Years of Experience', value: '15+' },
              { label: language === 'ar' ? 'تطبيق حي تم نشره' : 'Live Apps Deployed', value: '500+' },
              { label: language === 'ar' ? 'نسبة رضا العملاء' : 'Client Satisfaction', value: '98%' },
              { label: language === 'ar' ? 'مستشار ERP معتمد' : 'Certified Consultants', value: '100%' },
            ].map((stat, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 text-center group">
                <p className="text-3xl md:text-4xl font-bold text-primary font-display group-hover:scale-105 transition-transform duration-300 mb-2">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Corporate Core Values */}
          <div className="mb-24 animate-on-scroll">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-center text-white mb-12">
              {language === 'ar' ? 'قيمنا المؤسسية الراسخة' : 'Our Corporate Values'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: language === 'ar' ? 'الابتكار والريادة' : 'Innovation & Leadership',
                  desc: language === 'ar' ? 'نسعى لتطوير برمجيات وحلول متقدمة تواكب مستقبل التكنولوجيا لتسهيل وتوجيه كفاءة الأعمال.' : 'Developing cutting-edge software architectures that keep your business ahead of the competition.',
                  icon: Cpu
                },
                {
                  title: language === 'ar' ? 'الموثوقية والسرعة' : 'Reliability & Speed',
                  desc: language === 'ar' ? 'أنظمة أكتيف سوفت مبنية على قواعد بيانات آمنة 100% تعمل على مدار الساعة لضمان استقرار العمليات.' : 'Active Soft systems are built on high-performance structures ensuring round-the-clock stability.',
                  icon: ShieldCheck
                },
                {
                  title: language === 'ar' ? 'التركيز على العميل' : 'Client Focus',
                  desc: language === 'ar' ? 'نصمم الأنظمة ونعدلها خصيصاً لتناسب دوراتك المستندية وحسابات التكلفة الحقيقية لشركتك.' : 'We customize solutions precisely around your company workflow and document cycles.',
                  icon: Target
                }
              ].map((value, idx) => (
                <div key={idx} className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-primary/40 transition-all duration-300 flex flex-col items-start">
                  <div className="p-3.5 rounded-2xl bg-primary/10 text-primary border border-primary/20 mb-6">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-display">{value.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Expert Team Section */}
          <section className="mb-12 animate-on-scroll">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-display bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                {t('about.teamTitle', 'Our Certified Experts')}
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                {t('about.teamSubtitle', 'Meet our dedicated engineers and Oracle ERP consultants bringing years of practical and industrial experience.')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="glass-panel p-6 rounded-3xl border border-white/5 hover:border-primary/50 transition-all duration-500 flex flex-col justify-between items-center text-center group hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/5"
                >
                  <div className="w-full">
                    {/* User profile image with cyan glow circle */}
                    <div className="w-32 h-32 rounded-full mx-auto mb-6 relative overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/60 transition-all duration-500">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        loading="lazy"
                      />
                    </div>

                    <h3 className="text-lg font-bold text-white font-display mb-1 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    
                    <p className="text-xs font-semibold text-secondary mb-4 uppercase tracking-wide">
                      {member.role}
                    </p>

                    {/* Certification badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-white/5 text-gray-300 text-xs mb-6">
                      <Award className="w-3.5 h-3.5 text-primary" />
                      <span>{member.certification}</span>
                    </div>
                  </div>

                  {/* LinkedIn link footer */}
                  <div className="w-full pt-4 border-t border-white/5 flex justify-center">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-900 hover:bg-primary/20 text-gray-400 hover:text-white transition-all duration-300 border border-white/5 hover:border-primary/30"
                      aria-label={`LinkedIn profile of ${member.name}`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;