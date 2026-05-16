import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import ServiceDetailLayout from '../components/ServiceDetailLayout';

const HRPayrollPage: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    t('services.hrPayroll.features.feature1'),
    t('services.hrPayroll.features.feature2'),
    t('services.hrPayroll.features.feature3'),
    t('services.hrPayroll.features.feature4'),
  ];

  const workflowSteps = [
    { num: '01', text: t('services.hrPayroll.howItChangesWork.point1') },
    { num: '02', text: t('services.hrPayroll.howItChangesWork.point2') },
    { num: '03', text: t('services.hrPayroll.howItChangesWork.point3') },
    { num: '04', text: t('services.hrPayroll.howItChangesWork.point4') },
  ];

  return (
    <ServiceDetailLayout
      title={t('services.hrPayroll.title')}
      subtitle={t('services.hrPayroll.desc')}
      seoTitle={t('seo.hr.title', 'HR & Payroll System Egypt | ActiveSoft')}
      seoDescription={t('seo.hr.description', 'Manage employee data, documents, and payroll with our integrated HR system. Compliance with Egyptian labor and tax laws.')}
      seoKeywords={t('seo.hr.keywords', 'HR System Egypt, Payroll Software, Employee Management System, ActiveSoft HR')}
      currentPath="/hr-payroll"
    >
      {/* Key Features Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">{t('services.hrPayroll.featuresTitle')}</h2>
            <div className="w-24 h-1.5 bg-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-slate-50 rounded-[2.5rem] hover:bg-white hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 border border-transparent hover:border-cyan-100 animate-on-scroll"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start space-x-6 rtl:space-x-reverse">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg text-slate-700 leading-relaxed font-medium">
                    {feature}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Transformation */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {t('services.hrPayroll.howItChangesWork.title')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t('services.hrPayroll.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {workflowSteps.map((step, index) => (
              <div
                key={index}
                className="relative p-10 bg-white/5 backdrop-blur-sm rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all duration-500 animate-on-scroll group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center text-2xl font-black text-white shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                  {step.num}
                </div>
                <div className="pt-4">
                  <p className="text-xl text-gray-200 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </ServiceDetailLayout>
  );
};

export default HRPayrollPage;
