import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const outputDir = path.resolve('public/images/blog');

const images = [
  {
    name: 'arbeitgeber-ohne-zeiterfassung-schritte.jpg',
    svg: `
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg_bright_1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f8fafc" />
            <stop offset="50%" stop-color="#f0f7ff" />
            <stop offset="100%" stop-color="#e0f2fe" />
          </linearGradient>
          <filter id="shadow1" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#0f172a" flood-opacity="0.08" />
          </filter>
        </defs>
        <rect width="1920" height="1080" fill="url(#bg_bright_1)" />
        
        <!-- Header badge -->
        <rect x="140" y="80" width="300" height="44" rx="22" fill="#dbeafe" />
        <text x="290" y="109" fill="#1e40af" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="700" text-anchor="middle">HANDLUNGSLEITFADEN</text>

        <text x="140" y="180" fill="#0f172a" font-family="system-ui, -apple-system, sans-serif" font-size="52" font-weight="800">Arbeitgeber erfasst keine Arbeitszeit? 4 Schritte</text>
        <text x="140" y="230" fill="#475569" font-family="system-ui, -apple-system, sans-serif" font-size="24">So schützen Arbeitnehmer ihre Rechte und sichern Überstundenansprüche rechtssicher ab</text>

        <!-- 4 Step Cards in Grid -->
        <!-- Step 1 -->
        <g transform="translate(140, 280)" filter="url(#shadow1)">
          <rect width="380" height="580" rx="20" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" />
          <rect x="30" y="30" width="64" height="64" rx="32" fill="#2563eb" />
          <text x="62" y="72" fill="#ffffff" font-family="system-ui, sans-serif" font-size="30" font-weight="800" text-anchor="middle">1</text>
          
          <text x="30" y="140" fill="#0f172a" font-family="system-ui, sans-serif" font-size="26" font-weight="700">Vertrag prüfen</text>
          <text x="30" y="175" fill="#2563eb" font-family="system-ui, sans-serif" font-size="18" font-weight="600">Grundlagen klären</text>
          
          <rect x="30" y="200" width="320" height="2" fill="#f1f5f9" />
          
          <text x="30" y="240" fill="#334155" font-family="system-ui, sans-serif" font-size="19" line-height="1.5">
            <tspan x="30" dy="0">• Arbeitsvertrag &amp; Handbuch</tspan>
            <tspan x="30" dy="34">  auf Klauseln prüfen</tspan>
            <tspan x="30" dy="46">• Prüfen, ob Kolleginnen</tspan>
            <tspan x="30" dy="34">  Zeiterfassung nutzen</tspan>
            <tspan x="30" dy="46">• Bestehende Vorgaben</tspan>
            <tspan x="30" dy="34">  schriftlich sammeln</tspan>
          </text>
        </g>

        <!-- Step 2 -->
        <g transform="translate(560, 280)" filter="url(#shadow1)">
          <rect width="380" height="580" rx="20" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" />
          <rect x="30" y="30" width="64" height="64" rx="32" fill="#0284c7" />
          <text x="62" y="72" fill="#ffffff" font-family="system-ui, sans-serif" font-size="30" font-weight="800" text-anchor="middle">2</text>
          
          <text x="30" y="140" fill="#0f172a" font-family="system-ui, sans-serif" font-size="26" font-weight="700">Selbst erfassen</text>
          <text x="30" y="175" fill="#0284c7" font-family="system-ui, sans-serif" font-size="18" font-weight="600">Beweise sichern</text>
          
          <rect x="30" y="200" width="320" height="2" fill="#f1f5f9" />
          
          <text x="30" y="240" fill="#334155" font-family="system-ui, sans-serif" font-size="19">
            <tspan x="30" dy="0">• Start-, End- &amp; Pausenzeiten</tspan>
            <tspan x="30" dy="34">  täglich notieren</tspan>
            <tspan x="30" dy="46">• Excel, Stundenzettel oder</tspan>
            <tspan x="30" dy="34">  digitale App führen</tspan>
            <tspan x="30" dy="46">• Überstunden separat</tspan>
            <tspan x="30" dy="34">  mit Grund ausweisen</tspan>
          </text>
        </g>

        <!-- Step 3 -->
        <g transform="translate(980, 280)" filter="url(#shadow1)">
          <rect width="380" height="580" rx="20" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" />
          <rect x="30" y="30" width="64" height="64" rx="32" fill="#4f46e5" />
          <text x="62" y="72" fill="#ffffff" font-family="system-ui, sans-serif" font-size="30" font-weight="800" text-anchor="middle">3</text>
          
          <text x="30" y="140" fill="#0f172a" font-family="system-ui, sans-serif" font-size="26" font-weight="700">Gespräch suchen</text>
          <text x="30" y="175" fill="#4f46e5" font-family="system-ui, sans-serif" font-size="18" font-weight="600">Sachlich klären</text>
          
          <rect x="30" y="200" width="320" height="2" fill="#f1f5f9" />
          
          <text x="30" y="240" fill="#334155" font-family="system-ui, sans-serif" font-size="19">
            <tspan x="30" dy="0">• Eigenaufzeichnung als</tspan>
            <tspan x="30" dy="34">  Gesprächsbasis nutzen</tspan>
            <tspan x="30" dy="46">• Sachlich auf EuGH &amp; BAG</tspan>
            <tspan x="30" dy="34">  Pflichten hinweisen</tspan>
            <tspan x="30" dy="46">• Schriftliche Bestätigung</tspan>
            <tspan x="30" dy="34">  der Zeiten anfordern</tspan>
          </text>
        </g>

        <!-- Step 4 -->
        <g transform="translate(1400, 280)" filter="url(#shadow1)">
          <rect width="380" height="580" rx="20" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" />
          <rect x="30" y="30" width="64" height="64" rx="32" fill="#059669" />
          <text x="62" y="72" fill="#ffffff" font-family="system-ui, sans-serif" font-size="30" font-weight="800" text-anchor="middle">4</text>
          
          <text x="30" y="140" fill="#0f172a" font-family="system-ui, sans-serif" font-size="26" font-weight="700">Rat einholen</text>
          <text x="30" y="175" fill="#059669" font-family="system-ui, sans-serif" font-size="18" font-weight="600">Rechte durchsetzen</text>
          
          <rect x="30" y="200" width="320" height="2" fill="#f1f5f9" />
          
          <text x="30" y="240" fill="#334155" font-family="system-ui, sans-serif" font-size="19">
            <tspan x="30" dy="0">• Betriebsrat (§ 87 BetrVG)</tspan>
            <tspan x="30" dy="34">  kontaktieren</tspan>
            <tspan x="30" dy="46">• Gewerkschaft / Fachanwalt</tspan>
            <tspan x="30" dy="34">  für Arbeitsrecht fragen</tspan>
            <tspan x="30" dy="46">• Verjährung &amp; Ausschluss-</tspan>
            <tspan x="30" dy="34">  fristen im Auge behalten</tspan>
          </text>
        </g>

        <!-- Footer Note -->
        <text x="960" y="960" fill="#64748b" font-family="system-ui, sans-serif" font-size="20" font-weight="500" text-anchor="middle">Arbeitszeit Rechner Pro — Praxistipps für Arbeitnehmer</text>
      </svg>
    `
  },
  {
    name: 'betriebsrat-rechtsberatung-kontakt.jpg',
    svg: `
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg_bright_2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f8fafc" />
            <stop offset="100%" stop-color="#eff6ff" />
          </linearGradient>
          <filter id="shadow2" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#0f172a" flood-opacity="0.08" />
          </filter>
        </defs>
        <rect width="1920" height="1080" fill="url(#bg_bright_2)" />
        
        <rect x="160" y="90" width="340" height="44" rx="22" fill="#dbeafe" />
        <text x="330" y="119" fill="#1e40af" font-family="system-ui, sans-serif" font-size="20" font-weight="700" text-anchor="middle">RECHTLICHE HILFE &amp; RAT</text>

        <text x="160" y="180" fill="#0f172a" font-family="system-ui, sans-serif" font-size="52" font-weight="800">Anlaufstellen &amp; Unterstützung für Beschäftigte</text>
        <text x="160" y="230" fill="#475569" font-family="system-ui, sans-serif" font-size="24">Wo Arbeitnehmer bei fehlender Zeiterfassung und Überstundenkonflikten Hilfe finden</text>

        <!-- Two Big Split Comparison Cards -->
        <g transform="translate(160, 280)" filter="url(#shadow2)">
          <rect width="770" height="580" rx="20" fill="#ffffff" stroke="#bfdbfe" stroke-width="2" />
          <rect x="40" y="40" width="690" height="70" rx="12" fill="#eff6ff" />
          <text x="70" y="84" fill="#1e40af" font-family="system-ui, sans-serif" font-size="28" font-weight="800">1. Der Betriebsrat (§ 87 BetrVG)</text>
          
          <text x="60" y="170" fill="#334155" font-family="system-ui, sans-serif" font-size="22">
            <tspan x="60" dy="0">• Hat echtes Initiativrecht zur Einführung von Zeiterfassung</tspan>
            <tspan x="60" dy="48">• Schützt einzelne Beschäftigte vor Benachteiligung durch Anonymität</tspan>
            <tspan x="60" dy="48">• Verhandelt offizielle Betriebsvereinbarungen über Arbeitszeiten</tspan>
            <tspan x="60" dy="48">• Überwacht die Einhaltung des Arbeitszeitgesetzes (ArbZG)</tspan>
            <tspan x="60" dy="48">• Erste kostenfreie Anlaufstelle im eigenen Unternehmen</tspan>
          </text>
          
          <rect x="60" y="460" width="650" height="60" rx="8" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
          <text x="385" y="497" fill="#15803d" font-family="system-ui, sans-serif" font-size="20" font-weight="700" text-anchor="middle">✓ Kostenlos, intern &amp; mit gesetzlicher Mitbestimmung</text>
        </g>

        <g transform="translate(990, 280)" filter="url(#shadow2)">
          <rect width="770" height="580" rx="20" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" />
          <rect x="40" y="40" width="690" height="70" rx="12" fill="#f8fafc" />
          <text x="70" y="84" fill="#0f172a" font-family="system-ui, sans-serif" font-size="28" font-weight="800">2. Fachanwalt &amp; Gewerkschaft</text>
          
          <text x="60" y="170" fill="#334155" font-family="system-ui, sans-serif" font-size="22">
            <tspan x="60" dy="0">• Prüfung vertraglicher Ausschlussfristen (oft 3 Monate Frist!)</tspan>
            <tspan x="60" dy="48">• Unterstützung bei der gerichtlichen Geltendmachung von Vergütung</tspan>
            <tspan x="60" dy="48">• Rechtliche Berechnung von Zinsentschädigung und Nachzahlungen</tspan>
            <tspan x="60" dy="48">• Kostenlose Rechtsberatung für Gewerkschaftsmitglieder</tspan>
            <tspan x="60" dy="48">• Rechtsschutzversicherung übernimmt meist Anwaltskosten</tspan>
          </text>
          
          <rect x="60" y="460" width="650" height="60" rx="8" fill="#f0f9ff" stroke="#93c5fd" stroke-width="1.5" />
          <text x="385" y="497" fill="#0369a1" font-family="system-ui, sans-serif" font-size="20" font-weight="700" text-anchor="middle">✓ Individuelle Rechtsdurchsetzung vor dem Arbeitsgericht</text>
        </g>

        <!-- Footer Note -->
        <text x="960" y="960" fill="#64748b" font-family="system-ui, sans-serif" font-size="20" font-weight="500" text-anchor="middle">Arbeitszeit Rechner Pro — Sektion Arbeitsrecht &amp; Mitarbeiterrechte</text>
      </svg>
    `
  },
  {
    name: 'beweismittel-hierarchie-gericht.jpg',
    svg: `
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg_bright_3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f8fafc" />
            <stop offset="100%" stop-color="#eff6ff" />
          </linearGradient>
          <filter id="shadow3" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#0f172a" flood-opacity="0.06" />
          </filter>
        </defs>
        <rect width="1920" height="1080" fill="url(#bg_bright_3)" />
        
        <rect x="160" y="80" width="340" height="44" rx="22" fill="#dbeafe" />
        <text x="330" y="109" fill="#1e40af" font-family="system-ui, sans-serif" font-size="20" font-weight="700" text-anchor="middle">BEWEISFÜHRUNG ARBEITSRECHT</text>
        
        <text x="160" y="175" fill="#0f172a" font-family="system-ui, sans-serif" font-size="52" font-weight="800">Hierarchie der Beweismittel vor dem Arbeitsgericht</text>
        <text x="160" y="225" fill="#475569" font-family="system-ui, sans-serif" font-size="24">Welche Nachweise im Streitfall über Überstunden die stärkste Beweiskraft entfalten</text>

        <!-- Tier 1 -->
        <g transform="translate(160, 270)" filter="url(#shadow3)">
          <rect width="1600" height="135" rx="16" fill="#ffffff" stroke="#3b82f6" stroke-width="2.5" />
          <rect x="24" y="24" width="88" height="88" rx="12" fill="#2563eb" />
          <text x="68" y="78" fill="#ffffff" font-family="system-ui, sans-serif" font-size="34" font-weight="800" text-anchor="middle">1</text>
          <text x="140" y="62" fill="#1e3a8a" font-family="system-ui, sans-serif" font-size="28" font-weight="800">Elektronische Zeiterfassung &amp; Systemlogs</text>
          <text x="140" y="98" fill="#475569" font-family="system-ui, sans-serif" font-size="22">Objektive, manipulationssichere Stechuhren, Terminal-Badges &amp; Server-Login-Protokolle</text>
          <rect x="1350" y="44" width="220" height="48" rx="24" fill="#dbeafe" />
          <text x="1460" y="76" fill="#1e40af" font-family="system-ui, sans-serif" font-size="20" font-weight="700" text-anchor="middle">★ Höchste Beweiskraft</text>
        </g>

        <!-- Tier 2 -->
        <g transform="translate(160, 430)" filter="url(#shadow3)">
          <rect width="1600" height="135" rx="16" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5" />
          <rect x="24" y="24" width="88" height="88" rx="12" fill="#0284c7" />
          <text x="68" y="78" fill="#ffffff" font-family="system-ui, sans-serif" font-size="34" font-weight="800" text-anchor="middle">2</text>
          <text x="140" y="62" fill="#0369a1" font-family="system-ui, sans-serif" font-size="28" font-weight="800">Digitale Zeitstempel &amp; Aktivitätsnachweise</text>
          <text x="140" y="98" fill="#475569" font-family="system-ui, sans-serif" font-size="22">Versendete E-Mails am Tagesrand, Kalendereinladungen, Ticket-Bearbeitungen &amp; CRM-Logs</text>
          <rect x="1350" y="44" width="220" height="48" rx="24" fill="#e0f2fe" />
          <text x="1460" y="76" fill="#0369a1" font-family="system-ui, sans-serif" font-size="20" font-weight="700" text-anchor="middle">Sehr Hohe Relevanz</text>
        </g>

        <!-- Tier 3 -->
        <g transform="translate(160, 590)" filter="url(#shadow3)">
          <rect width="1600" height="135" rx="16" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
          <rect x="24" y="24" width="88" height="88" rx="12" fill="#64748b" />
          <text x="68" y="78" fill="#ffffff" font-family="system-ui, sans-serif" font-size="34" font-weight="800" text-anchor="middle">3</text>
          <text x="140" y="62" fill="#334155" font-family="system-ui, sans-serif" font-size="28" font-weight="800">Dienstpläne &amp; Zeugenaussagen von Kollegen</text>
          <text x="140" y="98" fill="#475569" font-family="system-ui, sans-serif" font-size="22">Offizielle Schichtpläne, Zuweisungen durch Vorgesetzte und Bestätigung anwesender Teammitglieder</text>
          <rect x="1350" y="44" width="220" height="48" rx="24" fill="#f1f5f9" />
          <text x="1460" y="76" fill="#475569" font-family="system-ui, sans-serif" font-size="20" font-weight="700" text-anchor="middle">Stützende Beweise</text>
        </g>

        <!-- Tier 4 -->
        <g transform="translate(160, 750)" filter="url(#shadow3)">
          <rect width="1600" height="135" rx="16" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
          <rect x="24" y="24" width="88" height="88" rx="12" fill="#94a3b8" />
          <text x="68" y="78" fill="#ffffff" font-family="system-ui, sans-serif" font-size="34" font-weight="800" text-anchor="middle">4</text>
          <text x="140" y="62" fill="#475569" font-family="system-ui, sans-serif" font-size="28" font-weight="800">Eigene Notizen &amp; handschriftliche Stundenzettel</text>
          <text x="140" y="98" fill="#64748b" font-family="system-ui, sans-serif" font-size="22">Lückenlos und zeitnah geführte Eigenaufzeichnungen als Grundlage zur schlüssigen Darlegung</text>
          <rect x="1350" y="44" width="220" height="48" rx="24" fill="#f8fafc" />
          <text x="1460" y="76" fill="#64748b" font-family="system-ui, sans-serif" font-size="20" font-weight="700" text-anchor="middle">Darlegungsgrundlage</text>
        </g>

        <!-- Footer Note -->
        <text x="960" y="950" fill="#64748b" font-family="system-ui, sans-serif" font-size="20" font-weight="500" text-anchor="middle">Arbeitszeit Rechner Pro — Ratgeber Arbeitsrecht &amp; Zeiterfassungspflicht</text>
      </svg>
    `
  },
  {
    name: 'nachtschicht-zuschlaege-ruhezeit.jpg',
    svg: `
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg_bright_4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f8fafc" />
            <stop offset="100%" stop-color="#eff6ff" />
          </linearGradient>
          <filter id="shadow4" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#0f172a" flood-opacity="0.08" />
          </filter>
        </defs>
        <rect width="1920" height="1080" fill="url(#bg_bright_4)" />
        
        <rect x="160" y="80" width="310" height="44" rx="22" fill="#e0e7ff" />
        <text x="315" y="109" fill="#3730a3" font-family="system-ui, sans-serif" font-size="20" font-weight="700" text-anchor="middle">SCHICHTARBEIT &amp; GESETZ</text>

        <text x="160" y="175" fill="#0f172a" font-family="system-ui, sans-serif" font-size="52" font-weight="800">Nachtschicht, Zuschläge &amp; Ruhezeiten</text>
        <text x="160" y="225" fill="#475569" font-family="system-ui, sans-serif" font-size="24">Gesetzliche Nachtarbeitsfenster, Vergütungszuschläge und 11h-Ruhezeit im Überblick</text>

        <!-- 3 Feature Cards -->
        <g transform="translate(160, 270)" filter="url(#shadow4)">
          <rect width="500" height="600" rx="20" fill="#ffffff" stroke="#c7d2fe" stroke-width="2" />
          <rect x="30" y="30" width="440" height="60" rx="10" fill="#eef2ff" />
          <text x="50" y="70" fill="#3730a3" font-family="system-ui, sans-serif" font-size="24" font-weight="800">1. Nachtzeit-Fenster</text>
          
          <text x="50" y="140" fill="#0f172a" font-family="system-ui, sans-serif" font-size="32" font-weight="800">23:00 — 06:00 Uhr</text>
          <text x="50" y="175" fill="#6366f1" font-family="system-ui, sans-serif" font-size="20" font-weight="600">§ 2 Abs. 3 ArbZG</text>
          
          <rect x="50" y="200" width="400" height="2" fill="#f1f5f9" />
          
          <text x="50" y="245" fill="#334155" font-family="system-ui, sans-serif" font-size="20">
            <tspan x="50" dy="0">• In Bäckereien: 22:00 – 05:00 Uhr</tspan>
            <tspan x="50" dy="44">• Ab &gt; 2 Stunden Arbeit im Fenster</tspan>
            <tspan x="50" dy="32">  gilt die Schicht als Nachtarbeit</tspan>
            <tspan x="50" dy="44">• Besondere arbeitsmedizinische</tspan>
            <tspan x="50" dy="32">  Schutzvorschriften greifen</tspan>
          </text>
        </g>

        <g transform="translate(710, 270)" filter="url(#shadow4)">
          <rect width="500" height="600" rx="20" fill="#ffffff" stroke="#bfdbfe" stroke-width="2" />
          <rect x="30" y="30" width="440" height="60" rx="10" fill="#eff6ff" />
          <text x="50" y="70" fill="#1e40af" font-family="system-ui, sans-serif" font-size="24" font-weight="800">2. Nachtzuschlag</text>
          
          <text x="50" y="140" fill="#0f172a" font-family="system-ui, sans-serif" font-size="32" font-weight="800">25% — 30% Plus</text>
          <text x="50" y="175" fill="#2563eb" font-family="system-ui, sans-serif" font-size="20" font-weight="600">§ 6 Abs. 5 ArbZG</text>
          
          <rect x="50" y="200" width="400" height="2" fill="#f1f5f9" />
          
          <text x="50" y="245" fill="#334155" font-family="system-ui, sans-serif" font-size="20">
            <tspan x="50" dy="0">• 25% Regelzuschlag oder Freizeit</tspan>
            <tspan x="50" dy="44">• 30% bei Dauernachtarbeit</tspan>
            <tspan x="50" dy="44">• Steuerfrei nach § 3b EStG bis</tspan>
            <tspan x="50" dy="32">  zu gesetzlichen Höchstgrenzen</tspan>
            <tspan x="50" dy="44">• Höhere Sätze an Sonn-/Feiertagen</tspan>
          </text>
        </g>

        <g transform="translate(1260, 270)" filter="url(#shadow4)">
          <rect width="500" height="600" rx="20" fill="#ffffff" stroke="#bbf7d0" stroke-width="2" />
          <rect x="30" y="30" width="440" height="60" rx="10" fill="#f0fdf4" />
          <text x="50" y="70" fill="#15803d" font-family="system-ui, sans-serif" font-size="24" font-weight="800">3. Ruhezeit</text>
          
          <text x="50" y="140" fill="#0f172a" font-family="system-ui, sans-serif" font-size="32" font-weight="800">11 Std. Pause</text>
          <text x="50" y="175" fill="#16a34a" font-family="system-ui, sans-serif" font-size="20" font-weight="600">§ 5 Abs. 1 ArbZG</text>
          
          <rect x="50" y="200" width="400" height="2" fill="#f1f5f9" />
          
          <text x="50" y="245" fill="#334155" font-family="system-ui, sans-serif" font-size="20">
            <tspan x="50" dy="0">• Min. 11h ununterbrochene Ruhe</tspan>
            <tspan x="50" dy="32">  nach Schichtende</tspan>
            <tspan x="50" dy="44">• Bei Verkürzung auf 10h (z.B. Klinik)</tspan>
            <tspan x="50" dy="32">  muss Ausgleich binnen 4 Wochen</tspan>
            <tspan x="50" dy="44">• Gesetzliches Beschäftigungsverbot</tspan>
            <tspan x="50" dy="32">  vor Ablauf der 11 Stunden</tspan>
          </text>
        </g>

        <!-- Footer Note -->
        <text x="960" y="960" fill="#64748b" font-family="system-ui, sans-serif" font-size="20" font-weight="500" text-anchor="middle">Arbeitszeit Rechner Pro — Ratgeber Arbeitszeitgesetz &amp; Nachtzuschläge</text>
      </svg>
    `
  },
  {
    name: 'ruhezeit-11-stunden-diagramm.jpg',
    svg: `
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg_bright_5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f8fafc" />
            <stop offset="100%" stop-color="#eff6ff" />
          </linearGradient>
          <filter id="shadow5" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#0f172a" flood-opacity="0.08" />
          </filter>
        </defs>
        <rect width="1920" height="1080" fill="url(#bg_bright_5)" />
        
        <rect x="160" y="80" width="300" height="44" rx="22" fill="#dbeafe" />
        <text x="310" y="109" fill="#1e40af" font-family="system-ui, sans-serif" font-size="20" font-weight="700" text-anchor="middle">GESETZLICHE RUHEZEIT</text>

        <text x="160" y="175" fill="#0f172a" font-family="system-ui, sans-serif" font-size="52" font-weight="800">Die 11-Stunden-Ruhezeit nach Schichtende</text>
        <text x="160" y="225" fill="#475569" font-family="system-ui, sans-serif" font-size="24">Berechnung des frühestmöglichen Arbeitsbeginns bei Nacht- und Wechselschichten (§ 5 ArbZG)</text>

        <!-- Timeline Graphic Box -->
        <g transform="translate(160, 280)" filter="url(#shadow5)">
          <rect width="1600" height="580" rx="20" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" />
          
          <!-- Timeline bar -->
          <rect x="80" y="80" width="400" height="100" rx="12" fill="#0284c7" />
          <text x="280" y="125" fill="#ffffff" font-family="system-ui, sans-serif" font-size="24" font-weight="800" text-anchor="middle">Nachtschicht (Arbeitszeit)</text>
          <text x="280" y="160" fill="#e0f2fe" font-family="system-ui, sans-serif" font-size="20" text-anchor="middle">22:00 Uhr — 06:00 Uhr (8h)</text>
          
          <!-- Shift End Point -->
          <circle cx="530" cy="130" r="16" fill="#ef4444" />
          <text x="530" y="80" fill="#b91c1c" font-family="system-ui, sans-serif" font-size="20" font-weight="800" text-anchor="middle">Schichtende</text>
          <text x="530" y="180" fill="#0f172a" font-family="system-ui, sans-serif" font-size="22" font-weight="800" text-anchor="middle">06:00 Uhr</text>

          <!-- 11h Rest Period Bar -->
          <rect x="580" y="80" width="550" height="100" rx="12" fill="#10b981" />
          <text x="855" y="125" fill="#ffffff" font-family="system-ui, sans-serif" font-size="26" font-weight="800" text-anchor="middle">Gesetzliche Ruhezeit: Mindestens 11 Stunden</text>
          <text x="855" y="160" fill="#d1fae5" font-family="system-ui, sans-serif" font-size="20" text-anchor="middle">Ununterbrochene Erholung ohne Diensthandy/Anrufe</text>

          <!-- Earliest Start Point -->
          <circle cx="1180" cy="130" r="16" fill="#10b981" />
          <text x="1180" y="80" fill="#15803d" font-family="system-ui, sans-serif" font-size="20" font-weight="800" text-anchor="middle">Frühester Dienstbeginn</text>
          <text x="1180" y="180" fill="#0f172a" font-family="system-ui, sans-serif" font-size="22" font-weight="800" text-anchor="middle">17:00 Uhr</text>

          <!-- Next Shift Bar -->
          <rect x="1230" y="80" width="290" height="100" rx="12" fill="#64748b" />
          <text x="1375" y="125" fill="#ffffff" font-family="system-ui, sans-serif" font-size="24" font-weight="800" text-anchor="middle">Nächste Schicht</text>
          <text x="1375" y="160" fill="#f1f5f9" font-family="system-ui, sans-serif" font-size="20" text-anchor="middle">ab 17:00 Uhr zulässig</text>

          <!-- Divider line -->
          <rect x="80" y="240" width="1440" height="2" fill="#f1f5f9" />

          <!-- Key Rules Underneath -->
          <g transform="translate(80, 270)">
            <rect width="450" height="240" rx="12" fill="#f8fafc" stroke="#e2e8f0" />
            <text x="30" y="45" fill="#1e3a8a" font-family="system-ui, sans-serif" font-size="22" font-weight="700">Keine Unterbrechung</text>
            <text x="30" y="90" fill="#475569" font-family="system-ui, sans-serif" font-size="18">
              <tspan x="30" dy="0">Schon ein kurzer dienstlicher</tspan>
              <tspan x="30" dy="28">Anruf oder eine E-Mail setzt die</tspan>
              <tspan x="30" dy="28">11-Stunden-Frist laut BAG</tspan>
              <tspan x="30" dy="28">wieder komplett auf null zurück.</tspan>
            </text>
          </g>

          <g transform="translate(575, 270)">
            <rect width="450" height="240" rx="12" fill="#f8fafc" stroke="#e2e8f0" />
            <text x="30" y="45" fill="#1e3a8a" font-family="system-ui, sans-serif" font-size="22" font-weight="700">Branchenausnahmen</text>
            <text x="30" y="90" fill="#475569" font-family="system-ui, sans-serif" font-size="18">
              <tspan x="30" dy="0">In Pflege, Krankenhäusern &amp;</tspan>
              <tspan x="30" dy="28">Gastronomie kann die Ruhezeit</tspan>
              <tspan x="30" dy="28">auf 10h verkürzt werden (mit</tspan>
              <tspan x="30" dy="28">Ausgleich binnen 4 Wochen).</tspan>
            </text>
          </g>

          <g transform="translate(1070, 270)">
            <rect width="450" height="240" rx="12" fill="#f8fafc" stroke="#e2e8f0" />
            <text x="30" y="45" fill="#1e3a8a" font-family="system-ui, sans-serif" font-size="22" font-weight="700">Bußgeld für Arbeitgeber</text>
            <text x="30" y="90" fill="#475569" font-family="system-ui, sans-serif" font-size="18">
              <tspan x="30" dy="0">Die Nichteinhaltung der 11h</tspan>
              <tspan x="30" dy="28">ist eine Ordnungswidrigkeit</tspan>
              <tspan x="30" dy="28">nach § 22 ArbZG mit bis zu</tspan>
              <tspan x="30" dy="28">30.000 € Bußgeld pro Fall.</tspan>
            </text>
          </g>
        </g>

        <!-- Footer Note -->
        <text x="960" y="960" fill="#64748b" font-family="system-ui, sans-serif" font-size="20" font-weight="500" text-anchor="middle">Arbeitszeit Rechner Pro — Gesetzliche Pausen- &amp; Ruhezeiten (§ 5 ArbZG)</text>
      </svg>
    `
  },
  {
    name: 'vier-tage-woche-stundenverteilung.jpg',
    svg: `
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg_bright_6" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f8fafc" />
            <stop offset="100%" stop-color="#eff6ff" />
          </linearGradient>
          <filter id="shadow6" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#0f172a" flood-opacity="0.08" />
          </filter>
        </defs>
        <rect width="1920" height="1080" fill="url(#bg_bright_6)" />
        
        <rect x="160" y="80" width="300" height="44" rx="22" fill="#dbeafe" />
        <text x="310" y="109" fill="#1e40af" font-family="system-ui, sans-serif" font-size="20" font-weight="700" text-anchor="middle">ARBEITSZEITMODELLE</text>

        <text x="160" y="175" fill="#0f172a" font-family="system-ui, sans-serif" font-size="52" font-weight="800">4-Tage-Woche: Die 3 gängigen Modelle im Vergleich</text>
        <text x="160" y="225" fill="#475569" font-family="system-ui, sans-serif" font-size="24">Stundenverteilung, Pausenpflichten und Gehaltsauswirkungen auf einen Blick</text>

        <!-- 3 Comparison Columns -->
        <!-- Model A: 4 x 10h -->
        <g transform="translate(160, 270)" filter="url(#shadow6)">
          <rect width="500" height="600" rx="20" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" />
          <rect x="30" y="30" width="440" height="60" rx="10" fill="#f8fafc" />
          <text x="50" y="70" fill="#0f172a" font-family="system-ui, sans-serif" font-size="24" font-weight="800">Modell A: 4 × 10 Stunden</text>
          
          <text x="50" y="140" fill="#0284c7" font-family="system-ui, sans-serif" font-size="32" font-weight="800">40h / Woche (Vollzeit)</text>
          <text x="50" y="175" fill="#64748b" font-family="system-ui, sans-serif" font-size="19" font-weight="600">Volles Gehalt, langes Wochenende</text>
          
          <rect x="50" y="200" width="400" height="2" fill="#f1f5f9" />
          
          <text x="50" y="245" fill="#334155" font-family="system-ui, sans-serif" font-size="20">
            <tspan x="50" dy="0">• 100% Gehalt bleibt erhalten</tspan>
            <tspan x="50" dy="44">• Gesetzl. Maximum (§ 3 ArbZG)</tspan>
            <tspan x="50" dy="44">• Min. 45 Min. Pflichtpause täglich</tspan>
            <tspan x="50" dy="44">• Überstunden an Arbeitstagen</tspan>
            <tspan x="50" dy="32">  nicht mehr legal möglich!</tspan>
          </text>
        </g>

        <!-- Model B: 4 x 8h (32h) -->
        <g transform="translate(710, 270)" filter="url(#shadow6)">
          <rect width="500" height="600" rx="20" fill="#ffffff" stroke="#93c5fd" stroke-width="2" />
          <rect x="30" y="30" width="440" height="60" rx="10" fill="#eff6ff" />
          <text x="50" y="70" fill="#1e40af" font-family="system-ui, sans-serif" font-size="24" font-weight="800">Modell B: 4 × 8 Stunden</text>
          
          <text x="50" y="140" fill="#2563eb" font-family="system-ui, sans-serif" font-size="32" font-weight="800">32h / Woche (Teilzeit)</text>
          <text x="50" y="175" fill="#1e40af" font-family="system-ui, sans-serif" font-size="19" font-weight="600">80% Gehalt (§ 8 TzBfG)</text>
          
          <rect x="50" y="200" width="400" height="2" fill="#f1f5f9" />
          
          <text x="50" y="245" fill="#334155" font-family="system-ui, sans-serif" font-size="20">
            <tspan x="50" dy="0">• Gesetzlicher Teilzeitanspruch</tspan>
            <tspan x="50" dy="44">• Entspanntes 8h-Tagespensum</tspan>
            <tspan x="50" dy="44">• Nur 30 Min. Pause erforderlich</tspan>
            <tspan x="50" dy="44">• Hohe Work-Life-Balance bei</tspan>
            <tspan x="50" dy="32">  reduziertem Monatsgehalt</tspan>
          </text>
        </g>

        <!-- Model C: 100-80-100 -->
        <g transform="translate(1260, 270)" filter="url(#shadow6)">
          <rect width="500" height="600" rx="20" fill="#ffffff" stroke="#86efac" stroke-width="2" />
          <rect x="30" y="30" width="440" height="60" rx="10" fill="#f0fdf4" />
          <text x="50" y="70" fill="#15803d" font-family="system-ui, sans-serif" font-size="24" font-weight="800">Modell C: 100-80-100</text>
          
          <text x="50" y="140" fill="#16a34a" font-family="system-ui, sans-serif" font-size="32" font-weight="800">100% Lohn / 80% Zeit</text>
          <text x="50" y="175" fill="#15803d" font-family="system-ui, sans-serif" font-size="19" font-weight="600">100% Leistungserwartung</text>
          
          <rect x="50" y="200" width="400" height="2" fill="#f1f5f9" />
          
          <text x="50" y="245" fill="#334155" font-family="system-ui, sans-serif" font-size="20">
            <tspan x="50" dy="0">• Modernes Pilotprojekt-Modell</tspan>
            <tspan x="50" dy="44">• 32h Arbeit bei 100% Gehalt</tspan>
            <tspan x="50" dy="44">• Höhere Produktivität durch Fokus</tspan>
            <tspan x="50" dy="44">• Erfordert straffe Meetings &amp;</tspan>
            <tspan x="50" dy="32">  effiziente Prozessabläufe</tspan>
          </text>
        </g>

        <!-- Footer Note -->
        <text x="960" y="960" fill="#64748b" font-family="system-ui, sans-serif" font-size="20" font-weight="500" text-anchor="middle">Arbeitszeit Rechner Pro — Modelle zur 4-Tage-Woche in Deutschland</text>
      </svg>
    `
  },
  {
    name: 'urlaubstage-4-tage-woche-anpassung.jpg',
    svg: `
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg_bright_7" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f8fafc" />
            <stop offset="100%" stop-color="#eff6ff" />
          </linearGradient>
          <filter id="shadow7" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#0f172a" flood-opacity="0.08" />
          </filter>
        </defs>
        <rect width="1920" height="1080" fill="url(#bg_bright_7)" />
        
        <rect x="160" y="80" width="300" height="44" rx="22" fill="#dbeafe" />
        <text x="310" y="109" fill="#1e40af" font-family="system-ui, sans-serif" font-size="20" font-weight="700" text-anchor="middle">URLAUBSBERECHNUNG</text>

        <text x="160" y="175" fill="#0f172a" font-family="system-ui, sans-serif" font-size="52" font-weight="800">Urlaubsanspruch bei der 4-Tage-Woche</text>
        <text x="160" y="225" fill="#475569" font-family="system-ui, sans-serif" font-size="24">Gesetzliche Umrechnungsformel nach dem Bundesurlaubsgesetz (BUrlG)</text>

        <!-- Big Card with Formula and Table -->
        <g transform="translate(160, 270)" filter="url(#shadow7)">
          <rect width="1600" height="580" rx="20" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" />
          
          <!-- Formula Box Top -->
          <rect x="50" y="40" width="1500" height="130" rx="14" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5" />
          <text x="800" y="90" fill="#1e3a8a" font-family="system-ui, sans-serif" font-size="24" font-weight="700" text-anchor="middle">Offizielle Umrechnungsformel nach BAG:</text>
          <text x="800" y="135" fill="#0f172a" font-family="system-ui, sans-serif" font-size="30" font-weight="800" text-anchor="middle">Urlaubstage = (Nominaler Jahresurlaub × 4 Arbeitstage) ÷ 5 Arbeitstage</text>

          <!-- Table Header -->
          <g transform="translate(50, 210)">
            <rect width="1500" height="60" rx="8" fill="#1e3a8a" />
            <text x="50" y="38" fill="#ffffff" font-family="system-ui, sans-serif" font-size="22" font-weight="700">Urlaubsanspruch bei 5 Tagen</text>
            <text x="550" y="38" fill="#ffffff" font-family="system-ui, sans-serif" font-size="22" font-weight="700">Umrechnung auf 4 Tage</text>
            <text x="1050" y="38" fill="#ffffff" font-family="system-ui, sans-serif" font-size="22" font-weight="700">Tatsächliche freie Wochen</text>
          </g>

          <!-- Row 1 -->
          <g transform="translate(50, 280)">
            <rect width="1500" height="65" fill="#f8fafc" stroke="#e2e8f0" />
            <text x="50" y="42" fill="#0f172a" font-family="system-ui, sans-serif" font-size="22" font-weight="700">20 Tage (Gesetzl. Minimum)</text>
            <text x="550" y="42" fill="#2563eb" font-family="system-ui, sans-serif" font-size="24" font-weight="800">16 Urlaubstage</text>
            <text x="1050" y="42" fill="#059669" font-family="system-ui, sans-serif" font-size="22" font-weight="700">= 4 volle Wochen Urlaub</text>
          </g>

          <!-- Row 2 -->
          <g transform="translate(50, 355)">
            <rect width="1500" height="65" fill="#ffffff" stroke="#e2e8f0" />
            <text x="50" y="42" fill="#0f172a" font-family="system-ui, sans-serif" font-size="22" font-weight="700">25 Tage</text>
            <text x="550" y="42" fill="#2563eb" font-family="system-ui, sans-serif" font-size="24" font-weight="800">20 Urlaubstage</text>
            <text x="1050" y="42" fill="#059669" font-family="system-ui, sans-serif" font-size="22" font-weight="700">= 5 volle Wochen Urlaub</text>
          </g>

          <!-- Row 3 -->
          <g transform="translate(50, 430)">
            <rect width="1500" height="65" fill="#f8fafc" stroke="#e2e8f0" />
            <text x="50" y="42" fill="#0f172a" font-family="system-ui, sans-serif" font-size="22" font-weight="700">30 Tage (Standard Tarifvertrag)</text>
            <text x="550" y="42" fill="#2563eb" font-family="system-ui, sans-serif" font-size="24" font-weight="800">24 Urlaubstage</text>
            <text x="1050" y="42" fill="#059669" font-family="system-ui, sans-serif" font-size="22" font-weight="700">= 6 volle Wochen Urlaub</text>
          </g>

          <text x="800" y="535" fill="#64748b" font-family="system-ui, sans-serif" font-size="19" font-weight="600" text-anchor="middle">Wichtig: Obwohl die Zahl der Tage sinkt, bleibt die Gesamtdauer des bezahlten Urlaubs in Wochen exakt gleich!</text>
        </g>

        <!-- Footer Note -->
        <text x="960" y="960" fill="#64748b" font-family="system-ui, sans-serif" font-size="20" font-weight="500" text-anchor="middle">Arbeitszeit Rechner Pro — Urlaubsanspruch &amp; Arbeitszeitmodelle</text>
      </svg>
    `
  }
];

async function generate() {
  for (const img of images) {
    const filePath = path.join(outputDir, img.name);
    const svgBuffer = Buffer.from(img.svg.trim());
    await sharp(svgBuffer, { density: 150 })
      .jpeg({ quality: 92 })
      .toFile(filePath);
    console.log(`Generated bright image: ${img.name}`);
  }
}

generate();
