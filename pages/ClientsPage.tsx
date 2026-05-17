import React, { useEffect, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Search, Award, ShieldCheck, Sparkles, Building2 } from 'lucide-react';

interface Client {
  name: string;
  logo: string;
}

const ClientsPage: React.FC = () => {
  const { t, language } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const title = t('seo.clients.title', 'Our Clients | Active Soft');
    const description = t('seo.clients.description', 'We are proud to partner with a diverse range of leading companies. See the clients who trust Active Soft for their technology solutions.');
    const keywords = t('seo.clients.keywords', 'Active Soft Clients, Our Partners, Client List, Technology Partnerships');

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

  const clientList: Client[] = t('clients.clientList', []);

  // Filter clients based on search input
  const filteredClients = clientList.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#070714] text-white">
      {/* Futuristic Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2.5s' }}></div>

        {/* Technical schematics */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h120v120H0z' fill='none'/%3E%3Cpath d='M0 60h24m24 0h12m24 0h36M60 0v24m0 24v12m0 24v36' stroke='%2306B6D4' stroke-width='1'/%3E%3Ccircle cx='24' cy='60' r='2' fill='%2306B6D4'/%3E%3Ccircle cx='60' cy='24' r='2' fill='%2306B6D4'/%3E%3Ccircle cx='60' cy='96' r='2' fill='%2306B6D4'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}></div>

        <div className="absolute top-1/3 right-1/4 opacity-10">
          <svg width="400" height="400" viewBox="0 0 100 100" className="animate-spin" style={{ animationDuration: '60s' }}>
            <circle cx="50" cy="50" r="45" stroke="#06B6D4" strokeWidth="0.2" fill="none" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="38" stroke="#3B82F6" strokeWidth="0.1" fill="none" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>{language === 'ar' ? 'شركاء النجاح الموثوق بهم' : 'Trusted Success Partners'}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient-x">
              {t('clients.title', 'Our Clients')}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('clients.subtitle', 'We are proud to partner with leading companies and support their digital transformation journey.')}
            </p>
          </div>

          {/* Search bar and analytics bar */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 mb-12 flex flex-col md:flex-row gap-6 items-center justify-between animate-on-scroll" style={{ transitionDelay: '150ms' }}>
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={language === 'ar' ? 'ابحث عن شريك نجاح...' : 'Search for a partner...'}
                className="w-full pl-12 pr-4 py-3 bg-slate-950/60 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>

            {/* Total Clients badge */}
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/5">
                <Building2 className="w-4 h-4 text-secondary" />
                <span>
                  {language === 'ar' ? `إجمالي الشركاء: ${clientList.length}` : `Total Partners: ${clientList.length}`}
                </span>
              </div>
              
              {searchTerm && (
                <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary">
                  <span>
                    {language === 'ar' ? `نتائج البحث: ${filteredClients.length}` : `Found: ${filteredClients.length}`}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Grid Layout of Clients */}
          {filteredClients.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-20">
              {filteredClients.map((client, index) => (
                <div
                  key={index}
                  className="group relative glass-panel p-6 rounded-2xl flex flex-col items-center justify-center aspect-square transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 animate-on-scroll"
                  style={{ transitionDelay: `${(index % 6) * 50 + 200}ms` }}
                >
                  {/* Subtle hover gradient circle */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-0"></div>

                  <div className="h-20 w-20 flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-95">
                    {client.logo ? (
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-h-full max-w-full object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                        loading="lazy"
                      />
                    ) : (
                      <Building2 className="w-12 h-12 text-gray-500 group-hover:text-primary transition-colors" />
                    )}
                  </div>

                  {/* Fully polished micro tooltip name overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-slate-950/90 backdrop-blur-sm border-t border-white/10 px-3 py-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl z-20 flex items-center justify-center">
                    <p className="text-white text-center font-bold text-[11px] leading-tight line-clamp-2">
                      {client.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 glass-panel rounded-3xl border border-white/5 max-w-lg mx-auto mb-20 animate-on-scroll">
              <Building2 className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                {language === 'ar' ? 'لا يوجد نتائج مطابقة' : 'No matches found'}
              </h3>
              <p className="text-gray-400">
                {language === 'ar' ? 'يرجى مراجعة كلمة البحث والمحاولة مرة أخرى.' : 'Please double check your spelling and try again.'}
              </p>
            </div>
          )}

          {/* Premium Bottom Info */}
          <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-secondary/20 relative overflow-hidden animate-on-scroll">
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl z-0"></div>
            <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold text-white font-display mb-4">
                  {language === 'ar' ? 'شراكات قوية.. تدعم ريادة المستقبل' : 'Robust Partnerships Supporting Future Leadership'}
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {language === 'ar'
                    ? 'نفخر في أكتيف سوفت بكوننا الشريك المعتمد والموثوق لخدمات التحول الرقمي وإدارة موارد المؤسسات لأكثر من 50 شركة رائدة في مختلف القطاعات الغذائية، الإنشائية، التجارية، والصناعية في مصر والشرق الأوسط.'
                    : 'At Active Soft, we are honored to be the trusted enterprise partner for digital transformation and ERP integrations for over 50 leading corporate clients across agricultural, logistics, retail, and manufacturing sectors.'}
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-primary/25 cursor-pointer">
                  <Award className="w-5 h-5" />
                  <span>{language === 'ar' ? 'عرض دراسات النجاح' : 'View Success Stories'}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ClientsPage;