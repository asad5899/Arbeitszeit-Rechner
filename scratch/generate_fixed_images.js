import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const outputDir = path.resolve('public/images/blog');

const images = [
  {
    name: 'ruhezeit-11-stunden-diagramm.jpg',
    svg: `
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg_rz" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f8fafc" />
            <stop offset="100%" stop-color="#eff6ff" />
          </linearGradient>
          <filter id="shadow_rz" x="-5%" y="-5%" width="110%" height="110%">
            <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#0f172a" flood-opacity="0.06" />
          </filter>
        </defs>
        <rect width="1920" height="1080" fill="url(#bg_rz)" />
        
        <!-- Header badge -->
        <rect x="160" y="80" width="290" height="44" rx="22" fill="#dbeafe" />
        <text x="305" y="109" fill="#1e40af" font-family="'Segoe UI', Arial, sans-serif" font-size="20" font-weight="700" text-anchor="middle">GESETZLICHE RUHEZEIT</text>

        <!-- Title & Subtitle -->
        <text x="160" y="175" fill="#0f172a" font-family="'Segoe UI', Arial, sans-serif" font-size="48" font-weight="800">Die 11-Stunden-Ruhezeit nach Schichtende</text>
        <text x="160" y="222" fill="#475569" font-family="'Segoe UI', Arial, sans-serif" font-size="23">Berechnung des frühestmöglichen Arbeitsbeginns bei Nacht- und Wechselschichten (§ 5 ArbZG)</text>

        <!-- Timeline Graphic Box -->
        <g transform="translate(160, 270)" filter="url(#shadow_rz)">
          <rect width="1600" height="630" rx="24" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" />
          
          <!-- Timeline Sequence Row -->
          <!-- 1. Nachtschicht Box -->
          <rect x="60" y="60" width="410" height="120" rx="14" fill="#1d4ed8" />
          <text x="265" y="112" fill="#ffffff" font-family="'Segoe UI', Arial, sans-serif" font-size="24" font-weight="700" text-anchor="middle">Nachtschicht (Arbeitszeit)</text>
          <text x="265" y="148" fill="#dbeafe" font-family="'Segoe UI', Arial, sans-serif" font-size="19" font-weight="500" text-anchor="middle">22:00 Uhr — 06:00 Uhr (8h)</text>
          
          <!-- Marker 1: Schichtende (Clean badge connector - NO RED CIRCLE) -->
          <rect x="495" y="75" width="130" height="90" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
          <text x="560" y="110" fill="#64748b" font-family="'Segoe UI', Arial, sans-serif" font-size="15" font-weight="700" text-anchor="middle">Schichtende</text>
          <text x="560" y="142" fill="#0f172a" font-family="'Segoe UI', Arial, sans-serif" font-size="20" font-weight="800" text-anchor="middle">06:00 Uhr</text>

          <!-- 2. Gesetzliche Ruhezeit Box -->
          <rect x="650" y="60" width="510" height="120" rx="14" fill="#059669" />
          <text x="905" y="110" fill="#ffffff" font-family="'Segoe UI', Arial, sans-serif" font-size="24" font-weight="800" text-anchor="middle">Gesetzliche Ruhezeit: 11 Stunden</text>
          <text x="905" y="146" fill="#d1fae5" font-family="'Segoe UI', Arial, sans-serif" font-size="18" font-weight="500" text-anchor="middle">Ununterbrochene Erholung ohne Anrufe oder Arbeits-E-Mails</text>

          <!-- Marker 2: Frühester Dienstbeginn -->
          <rect x="1185" y="75" width="135" height="90" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
          <text x="1252" y="108" fill="#64748b" font-family="'Segoe UI', Arial, sans-serif" font-size="14" font-weight="700" text-anchor="middle">Frühester Beginn</text>
          <text x="1252" y="142" fill="#0f172a" font-family="'Segoe UI', Arial, sans-serif" font-size="20" font-weight="800" text-anchor="middle">17:00 Uhr</text>

          <!-- 3. Nächste Schicht Box -->
          <rect x="1345" y="60" width="195" height="120" rx="14" fill="#334155" />
          <text x="1442" y="112" fill="#ffffff" font-family="'Segoe UI', Arial, sans-serif" font-size="22" font-weight="700" text-anchor="middle">Nächste Schicht</text>
          <text x="1442" y="148" fill="#cbd5e1" font-family="'Segoe UI', Arial, sans-serif" font-size="17" font-weight="500" text-anchor="middle">ab 17:00 Uhr zulässig</text>

          <!-- Divider line -->
          <line x1="60" y1="225" x2="1540" y2="225" stroke="#f1f5f9" stroke-width="2" />

          <!-- Bottom 3 Key Rules Cards -->
          <!-- Card 1 -->
          <g transform="translate(60, 260)">
            <rect width="465" height="315" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
            <rect x="25" y="25" width="200" height="32" rx="16" fill="#dbeafe" />
            <text x="125" y="47" fill="#1e40af" font-family="'Segoe UI', Arial, sans-serif" font-size="13" font-weight="800" text-anchor="middle">KEINE UNTERBRECHUNG</text>
            <text x="25" y="95" fill="#0f172a" font-family="'Segoe UI', Arial, sans-serif" font-size="22" font-weight="700">Vollständiger Neubeginn</text>
            <text x="25" y="140" fill="#334155" font-family="'Segoe UI', Arial, sans-serif" font-size="17" font-weight="400">
              <tspan x="25" dy="0">• Schon ein kurzer dienstlicher Anruf oder eine</tspan>
              <tspan x="25" dy="32">  E-Mail setzt die 11-Stunden-Frist laut BAG</tspan>
              <tspan x="25" dy="32">  wieder komplett auf null zurück.</tspan>
              <tspan x="25" dy="38">• Die Ruhezeit muss dann vollständig von vorn</tspan>
              <tspan x="25" dy="32">  beginnen, bevor gearbeitet werden darf.</tspan>
            </text>
          </g>

          <!-- Card 2 -->
          <g transform="translate(567, 260)">
            <rect width="465" height="315" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
            <rect x="25" y="25" width="200" height="32" rx="16" fill="#e0f2fe" />
            <text x="125" y="47" fill="#0284c7" font-family="'Segoe UI', Arial, sans-serif" font-size="13" font-weight="800" text-anchor="middle">BRANCHENAUSNAHMEN</text>
            <text x="25" y="95" fill="#0f172a" font-family="'Segoe UI', Arial, sans-serif" font-size="22" font-weight="700">Verkürzung auf 10 Stunden</text>
            <text x="25" y="140" fill="#334155" font-family="'Segoe UI', Arial, sans-serif" font-size="17" font-weight="400">
              <tspan x="25" dy="0">• In Pflege, Krankenhäusern, Gastronomie</tspan>
              <tspan x="25" dy="32">  und Verkehrsbetrieben zulässig (§ 5 ArbZG).</tspan>
              <tspan x="25" dy="38">• Gesetzliche Pflicht: Jede Verkürzung muss</tspan>
              <tspan x="25" dy="32">  binnen 4 Wochen durch Verlängerung</tspan>
              <tspan x="25" dy="32">  auf mindestens 12 Stunden ausgeglichen werden.</tspan>
            </text>
          </g>

          <!-- Card 3 -->
          <g transform="translate(1075, 260)">
            <rect width="465" height="315" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
            <rect x="25" y="25" width="200" height="32" rx="16" fill="#fee2e2" />
            <text x="125" y="47" fill="#b91c1c" font-family="'Segoe UI', Arial, sans-serif" font-size="13" font-weight="800" text-anchor="middle">BUSSGELDER &amp; HAFTUNG</text>
            <text x="25" y="95" fill="#0f172a" font-family="'Segoe UI', Arial, sans-serif" font-size="22" font-weight="700">Bis zu 30.000 € Strafe</text>
            <text x="25" y="140" fill="#334155" font-family="'Segoe UI', Arial, sans-serif" font-size="17" font-weight="400">
              <tspan x="25" dy="0">• Die Missachtung der Ruhezeit ist eine schwere</tspan>
              <tspan x="25" dy="32">  Ordnungswidrigkeit nach § 22 ArbZG.</tspan>
              <tspan x="25" dy="38">• Bußgeld von bis zu 30.000 € pro Verstoß.</tspan>
              <tspan x="25" dy="38">• Bei vorsätzlicher Gesundheitsgefährdung</tspan>
              <tspan x="25" dy="32">  drohen strafrechtliche Konsequenzen.</tspan>
            </text>
          </g>
        </g>

        <!-- Footer Note -->
        <text x="960" y="965" fill="#64748b" font-family="'Segoe UI', Arial, sans-serif" font-size="20" font-weight="500" text-anchor="middle">Arbeitszeit Rechner Pro — Gesetzliche Pausen- &amp; Ruhezeiten (§ 5 ArbZG)</text>
      </svg>
    `
  },
  {
    name: 'betriebsrat-rechtsberatung-kontakt.jpg',
    svg: `
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg_br" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f8fafc" />
            <stop offset="100%" stop-color="#eff6ff" />
          </linearGradient>
          <filter id="shadow_br" x="-5%" y="-5%" width="110%" height="110%">
            <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#0f172a" flood-opacity="0.06" />
          </filter>
        </defs>
        <rect width="1920" height="1080" fill="url(#bg_br)" />
        
        <rect x="160" y="80" width="310" height="44" rx="22" fill="#dbeafe" />
        <text x="315" y="109" fill="#1e40af" font-family="'Segoe UI', Arial, sans-serif" font-size="20" font-weight="700" text-anchor="middle">RECHTLICHE HILFE &amp; RAT</text>

        <text x="160" y="175" fill="#0f172a" font-family="'Segoe UI', Arial, sans-serif" font-size="48" font-weight="800">Anlaufstellen &amp; Unterstützung für Beschäftigte</text>
        <text x="160" y="222" fill="#475569" font-family="'Segoe UI', Arial, sans-serif" font-size="23">Wo Arbeitnehmer bei fehlender Zeiterfassung und Überstundenkonflikten Hilfe finden</text>

        <!-- Two Big Split Comparison Cards -->
        <!-- Card 1: Betriebsrat -->
        <g transform="translate(160, 270)" filter="url(#shadow_br)">
          <rect width="775" height="630" rx="22" fill="#ffffff" stroke="#bfdbfe" stroke-width="2" />
          
          <rect x="40" y="35" width="695" height="68" rx="12" fill="#eff6ff" />
          <text x="65" y="78" fill="#1e40af" font-family="'Segoe UI', Arial, sans-serif" font-size="27" font-weight="800">1. Der Betriebsrat (§ 87 BetrVG)</text>
          
          <text x="55" y="160" fill="#334155" font-family="'Segoe UI', Arial, sans-serif" font-size="20">
            <tspan x="55" dy="0">• Hat echtes Initiativrecht zur Einführung von Zeiterfassung</tspan>
            <tspan x="55" dy="48">• Schützt Beschäftigte vor Benachteiligung durch Anonymität</tspan>
            <tspan x="55" dy="48">• Verhandelt verbindliche Betriebsvereinbarungen über Arbeitszeiten</tspan>
            <tspan x="55" dy="48">• Überwacht die lückenlose Einhaltung des Arbeitszeitgesetzes</tspan>
            <tspan x="55" dy="48">• Erste kostenfreie und vertrauliche Anlaufstelle im Betrieb</tspan>
            <tspan x="55" dy="48">• Kann Einigungsstelle bei Uneinigkeit anrufen</tspan>
          </text>
          
          <rect x="40" y="525" width="695" height="65" rx="12" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
          <text x="387" y="565" fill="#15803d" font-family="'Segoe UI', Arial, sans-serif" font-size="20" font-weight="700" text-anchor="middle">✓ Kostenlos, betriebsintern &amp; mit gesetzlicher Mitbestimmung</text>
        </g>

        <!-- Card 2: Anwalt & Gewerkschaft -->
        <g transform="translate(985, 270)" filter="url(#shadow_br)">
          <rect width="775" height="630" rx="22" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" />
          
          <rect x="40" y="35" width="695" height="68" rx="12" fill="#f8fafc" />
          <text x="65" y="78" fill="#0f172a" font-family="'Segoe UI', Arial, sans-serif" font-size="27" font-weight="800">2. Fachanwalt &amp; Gewerkschaft</text>
          
          <text x="55" y="160" fill="#334155" font-family="'Segoe UI', Arial, sans-serif" font-size="20">
            <tspan x="55" dy="0">• Prüfung vertraglicher Ausschlussfristen (oft 3 Monate Verfall!)</tspan>
            <tspan x="55" dy="48">• Gerichtliche Durchsetzung ausstehender Überstundenvergütung</tspan>
            <tspan x="55" dy="48">• Rechtliche Berechnung von Zinsentschädigung und Nachzahlungen</tspan>
            <tspan x="55" dy="48">• Kostenfreie Rechtsberatung und Vertretung für Gewerkschaftsmitglieder</tspan>
            <tspan x="55" dy="48">• Rechtsschutzversicherung übernimmt meist alle Anwaltskosten</tspan>
            <tspan x="55" dy="48">• Formulierung rechtssicherer Geltendmachungsschreiben</tspan>
          </text>
          
          <rect x="40" y="525" width="695" height="65" rx="12" fill="#f0f9ff" stroke="#93c5fd" stroke-width="1.5" />
          <text x="387" y="565" fill="#0369a1" font-family="'Segoe UI', Arial, sans-serif" font-size="20" font-weight="700" text-anchor="middle">✓ Individuelle Rechtsdurchsetzung vor dem Arbeitsgericht</text>
        </g>

        <!-- Footer Note -->
        <text x="960" y="965" fill="#64748b" font-family="'Segoe UI', Arial, sans-serif" font-size="20" font-weight="500" text-anchor="middle">Arbeitszeit Rechner Pro — Sektion Arbeitsrecht &amp; Mitarbeiterrechte</text>
      </svg>
    `
  },
  {
    name: 'beweismittel-hierarchie-gericht.jpg',
    svg: `
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg_bw" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f8fafc" />
            <stop offset="100%" stop-color="#eff6ff" />
          </linearGradient>
          <filter id="shadow_bw" x="-5%" y="-5%" width="110%" height="110%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#0f172a" flood-opacity="0.05" />
          </filter>
        </defs>
        <rect width="1920" height="1080" fill="url(#bg_bw)" />
        
        <rect x="160" y="75" width="340" height="44" rx="22" fill="#dbeafe" />
        <text x="330" y="104" fill="#1e40af" font-family="'Segoe UI', Arial, sans-serif" font-size="20" font-weight="700" text-anchor="middle">BEWEISFÜHRUNG ARBEITSRECHT</text>
        
        <text x="160" y="170" fill="#0f172a" font-family="'Segoe UI', Arial, sans-serif" font-size="48" font-weight="800">Hierarchie der Beweismittel vor dem Arbeitsgericht</text>
        <text x="160" y="218" fill="#475569" font-family="'Segoe UI', Arial, sans-serif" font-size="23">Welche Nachweise im Streitfall über Überstunden die stärkste Beweiskraft entfalten</text>

        <!-- Tier 1 -->
        <g transform="translate(160, 260)" filter="url(#shadow_bw)">
          <rect width="1600" height="140" rx="16" fill="#ffffff" stroke="#3b82f6" stroke-width="2" />
          <circle cx="70" cy="70" r="38" fill="#2563eb" />
          <text x="70" y="81" fill="#ffffff" font-family="'Segoe UI', Arial, sans-serif" font-size="30" font-weight="800" text-anchor="middle">1</text>
          
          <text x="140" y="58" fill="#1e40af" font-family="'Segoe UI', Arial, sans-serif" font-size="26" font-weight="700">Elektronische Zeiterfassung &amp; Systemlogs</text>
          <text x="140" y="98" fill="#475569" font-family="'Segoe UI', Arial, sans-serif" font-size="20">Objektive, manipulationssichere Stechuhren, Terminal-Badges &amp; Server-Login-Protokolle</text>
          
          <rect x="1320" y="46" width="240" height="48" rx="24" fill="#dbeafe" />
          <text x="1440" y="77" fill="#1e40af" font-family="'Segoe UI', Arial, sans-serif" font-size="18" font-weight="700" text-anchor="middle">★ Höchste Beweiskraft</text>
        </g>

        <!-- Tier 2 -->
        <g transform="translate(160, 425)" filter="url(#shadow_bw)">
          <rect width="1600" height="140" rx="16" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
          <circle cx="70" cy="70" r="38" fill="#0284c7" />
          <text x="70" y="81" fill="#ffffff" font-family="'Segoe UI', Arial, sans-serif" font-size="30" font-weight="800" text-anchor="middle">2</text>
          
          <text x="140" y="58" fill="#0f172a" font-family="'Segoe UI', Arial, sans-serif" font-size="26" font-weight="700">Digitale Zeitstempel &amp; Aktivitätsnachweise</text>
          <text x="140" y="98" fill="#475569" font-family="'Segoe UI', Arial, sans-serif" font-size="20">Versendete E-Mails am Tagesrand, Kalendereinladungen, Ticket-Bearbeitungen &amp; CRM-Logs</text>
          
          <rect x="1320" y="46" width="240" height="48" rx="24" fill="#e0f2fe" />
          <text x="1440" y="77" fill="#0369a1" font-family="'Segoe UI', Arial, sans-serif" font-size="18" font-weight="700" text-anchor="middle">Sehr hohe Relevanz</text>
        </g>

        <!-- Tier 3 -->
        <g transform="translate(160, 590)" filter="url(#shadow_bw)">
          <rect width="1600" height="140" rx="16" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
          <circle cx="70" cy="70" r="38" fill="#475569" />
          <text x="70" y="81" fill="#ffffff" font-family="'Segoe UI', Arial, sans-serif" font-size="30" font-weight="800" text-anchor="middle">3</text>
          
          <text x="140" y="58" fill="#0f172a" font-family="'Segoe UI', Arial, sans-serif" font-size="26" font-weight="700">Dienstpläne &amp; Zeugenaussagen von Kollegen</text>
          <text x="140" y="98" fill="#475569" font-family="'Segoe UI', Arial, sans-serif" font-size="20">Offizielle Schichtpläne, Zuweisungen durch Vorgesetzte und Bestätigung anwesender Kollegen</text>
          
          <rect x="1320" y="46" width="240" height="48" rx="24" fill="#f1f5f9" stroke="#e2e8f0" />
          <text x="1440" y="77" fill="#475569" font-family="'Segoe UI', Arial, sans-serif" font-size="18" font-weight="700" text-anchor="middle">Stützende Beweise</text>
        </g>

        <!-- Tier 4 -->
        <g transform="translate(160, 755)" filter="url(#shadow_bw)">
          <rect width="1600" height="140" rx="16" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
          <circle cx="70" cy="70" r="38" fill="#64748b" />
          <text x="70" y="81" fill="#ffffff" font-family="'Segoe UI', Arial, sans-serif" font-size="30" font-weight="800" text-anchor="middle">4</text>
          
          <text x="140" y="58" fill="#0f172a" font-family="'Segoe UI', Arial, sans-serif" font-size="26" font-weight="700">Eigene Notizen &amp; handschriftliche Stundenzettel</text>
          <text x="140" y="98" fill="#475569" font-family="'Segoe UI', Arial, sans-serif" font-size="20">Lückenlos und zeitnah geführte Eigenaufzeichnungen als Grundlage zur schlüssigen Darlegung</text>
          
          <rect x="1320" y="46" width="240" height="48" rx="24" fill="#f8fafc" stroke="#e2e8f0" />
          <text x="1440" y="77" fill="#64748b" font-family="'Segoe UI', Arial, sans-serif" font-size="18" font-weight="700" text-anchor="middle">Darlegungsgrundlage</text>
        </g>

        <!-- Footer Note -->
        <text x="960" y="965" fill="#64748b" font-family="'Segoe UI', Arial, sans-serif" font-size="20" font-weight="500" text-anchor="middle">Arbeitszeit Rechner Pro — Ratgeber Arbeitsrecht &amp; Zeiterfassungspflicht</text>
      </svg>
    `
  },
  {
    name: 'urlaubstage-4-tage-woche-anpassung.jpg',
    svg: `
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg_ur" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f8fafc" />
            <stop offset="100%" stop-color="#eff6ff" />
          </linearGradient>
          <filter id="shadow_ur" x="-5%" y="-5%" width="110%" height="110%">
            <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#0f172a" flood-opacity="0.06" />
          </filter>
        </defs>
        <rect width="1920" height="1080" fill="url(#bg_ur)" />
        
        <rect x="160" y="75" width="270" height="44" rx="22" fill="#dbeafe" />
        <text x="295" y="104" fill="#1e40af" font-family="'Segoe UI', Arial, sans-serif" font-size="20" font-weight="700" text-anchor="middle">URLAUBSBERECHNUNG</text>

        <text x="160" y="170" fill="#0f172a" font-family="'Segoe UI', Arial, sans-serif" font-size="48" font-weight="800">Urlaubsanspruch bei der 4-Tage-Woche</text>
        <text x="160" y="218" fill="#475569" font-family="'Segoe UI', Arial, sans-serif" font-size="23">Gesetzliche Umrechnungsformel nach dem Bundesurlaubsgesetz (BUrlG)</text>

        <!-- Big Card Container -->
        <g transform="translate(160, 260)" filter="url(#shadow_ur)">
          <rect width="1600" height="645" rx="22" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" />
          
          <!-- Formula Box Top -->
          <rect x="50" y="35" width="1500" height="120" rx="14" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5" />
          <text x="800" y="75" fill="#1e40af" font-family="'Segoe UI', Arial, sans-serif" font-size="19" font-weight="700" text-anchor="middle">Offizielle Umrechnungsformel nach dem Bundesarbeitsgericht (BAG):</text>
          <text x="800" y="120" fill="#0f172a" font-family="'Segoe UI', Arial, sans-serif" font-size="27" font-weight="800" text-anchor="middle">Urlaubstage = (Nominaler Jahresurlaub × 4 Arbeitstage) ÷ 5 Arbeitstage</text>

          <!-- Table Header -->
          <rect x="50" y="185" width="1500" height="65" rx="10" fill="#1e3a8a" />
          <text x="110" y="226" fill="#ffffff" font-family="'Segoe UI', Arial, sans-serif" font-size="21" font-weight="700">Urlaubsanspruch bei 5 Tagen</text>
          <text x="630" y="226" fill="#ffffff" font-family="'Segoe UI', Arial, sans-serif" font-size="21" font-weight="700">Umrechnung auf 4-Tage-Woche</text>
          <text x="1120" y="226" fill="#ffffff" font-family="'Segoe UI', Arial, sans-serif" font-size="21" font-weight="700">Tatsächliche freie Wochen</text>

          <!-- Table Row 1 -->
          <rect x="50" y="265" width="1500" height="72" rx="8" fill="#f8fafc" stroke="#e2e8f0" />
          <text x="110" y="310" fill="#334155" font-family="'Segoe UI', Arial, sans-serif" font-size="21" font-weight="600">20 Tage (Gesetzliches Minimum)</text>
          <text x="630" y="310" fill="#2563eb" font-family="'Segoe UI', Arial, sans-serif" font-size="23" font-weight="800">16 Urlaubstage</text>
          <text x="1120" y="310" fill="#15803d" font-family="'Segoe UI', Arial, sans-serif" font-size="21" font-weight="700">= 4 volle Wochen Urlaub</text>

          <!-- Table Row 2 -->
          <rect x="50" y="352" width="1500" height="72" rx="8" fill="#ffffff" stroke="#e2e8f0" />
          <text x="110" y="397" fill="#334155" font-family="'Segoe UI', Arial, sans-serif" font-size="21" font-weight="600">25 Tage</text>
          <text x="630" y="397" fill="#2563eb" font-family="'Segoe UI', Arial, sans-serif" font-size="23" font-weight="800">20 Urlaubstage</text>
          <text x="1120" y="397" fill="#15803d" font-family="'Segoe UI', Arial, sans-serif" font-size="21" font-weight="700">= 5 volle Wochen Urlaub</text>

          <!-- Table Row 3 -->
          <rect x="50" y="439" width="1500" height="72" rx="8" fill="#f8fafc" stroke="#e2e8f0" />
          <text x="110" y="484" fill="#334155" font-family="'Segoe UI', Arial, sans-serif" font-size="21" font-weight="600">30 Tage (Standard Tarifvertrag)</text>
          <text x="630" y="484" fill="#2563eb" font-family="'Segoe UI', Arial, sans-serif" font-size="23" font-weight="800">24 Urlaubstage</text>
          <text x="1120" y="484" fill="#15803d" font-family="'Segoe UI', Arial, sans-serif" font-size="21" font-weight="700">= 6 volle Wochen Urlaub</text>

          <!-- Bottom Notice -->
          <rect x="50" y="535" width="1500" height="75" rx="10" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
          <text x="800" y="580" fill="#166534" font-family="'Segoe UI', Arial, sans-serif" font-size="20" font-weight="700" text-anchor="middle">✓ Wichtig: Obwohl die Zahl der Tage sinkt, bleibt die Gesamtdauer des bezahlten Urlaubs in Wochen exakt gleich!</text>
        </g>

        <!-- Footer Note -->
        <text x="960" y="965" fill="#64748b" font-family="'Segoe UI', Arial, sans-serif" font-size="20" font-weight="500" text-anchor="middle">Arbeitszeit Rechner Pro — Urlaubsanspruch &amp; Arbeitszeitmodelle</text>
      </svg>
    `
  }
];

async function run() {
  console.log('Generating pixel-perfect, German labor law infographic images...');
  for (const item of images) {
    const dest = path.join(outputDir, item.name);
    const buf = Buffer.from(item.svg);
    await sharp(buf, { density: 150 })
      .jpeg({ quality: 94, chromaSubsampling: '4:4:4' })
      .toFile(dest);
    console.log(`✓ Generated ${item.name}`);
  }
  console.log('All images updated successfully!');
}

run().catch(err => {
  console.error('Generation failed:', err);
  process.exit(1);
});
