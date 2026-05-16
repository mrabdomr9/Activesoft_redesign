const fs = require('fs');

const arNew = {
  "title": "نظام إدارة محطات التصدير",
  "subtitle": "حل متكامل لإدارة عمليات التصدير بكفاءة ودقة",
  "desc": "نظام متطور مصمم خصيصًا لإدارة جميع جوانب عمليات التصدير، من إعداد الوثائق إلى التخليص الجمركي وإدارة الشحن.",
  "featuresTitle": "مميزات النظام",
  "features": [
    "إدارة شاملة لعمليات التصدير من البداية إلى النهاية",
    "نظام متكامل لإدارة الوثائق المطلوبة للتصدير",
    "متابعة عمليات التخليص الجمركي وتنبيهات آلية",
    "نظام فعال لإدارة الشحن والنقل الدولي",
    "متابعة جودة المنتجات المعدة للتصدير",
    "تقارير مفصلة لعمليات التصدير والتحليلات المالية"
  ],
  "mainFeaturesTitle": "المميزات الرئيسية",
  "mainFeaturesDesc": "نظامنا يوفر مجموعة متكاملة من الأدوات لإدارة عمليات التصدير بكفاءة عالية ودقة متناهية.",
  "mainFeatures": [
    {
      "title": "إدارة الوثائق",
      "desc": "إدارة وتتبع جميع الوثائق المطلوبة للتصدير بما في ذلك الفواتير التجارية وشهادات المنشأ وشهادات التفتيش."
    },
    {
      "title": "التخليص الجمركي",
      "desc": "نظام متكامل لإدارة إجراءات التخليص الجمركي مع متابعة حالة الشحنات وتنبيهات للمستندات المطلوبة."
    },
    {
      "title": "إدارة الشحن",
      "desc": "تتبع الشحنات الدولية وإدارة خطوط الشحن وجداول الرحلات مع تكامل مع شركات الشحن العالمية."
    },
    {
      "title": "مراقبة الجودة",
      "desc": "نظام متقدم لمراقبة جودة المنتجات المعدة للتصدير مع إمكانية إصدار شهادات الجودة والتفتيش."
    },
    {
      "title": "الإدارة المالية",
      "desc": "إدارة جميع الجوانب المالية لعمليات التصدير بما في ذلك تسعير المنتجات والعملات الأجنبية والتحصيلات."
    },
    {
      "title": "التقارير والتحليلات",
      "desc": "تقارير مفصلة عن عمليات التصدير مع تحليلات للأداء ومؤشرات الأداء الرئيسية لاتخاذ قرارات مستنيرة."
    }
  ],
  "componentsTitle": "مكونات النظام",
  "components": [
    {
      "title": "إدارة العملاء",
      "desc": "إدارة قاعدة بيانات العملاء الدوليين مع تتبع تاريخ التعامل والتفضيلات"
    },
    {
      "title": "إدارة الطلبات",
      "desc": "معالجة طلبات التصدير من الاستلام حتى التسليم النهائي للعميل"
    },
    {
      "title": "إدارة المستودعات",
      "desc": "تتبع المخزون المخصص للتصدير مع إدارة المواقع والتغليف"
    },
    {
      "title": "إدارة الوثائق",
      "desc": "إنشاء وإدارة جميع الوثائق المطلوبة لعملية التصدير"
    },
    {
      "title": "التخليص الجمركي",
      "desc": "إدارة إجراءات التخليص الجمركي مع المتابعة والتنبيهات"
    },
    {
      "title": "إدارة الشحن",
      "desc": "تتبع الشحنات وإدارة خطوط الشحن وجداول الرحلات"
    },
    {
      "title": "الفواتير والتحصيل",
      "desc": "إدارة الفواتير الدولية ومتابعة عمليات التحصيل"
    },
    {
      "title": "التقارير والتحليل",
      "desc": "تقارير مفصلة عن عمليات التصدير والتحليلات المالية"
    },
    {
      "title": "إدارة العملات",
      "desc": "دعم متعدد العملات مع تحديث أسعار الصرف تلقائياً"
    }
  ]
};

const enNew = {
  "title": "Export Stations Management System",
  "subtitle": "An integrated solution for managing export operations efficiently and accurately",
  "desc": "An advanced system specifically designed to manage all aspects of export operations, from document preparation to customs clearance and shipping management.",
  "featuresTitle": "System Features",
  "features": [
    "Comprehensive management of export operations from start to finish",
    "Integrated system for managing documents required for export",
    "Tracking customs clearance operations and automated alerts",
    "Effective system for shipping and international transport management",
    "Tracking the quality of products prepared for export",
    "Detailed reports for export operations and financial analytics"
  ],
  "mainFeaturesTitle": "Key Features",
  "mainFeaturesDesc": "Our system provides an integrated set of tools to manage export operations with high efficiency and absolute accuracy.",
  "mainFeatures": [
    {
      "title": "Document Management",
      "desc": "Manage and track all documents required for export including commercial invoices, certificates of origin, and inspection certificates."
    },
    {
      "title": "Customs Clearance",
      "desc": "An integrated system to manage customs clearance procedures with shipment status tracking and alerts for required documents."
    },
    {
      "title": "Shipping Management",
      "desc": "Track international shipments and manage shipping lines and schedules with integration with global shipping companies."
    },
    {
      "title": "Quality Control",
      "desc": "An advanced system for monitoring the quality of products prepared for export with the ability to issue quality and inspection certificates."
    },
    {
      "title": "Financial Management",
      "desc": "Manage all financial aspects of export operations including product pricing, foreign currencies, and collections."
    },
    {
      "title": "Reports and Analytics",
      "desc": "Detailed reports on export operations with performance analytics and KPIs to make informed decisions."
    }
  ],
  "componentsTitle": "System Components",
  "components": [
    {
      "title": "Customer Management",
      "desc": "Manage international customer database with transaction history and preferences tracking"
    },
    {
      "title": "Order Management",
      "desc": "Process export orders from receipt to final delivery to the customer"
    },
    {
      "title": "Warehouse Management",
      "desc": "Track inventory allocated for export with location and packaging management"
    },
    {
      "title": "Document Management",
      "desc": "Create and manage all documents required for the export process"
    },
    {
      "title": "Customs Clearance",
      "desc": "Manage customs clearance procedures with tracking and alerts"
    },
    {
      "title": "Shipping Management",
      "desc": "Track shipments and manage shipping lines and schedules"
    },
    {
      "title": "Invoicing and Collection",
      "desc": "Manage international invoices and track collection processes"
    },
    {
      "title": "Reports and Analysis",
      "desc": "Detailed reports on export operations and financial analytics"
    },
    {
      "title": "Currency Management",
      "desc": "Multi-currency support with automatic exchange rate updates"
    }
  ]
};

const ar = JSON.parse(fs.readFileSync('public/locales/ar.json', 'utf8'));
ar.services.exportModule = arNew;
fs.writeFileSync('public/locales/ar.json', JSON.stringify(ar, null, 2) + '\n');

const en = JSON.parse(fs.readFileSync('public/locales/en.json', 'utf8'));
en.services.exportModule = enNew;
fs.writeFileSync('public/locales/en.json', JSON.stringify(en, null, 2) + '\n');

console.log('Done!');
