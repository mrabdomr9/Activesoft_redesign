import React, { useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface TeamMember {
  name: string;
  role: string;
  certification: string;
  image: string;
  linkedin: string;
}

const AboutUsPage: React.FC = () => {
  const { t } = useTranslation();

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
  
  const teamMembers: TeamMember[] = t('about.team', []);

  return (
    <>
      <section className="bg-transparent pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white font-display animate-on-scroll">{t('about.title')}</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto animate-on-scroll" style={{ transitionDelay: '100ms' }}>{t('about.subtitle')}</p>
        </div>
      </section>
      
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white font-display animate-on-scroll">{t('about.teamTitle')}</h2>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto animate-on-scroll" style={{ transitionDelay: '100ms' }}>
              {t('about.teamSubtitle', 'Our strength lies in our people. Meet some of the dedicated professionals who bring a wealth of experience and certified expertise to every project, ensuring we deliver nothing but the best.')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="text-center glass-panel p-6 rounded-xl animate-on-scroll flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-primary" style={{ transitionDelay: `${100 * (index + 2)}ms` }}>
                <div className="flex-grow">
                  <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-secondary" />
                  <h3 className="text-xl font-bold text-white font-display">{member.name}</h3>
                  <p className="text-primary font-semibold">{member.role}</p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm text-gray-300">{member.certification}</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-primary transition-colors" 
                    aria-label={`LinkedIn profile of ${member.name}`}
                  >
                    <svg className="h-6 w-6 mx-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;