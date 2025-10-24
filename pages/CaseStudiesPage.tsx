import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

// Define the shape of a case study from the translation file
interface CaseStudy {
  industryKey: string;
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
}

// Define the shape of filters from the translation file
type Filters = Record<string, string>;

const CaseStudiesPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const title = t('seo.caseStudies.title', 'Case Studies | Active Soft');
    const description = t('seo.caseStudies.description', 'Read our success stories and see how we\'ve helped businesses achieve remarkable results.');
    const keywords = t('seo.caseStudies.keywords', 'Success Stories, Client Results, Oracle ERP Case Study, Custom Software Projects, Active Soft');

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

  // Get data from translation files, casting since t() is typed to return string
  const pageTitle = t('caseStudies.title');
  const pageSubtitle = t('caseStudies.subtitle');
  const filters: Filters = t('caseStudies.filters') as any;
  const studies: CaseStudy[] = t('caseStudies.studies') as any;

  const [activeFilterKey, setActiveFilterKey] = useState<string>('all');

  const filteredStudies = activeFilterKey === 'all'
    ? studies
    : studies.filter(cs => cs.industryKey === activeFilterKey);

  return (
    <div className="bg-transparent py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white font-display animate-on-scroll">{pageTitle}</h1>
          <p className="mt-4 text-lg text-gray-300 animate-on-scroll" style={{ transitionDelay: '100ms' }}>{pageSubtitle}</p>
        </div>
        <div className="flex justify-center flex-wrap gap-2 mb-12 animate-on-scroll" style={{ transitionDelay: '200ms' }}>
          {Object.entries(filters).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setActiveFilterKey(key)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${activeFilterKey === key ? 'bg-primary text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}
            >
              {value}
            </button>
          ))}
        </div>
        <div className="space-y-12">
          {filteredStudies.map((study, index) => (
            <div key={index} className="glass-panel rounded-xl overflow-hidden md:flex animate-on-scroll">
              <div className="md:w-1/3">
                 <img src={study.image} alt={study.title} className="h-full w-full object-cover"/>
              </div>
              <div className="p-8 md:w-2/3">
                <p className="text-sm font-semibold text-secondary uppercase font-display tracking-widest">{study.industry}</p>
                <h2 className="text-2xl font-bold text-white mt-2 mb-4 font-display">{study.title}</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-gray-200">The Challenge:</h3>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>
                   <div>
                    <h3 className="font-bold text-gray-200">The Solution:</h3>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                   <div>
                    <h3 className="font-bold text-accent">The Result:</h3>
                    <p className="text-gray-200 font-semibold">{study.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;