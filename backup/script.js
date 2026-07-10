/* ============================================================
   ARBEITSZEIT RECHNER — Corporate Enterprise Logic
   ============================================================
   • Real-time calculation
   • Weekly overview table with save/delete
   • Bar chart visualization
   • Format toggle (HH:MM / Dezimal)
   • Copy & reset
   • LocalStorage persistence for weekly entries
   ============================================================ */

(function () {
  'use strict';

  // ── DOM ──────────────────────────────────────────────────────
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  const dom = {
    inputDate: $('#input-date'),
    inputStart: $('#input-start'),
    inputEnd: $('#input-end'),
    inputTarget: $('#input-target'),
    breaksContainer: $('#breaks-container'),
    btnAddBreak: $('#btn-add-break'),
    btnSave: $('#btn-save'),
    btnCopy: $('#btn-copy'),
    btnReset: $('#btn-reset'),

    rGross: $('#r-gross'),
    rBreaks: $('#r-breaks'),
    rNet: $('#r-net'),
    rOvertime: $('#r-overtime'),
    overtimeRow: $('#overtime-row'),

    chartContainer: $('#chart-container'),

    weeklyBody: $('#weekly-body'),
    totalGross: $('#total-gross'),
    totalBreaks: $('#total-breaks'),
    totalNet: $('#total-net'),
    totalOvertime: $('#total-overtime'),

    hintDate: $('#hint-date'),
    hintDateText: $('#hint-date-text'),

    toast: $('#toast'),
    toastMsg: $('#toast-msg'),
  };

  // ── State ────────────────────────────────────────────────────
  let format = 'hhmm';
  let breakCounter = 1;
  let lastResult = null;

  // Weekly entries stored in localStorage
  const STORAGE_KEY = 'az_weekly';

  function loadEntries() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch { return []; }
  }

  function saveEntries(entries) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }

  // ── Utilities ────────────────────────────────────────────────

  const DAYS_DE = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
  const DAYS_SHORT = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];

  function parseTime(str) {
    if (!str) return null;
    const [h, m] = str.split(':').map(Number);
    return isNaN(h) || isNaN(m) ? null : h * 60 + m;
  }

  function fmtHHMM(mins) {
    if (mins === null || isNaN(mins)) return '—';
    const sign = mins < 0 ? '-' : '';
    const a = Math.abs(Math.round(mins));
    return `${sign}${String(Math.floor(a / 60)).padStart(2, '0')}:${String(a % 60).padStart(2, '0')}`;
  }

  function fmtDecimal(mins) {
    if (mins === null || isNaN(mins)) return '—';
    const sign = mins < 0 ? '-' : '';
    return `${sign}${(Math.abs(mins) / 60).toFixed(2)}`;
  }

  function fmtVal(mins) {
    return format === 'decimal' ? fmtDecimal(mins) : fmtHHMM(mins);
  }

  function fmtOvertime(mins) {
    if (mins === null || isNaN(mins)) return '—';
    const sign = mins > 0 ? '+' : '';
    return sign + fmtVal(mins);
  }

  function fmtDate(dateStr) {
    if (!dateStr) return '—';
    const [y, m, d] = dateStr.split('-');
    return `${d}.${m}.${y}`;
  }

  function getDayName(dateStr) {
    if (!dateStr) return '—';
    const d = new Date(dateStr);
    return isNaN(d) ? '—' : DAYS_DE[d.getDay()];
  }

  function getDayShort(dateStr) {
    if (!dateStr) return '—';
    const d = new Date(dateStr);
    return isNaN(d) ? '—' : DAYS_SHORT[d.getDay()];
  }

  // ── Set today's date ─────────────────────────────────────────

  function setToday() {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    dom.inputDate.value = `${yyyy}-${mm}-${dd}`;
    updateDateHint();
  }

  function updateDateHint() {
    const val = dom.inputDate.value;
    if (!val) {
      dom.hintDateText.textContent = '';
      return;
    }
    const dayName = getDayName(val);
    dom.hintDateText.textContent = `${dayName}, ${fmtDate(val)}`;
  }


  // ── Core Calculation ─────────────────────────────────────────

  function calculate() {
    const startMin = parseTime(dom.inputStart.value);
    const endMin = parseTime(dom.inputEnd.value);

    if (startMin === null || endMin === null) {
      clearResults();
      return;
    }

    let grossMinutes = endMin - startMin;
    if (grossMinutes < 0) grossMinutes += 24 * 60;

    const breakInputs = dom.breaksContainer.querySelectorAll('.break-input');
    let totalBreaks = 0;
    breakInputs.forEach((input) => {
      const v = parseInt(input.value, 10);
      if (!isNaN(v) && v > 0) totalBreaks += v;
    });

    const netMinutes = Math.max(0, grossMinutes - totalBreaks);
    const targetHours = parseFloat(dom.inputTarget.value) || 8;
    const targetMinutes = targetHours * 60;
    const overtime = netMinutes - targetMinutes;

    lastResult = {
      date: dom.inputDate.value,
      start: dom.inputStart.value,
      end: dom.inputEnd.value,
      gross: grossMinutes,
      breaks: totalBreaks,
      net: netMinutes,
      overtime: overtime,
      targetHours: targetHours,
    };

    updateDisplay();
  }

  function clearResults() {
    dom.rGross.textContent = '—';
    dom.rBreaks.textContent = '—';
    dom.rNet.textContent = '—';
    dom.rOvertime.textContent = '—';
    dom.overtimeRow.classList.remove('overtime-pos', 'overtime-neg');
    lastResult = null;
  }

  function updateDisplay() {
    if (!lastResult) return;
    const { gross, breaks, net, overtime } = lastResult;

    dom.rGross.textContent = fmtVal(gross);
    dom.rBreaks.textContent = fmtVal(breaks);
    dom.rNet.textContent = fmtVal(net);
    dom.rOvertime.textContent = fmtOvertime(overtime);

    dom.overtimeRow.classList.remove('overtime-pos', 'overtime-neg');
    if (overtime > 0) dom.overtimeRow.classList.add('overtime-pos');
    else if (overtime < 0) dom.overtimeRow.classList.add('overtime-neg');
  }


  // ── Break Management ─────────────────────────────────────────

  function addBreak() {
    breakCounter++;
    const entry = document.createElement('div');
    entry.className = 'break-entry';
    entry.innerHTML = `
      <input type="number" class="form-input break-input" value="15" min="0" max="480" step="5"
             aria-label="Pause ${breakCounter} in Minuten" placeholder="Minuten">
      <span class="break-unit">Min.</span>
      <button class="btn-remove-break" type="button" aria-label="Pause entfernen" title="Entfernen">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
      </button>
    `;
    dom.breaksContainer.appendChild(entry);

    entry.querySelector('.btn-remove-break').addEventListener('click', () => {
      entry.style.opacity = '0';
      entry.style.transform = 'translateX(-8px)';
      setTimeout(() => { entry.remove(); calculate(); }, 180);
    });
    entry.querySelector('.break-input').addEventListener('input', calculate);
    calculate();
  }


  // ── Weekly Table ─────────────────────────────────────────────

  function saveToWeekly() {
    if (!lastResult || !lastResult.date) {
      showToast('Bitte ein Datum auswählen');
      return;
    }
    const entries = loadEntries();

    // Check if date already exists → replace
    const idx = entries.findIndex((e) => e.date === lastResult.date);
    const entry = {
      date: lastResult.date,
      start: lastResult.start,
      end: lastResult.end,
      gross: lastResult.gross,
      breaks: lastResult.breaks,
      net: lastResult.net,
      overtime: lastResult.overtime,
      targetHours: lastResult.targetHours,
    };

    if (idx >= 0) {
      entries[idx] = entry;
    } else {
      entries.push(entry);
    }

    // Sort by date descending
    entries.sort((a, b) => b.date.localeCompare(a.date));

    // Keep max 14 entries
    if (entries.length > 14) entries.length = 14;

    saveEntries(entries);
    renderWeekly();
    renderChart();
    showToast('Gespeichert');
  }

  function deleteEntry(date) {
    let entries = loadEntries();
    entries = entries.filter((e) => e.date !== date);
    saveEntries(entries);
    renderWeekly();
    renderChart();
  }

  function renderWeekly() {
    const entries = loadEntries();
    dom.weeklyBody.innerHTML = '';

    if (entries.length === 0) {
      dom.weeklyBody.innerHTML = `
        <tr>
          <td colspan="8" style="text-align:center; color:var(--gray-400); padding:var(--sp-8);">
            Noch keine Einträge. Berechne deine Arbeitszeit und klicke „Zur Wochenübersicht hinzufügen".
          </td>
        </tr>
      `;
      dom.totalGross.textContent = '—';
      dom.totalBreaks.textContent = '—';
      dom.totalNet.textContent = '—';
      dom.totalOvertime.textContent = '—';
      return;
    }

    let sumGross = 0, sumBreaks = 0, sumNet = 0, sumOvertime = 0;

    entries.forEach((e) => {
      sumGross += e.gross || 0;
      sumBreaks += e.breaks || 0;
      sumNet += e.net || 0;
      sumOvertime += e.overtime || 0;

      const isToday = e.date === dom.inputDate.value;
      const statusClass = isToday ? 'current' : 'saved';
      const statusText = isToday ? 'Aktuell' : 'Gespeichert';

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${getDayName(e.date)}</td>
        <td>${fmtDate(e.date)}</td>
        <td>${fmtVal(e.gross)}</td>
        <td>${fmtVal(e.breaks)}</td>
        <td><strong>${fmtVal(e.net)}</strong></td>
        <td>${fmtOvertime(e.overtime)}</td>
        <td><span class="status-badge ${statusClass}">${statusText}</span></td>
        <td>
          <button class="btn-delete-row" data-date="${e.date}" aria-label="Eintrag löschen" title="Löschen">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
          </button>
        </td>
      `;
      dom.weeklyBody.appendChild(tr);
    });

    // Totals
    dom.totalGross.textContent = fmtVal(sumGross);
    dom.totalBreaks.textContent = fmtVal(sumBreaks);
    dom.totalNet.textContent = fmtVal(sumNet);
    dom.totalOvertime.textContent = fmtOvertime(sumOvertime);

    // Bind delete buttons
    dom.weeklyBody.querySelectorAll('.btn-delete-row').forEach((btn) => {
      btn.addEventListener('click', () => deleteEntry(btn.dataset.date));
    });
  }


  // ── Bar Chart ────────────────────────────────────────────────

  function renderChart() {
    dom.chartContainer.innerHTML = '';
    const entries = loadEntries();

    // Take last 7 entries (most recent) and reverse for left-to-right chronological
    const recent = entries.slice(0, 7).reverse();

    if (recent.length === 0) {
      // Show placeholder bars
      const days = ['Mo', 'Di', 'Mi', 'Do', 'Fr'];
      days.forEach((d) => {
        const group = document.createElement('div');
        group.className = 'chart-bar-group';
        group.innerHTML = `
          <div class="chart-bar ist" style="height:0px;"></div>
          <div class="chart-bar soll" style="height:0px;"></div>
          <div class="chart-bar-label">${d}</div>
        `;
        dom.chartContainer.appendChild(group);
      });
      return;
    }

    // Find max for scaling
    const maxVal = Math.max(
      ...recent.map((e) => Math.max(e.net || 0, (e.targetHours || 8) * 60)),
      1
    );
    const chartH = 88; // px

    recent.forEach((e) => {
      const istH = Math.max(4, ((e.net || 0) / maxVal) * chartH);
      const sollH = Math.max(4, (((e.targetHours || 8) * 60) / maxVal) * chartH);
      const group = document.createElement('div');
      group.className = 'chart-bar-group';
      group.innerHTML = `
        <div class="chart-bar ist" style="height:${istH}px;" title="${fmtHHMM(e.net)} Ist"></div>
        <div class="chart-bar soll" style="height:${sollH}px;" title="${fmtHHMM((e.targetHours || 8) * 60)} Soll"></div>
        <div class="chart-bar-label">${getDayShort(e.date)}</div>
      `;
      dom.chartContainer.appendChild(group);
    });
  }


  // ── Format Toggle ────────────────────────────────────────────

  function setFormat(newFmt) {
    format = newFmt;
    $$('.fmt-btn').forEach((b) => {
      const active = b.dataset.format === newFmt;
      b.classList.toggle('active', active);
      b.setAttribute('aria-checked', active);
    });
    updateDisplay();
    renderWeekly();
    renderChart();
  }


  // ── Reset ────────────────────────────────────────────────────

  function resetForm() {
    dom.inputStart.value = '08:00';
    dom.inputEnd.value = '17:00';
    dom.inputTarget.value = '8';
    dom.breaksContainer.innerHTML = `
      <div class="break-entry" data-break-index="0">
        <input type="number" class="form-input break-input" value="30" min="0" max="480" step="5"
               aria-label="Pause 1 in Minuten" placeholder="Minuten">
        <span class="break-unit">Min.</span>
      </div>
    `;
    breakCounter = 1;
    dom.breaksContainer.querySelector('.break-input').addEventListener('input', calculate);
    setToday();
    calculate();
    showToast('Zurückgesetzt');
  }


  // ── Copy ─────────────────────────────────────────────────────

  async function copyResult() {
    if (!lastResult) return;
    const r = lastResult;
    const text = [
      `Arbeitszeit — ${getDayName(r.date)}, ${fmtDate(r.date)}`,
      `Beginn: ${r.start}  |  Ende: ${r.end}`,
      `Brutto: ${fmtHHMM(r.gross)}  |  Pause: ${fmtHHMM(r.breaks)}`,
      `Netto:  ${fmtHHMM(r.net)} (${fmtDecimal(r.net)} Std)`,
      `Überst: ${fmtOvertime(r.overtime)}`,
    ].join('\n');

    try {
      await navigator.clipboard.writeText(text);
      showToast('Ergebnis kopiert!');
      dom.btnCopy.classList.add('copied');
      setTimeout(() => dom.btnCopy.classList.remove('copied'), 1500);
    } catch {
      showToast('Kopieren fehlgeschlagen');
    }
  }


  // ── Toast ────────────────────────────────────────────────────

  let toastTimer = null;
  function showToast(msg) {
    dom.toastMsg.textContent = msg;
    dom.toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => dom.toast.classList.remove('show'), 2200);
  }


  // ── Init ─────────────────────────────────────────────────────

  function init() {
    setToday();

    // Real-time calc
    dom.inputStart.addEventListener('input', calculate);
    dom.inputEnd.addEventListener('input', calculate);
    dom.inputTarget.addEventListener('input', calculate);
    dom.inputDate.addEventListener('input', updateDateHint);
    dom.breaksContainer.querySelectorAll('.break-input').forEach((i) => {
      i.addEventListener('input', calculate);
    });

    dom.btnAddBreak.addEventListener('click', addBreak);
    dom.btnSave.addEventListener('click', saveToWeekly);
    dom.btnCopy.addEventListener('click', copyResult);
    dom.btnReset.addEventListener('click', resetForm);

    // Format toggle
    $$('.fmt-btn').forEach((b) => {
      b.addEventListener('click', () => setFormat(b.dataset.format));
    });

    // Keyboard shortcut
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        copyResult();
      }
    });

    // Initial render
    calculate();
    renderWeekly();
    renderChart();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
