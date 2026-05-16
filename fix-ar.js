const fs = require('fs');

function fixFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    let text = fs.readFileSync(filePath, 'utf8');

    // Replace known English phrases and words
    text = text.replace(/المفهوم العام \(General Concept\)/g, "المفهوم العام");
    text = text.replace(/التقارير \(Reports\)/g, "التقارير");
    text = text.replace(/وظائف اللوط \(Lot Functions\)/g, "أهمية نظام اللوط");
    text = text.replace(/خامات - منتج تام - Work in Progress - قطع غيار/g, "خامات - منتج تام - تحت التشغيل - قطع غيار");
    text = text.replace(/دعم تكنولوجيا المعلومات المدار \(Managed IT Support\)/g, "خدمات دعم تكنولوجيا المعلومات");
    text = text.replace(/كيف سيغير النظام آلية العمل داخل منشأتي\؟ \(How will the system change the work mechanism within my facility\?\)/g, "كيف سيغير النظام آلية العمل داخل منشأتي؟");
    text = text.replace(/رقم الحاوية Container No\./g, "رقم الحاوية");
    text = text.replace(/رقم اللوط Lot No\. المرتبط بالخامات أو المنتجات/g, "رقم اللوط المرتبط بالخامات أو المنتجات");
    text = text.replace(/تحليل تكلفة الشحنة \(Cost Breakdown\)/g, "تحليل تكلفة الشحنة");
    text = text.replace(/متابعة التحصيلات والخصومات \(Collections & Discounts Tracking\)/g, "متابعة التحصيلات والخصومات");
    text = text.replace(/تقسيم الشحنة إلى بنود \(Shipment Items \/ Pallets\)/g, "تقسيم الشحنة إلى بنود أو طبالي");
    text = text.replace(/قصص النجاح \(Success Stories\)/g, "قصص النجاح");
    text = text.replace(/الصناعات الغذائية \(Food Industries\)/g, "الصناعات الغذائية");
    text = text.replace(/معرض التطبيقات \(Portfolio\)/g, "معرض التطبيقات");
    text = text.replace(/باquets/g, "باقات");
    text = text.replace(/Full Stack Developer/g, "مطور برمجيات متكامل");
    text = text.replace(/System & Network Administrator/g, "مدير النظم والشبكات");
    text = text.replace(/أهم تقارير الحسابات العامة \(Reports\)/g, "أهم تقارير الحسابات العامة");
    text = text.replace(/الأصول الثابتة \(Fixed Assets\)/g, "الأصول الثابتة");
    text = text.replace(/شؤون العاملين والمرتبات \(HR & Payroll\)/g, "شؤون العاملين والمرتبات");
    text = text.replace(/نظام التخطيط \(Planning System\)/g, "نظام التخطيط");
    text = text.replace(/دعم القيود المتعددة Multi-Entry/g, "دعم القيود المتعددة");

    // The long sentences
    text = text.replace(/Recording detailed employee data, updating files, grades, and job titles\. The system stores employee photos and all employment documents, with reports on missing documents and tracking document expiration dates to notify employees for renewal\./g, "تسجيل بيانات الموظفين التفصيلية وتحديث الملفات والدرجات والمسميات الوظيفية. يقوم النظام بحفظ صور الموظفين وجميع مسوغات التعيين، مع توفير تقارير عن المستندات الناقصة وتتبع تواريخ انتهاء الصلاحية لتنبيه الموظفين لتجديدها.");
    text = text.replace(/Advanced business intelligence platform development using Oracle Analytics Cloud and custom dashboard solutions for data-driven decision making\./g, "تطوير منصات ذكاء الأعمال المتقدمة باستخدام حلول السحابة واللوحات التفاعلية لاتخاذ قرارات مبنية على البيانات بفعالية.");

    fs.writeFileSync(filePath, text, 'utf8');
    console.log('Fixed ' + filePath);
}

fixFile('public/locales/ar.json');
fixFile('locales/ar.json');
