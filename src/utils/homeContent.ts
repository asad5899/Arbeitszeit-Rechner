// Homepage Content Translations for all locales
// Used by HomepageContent.astro

import type { Locale } from './i18n';

export interface FAQItem {
  q: string;
  a: string;
}

export interface HomeContent {
  // Section: Intro
  introTitle: string;
  introText: string;

  // Section: How it works
  howTitle: string;
  howSubtitle: string;
  step1Title: string;
  step1Text: string;
  step2Title: string;
  step2Text: string;
  step3Title: string;
  step3Text: string;

  // Section: Detailed functionality
  funcTitle: string;
  funcH3a: string;
  funcH3aText: string;
  funcH3b: string;
  funcH3bText: string;
  funcH3c: string;
  funcH3cText: string;

  // Section: Legal break times
  breakTitle: string;
  breakIntro: string;
  break30Title: string;
  break30Text: string;
  break45Title: string;
  break45Text: string;
  breakTableTitle: string;
  breakTableHeaders: [string, string, string];
  breakTableRows: [string, string, string][];

  // Section: Applications
  appTitle: string;
  appDailyTitle: string;
  appDailyText: string;
  appDailyExTitle: string;
  appDailyExLabel: string;
  appDailyExLine1: string;
  appDailyExLine2: string;
  appDailyExLine3: string;
  appWeeklyTitle: string;
  appWeeklyText: string;
  appOvertimeTitle: string;
  appOvertimeLabel: string;
  appOvertimeLine1: string;
  appOvertimeLine2: string;
  appOvertimeLine3: string;

  // Section: Decimal
  decTitle: string;
  decIntro: string;
  decConvertTitle: string;
  decConvertText: string;
  decTableTitle: string;
  decTableHeaders: [string, string, string, string];
  decIndustrialTitle: string;
  decIndustrialText: string;
  decIndustrialExTitle: string;
  decIndustrialExLine1: string;
  decIndustrialExLine2: string;
  decIndustrialExLine3: string;

  // Section: Salary
  salaryTitle: string;
  salaryMonthTitle: string;
  salaryMonthText: string;
  salaryFormulaTitle: string;
  salaryFormulaLabel: string;
  salaryFormulaLine1: string;
  salaryFormulaLines: string[];
  salaryTvodTitle: string;
  salaryTvodText: string;

  // Section: Main FAQ
  faqTitle: string;
  faqItems: FAQItem[];

  // Section: Why us
  whyTitle: string;
  whyCards: { icon: string; title: string; text: string }[];

  // Section: Germany / Country info
  countryTitle: string;
  countryCards: { title: string; text1: string; text2: string }[];
  legalTitle: string;
  legalText: string;

  // Section: Legal regulation
  regTitle: string;
  regIntro: string;
  regBreakTitle: string;
  regBreakText: string;
  regBreakList: string[];

  // Section: Supplementary FAQ
  faq2Title: string;
  faq2Items: FAQItem[];

  // Section: Yearly
  yearlyTitle: string;
  yearlyText: string;
  yearlyExTitle: string;
  yearlyExLine1: string;
  yearlyExLine2: string;

  // CTA
  ctaTitle: string;
  ctaText: string;
  ctaBtn: string;
}

const de: HomeContent = {
  introTitle: 'Mehr zum Thema Zeit & Arbeit',
  introText: 'Der Arbeitszeit-Rechner berechnet tägliche, wöchentliche und monatliche Arbeitszeiten in Stunden, Minuten und Dezimalformat. Arbeitsbeginn und Arbeitsende eingeben, Pausenzeiten festlegen — Brutto- und Nettoarbeitszeit, Überstunden und Dezimalstunden werden sofort berechnet. Der Rechner eignet sich für Arbeitnehmer, Selbstständige und Unternehmen in Deutschland, die Arbeitszeiten nach dem Arbeitszeitgesetz (ArbZG) dokumentieren.',

  howTitle: 'Arbeitszeit Rechner: So funktioniert\'s',
  howSubtitle: 'Der Arbeitszeitrechner berechnet Nettoarbeitszeit in 3 Schritten. Keine Anmeldung, keine Installation — direkt im Browser nutzbar.',
  step1Title: 'Arbeitszeiten eingeben',
  step1Text: 'Arbeitsbeginn und Arbeitsende im Zeitformat (HH:MM) eingeben. Das heutige Datum wird automatisch vorgeschlagen. Mehrere Pausen mit individueller Dauer hinzufügen.',
  step2Title: 'Automatische Berechnung',
  step2Text: 'Brutto- und Nettoarbeitszeit, Überstunden und Dezimalstunden werden sofort berechnet. Zwischen HH:MM-Format und Dezimalformat umschalten — passend für Buchhaltung und Lohnabrechnung.',
  step3Title: 'Export für Buchhaltung',
  step3Text: 'Ergebnisse in die Wochenübersicht speichern und per Klick kopieren. Die Wochenübersicht zeigt alle Einträge mit Brutto, Netto, Pausen und Überstunden auf einen Blick.',

  funcTitle: 'So funktioniert der Arbeitszeitrechner',
  funcH3a: 'Arbeitszeit in Stunden und Minuten',
  funcH3aText: 'Die Nettoarbeitszeit ergibt sich aus der Differenz zwischen Arbeitsende und Arbeitsbeginn, abzüglich aller Pausenzeiten. Bei einem Arbeitsbeginn um 08:00 Uhr, einem Arbeitsende um 17:00 Uhr und 30 Minuten Pause beträgt die Bruttoarbeitszeit 9 Stunden (9:00) und die Nettoarbeitszeit 8 Stunden 30 Minuten (8:30).',
  funcH3b: 'Auswertungen erstellen',
  funcH3bText: 'Die Wochenübersicht sammelt alle gespeicherten Tageseinträge. Der Wochenverlauf-Chart zeigt Ist-Stunden und Soll-Stunden im direkten Vergleich. So lassen sich Überstunden und Minusstunden über eine Woche hinweg erkennen und dokumentieren.',
  funcH3c: 'Arbeitsbeginn und Arbeitsende eingeben',
  funcH3cText: 'Die Zeiteingabe akzeptiert Werte im 24-Stunden-Format. Nachtarbeit wird automatisch erkannt: Liegt das Arbeitsende vor dem Arbeitsbeginn, rechnet der Arbeitszeitrechner über Mitternacht hinaus. Bei einem Beginn um 22:00 Uhr und Ende um 06:00 Uhr ergibt sich eine Bruttoarbeitszeit von 8 Stunden.',

  breakTitle: 'Gesetzliche Pausenzeiten nach deutschem Arbeitsrecht',
  breakIntro: 'Das Arbeitszeitgesetz (ArbZG) regelt Pausenzeiten für alle Arbeitnehmer in Deutschland. Pausen zählen nicht zur Arbeitszeit und werden von der Bruttoarbeitszeit abgezogen.',
  break30Title: '30 Minuten Pause',
  break30Text: 'Arbeitnehmer mit einer Arbeitszeit von mehr als 6 Stunden bis zu 9 Stunden müssen mindestens 30 Minuten Pause nehmen. Die Pause kann in 2 Abschnitte von je 15 Minuten aufgeteilt werden.',
  break45Title: '45 Minuten Pause',
  break45Text: 'Arbeitnehmer mit einer Arbeitszeit von mehr als 9 Stunden müssen mindestens 45 Minuten Pause nehmen. Aufteilen in Abschnitte von mindestens 15 Minuten ist zulässig — z. B. 3 Pausen à 15 Minuten.',
  breakTableTitle: 'Pausenzeiten-Übersicht',
  breakTableHeaders: ['Arbeitszeit', 'Mindestpause', 'Gesetzliche Grundlage'],
  breakTableRows: [
    ['Bis 6 Stunden', 'Keine Pause vorgeschrieben', '§ 4 ArbZG'],
    ['Über 6 bis 9 Stunden', '30 Minuten', '§ 4 ArbZG'],
    ['Über 9 Stunden', '45 Minuten', '§ 4 ArbZG'],
  ],

  appTitle: 'Arbeitszeitrechner für verschiedene Anwendungen',
  appDailyTitle: 'Tägliche Arbeitszeit',
  appDailyText: 'Die tägliche Arbeitszeit berechnet sich aus Arbeitsende minus Arbeitsbeginn minus Pausenzeit. Für eine exakte Dokumentation lassen sich mehrere Pausen einzeln eintragen.',
  appDailyExTitle: 'Praktisches Beispiel:',
  appDailyExLabel: 'Berechnung',
  appDailyExLine1: 'Arbeitsbeginn: 07:30 · Arbeitsende: 16:45 · Pause: 45 Min.',
  appDailyExLine2: 'Bruttoarbeitszeit: 9 Stunden 15 Minuten (9:15)',
  appDailyExLine3: '8 Stunden 30 Minuten (8:30) = 8,50 Dezimalstunden',
  appWeeklyTitle: 'Wochenarbeitszeit',
  appWeeklyText: 'Die Wochenübersicht addiert alle Tageseinträge und zeigt die gesamte Wochenarbeitszeit. So lässt sich die tatsächliche Arbeitszeit mit der vertraglich vereinbarten Wochenarbeitszeit vergleichen.',
  appOvertimeTitle: 'Überstundenberechnung:',
  appOvertimeLabel: 'Beispiel 40-Stunden-Woche',
  appOvertimeLine1: 'Soll-Arbeitszeit: 40 Stunden pro Woche (8 Stunden × 5 Tage)',
  appOvertimeLine2: 'Ist-Arbeitszeit: 42 Stunden 30 Minuten',
  appOvertimeLine3: '+2 Stunden 30 Minuten (+2,50 Dezimalstunden)',

  decTitle: 'Arbeitszeitrechner mit Dezimalangabe',
  decIntro: 'Dezimalstunden (Industriestunden) vereinfachen die Lohn- und Gehaltsabrechnung. Statt 7 Stunden 45 Minuten wird 7,75 Stunden in die Buchhaltung eingetragen. Der Arbeitszeitrechner zeigt Ergebnisse in beiden Formaten gleichzeitig.',
  decConvertTitle: 'Stunden in Dezimal umrechnen',
  decConvertText: 'Die Umrechnung: Minutenanteil durch 60 teilen und zum Stundenanteil addieren. Der Arbeitszeitrechner übernimmt diese Umrechnung per Klick auf „Dezimal" im Ergebnisbereich.',
  decTableTitle: 'Umrechnungstabelle:',
  decTableHeaders: ['Minuten', 'Dezimal', 'Minuten', 'Dezimal'],
  decIndustrialTitle: 'Industrieminuten Rechner',
  decIndustrialText: 'Industrieminuten teilen eine Stunde in 100 Einheiten statt 60. Eine Industrieminute entspricht 0,6 regulärer Minuten. 30 reguläre Minuten = 50 Industrieminuten.',
  decIndustrialExTitle: 'Beispiel:',
  decIndustrialExLine1: 'Arbeitszeit: 8 Stunden 20 Minuten',
  decIndustrialExLine2: 'In Dezimalstunden: 8,33 Stunden (20 ÷ 60 = 0,33)',
  decIndustrialExLine3: 'In Industrieminuten: 833 Industrieminuten (8,33 × 100)',

  salaryTitle: 'Arbeitszeit und Gehaltsabrechnung',
  salaryMonthTitle: 'Monatliche Arbeitsstunden berechnen',
  salaryMonthText: 'Die durchschnittliche monatliche Arbeitszeit beträgt 173,33 Stunden bei einer 40-Stunden-Woche. Für Teilzeit, Minijob und andere Arbeitszeitmodelle ändert sich die monatliche Stundenanzahl entsprechend.',
  salaryFormulaTitle: 'Berechnungsformel:',
  salaryFormulaLabel: 'Formel',
  salaryFormulaLine1: 'Wochenstunden × 52 Wochen ÷ 12 Monate = monatliche Arbeitsstunden',
  salaryFormulaLines: [
    '40 h × 52 ÷ 12 = 173,33 Stunden / Monat',
    '38,5 h × 52 ÷ 12 = 166,83 Stunden / Monat',
    '35 h × 52 ÷ 12 = 151,67 Stunden / Monat',
    '20 h × 52 ÷ 12 = 86,67 Stunden / Monat (Teilzeit)',
  ],
  salaryTvodTitle: 'TVöD Arbeitszeitrechner',
  salaryTvodText: 'Im öffentlichen Dienst nach TVöD beträgt die regelmäßige wöchentliche Arbeitszeit 39 Stunden (West) bzw. 40 Stunden (Ost). Die monatliche Arbeitszeit berechnet sich identisch: 39 Stunden × 52 ÷ 12 = 169,00 Stunden pro Monat.',

  faqTitle: 'Alles was Sie über Arbeitszeit wissen müssen',
  faqItems: [
    { q: 'Wie funktioniert der Arbeitszeitrechner?', a: 'Arbeitsbeginn und Arbeitsende eingeben, Pausenzeiten festlegen — der Rechner berechnet Brutto- und Nettoarbeitszeit sofort. Alle Daten bleiben lokal im Browser gespeichert.' },
    { q: 'Welche Pausenzeiten sind nach deutschem Recht Pflicht?', a: 'Das Arbeitszeitgesetz (ArbZG) schreibt 30 Minuten Pause bei mehr als 6 Stunden Arbeitszeit und 45 Minuten Pause bei mehr als 9 Stunden Arbeitszeit vor. Ruhepausen können in Abschnitte von mindestens 15 Minuten aufgeteilt werden.' },
    { q: 'Kann ich mit dem Rechner Überstunden berechnen?', a: 'Ja, der Arbeitszeitrechner berechnet Überstunden automatisch. Die Soll-Arbeitszeit eintragen (z. B. 8 Stunden), und der Rechner zeigt die Differenz zwischen Ist- und Soll-Arbeitszeit.' },
    { q: 'Wie rechne ich Stunden in Dezimalstunden um?', a: 'Die Minutenzahl durch 60 teilen ergibt die Dezimalstunden. 7 Stunden 45 Minuten entsprechen 7,75 Dezimalstunden (45 ÷ 60 = 0,75). Der Rechner bietet eine Umschaltfunktion zwischen HH:MM und Dezimalformat.' },
    { q: 'Was zählt alles als Arbeitszeit?', a: 'Arbeitszeit umfasst die Zeit vom Arbeitsbeginn bis zum Arbeitsende, abzüglich Ruhepausen. Wegezeiten zwischen Wohnort und Arbeitsstätte zählen nicht zur Arbeitszeit. Dienstreisen und Bereitschaftsdienst können je nach Arbeitsvertrag und Tarifvertrag als Arbeitszeit gelten.' },
    { q: 'Wann kann ich Feierabend machen?', a: 'Den Arbeitsbeginn und die Soll-Arbeitszeit eingeben — der Rechner zeigt, wann der Feierabend beginnt. Bei 8 Stunden Soll-Arbeitszeit und 30 Minuten Pause ab 08:00 Uhr ist Feierabend um 16:30 Uhr.' },
    { q: 'Wie viele Arbeitsstunden hat ein Monat?', a: 'Ein Monat hat durchschnittlich 173,33 Arbeitsstunden bei einer 40-Stunden-Woche. Die Berechnung: 40 Stunden × 52 Wochen ÷ 12 Monate = 173,33 Stunden. Bei einer 38,5-Stunden-Woche sind es 166,83 Stunden pro Monat.' },
    { q: 'Ist der Arbeitszeitrechner wirklich kostenlos?', a: 'Ja, der Arbeitszeitrechner ist vollständig kostenlos und werbefrei. Keine Registrierung, keine versteckten Kosten. Alle Berechnungen laufen lokal im Browser — keine Daten werden an Server übertragen.' },
    { q: 'Gelten dieselben Arbeitszeitregeln im Homeoffice?', a: 'Ja, das Arbeitszeitgesetz (ArbZG) gilt auch im Homeoffice. Maximale tägliche Arbeitszeit, Pausenregelungen und Ruhezeiten von mindestens 11 Stunden zwischen zwei Arbeitstagen gelten unverändert.' },
    { q: 'Wie viele Stunden darf man maximal täglich arbeiten?', a: 'Die reguläre tägliche Höchstarbeitszeit beträgt 8 Stunden nach dem ArbZG. Eine Verlängerung auf 10 Stunden pro Tag ist zulässig, wenn innerhalb von 6 Kalendermonaten oder 24 Wochen ein Durchschnitt von 8 Stunden pro Werktag eingehalten wird.' },
    { q: 'Wie kann ich meinen Stundennachweis als Dokumentation nutzen?', a: 'Die Wochenübersicht im Arbeitszeitrechner dient als digitaler Stundennachweis. Tägliche Arbeitszeiten speichern, Brutto- und Nettoarbeitszeit mit Pausen dokumentieren und die Ergebnisse per Kopier-Funktion exportieren.' },
    { q: 'Wie viele Stunden arbeite ich pro Jahr?', a: 'Bei einer 40-Stunden-Woche und 30 Urlaubstagen beträgt die Jahresarbeitszeit ca. 1.840 Stunden. Die Berechnung: (52 Wochen × 40 Stunden) – (30 Urlaubstage × 8 Stunden) = 1.840 Stunden. Feiertage reduzieren die Zahl weiter.' },
  ],

  whyTitle: 'Warum unser Arbeitszeitrechner die beste Wahl ist',
  whyCards: [
    { icon: '🎯', title: 'Vollständige Funktionen', text: 'Brutto-/Nettoarbeitszeit, Überstundenberechnung, Dezimalumrechnung, Wochenübersicht und Chart-Auswertung — alles in einem Tool ohne Einschränkungen.' },
    { icon: '⚡', title: 'Einfach & Sicher', text: 'Keine Registrierung, keine Werbung, keine Datenübertragung. Alle Berechnungen laufen lokal im Browser. Daten bleiben ausschließlich auf dem eigenen Gerät gespeichert.' },
    { icon: '💼', title: 'Perfekt für Unternehmen und Selbstständige', text: 'Zeiterfassung für Mitarbeiter, Stundennachweis für Freelancer, Arbeitszeitdokumentation für die Buchhaltung — der Rechner deckt alle Anwendungsfälle ab.' },
    { icon: '🏆', title: 'Kostenlos & ohne Anmeldung', text: '100 % kostenlos, werbefrei und sofort nutzbar. Kein Account, keine E-Mail-Adresse, keine versteckten Kosten. Einfach öffnen und berechnen.' },
  ],

  countryTitle: 'Alles über Arbeitszeit in Deutschland',
  countryCards: [
    { title: '⚖️ Das Arbeitszeitgesetz (ArbZG) im Überblick', text1: 'Das ArbZG regelt die maximale tägliche Arbeitszeit (8 Stunden, verlängerbar auf 10 Stunden), Ruhepausen (mindestens 30 bzw. 45 Minuten) und Ruhezeiten (mindestens 11 Stunden zwischen 2 Arbeitstagen).', text2: 'Sonn- und Feiertagsarbeit ist grundsätzlich verboten, mit Ausnahmen für bestimmte Branchen wie Gastronomie, Gesundheitswesen und Verkehr.' },
    { title: '🏠 Zeiterfassung im Homeoffice', text1: 'Das ArbZG gilt im Homeoffice genauso wie im Büro. Arbeitnehmer müssen ihre Arbeitszeiten auch zuhause dokumentieren. Maximale tägliche Arbeitszeit, Pausenregelungen und 11 Stunden Ruhezeit zwischen 2 Arbeitstagen bleiben unverändert.', text2: 'Der Arbeitszeitrechner eignet sich für die digitale Zeiterfassung im Homeoffice — einfach im Browser öffnen und Zeiten eintragen.' },
    { title: '📊 Arbeitszeit-Beispiele: Brutto vs. Netto', text1: 'Bruttoarbeitszeit ist die gesamte Zeit vom Arbeitsbeginn bis zum Arbeitsende. Nettoarbeitszeit ist die Bruttoarbeitszeit abzüglich aller Pausen.', text2: 'Bei 08:00–17:00 Uhr mit 60 Minuten Pause: Brutto = 9:00 Stunden, Netto = 8:00 Stunden.' },
    { title: 'Arbeitszeit im öffentlichen Dienst (TVöD)', text1: 'Der Tarifvertrag für den öffentlichen Dienst (TVöD) sieht 39 Stunden pro Woche (West) und 40 Stunden pro Woche (Ost) vor. In manchen Bereichen gelten abweichende Regelungen, z. B. im Krankenhaus oder bei der Feuerwehr.', text2: 'Wöchentliche Soll-Arbeitszeit im Rechner auf 39 oder 40 Stunden einstellen — Überstunden werden automatisch berechnet.' },
  ],
  legalTitle: '⚠️ Rechtlicher Hinweis',
  legalText: 'Die Informationen auf dieser Seite dienen der allgemeinen Orientierung und ersetzen keine Rechtsberatung. Für verbindliche Auskünfte zum Arbeitszeitgesetz (ArbZG), TVöD oder individuellen Arbeitsvertrag einen Fachanwalt für Arbeitsrecht oder die zuständige Aufsichtsbehörde kontaktieren.',

  regTitle: 'Wie sind Arbeitszeiten gesetzlich geregelt?',
  regIntro: 'Das Arbeitszeitgesetz (ArbZG) gilt für alle Arbeitnehmer in Deutschland. Es regelt 3 Kernbereiche: maximale Arbeitszeit, Ruhepausen und Ruhezeiten.',
  regBreakTitle: 'Gesetzliche Pausenzeiten',
  regBreakText: 'Ruhepausen unterbrechen die Arbeitszeit und zählen nicht als bezahlte Arbeitszeit. Der Arbeitgeber muss die Pausenzeiten gewähren — Arbeitnehmer müssen die Pausen auch tatsächlich nehmen.',
  regBreakList: [
    'Bis 6 Stunden Arbeitszeit: keine Pflichtpause',
    'Über 6 bis 9 Stunden: mindestens 30 Minuten Ruhepause',
    'Über 9 Stunden: mindestens 45 Minuten Ruhepause',
    'Aufteilung in Abschnitte von mindestens 15 Minuten ist zulässig',
    'Ruhezeit zwischen 2 Arbeitstagen: mindestens 11 Stunden',
  ],

  faq2Title: 'FAQs zum Arbeitszeitrechner',
  faq2Items: [
    { q: 'Ist die Arbeitszeiterfassung gesetzlich geregelt?', a: 'Ja, der Europäische Gerichtshof (EuGH) hat 2019 entschieden, dass Arbeitgeber ein System zur Erfassung der täglichen Arbeitszeit einrichten müssen. Das Bundesarbeitsgericht (BAG) hat 2022 bestätigt, dass diese Pflicht auch in Deutschland gilt. Arbeitgeber müssen Beginn, Ende und Dauer der täglichen Arbeitszeit aufzeichnen.' },
    { q: 'Pausenregelungen: Zählen Pausen zur Arbeitszeit?', a: 'Nein, Ruhepausen zählen nicht zur bezahlten Arbeitszeit. Pausen werden von der Bruttoarbeitszeit abgezogen. Die Nettoarbeitszeit (= vergütete Arbeitszeit) ergibt sich aus Bruttoarbeitszeit minus Pausenzeit. Der Arbeitszeitrechner zeigt diese Berechnung automatisch an.' },
    { q: 'Was ist der Unterschied zwischen Ruhepausen und Ruhezeiten?', a: 'Ruhepausen unterbrechen die Arbeitszeit innerhalb eines Arbeitstages (z. B. Mittagspause). Ruhezeiten sind die ununterbrochene Erholungszeit zwischen 2 Arbeitstagen — mindestens 11 Stunden nach § 5 ArbZG. Die Ruhezeit beginnt mit dem Arbeitsende und endet mit dem nächsten Arbeitsbeginn.' },
    { q: 'Wie hoch ist die tägliche Arbeitszeit?', a: 'Die reguläre tägliche Höchstarbeitszeit beträgt 8 Stunden pro Werktag (§ 3 ArbZG). Eine Verlängerung auf bis zu 10 Stunden pro Tag ist möglich, wenn innerhalb von 6 Monaten oder 24 Wochen der Durchschnitt von 8 Stunden pro Werktag nicht überschritten wird.' },
    { q: 'Wie hoch ist die Wochenarbeitszeit?', a: 'Die maximale Wochenarbeitszeit beträgt 48 Stunden (6 Werktage × 8 Stunden) nach dem ArbZG. Die meisten Arbeitsverträge in Deutschland sehen 35 bis 40 Stunden pro Woche vor. Im TVöD gelten 39 Stunden (West) und 40 Stunden (Ost).' },
    { q: 'Wie hoch ist die monatliche Arbeitszeit?', a: 'Bei einer 40-Stunden-Woche beträgt die monatliche Arbeitszeit durchschnittlich 173,33 Stunden. Berechnung: 40 Stunden × 52 Wochen ÷ 12 Monate. Bei 35 Stunden pro Woche sind es 151,67 Stunden, bei 20 Stunden (Teilzeit) sind es 86,67 Stunden pro Monat.' },
  ],

  yearlyTitle: 'Wie viele Stunden arbeite ich pro Jahr?',
  yearlyText: 'Die Jahresarbeitszeit bei einer 40-Stunden-Woche und 30 Urlaubstagen beträgt ca. 1.840 Stunden.',
  yearlyExTitle: 'Jahresarbeitszeit berechnen',
  yearlyExLine1: '(52 Wochen × 40 Stunden) – (30 Urlaubstage × 8 Stunden) = 1.840 Stunden',
  yearlyExLine2: 'Mit Feiertagen (ca. 10 pro Jahr): 1.840 – 80 = 1.760 Stunden netto pro Jahr',

  ctaTitle: 'Arbeitszeit jetzt berechnen',
  ctaText: 'Kostenlos, werbefrei und ohne Anmeldung — direkt im Browser berechnen.',
  ctaBtn: 'Zum Arbeitszeitrechner',
};

const en: HomeContent = {
  introTitle: 'More About Time & Work',
  introText: 'The work time calculator computes daily, weekly, and monthly working hours in hours, minutes, and decimal format. Enter start and end times, set break durations — gross and net working hours, overtime, and decimal hours are calculated instantly. The calculator is suitable for employees, freelancers, and businesses that need to document working hours.',

  howTitle: 'Work Time Calculator: How It Works',
  howSubtitle: 'The calculator computes net working hours in 3 steps. No registration, no installation — works directly in the browser.',
  step1Title: 'Enter Working Hours',
  step1Text: 'Enter start and end times in HH:MM format. Today\'s date is automatically suggested. Add multiple breaks with individual durations.',
  step2Title: 'Automatic Calculation',
  step2Text: 'Gross and net working hours, overtime, and decimal hours are calculated instantly. Switch between HH:MM format and decimal format — suitable for accounting and payroll.',
  step3Title: 'Export for Accounting',
  step3Text: 'Save results to the weekly overview and copy with a single click. The weekly overview shows all entries with gross, net, breaks, and overtime at a glance.',

  funcTitle: 'How the Work Time Calculator Works',
  funcH3a: 'Working Hours in Hours and Minutes',
  funcH3aText: 'Net working time equals the difference between end time and start time, minus all break times. With a start time of 08:00, an end time of 17:00, and a 30-minute break, gross working time is 9 hours (9:00) and net working time is 8 hours 30 minutes (8:30).',
  funcH3b: 'Create Reports',
  funcH3bText: 'The weekly overview collects all saved daily entries. The weekly trend chart shows actual hours and target hours side by side. This makes it easy to identify and document overtime and deficit hours across a week.',
  funcH3c: 'Enter Start and End Times',
  funcH3cText: 'Time input accepts values in 24-hour format. Night shifts are automatically detected: when the end time is before the start time, the calculator counts across midnight. A start at 22:00 and end at 06:00 results in 8 hours of gross working time.',

  breakTitle: 'Mandatory Break Times Under Labor Law',
  breakIntro: 'Labor law regulates break times for all employees. Breaks do not count as working time and are deducted from gross working hours.',
  break30Title: '30 Minutes Break',
  break30Text: 'Employees working more than 6 hours up to 9 hours must take at least a 30-minute break. The break can be split into 2 segments of 15 minutes each.',
  break45Title: '45 Minutes Break',
  break45Text: 'Employees working more than 9 hours must take at least a 45-minute break. Splitting into segments of at least 15 minutes is permitted — e.g., 3 breaks of 15 minutes each.',
  breakTableTitle: 'Break Times Overview',
  breakTableHeaders: ['Working Time', 'Minimum Break', 'Legal Basis'],
  breakTableRows: [
    ['Up to 6 hours', 'No break required', 'Labor Law'],
    ['Over 6 to 9 hours', '30 minutes', 'Labor Law'],
    ['Over 9 hours', '45 minutes', 'Labor Law'],
  ],

  appTitle: 'Work Time Calculator for Various Applications',
  appDailyTitle: 'Daily Working Time',
  appDailyText: 'Daily working time equals end time minus start time minus break time. For precise documentation, multiple breaks can be entered individually.',
  appDailyExTitle: 'Practical Example:',
  appDailyExLabel: 'Calculation',
  appDailyExLine1: 'Start: 07:30 · End: 16:45 · Break: 45 min.',
  appDailyExLine2: 'Gross working time: 9 hours 15 minutes (9:15)',
  appDailyExLine3: '8 hours 30 minutes (8:30) = 8.50 decimal hours',
  appWeeklyTitle: 'Weekly Working Time',
  appWeeklyText: 'The weekly overview adds all daily entries and shows the total weekly working time. This makes it easy to compare actual working time with contractual weekly hours.',
  appOvertimeTitle: 'Overtime Calculation:',
  appOvertimeLabel: 'Example 40-hour week',
  appOvertimeLine1: 'Target working time: 40 hours per week (8 hours × 5 days)',
  appOvertimeLine2: 'Actual working time: 42 hours 30 minutes',
  appOvertimeLine3: '+2 hours 30 minutes (+2.50 decimal hours)',

  decTitle: 'Work Time Calculator with Decimal Display',
  decIntro: 'Decimal hours (industrial hours) simplify payroll and salary calculations. Instead of 7 hours 45 minutes, 7.75 hours is entered in accounting. The calculator shows results in both formats simultaneously.',
  decConvertTitle: 'Convert Hours to Decimal',
  decConvertText: 'Divide the minutes by 60 and add to the hours. The calculator performs this conversion with a click on "Decimal" in the results section.',
  decTableTitle: 'Conversion Table:',
  decTableHeaders: ['Minutes', 'Decimal', 'Minutes', 'Decimal'],
  decIndustrialTitle: 'Industrial Minutes Calculator',
  decIndustrialText: 'Industrial minutes divide an hour into 100 units instead of 60. One industrial minute equals 0.6 regular minutes. 30 regular minutes = 50 industrial minutes.',
  decIndustrialExTitle: 'Example:',
  decIndustrialExLine1: 'Working time: 8 hours 20 minutes',
  decIndustrialExLine2: 'In decimal hours: 8.33 hours (20 ÷ 60 = 0.33)',
  decIndustrialExLine3: 'In industrial minutes: 833 industrial minutes (8.33 × 100)',

  salaryTitle: 'Working Time and Payroll',
  salaryMonthTitle: 'Calculate Monthly Working Hours',
  salaryMonthText: 'The average monthly working time is 173.33 hours for a 40-hour week. For part-time, mini-jobs, and other work models, the monthly hours change accordingly.',
  salaryFormulaTitle: 'Calculation Formula:',
  salaryFormulaLabel: 'Formula',
  salaryFormulaLine1: 'Weekly hours × 52 weeks ÷ 12 months = monthly working hours',
  salaryFormulaLines: [
    '40 h × 52 ÷ 12 = 173.33 hours / month',
    '38.5 h × 52 ÷ 12 = 166.83 hours / month',
    '35 h × 52 ÷ 12 = 151.67 hours / month',
    '20 h × 52 ÷ 12 = 86.67 hours / month (part-time)',
  ],
  salaryTvodTitle: 'Public Sector Working Hours',
  salaryTvodText: 'In the German public sector (TVöD), the standard weekly working time is 39 hours (West) or 40 hours (East). Monthly calculation: 39 hours × 52 ÷ 12 = 169.00 hours per month.',

  faqTitle: 'Everything You Need to Know About Working Hours',
  faqItems: [
    { q: 'How does the work time calculator work?', a: 'Enter start and end times, set break durations — the calculator computes gross and net working hours instantly. All data stays locally stored in the browser.' },
    { q: 'What break times are legally required?', a: 'Labor law requires a 30-minute break for more than 6 hours of work and a 45-minute break for more than 9 hours. Breaks can be split into segments of at least 15 minutes each.' },
    { q: 'Can I calculate overtime with the calculator?', a: 'Yes, the calculator computes overtime automatically. Enter the target working time (e.g., 8 hours) and the calculator shows the difference between actual and target hours.' },
    { q: 'How do I convert hours to decimal hours?', a: 'Divide the minutes by 60 to get decimal hours. 7 hours 45 minutes equals 7.75 decimal hours (45 ÷ 60 = 0.75). The calculator offers a toggle between HH:MM and decimal format.' },
    { q: 'What counts as working time?', a: 'Working time covers the period from start to end of work, minus rest breaks. Commuting time between home and workplace does not count. Business travel and on-call duty may count depending on the employment contract.' },
    { q: 'When can I finish work?', a: 'Enter start time and target working hours — the calculator shows when the workday ends. With 8 target hours and a 30-minute break starting at 08:00, the end of work is at 16:30.' },
    { q: 'How many working hours are in a month?', a: 'A month has an average of 173.33 working hours for a 40-hour week. Calculation: 40 hours × 52 weeks ÷ 12 months = 173.33 hours. For a 38.5-hour week, it is 166.83 hours per month.' },
    { q: 'Is the work time calculator really free?', a: 'Yes, the calculator is completely free and ad-free. No registration, no hidden costs. All calculations run locally in the browser — no data is transmitted to servers.' },
    { q: 'Do the same rules apply when working from home?', a: 'Yes, labor law applies equally when working from home. Maximum daily working hours, break regulations, and minimum rest periods of 11 hours between two workdays remain unchanged.' },
    { q: 'How many hours can you work per day maximum?', a: 'The regular daily maximum is 8 hours. An extension to 10 hours per day is permitted if the average of 8 hours per workday is maintained over 6 calendar months or 24 weeks.' },
    { q: 'How can I use my timesheet as documentation?', a: 'The weekly overview in the calculator serves as a digital timesheet. Save daily working times, document gross and net hours with breaks, and export results using the copy function.' },
    { q: 'How many hours do I work per year?', a: 'With a 40-hour week and 30 vacation days, annual working time is approximately 1,840 hours. Calculation: (52 weeks × 40 hours) – (30 vacation days × 8 hours) = 1,840 hours. Public holidays reduce this further.' },
  ],

  whyTitle: 'Why Our Work Time Calculator Is the Best Choice',
  whyCards: [
    { icon: '🎯', title: 'Complete Features', text: 'Gross/net working time, overtime calculation, decimal conversion, weekly overview, and chart analysis — all in one tool without limitations.' },
    { icon: '⚡', title: 'Simple & Secure', text: 'No registration, no ads, no data transfer. All calculations run locally in the browser. Data stays exclusively on your own device.' },
    { icon: '💼', title: 'Perfect for Businesses and Freelancers', text: 'Time tracking for employees, timesheets for freelancers, work time documentation for accounting — the calculator covers all use cases.' },
    { icon: '🏆', title: 'Free & No Registration', text: '100% free, ad-free, and ready to use instantly. No account, no email address, no hidden costs. Just open and calculate.' },
  ],

  countryTitle: 'All About Working Hours',
  countryCards: [
    { title: '⚖️ Labor Law Overview', text1: 'Labor law regulates maximum daily working time (8 hours, extendable to 10), rest breaks (at least 30 or 45 minutes), and rest periods (at least 11 hours between 2 workdays).', text2: 'Work on Sundays and public holidays is generally prohibited, with exceptions for specific industries such as hospitality, healthcare, and transport.' },
    { title: '🏠 Time Tracking When Working from Home', text1: 'Labor law applies at home the same as in the office. Employees must document working hours at home too. Maximum daily working time, break rules, and 11-hour rest periods between workdays remain unchanged.', text2: 'The calculator is suitable for digital time tracking from home — open in the browser and enter times.' },
    { title: '📊 Working Time Examples: Gross vs. Net', text1: 'Gross working time is the total time from start to end of work. Net working time is gross time minus all breaks.', text2: 'For 08:00–17:00 with a 60-minute break: Gross = 9:00 hours, Net = 8:00 hours.' },
    { title: 'Public Sector Working Hours', text1: 'The public sector collective agreement provides 39 hours per week (West Germany) and 40 hours per week (East Germany). Different rules may apply in specific areas such as hospitals or fire departments.', text2: 'Set the weekly target in the calculator to 39 or 40 hours — overtime is calculated automatically.' },
  ],
  legalTitle: '⚠️ Legal Disclaimer',
  legalText: 'The information on this page is for general guidance only and does not constitute legal advice. For binding information about labor law or individual employment contracts, contact a labor law attorney or the relevant authority.',

  regTitle: 'How Are Working Hours Legally Regulated?',
  regIntro: 'Labor law applies to all employees. It regulates 3 core areas: maximum working time, rest breaks, and rest periods.',
  regBreakTitle: 'Mandatory Break Times',
  regBreakText: 'Rest breaks interrupt working time and do not count as paid working time. Employers must provide break times — employees must actually take the breaks.',
  regBreakList: [
    'Up to 6 hours of work: no mandatory break',
    'Over 6 to 9 hours: at least 30 minutes rest break',
    'Over 9 hours: at least 45 minutes rest break',
    'Splitting into segments of at least 15 minutes is permitted',
    'Rest period between 2 workdays: at least 11 hours',
  ],

  faq2Title: 'FAQs About the Work Time Calculator',
  faq2Items: [
    { q: 'Is time tracking legally required?', a: 'Yes, the European Court of Justice (ECJ) ruled in 2019 that employers must set up a system for recording daily working time. The Federal Labor Court confirmed in 2022 that this obligation applies. Employers must record the start, end, and duration of daily working hours.' },
    { q: 'Do breaks count as working time?', a: 'No, rest breaks do not count as paid working time. Breaks are deducted from gross working time. Net working time (= paid time) equals gross time minus break time. The calculator shows this automatically.' },
    { q: 'What is the difference between rest breaks and rest periods?', a: 'Rest breaks interrupt working time during a workday (e.g., lunch break). Rest periods are the uninterrupted recovery time between 2 workdays — at least 11 hours. The rest period starts at end of work and ends at the next start of work.' },
    { q: 'What is the maximum daily working time?', a: 'The regular daily maximum is 8 hours per workday. An extension to up to 10 hours per day is possible if the average of 8 hours per workday is not exceeded over 6 months or 24 weeks.' },
    { q: 'What is the maximum weekly working time?', a: 'The maximum weekly working time is 48 hours (6 workdays × 8 hours). Most employment contracts provide for 35 to 40 hours per week.' },
    { q: 'What is the average monthly working time?', a: 'For a 40-hour week, the monthly working time averages 173.33 hours. Calculation: 40 hours × 52 weeks ÷ 12 months. For 35 hours per week, it is 151.67 hours; for 20 hours (part-time), it is 86.67 hours per month.' },
  ],

  yearlyTitle: 'How Many Hours Do I Work Per Year?',
  yearlyText: 'Annual working time for a 40-hour week with 30 vacation days is approximately 1,840 hours.',
  yearlyExTitle: 'Calculate Annual Working Hours',
  yearlyExLine1: '(52 weeks × 40 hours) – (30 vacation days × 8 hours) = 1,840 hours',
  yearlyExLine2: 'With public holidays (approx. 10 per year): 1,840 – 80 = 1,760 net hours per year',

  ctaTitle: 'Calculate Your Working Hours Now',
  ctaText: 'Free, ad-free, and no registration required — calculate directly in the browser.',
  ctaBtn: 'Go to Calculator',
};

const fr: HomeContent = {
  introTitle: 'En savoir plus sur le temps de travail',
  introText: 'Le calculateur de temps de travail calcule les heures de travail quotidiennes, hebdomadaires et mensuelles en heures, minutes et format décimal. Saisissez les heures de début et de fin, définissez les pauses — le temps de travail brut et net, les heures supplémentaires et les heures décimales sont calculés instantanément. Le calculateur convient aux salariés, indépendants et entreprises.',

  howTitle: 'Calculateur de temps de travail : comment ça marche',
  howSubtitle: 'Le calculateur calcule le temps de travail net en 3 étapes. Pas d\'inscription, pas d\'installation — directement dans le navigateur.',
  step1Title: 'Saisir les horaires',
  step1Text: 'Saisissez les heures de début et de fin au format HH:MM. La date du jour est automatiquement proposée. Ajoutez plusieurs pauses avec des durées individuelles.',
  step2Title: 'Calcul automatique',
  step2Text: 'Le temps de travail brut et net, les heures supplémentaires et les heures décimales sont calculés instantanément. Basculez entre le format HH:MM et le format décimal — adapté à la comptabilité.',
  step3Title: 'Export pour la comptabilité',
  step3Text: 'Enregistrez les résultats dans l\'aperçu hebdomadaire et copiez en un clic. L\'aperçu hebdomadaire affiche toutes les entrées avec brut, net, pauses et heures supplémentaires.',

  funcTitle: 'Fonctionnement du calculateur',
  funcH3a: 'Temps de travail en heures et minutes',
  funcH3aText: 'Le temps de travail net correspond à la différence entre l\'heure de fin et l\'heure de début, moins toutes les pauses. Avec un début à 08h00, une fin à 17h00 et 30 minutes de pause, le temps brut est de 9 heures (9:00) et le temps net de 8 heures 30 minutes (8:30).',
  funcH3b: 'Créer des rapports',
  funcH3bText: 'L\'aperçu hebdomadaire rassemble toutes les entrées quotidiennes enregistrées. Le graphique hebdomadaire compare les heures réelles et les heures cibles. Les heures supplémentaires et les heures manquantes sont facilement identifiables.',
  funcH3c: 'Saisir le début et la fin du travail',
  funcH3cText: 'La saisie accepte les valeurs au format 24 heures. Le travail de nuit est détecté automatiquement : lorsque l\'heure de fin précède l\'heure de début, le calcul s\'étend au-delà de minuit. Un début à 22h00 et une fin à 06h00 donnent 8 heures brutes.',

  breakTitle: 'Temps de pause obligatoires selon le droit du travail',
  breakIntro: 'Le droit du travail réglemente les temps de pause pour tous les salariés. Les pauses ne comptent pas comme temps de travail et sont déduites du temps brut.',
  break30Title: '30 minutes de pause',
  break30Text: 'Les salariés travaillant plus de 6 heures jusqu\'à 9 heures doivent prendre au moins 30 minutes de pause. La pause peut être divisée en 2 périodes de 15 minutes chacune.',
  break45Title: '45 minutes de pause',
  break45Text: 'Les salariés travaillant plus de 9 heures doivent prendre au moins 45 minutes de pause. La division en périodes d\'au moins 15 minutes est autorisée — par exemple 3 pauses de 15 minutes.',
  breakTableTitle: 'Aperçu des temps de pause',
  breakTableHeaders: ['Temps de travail', 'Pause minimale', 'Base légale'],
  breakTableRows: [
    ['Jusqu\'à 6 heures', 'Pas de pause obligatoire', 'Droit du travail'],
    ['Plus de 6 à 9 heures', '30 minutes', 'Droit du travail'],
    ['Plus de 9 heures', '45 minutes', 'Droit du travail'],
  ],

  appTitle: 'Calculateur pour différentes applications',
  appDailyTitle: 'Temps de travail quotidien',
  appDailyText: 'Le temps de travail quotidien se calcule : heure de fin moins heure de début moins temps de pause. Pour une documentation précise, plusieurs pauses peuvent être saisies individuellement.',
  appDailyExTitle: 'Exemple pratique :',
  appDailyExLabel: 'Calcul',
  appDailyExLine1: 'Début : 07h30 · Fin : 16h45 · Pause : 45 min.',
  appDailyExLine2: 'Temps brut : 9 heures 15 minutes (9:15)',
  appDailyExLine3: '8 heures 30 minutes (8:30) = 8,50 heures décimales',
  appWeeklyTitle: 'Temps de travail hebdomadaire',
  appWeeklyText: 'L\'aperçu hebdomadaire additionne toutes les entrées quotidiennes et affiche le temps de travail hebdomadaire total. Comparez facilement le temps réel avec les heures contractuelles.',
  appOvertimeTitle: 'Calcul des heures supplémentaires :',
  appOvertimeLabel: 'Exemple semaine de 40 heures',
  appOvertimeLine1: 'Temps cible : 40 heures par semaine (8 heures × 5 jours)',
  appOvertimeLine2: 'Temps réel : 42 heures 30 minutes',
  appOvertimeLine3: '+2 heures 30 minutes (+2,50 heures décimales)',

  decTitle: 'Calculateur avec affichage décimal',
  decIntro: 'Les heures décimales (heures industrielles) simplifient la paie et la comptabilité. Au lieu de 7 heures 45 minutes, on inscrit 7,75 heures. Le calculateur affiche les résultats dans les deux formats simultanément.',
  decConvertTitle: 'Convertir les heures en décimal',
  decConvertText: 'Divisez les minutes par 60 et ajoutez aux heures. Le calculateur effectue cette conversion en cliquant sur « Décimal » dans la zone de résultats.',
  decTableTitle: 'Table de conversion :',
  decTableHeaders: ['Minutes', 'Décimal', 'Minutes', 'Décimal'],
  decIndustrialTitle: 'Calculateur de minutes industrielles',
  decIndustrialText: 'Les minutes industrielles divisent une heure en 100 unités au lieu de 60. Une minute industrielle équivaut à 0,6 minute régulière. 30 minutes régulières = 50 minutes industrielles.',
  decIndustrialExTitle: 'Exemple :',
  decIndustrialExLine1: 'Temps de travail : 8 heures 20 minutes',
  decIndustrialExLine2: 'En heures décimales : 8,33 heures (20 ÷ 60 = 0,33)',
  decIndustrialExLine3: 'En minutes industrielles : 833 minutes industrielles (8,33 × 100)',

  salaryTitle: 'Temps de travail et paie',
  salaryMonthTitle: 'Calculer les heures mensuelles',
  salaryMonthText: 'Le temps de travail mensuel moyen est de 173,33 heures pour une semaine de 40 heures. Pour le temps partiel et d\'autres modèles, le nombre d\'heures mensuelles varie.',
  salaryFormulaTitle: 'Formule de calcul :',
  salaryFormulaLabel: 'Formule',
  salaryFormulaLine1: 'Heures hebdo × 52 semaines ÷ 12 mois = heures mensuelles',
  salaryFormulaLines: [
    '40 h × 52 ÷ 12 = 173,33 heures / mois',
    '38,5 h × 52 ÷ 12 = 166,83 heures / mois',
    '35 h × 52 ÷ 12 = 151,67 heures / mois',
    '20 h × 52 ÷ 12 = 86,67 heures / mois (temps partiel)',
  ],
  salaryTvodTitle: 'Heures dans le secteur public',
  salaryTvodText: 'Dans le secteur public allemand (TVöD), la durée hebdomadaire standard est de 39 heures (Ouest) ou 40 heures (Est). Calcul mensuel : 39 heures × 52 ÷ 12 = 169,00 heures par mois.',

  faqTitle: 'Tout ce que vous devez savoir sur le temps de travail',
  faqItems: [
    { q: 'Comment fonctionne le calculateur ?', a: 'Saisissez les heures de début et de fin, définissez les pauses — le calculateur calcule le temps brut et net instantanément. Toutes les données restent stockées localement dans le navigateur.' },
    { q: 'Quelles pauses sont obligatoires ?', a: 'Le droit du travail impose 30 minutes de pause pour plus de 6 heures de travail et 45 minutes pour plus de 9 heures. Les pauses peuvent être divisées en périodes d\'au moins 15 minutes.' },
    { q: 'Puis-je calculer les heures supplémentaires ?', a: 'Oui, le calculateur calcule les heures supplémentaires automatiquement. Saisissez le temps cible (par ex. 8 heures) et le calculateur affiche la différence entre temps réel et temps cible.' },
    { q: 'Comment convertir les heures en décimal ?', a: 'Divisez les minutes par 60 pour obtenir les heures décimales. 7 heures 45 minutes = 7,75 heures décimales (45 ÷ 60 = 0,75). Le calculateur offre un basculement entre HH:MM et format décimal.' },
    { q: 'Qu\'est-ce qui compte comme temps de travail ?', a: 'Le temps de travail couvre la période du début à la fin du travail, moins les pauses. Le temps de trajet domicile-travail ne compte pas. Les déplacements professionnels peuvent compter selon le contrat de travail.' },
    { q: 'Quand puis-je terminer ma journée ?', a: 'Saisissez l\'heure de début et le temps cible — le calculateur indique l\'heure de fin. Avec 8 heures cibles et 30 minutes de pause à partir de 08h00, la fin est à 16h30.' },
    { q: 'Combien d\'heures de travail dans un mois ?', a: 'Un mois compte en moyenne 173,33 heures de travail pour une semaine de 40 heures. Calcul : 40 heures × 52 semaines ÷ 12 mois = 173,33 heures.' },
    { q: 'Le calculateur est-il vraiment gratuit ?', a: 'Oui, le calculateur est entièrement gratuit et sans publicité. Pas d\'inscription, pas de coûts cachés. Tous les calculs s\'exécutent localement dans le navigateur.' },
    { q: 'Les mêmes règles s\'appliquent-elles en télétravail ?', a: 'Oui, le droit du travail s\'applique également en télétravail. La durée maximale quotidienne, les réglementations sur les pauses et les temps de repos d\'au moins 11 heures restent inchangés.' },
    { q: 'Combien d\'heures peut-on travailler par jour maximum ?', a: 'La durée maximale quotidienne régulière est de 8 heures. Une prolongation à 10 heures par jour est autorisée si la moyenne de 8 heures par jour ouvrable est respectée sur 6 mois.' },
    { q: 'Comment utiliser mon relevé d\'heures comme documentation ?', a: 'L\'aperçu hebdomadaire sert de relevé d\'heures numérique. Enregistrez les temps quotidiens, documentez les heures brutes et nettes avec les pauses, et exportez via la fonction de copie.' },
    { q: 'Combien d\'heures par an ?', a: 'Avec une semaine de 40 heures et 30 jours de congés, le temps annuel est d\'environ 1 840 heures. Calcul : (52 semaines × 40 heures) – (30 jours × 8 heures) = 1 840 heures.' },
  ],

  whyTitle: 'Pourquoi notre calculateur est le meilleur choix',
  whyCards: [
    { icon: '🎯', title: 'Fonctionnalités complètes', text: 'Temps brut/net, heures supplémentaires, conversion décimale, aperçu hebdomadaire et graphiques — tout dans un seul outil sans limitations.' },
    { icon: '⚡', title: 'Simple & Sécurisé', text: 'Pas d\'inscription, pas de publicité, pas de transfert de données. Tous les calculs s\'exécutent localement. Les données restent exclusivement sur votre appareil.' },
    { icon: '💼', title: 'Parfait pour les entreprises et indépendants', text: 'Suivi du temps pour les employés, relevés d\'heures pour les freelances, documentation pour la comptabilité — le calculateur couvre tous les cas d\'utilisation.' },
    { icon: '🏆', title: 'Gratuit & sans inscription', text: '100 % gratuit, sans publicité et prêt à l\'emploi. Pas de compte, pas d\'email, pas de coûts cachés. Ouvrez et calculez.' },
  ],

  countryTitle: 'Tout sur le temps de travail',
  countryCards: [
    { title: '⚖️ Aperçu du droit du travail', text1: 'Le droit du travail réglemente la durée maximale quotidienne (8 heures, extensible à 10), les pauses (minimum 30 ou 45 minutes) et les temps de repos (minimum 11 heures entre 2 journées).', text2: 'Le travail le dimanche et les jours fériés est généralement interdit, avec des exceptions pour certains secteurs.' },
    { title: '🏠 Suivi du temps en télétravail', text1: 'Le droit du travail s\'applique en télétravail comme au bureau. Les salariés doivent documenter leurs heures à domicile. Les règles sur la durée maximale, les pauses et les 11 heures de repos restent inchangées.', text2: 'Le calculateur convient au suivi numérique en télétravail — ouvrez dans le navigateur et saisissez les horaires.' },
    { title: '📊 Exemples : Brut vs. Net', text1: 'Le temps brut couvre la totalité du début à la fin du travail. Le temps net correspond au temps brut moins toutes les pauses.', text2: 'Pour 08h00–17h00 avec 60 minutes de pause : Brut = 9:00 heures, Net = 8:00 heures.' },
    { title: 'Temps de travail dans le secteur public', text1: 'Le secteur public allemand prévoit 39 heures par semaine (Ouest) et 40 heures par semaine (Est). Des règles différentes peuvent s\'appliquer dans certains secteurs.', text2: 'Réglez l\'objectif hebdomadaire dans le calculateur sur 39 ou 40 heures — les heures supplémentaires sont calculées automatiquement.' },
  ],
  legalTitle: '⚠️ Avis juridique',
  legalText: 'Les informations sur cette page sont fournies à titre indicatif et ne constituent pas un conseil juridique. Pour des informations contraignantes, contactez un avocat spécialisé en droit du travail.',

  regTitle: 'Comment le temps de travail est-il réglementé ?',
  regIntro: 'Le droit du travail s\'applique à tous les salariés. Il réglemente 3 domaines : durée maximale, pauses et temps de repos.',
  regBreakTitle: 'Temps de pause obligatoires',
  regBreakText: 'Les pauses interrompent le temps de travail et ne comptent pas comme temps rémunéré. L\'employeur doit accorder les pauses — les salariés doivent effectivement les prendre.',
  regBreakList: [
    'Jusqu\'à 6 heures : pas de pause obligatoire',
    'Plus de 6 à 9 heures : au moins 30 minutes de pause',
    'Plus de 9 heures : au moins 45 minutes de pause',
    'Division en périodes d\'au moins 15 minutes autorisée',
    'Temps de repos entre 2 journées : au moins 11 heures',
  ],

  faq2Title: 'FAQ sur le calculateur',
  faq2Items: [
    { q: 'Le suivi du temps est-il obligatoire ?', a: 'Oui, la Cour de justice de l\'UE (CJUE) a statué en 2019 que les employeurs doivent mettre en place un système d\'enregistrement du temps de travail quotidien. Les employeurs doivent enregistrer le début, la fin et la durée du travail quotidien.' },
    { q: 'Les pauses comptent-elles comme temps de travail ?', a: 'Non, les pauses ne comptent pas comme temps rémunéré. Elles sont déduites du temps brut. Le temps net (= temps rémunéré) = temps brut moins pauses. Le calculateur affiche ce calcul automatiquement.' },
    { q: 'Quelle différence entre pauses et temps de repos ?', a: 'Les pauses interrompent le travail pendant la journée (ex. pause déjeuner). Les temps de repos sont la période de récupération entre 2 journées — minimum 11 heures. Le repos commence à la fin du travail et se termine au début suivant.' },
    { q: 'Quelle est la durée maximale quotidienne ?', a: 'La durée maximale régulière est de 8 heures par jour ouvrable. Une extension jusqu\'à 10 heures est possible si la moyenne de 8 heures n\'est pas dépassée sur 6 mois ou 24 semaines.' },
    { q: 'Quelle est la durée maximale hebdomadaire ?', a: 'La durée maximale hebdomadaire est de 48 heures (6 jours × 8 heures). La plupart des contrats prévoient 35 à 40 heures par semaine.' },
    { q: 'Quelle est la durée mensuelle moyenne ?', a: 'Pour une semaine de 40 heures, la durée mensuelle moyenne est de 173,33 heures. Calcul : 40 heures × 52 semaines ÷ 12 mois. Pour 35 heures, c\'est 151,67 heures ; pour 20 heures (temps partiel), c\'est 86,67 heures.' },
  ],

  yearlyTitle: 'Combien d\'heures par an ?',
  yearlyText: 'Le temps de travail annuel pour une semaine de 40 heures avec 30 jours de congés est d\'environ 1 840 heures.',
  yearlyExTitle: 'Calculer le temps annuel',
  yearlyExLine1: '(52 semaines × 40 heures) – (30 jours de congés × 8 heures) = 1 840 heures',
  yearlyExLine2: 'Avec les jours fériés (env. 10 par an) : 1 840 – 80 = 1 760 heures nettes par an',

  ctaTitle: 'Calculez votre temps de travail maintenant',
  ctaText: 'Gratuit, sans publicité et sans inscription — calculez directement dans le navigateur.',
  ctaBtn: 'Accéder au calculateur',
};

const ar: HomeContent = {
  introTitle: 'المزيد عن الوقت والعمل',
  introText: 'تحسب حاسبة ساعات العمل ساعات العمل اليومية والأسبوعية والشهرية بالساعات والدقائق والتنسيق العشري. أدخل وقت البداية والنهاية، حدد فترات الاستراحة — يتم حساب إجمالي وصافي ساعات العمل والساعات الإضافية والساعات العشرية فوراً. تناسب الحاسبة الموظفين والمستقلين والشركات.',

  howTitle: 'حاسبة ساعات العمل: كيف تعمل',
  howSubtitle: 'تحسب الحاسبة صافي ساعات العمل في 3 خطوات. بدون تسجيل، بدون تثبيت — تعمل مباشرة في المتصفح.',
  step1Title: 'إدخال ساعات العمل',
  step1Text: 'أدخل وقت البداية والنهاية بتنسيق HH:MM. يُقترح تاريخ اليوم تلقائياً. أضف استراحات متعددة بمدد فردية.',
  step2Title: 'الحساب التلقائي',
  step2Text: 'يتم حساب إجمالي وصافي ساعات العمل والساعات الإضافية والساعات العشرية فوراً. بدّل بين تنسيق HH:MM والتنسيق العشري — مناسب للمحاسبة والرواتب.',
  step3Title: 'التصدير للمحاسبة',
  step3Text: 'احفظ النتائج في الملخص الأسبوعي وانسخها بنقرة واحدة. يعرض الملخص الأسبوعي جميع الإدخالات مع الإجمالي والصافي والاستراحات والساعات الإضافية.',

  funcTitle: 'كيف تعمل حاسبة ساعات العمل',
  funcH3a: 'ساعات العمل بالساعات والدقائق',
  funcH3aText: 'صافي وقت العمل يساوي الفرق بين وقت النهاية ووقت البداية مطروحاً منه جميع فترات الاستراحة. مع بداية الساعة 08:00 ونهاية الساعة 17:00 و30 دقيقة استراحة، يكون الوقت الإجمالي 9 ساعات (9:00) والصافي 8 ساعات و30 دقيقة (8:30).',
  funcH3b: 'إنشاء التقارير',
  funcH3bText: 'يجمع الملخص الأسبوعي جميع الإدخالات اليومية المحفوظة. يُظهر رسم الاتجاه الأسبوعي الساعات الفعلية والمستهدفة جنباً إلى جنب. هذا يسهّل تحديد وتوثيق الساعات الإضافية والعجز على مدار الأسبوع.',
  funcH3c: 'إدخال وقت البداية والنهاية',
  funcH3cText: 'يقبل إدخال الوقت القيم بتنسيق 24 ساعة. يتم اكتشاف العمل الليلي تلقائياً: عندما يكون وقت النهاية قبل وقت البداية، تحسب الحاسبة عبر منتصف الليل. البداية الساعة 22:00 والنهاية الساعة 06:00 تعطي 8 ساعات إجمالية.',

  breakTitle: 'فترات الاستراحة الإلزامية وفق قانون العمل',
  breakIntro: 'ينظم قانون العمل فترات الاستراحة لجميع الموظفين. لا تُحسب الاستراحات ضمن وقت العمل وتُخصم من الوقت الإجمالي.',
  break30Title: '30 دقيقة استراحة',
  break30Text: 'يجب على الموظفين الذين يعملون أكثر من 6 ساعات حتى 9 ساعات أخذ 30 دقيقة استراحة على الأقل. يمكن تقسيم الاستراحة إلى فترتين من 15 دقيقة لكل منهما.',
  break45Title: '45 دقيقة استراحة',
  break45Text: 'يجب على الموظفين الذين يعملون أكثر من 9 ساعات أخذ 45 دقيقة استراحة على الأقل. يُسمح بالتقسيم إلى فترات لا تقل عن 15 دقيقة.',
  breakTableTitle: 'نظرة عامة على فترات الاستراحة',
  breakTableHeaders: ['ساعات العمل', 'الحد الأدنى للاستراحة', 'الأساس القانوني'],
  breakTableRows: [
    ['حتى 6 ساعات', 'لا توجد استراحة إلزامية', 'قانون العمل'],
    ['أكثر من 6 إلى 9 ساعات', '30 دقيقة', 'قانون العمل'],
    ['أكثر من 9 ساعات', '45 دقيقة', 'قانون العمل'],
  ],

  appTitle: 'حاسبة ساعات العمل لتطبيقات مختلفة',
  appDailyTitle: 'ساعات العمل اليومية',
  appDailyText: 'ساعات العمل اليومية = وقت النهاية ناقص وقت البداية ناقص وقت الاستراحة. لتوثيق دقيق، يمكن إدخال استراحات متعددة بشكل فردي.',
  appDailyExTitle: 'مثال عملي:',
  appDailyExLabel: 'الحساب',
  appDailyExLine1: 'البداية: 07:30 · النهاية: 16:45 · الاستراحة: 45 دقيقة',
  appDailyExLine2: 'الوقت الإجمالي: 9 ساعات و15 دقيقة (9:15)',
  appDailyExLine3: '8 ساعات و30 دقيقة (8:30) = 8.50 ساعة عشرية',
  appWeeklyTitle: 'ساعات العمل الأسبوعية',
  appWeeklyText: 'يجمع الملخص الأسبوعي جميع الإدخالات اليومية ويعرض إجمالي ساعات العمل الأسبوعية. هذا يسهّل مقارنة ساعات العمل الفعلية مع الساعات التعاقدية.',
  appOvertimeTitle: 'حساب الساعات الإضافية:',
  appOvertimeLabel: 'مثال أسبوع 40 ساعة',
  appOvertimeLine1: 'الساعات المستهدفة: 40 ساعة أسبوعياً (8 ساعات × 5 أيام)',
  appOvertimeLine2: 'الساعات الفعلية: 42 ساعة و30 دقيقة',
  appOvertimeLine3: '+2 ساعة و30 دقيقة (+2.50 ساعة عشرية)',

  decTitle: 'حاسبة ساعات العمل بالتنسيق العشري',
  decIntro: 'الساعات العشرية (الساعات الصناعية) تبسّط حساب الرواتب. بدلاً من 7 ساعات و45 دقيقة، يُدخل 7.75 ساعة في المحاسبة. تعرض الحاسبة النتائج بكلا التنسيقين في وقت واحد.',
  decConvertTitle: 'تحويل الساعات إلى عشري',
  decConvertText: 'اقسم الدقائق على 60 وأضف إلى الساعات. تقوم الحاسبة بهذا التحويل بنقرة على "عشري" في منطقة النتائج.',
  decTableTitle: 'جدول التحويل:',
  decTableHeaders: ['الدقائق', 'العشري', 'الدقائق', 'العشري'],
  decIndustrialTitle: 'حاسبة الدقائق الصناعية',
  decIndustrialText: 'تقسم الدقائق الصناعية الساعة إلى 100 وحدة بدلاً من 60. دقيقة صناعية واحدة تساوي 0.6 دقيقة عادية. 30 دقيقة عادية = 50 دقيقة صناعية.',
  decIndustrialExTitle: 'مثال:',
  decIndustrialExLine1: 'وقت العمل: 8 ساعات و20 دقيقة',
  decIndustrialExLine2: 'بالساعات العشرية: 8.33 ساعة (20 ÷ 60 = 0.33)',
  decIndustrialExLine3: 'بالدقائق الصناعية: 833 دقيقة صناعية (8.33 × 100)',

  salaryTitle: 'ساعات العمل والرواتب',
  salaryMonthTitle: 'حساب ساعات العمل الشهرية',
  salaryMonthText: 'متوسط ساعات العمل الشهرية 173.33 ساعة لأسبوع 40 ساعة. للعمل بدوام جزئي ونماذج عمل أخرى، تتغير الساعات الشهرية.',
  salaryFormulaTitle: 'صيغة الحساب:',
  salaryFormulaLabel: 'الصيغة',
  salaryFormulaLine1: 'الساعات الأسبوعية × 52 أسبوع ÷ 12 شهر = ساعات العمل الشهرية',
  salaryFormulaLines: [
    '40 س × 52 ÷ 12 = 173.33 ساعة / شهر',
    '38.5 س × 52 ÷ 12 = 166.83 ساعة / شهر',
    '35 س × 52 ÷ 12 = 151.67 ساعة / شهر',
    '20 س × 52 ÷ 12 = 86.67 ساعة / شهر (دوام جزئي)',
  ],
  salaryTvodTitle: 'ساعات العمل في القطاع العام',
  salaryTvodText: 'في القطاع العام الألماني (TVöD)، ساعات العمل الأسبوعية القياسية هي 39 ساعة (غرب) أو 40 ساعة (شرق). الحساب الشهري: 39 ساعة × 52 ÷ 12 = 169.00 ساعة شهرياً.',

  faqTitle: 'كل ما تحتاج معرفته عن ساعات العمل',
  faqItems: [
    { q: 'كيف تعمل حاسبة ساعات العمل؟', a: 'أدخل وقت البداية والنهاية، حدد فترات الاستراحة — تحسب الحاسبة إجمالي وصافي ساعات العمل فوراً. جميع البيانات تبقى مخزنة محلياً في المتصفح.' },
    { q: 'ما هي فترات الاستراحة المطلوبة قانونياً؟', a: 'يتطلب قانون العمل 30 دقيقة استراحة لأكثر من 6 ساعات عمل و45 دقيقة لأكثر من 9 ساعات. يمكن تقسيم الاستراحات إلى فترات لا تقل عن 15 دقيقة.' },
    { q: 'هل يمكنني حساب الساعات الإضافية؟', a: 'نعم، تحسب الحاسبة الساعات الإضافية تلقائياً. أدخل ساعات العمل المستهدفة (مثلاً 8 ساعات) وتعرض الحاسبة الفرق بين الساعات الفعلية والمستهدفة.' },
    { q: 'كيف أحوّل الساعات إلى ساعات عشرية؟', a: 'اقسم الدقائق على 60 للحصول على الساعات العشرية. 7 ساعات و45 دقيقة = 7.75 ساعة عشرية (45 ÷ 60 = 0.75). توفر الحاسبة التبديل بين تنسيق HH:MM والتنسيق العشري.' },
    { q: 'ما الذي يُعتبر وقت عمل؟', a: 'يشمل وقت العمل الفترة من بداية العمل إلى نهايته مطروحاً منها الاستراحات. وقت التنقل بين المنزل ومكان العمل لا يُحسب. رحلات العمل قد تُحسب حسب عقد العمل.' },
    { q: 'متى يمكنني إنهاء يوم العمل؟', a: 'أدخل وقت البداية والساعات المستهدفة — تعرض الحاسبة وقت انتهاء يوم العمل. مع 8 ساعات مستهدفة و30 دقيقة استراحة بدءاً من 08:00، ينتهي العمل الساعة 16:30.' },
    { q: 'كم ساعة عمل في الشهر؟', a: 'الشهر يحتوي في المتوسط على 173.33 ساعة عمل لأسبوع 40 ساعة. الحساب: 40 ساعة × 52 أسبوع ÷ 12 شهر = 173.33 ساعة.' },
    { q: 'هل الحاسبة مجانية حقاً؟', a: 'نعم، الحاسبة مجانية بالكامل وخالية من الإعلانات. بدون تسجيل، بدون تكاليف مخفية. جميع الحسابات تتم محلياً في المتصفح — لا تُرسل بيانات إلى خوادم.' },
    { q: 'هل تنطبق نفس القواعد عند العمل من المنزل؟', a: 'نعم، ينطبق قانون العمل بالتساوي عند العمل من المنزل. ساعات العمل اليومية القصوى وقواعد الاستراحة وفترات الراحة التي لا تقل عن 11 ساعة تبقى دون تغيير.' },
    { q: 'كم ساعة يمكن العمل يومياً كحد أقصى؟', a: 'الحد الأقصى اليومي العادي هو 8 ساعات. يُسمح بالتمديد إلى 10 ساعات يومياً إذا تم الحفاظ على متوسط 8 ساعات خلال 6 أشهر أو 24 أسبوعاً.' },
    { q: 'كيف أستخدم سجل ساعاتي كوثيقة؟', a: 'يعمل الملخص الأسبوعي في الحاسبة كسجل ساعات رقمي. احفظ ساعات العمل اليومية، ووثّق الساعات الإجمالية والصافية مع الاستراحات، وصدّر النتائج عبر وظيفة النسخ.' },
    { q: 'كم ساعة أعمل في السنة؟', a: 'مع أسبوع 40 ساعة و30 يوم إجازة، يبلغ وقت العمل السنوي حوالي 1,840 ساعة. الحساب: (52 أسبوع × 40 ساعة) – (30 يوم إجازة × 8 ساعات) = 1,840 ساعة.' },
  ],

  whyTitle: 'لماذا حاسبتنا هي الخيار الأفضل',
  whyCards: [
    { icon: '🎯', title: 'ميزات كاملة', text: 'الوقت الإجمالي/الصافي، حساب الساعات الإضافية، التحويل العشري، الملخص الأسبوعي وتحليل الرسوم البيانية — كل شيء في أداة واحدة بدون قيود.' },
    { icon: '⚡', title: 'بسيطة وآمنة', text: 'بدون تسجيل، بدون إعلانات، بدون نقل بيانات. جميع الحسابات تتم محلياً في المتصفح. البيانات تبقى حصرياً على جهازك.' },
    { icon: '💼', title: 'مثالية للشركات والمستقلين', text: 'تتبع الوقت للموظفين، سجلات الساعات للمستقلين، توثيق ساعات العمل للمحاسبة — تغطي الحاسبة جميع حالات الاستخدام.' },
    { icon: '🏆', title: 'مجانية وبدون تسجيل', text: 'مجانية 100%، خالية من الإعلانات وجاهزة للاستخدام فوراً. بدون حساب، بدون بريد إلكتروني، بدون تكاليف مخفية.' },
  ],

  countryTitle: 'كل شيء عن ساعات العمل',
  countryCards: [
    { title: '⚖️ نظرة عامة على قانون العمل', text1: 'ينظم قانون العمل الحد الأقصى لساعات العمل اليومية (8 ساعات، قابلة للتمديد إلى 10)، فترات الراحة (30 أو 45 دقيقة على الأقل)، وأوقات الراحة (11 ساعة على الأقل بين يومي عمل).', text2: 'العمل في أيام الأحد والعطلات الرسمية محظور عموماً، مع استثناءات لقطاعات معينة.' },
    { title: '🏠 تتبع الوقت عند العمل من المنزل', text1: 'ينطبق قانون العمل في المنزل كما في المكتب. يجب على الموظفين توثيق ساعات عملهم في المنزل. قواعد الحد الأقصى والاستراحات و11 ساعة راحة تبقى دون تغيير.', text2: 'تناسب الحاسبة تتبع الوقت الرقمي من المنزل — افتح في المتصفح وأدخل الأوقات.' },
    { title: '📊 أمثلة: الإجمالي مقابل الصافي', text1: 'الوقت الإجمالي هو الوقت الكلي من بداية العمل إلى نهايته. الوقت الصافي هو الوقت الإجمالي مطروحاً منه جميع الاستراحات.', text2: 'من 08:00 إلى 17:00 مع 60 دقيقة استراحة: الإجمالي = 9:00 ساعات، الصافي = 8:00 ساعات.' },
    { title: 'ساعات العمل في القطاع العام', text1: 'يوفر القطاع العام الألماني 39 ساعة أسبوعياً (غرب) و40 ساعة (شرق). قد تنطبق قواعد مختلفة في قطاعات محددة.', text2: 'اضبط الهدف الأسبوعي في الحاسبة على 39 أو 40 ساعة — تُحسب الساعات الإضافية تلقائياً.' },
  ],
  legalTitle: '⚠️ إخلاء المسؤولية القانونية',
  legalText: 'المعلومات الواردة في هذه الصفحة للتوجيه العام فقط ولا تشكل استشارة قانونية. للحصول على معلومات ملزمة، اتصل بمحامٍ متخصص في قانون العمل.',

  regTitle: 'كيف يتم تنظيم ساعات العمل قانونياً؟',
  regIntro: 'ينطبق قانون العمل على جميع الموظفين. ينظم 3 مجالات أساسية: الحد الأقصى لساعات العمل، فترات الراحة، وأوقات الراحة.',
  regBreakTitle: 'فترات الاستراحة الإلزامية',
  regBreakText: 'تقطع فترات الراحة وقت العمل ولا تُحسب كوقت مدفوع. يجب على صاحب العمل توفير فترات الاستراحة — ويجب على الموظفين أخذها فعلاً.',
  regBreakList: [
    'حتى 6 ساعات عمل: لا توجد استراحة إلزامية',
    'أكثر من 6 إلى 9 ساعات: 30 دقيقة استراحة على الأقل',
    'أكثر من 9 ساعات: 45 دقيقة استراحة على الأقل',
    'يُسمح بالتقسيم إلى فترات لا تقل عن 15 دقيقة',
    'فترة الراحة بين يومي عمل: 11 ساعة على الأقل',
  ],

  faq2Title: 'أسئلة شائعة حول الحاسبة',
  faq2Items: [
    { q: 'هل تتبع ساعات العمل إلزامي قانونياً؟', a: 'نعم، قررت محكمة العدل الأوروبية في 2019 أن على أصحاب العمل إنشاء نظام لتسجيل ساعات العمل اليومية. يجب على أصحاب العمل تسجيل بداية ونهاية ومدة العمل اليومي.' },
    { q: 'هل تُحسب الاستراحات ضمن وقت العمل؟', a: 'لا، لا تُحسب فترات الراحة كوقت عمل مدفوع. تُخصم الاستراحات من الوقت الإجمالي. الوقت الصافي (= الوقت المدفوع) = الوقت الإجمالي ناقص الاستراحات.' },
    { q: 'ما الفرق بين الاستراحات وأوقات الراحة؟', a: 'الاستراحات تقطع العمل خلال اليوم (مثل استراحة الغداء). أوقات الراحة هي فترة التعافي بين يومي عمل — 11 ساعة على الأقل. تبدأ فترة الراحة مع نهاية العمل وتنتهي مع بداية العمل التالي.' },
    { q: 'ما هو الحد الأقصى لساعات العمل اليومية؟', a: 'الحد الأقصى اليومي العادي هو 8 ساعات لكل يوم عمل. يمكن التمديد إلى 10 ساعات إذا لم يتجاوز المتوسط 8 ساعات خلال 6 أشهر أو 24 أسبوعاً.' },
    { q: 'ما هو الحد الأقصى لساعات العمل الأسبوعية؟', a: 'الحد الأقصى الأسبوعي هو 48 ساعة (6 أيام × 8 ساعات). معظم عقود العمل تنص على 35 إلى 40 ساعة أسبوعياً.' },
    { q: 'ما هو متوسط ساعات العمل الشهرية؟', a: 'لأسبوع 40 ساعة، يبلغ المتوسط الشهري 173.33 ساعة. الحساب: 40 ساعة × 52 أسبوع ÷ 12 شهر. لـ 35 ساعة أسبوعياً: 151.67 ساعة؛ لـ 20 ساعة (دوام جزئي): 86.67 ساعة شهرياً.' },
  ],

  yearlyTitle: 'كم ساعة أعمل في السنة؟',
  yearlyText: 'وقت العمل السنوي لأسبوع 40 ساعة مع 30 يوم إجازة هو حوالي 1,840 ساعة.',
  yearlyExTitle: 'حساب ساعات العمل السنوية',
  yearlyExLine1: '(52 أسبوع × 40 ساعة) – (30 يوم إجازة × 8 ساعات) = 1,840 ساعة',
  yearlyExLine2: 'مع العطلات الرسمية (حوالي 10 سنوياً): 1,840 – 80 = 1,760 ساعة صافية سنوياً',

  ctaTitle: 'احسب ساعات عملك الآن',
  ctaText: 'مجاناً، بدون إعلانات وبدون تسجيل — احسب مباشرة في المتصفح.',
  ctaBtn: 'إلى الحاسبة',
};

const translations: Record<string, HomeContent> = { de, en, fr, ar };

export function getHomeContent(locale: string): HomeContent {
  return translations[locale] || translations.de;
}
