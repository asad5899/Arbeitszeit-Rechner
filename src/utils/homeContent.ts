// Homepage Content Translations for all locales
// Used by HomepageContent.astro
// Structure matches homepagecontent.md outline: 13 H2 sections + FAQ

import type { Locale } from './i18n';

export interface FAQItem {
  q: string;
  a: string;
}

export interface HomeContent {
  // Section 1: Was ist ein Arbeitszeit Rechner?
  whatTitle: string;
  whatText1: string;
  whatText2: string;
  whatText3: string;

  // Section 2: Wie funktioniert der Arbeitszeit Rechner?
  howTitle: string;
  howIntro: string;
  step1Title: string;
  step1Text: string;
  step2Title: string;
  step2Text: string;
  step3Title: string;
  step3Text: string;
  step4Title: string;
  step4Text: string;

  // Section 3: Arbeitszeit berechnen – Formel
  formulaTitle: string;
  formulaIntro: string;
  formulaNettoLabel: string;
  formulaNettoFormula: string;
  formulaNettoDesc: string;
  formulaBruttoLabel: string;
  formulaBruttoFormula: string;
  formulaBruttoDesc: string;
  formulaDecLabel: string;
  formulaDecFormula: string;
  formulaDecDesc: string;
  formulaExample: string;

  // Section 4: Arbeitszeit mit Pause berechnen
  pauseTitle: string;
  pauseIntro: string;
  pauseLawTitle: string;
  pauseLawText: string;
  pauseTableHeaders: [string, string, string];
  pauseTableRows: [string, string, string][];
  pauseExTitle: string;
  pauseEx1Label: string;
  pauseEx1Lines: string[];
  pauseEx2Label: string;
  pauseEx2Lines: string[];
  pauseTip: string;

  // Section 5: Überstunden berechnen
  overtimeTitle: string;
  overtimeIntro: string;
  overtimeFormulaLabel: string;
  overtimeFormula: string;
  overtimeExTitle: string;
  overtimeExLines: string[];
  overtimeWeekTitle: string;
  overtimeWeekText: string;
  overtimeWeekTableHeaders: [string, string, string, string];
  overtimeWeekTableRows: [string, string, string, string][];
  overtimeLawNote: string;

  // Section 6: Sollstunden berechnen
  targetTitle: string;
  targetIntro: string;
  targetDailyLabel: string;
  targetDailyFormula: string;
  targetWeeklyLabel: string;
  targetWeeklyFormula: string;
  targetMonthlyLabel: string;
  targetMonthlyFormula: string;
  targetTableTitle: string;
  targetTableHeaders: [string, string, string];
  targetTableRows: [string, string, string][];
  targetTip: string;

  // Section 7: Arbeitszeit in Prozent berechnen
  percentTitle: string;
  percentIntro: string;
  percentFormula: string;
  percentTableTitle: string;
  percentTableHeaders: [string, string, string];
  percentTableRows: [string, string, string][];
  percentExample: string;

  // Section 8: Teilzeit Arbeitszeit
  partTimeTitle: string;
  partTimeIntro: string;
  partTimeText: string;
  partTimeTableTitle: string;
  partTimeTableHeaders: [string, string, string, string];
  partTimeTableRows: [string, string, string, string][];
  partTimeTip: string;

  // Section 9: Vollzeit Arbeitszeit
  fullTimeTitle: string;
  fullTimeIntro: string;
  fullTimeText: string;
  fullTimeCards: { title: string; value: string; desc: string }[];
  fullTimeLawNote: string;

  // Section 10: Praktische Beispiele
  examplesTitle: string;
  examplesIntro: string;
  examplesScenarios: {
    label: string;
    start: string;
    end: string;
    pause: string;
    brutto: string;
    netto: string;
    decimal: string;
  }[];
  examplesWeekTitle: string;
  examplesWeekTableHeaders: [string, string, string, string, string];
  examplesWeekTableRows: [string, string, string, string, string][];
  examplesWeekTotal: [string, string, string, string];

  // Section 11: Häufige Fehler
  mistakesTitle: string;
  mistakesIntro: string;
  mistakes: { title: string; problem: string; solution: string }[];

  // Section 12: Vorteile unseres Arbeitszeit Rechners
  benefitsTitle: string;
  benefitsCards: { icon: string; title: string; text: string }[];

  // Section 13: FAQ (12+ items)
  faqTitle: string;
  faqItems: FAQItem[];

  // CTA
  ctaTitle: string;
  ctaText: string;
  ctaBtn: string;
}

const de: HomeContent = {
  // Section 1
  whatTitle: 'Was ist ein Arbeitszeit Rechner?',
  whatText1: 'Ein Arbeitszeit Rechner ist ein Online-Tool, das die tatsächliche Arbeitszeit aus Arbeitsbeginn, Arbeitsende und Pausenzeiten berechnet. Das Ergebnis ist die Nettoarbeitszeit — die Zeit, die tatsächlich gearbeitet wurde und vergütet wird. Arbeitnehmer, Selbstständige und Unternehmen in Deutschland nutzen den Arbeitszeitrechner für die tägliche Zeiterfassung, Stundennachweis und Lohnabrechnung.',
  whatText2: 'Der Arbeitszeit Rechner unterscheidet zwischen Bruttoarbeitszeit (gesamte Anwesenheitszeit vom Arbeitsbeginn bis zum Arbeitsende) und Nettoarbeitszeit (Bruttoarbeitszeit abzüglich aller Ruhepausen). Zusätzlich rechnet er Stunden und Minuten in Dezimalstunden (Industriestunden) um — das Format, das in der Buchhaltung und Lohnabrechnung verwendet wird.',
  whatText3: 'Unser Arbeitszeit Rechner berücksichtigt das deutsche Arbeitszeitgesetz (ArbZG), erkennt Nachtarbeit automatisch und berechnet Überstunden im Vergleich zur Soll-Arbeitszeit. Alle Berechnungen laufen lokal im Browser — keine Daten werden an Server übertragen.',

  // Section 2
  howTitle: 'Wie funktioniert der Arbeitszeit Rechner?',
  howIntro: 'Der Arbeitszeitrechner berechnet Ihre Nettoarbeitszeit in 4 einfachen Schritten. Keine Anmeldung, keine Installation — direkt im Browser nutzbar.',
  step1Title: 'Arbeitsbeginn eingeben',
  step1Text: 'Tragen Sie die Uhrzeit ein, zu der Sie mit der Arbeit begonnen haben. Das Format ist HH:MM im 24-Stunden-System, z. B. 08:00 oder 07:30.',
  step2Title: 'Arbeitsende eingeben',
  step2Text: 'Tragen Sie die Uhrzeit ein, zu der Sie die Arbeit beendet haben. Nachtarbeit wird automatisch erkannt — liegt das Ende vor dem Beginn, rechnet der Rechner über Mitternacht.',
  step3Title: 'Pausenzeiten festlegen',
  step3Text: 'Geben Sie die Gesamtdauer aller Ruhepausen in Minuten ein. Sie können auch mehrere Pausen mit individueller Dauer hinzufügen. Pausen werden von der Bruttoarbeitszeit abgezogen.',
  step4Title: 'Ergebnis ablesen',
  step4Text: 'Der Rechner zeigt sofort: Bruttoarbeitszeit, Nettoarbeitszeit, Überstunden und die Umrechnung in Dezimalstunden. Ergebnisse können in die Wochenübersicht gespeichert oder kopiert werden.',

  // Section 3
  formulaTitle: 'Arbeitszeit berechnen – Formel',
  formulaIntro: 'Die Berechnung der Arbeitszeit folgt einfachen mathematischen Formeln. Hier sind die drei wichtigsten Formeln, die der Arbeitszeitrechner intern verwendet:',
  formulaNettoLabel: 'Nettoarbeitszeit',
  formulaNettoFormula: 'Arbeitsende − Arbeitsbeginn − Pausenzeit = Nettoarbeitszeit',
  formulaNettoDesc: 'Die Nettoarbeitszeit ist die vergütete Arbeitszeit nach Abzug aller Ruhepausen.',
  formulaBruttoLabel: 'Bruttoarbeitszeit',
  formulaBruttoFormula: 'Arbeitsende − Arbeitsbeginn = Bruttoarbeitszeit',
  formulaBruttoDesc: 'Die Bruttoarbeitszeit ist die gesamte Anwesenheitszeit ohne Pausenabzug.',
  formulaDecLabel: 'Dezimalstunden',
  formulaDecFormula: 'Stunden + (Minuten ÷ 60) = Dezimalstunden',
  formulaDecDesc: 'Dezimalstunden werden in der Lohnabrechnung und Buchhaltung verwendet. 7:45 = 7,75 Dezimalstunden.',
  formulaExample: 'Beispiel: Arbeitsbeginn 08:00, Arbeitsende 17:00, Pause 30 Min. → Brutto: 9:00 (9,00 h) · Netto: 8:30 (8,50 h)',

  // Section 4
  pauseTitle: 'Arbeitszeit mit Pause berechnen',
  pauseIntro: 'Ruhepausen unterbrechen die Arbeitszeit und zählen nicht als vergütete Arbeitszeit. Das Arbeitszeitgesetz (ArbZG) schreibt Mindestpausen vor, die von der Bruttoarbeitszeit abgezogen werden müssen.',
  pauseLawTitle: 'Gesetzliche Pausenzeiten nach § 4 ArbZG',
  pauseLawText: 'Der Arbeitgeber ist verpflichtet, die Pausenzeiten zu gewähren. Arbeitnehmer müssen die Pausen tatsächlich nehmen. Pausen können in Abschnitte von mindestens 15 Minuten aufgeteilt werden.',
  pauseTableHeaders: ['Arbeitszeit', 'Mindestpause', 'Gesetzliche Grundlage'],
  pauseTableRows: [
    ['Bis 6 Stunden', 'Keine Pause vorgeschrieben', '§ 4 ArbZG'],
    ['Über 6 bis 9 Stunden', '30 Minuten', '§ 4 ArbZG'],
    ['Über 9 Stunden', '45 Minuten', '§ 4 ArbZG'],
  ],
  pauseExTitle: 'Berechnungsbeispiele mit Pause',
  pauseEx1Label: 'Beispiel 1: Büroarbeit (8-Stunden-Tag)',
  pauseEx1Lines: [
    'Arbeitsbeginn: 08:00 Uhr',
    'Arbeitsende: 16:30 Uhr',
    'Pause: 30 Minuten (Mittagspause)',
    'Bruttoarbeitszeit: 8 Stunden 30 Minuten',
    'Nettoarbeitszeit: 8 Stunden 00 Minuten = 8,00 Dezimalstunden',
  ],
  pauseEx2Label: 'Beispiel 2: Langer Arbeitstag (9+ Stunden)',
  pauseEx2Lines: [
    'Arbeitsbeginn: 07:00 Uhr',
    'Arbeitsende: 17:15 Uhr',
    'Pause: 45 Minuten (gesetzlich vorgeschrieben bei > 9 Std.)',
    'Bruttoarbeitszeit: 10 Stunden 15 Minuten',
    'Nettoarbeitszeit: 9 Stunden 30 Minuten = 9,50 Dezimalstunden',
  ],
  pauseTip: 'Tipp: Teilen Sie lange Pausen auf — z. B. 30 Minuten Mittagspause und 15 Minuten Nachmittagspause. So erfüllen Sie die gesetzliche Vorgabe von 45 Minuten bei mehr als 9 Stunden Arbeitszeit.',

  // Section 5
  overtimeTitle: 'Überstunden berechnen',
  overtimeIntro: 'Überstunden (Mehrarbeit) entstehen, wenn die tatsächliche Arbeitszeit die vertraglich vereinbarte Soll-Arbeitszeit überschreitet. Der Arbeitszeitrechner berechnet Überstunden automatisch, sobald eine Soll-Arbeitszeit eingetragen ist.',
  overtimeFormulaLabel: 'Formel',
  overtimeFormula: 'Ist-Arbeitszeit − Soll-Arbeitszeit = Überstunden',
  overtimeExTitle: 'Beispiel: Überstundenberechnung',
  overtimeExLines: [
    'Soll-Arbeitszeit: 8:00 Stunden (40-Stunden-Woche ÷ 5 Tage)',
    'Arbeitsbeginn: 07:30 · Arbeitsende: 17:15 · Pause: 30 Min.',
    'Ist-Arbeitszeit (netto): 9:15 Stunden',
    'Überstunden: 9:15 − 8:00 = +1:15 Stunden (+1,25 Dezimalstunden)',
  ],
  overtimeWeekTitle: 'Wöchentliche Überstundenübersicht',
  overtimeWeekText: 'Die Wochenübersicht summiert alle täglichen Überstunden und zeigt die Gesamtdifferenz zur Soll-Arbeitszeit.',
  overtimeWeekTableHeaders: ['Tag', 'Soll', 'Ist', 'Differenz'],
  overtimeWeekTableRows: [
    ['Montag', '8:00', '8:45', '+0:45'],
    ['Dienstag', '8:00', '8:30', '+0:30'],
    ['Mittwoch', '8:00', '7:30', '−0:30'],
    ['Donnerstag', '8:00', '9:00', '+1:00'],
    ['Freitag', '8:00', '8:15', '+0:15'],
  ],
  overtimeLawNote: 'Hinweis: Das ArbZG erlaubt eine Verlängerung der täglichen Arbeitszeit auf bis zu 10 Stunden, wenn innerhalb von 6 Monaten ein Durchschnitt von 8 Stunden pro Werktag eingehalten wird (§ 3 ArbZG).',

  // Section 6
  targetTitle: 'Sollstunden berechnen',
  targetIntro: 'Sollstunden (Soll-Arbeitszeit) sind die vertraglich vereinbarten Arbeitsstunden, die ein Arbeitnehmer in einem bestimmten Zeitraum leisten muss. Die Berechnung der Sollstunden hängt vom Arbeitsvertrag und dem Berechnungszeitraum ab.',
  targetDailyLabel: 'Tägliche Sollstunden',
  targetDailyFormula: 'Wöchentliche Arbeitszeit ÷ Arbeitstage pro Woche',
  targetWeeklyLabel: 'Wöchentliche Sollstunden',
  targetWeeklyFormula: 'Laut Arbeitsvertrag (z. B. 35, 38,5 oder 40 Stunden)',
  targetMonthlyLabel: 'Monatliche Sollstunden',
  targetMonthlyFormula: 'Wochenstunden × 52 Wochen ÷ 12 Monate',
  targetTableTitle: 'Sollstunden nach Arbeitszeitmodell',
  targetTableHeaders: ['Modell', 'Woche', 'Monat (Ø)'],
  targetTableRows: [
    ['Vollzeit (40 h)', '40:00', '173,33'],
    ['TVöD West (39 h)', '39:00', '169,00'],
    ['Industrie (35 h)', '35:00', '151,67'],
    ['Teilzeit (30 h)', '30:00', '130,00'],
    ['Teilzeit (20 h)', '20:00', '86,67'],
    ['Minijob (ca. 12 h)', '~12:00', '~52,00'],
  ],
  targetTip: 'Tipp: Tragen Sie Ihre Soll-Arbeitszeit im Rechner ein. So sehen Sie sofort, ob Sie Überstunden oder Minusstunden haben.',

  // Section 7
  percentTitle: 'Arbeitszeit in Prozent berechnen',
  percentIntro: 'Die Arbeitszeit in Prozent gibt an, welchen Anteil der Vollzeit-Arbeitszeit ein Teilzeitmodell ausmacht. Diese Angabe ist wichtig für Arbeitsverträge, Gehaltsberechnung und Stellenanzeigen.',
  percentFormula: 'Teilzeitstunden ÷ Vollzeitstunden × 100 = Arbeitszeit in Prozent',
  percentTableTitle: 'Arbeitszeit in Prozent – Übersicht',
  percentTableHeaders: ['Wochenstunden', 'Prozent (bei 40h Vollzeit)', 'Typische Bezeichnung'],
  percentTableRows: [
    ['40', '100 %', 'Vollzeit'],
    ['35', '87,5 %', 'Vollzeitnah'],
    ['30', '75 %', 'Teilzeit (¾)'],
    ['20', '50 %', 'Teilzeit (Halbzeit)'],
    ['15', '37,5 %', 'Teilzeit'],
    ['10', '25 %', 'Teilzeit (¼)'],
  ],
  percentExample: 'Beispiel: Ein Teilzeitvertrag mit 25 Wochenstunden bei 40-Stunden-Vollzeit → 25 ÷ 40 × 100 = 62,5 % Arbeitszeit.',

  // Section 8
  partTimeTitle: 'Teilzeit Arbeitszeit',
  partTimeIntro: 'Teilzeitarbeit liegt vor, wenn die regelmäßige Wochenarbeitszeit kürzer ist als die eines vergleichbaren Vollzeitbeschäftigten (§ 2 TzBfG). In Deutschland arbeiten rund 30 % aller Beschäftigten in Teilzeit.',
  partTimeText: 'Der Arbeitszeit Rechner eignet sich für alle Teilzeitmodelle. Tragen Sie die individuelle Soll-Arbeitszeit ein und berechnen Sie tägliche Nettoarbeitszeit, Überstunden und Dezimalstunden — genauso wie bei Vollzeitbeschäftigung.',
  partTimeTableTitle: 'Teilzeitmodelle im Vergleich',
  partTimeTableHeaders: ['Modell', 'Wochenstd.', 'Monatsstd. (Ø)', 'Jahresstd. (Ø)'],
  partTimeTableRows: [
    ['Halbzeit (50 %)', '20', '86,67', '1.040'],
    ['¾-Stelle (75 %)', '30', '130,00', '1.560'],
    ['80 %-Stelle', '32', '138,67', '1.664'],
    ['Minijob (538 €)', '~12', '~52', '~624'],
    ['Brückenteilzeit', 'variabel', 'variabel', 'variabel'],
  ],
  partTimeTip: 'Tipp: Bei Teilzeit gelten dieselben Pausenregelungen nach dem ArbZG. Auch bei 6+ Stunden täglicher Arbeitszeit müssen mindestens 30 Minuten Pause genommen werden.',

  // Section 9
  fullTimeTitle: 'Vollzeit Arbeitszeit',
  fullTimeIntro: 'Vollzeitarbeit bezeichnet ein Beschäftigungsverhältnis mit der vollen vertraglich oder tariflich vereinbarten Wochenarbeitszeit. In Deutschland beträgt die durchschnittliche Vollzeit-Wochenarbeitszeit 37,5 bis 40 Stunden.',
  fullTimeText: 'Die maximale tägliche Arbeitszeit beträgt 8 Stunden nach dem ArbZG, verlängerbar auf 10 Stunden bei Ausgleich innerhalb von 6 Monaten. Pro Woche sind maximal 48 Stunden (6 Werktage × 8 Stunden) zulässig.',
  fullTimeCards: [
    { title: 'Industrie & Handwerk', value: '35–40 h/Woche', desc: 'IG Metall: 35 h, viele Handwerksbetriebe: 40 h' },
    { title: 'Öffentlicher Dienst', value: '39–40 h/Woche', desc: 'TVöD: 39 h (West), 40 h (Ost)' },
    { title: 'Gesundheitswesen', value: '38,5–40 h/Woche', desc: 'TVöD-K: 38,5 h, Arztpraxen: oft 40 h' },
    { title: 'IT & Dienstleistung', value: '37,5–40 h/Woche', desc: 'Vertrauensarbeitszeit verbreitet' },
  ],
  fullTimeLawNote: 'Gesetzliche Grundlage: § 3 ArbZG regelt die maximale Arbeitszeit. § 4 ArbZG regelt Ruhepausen. § 5 ArbZG regelt die Ruhezeit von mindestens 11 Stunden zwischen zwei Arbeitstagen.',

  // Section 10
  examplesTitle: 'Praktische Beispiele',
  examplesIntro: 'Die folgenden Beispiele zeigen typische Arbeitszeitberechnungen für verschiedene Situationen. Alle Berechnungen können Sie direkt mit unserem Arbeitszeit Rechner nachrechnen.',
  examplesScenarios: [
    { label: 'Bürotag (Standard)', start: '08:00', end: '16:30', pause: '30 Min.', brutto: '8:30', netto: '8:00', decimal: '8,00' },
    { label: 'Frühdienst', start: '06:00', end: '14:30', pause: '30 Min.', brutto: '8:30', netto: '8:00', decimal: '8,00' },
    { label: 'Spätdienst', start: '14:00', end: '22:30', pause: '30 Min.', brutto: '8:30', netto: '8:00', decimal: '8,00' },
    { label: 'Nachtschicht', start: '22:00', end: '06:30', pause: '30 Min.', brutto: '8:30', netto: '8:00', decimal: '8,00' },
    { label: 'Langer Tag (mit 45 Min. Pause)', start: '07:00', end: '17:15', pause: '45 Min.', brutto: '10:15', netto: '9:30', decimal: '9,50' },
    { label: 'Halbtag (Teilzeit)', start: '09:00', end: '13:00', pause: '0 Min.', brutto: '4:00', netto: '4:00', decimal: '4,00' },
  ],
  examplesWeekTitle: 'Beispiel: Vollständige Arbeitswoche (40-Stunden-Vertrag)',
  examplesWeekTableHeaders: ['Tag', 'Beginn', 'Ende', 'Pause', 'Netto'],
  examplesWeekTableRows: [
    ['Montag', '08:00', '17:00', '30 Min.', '8:30'],
    ['Dienstag', '07:30', '16:15', '30 Min.', '8:15'],
    ['Mittwoch', '08:00', '16:30', '30 Min.', '8:00'],
    ['Donnerstag', '08:00', '17:30', '45 Min.', '8:45'],
    ['Freitag', '08:00', '15:30', '30 Min.', '7:00'],
  ],
  examplesWeekTotal: ['Gesamt', '', '', '40:30'],

  // Section 11
  mistakesTitle: 'Häufige Fehler bei der Arbeitszeitberechnung',
  mistakesIntro: 'Diese typischen Fehler führen häufig zu falschen Arbeitszeitberechnungen. Der Arbeitszeit Rechner vermeidet alle diese Fehler automatisch.',
  mistakes: [
    { title: 'Pause nicht abgezogen', problem: 'Die Bruttoarbeitszeit wird als Nettoarbeitszeit angegeben. Bei 08:00–16:30 werden fälschlich 8,5 Stunden statt 8,0 Stunden (nach 30 Min. Pause) berechnet.', solution: 'Immer die Pausenzeit eingeben. Der Rechner zieht die Pause automatisch ab und zeigt die korrekte Nettoarbeitszeit.' },
    { title: 'Falsche Dezimalumrechnung', problem: '7 Stunden 45 Minuten werden als 7,45 statt korrekt 7,75 Dezimalstunden eingetragen. Fehler: 45 Minuten ≠ 0,45 Stunden.', solution: 'Minuten durch 60 teilen: 45 ÷ 60 = 0,75. Der Rechner zeigt beide Formate automatisch an.' },
    { title: 'Nachtarbeit falsch berechnet', problem: 'Bei Arbeitszeiten über Mitternacht (z. B. 22:00–06:00) wird eine negative Zeit berechnet statt 8 Stunden.', solution: 'Der Rechner erkennt Nachtarbeit automatisch und rechnet korrekt über Mitternacht hinaus.' },
    { title: 'Gesetzliche Pausen ignoriert', problem: 'Bei mehr als 6 Stunden Arbeitszeit wird keine Pause eingetragen. Die Lohnabrechnung ist dann fehlerhaft.', solution: 'Das ArbZG schreibt 30 Min. (>6 Std.) bzw. 45 Min. (>9 Std.) Pause vor. Der Rechner zeigt einen Hinweis.' },
    { title: 'Monatsstunden falsch berechnet', problem: 'Wochenstunden werden mit 4 multipliziert statt mit dem korrekten Faktor 4,333 (52 ÷ 12).', solution: 'Korrekte Formel: Wochenstunden × 52 ÷ 12. Bei 40 h/Woche = 173,33 Stunden/Monat (nicht 160).' },
    { title: 'Überstunden pro Tag statt pro Woche', problem: 'Tägliche Schwankungen werden als Überstunden gezählt, obwohl die Wochenstunden im Soll liegen.', solution: 'Überstunden immer auf Wochen- oder Monatsbasis berechnen. Die Wochenübersicht im Rechner zeigt das Gesamtbild.' },
  ],

  // Section 12
  benefitsTitle: 'Vorteile unseres Arbeitszeit Rechners',
  benefitsCards: [
    { icon: '🎯', title: 'Mathematisch exakt', text: 'Brutto-/Nettoarbeitszeit, Überstunden, Dezimalumrechnung und Nachtarbeit werden fehlerfrei berechnet. Keine Rundungsfehler, keine falschen Dezimalwerte.' },
    { icon: '⚡', title: 'Sofortige Berechnung', text: 'Ergebnisse werden in Echtzeit angezeigt — kein Warten, kein Laden. Arbeitsbeginn, Arbeitsende und Pause eingeben, sofort ablesen.' },
    { icon: '📊', title: 'Wochenübersicht & Chart', text: 'Alle Tageseinträge werden in einer Wochenübersicht gesammelt. Der Wochenverlauf-Chart zeigt Ist- und Soll-Stunden im Vergleich.' },
    { icon: '🔒', title: '100 % Datenschutz', text: 'Keine Registrierung, keine Werbung, keine Datenübertragung. Alle Berechnungen laufen lokal im Browser. Daten bleiben auf Ihrem Gerät.' },
    { icon: '📱', title: 'Mobil & Responsiv', text: 'Funktioniert auf Smartphone, Tablet und Desktop. Optimiert für alle Bildschirmgrößen — ideal für die mobile Zeiterfassung.' },
    { icon: '💼', title: 'Für alle Berufsgruppen', text: 'Arbeitnehmer, Selbstständige, Freelancer, Minijobber, TVöD-Beschäftigte — der Rechner passt sich jedem Arbeitszeitmodell an.' },
  ],

  // Section 13: FAQ (12+ items)
  faqTitle: 'Häufig gestellte Fragen (FAQ)',
  faqItems: [
    { q: 'Wie berechne ich meine tägliche Arbeitszeit?', a: 'Arbeitsende minus Arbeitsbeginn minus Pausenzeit ergibt die Nettoarbeitszeit. Beispiel: 08:00 bis 16:30 mit 30 Minuten Pause = 8 Stunden Nettoarbeitszeit. Der Arbeitszeit Rechner berechnet dies automatisch.' },
    { q: 'Welche Pausenzeiten sind gesetzlich vorgeschrieben?', a: 'Nach § 4 ArbZG: 30 Minuten Pause bei mehr als 6 Stunden Arbeitszeit, 45 Minuten bei mehr als 9 Stunden. Pausen können in Abschnitte von mindestens 15 Minuten aufgeteilt werden.' },
    { q: 'Wie rechne ich Stunden und Minuten in Dezimalstunden um?', a: 'Minuten durch 60 teilen und zum Stundenanteil addieren. 7 Stunden 45 Minuten = 7 + (45÷60) = 7,75 Dezimalstunden. Der Rechner bietet eine Umschaltfunktion zwischen beiden Formaten.' },
    { q: 'Wie berechne ich Überstunden?', a: 'Ist-Arbeitszeit minus Soll-Arbeitszeit = Überstunden. Beispiel: 8:45 Stunden gearbeitet bei 8:00 Soll = +0:45 Überstunden. Tragen Sie Ihre Soll-Arbeitszeit im Rechner ein, um Überstunden automatisch zu berechnen.' },
    { q: 'Wie viele Arbeitsstunden hat ein Monat?', a: 'Bei einer 40-Stunden-Woche durchschnittlich 173,33 Stunden (40 × 52 ÷ 12). Bei 35 Stunden: 151,67 h/Monat. Bei 20 Stunden Teilzeit: 86,67 h/Monat.' },
    { q: 'Was ist der Unterschied zwischen Brutto- und Nettoarbeitszeit?', a: 'Bruttoarbeitszeit = gesamte Anwesenheitszeit (Arbeitsbeginn bis Arbeitsende). Nettoarbeitszeit = Bruttoarbeitszeit minus Pausen. Nur die Nettoarbeitszeit wird vergütet.' },
    { q: 'Funktioniert der Rechner für Nachtarbeit?', a: 'Ja, der Rechner erkennt Nachtarbeit automatisch. Wenn das Arbeitsende vor dem Arbeitsbeginn liegt (z. B. 22:00–06:00), rechnet er korrekt über Mitternacht und zeigt 8 Stunden.' },
    { q: 'Wie viele Stunden darf man pro Tag maximal arbeiten?', a: 'Maximal 8 Stunden pro Werktag nach § 3 ArbZG. Verlängerung auf 10 Stunden möglich, wenn innerhalb von 6 Monaten der Durchschnitt von 8 Stunden eingehalten wird.' },
    { q: 'Gelten die Arbeitszeitregeln auch im Homeoffice?', a: 'Ja, das ArbZG gilt im Homeoffice unverändert. Maximale Arbeitszeit, Pausenregelungen und 11 Stunden Ruhezeit zwischen zwei Arbeitstagen müssen eingehalten werden.' },
    { q: 'Was sind Sollstunden?', a: 'Sollstunden sind die vertraglich vereinbarten Arbeitsstunden pro Tag, Woche oder Monat. Bei einer 40-Stunden-Woche mit 5 Arbeitstagen beträgt die tägliche Soll-Arbeitszeit 8 Stunden.' },
    { q: 'Was sind Industrieminuten und Dezimalstunden?', a: 'Industrieminuten teilen eine Stunde in 100 Einheiten statt 60. 30 reguläre Minuten = 50 Industrieminuten = 0,50 Dezimalstunden. Dieses Format vereinfacht die Lohnabrechnung.' },
    { q: 'Ist der Arbeitszeit Rechner wirklich kostenlos?', a: 'Ja, vollständig kostenlos und werbefrei. Keine Registrierung, keine versteckten Kosten, keine Datenübertragung. Alle Berechnungen laufen lokal im Browser.' },
    { q: 'Wie viele Stunden arbeite ich pro Jahr?', a: 'Bei 40 h/Woche, 30 Urlaubstagen und 10 Feiertagen: (52 × 40) − (30 × 8) − (10 × 8) = 1.760 Netto-Jahresarbeitsstunden.' },
    { q: 'Muss der Arbeitgeber Arbeitszeiten aufzeichnen?', a: 'Ja, nach dem EuGH-Urteil 2019 und dem BAG-Beschluss 2022 müssen Arbeitgeber Beginn, Ende und Dauer der täglichen Arbeitszeit systematisch erfassen.' },
  ],

  // CTA
  ctaTitle: 'Arbeitszeit jetzt berechnen',
  ctaText: 'Kostenlos, werbefrei und ohne Anmeldung — direkt im Browser berechnen.',
  ctaBtn: 'Zum Arbeitszeitrechner',
};

const en: HomeContent = {
  whatTitle: 'What Is a Work Time Calculator?',
  whatText1: 'A work time calculator is an online tool that computes actual working time from start time, end time, and break durations. The result is net working time — the time actually worked and compensated. Employees, freelancers, and businesses use the calculator for daily time tracking, timesheets, and payroll.',
  whatText2: 'The calculator distinguishes between gross working time (total time from start to end) and net working time (gross time minus all breaks). It also converts hours and minutes to decimal hours (industrial hours) — the format used in accounting and payroll.',
  whatText3: 'Our calculator automatically detects night shifts, calculates overtime compared to target hours, and all calculations run locally in the browser — no data is sent to servers.',

  howTitle: 'How Does the Work Time Calculator Work?',
  howIntro: 'The calculator computes your net working time in 4 simple steps. No registration, no installation — works directly in the browser.',
  step1Title: 'Enter Start Time',
  step1Text: 'Enter the time you started work. The format is HH:MM in 24-hour system, e.g., 08:00 or 07:30.',
  step2Title: 'Enter End Time',
  step2Text: 'Enter the time you finished work. Night shifts are automatically detected — if end time is before start time, the calculator counts across midnight.',
  step3Title: 'Set Break Times',
  step3Text: 'Enter total break duration in minutes. You can also add multiple breaks with individual durations. Breaks are deducted from gross working time.',
  step4Title: 'Read Results',
  step4Text: 'The calculator instantly shows: gross working time, net working time, overtime, and decimal conversion. Results can be saved to the weekly overview or copied.',

  formulaTitle: 'Calculate Working Time – Formula',
  formulaIntro: 'Working time calculation follows simple mathematical formulas. Here are the three key formulas the calculator uses internally:',
  formulaNettoLabel: 'Net Working Time',
  formulaNettoFormula: 'End Time − Start Time − Break Time = Net Working Time',
  formulaNettoDesc: 'Net working time is the compensated working time after deducting all breaks.',
  formulaBruttoLabel: 'Gross Working Time',
  formulaBruttoFormula: 'End Time − Start Time = Gross Working Time',
  formulaBruttoDesc: 'Gross working time is the total attendance time without break deduction.',
  formulaDecLabel: 'Decimal Hours',
  formulaDecFormula: 'Hours + (Minutes ÷ 60) = Decimal Hours',
  formulaDecDesc: 'Decimal hours are used in payroll and accounting. 7:45 = 7.75 decimal hours.',
  formulaExample: 'Example: Start 08:00, End 17:00, Break 30 min → Gross: 9:00 (9.00 h) · Net: 8:30 (8.50 h)',

  pauseTitle: 'Calculate Working Time with Breaks',
  pauseIntro: 'Rest breaks interrupt working time and do not count as paid time. Labor law prescribes minimum breaks that must be deducted from gross working time.',
  pauseLawTitle: 'Mandatory Break Times',
  pauseLawText: 'Employers must provide break times. Employees must actually take the breaks. Breaks can be split into segments of at least 15 minutes.',
  pauseTableHeaders: ['Working Time', 'Minimum Break', 'Legal Basis'],
  pauseTableRows: [
    ['Up to 6 hours', 'No break required', 'Labor Law'],
    ['Over 6 to 9 hours', '30 minutes', 'Labor Law'],
    ['Over 9 hours', '45 minutes', 'Labor Law'],
  ],
  pauseExTitle: 'Calculation Examples with Breaks',
  pauseEx1Label: 'Example 1: Office Work (8-hour day)',
  pauseEx1Lines: [
    'Start: 08:00',
    'End: 16:30',
    'Break: 30 minutes (lunch)',
    'Gross working time: 8 hours 30 minutes',
    'Net working time: 8 hours 00 minutes = 8.00 decimal hours',
  ],
  pauseEx2Label: 'Example 2: Long Day (9+ hours)',
  pauseEx2Lines: [
    'Start: 07:00',
    'End: 17:15',
    'Break: 45 minutes (required by law for >9 hrs)',
    'Gross working time: 10 hours 15 minutes',
    'Net working time: 9 hours 30 minutes = 9.50 decimal hours',
  ],
  pauseTip: 'Tip: Split long breaks — e.g., 30 minutes lunch and 15 minutes afternoon break. This fulfills the 45-minute requirement for more than 9 hours.',

  overtimeTitle: 'Calculate Overtime',
  overtimeIntro: 'Overtime occurs when actual working time exceeds the contractually agreed target hours. The calculator computes overtime automatically when target hours are entered.',
  overtimeFormulaLabel: 'Formula',
  overtimeFormula: 'Actual Working Time − Target Working Time = Overtime',
  overtimeExTitle: 'Example: Overtime Calculation',
  overtimeExLines: [
    'Target: 8:00 hours (40-hour week ÷ 5 days)',
    'Start: 07:30 · End: 17:15 · Break: 30 min.',
    'Actual (net): 9:15 hours',
    'Overtime: 9:15 − 8:00 = +1:15 hours (+1.25 decimal hours)',
  ],
  overtimeWeekTitle: 'Weekly Overtime Overview',
  overtimeWeekText: 'The weekly overview sums all daily overtime and shows the total difference from target hours.',
  overtimeWeekTableHeaders: ['Day', 'Target', 'Actual', 'Difference'],
  overtimeWeekTableRows: [
    ['Monday', '8:00', '8:45', '+0:45'],
    ['Tuesday', '8:00', '8:30', '+0:30'],
    ['Wednesday', '8:00', '7:30', '−0:30'],
    ['Thursday', '8:00', '9:00', '+1:00'],
    ['Friday', '8:00', '8:15', '+0:15'],
  ],
  overtimeLawNote: 'Note: Daily working time may be extended to 10 hours if an average of 8 hours per workday is maintained within 6 months.',

  targetTitle: 'Calculate Target Hours',
  targetIntro: 'Target hours are the contractually agreed working hours that an employee must complete in a given period. The calculation depends on the employment contract.',
  targetDailyLabel: 'Daily Target',
  targetDailyFormula: 'Weekly hours ÷ Working days per week',
  targetWeeklyLabel: 'Weekly Target',
  targetWeeklyFormula: 'Per employment contract (e.g., 35, 38.5, or 40 hours)',
  targetMonthlyLabel: 'Monthly Target',
  targetMonthlyFormula: 'Weekly hours × 52 weeks ÷ 12 months',
  targetTableTitle: 'Target Hours by Work Model',
  targetTableHeaders: ['Model', 'Week', 'Month (avg)'],
  targetTableRows: [
    ['Full-time (40 h)', '40:00', '173.33'],
    ['Public Sector (39 h)', '39:00', '169.00'],
    ['Industry (35 h)', '35:00', '151.67'],
    ['Part-time (30 h)', '30:00', '130.00'],
    ['Part-time (20 h)', '20:00', '86.67'],
    ['Mini-job (~12 h)', '~12:00', '~52.00'],
  ],
  targetTip: 'Tip: Enter your target hours in the calculator to instantly see overtime or deficit hours.',

  percentTitle: 'Calculate Working Time as Percentage',
  percentIntro: 'Working time percentage indicates what fraction of full-time hours a part-time model represents. This is important for contracts, salary calculations, and job postings.',
  percentFormula: 'Part-time hours ÷ Full-time hours × 100 = Working time percentage',
  percentTableTitle: 'Working Time Percentage – Overview',
  percentTableHeaders: ['Weekly Hours', 'Percent (at 40h full-time)', 'Typical Designation'],
  percentTableRows: [
    ['40', '100%', 'Full-time'],
    ['35', '87.5%', 'Near full-time'],
    ['30', '75%', 'Part-time (¾)'],
    ['20', '50%', 'Part-time (half)'],
    ['15', '37.5%', 'Part-time'],
    ['10', '25%', 'Part-time (¼)'],
  ],
  percentExample: 'Example: A part-time contract with 25 weekly hours at 40-hour full-time → 25 ÷ 40 × 100 = 62.5% working time.',

  partTimeTitle: 'Part-Time Working Hours',
  partTimeIntro: 'Part-time employment exists when regular weekly hours are shorter than those of a comparable full-time employee. In Germany, about 30% of all employees work part-time.',
  partTimeText: 'The calculator works for all part-time models. Enter your individual target hours and calculate daily net working time, overtime, and decimal hours — just like for full-time.',
  partTimeTableTitle: 'Part-Time Models Compared',
  partTimeTableHeaders: ['Model', 'Weekly hrs', 'Monthly hrs (avg)', 'Annual hrs (avg)'],
  partTimeTableRows: [
    ['Half-time (50%)', '20', '86.67', '1,040'],
    ['¾ position (75%)', '30', '130.00', '1,560'],
    ['80% position', '32', '138.67', '1,664'],
    ['Mini-job (€538)', '~12', '~52', '~624'],
    ['Bridge part-time', 'variable', 'variable', 'variable'],
  ],
  partTimeTip: 'Tip: Part-time workers have the same break rules. For 6+ hours of daily work, at least 30 minutes of break is required.',

  fullTimeTitle: 'Full-Time Working Hours',
  fullTimeIntro: 'Full-time employment means working the full contractual or collectively agreed weekly hours. In Germany, the average full-time week is 37.5 to 40 hours.',
  fullTimeText: 'The maximum daily working time is 8 hours, extendable to 10 with compensation within 6 months. Maximum weekly: 48 hours (6 workdays × 8 hours).',
  fullTimeCards: [
    { title: 'Industry & Trades', value: '35–40 h/week', desc: 'IG Metall: 35 h, many trades: 40 h' },
    { title: 'Public Sector', value: '39–40 h/week', desc: 'TVöD: 39 h (West), 40 h (East)' },
    { title: 'Healthcare', value: '38.5–40 h/week', desc: 'TVöD-K: 38.5 h, practices: often 40 h' },
    { title: 'IT & Services', value: '37.5–40 h/week', desc: 'Trust-based working time common' },
  ],
  fullTimeLawNote: 'Legal basis: § 3 ArbZG regulates maximum working time. § 4 ArbZG regulates breaks. § 5 ArbZG regulates 11-hour rest between workdays.',

  examplesTitle: 'Practical Examples',
  examplesIntro: 'The following examples show typical working time calculations. You can verify all calculations with our calculator.',
  examplesScenarios: [
    { label: 'Office Day (Standard)', start: '08:00', end: '16:30', pause: '30 min', brutto: '8:30', netto: '8:00', decimal: '8.00' },
    { label: 'Early Shift', start: '06:00', end: '14:30', pause: '30 min', brutto: '8:30', netto: '8:00', decimal: '8.00' },
    { label: 'Late Shift', start: '14:00', end: '22:30', pause: '30 min', brutto: '8:30', netto: '8:00', decimal: '8.00' },
    { label: 'Night Shift', start: '22:00', end: '06:30', pause: '30 min', brutto: '8:30', netto: '8:00', decimal: '8.00' },
    { label: 'Long Day (45 min break)', start: '07:00', end: '17:15', pause: '45 min', brutto: '10:15', netto: '9:30', decimal: '9.50' },
    { label: 'Half Day (Part-time)', start: '09:00', end: '13:00', pause: '0 min', brutto: '4:00', netto: '4:00', decimal: '4.00' },
  ],
  examplesWeekTitle: 'Example: Full Work Week (40-hour contract)',
  examplesWeekTableHeaders: ['Day', 'Start', 'End', 'Break', 'Net'],
  examplesWeekTableRows: [
    ['Monday', '08:00', '17:00', '30 min', '8:30'],
    ['Tuesday', '07:30', '16:15', '30 min', '8:15'],
    ['Wednesday', '08:00', '16:30', '30 min', '8:00'],
    ['Thursday', '08:00', '17:30', '45 min', '8:45'],
    ['Friday', '08:00', '15:30', '30 min', '7:00'],
  ],
  examplesWeekTotal: ['Total', '', '', '40:30'],

  mistakesTitle: 'Common Working Time Calculation Mistakes',
  mistakesIntro: 'These typical mistakes lead to incorrect calculations. Our calculator avoids all of them automatically.',
  mistakes: [
    { title: 'Forgetting to deduct breaks', problem: 'Gross time is reported as net time. 08:00–16:30 incorrectly shows 8.5 hours instead of 8.0 hours (after 30 min break).', solution: 'Always enter break time. The calculator deducts breaks and shows correct net time.' },
    { title: 'Wrong decimal conversion', problem: '7 hours 45 minutes is entered as 7.45 instead of the correct 7.75 decimal hours. Error: 45 minutes ≠ 0.45 hours.', solution: 'Divide minutes by 60: 45 ÷ 60 = 0.75. The calculator shows both formats automatically.' },
    { title: 'Night shift miscalculation', problem: 'Shifts crossing midnight (e.g., 22:00–06:00) calculate negative time instead of 8 hours.', solution: 'The calculator detects night shifts automatically and calculates correctly across midnight.' },
    { title: 'Ignoring mandatory breaks', problem: 'No break entered for 6+ hour shifts. Payroll becomes inaccurate.', solution: 'Law requires 30 min (>6 hrs) or 45 min (>9 hrs) breaks. The calculator shows a reminder.' },
    { title: 'Wrong monthly hours', problem: 'Weekly hours multiplied by 4 instead of the correct factor 4.333 (52 ÷ 12).', solution: 'Correct formula: Weekly hours × 52 ÷ 12. 40 h/week = 173.33 hours/month (not 160).' },
    { title: 'Daily vs weekly overtime', problem: 'Daily fluctuations counted as overtime even when weekly hours are on target.', solution: 'Calculate overtime on a weekly or monthly basis. The weekly overview shows the full picture.' },
  ],

  benefitsTitle: 'Benefits of Our Work Time Calculator',
  benefitsCards: [
    { icon: '🎯', title: 'Mathematically Exact', text: 'Gross/net time, overtime, decimal conversion, and night shifts calculated without errors. No rounding mistakes.' },
    { icon: '⚡', title: 'Instant Calculation', text: 'Results displayed in real time — no waiting. Enter start, end, and break times, read results immediately.' },
    { icon: '📊', title: 'Weekly Overview & Chart', text: 'All daily entries collected in a weekly overview. The weekly chart compares actual vs. target hours.' },
    { icon: '🔒', title: '100% Privacy', text: 'No registration, no ads, no data transfer. All calculations run locally in the browser.' },
    { icon: '📱', title: 'Mobile & Responsive', text: 'Works on smartphone, tablet, and desktop. Optimized for all screen sizes.' },
    { icon: '💼', title: 'For All Professions', text: 'Employees, freelancers, mini-jobbers — the calculator adapts to any work model.' },
  ],

  faqTitle: 'Frequently Asked Questions (FAQ)',
  faqItems: [
    { q: 'How do I calculate my daily working time?', a: 'End time minus start time minus break time equals net working time. Example: 08:00 to 16:30 with 30 minutes break = 8 hours net. The calculator does this automatically.' },
    { q: 'What break times are legally required?', a: '30 minutes for more than 6 hours, 45 minutes for more than 9 hours. Breaks can be split into segments of at least 15 minutes.' },
    { q: 'How do I convert hours and minutes to decimal?', a: 'Divide minutes by 60 and add to hours. 7 hours 45 minutes = 7 + (45÷60) = 7.75 decimal hours.' },
    { q: 'How do I calculate overtime?', a: 'Actual time minus target time = overtime. Example: 8:45 worked at 8:00 target = +0:45 overtime.' },
    { q: 'How many working hours are in a month?', a: 'At 40 hours/week: 173.33 hours (40 × 52 ÷ 12). At 35 hours: 151.67 h/month. At 20 hours part-time: 86.67 h/month.' },
    { q: 'What is the difference between gross and net working time?', a: 'Gross = total time from start to end. Net = gross minus breaks. Only net time is compensated.' },
    { q: 'Does the calculator work for night shifts?', a: 'Yes, it detects night shifts automatically. If end time is before start time (e.g., 22:00–06:00), it calculates correctly across midnight.' },
    { q: 'How many hours can you work per day maximum?', a: 'Maximum 8 hours per workday. Extension to 10 hours possible if 8-hour average is maintained over 6 months.' },
    { q: 'Do working time rules apply when working from home?', a: 'Yes, labor law applies equally at home. Maximum hours, break rules, and 11-hour rest periods remain unchanged.' },
    { q: 'What are target hours?', a: 'Target hours are contractually agreed working hours per day, week, or month. At 40 hours/week with 5 workdays, daily target is 8 hours.' },
    { q: 'What are industrial minutes and decimal hours?', a: 'Industrial minutes divide an hour into 100 units instead of 60. 30 regular minutes = 50 industrial minutes = 0.50 decimal hours.' },
    { q: 'Is the calculator really free?', a: 'Yes, completely free with no ads. No registration, no hidden costs, no data transfer. All calculations run locally.' },
    { q: 'How many hours do I work per year?', a: 'At 40 h/week, 30 vacation days, 10 holidays: (52×40) − (30×8) − (10×8) = 1,760 net annual hours.' },
    { q: 'Must employers record working time?', a: 'Yes, following the ECJ ruling 2019 and Federal Labor Court 2022, employers must systematically record start, end, and duration of daily working hours.' },
  ],

  ctaTitle: 'Calculate Your Working Hours Now',
  ctaText: 'Free, ad-free, and no registration required — calculate directly in the browser.',
  ctaBtn: 'Go to Calculator',
};

const fr: HomeContent = {
  whatTitle: 'Qu\'est-ce qu\'un calculateur de temps de travail ?',
  whatText1: 'Un calculateur de temps de travail est un outil en ligne qui calcule le temps de travail réel à partir de l\'heure de début, de fin et des pauses. Le résultat est le temps de travail net — le temps effectivement travaillé et rémunéré.',
  whatText2: 'Le calculateur distingue le temps brut (présence totale) et le temps net (brut moins pauses). Il convertit également les heures et minutes en heures décimales — le format utilisé en comptabilité.',
  whatText3: 'Notre calculateur détecte automatiquement le travail de nuit, calcule les heures supplémentaires et fonctionne entièrement dans le navigateur — aucune donnée n\'est envoyée à un serveur.',

  howTitle: 'Comment fonctionne le calculateur ?',
  howIntro: 'Le calculateur calcule votre temps net en 4 étapes simples. Sans inscription ni installation.',
  step1Title: 'Saisir l\'heure de début',
  step1Text: 'Entrez l\'heure à laquelle vous avez commencé à travailler au format HH:MM.',
  step2Title: 'Saisir l\'heure de fin',
  step2Text: 'Entrez l\'heure de fin. Le travail de nuit est détecté automatiquement.',
  step3Title: 'Définir les pauses',
  step3Text: 'Entrez la durée totale des pauses en minutes. Les pauses sont déduites du temps brut.',
  step4Title: 'Lire les résultats',
  step4Text: 'Le calculateur affiche : temps brut, temps net, heures supplémentaires et conversion décimale.',

  formulaTitle: 'Calculer le temps de travail – Formule',
  formulaIntro: 'Le calcul suit des formules mathématiques simples :',
  formulaNettoLabel: 'Temps net',
  formulaNettoFormula: 'Fin − Début − Pause = Temps net',
  formulaNettoDesc: 'Le temps net est le temps rémunéré après déduction des pauses.',
  formulaBruttoLabel: 'Temps brut',
  formulaBruttoFormula: 'Fin − Début = Temps brut',
  formulaBruttoDesc: 'Le temps brut est la durée totale de présence.',
  formulaDecLabel: 'Heures décimales',
  formulaDecFormula: 'Heures + (Minutes ÷ 60) = Heures décimales',
  formulaDecDesc: 'Les heures décimales sont utilisées en comptabilité. 7:45 = 7,75 heures décimales.',
  formulaExample: 'Exemple : Début 08:00, Fin 17:00, Pause 30 min → Brut : 9:00 · Net : 8:30 (8,50 h)',

  pauseTitle: 'Calculer le temps avec pauses',
  pauseIntro: 'Les pauses interrompent le temps de travail et ne sont pas rémunérées.',
  pauseLawTitle: 'Pauses obligatoires',
  pauseLawText: 'L\'employeur doit accorder les pauses. Les pauses peuvent être divisées en périodes de 15 minutes minimum.',
  pauseTableHeaders: ['Temps de travail', 'Pause minimale', 'Base légale'],
  pauseTableRows: [
    ['Jusqu\'à 6 heures', 'Pas de pause obligatoire', 'Droit du travail'],
    ['Plus de 6 à 9 heures', '30 minutes', 'Droit du travail'],
    ['Plus de 9 heures', '45 minutes', 'Droit du travail'],
  ],
  pauseExTitle: 'Exemples de calcul avec pauses',
  pauseEx1Label: 'Exemple 1 : Journée de bureau (8 heures)',
  pauseEx1Lines: ['Début : 08:00', 'Fin : 16:30', 'Pause : 30 minutes', 'Brut : 8h30', 'Net : 8h00 = 8,00 h décimales'],
  pauseEx2Label: 'Exemple 2 : Longue journée (9+ heures)',
  pauseEx2Lines: ['Début : 07:00', 'Fin : 17:15', 'Pause : 45 minutes', 'Brut : 10h15', 'Net : 9h30 = 9,50 h décimales'],
  pauseTip: 'Conseil : Divisez les pauses — 30 min déjeuner + 15 min après-midi = 45 min au total.',

  overtimeTitle: 'Calculer les heures supplémentaires',
  overtimeIntro: 'Les heures supplémentaires surviennent quand le temps réel dépasse le temps cible contractuel.',
  overtimeFormulaLabel: 'Formule',
  overtimeFormula: 'Temps réel − Temps cible = Heures supplémentaires',
  overtimeExTitle: 'Exemple',
  overtimeExLines: ['Cible : 8:00 h', 'Début : 07:30 · Fin : 17:15 · Pause : 30 min', 'Réel : 9:15 h', 'Supplément : +1:15 h'],
  overtimeWeekTitle: 'Aperçu hebdomadaire',
  overtimeWeekText: 'L\'aperçu hebdomadaire totalise les heures supplémentaires quotidiennes.',
  overtimeWeekTableHeaders: ['Jour', 'Cible', 'Réel', 'Différence'],
  overtimeWeekTableRows: [
    ['Lundi', '8:00', '8:45', '+0:45'],
    ['Mardi', '8:00', '8:30', '+0:30'],
    ['Mercredi', '8:00', '7:30', '−0:30'],
    ['Jeudi', '8:00', '9:00', '+1:00'],
    ['Vendredi', '8:00', '8:15', '+0:15'],
  ],
  overtimeLawNote: 'Note : La durée quotidienne peut être étendue à 10 heures si la moyenne de 8 heures est maintenue sur 6 mois.',

  targetTitle: 'Calculer les heures cibles',
  targetIntro: 'Les heures cibles sont les heures contractuellement convenues.',
  targetDailyLabel: 'Cible quotidienne',
  targetDailyFormula: 'Heures hebdo ÷ Jours de travail',
  targetWeeklyLabel: 'Cible hebdomadaire',
  targetWeeklyFormula: 'Selon le contrat (35, 38,5 ou 40 heures)',
  targetMonthlyLabel: 'Cible mensuelle',
  targetMonthlyFormula: 'Heures hebdo × 52 ÷ 12',
  targetTableTitle: 'Heures cibles par modèle',
  targetTableHeaders: ['Modèle', 'Semaine', 'Mois (moy.)'],
  targetTableRows: [
    ['Temps plein (40 h)', '40:00', '173,33'],
    ['Secteur public (39 h)', '39:00', '169,00'],
    ['Industrie (35 h)', '35:00', '151,67'],
    ['Temps partiel (30 h)', '30:00', '130,00'],
    ['Temps partiel (20 h)', '20:00', '86,67'],
    ['Mini-job (~12 h)', '~12:00', '~52,00'],
  ],
  targetTip: 'Conseil : Saisissez vos heures cibles pour voir instantanément les heures supplémentaires.',

  percentTitle: 'Calculer le temps en pourcentage',
  percentIntro: 'Le pourcentage indique quelle fraction du temps plein représente un modèle à temps partiel.',
  percentFormula: 'Heures partielles ÷ Heures pleines × 100 = Pourcentage',
  percentTableTitle: 'Pourcentage du temps de travail',
  percentTableHeaders: ['Heures/semaine', 'Pourcentage (base 40h)', 'Désignation'],
  percentTableRows: [
    ['40', '100 %', 'Temps plein'],
    ['35', '87,5 %', 'Quasi temps plein'],
    ['30', '75 %', 'Temps partiel (¾)'],
    ['20', '50 %', 'Mi-temps'],
    ['15', '37,5 %', 'Temps partiel'],
    ['10', '25 %', 'Temps partiel (¼)'],
  ],
  percentExample: 'Exemple : 25 h/semaine sur base 40h → 25 ÷ 40 × 100 = 62,5 %.',

  partTimeTitle: 'Temps partiel',
  partTimeIntro: 'Le temps partiel existe quand les heures hebdomadaires sont inférieures à celles d\'un employé à temps plein comparable.',
  partTimeText: 'Le calculateur fonctionne pour tous les modèles de temps partiel.',
  partTimeTableTitle: 'Modèles de temps partiel',
  partTimeTableHeaders: ['Modèle', 'Heures/sem.', 'Heures/mois', 'Heures/an'],
  partTimeTableRows: [
    ['Mi-temps (50 %)', '20', '86,67', '1 040'],
    ['¾ poste (75 %)', '30', '130,00', '1 560'],
    ['80 %', '32', '138,67', '1 664'],
    ['Mini-job', '~12', '~52', '~624'],
    ['Temps partiel transitoire', 'variable', 'variable', 'variable'],
  ],
  partTimeTip: 'Conseil : Les mêmes règles de pause s\'appliquent au temps partiel.',

  fullTimeTitle: 'Temps plein',
  fullTimeIntro: 'Le temps plein correspond à la durée hebdomadaire complète convenue. En Allemagne : 37,5 à 40 heures en moyenne.',
  fullTimeText: 'Maximum quotidien : 8 heures, extensible à 10 heures avec compensation. Maximum hebdomadaire : 48 heures.',
  fullTimeCards: [
    { title: 'Industrie', value: '35–40 h/sem.', desc: 'IG Metall : 35 h' },
    { title: 'Secteur public', value: '39–40 h/sem.', desc: 'TVöD : 39 h (Ouest), 40 h (Est)' },
    { title: 'Santé', value: '38,5–40 h/sem.', desc: 'TVöD-K : 38,5 h' },
    { title: 'IT & Services', value: '37,5–40 h/sem.', desc: 'Temps de confiance courant' },
  ],
  fullTimeLawNote: 'Base légale : § 3 ArbZG (durée max.), § 4 ArbZG (pauses), § 5 ArbZG (repos de 11 heures).',

  examplesTitle: 'Exemples pratiques',
  examplesIntro: 'Voici des exemples typiques de calcul. Vérifiez-les avec notre calculateur.',
  examplesScenarios: [
    { label: 'Bureau (standard)', start: '08:00', end: '16:30', pause: '30 min', brutto: '8:30', netto: '8:00', decimal: '8,00' },
    { label: 'Matin', start: '06:00', end: '14:30', pause: '30 min', brutto: '8:30', netto: '8:00', decimal: '8,00' },
    { label: 'Après-midi', start: '14:00', end: '22:30', pause: '30 min', brutto: '8:30', netto: '8:00', decimal: '8,00' },
    { label: 'Nuit', start: '22:00', end: '06:30', pause: '30 min', brutto: '8:30', netto: '8:00', decimal: '8,00' },
    { label: 'Longue journée', start: '07:00', end: '17:15', pause: '45 min', brutto: '10:15', netto: '9:30', decimal: '9,50' },
    { label: 'Demi-journée', start: '09:00', end: '13:00', pause: '0 min', brutto: '4:00', netto: '4:00', decimal: '4,00' },
  ],
  examplesWeekTitle: 'Exemple : Semaine complète (contrat 40h)',
  examplesWeekTableHeaders: ['Jour', 'Début', 'Fin', 'Pause', 'Net'],
  examplesWeekTableRows: [
    ['Lundi', '08:00', '17:00', '30 min', '8:30'],
    ['Mardi', '07:30', '16:15', '30 min', '8:15'],
    ['Mercredi', '08:00', '16:30', '30 min', '8:00'],
    ['Jeudi', '08:00', '17:30', '45 min', '8:45'],
    ['Vendredi', '08:00', '15:30', '30 min', '7:00'],
  ],
  examplesWeekTotal: ['Total', '', '', '40:30'],

  mistakesTitle: 'Erreurs courantes',
  mistakesIntro: 'Ces erreurs typiques mènent à des calculs incorrects. Notre calculateur les évite automatiquement.',
  mistakes: [
    { title: 'Oubli de déduire les pauses', problem: 'Le temps brut est déclaré comme net.', solution: 'Toujours saisir les pauses.' },
    { title: 'Mauvaise conversion décimale', problem: '7h45 converti en 7,45 au lieu de 7,75.', solution: 'Diviser les minutes par 60.' },
    { title: 'Erreur de nuit', problem: 'Temps négatif pour les quarts de nuit.', solution: 'Le calculateur gère automatiquement.' },
    { title: 'Pauses légales ignorées', problem: 'Pas de pause pour 6+ heures.', solution: '30 min obligatoires (>6h).' },
    { title: 'Heures mensuelles incorrectes', problem: 'Multiplication par 4 au lieu de 4,333.', solution: 'Formule : hebdo × 52 ÷ 12.' },
    { title: 'Heures sup. quotidiennes vs hebdo', problem: 'Fluctuations quotidiennes comptées comme heures sup.', solution: 'Calculer sur base hebdomadaire.' },
  ],

  benefitsTitle: 'Avantages de notre calculateur',
  benefitsCards: [
    { icon: '🎯', title: 'Mathématiquement exact', text: 'Calculs sans erreurs d\'arrondi.' },
    { icon: '⚡', title: 'Calcul instantané', text: 'Résultats en temps réel.' },
    { icon: '📊', title: 'Aperçu hebdomadaire', text: 'Graphique comparatif réel vs cible.' },
    { icon: '🔒', title: 'Confidentialité totale', text: 'Aucune donnée transmise.' },
    { icon: '📱', title: 'Mobile & Responsive', text: 'Fonctionne sur tous les appareils.' },
    { icon: '💼', title: 'Pour tous les métiers', text: 'Adapté à tout modèle de travail.' },
  ],

  faqTitle: 'Questions fréquentes (FAQ)',
  faqItems: [
    { q: 'Comment calculer mon temps quotidien ?', a: 'Fin − Début − Pause = Temps net. Exemple : 08:00 à 16:30 avec 30 min pause = 8 heures.' },
    { q: 'Quelles pauses sont obligatoires ?', a: '30 min pour plus de 6 heures, 45 min pour plus de 9 heures.' },
    { q: 'Comment convertir en décimal ?', a: 'Minutes ÷ 60. Exemple : 45 min = 0,75. Donc 7h45 = 7,75 h.' },
    { q: 'Comment calculer les heures supplémentaires ?', a: 'Temps réel − Temps cible = Heures supplémentaires.' },
    { q: 'Combien d\'heures par mois ?', a: '40h/semaine = 173,33 h/mois (40 × 52 ÷ 12).' },
    { q: 'Différence brut/net ?', a: 'Brut = présence totale. Net = brut moins pauses.' },
    { q: 'Le calculateur gère-t-il le travail de nuit ?', a: 'Oui, automatiquement.' },
    { q: 'Durée maximale quotidienne ?', a: '8 heures, extensible à 10 heures avec compensation.' },
    { q: 'Les règles s\'appliquent-elles en télétravail ?', a: 'Oui, identiquement.' },
    { q: 'Qu\'est-ce que les heures cibles ?', a: 'Les heures convenues contractuellement par jour/semaine/mois.' },
    { q: 'Qu\'est-ce que les heures décimales ?', a: 'Division de l\'heure en 100 unités. 30 min = 0,50 h.' },
    { q: 'Le calculateur est-il gratuit ?', a: 'Oui, entièrement gratuit, sans pub, sans inscription.' },
  ],

  ctaTitle: 'Calculez votre temps maintenant',
  ctaText: 'Gratuit, sans publicité et sans inscription.',
  ctaBtn: 'Vers le calculateur',
};

const ar: HomeContent = {
  whatTitle: 'ما هي حاسبة ساعات العمل؟',
  whatText1: 'حاسبة ساعات العمل هي أداة إلكترونية تحسب وقت العمل الفعلي من وقت البداية ووقت النهاية وفترات الاستراحة. النتيجة هي صافي وقت العمل — الوقت الذي تم العمل فيه فعلياً.',
  whatText2: 'تميز الحاسبة بين إجمالي وقت العمل (من البداية إلى النهاية) وصافي وقت العمل (الإجمالي ناقص الاستراحات). كما تحول الساعات والدقائق إلى ساعات عشرية.',
  whatText3: 'حاسبتنا تكتشف العمل الليلي تلقائياً وتحسب ساعات العمل الإضافية. جميع الحسابات تتم محلياً في المتصفح.',

  howTitle: 'كيف تعمل حاسبة ساعات العمل؟',
  howIntro: 'تحسب الحاسبة صافي وقت عملك في 4 خطوات بسيطة.',
  step1Title: 'أدخل وقت البداية',
  step1Text: 'أدخل الوقت الذي بدأت فيه العمل بتنسيق ساعة:دقيقة.',
  step2Title: 'أدخل وقت النهاية',
  step2Text: 'أدخل وقت انتهاء العمل. يتم اكتشاف العمل الليلي تلقائياً.',
  step3Title: 'حدد فترات الاستراحة',
  step3Text: 'أدخل مدة الاستراحة بالدقائق. يتم خصمها من إجمالي وقت العمل.',
  step4Title: 'اقرأ النتائج',
  step4Text: 'تعرض الحاسبة: الإجمالي والصافي وساعات العمل الإضافية والتحويل العشري.',

  formulaTitle: 'حساب وقت العمل – المعادلة',
  formulaIntro: 'يتبع الحساب معادلات رياضية بسيطة:',
  formulaNettoLabel: 'صافي وقت العمل',
  formulaNettoFormula: 'وقت النهاية − وقت البداية − الاستراحة = الصافي',
  formulaNettoDesc: 'صافي وقت العمل هو الوقت المدفوع بعد خصم الاستراحات.',
  formulaBruttoLabel: 'إجمالي وقت العمل',
  formulaBruttoFormula: 'وقت النهاية − وقت البداية = الإجمالي',
  formulaBruttoDesc: 'إجمالي وقت العمل هو كامل فترة التواجد.',
  formulaDecLabel: 'الساعات العشرية',
  formulaDecFormula: 'الساعات + (الدقائق ÷ 60) = ساعات عشرية',
  formulaDecDesc: 'تُستخدم في المحاسبة. 7:45 = 7.75 ساعة عشرية.',
  formulaExample: 'مثال: بداية 08:00، نهاية 17:00، استراحة 30 د → إجمالي: 9:00 · صافي: 8:30 (8.50 س)',

  pauseTitle: 'حساب وقت العمل مع الاستراحات',
  pauseIntro: 'الاستراحات تقطع وقت العمل ولا تُحتسب كوقت مدفوع.',
  pauseLawTitle: 'فترات الاستراحة الإلزامية',
  pauseLawText: 'يجب على صاحب العمل منح الاستراحات. يمكن تقسيمها إلى فترات لا تقل عن 15 دقيقة.',
  pauseTableHeaders: ['وقت العمل', 'الاستراحة الأدنى', 'الأساس القانوني'],
  pauseTableRows: [
    ['حتى 6 ساعات', 'لا استراحة مطلوبة', 'قانون العمل'],
    ['أكثر من 6 إلى 9 ساعات', '30 دقيقة', 'قانون العمل'],
    ['أكثر من 9 ساعات', '45 دقيقة', 'قانون العمل'],
  ],
  pauseExTitle: 'أمثلة على الحساب',
  pauseEx1Label: 'مثال 1: يوم مكتبي (8 ساعات)',
  pauseEx1Lines: ['البداية: 08:00', 'النهاية: 16:30', 'استراحة: 30 دقيقة', 'الإجمالي: 8:30', 'الصافي: 8:00 = 8.00 عشري'],
  pauseEx2Label: 'مثال 2: يوم طويل (9+ ساعات)',
  pauseEx2Lines: ['البداية: 07:00', 'النهاية: 17:15', 'استراحة: 45 دقيقة', 'الإجمالي: 10:15', 'الصافي: 9:30 = 9.50 عشري'],
  pauseTip: 'نصيحة: قسّم الاستراحات الطويلة — 30 دقيقة غداء + 15 دقيقة بعد الظهر.',

  overtimeTitle: 'حساب ساعات العمل الإضافية',
  overtimeIntro: 'تحدث ساعات العمل الإضافية عندما يتجاوز الوقت الفعلي الساعات المستهدفة.',
  overtimeFormulaLabel: 'المعادلة',
  overtimeFormula: 'الوقت الفعلي − الوقت المستهدف = ساعات إضافية',
  overtimeExTitle: 'مثال',
  overtimeExLines: ['المستهدف: 8:00 ساعات', 'البداية: 07:30 · النهاية: 17:15 · استراحة: 30 د', 'الفعلي: 9:15 ساعات', 'إضافي: +1:15 ساعة'],
  overtimeWeekTitle: 'نظرة أسبوعية',
  overtimeWeekText: 'تجمع النظرة الأسبوعية ساعات العمل الإضافية اليومية.',
  overtimeWeekTableHeaders: ['اليوم', 'المستهدف', 'الفعلي', 'الفرق'],
  overtimeWeekTableRows: [
    ['الاثنين', '8:00', '8:45', '+0:45'],
    ['الثلاثاء', '8:00', '8:30', '+0:30'],
    ['الأربعاء', '8:00', '7:30', '−0:30'],
    ['الخميس', '8:00', '9:00', '+1:00'],
    ['الجمعة', '8:00', '8:15', '+0:15'],
  ],
  overtimeLawNote: 'ملاحظة: يمكن تمديد يوم العمل إلى 10 ساعات إذا تم الحفاظ على متوسط 8 ساعات خلال 6 أشهر.',

  targetTitle: 'حساب الساعات المستهدفة',
  targetIntro: 'الساعات المستهدفة هي ساعات العمل المتفق عليها تعاقدياً.',
  targetDailyLabel: 'المستهدف اليومي',
  targetDailyFormula: 'ساعات أسبوعية ÷ أيام العمل',
  targetWeeklyLabel: 'المستهدف الأسبوعي',
  targetWeeklyFormula: 'حسب العقد (35 أو 38.5 أو 40 ساعة)',
  targetMonthlyLabel: 'المستهدف الشهري',
  targetMonthlyFormula: 'ساعات أسبوعية × 52 ÷ 12',
  targetTableTitle: 'الساعات المستهدفة حسب النموذج',
  targetTableHeaders: ['النموذج', 'الأسبوع', 'الشهر (متوسط)'],
  targetTableRows: [
    ['دوام كامل (40 س)', '40:00', '173.33'],
    ['القطاع العام (39 س)', '39:00', '169.00'],
    ['صناعة (35 س)', '35:00', '151.67'],
    ['دوام جزئي (30 س)', '30:00', '130.00'],
    ['دوام جزئي (20 س)', '20:00', '86.67'],
    ['عمل مصغر (~12 س)', '~12:00', '~52.00'],
  ],
  targetTip: 'نصيحة: أدخل ساعاتك المستهدفة لرؤية الساعات الإضافية فوراً.',

  percentTitle: 'حساب وقت العمل كنسبة مئوية',
  percentIntro: 'تشير النسبة المئوية إلى حصة الدوام الجزئي من الدوام الكامل.',
  percentFormula: 'ساعات جزئية ÷ ساعات كاملة × 100 = النسبة المئوية',
  percentTableTitle: 'نسبة وقت العمل',
  percentTableHeaders: ['ساعات/أسبوع', 'النسبة (أساس 40 س)', 'التسمية'],
  percentTableRows: [
    ['40', '100%', 'دوام كامل'],
    ['35', '87.5%', 'شبه كامل'],
    ['30', '75%', 'دوام جزئي (¾)'],
    ['20', '50%', 'نصف دوام'],
    ['15', '37.5%', 'دوام جزئي'],
    ['10', '25%', 'ربع دوام'],
  ],
  percentExample: 'مثال: 25 ساعة/أسبوع من أصل 40 ساعة → 25 ÷ 40 × 100 = 62.5%',

  partTimeTitle: 'الدوام الجزئي',
  partTimeIntro: 'الدوام الجزئي يعني أن ساعات العمل الأسبوعية أقل من الدوام الكامل.',
  partTimeText: 'تعمل الحاسبة مع جميع نماذج الدوام الجزئي.',
  partTimeTableTitle: 'مقارنة نماذج الدوام الجزئي',
  partTimeTableHeaders: ['النموذج', 'ساعات/أسبوع', 'ساعات/شهر', 'ساعات/سنة'],
  partTimeTableRows: [
    ['نصف دوام (50%)', '20', '86.67', '1,040'],
    ['¾ وظيفة (75%)', '30', '130.00', '1,560'],
    ['80%', '32', '138.67', '1,664'],
    ['عمل مصغر', '~12', '~52', '~624'],
    ['جزئي انتقالي', 'متغير', 'متغير', 'متغير'],
  ],
  partTimeTip: 'نصيحة: تنطبق نفس قواعد الاستراحة على الدوام الجزئي.',

  fullTimeTitle: 'الدوام الكامل',
  fullTimeIntro: 'الدوام الكامل يعني العمل بالساعات الأسبوعية الكاملة المتفق عليها. في ألمانيا: 37.5 إلى 40 ساعة.',
  fullTimeText: 'الحد الأقصى اليومي: 8 ساعات، قابل للتمديد إلى 10 ساعات مع التعويض. الحد الأسبوعي: 48 ساعة.',
  fullTimeCards: [
    { title: 'الصناعة', value: '35–40 س/أسبوع', desc: 'IG Metall: 35 ساعة' },
    { title: 'القطاع العام', value: '39–40 س/أسبوع', desc: 'TVöD: 39 س (غرب)، 40 س (شرق)' },
    { title: 'الرعاية الصحية', value: '38.5–40 س/أسبوع', desc: 'TVöD-K: 38.5 ساعة' },
    { title: 'تكنولوجيا المعلومات', value: '37.5–40 س/أسبوع', desc: 'وقت العمل المرن شائع' },
  ],
  fullTimeLawNote: 'الأساس القانوني: § 3 ArbZG (الحد الأقصى)، § 4 ArbZG (الاستراحات)، § 5 ArbZG (راحة 11 ساعة).',

  examplesTitle: 'أمثلة عملية',
  examplesIntro: 'تعرض الأمثلة التالية حسابات نموذجية. يمكنك التحقق منها بحاسبتنا.',
  examplesScenarios: [
    { label: 'يوم مكتبي', start: '08:00', end: '16:30', pause: '30 د', brutto: '8:30', netto: '8:00', decimal: '8.00' },
    { label: 'وردية صباحية', start: '06:00', end: '14:30', pause: '30 د', brutto: '8:30', netto: '8:00', decimal: '8.00' },
    { label: 'وردية مسائية', start: '14:00', end: '22:30', pause: '30 د', brutto: '8:30', netto: '8:00', decimal: '8.00' },
    { label: 'وردية ليلية', start: '22:00', end: '06:30', pause: '30 د', brutto: '8:30', netto: '8:00', decimal: '8.00' },
    { label: 'يوم طويل', start: '07:00', end: '17:15', pause: '45 د', brutto: '10:15', netto: '9:30', decimal: '9.50' },
    { label: 'نصف يوم', start: '09:00', end: '13:00', pause: '0 د', brutto: '4:00', netto: '4:00', decimal: '4.00' },
  ],
  examplesWeekTitle: 'مثال: أسبوع عمل كامل (عقد 40 ساعة)',
  examplesWeekTableHeaders: ['اليوم', 'البداية', 'النهاية', 'استراحة', 'صافي'],
  examplesWeekTableRows: [
    ['الاثنين', '08:00', '17:00', '30 د', '8:30'],
    ['الثلاثاء', '07:30', '16:15', '30 د', '8:15'],
    ['الأربعاء', '08:00', '16:30', '30 د', '8:00'],
    ['الخميس', '08:00', '17:30', '45 د', '8:45'],
    ['الجمعة', '08:00', '15:30', '30 د', '7:00'],
  ],
  examplesWeekTotal: ['المجموع', '', '', '40:30'],

  mistakesTitle: 'أخطاء شائعة في حساب ساعات العمل',
  mistakesIntro: 'هذه الأخطاء الشائعة تؤدي إلى حسابات خاطئة. حاسبتنا تتجنبها تلقائياً.',
  mistakes: [
    { title: 'عدم خصم الاستراحات', problem: 'إعلان الإجمالي كصافي.', solution: 'أدخل دائماً وقت الاستراحة.' },
    { title: 'تحويل عشري خاطئ', problem: '7:45 = 7.45 بدلاً من 7.75.', solution: 'قسّم الدقائق على 60.' },
    { title: 'خطأ العمل الليلي', problem: 'وقت سلبي للورديات الليلية.', solution: 'الحاسبة تتعامل تلقائياً.' },
    { title: 'تجاهل الاستراحات القانونية', problem: 'لا استراحة لأكثر من 6 ساعات.', solution: '30 دقيقة إلزامية (>6 س).' },
    { title: 'ساعات شهرية خاطئة', problem: 'الضرب في 4 بدلاً من 4.333.', solution: 'المعادلة: أسبوعي × 52 ÷ 12.' },
    { title: 'يومي مقابل أسبوعي', problem: 'تقلبات يومية تُحسب كإضافي.', solution: 'احسب على أساس أسبوعي.' },
  ],

  benefitsTitle: 'مزايا حاسبتنا',
  benefitsCards: [
    { icon: '🎯', title: 'دقة رياضية', text: 'حسابات بدون أخطاء تقريب.' },
    { icon: '⚡', title: 'حساب فوري', text: 'نتائج في الوقت الحقيقي.' },
    { icon: '📊', title: 'نظرة أسبوعية', text: 'رسم بياني مقارن.' },
    { icon: '🔒', title: 'خصوصية كاملة', text: 'لا نقل بيانات.' },
    { icon: '📱', title: 'متجاوب', text: 'يعمل على جميع الأجهزة.' },
    { icon: '💼', title: 'لجميع المهن', text: 'يتكيف مع أي نموذج عمل.' },
  ],

  faqTitle: 'الأسئلة الشائعة',
  faqItems: [
    { q: 'كيف أحسب وقت عملي اليومي؟', a: 'النهاية − البداية − الاستراحة = الصافي. مثال: 08:00 إلى 16:30 مع 30 دقيقة = 8 ساعات.' },
    { q: 'ما هي الاستراحات الإلزامية؟', a: '30 دقيقة لأكثر من 6 ساعات، 45 دقيقة لأكثر من 9 ساعات.' },
    { q: 'كيف أحول إلى عشري؟', a: 'الدقائق ÷ 60. مثال: 45 دقيقة = 0.75. إذن 7:45 = 7.75 ساعة.' },
    { q: 'كيف أحسب الساعات الإضافية؟', a: 'الفعلي − المستهدف = الإضافي.' },
    { q: 'كم ساعة في الشهر؟', a: '40 س/أسبوع = 173.33 س/شهر.' },
    { q: 'ما الفرق بين الإجمالي والصافي؟', a: 'الإجمالي = من البداية للنهاية. الصافي = الإجمالي ناقص الاستراحات.' },
    { q: 'هل تعمل للعمل الليلي؟', a: 'نعم، تلقائياً.' },
    { q: 'ما الحد الأقصى اليومي؟', a: '8 ساعات، قابلة للتمديد إلى 10.' },
    { q: 'هل تنطبق القواعد على العمل من المنزل؟', a: 'نعم، بالتساوي.' },
    { q: 'ما هي الساعات المستهدفة؟', a: 'الساعات المتفق عليها تعاقدياً.' },
    { q: 'ما هي الساعات العشرية؟', a: 'تقسيم الساعة إلى 100 وحدة. 30 دقيقة = 0.50 ساعة.' },
    { q: 'هل الحاسبة مجانية؟', a: 'نعم، مجانية تماماً بدون إعلانات أو تسجيل.' },
  ],

  ctaTitle: 'احسب ساعات عملك الآن',
  ctaText: 'مجاني وبدون إعلانات وبدون تسجيل.',
  ctaBtn: 'إلى الحاسبة',
};

const localeMap: Record<string, HomeContent> = { de, en, fr, ar };

export function getHomeContent(locale: Locale): HomeContent {
  return localeMap[locale] ?? de;
}
