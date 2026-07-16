// Tool definitions for all 21 calculator tool pages
// IMPORTANT: Each tool has 100% unique content — no duplicate text, examples, or FAQs across tools.

export interface ToolSection {
  heading: string;
  text: string;
}

export interface ToolFAQ {
  q: string;
  a: string;
}

export interface ToolFeature {
  icon: string;
  title: string;
  text: string;
}

export interface ToolDef {
  slug: string;
  name: string;
  title: string;
  description: string;
  subtitle: string;
  sections: ToolSection[];
  faqItems: ToolFAQ[];
  features: ToolFeature[];
  ctaTitle: string;
  ctaText: string;
}

export const tools: ToolDef[] = [

  // ──────────────────────────────────────────
  // 1. ARBEITSZEIT RECHNER
  // Focus: Daily net work time from start/end/breaks
  // ──────────────────────────────────────────
  {
    slug: 'arbeitszeit-rechner',
    name: 'Arbeitszeit Rechner Pro',
    title: 'Arbeitszeit Rechner Pro — Netto-Arbeitszeit berechnen',
    description: 'Tägliche Netto-Arbeitszeit aus Arbeitsbeginn, Arbeitsende und Pausen berechnen. Ergebnis in HH:MM und Dezimal. Kostenlos und ohne Anmeldung.',
    subtitle: 'Trage Arbeitsbeginn, Arbeitsende und Pausen ein — die Netto-Arbeitszeit wird sofort berechnet.',
    sections: [
      { heading: 'Netto-Arbeitszeit auf die Minute genau', text: 'Der Arbeitszeit Rechner Pro zieht sämtliche Pausenminuten von der Anwesenheitsdauer ab und liefert die vergütungsfähige Nettozeit. Bei einem Schichtbeginn um 06:15 Uhr, einem Schichtende um 14:45 Uhr und einer 30-Minuten-Pause ergibt sich eine Bruttozeit von 8 Stunden 30 Minuten und eine Nettozeit von 8 Stunden (8,00 Dezimal).' },
      { heading: 'Automatische Erkennung von Nachtarbeit', text: 'Sobald das eingetragene Arbeitsende zeitlich vor dem Arbeitsbeginn liegt, schaltet der Rechner automatisch in den Nachtmodus. Ein Krankenpfleger, der um 21:30 Uhr anfängt und um 05:45 Uhr aufhört, erhält korrekt 8 Stunden 15 Minuten Bruttozeit — der Tageswechsel um Mitternacht wird intern berücksichtigt.' },
      { heading: 'Wochenübersicht mit Soll-Ist-Vergleich', text: 'Jeder gespeicherte Tageseintrag fließt in die Wochenübersicht. Dort stehen Brutto, Netto, Pausen und die Abweichung zur Soll-Arbeitszeit nebeneinander. Der integrierte Balkenchart vergleicht Ist- und Soll-Stunden visuell und macht Überstunden oder Fehlzeiten auf einen Blick sichtbar.' },
    ],
    faqItems: [
      { q: 'Welches Zeitformat akzeptiert der Arbeitszeit Rechner Pro?', a: '24-Stunden-Format im Muster HH:MM. Eingaben wie 08:00, 17:30 oder 23:45 sind gültig. Das heutige Datum wird automatisch vorausgefüllt.' },
      { q: 'Wie viele Pausen kann ich gleichzeitig erfassen?', a: 'Beliebig viele. Über „Pause hinzufügen" entsteht ein neues Feld pro Pause. Alle Einzelpausen werden summiert und von der Bruttodauer abgezogen.' },
      { q: 'Funktioniert der Rechner auch bei Schichtarbeit über Mitternacht?', a: 'Ja. Liegt das Arbeitsende vor dem Arbeitsbeginn, wird automatisch ein Tageswechsel berücksichtigt. Beginn 22:00, Ende 06:30 ergibt 8,50 Bruttostunden.' },
      { q: 'Wo werden meine eingegebenen Daten gespeichert?', a: 'Ausschließlich im lokalen Speicher des Browsers (localStorage). Kein Server, kein Account, kein Cookie-Tracking.' },
      { q: 'Kann ich zwischen Dezimal- und Uhrzeitformat wechseln?', a: 'Ja, per Klick auf den Umschalter im Ergebnisbereich. 7:45 wird zu 7,75 und umgekehrt — je nachdem, was die Buchhaltung verlangt.' },
      { q: 'Lässt sich die Soll-Arbeitszeit individuell einstellen?', a: 'Ja, im Eingabebereich lässt sich die tägliche Soll-Arbeitszeit zwischen 1 und 12 Stunden frei definieren. Die Überstundenanzeige passt sich sofort an.' },
    ],
    features: [
      { icon: '🕐', title: 'Echtzeit-Ergebnis', text: 'Nettozeit aktualisiert sich bei jeder Tastatureingabe — ohne Button.' },
      { icon: '🌙', title: 'Nachtmodus', text: 'Erkennt Nachtschichten automatisch und rechnet über 0:00 Uhr hinaus.' },
      { icon: '📊', title: 'Wochen-Chart', text: 'Balkendiagramm vergleicht Ist-Stunden und Soll-Stunden pro Tag.' },
      { icon: '🔒', title: 'Offline-fähig', text: 'Läuft ohne Internetverbindung — Daten bleiben auf deinem Gerät.' },
    ],
    ctaTitle: 'Nettozeit jetzt ermitteln',
    ctaText: 'Arbeitsbeginn, Arbeitsende und Pausen eingeben — fertig.',
  },

  // ──────────────────────────────────────────
  // 2. STUNDENLOHN RECHNER
  // Focus: Salary → hourly rate conversion, Mindestlohn
  // ──────────────────────────────────────────
  {
    slug: 'stundenlohn-rechner',
    name: 'Stundenlohn Rechner',
    title: 'Stundenlohn Rechner — Vom Gehalt zum Stundenverdienst',
    description: 'Stundenlohn aus Monatsgehalt und Wochenstunden berechnen. Mindestlohn-Check inklusive. Kostenlos und ohne Registrierung.',
    subtitle: 'Erfahre in Sekunden, wie viel du pro Arbeitsstunde verdienst.',
    sections: [
      { heading: 'So ermittelst du deinen realen Stundenverdienst', text: 'Teile das Monatsbrutto durch die durchschnittlichen Monatsstunden. Rechenweg: 3.200 € ÷ (38 Wochenstunden × 52 ÷ 12) = 3.200 € ÷ 164,67 = 19,43 €. Dieser Wert ist der Bruttostundenlohn vor Steuern und Sozialabgaben. Netto bleibt je nach Steuerklasse 55–75 % davon.' },
      { heading: 'Mindestlohn-Grenze und Minijob-Schwelle', text: 'Seit Januar 2025 gilt ein gesetzlicher Mindestlohn von 12,82 € brutto. Minijobs sind auf 556 € Monatsverdienst gedeckelt — daraus ergeben sich höchstens 43,37 Arbeitsstunden pro Monat (556 ÷ 12,82). Wer mehr Stunden leistet, überschreitet die Geringfügigkeitsgrenze und wird sozialversicherungspflichtig.' },
      { heading: 'Stundenlohn-Vergleich: Vollzeit, Teilzeit, Freelancer', text: 'Ein identisches Monatsgehalt ergibt bei weniger Wochenstunden einen höheren Stundenlohn. 2.800 € bei 40 h = 16,15 €/h. Dieselben 2.800 € bei 30 h = 21,54 €/h. Freelancer kalkulieren anders: Zum Nettoverdienst kommen Krankenversicherung, Rentenvorsorge und Betriebskosten — der Bruttostundensatz liegt deshalb typisch 2–3× über dem Angestellten-Stundenlohn.' },
    ],
    faqItems: [
      { q: 'Welche Formel nutzt der Stundenlohn Rechner?', a: 'Monatsgehalt ÷ (Wochenstunden × 52 ÷ 12). Der Faktor 52÷12 = 4,333 bildet die echte Wochenanzahl pro Monat ab.' },
      { q: 'Ist der angezeigte Stundenlohn brutto oder netto?', a: 'Brutto. Der Nettowert hängt von Steuerklasse, Kirchensteuer, Freibeträgen und Sozialabgaben ab und ist individuell verschieden.' },
      { q: 'Wie finde ich heraus, ob mein Lohn über dem Mindestlohn liegt?', a: 'Trage dein Monatsgehalt und die Wochenstunden ein. Liegt das Ergebnis unter 12,82 €, unterschreitet dein Arbeitgeber den Mindestlohn.' },
      { q: 'Gilt der Mindestlohn auch für Praktikanten?', a: 'Pflichtpraktika und Praktika unter 3 Monaten sind ausgenommen. Freiwillige Praktika ab dem 4. Monat unterliegen dem Mindestlohn.' },
      { q: 'Wie hoch ist der Median-Stundenlohn in Deutschland 2025?', a: 'Der Median-Bruttostundenlohn liegt bei ca. 20,70 € (Statistisches Bundesamt). 50 % aller Beschäftigten verdienen mehr, 50 % weniger.' },
      { q: 'Wie rechne ich Stundenlohn in Jahresgehalt um?', a: 'Stundenlohn × Wochenstunden × 52 = Jahresbrutto. Beispiel: 22 € × 40 × 52 = 45.760 € pro Jahr.' },
    ],
    features: [
      { icon: '💶', title: 'Gehalt → Stundensatz', text: 'Monatsbrutto in den tatsächlichen Stundenverdienst umrechnen.' },
      { icon: '📉', title: 'Mindestlohn-Ampel', text: 'Sofort sehen, ob der Stundenlohn über der gesetzlichen Grenze liegt.' },
      { icon: '🔄', title: 'Umkehrrechnung', text: 'Vom Stundenlohn zum Monatsgehalt — beide Richtungen möglich.' },
      { icon: '📊', title: 'Teilzeit & Minijob', text: 'Ergebnisse für jedes Arbeitszeitmodell — von 10 bis 40 Wochenstunden.' },
    ],
    ctaTitle: 'Stundenlohn ermitteln',
    ctaText: 'Gehalt eingeben, Wochenstunden einstellen — Stundenlohn sofort ablesen.',
  },

  // ──────────────────────────────────────────
  // 3. ARBEITSSTUNDEN RECHNER
  // Focus: Counting & accumulating total hours, Stundenzettel
  // ──────────────────────────────────────────
  {
    slug: 'arbeitsstunden-rechner',
    name: 'Arbeitsstunden Rechner',
    title: 'Arbeitsstunden Rechner — Geleistete Stunden summieren',
    description: 'Tägliche Arbeitsstunden erfassen, summieren und als Stundennachweis exportieren. Mit Dezimalwert für die Lohnabrechnung.',
    subtitle: 'Erfasse jeden Arbeitstag einzeln — der Rechner summiert deine Stunden automatisch.',
    sections: [
      { heading: 'Vom Einzeltag zur Wochensumme', text: 'Trage jeden Arbeitstag mit Start, Ende und Pausen ein. Der Arbeitsstunden Rechner addiert alle Nettostunden in der Wochenübersicht. Bei 5 Tagen mit 8:15, 7:50, 8:30, 8:00 und 7:45 ergibt sich eine Wochensumme von 40 Stunden 20 Minuten (40,33 Dezimal). Das Ergebnis zeigt sofort, ob der Soll-Wert erreicht ist.' },
      { heading: 'Stundenzettel digital erstellen', text: 'Die Wochenübersicht ersetzt den Papier-Stundenzettel. Pro Zeile stehen Datum, Startzeit, Endzeit, Pausendauer, Bruttostunden und Nettostunden. Per „Kopieren"-Button wandern alle Zeilen in die Zwischenablage — fertig zum Einfügen in Excel, Google Sheets oder das Zeiterfassungssystem des Betriebs.' },
      { heading: 'Jahresstunden und Langzeitauswertung', text: 'Für die Jahresauswertung gilt: Netto-Wochenstunden × 52 minus Urlaubswochen × Tagesstunden minus Feiertage × Tagesstunden. Ein Mitarbeiter mit 38 h/Woche, 6 Wochen Urlaub und 10 Feiertagen kommt auf (38 × 52) – (30 × 7,6) – (10 × 7,6) = 1.976 – 228 – 76 = 1.672 Nettostunden pro Jahr.' },
    ],
    faqItems: [
      { q: 'Wie addiere ich Arbeitsstunden über mehrere Tage?', a: 'Jeden Tag einzeln eintragen und speichern. Die Wochenübersicht addiert alle Nettostunden automatisch und zeigt die Gesamtsumme unten.' },
      { q: 'Kann ich den Stundenzettel ausdrucken?', a: 'Direkt drucken nicht, aber per Kopierfunktion in eine Tabelle einfügen und von dort drucken. Der Export enthält alle Spalten der Wochenübersicht.' },
      { q: 'Wie lange bleiben meine Einträge gespeichert?', a: 'Die Wochenübersicht hält bis zu 14 Tageseinträge im lokalen Browserspeicher. Ältere Einträge werden beim Speichern eines neuen Tages entfernt.' },
      { q: 'Zählt die Mittagspause zu den Arbeitsstunden?', a: 'Nein. Ruhepausen werden abgezogen. Der Rechner trennt Brutto (inkl. Pause) und Netto (ohne Pause) deutlich sichtbar.' },
      { q: 'Wie unterscheiden sich Bruttostunden und Nettostunden?', a: 'Brutto = Anwesenheitsdauer von Beginn bis Ende. Netto = Brutto minus Pausenminuten. Nur die Nettostunden sind vergütungspflichtig.' },
      { q: 'Kann ich halbe Urlaubstage als Arbeitstag erfassen?', a: 'Ja, trage den halben Tag mit verkürztem Arbeitsende ein. Der Rechner berechnet die reduzierte Stundenzahl automatisch.' },
    ],
    features: [
      { icon: '➕', title: 'Auto-Summe', text: 'Wöchentliche Gesamtstunden werden bei jedem Speichern aktualisiert.' },
      { icon: '📋', title: 'Digitaler Stundenzettel', text: 'Alle Einträge als Tabelle kopieren und in jedes System einfügen.' },
      { icon: '📅', title: '14-Tage-Speicher', text: 'Bis zu 14 Tageseinträge bleiben im lokalen Browser erhalten.' },
      { icon: '🔢', title: 'Dezimalsumme', text: 'Wochensumme in Dezimalstunden für die Lohnbuchhaltung.' },
    ],
    ctaTitle: 'Stunden jetzt summieren',
    ctaText: 'Tageseinträge speichern — Wochensumme automatisch erhalten.',
  },

  // ──────────────────────────────────────────
  // 4. TEILZEIT RECHNER
  // Focus: Part-time hours, pro-rata salary, TzBfG
  // ──────────────────────────────────────────
  {
    slug: 'teilzeit-rechner',
    name: 'Teilzeit Rechner',
    title: 'Teilzeit Rechner — Stunden und Gehalt bei Teilzeit berechnen',
    description: 'Teilzeit-Arbeitszeit, Monatsgehalt und Urlaubsanspruch bei reduzierter Stundenzahl berechnen. Kostenlos und nach TzBfG.',
    subtitle: 'Berechne deine Teilzeit-Stunden, das anteilige Gehalt und den Urlaubsanspruch.',
    sections: [
      { heading: 'Tägliche Arbeitszeit bei Teilzeit ermitteln', text: 'Teilzeitstunden pro Woche geteilt durch Arbeitstage ergibt die tägliche Soll-Zeit. Wer 25 Stunden auf 5 Tage verteilt, arbeitet 5 Stunden täglich. Dieselben 25 Stunden auf 4 Tage: 6 Stunden 15 Minuten pro Tag. Der Teilzeit Rechner zeigt Netto- und Bruttodauer inklusive gesetzlicher Pausenregelung.' },
      { heading: 'Anteiliges Gehalt und Stundenlohnvergleich', text: 'Das Teilzeitgehalt ergibt sich aus: Vollzeitgehalt × (Teilzeitstunden ÷ Vollzeitstunden). Ein Vollzeitgehalt von 3.600 € bei 40 h wird bei 24 Wochenstunden zu 3.600 × (24 ÷ 40) = 2.160 € brutto. Der Stundenlohn bleibt identisch — nur die Monatssumme sinkt proportional.' },
      { heading: 'Rechtsanspruch auf Teilzeit nach TzBfG', text: 'Das Teilzeit- und Befristungsgesetz gewährt einen Anspruch auf Teilzeit ab 6 Monaten Betriebszugehörigkeit in Betrieben mit mehr als 15 Mitarbeitern. Der Antrag muss 3 Monate vor Beginn schriftlich gestellt werden. Seit 2019 besteht zusätzlich ein Anspruch auf Brückenteilzeit: befristete Teilzeit für 1–5 Jahre mit garantierter Rückkehr zur Vollzeit.' },
    ],
    faqItems: [
      { q: 'Ab wie vielen Stunden gilt ein Job als Teilzeit?', a: 'Jede Wochenstundenzahl unter der betriebsüblichen Vollzeit ist Teilzeit. Es gibt keine feste Untergrenze — auch 10 h/Woche ist Teilzeit.' },
      { q: 'Ändert sich mein Stundenlohn bei Teilzeit?', a: 'Nein. Der Stundenlohn bleibt gleich. Nur die Monatsstundenzahl sinkt und damit das Monatsgehalt.' },
      { q: 'Welche Pausenregeln gelten bei 4 Stunden täglicher Arbeitszeit?', a: 'Keine Pflichtpause. Die gesetzliche Pausenpflicht greift erst ab 6 Stunden Arbeitszeit.' },
      { q: 'Wie berechne ich Urlaubstage bei einer 3-Tage-Woche?', a: 'Vertragliche Urlaubstage × (Arbeitstage Teilzeit ÷ Arbeitstage Vollzeit). Bei 30 Tagen Vollzeit-Urlaub: 30 × (3 ÷ 5) = 18 Urlaubstage.' },
      { q: 'Was ist Brückenteilzeit?', a: 'Seit 2019 können Beschäftigte in Betrieben ab 45 Mitarbeitern befristet auf Teilzeit wechseln (1–5 Jahre) und danach automatisch zur Vollzeit zurückkehren.' },
      { q: 'Können Überstunden bei Teilzeit anfallen?', a: 'Ja. Jede Stunde über der vereinbarten Teilzeit-Wochenstundenzahl ist eine Überstunde. Bei 25 h/Woche und 28 geleisteten Stunden: 3 Überstunden.' },
    ],
    features: [
      { icon: '⏱️', title: 'Tages-Soll', text: 'Tägliche Soll-Zeit aus Wochenstunden und Arbeitstagen berechnen.' },
      { icon: '💶', title: 'Pro-rata-Gehalt', text: 'Anteiliges Monatsgehalt aus dem Vollzeit-Referenzwert ableiten.' },
      { icon: '🏖️', title: 'Urlaubs-Umrechnung', text: 'Urlaubstage proportional zur Teilzeit-Quote berechnen.' },
      { icon: '⚖️', title: 'TzBfG-Infos', text: 'Rechtliche Voraussetzungen für den Teilzeitanspruch prüfen.' },
    ],
    ctaTitle: 'Teilzeit-Stunden berechnen',
    ctaText: 'Wochenstunden eingeben — tägliche Arbeitszeit und Gehalt sofort sehen.',
  },

  // ──────────────────────────────────────────
  // 5. URLAUBSGELD RECHNER
  // Focus: Vacation pay (Urlaubsentgelt + Zusatzurlaubsgeld)
  // ──────────────────────────────────────────
  {
    slug: 'urlaubsgeld-rechner',
    name: 'Urlaubsgeld Rechner',
    title: 'Urlaubsgeld Rechner — Urlaubsentgelt und Sonderzahlung berechnen',
    description: 'Urlaubsentgelt nach BUrlG und zusätzliches Urlaubsgeld berechnen. Teilzeit-Anteil und Steuerbelastung inklusive.',
    subtitle: 'Berechne dein gesetzliches Urlaubsentgelt und die zusätzliche Sonderzahlung.',
    sections: [
      { heading: 'Urlaubsentgelt: Lohnfortzahlung im Urlaub', text: 'Das Bundesurlaubsgesetz garantiert die Lohnfortzahlung während des Urlaubs. Die Höhe richtet sich nach dem Durchschnittsverdienst der letzten 13 Wochen vor Urlaubsantritt. Variable Gehaltsbestandteile wie Provisionen, Nacht- und Sonntagszuschläge fließen in die Berechnung ein. Einmalige Sonderzahlungen (Weihnachtsgeld, Boni) bleiben außen vor.' },
      { heading: 'Zusätzliches Urlaubsgeld als Sonderzahlung', text: 'Neben dem Urlaubsentgelt zahlen viele Arbeitgeber zusätzliches Urlaubsgeld — eine freiwillige Sonderzahlung ohne gesetzliche Pflicht. Im Baugewerbe liegt das Urlaubsgeld bei 25 % eines Monatsgehalts, im öffentlichen Dienst (TVöD) bei einer festen Pauschale je nach Entgeltgruppe. Rund 46 % der Beschäftigten in Deutschland erhalten zusätzliches Urlaubsgeld.' },
      { heading: 'Besteuerung und Sozialabgaben', text: 'Zusätzliches Urlaubsgeld ist steuer- und sozialversicherungspflichtig. Es wird im Auszahlungsmonat als sonstiger Bezug versteuert, was die Steuerlast in diesem Monat erhöht. Die Jahressteuer bleibt gleich, da der Lohnsteuerjahresausgleich die Spitze nivelliert. Bei Grenzfällen nahe der Beitragsbemessungsgrenze kann Urlaubsgeld die Sozialabgaben überproportional erhöhen.' },
    ],
    faqItems: [
      { q: 'Wie berechne ich mein tägliches Urlaubsentgelt?', a: 'Gesamtbruttoverdienst der letzten 13 Wochen ÷ 65 Arbeitstage (13 × 5) = Tagesentgelt. Dieses Entgelt wird für jeden Urlaubstag gezahlt.' },
      { q: 'Fließen Überstundenvergütungen ins Urlaubsentgelt ein?', a: 'Ja, regelmäßig geleistete Überstunden und deren Vergütung werden im 13-Wochen-Durchschnitt berücksichtigt.' },
      { q: 'Kann der Arbeitgeber Urlaubsgeld streichen?', a: 'Wenn es vertraglich oder tariflich zugesichert ist: nein. Bei freiwilliger Leistung kann der Arbeitgeber das Urlaubsgeld unter bestimmten Voraussetzungen widerrufen.' },
      { q: 'Wann wird Urlaubsgeld üblicherweise ausgezahlt?', a: 'In den meisten Tarifverträgen erfolgt die Auszahlung im Mai oder Juni — vor der Sommerferienzeit.' },
      { q: 'Bekomme ich bei Kündigung anteiliges Urlaubsgeld?', a: 'Das hängt vom Arbeitsvertrag oder Tarifvertrag ab. Viele Verträge enthalten Stichtagsregelungen oder Pro-rata-Klauseln für unterjähriges Ausscheiden.' },
      { q: 'Wie wirkt sich Elternzeit auf das Urlaubsgeld aus?', a: 'Während der Elternzeit ruht das Arbeitsverhältnis. Der Urlaubsgeldanspruch kann anteilig gekürzt werden — die Regelung hängt vom Tarifvertrag ab.' },
    ],
    features: [
      { icon: '🏖️', title: '13-Wochen-Schnitt', text: 'Urlaubsentgelt nach dem gesetzlichen 13-Wochen-Durchschnitt berechnen.' },
      { icon: '💶', title: 'Sonderzahlung', text: 'Zusätzliches Urlaubsgeld nach Tarif oder Arbeitsvertrag ermitteln.' },
      { icon: '📊', title: 'Teilzeit-Quote', text: 'Anteiliges Urlaubsgeld bei reduzierter Arbeitszeit berechnen.' },
      { icon: '🧾', title: 'Steuer-Info', text: 'Hinweise zur Versteuerung als sonstiger Bezug.' },
    ],
    ctaTitle: 'Urlaubsgeld ermitteln',
    ctaText: 'Verdienst eingeben — Urlaubsentgelt und Sonderzahlung berechnen.',
  },

  // ──────────────────────────────────────────
  // 6. URLAUBSTAGE RECHNER
  // Focus: Vacation day entitlement, pro-rata, carryover
  // ──────────────────────────────────────────
  {
    slug: 'urlaubstage-rechner',
    name: 'Urlaubstage Rechner',
    title: 'Urlaubstage Rechner — Urlaubsanspruch berechnen',
    description: 'Urlaubsanspruch bei Vollzeit, Teilzeit, Jobwechsel und unterjährigem Eintritt berechnen. Nach Bundesurlaubsgesetz.',
    subtitle: 'Berechne deinen exakten Urlaubsanspruch — auch bei Teilzeit und Jobwechsel.',
    sections: [
      { heading: 'Gesetzlicher Mindesturlaub nach BUrlG', text: 'Das Bundesurlaubsgesetz sichert 24 Werktage Urlaub bei einer 6-Tage-Woche bzw. 20 Arbeitstage bei einer 5-Tage-Woche. Viele Tarifverträge gehen darüber hinaus: Metall & Elektro 30 Tage, TVöD 30 Tage, Chemie 30 Tage. Der vertragliche Urlaub darf den gesetzlichen Mindesturlaub nie unterschreiten.' },
      { heading: 'Anteiliger Urlaub bei unterjährigem Eintritt', text: 'Wer nicht das gesamte Kalenderjahr beschäftigt ist, erhält anteiligen Urlaub: Jahresurlaub ÷ 12 × volle Beschäftigungsmonate. Ein Arbeitnehmer mit 30 Urlaubstagen, der am 1. April beginnt, erhält 30 ÷ 12 × 9 = 22,5 Tage (aufgerundet 23). Die Wartezeit für den vollen Anspruch beträgt 6 Monate (§ 4 BUrlG).' },
      { heading: 'Urlaubsübertragung und Verfall', text: 'Nicht genommener Urlaub muss bis zum 31. Dezember genommen werden. Eine Übertragung bis 31. März des Folgejahres ist nur bei dringenden betrieblichen oder persönlichen Gründen zulässig. Wichtig: Der Arbeitgeber muss aktiv darauf hinweisen, dass Urlaub verfällt (EuGH-Urteil C-684/16). Ohne Hinweis verfällt der Urlaub nicht.' },
    ],
    faqItems: [
      { q: 'Wie berechne ich Urlaubstage bei einer 4-Tage-Woche?', a: '24 Werktage Mindesturlaub × (4 ÷ 6) = 16 Arbeitstage. Oder bei vertraglichen 30 Tagen: 30 × (4 ÷ 5) = 24 Tage.' },
      { q: 'Verfällt mein Urlaub automatisch am 31. März?', a: 'Nur wenn der Arbeitgeber rechtzeitig auf den Verfall hingewiesen hat. Ohne Hinweis bleibt der Anspruch bestehen (EuGH-Rechtsprechung).' },
      { q: 'Wie viel Urlaub steht mir bei Kündigung zum 30. Juni zu?', a: 'Bei 30 Tagen Jahresurlaub: 30 ÷ 12 × 6 = 15 Tage. Bereits genommene Tage werden abgezogen.' },
      { q: 'Werden gesetzliche Feiertage vom Urlaub abgezogen?', a: 'Nein. Fällt ein Feiertag in den Urlaub, wird dieser Tag nicht als Urlaubstag gezählt.' },
      { q: 'Kann der Arbeitgeber den Urlaubszeitpunkt bestimmen?', a: 'Grundsätzlich sind Urlaubswünsche des Arbeitnehmers vorrangig (§ 7 BUrlG). Der Arbeitgeber darf nur bei dringenden betrieblichen Gründen abweichen.' },
      { q: 'Habe ich in der Probezeit Urlaubsanspruch?', a: 'Ja, ab dem ersten Tag entsteht ein anteiliger Anspruch: 1/12 des Jahresurlaubs pro Monat. Der volle Anspruch entsteht nach 6 Monaten.' },
    ],
    features: [
      { icon: '📅', title: 'Jahres-Anspruch', text: 'Gesetzlichen und vertraglichen Urlaubsanspruch vergleichen.' },
      { icon: '🔄', title: 'Pro-rata-Rechnung', text: 'Anteiligen Urlaub bei Ein- oder Austritt im laufenden Jahr berechnen.' },
      { icon: '⏰', title: 'Verfall-Warnung', text: 'Übertragungsfristen und Verfallsdaten im Blick behalten.' },
      { icon: '📊', title: 'Teilzeit-Anpassung', text: 'Urlaubstage proportional zur Arbeitstage-Quote umrechnen.' },
    ],
    ctaTitle: 'Urlaubsanspruch prüfen',
    ctaText: 'Vertragsdaten eingeben — verbleibende Urlaubstage sofort sehen.',
  },

  // ──────────────────────────────────────────
  // 7. ARBEITSSTUNDENRECHNER
  // Focus: Decimal/industrial minutes conversion
  // ──────────────────────────────────────────
  {
    slug: 'arbeitsstundenrechner',
    name: 'Arbeitsstundenrechner',
    title: 'Arbeitsstundenrechner — Stunden in Dezimal umwandeln',
    description: 'Arbeitsstunden in Dezimalstunden und Industrieminuten umrechnen. Umrechnungstabelle und Formel inklusive.',
    subtitle: 'Wandle Stunden:Minuten in Dezimalstunden um — für Lohnabrechnung und Buchhaltung.',
    sections: [
      { heading: 'Dezimalstunden für die Entgeltabrechnung', text: 'Buchhaltungssysteme wie DATEV, SAP und Lexware erwarten Arbeitszeiten als Dezimalwert. Der Arbeitsstundenrechner konvertiert jede HH:MM-Eingabe automatisch. 6 Stunden 50 Minuten = 6,83 Dezimal (50 ÷ 60 = 0,833). 9 Stunden 10 Minuten = 9,17 Dezimal (10 ÷ 60 = 0,167). Ein Klick auf den Umschalter wechselt zwischen beiden Formaten.' },
      { heading: 'Industrieminuten: 100er-Teilung der Stunde', text: 'In der Industrie wird die Stunde in 100 statt 60 Teile geteilt. 1 Industrieminute = 36 Sekunden = 0,6 reguläre Minuten. Die Umrechnung: reguläre Minuten × 100 ÷ 60 = Industrieminuten. 45 reguläre Minuten × 100 ÷ 60 = 75 Industrieminuten. Der Dezimalwert einer Arbeitszeit in Stunden entspricht direkt den Industriestunden.' },
      { heading: 'Typische Umrechnungsfehler vermeiden', text: 'Der häufigste Fehler: 8:30 wird als 8,30 statt 8,50 in die Lohnabrechnung eingetragen. Korrekt: 30 Minuten ÷ 60 = 0,50, nicht 0,30. Ein zweiter Fehler: Dezimalwerte addieren statt Stunden:Minuten. 7,75 + 8,25 = 16,00 Dezimal = 16:00 Stunden. Aber 7:45 + 8:15 ≠ 15:60, sondern 16:00. Der Arbeitsstundenrechner verhindert beide Fehler automatisch.' },
    ],
    faqItems: [
      { q: 'Wie wandle ich 7 Stunden 20 Minuten in Dezimal um?', a: '20 ÷ 60 = 0,333. Also 7,33 Dezimalstunden. Der Rechner rundet auf 2 Nachkommastellen.' },
      { q: 'Was ist der Unterschied zwischen Dezimalstunden und Industriestunden?', a: 'Kein Unterschied. Beide Begriffe bezeichnen dasselbe: die Stunde in 100 Teile aufgeteilt. 8,75 Dezimalstunden = 8,75 Industriestunden = 8 Stunden 45 Minuten.' },
      { q: 'Warum rechnen Buchhalter in Dezimal statt HH:MM?', a: 'Dezimalwerte lassen sich direkt multiplizieren. 8,50 h × 18 €/h = 153 €. Im HH:MM-Format müsste erst umgerechnet werden (8:30 × 18 ist nicht 153:0).' },
      { q: 'Wie rechne ich Dezimalstunden zurück in Minuten?', a: 'Dezimalanteil × 60 = Minuten. 0,75 × 60 = 45 Minuten. 8,75 Dezimal = 8 Stunden 45 Minuten.' },
      { q: 'Welches Dezimalformat verwenden DATEV und SAP?', a: 'Beide verwenden Dezimalstunden mit 2 Nachkommastellen (z. B. 7,75). Industrieminuten als ganzzahlige Werte (z. B. 775) sind seltener.' },
      { q: 'Stimmen 8,50 Dezimalstunden und 8:30 Stunden überein?', a: 'Ja, exakt. 0,50 × 60 = 30 Minuten. 8,50 Dezimal = 8 Stunden 30 Minuten = 8:30 im Uhrzeitformat.' },
    ],
    features: [
      { icon: '🔄', title: 'Format-Umschalter', text: 'Per Klick zwischen Stunden:Minuten und Dezimalanzeige wechseln.' },
      { icon: '🔢', title: 'Industrieminuten', text: 'Ergebnisse wahlweise in Industrieminuten (100er-Teilung) anzeigen.' },
      { icon: '⚠️', title: 'Fehlervermeidung', text: 'Automatische Umrechnung verhindert typische 8:30 → 8,30-Fehler.' },
      { icon: '📋', title: 'DATEV-kompatibel', text: 'Dezimalwerte direkt in Buchhaltungssoftware übernehmen.' },
    ],
    ctaTitle: 'In Dezimal umrechnen',
    ctaText: 'Arbeitszeit eingeben — Dezimalwert und Industrieminuten sofort ablesen.',
  },

  // ──────────────────────────────────────────
  // 8. NACHTZUSCHLAG RECHNER
  // Focus: Night work premiums, § 3b EStG, health
  // ──────────────────────────────────────────
  {
    slug: 'nachtzuschlag-rechner',
    name: 'Nachtzuschlag Rechner',
    title: 'Nachtzuschlag Rechner — Nachtarbeitszuschläge berechnen',
    description: 'Nachtzuschläge berechnen: Steuerfreie Zuschläge für Arbeit zwischen 23 und 6 Uhr. Nach § 3b EStG und § 6 ArbZG.',
    subtitle: 'Berechne deine steuerfreien Nachtzuschläge für Arbeit zwischen 23:00 und 06:00 Uhr.',
    sections: [
      { heading: 'Nachtzuschlag berechnen: Grundlohn × Prozent × Stunden', text: 'Der Nachtzuschlag ergibt sich aus: Stundenlohn × Zuschlagsprozent × Nachtarbeitsstunden. Ein Lagerist mit 16 €/Stunde, 25 % Nachtzuschlag und 7 Stunden Nachtarbeit erhält 16 × 0,25 × 7 = 28 € Nachtzuschlag zusätzlich zum Grundlohn von 112 €. Gesamtverdienst der Nachtschicht: 140 €.' },
      { heading: 'Steuerfreiheit nach § 3b EStG', text: 'Nachtarbeitszuschläge sind steuerfrei bis 25 % des Grundlohns für Arbeit zwischen 20:00 und 06:00 Uhr, bei einem Grundlohn bis 50 €/Stunde. Für die Kernzeit von 0:00 bis 4:00 Uhr steigt die steuerfreie Grenze auf 40 %. Sozialversicherungsbeiträge fallen nur an, wenn der Grundlohn 25 €/Stunde übersteigt. Zuschläge über den Freigrenzen werden regulär besteuert.' },
      { heading: 'Nachtarbeit und Gesundheitsvorsorge', text: 'Nachtarbeitnehmer haben nach § 6 ArbZG Anspruch auf arbeitsmedizinische Vorsorgeuntersuchungen — vor Aufnahme der Nachtarbeit und danach alle 3 Jahre (ab dem 50. Lebensjahr jährlich). Die Nachtarbeitszeit darf 8 Stunden nicht überschreiten, verlängerbar auf 10 Stunden bei Ausgleich innerhalb von 4 Wochen (nicht 6 Monate wie bei Tagarbeit).' },
    ],
    faqItems: [
      { q: 'Ab welcher Uhrzeit gilt Nachtarbeit?', a: 'Nach § 2 Abs. 3 ArbZG: 23:00 bis 06:00 Uhr. In Bäckereien und Konditoreien: 22:00 bis 05:00 Uhr.' },
      { q: 'Wie hoch ist der übliche Nachtzuschlag?', a: '25 % bei gelegentlicher Nachtarbeit, 30 % bei Dauernachtarbeit. Manche Tarifverträge sehen 35–50 % vor.' },
      { q: 'Wird der Nachtzuschlag vom Brutto- oder Nettolohn berechnet?', a: 'Vom Bruttostundenlohn (Grundlohn). Variable Zulagen, Prämien oder Überstundenvergütungen zählen nicht zum Grundlohn.' },
      { q: 'Sind Nachtzuschläge bei einem Grundlohn über 50 € steuerfrei?', a: 'Nein. Über 50 €/Stunde Grundlohn entfällt die Steuerfreiheit vollständig. Die Zuschläge werden dann regulär versteuert.' },
      { q: 'Besteht ein gesetzlicher Anspruch auf Nachtzuschlag?', a: 'Ja. § 6 Abs. 5 ArbZG gibt Nachtarbeitnehmern einen Anspruch auf angemessene Zuschläge oder alternativ bezahlte Freistellung.' },
      { q: 'Wie unterscheidet sich der Ausgleichszeitraum bei Nachtarbeit?', a: 'Bei Nachtarbeit muss der Durchschnitt von 8 h/Tag innerhalb von 4 Kalenderwochen (nicht 6 Monaten) erreicht werden (§ 6 Abs. 2 ArbZG).' },
    ],
    features: [
      { icon: '🌙', title: 'Zuschlag-Kalkulation', text: 'Grundlohn, Prozentsatz und Nachtstunden eingeben — Zuschlag ablesen.' },
      { icon: '💰', title: 'Steuerfrei-Berechnung', text: 'Anteil des Zuschlags anzeigen, der nach § 3b EStG steuerfrei bleibt.' },
      { icon: '⏰', title: 'Kernzeit 0–4 Uhr', text: 'Erhöhte Freigrenze von 40 % für Arbeit zwischen Mitternacht und 4 Uhr.' },
      { icon: '🏥', title: 'Gesundheits-Hinweis', text: 'Information zu Vorsorgeuntersuchungen und Ausgleichsruhezeiten.' },
    ],
    ctaTitle: 'Nachtzuschlag berechnen',
    ctaText: 'Grundlohn und Nachtstunden eingeben — steuerfreien Zuschlag sofort sehen.',
  },

  // ──────────────────────────────────────────
  // 9. ÜBERSTUNDEN RECHNER
  // Focus: Overtime tracking, plus/minus hours, compensation
  // ──────────────────────────────────────────
  {
    slug: 'ueberstunden-rechner',
    name: 'Überstunden Rechner',
    title: 'Überstunden Rechner — Plus- und Minusstunden berechnen',
    description: 'Überstunden aus Ist- und Soll-Arbeitszeit berechnen. Wochenvergleich, Freizeitausgleich und Vergütungsanspruch.',
    subtitle: 'Vergleiche deine Ist-Arbeitszeit mit dem Soll — Überstunden und Minusstunden auf einen Blick.',
    sections: [
      { heading: 'Überstunden = Ist-Zeit minus Soll-Zeit', text: 'Der Überstunden Rechner subtrahiert die vereinbarte Soll-Arbeitszeit von der tatsächlich geleisteten Ist-Arbeitszeit. Bei 8:00 Soll und 9:45 Ist entstehen +1:45 Überstunden (1,75 Dezimal). Bei 8:00 Soll und 7:15 Ist: -0:45 Minusstunden (-0,75 Dezimal). Die Wochenübersicht summiert alle Tagesabweichungen zum Wochensaldo.' },
      { heading: 'Vergütung oder Freizeitausgleich', text: 'Überstunden werden entweder ausbezahlt oder durch Freizeit ausgeglichen — die Regelung steht im Arbeitsvertrag oder Tarifvertrag. Ohne vertragliche Regelung besteht grundsätzlich ein Vergütungsanspruch, wenn der Arbeitgeber die Überstunden angeordnet, geduldet oder nachträglich gebilligt hat. Der Zuschlag für Überstunden (oft 25 %) ist nicht gesetzlich vorgeschrieben, sondern tariflich oder vertraglich geregelt.' },
      { heading: 'Grenzen nach dem Arbeitszeitgesetz', text: 'Die tägliche Höchstarbeitszeit liegt bei 10 Stunden (§ 3 ArbZG). Der 6-Monats-Durchschnitt darf 8 Stunden pro Werktag nicht übersteigen. Daraus ergibt sich rechnerisch: maximal 2 Überstunden pro Tag bei einer 8-Stunden-Soll-Zeit, wenn der Ausgleich fristgerecht erfolgt. Die Wochenobergrenze liegt bei 60 Stunden, der Durchschnitt bei 48 Stunden.' },
    ],
    faqItems: [
      { q: 'Muss der Arbeitgeber Überstunden anordnen, damit sie gelten?', a: 'Nicht zwingend. Es reicht, wenn der Arbeitgeber die Mehrarbeit duldet oder nachträglich billigt. Eigeninitiative ohne jede Kenntnis des Arbeitgebers reicht aber nicht aus.' },
      { q: 'Wie dokumentiere ich Überstunden rechtssicher?', a: 'Tägliche Aufzeichnung von Start, Ende und Pausen. Die Wochenübersicht im Rechner liefert eine lückenlose Dokumentation mit Datums- und Zeitstempel.' },
      { q: 'Gibt es einen gesetzlichen Überstundenzuschlag?', a: 'Nein. Das Gesetz schreibt keinen Zuschlag vor. Zuschläge (oft 25–50 %) ergeben sich aus Tarifvertrag, Betriebsvereinbarung oder Arbeitsvertrag.' },
      { q: 'Wann verjähren Überstundenansprüche?', a: 'Reguläre Verjährung: 3 Jahre ab Jahresende (§ 195 BGB). Arbeits- und Tarifverträge enthalten häufig Ausschlussfristen von 3–6 Monaten.' },
      { q: 'Was sind Minusstunden und muss ich sie nacharbeiten?', a: 'Minusstunden entstehen bei weniger Ist- als Soll-Zeit. Ob nachgearbeitet werden muss, hängt vom Grund ab: betrieblich veranlasst (Arbeitgeber trägt Risiko) oder selbstverschuldet.' },
      { q: 'Können Überstunden mit dem Gehalt abgegolten sein?', a: 'Ja, durch eine Pauschalabgeltungsklausel im Vertrag. Diese muss transparent sein und eine Höchstgrenze nennen (z. B. „bis zu 10 Überstunden/Monat"), sonst ist sie unwirksam.' },
    ],
    features: [
      { icon: '➕', title: 'Plus/Minus-Saldo', text: 'Tägliche und wöchentliche Abweichung vom Soll auf einen Blick.' },
      { icon: '📈', title: 'Verlaufs-Chart', text: 'Balkenchart zeigt Ist- und Soll-Stunden pro Tag nebeneinander.' },
      { icon: '⚖️', title: 'Rechtsrahmen', text: 'Hinweise zu Höchstarbeitszeit und Ausgleichspflicht nach ArbZG.' },
      { icon: '📋', title: 'Dokumentation', text: 'Lückenlose Aufzeichnung aller Tage für den Überstundennachweis.' },
    ],
    ctaTitle: 'Überstunden ermitteln',
    ctaText: 'Ist-Zeit und Soll-Zeit eingeben — Überstundensaldo sofort sehen.',
  },

  // ──────────────────────────────────────────
  // 10. STUNDEN UND MINUTEN RECHNER
  // Focus: Time arithmetic (add, subtract, convert)
  // ──────────────────────────────────────────
  {
    slug: 'stunden-und-minuten-rechner',
    name: 'Stunden und Minuten Rechner',
    title: 'Stunden und Minuten Rechner — Zeiten addieren und konvertieren',
    description: 'Stunden und Minuten addieren, subtrahieren und in Dezimal konvertieren. Für Stundenzettel, Lohnabrechnung und Projektzeiten.',
    subtitle: 'Addiere, subtrahiere und konvertiere Zeitangaben — ohne Kopfrechnen.',
    sections: [
      { heading: 'Zeitwerte korrekt addieren', text: 'Stunden:Minuten-Werte lassen sich nicht wie Dezimalzahlen addieren. 3:45 + 2:30 = 6:15 (nicht 5:75 und nicht 6,15). Der Stunden und Minuten Rechner übernimmt den Übertrag automatisch: Minutenwerte über 60 werden in volle Stunden umgerechnet. 4:50 + 3:25 = 8:15 (50 + 25 = 75 Minuten = 1 Stunde 15 Minuten, also 7 + 1 = 8 Stunden).' },
      { heading: 'Zeitwerte subtrahieren', text: 'Bei der Subtraktion entsteht ein negativer Minutenwert, wenn der Subtrahend größer ist: 5:10 – 2:35. 10 – 35 = −25, Borrow: 4:70 – 2:35 = 2:35. Der Rechner löst das intern auf und liefert 2 Stunden 35 Minuten. Negativwerte (z. B. Minusstunden) werden mit Vorzeichen dargestellt.' },
      { heading: 'Projektzeiten und Freiberufler-Abrechnung', text: 'Freiberufler und Projektleiter erfassen Arbeitszeiten pro Aufgabe. Der Stunden und Minuten Rechner addiert die Einzelposten zur Gesamtprojektzeit. 12:30 + 8:45 + 6:15 = 27:30 Stunden. In Dezimal: 27,50 Stunden. Bei einem Stundensatz von 85 € ergibt sich ein Rechnungsbetrag von 27,50 × 85 = 2.337,50 €.' },
    ],
    faqItems: [
      { q: 'Warum ergibt 3:45 + 4:30 nicht 7:75?', a: 'Weil eine Stunde nur 60 Minuten hat. 45 + 30 = 75 Minuten = 1 Stunde 15 Minuten. Das Ergebnis ist 8:15.' },
      { q: 'Kann ich mehr als 24 Stunden addieren?', a: 'Ja, der Rechner hat keine Obergrenze. 18:30 + 15:45 = 34:15 Stunden. Ideal für Wochensummen oder Projektzeiten.' },
      { q: 'Wie konvertiere ich eine Gesamtzeit in Rechnungsbeträge?', a: 'Dezimalwert × Stundensatz. 34:15 = 34,25 Dezimal. Bei 75 €/h: 34,25 × 75 = 2.568,75 €.' },
      { q: 'Was passiert bei negativen Ergebnissen?', a: 'Negative Zeiten werden mit Minuszeichen dargestellt. 3:00 – 5:30 = –2:30 (–2,50 Dezimal). Nützlich für Minusstunden-Konten.' },
      { q: 'Wie unterscheiden sich Dezimalstunden und Stunden:Minuten bei der Addition?', a: 'Dezimalstunden addiert man wie normale Zahlen (7,50 + 8,25 = 15,75). Stunden:Minuten erfordern einen Übertrag bei Minutenwerten über 60.' },
      { q: 'Kann ich Zeitangaben in verschiedenen Formaten mischen?', a: 'Der Rechner akzeptiert HH:MM. Dezimalwerte müssen vorher konvertiert werden. Der Umschalter hilft beim schnellen Wechsel.' },
    ],
    features: [
      { icon: '➕', title: 'Zeiten addieren', text: 'Beliebig viele Zeitwerte addieren — mit automatischem Minutenübertrag.' },
      { icon: '➖', title: 'Zeiten subtrahieren', text: 'Differenz zweier Zeitwerte berechnen — auch mit negativem Ergebnis.' },
      { icon: '🔄', title: 'Dezimal-Konverter', text: 'Ergebnisse per Klick in Dezimalstunden umwandeln.' },
      { icon: '💼', title: 'Projektabrechnung', text: 'Gesamtzeit × Stundensatz = Rechnungsbetrag.' },
    ],
    ctaTitle: 'Zeiten verrechnen',
    ctaText: 'Stunden und Minuten eingeben — Summe und Dezimalwert sofort erhalten.',
  },

  // ──────────────────────────────────────────
  // 11. WOCHENSTUNDEN RECHNER
  // Focus: Weekly hour distribution, daily target, shift patterns
  // ──────────────────────────────────────────
  {
    slug: 'wochenstunden-rechner',
    name: 'Wochenstunden Rechner',
    title: 'Wochenstunden Rechner — Tägliche Soll-Zeit aus Wochenstunden',
    description: 'Wochenstunden auf Arbeitstage verteilen und tägliche Soll-Arbeitszeit berechnen. Für 4-, 5- und 6-Tage-Wochen.',
    subtitle: 'Verteile deine Wochenstunden auf Arbeitstage — tägliche Soll-Zeit sofort sehen.',
    sections: [
      { heading: 'Wochenstunden gleichmäßig verteilen', text: 'Wochenstunden ÷ Arbeitstage = tägliche Soll-Zeit. 38,5 Wochenstunden auf 5 Tage: 7 Stunden 42 Minuten pro Tag (7,70 Dezimal). Auf 4 Tage: 9 Stunden 37 Minuten (9,63 Dezimal). Der Wochenstunden Rechner zeigt die tägliche Soll-Zeit für jede beliebige Kombination aus Wochenstunden und Arbeitstagen.' },
      { heading: 'Ungleichmäßige Verteilung im Schichtbetrieb', text: 'Nicht jeder Tag muss gleich lang sein. Ein Betrieb mit 37,5 Wochenstunden kann Mo–Do 8 Stunden und Fr 5,5 Stunden ansetzen (4 × 8 + 5,5 = 37,5). Der Rechner erfasst die tatsächlichen Tagesstunden und vergleicht die Summe mit dem Soll. Abweichungen werden als Plus- oder Minusstunden ausgewiesen.' },
      { heading: 'Tarifliche Wochenstunden im Vergleich', text: 'Metall & Elektro (IG Metall): 35 h/Woche (West). Chemie (IG BCE): 37,5 h. Öffentlicher Dienst (TVöD): 39 h (West) / 40 h (Ost). Einzelhandel (ver.di): 37,5 h. Banken: 39 h. Baugewerbe: 40 h. Der Rechner lässt sich mit jeder dieser Vorgaben nutzen — Wochenstunden eintragen, tägliche Verteilung ablesen.' },
    ],
    faqItems: [
      { q: 'Wie viele Stunden pro Tag bei einer 35-Stunden-Woche?', a: '35 ÷ 5 = 7 Stunden pro Tag. Auf 4 Tage: 8 Stunden 45 Minuten.' },
      { q: 'Kann ich verschiedene Tageszeiten für einzelne Wochentage eingeben?', a: 'Ja. Trage jeden Tag individuell ein — die Wochensumme vergleicht automatisch mit dem Soll.' },
      { q: 'Was passiert, wenn ich die Wochenstunden nicht vollständig verteile?', a: 'Der Rechner zeigt die Differenz als Minusstunden an. Bei 38,5 Soll und 36 Ist: –2,50 Stunden.' },
      { q: 'Wie verteile ich 39 Wochenstunden auf eine 4-Tage-Woche?', a: '39 ÷ 4 = 9 Stunden 45 Minuten pro Tag (9,75 Dezimal). Beachte die 10-Stunden-Grenze nach ArbZG.' },
      { q: 'Welche Wochenstundenzahl ist in der Metallindustrie üblich?', a: 'West: 35 Stunden (IG Metall). Ost: 38 Stunden. Individuelle Optionen auf 40 h sind möglich (§ 3 ERA-Tarifvertrag).' },
      { q: 'Sind 4-Tage-Wochen mit 40 Stunden gesetzlich erlaubt?', a: 'Ja, 4 × 10 Stunden ist zulässig, wenn der Durchschnitt innerhalb von 6 Monaten bei 8 h/Werktag bleibt. Samstag zählt als Werktag.' },
    ],
    features: [
      { icon: '📅', title: 'Tages-Verteilung', text: 'Wochenstunden auf 3, 4, 5 oder 6 Arbeitstage verteilen.' },
      { icon: '📊', title: 'Tarif-Vergleich', text: 'Wochenstunden verschiedener Tarifverträge vergleichen.' },
      { icon: '⚖️', title: 'ArbZG-Prüfung', text: 'Warnung, wenn die tägliche Soll-Zeit 10 Stunden übersteigt.' },
      { icon: '🔢', title: 'Dezimal & HH:MM', text: 'Tägliche Soll-Zeit in beiden Formaten anzeigen.' },
    ],
    ctaTitle: 'Tages-Soll berechnen',
    ctaText: 'Wochenstunden und Arbeitstage eingeben — tägliche Soll-Zeit ablesen.',
  },

  // ──────────────────────────────────────────
  // 12. SCHICHTZULAGEN RECHNER
  // Focus: Shift premiums (Früh/Spät/Nacht/Wechsel), tax-free limits
  // ──────────────────────────────────────────
  {
    slug: 'schichtzulagen-rechner',
    name: 'Schichtzulagen Rechner',
    title: 'Schichtzulagen Rechner — Zuschläge für alle Schichtmodelle',
    description: 'Schichtzulagen für Früh-, Spät-, Nacht- und Wechselschicht berechnen. Steuerfreie Anteile nach § 3b EStG ermitteln.',
    subtitle: 'Berechne Zuschläge für jede Schichtart — inklusive Steuerfrei-Prüfung.',
    sections: [
      { heading: 'Zuschlagsberechnung pro Schicht', text: 'Die Schichtzulage errechnet sich aus: Grundlohn × Zuschlagssatz × Schichtstunden. Eine Krankenschwester mit 18,50 €/h Grundlohn, 15 % Spätschichtzulage und 8 Stunden Spätdienst erhält 18,50 × 0,15 × 8 = 22,20 € Zulage. Gesamtverdienst der Schicht: 148,00 + 22,20 = 170,20 € brutto.' },
      { heading: 'Steuerfreie und steuerpflichtige Anteile trennen', text: 'Nur Nachtzuschläge (23–6 Uhr) und Sonn-/Feiertagszuschläge genießen Steuerfreiheit nach § 3b EStG. Spätschichtzulagen (z. B. 14–22 Uhr) sind vollständig steuerpflichtig, da sie nicht unter die begünstigten Zeiten fallen. Wechselschichtzulagen werden nach ihrem Nachtanteil aufgeteilt: der Anteil zwischen 23 und 6 Uhr ist steuerfrei, der Rest steuerpflichtig.' },
      { heading: 'Wechselschicht und Zusatzurlaub', text: 'Beschäftigte in Wechselschicht erhalten nach den meisten Tarifverträgen 1–4 zusätzliche Urlaubstage pro Jahr. Im TVöD beträgt der Wechselschichtzuschlag 105 € monatlich (Pauschale). Im Krankenhaustarifvertrag (TV-L) erhalten Pflegekräfte in Wechselschicht eine monatliche Zulage von 155 €. Die Regelungen variieren stark nach Branche.' },
    ],
    faqItems: [
      { q: 'Welche Schichtarten gibt es in Deutschland?', a: 'Frühschicht (ca. 6–14 Uhr), Spätschicht (ca. 14–22 Uhr), Nachtschicht (ca. 22–6 Uhr), Wechselschicht (planmäßiger Schichtwechsel) und Dauernachtschicht (ausschließlich Nachtarbeit).' },
      { q: 'Ist eine Spätschichtzulage steuerfrei?', a: 'Nein. Nur Zuschläge für Arbeit zwischen 23 und 6 Uhr (Nacht), an Sonntagen und Feiertagen sind nach § 3b EStG steuerfrei. Spätschichtzulagen sind voll steuerpflichtig.' },
      { q: 'Wie hoch ist die Wechselschichtzulage im TVöD?', a: '105 € monatlich bei ständiger Wechselschicht, 63 € bei Schichtarbeit ohne ständigen Wechsel (§ 8 TVöD).' },
      { q: 'Werden Schichtzulagen bei der Rentenberechnung berücksichtigt?', a: 'Steuerpflichtige Zulagen ja — sie erhöhen das beitragspflichtige Bruttoentgelt. Steuerfreie Zuschläge bis 25 €/h Grundlohn sind auch sozialversicherungsfrei und fließen nicht in die Rentenberechnung ein.' },
      { q: 'Habe ich Anspruch auf eine Schichtzulage bei Teilzeit-Schichtarbeit?', a: 'Ja. Teilzeitbeschäftigte in Schichtarbeit erhalten den gleichen prozentualen Zuschlag. Nur die Stundenzahl ist geringer, nicht der Prozentsatz.' },
      { q: 'Können Früh- und Spätschichtzulagen kombiniert werden?', a: 'Nein, es gilt die Zulage der jeweiligen Schicht. Bei einer geteilten Schicht (z. B. 6–10 Uhr + 16–20 Uhr) gelten die Zuschläge der jeweiligen Zeitfenster.' },
    ],
    features: [
      { icon: '🔄', title: 'Alle Schichttypen', text: 'Zuschläge für Früh-, Spät-, Nacht- und Wechselschicht berechnen.' },
      { icon: '💰', title: 'Steuer-Splitting', text: 'Steuerfreien und steuerpflichtigen Zuschlagsanteil getrennt ausweisen.' },
      { icon: '📊', title: 'Monatssumme', text: 'Alle Schichtzulagen eines Monats addieren und mit Grundlohn verrechnen.' },
      { icon: '🏖️', title: 'Zusatzurlaub-Info', text: 'Hinweise zu tariflichen Zusatzurlaubstagen bei Wechselschicht.' },
    ],
    ctaTitle: 'Schichtzulage berechnen',
    ctaText: 'Grundlohn, Schichtart und Stunden eingeben — Zulage sofort sehen.',
  },

  // ──────────────────────────────────────────
  // 13. ZEITERFASSUNG RECHNER
  // Focus: Digital time tracking, BAG ruling, compliance
  // ──────────────────────────────────────────
  {
    slug: 'zeiterfassung-rechner',
    name: 'Zeiterfassung Rechner',
    title: 'Zeiterfassung Rechner — Arbeitszeiten digital dokumentieren',
    description: 'Digitale Zeiterfassung: Arbeitszeiten BAG-konform erfassen und als Wochenbericht exportieren. DSGVO-konform und kostenlos.',
    subtitle: 'Erfasse Start, Ende und Pausen digital — BAG-konform und ohne Installation.',
    sections: [
      { heading: 'Pflicht zur Zeiterfassung seit dem BAG-Urteil 2022', text: 'Am 13. September 2022 stellte das Bundesarbeitsgericht klar: Arbeitgeber müssen die Arbeitszeit aller Beschäftigten systematisch erfassen (Az. 1 ABR 22/21). Grundlage ist § 3 Abs. 2 Nr. 1 ArbSchG. Erfasst werden müssen Beginn, Ende und Dauer der täglichen Arbeitszeit einschließlich Pausen. Der Zeiterfassung Rechner bildet alle diese Pflichtfelder ab.' },
      { heading: 'Vom Stundenzettel zur digitalen Erfassung', text: 'Der Zeiterfassung Rechner bietet gegenüber Papier-Stundenzetteln 4 Vorteile: keine Rechenfehler bei Brutto-Netto-Berechnung, automatische Dezimalumrechnung, sofortige Überstundenerkennung und Export per Kopierfunktion. Alle Einträge werden lokal im Browser gespeichert — kein Server, kein Login, keine monatlichen Kosten.' },
      { heading: 'Datenschutz bei der Zeiterfassung', text: 'Arbeitszeitdaten sind personenbezogene Daten im Sinne der DSGVO. Der Zeiterfassung Rechner speichert ausschließlich im lokalen Browser (localStorage). Es werden keine Daten an Dritte übermittelt, keine IP-Adressen protokolliert und keine Cookies zur Nutzerverfolgung gesetzt. Die Verarbeitung findet vollständig auf dem Endgerät des Nutzers statt.' },
    ],
    faqItems: [
      { q: 'Welche Daten verlangt das BAG-Urteil?', a: 'Beginn der Arbeitszeit, Ende der Arbeitszeit und Dauer der täglichen Arbeitszeit. Die Dokumentation der Pausen ergibt sich aus dem ArbZG.' },
      { q: 'Gilt die Zeiterfassungspflicht auch für leitende Angestellte?', a: 'Leitende Angestellte i.S.v. § 5 Abs. 3 BetrVG sind vom ArbZG ausgenommen. Die Pflicht nach ArbSchG kann dennoch greifen — die Rechtslage ist hier noch nicht abschließend geklärt.' },
      { q: 'Reicht eine Excel-Tabelle als Zeiterfassung?', a: 'Grundsätzlich ja, sofern sie die Pflichtdaten enthält. Der Zeiterfassung Rechner bietet jedoch automatische Berechnungen und verhindert Eingabefehler.' },
      { q: 'Wie übertrage ich die Daten in das Firmensystem?', a: 'Per „Kopieren"-Button die Wochenübersicht in die Zwischenablage kopieren. Dann in Excel, SAP-Zeitwirtschaft oder jedes webbasierte System einfügen.' },
      { q: 'Müssen Arbeitnehmer die Zeiterfassung selbst durchführen?', a: 'Der Arbeitgeber kann die Durchführung delegieren. Die Verantwortung für die Einrichtung und Kontrolle des Systems bleibt beim Arbeitgeber.' },
      { q: 'Wie lange müssen Zeiterfassungsdaten aufbewahrt werden?', a: '§ 16 Abs. 2 ArbZG schreibt 2 Jahre Aufbewahrungspflicht vor. Steuerrechtlich können längere Fristen gelten (6 bzw. 10 Jahre).' },
    ],
    features: [
      { icon: '📝', title: 'Pflichtfelder', text: 'Beginn, Ende, Dauer und Pausen — alle vom BAG geforderten Daten.' },
      { icon: '🔒', title: 'DSGVO-konform', text: 'Ausschließlich lokale Speicherung. Keine Server, keine Tracking-Cookies.' },
      { icon: '📤', title: 'Export', text: 'Wochenbericht per Klick kopieren und in Firmensysteme einfügen.' },
      { icon: '⚖️', title: 'BAG-konform', text: 'Erfüllt die Anforderungen des BAG-Urteils vom 13.09.2022.' },
    ],
    ctaTitle: 'Zeiterfassung starten',
    ctaText: 'Start und Ende eingeben — lückenloser Wochenbericht entsteht automatisch.',
  },

  // ──────────────────────────────────────────
  // 14. FEIERTAGSZUSCHLAG RECHNER
  // Focus: Holiday premiums, § 3b EStG, state-specific holidays
  // ──────────────────────────────────────────
  {
    slug: 'feiertagszuschlag-rechner',
    name: 'Feiertagszuschlag Rechner',
    title: 'Feiertagszuschlag Rechner — Zuschläge für Feiertagsarbeit',
    description: 'Feiertagszuschläge berechnen: Steuerfreie Zuschläge bis 125 % (Weihnachten 150 %). Nach § 3b EStG und § 9 ArbZG.',
    subtitle: 'Berechne den Zuschlag für Feiertagsarbeit — mit Steuerfrei-Grenze und Ersatzruhetag.',
    sections: [
      { heading: 'Feiertagszuschlag: Berechnung und Beispiel', text: 'Ein Rettungssanitäter mit 21 €/h arbeitet am Tag der Deutschen Einheit 10 Stunden. Feiertagszuschlag: 125 %. Berechnung: 21 × 1,25 × 10 = 262,50 € Zuschlag. Grundlohn: 21 × 10 = 210 €. Gesamtverdienst: 472,50 € brutto. Der Zuschlag von 262,50 € bleibt vollständig steuerfrei (Grundlohn ≤ 50 €/h, Zuschlag ≤ 125 %).' },
      { heading: 'Erhöhte Zuschläge an Weihnachten und 1. Mai', text: 'Am 24. Dezember ab 14 Uhr, am 25. und 26. Dezember sowie am 1. Mai steigt die steuerfreie Zuschlagsgrenze von 125 % auf 150 %. Ein Pflegekraft mit 19 €/h und 8 Stunden am 25. Dezember: 19 × 1,50 × 8 = 228 € steuerfreier Zuschlag. Die Sozialversicherungsfreiheit gilt bis 25 €/h Grundlohn — darüber sind die Zuschläge SV-pflichtig.' },
      { heading: 'Ersatzruhetag und Beschäftigungsverbot', text: 'Arbeit an Sonn- und Feiertagen ist grundsätzlich verboten (§ 9 ArbZG). Ausnahmen bestehen für Krankenhäuser, Feuerwehr, Gastronomie, Verkehrsbetriebe und Presse. Für jeden gearbeiteten Feiertag muss innerhalb von 8 Wochen ein Ersatzruhetag gewährt werden (§ 11 Abs. 3 ArbZG). Wird der Ersatzruhetag nicht gewährt, drohen dem Arbeitgeber Bußgelder.' },
    ],
    faqItems: [
      { q: 'Wie viele bundesweite Feiertage gibt es?', a: '9: Neujahr, Karfreitag, Ostermontag, 1. Mai, Himmelfahrt, Pfingstmontag, 3. Oktober, 25. und 26. Dezember. Landesfeiertage kommen hinzu (z. B. Fronleichnam, Reformationstag).' },
      { q: 'Ist der 24. Dezember ein Feiertag?', a: 'Kein bundesweiter Feiertag, aber ab 14 Uhr gelten die erhöhten steuerfreien Zuschlagsgrenzen (150 % statt 125 %). Viele Tarifverträge sehen ab mittags dienstfrei vor.' },
      { q: 'Bekomme ich den Feiertagszuschlag automatisch?', a: 'Nein, ein gesetzlicher Anspruch auf einen prozentualen Feiertagszuschlag besteht nicht. Der Anspruch ergibt sich aus Tarifvertrag, Arbeitsvertrag oder betrieblicher Übung.' },
      { q: 'Was gilt, wenn ein Feiertag auf einen Sonntag fällt?', a: 'Es gelten die Feiertagszuschlagsgrenzen (125 % steuerfrei), nicht die Sonntagsgrenzen (50 %). Der höhere Feiertags-Freibetrag schließt den Sonntagszuschlag ein.' },
      { q: 'Wer entscheidet, welche Feiertage in meinem Bundesland gelten?', a: 'Die Landesregierungen legen die Feiertage fest. Bayern hat 13 (inkl. Mariä Himmelfahrt), Berlin 10. Fronleichnam gilt in Bayern, Baden-Württemberg, Hessen, NRW, Rheinland-Pfalz und Saarland.' },
      { q: 'Innerhalb welcher Frist muss der Ersatzruhetag gewährt werden?', a: '8 Wochen nach dem gearbeiteten Feiertag (§ 11 Abs. 3 ArbZG). Für Sonntagsarbeit sind es 2 Wochen.' },
    ],
    features: [
      { icon: '🎄', title: 'Feiertagszuschlag', text: 'Zuschlag pro Feiertag aus Grundlohn und Stundenzahl berechnen.' },
      { icon: '🎁', title: 'Weihnachts-Bonus', text: 'Erhöhte steuerfreie Grenze von 150 % an Weihnachten und 1. Mai.' },
      { icon: '💰', title: 'Steuerfrei-Grenze', text: '125 % Standardgrenze und 150 % Sondergrenze transparent anzeigen.' },
      { icon: '📅', title: 'Bundesland-Feiertage', text: 'Bundesweite und landesspezifische Feiertage berücksichtigen.' },
    ],
    ctaTitle: 'Feiertagszuschlag ermitteln',
    ctaText: 'Grundlohn und Feiertags-Stunden eingeben — Zuschlag und Steuerfreibetrag ablesen.',
  },

  // ──────────────────────────────────────────
  // 15. SONNTAGSZUSCHLAG RECHNER
  // Focus: Sunday premiums, § 3b EStG, Ersatzruhetag
  // ──────────────────────────────────────────
  {
    slug: 'sonntagszuschlag-rechner',
    name: 'Sonntagszuschlag Rechner',
    title: 'Sonntagszuschlag Rechner — Zuschläge für Sonntagsarbeit',
    description: 'Sonntagszuschläge berechnen: Steuerfreie Zuschläge bis 50 % des Grundlohns. Nach § 3b EStG. Kostenlos und sofort.',
    subtitle: 'Berechne den steuerfreien Sonntagszuschlag — 50 % Freigrenze nach § 3b EStG.',
    sections: [
      { heading: 'Sonntagszuschlag berechnen: konkretes Beispiel', text: 'Ein Kellner mit 14 €/h arbeitet am Sonntag 9 Stunden (10:00–19:00). Sonntagszuschlag: 50 %. Berechnung: 14 × 0,50 × 9 = 63 € Zuschlag. Grundlohn: 14 × 9 = 126 €. Gesamtverdienst: 189 € brutto. Der Zuschlag von 63 € bleibt steuer- und sozialversicherungsfrei (Grundlohn ≤ 25 €/h).' },
      { heading: 'Sonntagszuschlag und Nachtzuschlag gleichzeitig', text: 'Wer am Sonntag zwischen 23 und 6 Uhr arbeitet, erhält beide Zuschläge nebeneinander. Sonntagszuschlag: bis 50 % steuerfrei. Nachtzuschlag: bis 25 % steuerfrei (bis 40 % zwischen 0 und 4 Uhr). Zusammen bis 90 % steuerfrei. Beispiel: 20 €/h Grundlohn, Sonntag 2–6 Uhr: 20 × (0,50 + 0,40) × 4 = 72 € steuerfreier Zuschlag für 4 Stunden.' },
      { heading: 'Sonntagsarbeit: Verbot und Ausnahmen', text: 'Sonntagsarbeit ist nach § 9 ArbZG verboten. Ausnahmen gelten für 16 Branchen, darunter Gastronomie, Krankenhäuser, Pflegeheime, Feuerwehr, Polizei, Verkehrsbetriebe, Rundfunk und Presse. Für jeden gearbeiteten Sonntag ist ein Ersatzruhetag innerhalb von 2 Wochen zu gewähren. Mindestens 15 Sonntage im Jahr müssen beschäftigungsfrei sein.' },
    ],
    faqItems: [
      { q: 'Von wann bis wann gilt der Sonntagszuschlag?', a: 'Sonntag 0:00 Uhr bis Montag 4:00 Uhr. Die Verlängerung bis 4 Uhr Montag begünstigt Nachtschichten, die am Sonntagabend beginnen.' },
      { q: 'Bis zu welchem Grundlohn ist der Sonntagszuschlag SV-frei?', a: 'Bis 25 €/Stunde Grundlohn. Über 25 € fallen Sozialversicherungsbeiträge an. Die Steuerfreiheit gilt unabhängig davon bis 50 €/h.' },
      { q: 'Gibt es einen gesetzlichen Anspruch auf Sonntagszuschlag?', a: 'Nein. Es gibt nur den Anspruch auf einen Ersatzruhetag (§ 11 ArbZG). Zuschläge regeln Tarifverträge, Betriebsvereinbarungen oder Arbeitsverträge.' },
      { q: 'Innerhalb welcher Frist muss der Ersatzruhetag gewährt werden?', a: '2 Wochen nach dem gearbeiteten Sonntag (§ 11 Abs. 3 ArbZG). Bei Feiertagen beträgt die Frist 8 Wochen.' },
      { q: 'Gelten Sonntagszuschläge auch für Minijobber?', a: 'Ja. Steuerfreie Zuschläge werden nicht auf die 556-€-Grenze des Minijobs angerechnet. Der Minijobber kann also Grundlohn + steuerfreien Zuschlag erhalten.' },
      { q: 'Wie viele Sonntage im Jahr müssen arbeitsfrei sein?', a: 'Mindestens 15 Sonntage pro Jahr (§ 11 Abs. 1 ArbZG). Das entspricht ca. 38 gearbeiteten Sonntagen maximal.' },
    ],
    features: [
      { icon: '☀️', title: 'Sonntagszuschlag', text: 'Zuschlag aus Grundlohn, Prozentsatz und Sonntagsstunden berechnen.' },
      { icon: '🌙', title: 'Kombination Nacht+Sonntag', text: 'Beide Zuschläge addieren — bis 90 % steuerfreier Gesamtzuschlag.' },
      { icon: '💰', title: 'SV-Grenze 25 €/h', text: 'Sozialversicherungsfreiheit separat prüfen und ausweisen.' },
      { icon: '📅', title: 'Ersatzruhetag', text: 'Frist für den Ersatzruhetag anzeigen und einhalten.' },
    ],
    ctaTitle: 'Sonntagszuschlag ermitteln',
    ctaText: 'Grundlohn und Sonntagsstunden eingeben — steuerfreien Zuschlag berechnen.',
  },

  // ──────────────────────────────────────────
  // 16. FEIERABEND RECHNER
  // Focus: Predicting end-of-work time
  // ──────────────────────────────────────────
  {
    slug: 'feierabend-rechner',
    name: 'Feierabend Rechner',
    title: 'Feierabend Rechner — Wann kann ich heute gehen?',
    description: 'Feierabendzeit aus Arbeitsbeginn, Soll-Stunden und Pausen berechnen. Auch bei Überstundenabbau und Gleitzeit.',
    subtitle: 'Finde heraus, wann du heute Feierabend hast — mit Pausen und Soll-Stunden.',
    sections: [
      { heading: 'Feierabendzeit = Startzeit + Soll + Pausen', text: 'Der Feierabend Rechner addiert die Soll-Arbeitszeit und alle Pausen zum Arbeitsbeginn. Beginn 07:15 + 7,7 Stunden Soll (7 h 42 min bei 38,5-h-Woche) + 30 min Pause = Feierabend um 15:27. Wer die Soll-Zeit auf 8 Stunden anhebt (40-h-Woche), verschiebt den Feierabend auf 15:45.' },
      { heading: 'Früherer Feierabend durch Überstundenabbau', text: 'Überstundenabbau reduziert die effektive Soll-Zeit des Tages. 2 Stunden Abbau bei 8 Stunden Soll = 6 Stunden effektive Arbeitszeit. Beginn 08:30 + 6 Stunden + 30 min Pause = Feierabend 15:00 statt 17:00. Der Rechner zeigt die verkürzte Feierabendzeit, sobald die Soll-Arbeitszeit angepasst wird.' },
      { heading: 'Feierabend bei Gleitzeitrahmen', text: 'Bei Gleitzeit mit Kernarbeitszeit bis 15:00 Uhr ist der früheste Feierabend 15:00 — unabhängig vom Arbeitsbeginn. Wer um 06:00 Uhr anfängt und 7,5 Stunden Soll + 30 min Pause hat, könnte rechnerisch um 14:00 gehen, muss aber bis 15:00 bleiben. Plus-Stunden sammeln sich auf dem Gleitzeitkonto.' },
    ],
    faqItems: [
      { q: 'Wie berechne ich meinen Feierabend bei flexibler Startzeit?', a: 'Tatsächlichen Arbeitsbeginn + Soll-Stunden + geplante Pausen = Feierabend. Je früher der Start, desto früher der Feierabend — die Soll-Zeit bleibt gleich.' },
      { q: 'Verlängern mehrere kurze Pausen den Feierabend?', a: 'Ja. 3 Pausen à 10 Minuten verschieben den Feierabend um 30 Minuten statt um 15 (eine 15-min-Pause). Jede Minutenpause zählt.' },
      { q: 'Was gilt als Arbeitsbeginn — Bürotür oder Computerstart?', a: 'Arbeitszeit beginnt mit der Aufnahme der Arbeitstätigkeit. Umziehzeiten können dazuzählen (BAG, wenn Umkleiden im Betrieb vorgeschrieben ist).' },
      { q: 'Kann ich durch Pausenverzicht früher gehen?', a: 'Nein. Die Pausenpflicht (30 min ab 6 h Arbeit, 45 min ab 9 h) ist gesetzlich und darf nicht entfallen. Verzicht verletzt das ArbZG.' },
      { q: 'Wie beeinflusst ein Arzttermin den Feierabend?', a: 'Wenn der Arztbesuch als Arbeitszeit gilt (z. B. bei Schwangeren oder bei nicht anderweitig möglichem Termin), verschiebt sich der Feierabend nicht. Sonst wird die Abwesenheit als Pause oder Freistellung gewertet.' },
      { q: 'Zeigt der Rechner auch den frühestmöglichen Feierabend?', a: 'Ja. Durch Eingabe der minimalen Soll-Stunden (z. B. 6 h bei Gleittag) zeigt der Rechner den frühestmöglichen Zeitpunkt.' },
    ],
    features: [
      { icon: '🏠', title: 'Feierabend-Uhrzeit', text: 'Exakte Uhrzeit berechnen, zu der die Soll-Zeit erfüllt ist.' },
      { icon: '⏰', title: 'Flexible Startzeit', text: 'Feierabend bei jedem beliebigen Arbeitsbeginn ermitteln.' },
      { icon: '📉', title: 'Überstundenabbau', text: 'Vorgezogenen Feierabend bei reduzierter Soll-Zeit berechnen.' },
      { icon: '🔔', title: 'Pausenberücksichtigung', text: 'Alle Pausen werden automatisch zur Anwesenheitsdauer addiert.' },
    ],
    ctaTitle: 'Feierabend ermitteln',
    ctaText: 'Startzeit und Soll-Stunden eingeben — Feierabend-Uhrzeit sofort sehen.',
  },

  // ──────────────────────────────────────────
  // 17. WOCHENARBEITSZEIT RECHNER
  // Focus: Comparing actual weekly hours to tariff/contract
  // ──────────────────────────────────────────
  {
    slug: 'wochenarbeitszeit-rechner',
    name: 'Wochenarbeitszeit Rechner',
    title: 'Wochenarbeitszeit Rechner — Ist-Stunden mit Tarif vergleichen',
    description: 'Tatsächliche Wochenarbeitszeit erfassen und mit tariflicher Soll-Zeit vergleichen. Für TVöD, IG Metall, ver.di und mehr.',
    subtitle: 'Erfasse deine tatsächliche Wochenarbeitszeit und vergleiche mit dem Tarifvertrag.',
    sections: [
      { heading: 'Ist-Wochenarbeitszeit erfassen', text: 'Der Wochenarbeitszeit Rechner summiert die täglichen Nettoarbeitszeiten zu einer Wochensumme. Jeder Tageseintrag enthält Start, Ende und Pausen. Bei 5 Arbeitstagen mit 8:15, 7:55, 8:30, 8:10 und 7:20 ergibt sich eine Ist-Wochenarbeitszeit von 40 Stunden 10 Minuten (40,17 Dezimal).' },
      { heading: 'Vergleich mit tariflichen und vertraglichen Vorgaben', text: 'Die tarifliche Wochenarbeitszeit dient als Referenzwert. IG Metall West: 35 h → 40:10 Ist = +5:10 Überstunden. TVöD West: 39 h → 40:10 Ist = +1:10 Überstunden. Vertraglich 40 h → 40:10 Ist = +0:10 Überstunden. Derselbe Ist-Wert ergibt je nach Soll völlig unterschiedliche Überstundenkonten.' },
      { heading: 'Work-Life-Balance und Produktivitätsforschung', text: 'Studien der Universität Stanford zeigen: Ab 50 Wochenstunden sinkt die Stundenproduktivität um 25 %. Ab 55 Stunden wird kaum noch Mehrleistung erzielt. Die WHO stuft regelmäßige Wochenarbeitszeiten über 55 Stunden als Gesundheitsrisiko ein (erhöhtes Schlaganfall- und Herzinfarktrisiko). Der Rechner macht die tatsächliche Belastung sichtbar.' },
    ],
    faqItems: [
      { q: 'Wie ermittle ich meine tatsächliche Wochenarbeitszeit?', a: 'Jeden Tag mit Start, Ende und Pausen eintragen und speichern. Die Wochenübersicht addiert automatisch und zeigt die Gesamtsumme.' },
      { q: 'Welche tarifliche Wochenarbeitszeit gilt für mich?', a: 'Das hängt vom Tarifvertrag ab. Häufige Werte: IG Metall West 35 h, TVöD West 39 h, Chemie 37,5 h, Einzelhandel 37,5 h, Bau 40 h.' },
      { q: 'Wie hoch ist die durchschnittliche Wochenarbeitszeit in der EU?', a: 'EU-Durchschnitt: 36,2 Stunden (2024, Eurostat). Deutschland: 34,7 h (inkl. Teilzeit). Griechenland: 39,8 h. Niederlande: 31,6 h.' },
      { q: 'Ab wann ist eine Wochenarbeitszeit gesundheitsgefährdend?', a: 'Die WHO warnt ab 55 Stunden/Woche vor erhöhtem Schlaganfall- und Herzinfarktrisiko. Die Produktivitätsforschung sieht ab 50 h/Woche sinkende Effizienz.' },
      { q: 'Kann ich verschiedene Soll-Zeiten für verschiedene Wochen eingeben?', a: 'Die Soll-Zeit wird pro Berechnung festgelegt. Für Wochen mit anderem Soll einfach den Wert anpassen — der Vergleich aktualisiert sich sofort.' },
      { q: 'Zählt Samstagsarbeit zur Wochenarbeitszeit?', a: 'Ja. Das ArbZG betrachtet den Samstag als Werktag. Arbeit am Samstag zählt zur Gesamtwochenstundenzahl.' },
    ],
    features: [
      { icon: '📊', title: 'Soll-Ist-Vergleich', text: 'Ist-Wochenstunden mit tariflicher oder vertraglicher Vorgabe vergleichen.' },
      { icon: '📈', title: 'Balken-Chart', text: 'Tägliche Ist-Stunden als Balken neben dem Soll-Balken visualisieren.' },
      { icon: '⚖️', title: 'Tarif-Referenz', text: 'Tarifliche Wochenstundenzahlen der großen Branchentarife im Blick.' },
      { icon: '🩺', title: 'Belastungs-Check', text: 'Hinweis bei Wochenarbeitszeiten über 48 oder 55 Stunden.' },
    ],
    ctaTitle: 'Wochenarbeitszeit messen',
    ctaText: 'Tageseinträge speichern — Ist-Stunden mit Tarif vergleichen.',
  },

  // ──────────────────────────────────────────
  // 18. GLEITZEIT RECHNER
  // Focus: Flextime account, plus/minus balance, Gleittage
  // ──────────────────────────────────────────
  {
    slug: 'gleitzeit-rechner',
    name: 'Gleitzeit Rechner',
    title: 'Gleitzeit Rechner — Gleitzeitkonto-Saldo berechnen',
    description: 'Gleitzeitkonto-Saldo aus täglichen Plus- und Minusstunden berechnen. Gleittage planen und Kontogrenzen einhalten.',
    subtitle: 'Berechne deinen Gleitzeitkonto-Saldo — Plus, Minus und Gleittage im Blick.',
    sections: [
      { heading: 'Gleitzeitkonto: Täglicher Saldo aufbauen', text: 'Bei Gleitzeit entsteht aus jeder Tagesabweichung ein Saldo: Ist-Zeit minus Soll-Zeit. Mo +0:30, Di +0:15, Mi −0:20, Do +0:45, Fr −0:10 ergibt einen Wochensaldo von +1:00 Stunde. Dieser Saldo wird auf dem Gleitzeitkonto kumuliert. Der Gleitzeit Rechner zeigt den Verlauf und den aktuellen Stand pro Tag und Woche.' },
      { heading: 'Gleittage: Freistellung aus dem Plus-Konto', text: 'Ein Gleittag verbraucht so viele Plus-Stunden wie die tägliche Soll-Arbeitszeit. Bei 7,8 Stunden Soll (39 h/Woche) kostet ein Gleittag 7,8 Stunden. Bei einem Kontostand von +24 Stunden sind 3 volle Gleittage möglich (3 × 7,8 = 23,4). Gleittage müssen mit dem Vorgesetzten abgestimmt werden — sie sind keine einseitige Freistellung.' },
      { heading: 'Kontogrenzen und Ausgleichszeitraum', text: 'Betriebsvereinbarungen setzen typische Grenzen: +40 bis −20 Stunden. Überschreitung des Plus-Limits: Die überzähligen Stunden verfallen in vielen Betrieben oder werden als angeordnete Überstunden gewertet. Unterschreitung des Minus-Limits: Der Arbeitnehmer muss die Stunden nacharbeiten. Der Ausgleichszeitraum beträgt meist 3 oder 12 Monate.' },
    ],
    faqItems: [
      { q: 'Wie berechne ich meinen Gleitzeitkonto-Saldo?', a: 'Summe aller täglichen Abweichungen (Ist minus Soll) über den Abrechnungszeitraum. Der Rechner zeigt den kumulierten Saldo pro Tag.' },
      { q: 'Wie viele Gleittage kann ich pro Monat nehmen?', a: 'Das regelt die Betriebsvereinbarung. Üblich: 1–2 Gleittage pro Monat, sofern der Kontostand ausreicht und die Kernarbeitszeit nicht betroffen ist.' },
      { q: 'Verfallen Plus-Stunden am Ende des Ausgleichszeitraums?', a: 'Das hängt von der Betriebsvereinbarung ab. In vielen Betrieben verfallen Plus-Stunden über dem Kontolimit, wenn sie nicht rechtzeitig abgebaut wurden.' },
      { q: 'Kann ich mit Minus-Stunden in den Urlaub gehen?', a: 'Ja, Urlaubstage sind unabhängig vom Gleitzeitkonto. Aber der Minus-Saldo muss im Ausgleichszeitraum nachgearbeitet werden.' },
      { q: 'Was passiert mit dem Gleitzeitkonto bei Kündigung?', a: 'Plus-Stunden werden als Freizeitausgleich in der Kündigungsfrist abgebaut oder ausgezahlt. Minus-Stunden können mit dem Gehalt verrechnet werden, wenn vertraglich vereinbart.' },
      { q: 'Muss ich mich an die Kernarbeitszeit halten?', a: 'Ja, während der Kernarbeitszeit besteht Anwesenheitspflicht. Außerhalb der Kernzeit ist Anfang und Ende frei wählbar — innerhalb des Gleitzeitrahmens.' },
    ],
    features: [
      { icon: '📊', title: 'Saldo-Verlauf', text: 'Kumulierter Gleitzeitkonto-Saldo pro Tag und Woche als Chart.' },
      { icon: '📅', title: 'Gleittag-Planung', text: 'Verfügbare Gleittage aus dem aktuellen Plus-Saldo berechnen.' },
      { icon: '⚠️', title: 'Konto-Grenzen', text: 'Warnung bei Annäherung an das Plus- oder Minus-Limit.' },
      { icon: '🔄', title: 'Ausgleichszeitraum', text: 'Restzeit bis zum Ende des Ausgleichszeitraums anzeigen.' },
    ],
    ctaTitle: 'Gleitzeitkonto prüfen',
    ctaText: 'Tageseinträge speichern — Gleitzeitkonto-Saldo und Gleittage sofort sehen.',
  },

  // ──────────────────────────────────────────
  // 19. MONATSSTUNDEN RECHNER
  // Focus: Weekly → monthly hour conversion, factor 4.333
  // ──────────────────────────────────────────
  {
    slug: 'monatsstunden-rechner',
    name: 'Monatsstunden Rechner',
    title: 'Monatsstunden Rechner — Von Wochenstunden zu Monatsstunden',
    description: 'Monatliche Arbeitsstunden aus Wochenstunden berechnen. Korrekter Faktor 4,333 für Vollzeit, Teilzeit und Minijob.',
    subtitle: 'Rechne Wochenstunden in Monatsstunden um — mit dem exakten Faktor 4,333.',
    sections: [
      { heading: 'Warum 4,333 und nicht 4 Wochen pro Monat?', text: 'Ein Jahr hat 52 Wochen, verteilt auf 12 Monate: 52 ÷ 12 = 4,333. Wer mit dem Faktor 4 rechnet, unterschätzt die Monatsstunden um 8,3 %. Bei 40 Wochenstunden: 40 × 4 = 160 Stunden (falsch). 40 × 4,333 = 173,33 Stunden (korrekt). Auf ein Jahr gerechnet fehlen bei Faktor 4 genau 160 Stunden — fast ein ganzer Monat.' },
      { heading: 'Monatsstunden für jedes Arbeitszeitmodell', text: 'Vollzeit 40 h: 173,33 h/Monat. TVöD West 39 h: 169,00 h. IG Metall West 35 h: 151,67 h. Teilzeit 30 h: 130,00 h. Teilzeit 25 h: 108,33 h. Teilzeit 20 h: 86,67 h. Minijob 10 h: 43,33 h. Jede Wochenstundenzahl ergibt einen präzisen Monatswert — die Berechnungsgrundlage für Gehalt und Stundenlohn.' },
      { heading: 'Vom Monatsstunden-Wert zum Gehalt und zurück', text: 'Monatsstunden × Stundenlohn = Monatsgehalt: 173,33 × 18,50 € = 3.206,61 € brutto. Monatsgehalt ÷ Monatsstunden = Stundenlohn: 3.200 € ÷ 169,00 = 18,93 €. Für Minijobs: Minijob-Grenze ÷ Mindestlohn = max. Monatsstunden: 556 € ÷ 12,82 € = 43,37 Stunden.' },
    ],
    faqItems: [
      { q: 'Warum stimmen 4 Wochen × Stunden nicht mit dem Monatsgehalt überein?', a: 'Weil ein Monat durchschnittlich 4,333 Wochen hat (52 ÷ 12). 4 Wochen × 40 h = 160 h ist 13,33 Stunden weniger als die korrekten 173,33 h.' },
      { q: 'Wie berechne ich Monatsstunden bei ungleichmäßigen Wochentagen?', a: 'Durchschnittliche Tagesstunden × Arbeitstage/Woche × 4,333. Bei Mo–Do 8 h und Fr 6 h: (4 × 8 + 6) ÷ 5 × 5 × 4,333 = 164,67 h/Monat.' },
      { q: 'Gibt es Monate mit mehr oder weniger als 173 Stunden?', a: 'Ja. Februar hat nur 20 Arbeitstage (160 h bei 8 h/Tag), März oft 23 (184 h). Der Faktor 4,333 glättet diese Schwankungen über das Jahr.' },
      { q: 'Wie berechne ich den maximalen Minijob-Stundenumfang?', a: '556 € ÷ Stundenlohn = maximale Monatsstunden. Bei 13 €/h: 556 ÷ 13 = 42,77 Stunden. Bei 14 €/h: 39,71 Stunden.' },
      { q: 'Zählen Feiertage und Urlaub zu den Monatsstunden?', a: 'Die Durchschnittsberechnung (Wochenstunden × 4,333) ist die Soll-Monatsarbeitszeit ohne Abzüge. Urlaub und Feiertage reduzieren die Ist-Stunden, nicht den Soll-Wert.' },
      { q: 'Welchen Faktor verwenden Lohnbuchhaltungen?', a: 'Die meisten Lohnbuchhaltungen verwenden 4,348 (365 ÷ 7 ÷ 12) oder 4,333 (52 ÷ 12). Die Abweichung beträgt weniger als 0,4 %.' },
    ],
    features: [
      { icon: '🔢', title: 'Exakter Faktor', text: 'Berechnung mit 4,333 (52 ÷ 12) statt dem ungenauem Faktor 4.' },
      { icon: '📊', title: 'Modell-Vergleich', text: 'Monatsstunden für Vollzeit, Teilzeit und Minijob nebeneinander.' },
      { icon: '💶', title: 'Gehalt-Umrechnung', text: 'Monatsstunden × Stundenlohn = Monatsgehalt und umgekehrt.' },
      { icon: '📋', title: 'Minijob-Grenze', text: 'Maximale Monatsstunden bei gegebener Minijob-Verdienstgrenze.' },
    ],
    ctaTitle: 'Monatsstunden berechnen',
    ctaText: 'Wochenstunden eingeben — exakte Monatsstunden sofort ablesen.',
  },

  // ──────────────────────────────────────────
  // 20. RESTURLAUB RECHNER
  // Focus: Remaining vacation, carryover, payout on termination
  // ──────────────────────────────────────────
  {
    slug: 'resturlaub-rechner',
    name: 'Resturlaub Rechner',
    title: 'Resturlaub Rechner — Verbleibende Urlaubstage berechnen',
    description: 'Resturlaub berechnen: Verbleibende Urlaubstage, Übertragungsfristen und Urlaubsabgeltung bei Kündigung.',
    subtitle: 'Berechne, wie viele Urlaubstage dir noch zustehen — mit Verfallswarnung.',
    sections: [
      { heading: 'Resturlaub = Jahresurlaub – genommene Tage', text: 'Der Resturlaub Rechner subtrahiert alle genommenen und genehmigten Urlaubstage vom Jahresanspruch. Bei 30 Tagen Jahresurlaub und 19 genommenen Tagen bleiben 11 Resturlaubstage. Wurde anteiliger Urlaub bei unterjährigem Eintritt berechnet (z. B. 22,5 Tage bei Eintritt im April), bezieht sich der Resturlaub auf diesen reduzierten Anspruch.' },
      { heading: 'Übertragung und Verfall: Fristen beachten', text: 'Resturlaub muss grundsätzlich im laufenden Kalenderjahr genommen werden. Ausnahme: Bei dringenden betrieblichen oder persönlichen Gründen ist die Übertragung bis 31. März des Folgejahres zulässig (§ 7 Abs. 3 BUrlG). Wichtig: Der Arbeitgeber muss den Arbeitnehmer konkret auffordern, den Resturlaub zu nehmen, und auf den drohenden Verfall hinweisen (EuGH, Urt. v. 06.11.2018, C-684/16). Ohne diesen Hinweis verfällt der Urlaub nicht.' },
      { heading: 'Urlaubsabgeltung bei Beendigung des Arbeitsverhältnisses', text: 'Bei Kündigung, Aufhebungsvertrag oder Befristungsende wird nicht genommener Urlaub als Urlaubsabgeltung ausgezahlt (§ 7 Abs. 4 BUrlG). Die Berechnung: Resturlaubstage × durchschnittliches Tagesentgelt. 8 Resturlaubstage × 185 € Tagesentgelt = 1.480 € Abgeltung brutto. Die Abgeltung ist steuer- und sozialversicherungspflichtig.' },
    ],
    faqItems: [
      { q: 'Bis wann muss ich meinen Resturlaub nehmen?', a: 'Bis 31. Dezember des laufenden Jahres. Übertragung bis 31. März des Folgejahres nur bei dringenden Gründen.' },
      { q: 'Was passiert, wenn mein Arbeitgeber mich nicht auf den Verfall hinweist?', a: 'Der Urlaub verfällt nicht. Der EuGH hat entschieden, dass der Arbeitgeber eine Hinweis- und Aufforderungspflicht hat. Ohne Hinweis bleiben die Ansprüche bestehen.' },
      { q: 'Wie wird die Urlaubsabgeltung berechnet?', a: 'Resturlaubstage × durchschnittliches Tagesentgelt (Bruttogehalt der letzten 13 Wochen ÷ 65 Arbeitstage).' },
      { q: 'Verfällt Resturlaub bei Langzeiterkrankung?', a: 'Nach BAG-Urteil: 15 Monate nach Ende des Urlaubsjahres. Wer 2024 krank war und 2025 weiter arbeitsunfähig bleibt, verliert den 2024er-Resturlaub am 31. März 2026.' },
      { q: 'Kann der Arbeitgeber mich zwingen, Resturlaub zu nehmen?', a: 'Ja, insbesondere bei drohendem Verfall. Der Arbeitgeber muss aber zunächst auffordern und auf den Verfall hinweisen. Danach kann er Urlaubstermine festlegen.' },
      { q: 'Wird Resturlaub bei einem Jobwechsel übertragen?', a: 'Nein. Der alte Arbeitgeber zahlt den Resturlaub als Abgeltung aus. Der neue Arbeitgeber gewährt einen neuen (ggf. anteiligen) Anspruch.' },
    ],
    features: [
      { icon: '📅', title: 'Restanspruch', text: 'Verbleibende Urlaubstage aus Jahresanspruch und genommenen Tagen.' },
      { icon: '⚠️', title: 'Verfall-Warnung', text: 'Hinweis auf drohenden Verfall mit Stichtag 31.12. oder 31.03.' },
      { icon: '💶', title: 'Abgeltungs-Rechner', text: 'Auszahlungsbetrag bei Kündigung aus Resttagen und Tagesentgelt.' },
      { icon: '📊', title: 'Krankheits-Sonderfall', text: 'Verlängerte Übertragungsfristen bei Langzeiterkrankung berücksichtigen.' },
    ],
    ctaTitle: 'Resturlaub prüfen',
    ctaText: 'Jahresurlaub und genommene Tage eingeben — Restanspruch und Verfallsdatum sehen.',
  },

  // ──────────────────────────────────────────
  // 21. ARBEITSZEITERFASSUNG RECHNER
  // Focus: Legal obligation, ArbSchG, employer duties
  // ──────────────────────────────────────────
  {
    slug: 'arbeitszeiterfassung-rechner',
    name: 'Arbeitszeiterfassung Rechner',
    title: 'Arbeitszeiterfassung Rechner — Gesetzeskonforme Zeitdokumentation',
    description: 'Arbeitszeiten gesetzeskonform erfassen und dokumentieren. BAG-Urteil 2022, ArbSchG und ArbZG im Überblick.',
    subtitle: 'Dokumentiere deine Arbeitszeiten lückenlos — so wie es das Gesetz verlangt.',
    sections: [
      { heading: 'Was das Gesetz zur Arbeitszeiterfassung verlangt', text: 'Nach dem BAG-Beschluss vom 13.09.2022 (1 ABR 22/21) ergibt sich aus § 3 Abs. 2 Nr. 1 ArbSchG die Pflicht, ein System zur Erfassung der täglichen Arbeitszeit einzuführen. Dokumentiert werden müssen: tatsächlicher Beginn der Arbeit, tatsächliches Ende der Arbeit und die Gesamtdauer der täglichen Arbeitszeit inklusive Pausenzeiten. Der Arbeitszeiterfassung Rechner bildet alle Pflichtfelder in einem einfachen Formular ab.' },
      { heading: 'Unterschied zwischen ArbZG-Aufzeichnung und BAG-Erfassungspflicht', text: 'Das ArbZG (§ 16 Abs. 2) verlangt nur die Aufzeichnung von Arbeitszeiten über 8 Stunden pro Tag. Das BAG-Urteil geht weiter: Es fordert die Erfassung jeder Arbeitszeit — auch unterhalb der 8-Stunden-Schwelle. Die Aufbewahrungspflicht nach ArbZG beträgt 2 Jahre. Steuerrechtliche Aufbewahrungsfristen (6 bzw. 10 Jahre) können zusätzlich gelten.' },
      { heading: 'Bußgelder und Konsequenzen bei Verstößen', text: 'Verstöße gegen die Aufzeichnungspflicht nach § 16 ArbZG können mit Bußgeldern bis 30.000 € pro Verstoß geahndet werden (§ 22 Abs. 1 Nr. 9 ArbZG). Die zuständige Aufsichtsbehörde (Gewerbeaufsicht oder Amt für Arbeitsschutz) kann die Einführung eines Erfassungssystems anordnen. Bei Nichtbefolgung drohen weitere Bußgelder und im Extremfall strafrechtliche Konsequenzen bei Vorsatz.' },
    ],
    faqItems: [
      { q: 'Welches Gesetz verpflichtet zur Arbeitszeiterfassung?', a: '§ 3 Abs. 2 Nr. 1 ArbSchG in Verbindung mit Art. 31 GRCh und der Auslegung durch das BAG (Beschluss vom 13.09.2022, 1 ABR 22/21).' },
      { q: 'Gilt die Erfassungspflicht auch für Kleinbetriebe?', a: 'Ja. Die Pflicht gilt branchenunabhängig für alle Arbeitgeber, unabhängig von der Betriebsgröße. Es gibt keine Ausnahme für Kleinbetriebe.' },
      { q: 'In welcher Form muss die Erfassung erfolgen?', a: 'Das Gesetz schreibt keine bestimmte Form vor. Elektronisch, per App, im Tabellenformat oder handschriftlich — jede nachvollziehbare Methode ist zulässig.' },
      { q: 'Wie hoch sind die Bußgelder bei fehlender Zeiterfassung?', a: 'Bis 30.000 € pro Verstoß nach § 22 ArbZG. In der Praxis verhängen Aufsichtsbehörden zunächst Anordnungen, dann Bußgelder bei Nichtbefolgung.' },
      { q: 'Muss die Zeiterfassung täglich oder reicht wöchentlich?', a: 'Das BAG-Urteil fordert die Erfassung der täglichen Arbeitszeit. Eine nachträgliche wöchentliche Zusammenfassung reicht nicht aus.' },
      { q: 'Können Vertrauensarbeitszeit-Modelle weiterhin gelten?', a: 'Vertrauensarbeitszeit bleibt möglich, aber die Erfassung der Arbeitszeit muss trotzdem erfolgen. „Vertrauen" bezieht sich auf die flexible Zeiteinteilung, nicht auf den Verzicht auf Dokumentation.' },
    ],
    features: [
      { icon: '⚖️', title: 'Gesetzeskonform', text: 'Alle vom BAG und ArbSchG geforderten Pflichtfelder in einem Formular.' },
      { icon: '📋', title: 'Tägliche Dokumentation', text: 'Beginn, Ende, Dauer und Pausen pro Tag lückenlos erfassen.' },
      { icon: '🔒', title: 'Datenschutz', text: 'Lokale Speicherung ohne Server — vollständig DSGVO-konform.' },
      { icon: '💰', title: 'Bußgeld-Vermeidung', text: 'Systematische Erfassung schützt vor Bußgeldern bis 30.000 €.' },
    ],
    ctaTitle: 'Zeiterfassung starten',
    ctaText: 'Arbeitszeiten gesetzeskonform dokumentieren — kostenlos und ohne Installation.',
  },
];

export function getToolBySlug(slug: string): ToolDef | undefined {
  return tools.find(t => t.slug === slug);
}

export function getAllSlugs(): string[] {
  return tools.map(t => t.slug);
}
