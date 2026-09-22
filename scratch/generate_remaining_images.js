import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const outputDir = path.resolve('public/images/blog');

const images = [
  {
    name: 'beweismittel-hierarchie-gericht.jpg',
    svg: `
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg7" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0f172a" />
            <stop offset="100%" stop-color="#1e293b" />
          </linearGradient>
          <linearGradient id="cardGrad7" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#2563eb" stop-opacity="0.25" />
            <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.1" />
          </linearGradient>
          <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#fbbf24" />
            <stop offset="100%" stop-color="#f59e0b" />
          </linearGradient>
        </defs>
        <rect width="1920" height="1080" fill="url(#bg7)" />
        
        <!-- Header badge -->
        <rect x="160" y="90" width="340" height="44" rx="22" fill="#1e3a8a" />
        <text x="330" y="119" fill="#93c5fd" font-family="system-ui, sans-serif" font-size="20" font-weight="700" text-anchor="middle" letter-spacing="1">BEWEISFÜHRUNG ARBEITSRECHT</text>
        
        <text x="160" y="190" fill="#ffffff" font-family="system-ui, sans-serif" font-size="56" font-weight="800">Hierarchie der Beweismittel vor dem Arbeitsgericht</text>
        <text x="160" y="240" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="26">Welche Nachweise im Streitfall über Überstunden die stärkste Beweiskraft entfalten</text>

        <!-- Tier 1 -->
        <g transform="translate(160, 290)">
          <rect width="1600" height="135" rx="16" fill="url(#cardGrad7)" stroke="#3b82f6" stroke-width="2" />
          <rect x="24" y="24" width="88" height="88" rx="12" fill="#2563eb" />
          <text x="68" y="76" fill="#ffffff" font-family="system-ui, sans-serif" font-size="32" font-weight="800" text-anchor="middle">1</text>
          <text x="140" y="65" fill="#60a5fa" font-family="system-ui, sans-serif" font-size="28" font-weight="700">Elektronische Zeiterfassung &amp; Systemlogs</text>
          <text x="140" y="100" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="22">Objektive, manipulationssichere Stechuhren, Terminal-Badges &amp; Server-Login-Protokolle</text>
          <rect x="1380" y="44" width="180" height="48" rx="24" fill="#1e3a8a" />
          <text x="1470" y="76" fill="#93c5fd" font-family="system-ui, sans-serif" font-size="20" font-weight="700" text-anchor="middle">Höchste Beweiskraft</text>
        </g>

        <!-- Tier 2 -->
        <g transform="translate(160, 450)">
          <rect width="1600" height="135" rx="16" fill="#1e293b" stroke="#334155" stroke-width="2" />
          <rect x="24" y="24" width="88" height="88" rx="12" fill="#0284c7" />
          <text x="68" y="76" fill="#ffffff" font-family="system-ui, sans-serif" font-size="32" font-weight="800" text-anchor="middle">2</text>
          <text x="140" y="65" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="28" font-weight="700">Digitale Zeitstempel &amp; Aktivitätsnachweise</text>
          <text x="140" y="100" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="22">Versendete E-Mails am Tagesrand, Kalendereinladungen, Ticket-Bearbeitungen &amp; CRM-Logs</text>
          <rect x="1380" y="44" width="180" height="48" rx="24" fill="#0c4a6e" />
          <text x="1470" y="76" fill="#7dd3fc" font-family="system-ui, sans-serif" font-size="20" font-weight="700" text-anchor="middle">Sehr Hohe Relevanz</text>
        </g>

        <!-- Tier 3 -->
        <g transform="translate(160, 610)">
          <rect width="1600" height="135" rx="16" fill="#1e293b" stroke="#334155" stroke-width="2" />
          <rect x="24" y="24" width="88" height="88" rx="12" fill="#475569" />
          <text x="68" y="76" fill="#ffffff" font-family="system-ui, sans-serif" font-size="32" font-weight="800" text-anchor="middle">3</text>
          <text x="140" y="65" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="28" font-weight="700">Dienstpläne &amp; Zeugenaussagen von Kollegen</text>
          <text x="140" y="100" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="22">Offizielle Schichtpläne, Zuweisungen durch Vorgesetzte und Bestätigung anwesender Teammitglieder</text>
          <rect x="1380" y="44" width="180" height="48" rx="24" fill="#334155" />
          <text x="1470" y="76" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="20" font-weight="700" text-anchor="middle">Stützende Beweise</text>
        </g>

        <!-- Tier 4 -->
        <g transform="translate(160, 770)">
          <rect width="1600" height="135" rx="16" fill="#1e293b" stroke="#334155" stroke-width="2" />
          <rect x="24" y="24" width="88" height="88" rx="12" fill="#334155" />
          <text x="68" y="76" fill="#ffffff" font-family="system-ui, sans-serif" font-size="32" font-weight="800" text-anchor="middle">4</text>
          <text x="140" y="65" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="28" font-weight="700">Eigene Notizen &amp; handschriftliche Stundenzettel</text>
          <text x="140" y="100" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="22">Lückenlos und zeitnah geführte Eigenaufzeichnungen als Grundlage zur schlüssigen Darlegung</text>
          <rect x="1380" y="44" width="180" height="48" rx="24" fill="#334155" />
          <text x="1470" y="76" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="20" font-weight="700" text-anchor="middle">Darlegungsgrundlage</text>
        </g>

        <!-- Footer Note -->
        <text x="960" y="970" fill="#64748b" font-family="system-ui, sans-serif" font-size="20" text-anchor="middle">Arbeitszeit Rechner Pro — Ratgeber Arbeitsrecht &amp; Zeiterfassungspflicht</text>
      </svg>
    `
  },
  {
    name: 'nachtschicht-zuschlaege-ruhezeit.jpg',
    svg: `
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg8" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#090d16" />
            <stop offset="100%" stop-color="#1e1b4b" />
          </linearGradient>
        </defs>
        <rect width="1920" height="1080" fill="url(#bg8)" />
        
        <rect x="160" y="90" width="310" height="44" rx="22" fill="#312e81" />
        <text x="315" y="119" fill="#c7d2fe" font-family="system-ui, sans-serif" font-size="20" font-weight="700" text-anchor="middle">SCHICHTARBEIT &amp; GESETZ</text>

        <text x="160" y="190" fill="#ffffff" font-family="system-ui, sans-serif" font-size="56" font-weight="800">Nachtschicht, Zuschläge &amp; Ruhezeiten</text>
        <text x="160" y="240" fill="#a5b4fc" font-family="system-ui, sans-serif" font-size="26">Gesetzliche Nachtarbeitsfenster, Vergütungszuschläge und 11h-Ruhezeit im Überblick</text>

        <!-- 3 Pillars Grid -->
        <g transform="translate(160, 300)">
          <!-- Card 1 -->
          <rect width="500" height="580" rx="20" fill="#1e1b4b" stroke="#4338ca" stroke-width="2" />
          <circle cx="90" cy="90" r="40" fill="#3730a3" />
          <text x="90" y="100" fill="#a5b4fc" font-family="system-ui, sans-serif" font-size="34" font-weight="800" text-anchor="middle">⏱️</text>
          <text x="50" y="180" fill="#ffffff" font-family="system-ui, sans-serif" font-size="30" font-weight="700">1. Nachtzeitfenster</text>
          <text x="50" y="225" fill="#818cf8" font-family="system-ui, sans-serif" font-size="22" font-weight="600">§ 2 Abs. 3 ArbZG</text>
          <text x="50" y="275" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="20" line-height="1.6">
            <tspan x="50" dy="0">• Gesetzliche Nachtzeit: 23:00 – 06:00</tspan>
            <tspan x="50" dy="40">• Bäckereien: 22:00 – 05:00</tspan>
            <tspan x="50" dy="40">• Nachtarbeit gilt ab mehr als 2 Std.</tspan>
            <tspan x="50" dy="40">  Arbeit im Nachtzeitfenster</tspan>
            <tspan x="50" dy="40">• Höchstarbeitszeit i.d.R. 8 Stunden</tspan>
          </text>
        </g>

        <g transform="translate(710, 300)">
          <!-- Card 2 -->
          <rect width="500" height="580" rx="20" fill="#1e1b4b" stroke="#4338ca" stroke-width="2" />
          <circle cx="90" cy="90" r="40" fill="#3730a3" />
          <text x="90" y="100" fill="#fbbf24" font-family="system-ui, sans-serif" font-size="34" font-weight="800" text-anchor="middle">💰</text>
          <text x="50" y="180" fill="#ffffff" font-family="system-ui, sans-serif" font-size="30" font-weight="700">2. Nachtzuschlag</text>
          <text x="50" y="225" fill="#fbbf24" font-family="system-ui, sans-serif" font-size="22" font-weight="600">§ 6 Abs. 5 ArbZG</text>
          <text x="50" y="275" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="20">
            <tspan x="50" dy="0">• Angemessener Zuschlag (oft 25%)</tspan>
            <tspan x="50" dy="40">• Dauernachtarbeit häufig 30%</tspan>
            <tspan x="50" dy="40">• Alternativ: bezahlte Freistellungstage</tspan>
            <tspan x="50" dy="40">• Steuer- &amp; beitragsfrei bis zu</tspan>
            <tspan x="50" dy="40">  bestimmten Stundensätzen (§ 3b EStG)</tspan>
          </text>
        </g>

        <g transform="translate(1260, 300)">
          <!-- Card 3 -->
          <rect width="500" height="580" rx="20" fill="#1e1b4b" stroke="#4338ca" stroke-width="2" />
          <circle cx="90" cy="90" r="40" fill="#3730a3" />
          <text x="90" y="100" fill="#34d399" font-family="system-ui, sans-serif" font-size="34" font-weight="800" text-anchor="middle">🌙</text>
          <text x="50" y="180" fill="#ffffff" font-family="system-ui, sans-serif" font-size="30" font-weight="700">3. 11h-Ruhezeit</text>
          <text x="50" y="225" fill="#34d399" font-family="system-ui, sans-serif" font-size="22" font-weight="600">§ 5 Abs. 1 ArbZG</text>
          <text x="50" y="275" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="20">
            <tspan x="50" dy="0">• Mindestens 11 Std. ununterbrochen</tspan>
            <tspan x="50" dy="40">• Schichtende 06:00 → nächste Schicht</tspan>
            <tspan x="50" dy="40">  frühestens ab 17:00 Uhr</tspan>
            <tspan x="50" dy="40">• Gesetzlicher Gesundheitsschutz</tspan>
            <tspan x="50" dy="40">• Ausnahmen nur mit Ausgleichszeit</tspan>
          </text>
        </g>

        <text x="960" y="970" fill="#64748b" font-family="system-ui, sans-serif" font-size="20" text-anchor="middle">Arbeitszeit Rechner Pro — Gesetzliche Richtlinien für Schichtarbeiter</text>
      </svg>
    `
  },
  {
    name: 'ruhezeit-11-stunden-diagramm.jpg',
    svg: `
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg8b" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0f172a" />
            <stop offset="100%" stop-color="#1e293b" />
          </linearGradient>
        </defs>
        <rect width="1920" height="1080" fill="url(#bg8b)" />

        <text x="160" y="160" fill="#ffffff" font-family="system-ui, sans-serif" font-size="52" font-weight="800">Gesetzliche 11-Stunden-Ruhezeit nach Nachtschicht</text>
        <text x="160" y="215" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="26">Schichtfolge-Diagramm: Wann darf die Folgeschicht nach § 5 ArbZG frühestens beginnen?</text>

        <!-- Timeline Graphic -->
        <g transform="translate(160, 320)">
          <!-- Segment 1: Nachtschicht -->
          <rect x="0" y="80" width="450" height="140" rx="16" fill="#1e3a8a" stroke="#3b82f6" stroke-width="3" />
          <text x="225" y="145" fill="#ffffff" font-family="system-ui, sans-serif" font-size="28" font-weight="700" text-anchor="middle">Nachtschicht (8 Std.)</text>
          <text x="225" y="185" fill="#93c5fd" font-family="system-ui, sans-serif" font-size="22" text-anchor="middle">22:00 Uhr – 06:00 Uhr</text>

          <!-- Marker 06:00 -->
          <circle cx="450" cy="150" r="16" fill="#ef4444" stroke="#ffffff" stroke-width="3" />
          <text x="450" y="60" fill="#f87171" font-family="system-ui, sans-serif" font-size="24" font-weight="700" text-anchor="middle">06:00 Uhr</text>
          <text x="450" y="270" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="20" text-anchor="middle">Schichtende</text>

          <!-- Segment 2: 11h Ruhezeit -->
          <rect x="490" y="80" width="620" height="140" rx="16" fill="#065f46" stroke="#10b981" stroke-width="3" />
          <text x="800" y="145" fill="#ffffff" font-family="system-ui, sans-serif" font-size="30" font-weight="800" text-anchor="middle">Gesetzliche Ruhezeit: 11 Stunden</text>
          <text x="800" y="185" fill="#6ee7b7" font-family="system-ui, sans-serif" font-size="22" text-anchor="middle">Keine Arbeitsleistung / Ununterbrochene Erholung</text>

          <!-- Marker 17:00 -->
          <circle cx="1110" cy="150" r="16" fill="#10b981" stroke="#ffffff" stroke-width="3" />
          <text x="1110" y="60" fill="#34d399" font-family="system-ui, sans-serif" font-size="24" font-weight="700" text-anchor="middle">17:00 Uhr</text>
          <text x="1110" y="270" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="20" text-anchor="middle">Ruhezeit-Ende</text>

          <!-- Segment 3: Folgeschicht -->
          <rect x="1150" y="80" width="450" height="140" rx="16" fill="#1e293b" stroke="#64748b" stroke-width="3" />
          <text x="1375" y="145" fill="#ffffff" font-family="system-ui, sans-serif" font-size="28" font-weight="700" text-anchor="middle">Früheste Folgeschicht</text>
          <text x="1375" y="185" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="22" text-anchor="middle">Ab 17:00 Uhr zulässig</text>
        </g>

        <!-- Informational Callout Box -->
        <g transform="translate(160, 680)">
          <rect width="1600" height="180" rx="16" fill="#1e293b" stroke="#334155" stroke-width="2" />
          <text x="50" y="60" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="26" font-weight="700">Wichtiger rechtlicher Grundsatz:</text>
          <text x="50" y="105" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="22">Die 11-stündige Ruhezeit (§ 5 ArbZG) darf weder durch Überstunden noch durch kurze Schichtwechsel unterbrochen werden.</text>
          <text x="50" y="145" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="20">Wird die Ruhezeit vorzeitig unterbrochen, beginnt die 11-Stunden-Frist rechtlich nach Beendigung des Einsatzes komplett von vorn.</text>
        </g>

        <text x="960" y="970" fill="#64748b" font-family="system-ui, sans-serif" font-size="20" text-anchor="middle">Arbeitszeit Rechner Pro — § 5 ArbZG Ruhezeitberechnung</text>
      </svg>
    `
  },
  {
    name: 'arbeitgeber-ohne-zeiterfassung-schritte.jpg',
    svg: `
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg9" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0f172a" />
            <stop offset="100%" stop-color="#1e293b" />
          </linearGradient>
        </defs>
        <rect width="1920" height="1080" fill="url(#bg9)" />
        
        <rect x="160" y="90" width="310" height="44" rx="22" fill="#0369a1" />
        <text x="315" y="119" fill="#bae6fd" font-family="system-ui, sans-serif" font-size="20" font-weight="700" text-anchor="middle">HANDLUNGSLEITFADEN</text>

        <text x="160" y="190" fill="#ffffff" font-family="system-ui, sans-serif" font-size="56" font-weight="800">Arbeitgeber erfasst keine Arbeitszeit? 4 Schritte</text>
        <text x="160" y="240" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="26">So schützen Arbeitnehmer ihre Rechte und sichern Überstundenansprüche rechtssicher ab</text>

        <!-- 4 Step Cards -->
        <g transform="translate(160, 310)">
          <!-- Step 1 -->
          <g transform="translate(0, 0)">
            <rect width="370" height="540" rx="16" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
            <circle cx="60" cy="60" r="28" fill="#0284c7" />
            <text x="60" y="70" fill="#ffffff" font-family="system-ui, sans-serif" font-size="24" font-weight="800" text-anchor="middle">1</text>
            <text x="40" y="140" fill="#ffffff" font-family="system-ui, sans-serif" font-size="26" font-weight="700">Vertrag prüfen</text>
            <text x="40" y="190" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="20">
              <tspan x="40" dy="0">Arbeitsvertrag und</tspan>
              <tspan x="40" dy="32">Dienstplan auf</tspan>
              <tspan x="40" dy="32">bestehende Regelungen</tspan>
              <tspan x="40" dy="32">und Fristen prüfen.</tspan>
            </text>
          </g>

          <!-- Step 2 -->
          <g transform="translate(410, 0)">
            <rect width="370" height="540" rx="16" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
            <circle cx="60" cy="60" r="28" fill="#0284c7" />
            <text x="60" y="70" fill="#ffffff" font-family="system-ui, sans-serif" font-size="24" font-weight="800" text-anchor="middle">2</text>
            <text x="40" y="140" fill="#ffffff" font-family="system-ui, sans-serif" font-size="26" font-weight="700">Selbst erfassen</text>
            <text x="40" y="190" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="20">
              <tspan x="40" dy="0">Start, Ende, Pausen</tspan>
              <tspan x="40" dy="32">und Überstunden</tspan>
              <tspan x="40" dy="32">täglich lückenlos mit</tspan>
              <tspan x="40" dy="32">Zeiterfasser notieren.</tspan>
            </text>
          </g>

          <!-- Step 3 -->
          <g transform="translate(820, 0)">
            <rect width="370" height="540" rx="16" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
            <circle cx="60" cy="60" r="28" fill="#0284c7" />
            <text x="60" y="70" fill="#ffffff" font-family="system-ui, sans-serif" font-size="24" font-weight="800" text-anchor="middle">3</text>
            <text x="40" y="140" fill="#ffffff" font-family="system-ui, sans-serif" font-size="26" font-weight="700">Gespräch suchen</text>
            <text x="40" y="190" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="20">
              <tspan x="40" dy="0">Sachlich mit HR oder</tspan>
              <tspan x="40" dy="32">Vorgesetztem über</tspan>
              <tspan x="40" dy="32">BAG-Urteil und Zeiter-</tspan>
              <tspan x="40" dy="32">fassung sprechen.</tspan>
            </text>
          </g>

          <!-- Step 4 -->
          <g transform="translate(1230, 0)">
            <rect width="370" height="540" rx="16" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
            <circle cx="60" cy="60" r="28" fill="#0284c7" />
            <text x="60" y="70" fill="#ffffff" font-family="system-ui, sans-serif" font-size="24" font-weight="800" text-anchor="middle">4</text>
            <text x="40" y="140" fill="#ffffff" font-family="system-ui, sans-serif" font-size="26" font-weight="700">Rat einholen</text>
            <text x="40" y="190" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="20">
              <tspan x="40" dy="0">Bei Problemen:</tspan>
              <tspan x="40" dy="32">Betriebsrat oder</tspan>
              <tspan x="40" dy="32">Fachanwalt für</tspan>
              <tspan x="40" dy="32">Arbeitsrecht kontaktieren.</tspan>
            </text>
          </g>
        </g>

        <text x="960" y="970" fill="#64748b" font-family="system-ui, sans-serif" font-size="20" text-anchor="middle">Arbeitszeit Rechner Pro — Praxistipps für Arbeitnehmer</text>
      </svg>
    `
  },
  {
    name: 'betriebsrat-rechtsberatung-kontakt.jpg',
    svg: `
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg9b" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0f172a" />
            <stop offset="100%" stop-color="#1e293b" />
          </linearGradient>
        </defs>
        <rect width="1920" height="1080" fill="url(#bg9b)" />

        <text x="160" y="160" fill="#ffffff" font-family="system-ui, sans-serif" font-size="52" font-weight="800">Anlaufstellen &amp; Unterstützung für Beschäftigte</text>
        <text x="160" y="215" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="26">Wo Arbeitnehmer bei fehlender Zeiterfassung und Überstundenkonflikten Hilfe finden</text>

        <!-- 2 Large Feature Columns -->
        <g transform="translate(160, 300)">
          <!-- Left: Betriebsrat -->
          <rect width="770" height="550" rx="20" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
          <text x="60" y="80" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="34" font-weight="800">1. Der Betriebsrat (§ 87 BetrVG)</text>
          <text x="60" y="140" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="22">
            <tspan x="60" dy="0">• Hat ein gesetzliches Initiativrecht zur Einführung von Zeiterfassung</tspan>
            <tspan x="60" dy="45">• Schützt einzelne Beschäftigte vor Benachteiligung durch anonyme Vertretung</tspan>
            <tspan x="60" dy="45">• Schließt verbindliche Betriebsvereinbarungen (BV) mit der Geschäftsführung</tspan>
            <tspan x="60" dy="45">• Überwacht die Einhaltung der Arbeitszeitgrenzen nach ArbZG</tspan>
          </text>
        </g>

        <g transform="translate(990, 300)">
          <!-- Right: Fachanwalt / Gewerkschaft -->
          <rect width="770" height="550" rx="20" fill="#1e293b" stroke="#818cf8" stroke-width="2" />
          <text x="60" y="80" fill="#a5b4fc" font-family="system-ui, sans-serif" font-size="34" font-weight="800">2. Fachanwalt &amp; Gewerkschaft</text>
          <text x="60" y="140" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="22">
            <tspan x="60" dy="0">• Prüfung vertraglicher Ausschlussfristen (oft 3 Monate für Überstunden)</tspan>
            <tspan x="60" dy="45">• Unterstützung bei der gerichtsfesten Aufbereitung eigener Aufzeichnungen</tspan>
            <tspan x="60" dy="45">• Rechtliche Durchsetzung von Lohnnachzahlungen und Verzugszinsen</tspan>
            <tspan x="60" dy="45">• Kostenfreie Rechtsberatung für Gewerkschaftsmitglieder</tspan>
          </text>
        </g>

        <text x="960" y="970" fill="#64748b" font-family="system-ui, sans-serif" font-size="20" text-anchor="middle">Arbeitszeit Rechner Pro — Rechts- &amp; Beratungsratgeber</text>
      </svg>
    `
  },
  {
    name: 'vier-tage-woche-stundenverteilung.jpg',
    svg: `
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg10" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0f172a" />
            <stop offset="100%" stop-color="#1e293b" />
          </linearGradient>
        </defs>
        <rect width="1920" height="1080" fill="url(#bg10)" />

        <rect x="160" y="90" width="310" height="44" rx="22" fill="#047857" />
        <text x="315" y="119" fill="#a7f3d0" font-family="system-ui, sans-serif" font-size="20" font-weight="700" text-anchor="middle">ARBEITSZEITMODELLE</text>

        <text x="160" y="190" fill="#ffffff" font-family="system-ui, sans-serif" font-size="56" font-weight="800">4-Tage-Woche: Arbeitszeitmodelle &amp; Verteilung</text>
        <text x="160" y="240" fill="#6ee7b7" font-family="system-ui, sans-serif" font-size="26">Vergleich der gängigen Wochenstunden-Verteilungen bei 4 Arbeitstagen</text>

        <!-- 4 Model Cards -->
        <g transform="translate(160, 310)">
          <!-- Model 40h -->
          <g transform="translate(0, 0)">
            <rect width="370" height="540" rx="16" fill="#1e293b" stroke="#10b981" stroke-width="2" />
            <rect x="30" y="30" width="130" height="40" rx="20" fill="#065f46" />
            <text x="95" y="57" fill="#6ee7b7" font-family="system-ui, sans-serif" font-size="20" font-weight="700" text-anchor="middle">40 Std. / Woche</text>
            <text x="30" y="130" fill="#ffffff" font-family="system-ui, sans-serif" font-size="44" font-weight="800">10,0 h</text>
            <text x="30" y="170" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="20">pro Arbeitstag (Mo–Do)</text>
            <text x="30" y="230" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="19">
              <tspan x="30" dy="0">• Max. gesetzl. Tagesgrenze</tspan>
              <tspan x="30" dy="35">• Mind. 45 Min. Pause nötig</tspan>
              <tspan x="30" dy="35">• 100% Gehalt unverändert</tspan>
              <tspan x="30" dy="35">• 3 freie Tage wöchentlich</tspan>
            </text>
          </g>

          <!-- Model 36h -->
          <g transform="translate(410, 0)">
            <rect width="370" height="540" rx="16" fill="#1e293b" stroke="#10b981" stroke-width="2" />
            <rect x="30" y="30" width="130" height="40" rx="20" fill="#065f46" />
            <text x="95" y="57" fill="#6ee7b7" font-family="system-ui, sans-serif" font-size="20" font-weight="700" text-anchor="middle">36 Std. / Woche</text>
            <text x="30" y="130" fill="#ffffff" font-family="system-ui, sans-serif" font-size="44" font-weight="800">9,0 h</text>
            <text x="30" y="170" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="20">pro Arbeitstag (Mo–Do)</text>
            <text x="30" y="230" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="19">
              <tspan x="30" dy="0">• Sehr beliebter Kompromiss</tspan>
              <tspan x="30" dy="35">• Mind. 30–45 Min. Pause</tspan>
              <tspan x="30" dy="35">• Gute Balance von Erholung</tspan>
              <tspan x="30" dy="35">• Oft 90–100% Gehalt</tspan>
            </text>
          </g>

          <!-- Model 32h -->
          <g transform="translate(820, 0)">
            <rect width="370" height="540" rx="16" fill="#1e293b" stroke="#10b981" stroke-width="2" />
            <rect x="30" y="30" width="130" height="40" rx="20" fill="#065f46" />
            <text x="95" y="57" fill="#6ee7b7" font-family="system-ui, sans-serif" font-size="20" font-weight="700" text-anchor="middle">32 Std. / Woche</text>
            <text x="30" y="130" fill="#ffffff" font-family="system-ui, sans-serif" font-size="44" font-weight="800">8,0 h</text>
            <text x="30" y="170" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="20">pro Arbeitstag (Mo–Do)</text>
            <text x="30" y="230" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="19">
              <tspan x="30" dy="0">• Klassischer 8-Stunden-Tag</tspan>
              <tspan x="30" dy="35">• 30 Min. Pause genügt</tspan>
              <tspan x="30" dy="35">• Echte 100-80-100 Formel</tspan>
              <tspan x="30" dy="35">• Höchste Zufriedenheit</tspan>
            </text>
          </g>

          <!-- Model 38h -->
          <g transform="translate(1230, 0)">
            <rect width="370" height="540" rx="16" fill="#1e293b" stroke="#10b981" stroke-width="2" />
            <rect x="30" y="30" width="130" height="40" rx="20" fill="#065f46" />
            <text x="95" y="57" fill="#6ee7b7" font-family="system-ui, sans-serif" font-size="20" font-weight="700" text-anchor="middle">38 Std. / Woche</text>
            <text x="30" y="130" fill="#ffffff" font-family="system-ui, sans-serif" font-size="44" font-weight="800">9,5 h</text>
            <text x="30" y="170" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="20">pro Arbeitstag (Mo–Do)</text>
            <text x="30" y="230" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="19">
              <tspan x="30" dy="0">• Tarifliches Standardmodell</tspan>
              <tspan x="30" dy="35">• Mind. 45 Min. Pause nötig</tspan>
              <tspan x="30" dy="35">• 100% Tariflohn</tspan>
              <tspan x="30" dy="35">• Optimierte Wochenplanung</tspan>
            </text>
          </g>
        </g>

        <text x="960" y="970" fill="#64748b" font-family="system-ui, sans-serif" font-size="20" text-anchor="middle">Arbeitszeit Rechner Pro — 4-Tage-Woche Arbeitszeitrechner</text>
      </svg>
    `
  },
  {
    name: 'urlaubstage-4-tage-woche-anpassung.jpg',
    svg: `
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg10b" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0f172a" />
            <stop offset="100%" stop-color="#1e293b" />
          </linearGradient>
        </defs>
        <rect width="1920" height="1080" fill="url(#bg10b)" />

        <text x="160" y="160" fill="#ffffff" font-family="system-ui, sans-serif" font-size="52" font-weight="800">Urlaubsanspruch bei der 4-Tage-Woche</text>
        <text x="160" y="215" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="26">Gesetzliche Umrechnung der Urlaubstage nach dem Bundesurlaubsgesetz (BUrlG)</text>

        <!-- Formula Box -->
        <g transform="translate(160, 300)">
          <rect width="1600" height="200" rx="16" fill="#064e3b" stroke="#10b981" stroke-width="3" />
          <text x="800" y="70" fill="#a7f3d0" font-family="system-ui, sans-serif" font-size="24" font-weight="700" text-anchor="middle">GESETZLICHE UMRECHNUNGSFORMEL</text>
          <text x="800" y="140" fill="#ffffff" font-family="system-ui, sans-serif" font-size="38" font-weight="800" text-anchor="middle">Urlaubstage (4 Tage) = (Bisherige Urlaubstage × 4) ÷ 5</text>
        </g>

        <!-- Example Grid -->
        <g transform="translate(160, 560)">
          <!-- Example 1 -->
          <rect width="480" height="280" rx="16" fill="#1e293b" stroke="#334155" stroke-width="2" />
          <text x="50" y="60" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="22">Gesetzlicher Mindesturlaub</text>
          <text x="50" y="120" fill="#ffffff" font-family="system-ui, sans-serif" font-size="34" font-weight="800">20 Tage → 16 Tage</text>
          <text x="50" y="180" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="20">
            <tspan x="50" dy="0">• (20 × 4) ÷ 5 = 16 Tage</tspan>
            <tspan x="50" dy="35">• Entspricht exakt 4 Wochen Urlaub</tspan>
          </text>
        </g>

        <g transform="translate(720, 560)">
          <!-- Example 2 -->
          <rect width="480" height="280" rx="16" fill="#1e293b" stroke="#334155" stroke-width="2" />
          <text x="50" y="60" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="22">Üblicher Vertrag (25 Tage)</text>
          <text x="50" y="120" fill="#ffffff" font-family="system-ui, sans-serif" font-size="34" font-weight="800">25 Tage → 20 Tage</text>
          <text x="50" y="180" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="20">
            <tspan x="50" dy="0">• (25 × 4) ÷ 5 = 20 Tage</tspan>
            <tspan x="50" dy="35">• Entspricht exakt 5 Wochen Urlaub</tspan>
          </text>
        </g>

        <g transform="translate(1280, 560)">
          <!-- Example 3 -->
          <rect width="480" height="280" rx="16" fill="#1e293b" stroke="#334155" stroke-width="2" />
          <text x="50" y="60" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="22">Tarifvertrag (30 Tage)</text>
          <text x="50" y="120" fill="#ffffff" font-family="system-ui, sans-serif" font-size="34" font-weight="800">30 Tage → 24 Tage</text>
          <text x="50" y="180" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="20">
            <tspan x="50" dy="0">• (30 × 4) ÷ 5 = 24 Tage</tspan>
            <tspan x="50" dy="35">• Entspricht exakt 6 Wochen Urlaub</tspan>
          </text>
        </g>

        <text x="960" y="970" fill="#64748b" font-family="system-ui, sans-serif" font-size="20" text-anchor="middle">Arbeitszeit Rechner Pro — Urlaubsanspruch bei 4-Tage-Woche</text>
      </svg>
    `
  }
];

async function generate() {
  for (const img of images) {
    const dest = path.join(outputDir, img.name);
    await sharp(Buffer.from(img.svg))
      .jpeg({ quality: 90 })
      .toFile(dest);
    console.log(`Generated: ${dest}`);
  }
}

generate().catch(console.error);
