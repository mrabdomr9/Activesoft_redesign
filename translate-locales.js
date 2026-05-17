import fs from 'fs';

const replacements = [
  // 1. Team Names and Roles
  { search: "Ibraheem Ali Ellithy", replace: "إبراهيم علي الليثي" },
  { search: "Abdu-Allah Yousrie", replace: "عبد الله يسري" },
  { search: "Mostafa Amin", replace: "مصطفى أمين" },
  { search: "Mohamed Elsawaf", replace: "محمد الصواف" },
  { search: "Full Stack Developer", replace: "مطور ويب متكامل (Full Stack)" },
  { search: "System & Network Administrator", replace: "مدير الأنظمة والشبكات" },

  // 2. Russian character typos
  { search: "بما فيключ", replace: "بما في ذلك" },

  // 3. Smart Scale description refinement (Egyptian colloquial to formal Arabic)
  {
    search: "هو نظام بنظام الكتروني/ميكانيكي متقدم بربط المعدّات الحسية (مثل خلايا الحمل Load Cells) ببرمجيات متكاملة تخلي عملية الوزن تتم أوتوماتيكيًا، وتتسجل البيانات مباشر على النظام المحاسبي أو الـ ERP بدون تدخل بشري كبير.",
    replace: "هو نظام إلكتروني وميكانيكي متقدم يربط معدات القياس الحسية (مثل خلايا الوزن والتحميل Load Cells) ببرمجيات متكاملة لتتم عملية الوزن تلقائياً بالكامل، وتُسجّل البيانات مباشرة في النظام المحاسبي أو نظام ERP دون أي تدخل بشري."
  },

  // 4. BOM (Bill of Materials) and technical acronyms
  { search: "المواد الخام وقائمة المواد (BOM)", replace: "قائمة المواد والمكونات (BOM)" },
  { search: "تحديد نسب المواد لكل منتج من خلال قائمة المواد (BOM).", replace: "تحديد نسب ومواصفات المواد الخام لكل منتج عبر قائمة المواد (BOM)." },
  { search: "الخامات و الـ BOM (Bill of Materials)", replace: "قائمة المواد والمكونات (BOM)" },
  { search: "يتم تحديد نسب الخامات لكل منتج من خلال BOM.", replace: "يتم تحديد نسب الخامات والمكونات لكل منتج من خلال قائمة المواد (BOM)." },
  { search: "يصدر النظام مستندات صرف خامات آليًا حسب نسب BOM.", replace: "يصدر النظام مستندات صرف الخامات تلقائيًا بناءً على نسب قائمة المواد (BOM)." },
  { search: "الخامات و الـ BOM", replace: "قائمة المواد والمكونات (BOM)" },
  { search: "الصرف الآلي للـ BOM", replace: "الصرف التلقائي للمواد (BOM)" },
  { search: "إصدار صرف خامات تلقائيًا طبقا لقائمة خامات المنتج BOM", replace: "إصدار مستندات صرف المواد تلقائياً وفقاً لقائمة مكونات المنتج (BOM)" },
  { search: "قائمة خامات المنتج BOM", replace: "قائمة مكونات المنتج (BOM)" },
  { search: "دقة معادلات الخلط (BOM)", replace: "دقة معادلات نسب الخلط (BOM)" },
  { search: "إدارة دقيقة لقائمة الخامات (BOM)", replace: "إدارة دقيقة لقائمة خامات ومكونات الخلطة (BOM)" },

  // 5. WIP (Work in Progress)
  { search: "خامات - منتج تام - Work in Progress - قطع غيار", replace: "خامات - منتج تام - تحت التشغيل - قطع غيار" },
  { search: "خامات تحت التشغيل (WIP)", replace: "الإنتاج تحت التشغيل (WIP)" },
  { search: "حساب WIP – الإنتاج تحت التشغيل", replace: "حساب الإنتاج تحت التشغيل (WIP)" },
  { search: "الإنتاج تحت التشغيل WIP", replace: "الإنتاج تحت التشغيل (WIP)" },
  { search: "حساب WIP", replace: "حساب الإنتاج تحت التشغيل (WIP)" },

  // 6. Actual Costing & Financials
  { search: "منهجية التكلفة الفعلية (Actual Costing)", replace: "منهجية التكلفة الفعلية (Actual Costing)" },
  { search: "التكلفة الفعلية Actual Costing", replace: "التكلفة الفعلية (Actual Costing)" },
  { search: "Actual Costing", replace: "التكلفة الفعلية (Actual Costing)" },
  { search: "تكلفة المبيعات (COGS)", replace: "تكلفة البضاعة المباعة (COGS)" },

  // 7. Inventory & Lots
  { search: "تقسيم الصنف الواحد إلى لوطات متعددة (Lots)", replace: "تقسيم الصنف الواحد إلى تشغيلات ولوطات متعددة (Lots)" },
  { search: "تتبع الصلاحية Expiry Tracking", replace: "تتبع تاريخ الصلاحية والانتهاء (Expiry Tracking)" },
  { search: "توصيف الأصناف (Item Attributes)", replace: "خصائص ومواصفات الأصناف (Item Attributes)" },
  { search: "تقسيم داخلي إلى مواقع تخزين Locations داخل كل مخزن", replace: "تقسيم داخلي إلى مواقع تخزين محددة (Locations) داخل كل مستودع" },
  { search: "نظام إعادة الطلب (Reorder Level)", replace: "نظام تتبع حد إعادة الطلب (Reorder Level)" },
  { search: "مستندات صرف الخامات للمنتجين (Production Materials Issue)", replace: "مستندات صرف المواد الخام للإنتاج (Production Materials Issue)" },
  { search: "دعم مستندات صرف الخامات للمنتجين (Production Materials Issue)", replace: "دعم مستندات صرف المواد الخام للإنتاج (Production Materials Issue)" },
  { search: "نظام اللوطات (Lots Tracking)", replace: "نظام تتبع اللوطات والتشغيلات (Lot Tracking)" },
  { search: "نظام اللوطات وتتبع الموردين (Lot Tracking)", replace: "نظام تتبع اللوطات والتشغيلات وتتبع الموردين (Lot Tracking)" },
  { search: "نظام الورديات (Shifts)", replace: "نظام إدارة الورديات (Shifts)" },
  { search: "نظام الورادي والتحكم البشري (Shift Management)", replace: "نظام إدارة الورديات والتحكم البشري (Shift Management)" },
  { search: "تتبع السايلو (Silo)", replace: "تتبع الصوامع والسايلوهات (Silo)" },

  // 8. Export Module
  { search: "رقم الحاوية Container No.", replace: "رقم الحاوية (Container No.)" },
  { search: "رقم اللوط Lot No. المرتبط بالخامات أو المنتجات", replace: "رقم التشغيلة (Lot No.) المرتبط بالمواد أو المنتجات" },
  { search: "تحليل تكلفة الشحنة (Cost Breakdown)", replace: "تحليل تفصيلي لتكلفة الشحنة (Cost Breakdown)" },
  { search: "متابعة التحصيلات والخصومات (Collections & Discounts Tracking)", replace: "تتبع التحصيلات والخصومات (Collections & Discounts Tracking)" },
  { search: "تقسيم الشحنة إلى بنود (Shipment Items / Pallets)", replace: "تقسيم الشحنة إلى بنود أو طبالي (Shipment Items / Pallets)" },

  // 9. Smart Scale Components
  { search: "خلايا الحمل (Load Cells)", replace: "خلايا الوزن والتحميل (Load Cells)" },
  { search: "وحدة تحكم (Controller / Indicator)", replace: "وحدة التحكم والمؤشر (Controller / Indicator)" },
  { search: "آليات للمعايرة Calibration", replace: "آليات المعايرة الدورية (Calibration)" },

  // 10. General ERP Terminology & Brand Standardization
  { search: "ما هو نظام Oracle ERP", replace: "ما هو نظام تخطيط موارد المؤسسات (ERP)" },
  { search: "Oracle ERP (تخطيط موارد المؤسسات)", replace: "نظام تخطيط موارد المؤسسات (ERP)" },
  { search: "نظام Oracle ERP", replace: "نظام تخطيط موارد المؤسسات (ERP)" },
  { search: "حلول Oracle ERP", replace: "حلول نظام تخطيط موارد المؤسسات (ERP)" },
  { search: "تنفيذ Oracle ERP", replace: "تنفيذ نظام تخطيط موارد المؤسسات (ERP)" },
  { search: "خدمات Oracle ERP", replace: "خدمات تخطيط موارد المؤسسات (ERP)" },
  { search: "مشاريع Oracle ERP", replace: "مشاريع أنظمة ERP" },
  { search: "مستشاري Oracle ERP", replace: "مستشاري أنظمة ERP" },
  { search: "مستشار أوراكل رائد", replace: "مستشار أنظمة ERP رائد" },
  { search: "محترف معتمد من أوراكل", replace: "مستشار نظم معتمد" },
  { search: "محترف معتمد من أوركال", replace: "مهندس نظم معتمد" },
  { search: "ميزات وقدرات Oracle ERP", replace: "ميزات وقدرات نظام ActiveSoft ERP" },
  { search: "وحدات وقدرات Oracle ERP", replace: "وحدات وقدرات نظام ActiveSoft ERP" },
  { search: "ميزات نظام Oracle ERP الخاص بنا", replace: "ميزات نظام ActiveSoft ERP الخاص بنا" },
  { search: "ميزات نظام Oracle ERP الخاص بنا، بما فيكل", replace: "ميزات نظام ActiveSoft ERP الخاص بنا، بما في ذلك" },
  { search: "نظام أوراكل ERP", replace: "نظام تخطيط موارد المؤسسات (ERP)" },
  { search: "نظام Oracle ERP الخاص بنا", replace: "نظام ActiveSoft ERP الخاص بنا" },
  { search: "حلولنا من Oracle ERP", replace: "حلولنا من نظام تخطيط موارد المؤسسات (ActiveSoft ERP)" },
  { search: "منفذ أوراكل رائد", replace: "منفذ أنظمة ERP رائد" },

  // 11. Industries Module English text replacements
  { search: "مصانع منتجات البلاستيك و المواسير PVC", replace: "مصانع المنتجات البلاستيكية ومواسير الـ PVC" },
  { search: "التحكم في المخزون (Just-in-time)", replace: "إدارة المخزون اللحظي (Just-In-Time)" },
  { search: "وميزات CRM قوية", replace: "وميزات إدارة علاقات العملاء (CRM) القوية" },
  { search: "تحديد بند الميزانية لكل حساب بدقة", replace: "تحديد بند الميزانية لكل حساب بدقة" },
  { search: "وضع أهداف مبيعات ( Goals )", replace: "تحديد المستهدف البيعي (Goals)" }
];

function applyReplacementsRecursive(obj) {
  if (typeof obj === 'string') {
    let newStr = obj;
    // Apply replacements in order
    for (const r of replacements) {
      // Use regex helper to replace all occurrences carefully
      // If we use string search, we can split and join
      if (newStr.includes(r.search)) {
        newStr = newStr.split(r.search).join(r.replace);
      }
    }
    return newStr;
  } else if (Array.isArray(obj)) {
    return obj.map(item => applyReplacementsRecursive(item));
  } else if (typeof obj === 'object' && obj !== null) {
    const newObj = {};
    for (const key in obj) {
      newObj[key] = applyReplacementsRecursive(obj[key]);
    }
    return newObj;
  }
  return obj;
}

function processFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  try {
    const rawData = fs.readFileSync(filePath, 'utf8');
    const parsed = JSON.parse(rawData);
    const updated = applyReplacementsRecursive(parsed);
    fs.writeFileSync(filePath, JSON.stringify(updated, null, 2), 'utf8');
    console.log(`Successfully updated: ${filePath}`);
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err);
  }
}

processFile('locales/ar.json');
processFile('public/locales/ar.json');
