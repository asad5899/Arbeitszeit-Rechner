// i18n Translation Dictionary and Helpers

export const locales = ['de', 'en', 'fr', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'de';

export const i18n = {
  de: {
    'nav.calculator': 'Rechner',
    'nav.weekly': 'Wochenübersicht',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    'nav.privacy': 'Datenschutz',
    'nav.terms': 'AGB',
    'nav.cookie': 'Cookie-Richtlinie',
    'nav.disclaimer': 'Haftungsausschluss',
    'nav.accessibility': 'Barrierefreiheit',
    'nav.editorial': 'Redaktionelle Richtlinien',
    'nav.authors': 'Autoren',
    'nav.blog': 'Blog',
    'nav.faq': 'FAQ',
    'nav.search': 'Suche',
    'hero.title': 'Arbeitszeit Rechner',
    'hero.subtitle': 'Netto-Arbeitszeit berechnen — sofort, präzise und ohne Anmeldung.',
    'hero.badge': 'Kostenlos & Werbefrei',
    'calc.title': 'Zeiterfassung',
    'calc.date': 'Datum',
    'calc.start': 'Arbeitsbeginn',
    'calc.end': 'Arbeitsende',
    'calc.breaks': 'Pausenzeit',
    'calc.addBreak': 'Hinzufügen',
    'calc.targetHours': 'Soll-Arbeitszeit',
    'calc.hoursPerDay': 'Stunden / Tag',
    'calc.save': 'Zur Wochenübersicht hinzufügen',
    'calc.hintStart': 'Übliche Zeiten: 06:00 – 10:00',
    'calc.hintEnd': 'Übliche Zeiten: 15:00 – 20:00',
    'result.title': 'Ergebnis',
    'result.gross': 'Bruttoarbeitszeit',
    'result.breaks': 'Pausenzeit',
    'result.net': 'Nettoarbeitszeit',
    'result.overtime': 'Überstunden',
    'result.copy': 'Kopieren',
    'result.reset': 'Zurücksetzen',
    'result.chartTitle': 'Wochenverlauf',
    'result.legendIst': 'Ist-Stunden',
    'result.legendSoll': 'Soll-Stunden',
    'weekly.title': 'Wochenübersicht',
    'weekly.day': 'Wochentag',
    'weekly.date': 'Datum',
    'weekly.gross': 'Brutto',
    'weekly.break': 'Pause',
    'weekly.net': 'Netto',
    'weekly.overtime': 'Überstd.',
    'weekly.status': 'Status',
    'weekly.total': 'Gesamt',
    'weekly.noEntries': 'Noch keine Einträge. Berechne deine Arbeitszeit und klicke „Zur Wochenübersicht hinzufügen".',
    'weekly.statusCurrent': 'Aktuell',
    'weekly.statusSaved': 'Gespeichert',
    'footer.text': 'Arbeitszeit Rechner Pro Pro — 100 % kostenlos, werbefrei & ohne Anmeldung. Alle Berechnungen lokal in deinem Browser.',
    'footer.links': 'Links',
    'cookie.title': 'Cookie-Einstellungen',
    'cookie.text': 'Wir verwenden Cookies, um die Nutzererfahrung zu verbessern und Website-Zugriffe zu analysieren.',
    'cookie.accept': 'Alle akzeptieren',
    'cookie.deny': 'Ablehnen',
    'cookie.save': 'Einstellungen speichern',
    'search.placeholder': 'Suchen Sie nach Artikeln...',
    'search.button': 'Suchen',
    'search.results': 'Suchergebnisse für',
    'search.noResults': 'Keine Ergebnisse gefunden.',
    'blog.readMore': 'Weiterlesen',
    'blog.published': 'Veröffentlicht am',
    'blog.updated': 'Aktualisiert am',
    'blog.author': 'Autor',
    'blog.reviewer': 'Geprüft von',
    'blog.readingTime': 'Lesezeit',
    'blog.related': 'Ähnliche Artikel',
    'blog.prev': 'Vorheriger Artikel',
    'blog.next': 'Nächster Artikel',
    'author.expert': 'Experte für',
    'faq.title': 'Häufig gestellte Fragen',
    'dir': 'ltr',
  },
  en: {
    'nav.calculator': 'Calculator',
    'nav.weekly': 'Weekly Overview',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.privacy': 'Privacy Policy',
    'nav.terms': 'Terms & Conditions',
    'nav.cookie': 'Cookie Policy',
    'nav.disclaimer': 'Disclaimer',
    'nav.accessibility': 'Accessibility',
    'nav.editorial': 'Editorial Policy',
    'nav.authors': 'Authors',
    'nav.blog': 'Blog',
    'nav.faq': 'FAQ',
    'nav.search': 'Search',
    'hero.title': 'Your working hours on point.',
    'hero.subtitle': 'Calculate net working hours — instantly, precisely and without registration.',
    'hero.badge': 'Free & Ad-Free',
    'calc.title': 'Time Tracking',
    'calc.date': 'Date',
    'calc.start': 'Work Start',
    'calc.end': 'Work End',
    'calc.breaks': 'Break Time',
    'calc.addBreak': 'Add Break',
    'calc.targetHours': 'Target Hours',
    'calc.hoursPerDay': 'Hours / Day',
    'calc.save': 'Add to Weekly Overview',
    'calc.hintStart': 'Typical hours: 06:00 – 10:00',
    'calc.hintEnd': 'Typical hours: 15:00 – 20:00',
    'result.title': 'Result',
    'result.gross': 'Gross Work Time',
    'result.breaks': 'Break Duration',
    'result.net': 'Net Work Time',
    'result.overtime': 'Overtime',
    'result.copy': 'Copy',
    'result.reset': 'Reset',
    'result.chartTitle': 'Weekly Trend',
    'result.legendIst': 'Actual Hours',
    'result.legendSoll': 'Target Hours',
    'weekly.title': 'Weekly Overview',
    'weekly.day': 'Weekday',
    'weekly.date': 'Date',
    'weekly.gross': 'Gross',
    'weekly.break': 'Break',
    'weekly.net': 'Net',
    'weekly.overtime': 'Overtime',
    'weekly.status': 'Status',
    'weekly.total': 'Total',
    'weekly.noEntries': 'No entries yet. Calculate your working hours and click "Add to Weekly Overview".',
    'weekly.statusCurrent': 'Current',
    'weekly.statusSaved': 'Saved',
    'footer.text': 'Work Time Calculator Pro Pro — 100% free, ad-free & no registration required. All calculations run locally in your browser.',
    'footer.links': 'Links',
    'cookie.title': 'Cookie Consent',
    'cookie.text': 'We use cookies to improve user experience and analyze website traffic.',
    'cookie.accept': 'Accept All',
    'cookie.deny': 'Decline',
    'cookie.save': 'Save Preferences',
    'search.placeholder': 'Search articles...',
    'search.button': 'Search',
    'search.results': 'Search results for',
    'search.noResults': 'No results found.',
    'blog.readMore': 'Read More',
    'blog.published': 'Published on',
    'blog.updated': 'Updated on',
    'blog.author': 'Author',
    'blog.reviewer': 'Reviewed by',
    'blog.readingTime': 'Reading time',
    'blog.related': 'Related Articles',
    'blog.prev': 'Previous Article',
    'blog.next': 'Next Article',
    'author.expert': 'Expert in',
    'faq.title': 'Frequently Asked Questions',
    'dir': 'ltr',
  },
  fr: {
    'nav.calculator': 'Calculateur',
    'nav.weekly': 'Aperçu Hebdomadaire',
    'nav.about': 'À Propos',
    'nav.contact': 'Contact',
    'nav.privacy': 'Confidentialité',
    'nav.terms': 'CGU',
    'nav.cookie': 'Politique relative aux cookies',
    'nav.disclaimer': 'Clause de non-responsabilité',
    'nav.accessibility': 'Accessibilité',
    'nav.editorial': 'Charte Éditoriale',
    'nav.authors': 'Auteurs',
    'nav.blog': 'Blog',
    'nav.faq': 'FAQ',
    'nav.search': 'Recherche',
    'hero.title': 'Votre temps de travail précis.',
    'hero.subtitle': 'Calculez le temps de travail net — instantanément, précisément et sans inscription.',
    'hero.badge': 'Gratuit et sans publicité',
    'calc.title': 'Saisie du Temps',
    'calc.date': 'Date',
    'calc.start': 'Début de travail',
    'calc.end': 'Fin de travail',
    'calc.breaks': 'Temps de pause',
    'calc.addBreak': 'Ajouter',
    'calc.targetHours': 'Heures requises',
    'calc.hoursPerDay': 'Heures / Jour',
    'calc.save': 'Ajouter à l\'aperçu hebdomadaire',
    'calc.hintStart': 'Heures habituelles: 06:00 – 10:00',
    'calc.hintEnd': 'Heures habituelles: 15:00 – 20:00',
    'result.title': 'Résultat',
    'result.gross': 'Temps de travail brut',
    'result.breaks': 'Temps de pause',
    'result.net': 'Temps de travail net',
    'result.overtime': 'Heures supplémentaires',
    'result.copy': 'Copier',
    'result.reset': 'Réinitialiser',
    'result.chartTitle': 'Évolution hebdomadaire',
    'result.legendIst': 'Heures réelles',
    'result.legendSoll': 'Heures cibles',
    'weekly.title': 'Aperçu Hebdomadaire',
    'weekly.day': 'Jour de la semaine',
    'weekly.date': 'Date',
    'weekly.gross': 'Brut',
    'weekly.break': 'Pause',
    'weekly.net': 'Net',
    'weekly.overtime': 'Heures supp.',
    'weekly.status': 'Statut',
    'weekly.total': 'Total',
    'weekly.noEntries': 'Aucune saisie pour le moment. Calculez votre temps de travail et cliquez sur « Ajouter à l\'aperçu hebdomadaire ».',
    'weekly.statusCurrent': 'Actuel',
    'weekly.statusSaved': 'Enregistré',
    'footer.text': 'Calculateur de Temps de Travail Pro — 100% gratuit, sans publicité et sans inscription. Tous les calculs sont effectués localement dans votre navigateur.',
    'footer.links': 'Liens',
    'cookie.title': 'Consentement aux Cookies',
    'cookie.text': 'Nous utilisons des cookies pour améliorer votre expérience utilisateur et analyser le trafic du site.',
    'cookie.accept': 'Tout accepter',
    'cookie.deny': 'Refuser',
    'cookie.save': 'Enregistrer les choix',
    'search.placeholder': 'Rechercher des articles...',
    'search.button': 'Rechercher',
    'search.results': 'Résultats de recherche pour',
    'search.noResults': 'Aucun résultat trouvé.',
    'blog.readMore': 'Lire la suite',
    'blog.published': 'Publié le',
    'blog.updated': 'Mis à jour le',
    'blog.author': 'Auteur',
    'blog.reviewer': 'Revu par',
    'blog.readingTime': 'Temps de lecture',
    'blog.related': 'Articles connexes',
    'blog.prev': 'Article précédent',
    'blog.next': 'Article suivant',
    'author.expert': 'Expert en',
    'faq.title': 'Foire aux Questions',
    'dir': 'ltr',
  },
  ar: {
    'nav.calculator': 'الحاسبة',
    'nav.weekly': 'الملخص الأسبوعي',
    'nav.about': 'من نحن',
    'nav.contact': 'اتصل بنا',
    'nav.privacy': 'سياسة الخصوصية',
    'nav.terms': 'الشروط والأحكام',
    'nav.cookie': 'سياسة الكوكيز',
    'nav.disclaimer': 'إخلاء المسؤولية',
    'nav.accessibility': 'سهولة الوصول',
    'nav.editorial': 'السياسة التحريرية',
    'nav.authors': 'الكتاب',
    'nav.blog': 'المدونة',
    'nav.faq': 'الأسئلة الشائعة',
    'nav.search': 'البحث',
    'hero.title': 'وقت عملك بدقة متناهية.',
    'hero.subtitle': 'احسب صافي ساعات العمل — فوراً، بدقة وبدون أي تسجيل.',
    'hero.badge': 'مجاني وخالي من الإعلانات',
    'calc.title': 'تسجيل الوقت',
    'calc.date': 'التاريخ',
    'calc.start': 'بداية العمل',
    'calc.end': 'نهاية العمل',
    'calc.breaks': 'وقت الاستراحة',
    'calc.addBreak': 'إضافة استراحة',
    'calc.targetHours': 'ساعات العمل المطلوبة',
    'calc.hoursPerDay': 'ساعة / يوم',
    'calc.save': 'إضافة إلى الملخص الأسبوعي',
    'calc.hintStart': 'الأوقات المعتادة: 06:00 – 10:00',
    'calc.hintEnd': 'الأوقات المعتادة: 15:00 – 20:00',
    'result.title': 'النتيجة',
    'result.gross': 'إجمالي وقت العمل',
    'result.breaks': 'مدة الاستراحة',
    'result.net': 'صافي وقت العمل',
    'result.overtime': 'الساعات الإضافية',
    'result.copy': 'نسخ النتيجة',
    'result.reset': 'إعادة تعيين',
    'result.chartTitle': 'المخطط الأسبوعي',
    'result.legendIst': 'ساعات العمل الفعلية',
    'result.legendSoll': 'ساعات العمل المستهدفة',
    'weekly.title': 'الملخص الأسبوعي',
    'weekly.day': 'اليوم',
    'weekly.date': 'التاريخ',
    'weekly.gross': 'الإجمالي',
    'weekly.break': 'الاستراحة',
    'weekly.net': 'الصافي',
    'weekly.overtime': 'الإضافي',
    'weekly.status': 'الحالة',
    'weekly.total': 'المجموع الكلي',
    'weekly.noEntries': 'لا توجد بيانات مسجلة بعد. احسب ساعات عملك واضغط على "إضافة إلى الملخص الأسبوعي".',
    'weekly.statusCurrent': 'الحالي',
    'weekly.statusSaved': 'محفوظ',
    'footer.text': 'حاسبة ساعات العمل برو — مجانية 100%، خالية من الإعلانات ولا تتطلب تسجيل. تتم جميع العمليات الحسابية محلياً في متصفحك.',
    'footer.links': 'الروابط',
    'cookie.title': 'الموافقة على ملفات تعريف الارتباط',
    'cookie.text': 'نحن نستخدم ملفات تعريف الارتباط لتحسين تجربة المستخدم وتحليل حركة المرور على الموقع.',
    'cookie.accept': 'قبول الكل',
    'cookie.deny': 'رفض',
    'cookie.save': 'حفظ الإعدادات',
    'search.placeholder': 'ابحث عن المقالات...',
    'search.button': 'بحث',
    'search.results': 'نتائج البحث عن',
    'search.noResults': 'لم يتم العثور على نتائج.',
    'blog.readMore': 'اقرأ المزيد',
    'blog.published': 'تم النشر في',
    'blog.updated': 'تم التحديث في',
    'blog.author': 'الكاتب',
    'blog.reviewer': 'تمت المراجعة من قبل',
    'blog.readingTime': 'وقت القراءة',
    'blog.related': 'مقالات ذات صلة',
    'blog.prev': 'المقال السابق',
    'blog.next': 'المقال التالي',
    'author.expert': 'خبير في',
    'faq.title': 'الأسئلة الأكثر شيوعاً',
    'dir': 'rtl',
  },
};

export function getLocaleFromUrl(url: URL | string): Locale {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const [, segment] = pathname.split('/');
  if (locales.includes(segment as Locale)) {
    return segment as Locale;
  }
  return defaultLocale;
}

export function useTranslations(locale: Locale) {
  return function t(key: keyof typeof i18n[typeof defaultLocale]): string {
    return i18n[locale][key] || i18n[defaultLocale][key] || (key as string);
  };
}

export function getLocalizedPath(path: string, locale: Locale): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  let result = locale === defaultLocale
    ? cleanPath
    : `/${locale}${cleanPath === '/' ? '' : cleanPath}`;
  
  if (!result.endsWith('/') && !result.includes('.') && !result.includes('#') && !result.includes('?')) {
    result += '/';
  }
  return result;
}

// Blog translations mapping
export const blogTranslations: Record<string, Record<Locale, string>> = {
  'arbeitszeitgesetz-pausenregelungen-de': {
    de: 'arbeitszeitgesetz-pausenregelungen-de',
    en: 'working-hours-laws-en',
    fr: 'lois-duree-travail-fr',
    ar: 'working-hours-laws-ar'
  },
  'working-hours-laws-en': {
    de: 'arbeitszeitgesetz-pausenregelungen-de',
    en: 'working-hours-laws-en',
    fr: 'lois-duree-travail-fr',
    ar: 'working-hours-laws-ar'
  },
  'lois-duree-travail-fr': {
    de: 'arbeitszeitgesetz-pausenregelungen-de',
    en: 'working-hours-laws-en',
    fr: 'lois-duree-travail-fr',
    ar: 'working-hours-laws-ar'
  },
  'working-hours-laws-ar': {
    de: 'arbeitszeitgesetz-pausenregelungen-de',
    en: 'working-hours-laws-en',
    fr: 'lois-duree-travail-fr',
    ar: 'working-hours-laws-ar'
  }
};

// Category translations mapping
export const categoryTranslations: Record<string, Record<Locale, string>> = {
  'arbeitsrecht': {
    de: 'arbeitsrecht',
    en: 'labor-law',
    fr: 'droit-du-travail',
    ar: 'قانون-العمل'
  },
  'labor-law': {
    de: 'arbeitsrecht',
    en: 'labor-law',
    fr: 'droit-du-travail',
    ar: 'قانون-العمل'
  },
  'droit-du-travail': {
    de: 'arbeitsrecht',
    en: 'labor-law',
    fr: 'droit-du-travail',
    ar: 'قانون-العمل'
  },
  'قانون-العمل': {
    de: 'arbeitsrecht',
    en: 'labor-law',
    fr: 'droit-du-travail',
    ar: 'قانون-العمل'
  }
};

// Tag translations mapping
export const tagTranslations: Record<string, Record<Locale, string>> = {
  'arbzg': {
    de: 'arbzg',
    en: 'compliance',
    fr: 'législation',
    ar: 'الامتثال'
  },
  'compliance': {
    de: 'arbzg',
    en: 'compliance',
    fr: 'législation',
    ar: 'الامتثال'
  },
  'législation': {
    de: 'arbzg',
    en: 'compliance',
    fr: 'législation',
    ar: 'الامتثال'
  },
  'الامتثال': {
    de: 'arbzg',
    en: 'compliance',
    fr: 'législation',
    ar: 'الامتثال'
  },
  
  'pausenzeit': {
    de: 'pausenzeit',
    en: 'breaks',
    fr: 'pauses',
    ar: 'الاستراحات'
  },
  'breaks': {
    de: 'pausenzeit',
    en: 'breaks',
    fr: 'pauses',
    ar: 'الاستراحات'
  },
  'pauses': {
    de: 'pausenzeit',
    en: 'breaks',
    fr: 'pauses',
    ar: 'الاستراحات'
  },
  'الاستراحات': {
    de: 'pausenzeit',
    en: 'breaks',
    fr: 'pauses',
    ar: 'الاستراحات'
  },

  'überstunden': {
    de: 'überstunden',
    en: 'overtime',
    fr: 'heures-supplémentaires',
    ar: 'ساعات-العمل'
  },
  'overtime': {
    de: 'überstunden',
    en: 'overtime',
    fr: 'heures-supplémentaires',
    ar: 'ساعات-العمل'
  },
  'heures-supplémentaires': {
    de: 'überstunden',
    en: 'overtime',
    fr: 'heures-supplémentaires',
    ar: 'ساعات-العمل'
  },
  'ساعات-العمل': {
    de: 'überstunden',
    en: 'overtime',
    fr: 'heures-supplémentaires',
    ar: 'ساعات-العمل'
  },

  'arbeitszeitgesetz': {
    de: 'arbeitszeitgesetz',
    en: 'compliance',
    fr: 'législation',
    ar: 'ساعات-العمل'
  },
  'hr': {
    de: 'arbeitszeitgesetz',
    en: 'hr',
    fr: 'législation',
    ar: 'الامتثال'
  }
};

