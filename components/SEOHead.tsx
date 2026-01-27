import React, { useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface SEOHeadProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
    title,
    description,
    keywords,
    image = 'https://activesoft.net/og-image.jpg',
    url = 'https://activesoft.net',
    type = 'website'
}) => {
    const { t } = useTranslation();

    useEffect(() => {
        // Set Document Title
        if (title) document.title = title;

        // Helper to set meta tags
        const setMetaTag = (name: string, content: string) => {
            let element = document.querySelector(`meta[name="${name}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute('name', name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // Helper to set OG/Twitter tags (property attribute)
        const setPropertyTag = (property: string, content: string) => {
            let element = document.querySelector(`meta[property="${property}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute('property', property);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        if (description) setMetaTag('description', description);
        if (keywords) setMetaTag('keywords', keywords);

        // Open Graph
        if (title) setPropertyTag('og:title', title);
        if (description) setPropertyTag('og:description', description);
        setPropertyTag('og:type', type);
        setPropertyTag('og:url', url);
        setPropertyTag('og:image', image);
        setPropertyTag('og:site_name', 'Active Soft');

        // Twitter
        setMetaTag('twitter:card', 'summary_large_image');
        if (title) setMetaTag('twitter:title', title);
        if (description) setMetaTag('twitter:description', description);
        setMetaTag('twitter:image', image);
        setMetaTag('twitter:site', '@ActiveSoft');

        // Canonical
        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (!canonicalLink) {
            canonicalLink = document.createElement('link');
            canonicalLink.setAttribute('rel', 'canonical');
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.setAttribute('href', url);

        // Structured Data (Organization)
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Active Soft",
            "url": "https://activesoft.net",
            "logo": "https://activesoft.net/logo.png",
            "description": description,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Tech Street",
                "addressLocality": "Cairo",
                "addressCountry": "Egypt"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+20 122 507 7433",
                "contactType": "customer service",
                "availableLanguage": ["en", "ar"]
            },
            "sameAs": [
                "https://www.facebook.com/activesoft",
                "https://www.linkedin.com/company/activesoft"
            ]
        };

        // Structured Data (WebSite)
        const websiteData = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Active Soft",
            "url": "https://activesoft.net",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://activesoft.net/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
            }
        };

        // Inject Structured Data
        const updateSchema = (id: string, data: object) => {
            let script = document.getElementById(id);
            if (script) script.remove();

            script = document.createElement('script');
            script.id = id;
            script.setAttribute('type', 'application/ld+json');
            script.textContent = JSON.stringify(data);
            document.head.appendChild(script);
        };

        updateSchema('schema-org', structuredData);
        updateSchema('schema-website', websiteData);

        // Cleanup function
        return () => {
            // Optional: Remove specific tags if needed when unmounting
            // For a SPA, we usually just overwrite them on the next page load
        };
    }, [title, description, keywords, image, url, type]);

    return null;
};

export default SEOHead;
