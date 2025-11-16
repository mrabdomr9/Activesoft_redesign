import React, { useContext, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import ScrollToTopButton from './components/ScrollToTopButton';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import PortfolioPage from './pages/PortfolioPage';
import ClientsPage from './pages/ClientsPage';
import AboutUsPage from './pages/AboutUsPage';
import BrochuresPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import PricesPage from './pages/PricesPage';
import SiteMapPage from './pages/SiteMapPage';
import { LanguageContext } from './context/LanguageContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent = () => {
  const { language } = useContext(LanguageContext);
  const location = useLocation();

  useEffect(() => {
    document.body.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location, language]); // Re-run observer on page navigation or language change

  return (
    <>
      <ScrollToTop />
      <div className="bg-transparent text-light font-sans">
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/prices" element={<PricesPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/brochures" element={<BrochuresPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/erp-features" element={<PortfolioPage />} />
            <Route path="/sitemap" element={<SiteMapPage />} />
          </Routes>
        </main>
        <ScrollToTopButton />
        <FloatingCTA />
        <Footer />
      </div>
    </>
  );
};


function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;