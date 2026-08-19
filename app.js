document.addEventListener("DOMContentLoaded", () => {
  switchTab('timeline');
});

function switchTab(tabName) {
  const container = document.getElementById("app-content");
  
  document.querySelectorAll(".nav-btn").forEach(btn => {
    if (btn.dataset.tab === tabName) {
      btn.classList.add("active-tab");
      btn.classList.remove("text-slate-400");
    } else {
      btn.classList.remove("active-tab");
      btn.classList.add("text-slate-400");
    }
  });

  if (tabName === 'timeline') {
    container.innerHTML = `
      <h2 class="font-extrabold text-white text-sm mb-3 flex items-center gap-2"><i data-lucide="clock" class="w-4 h-4 text-indigo-400"></i> График полетов и транзита</h2>
      <div class="space-y-3">
        ${TRIP_DATA.flights.map((f, i) => `
          <div class="glass-card p-4 rounded-2xl relative overflow-hidden">
            <div class="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-rose-500"></div>
            <div class="flex justify-between items-center mb-1.5">
              <span class="text-[11px] font-bold bg-indigo-500/20 text-indigo-300 px-2.5 py-0.5 rounded-md border border-indigo-500/30">${f.date} • ${f.time}</span>
              <span class="text-[10px] text-slate-500">Этап ${i+1}</span>
            </div>
            <h3 class="font-bold text-white text-sm mt-1">${f.title}</h3>
            <p class="text-xs text-slate-400 mt-1 leading-relaxed">${f.detail}</p>
            ${f.alert ? `<div class="mt-2.5 pt-2 border-t border-slate-800/80 text-[11px] text-rose-300 flex items-center gap-1.5"><i data-lucide="alert-circle" class="w-3.5 h-3.5 flex-shrink-0"></i> ${f.alert}</div>` : ''}
          </div>
        `).join('')}
      </div>
    `;
  } else if (tabName === 'map') {
    container.innerHTML = `
      <h2 class="font-extrabold text-white text-sm mb-3 flex items-center gap-2"><i data-lucide="navigation" class="w-4 h-4 text-indigo-400"></i> Точки возле дома (Ошиаге)</h2>
      <div class="grid gap-3">
        ${TRIP_DATA.places.map(p => `
          <div class="glass-card p-4 rounded-2xl flex justify-between items-start gap-3">
            <div class="space-y-1">
              <div class="flex items-center gap-2">
                <span class="text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-indigo-400 px-2 py-0.5 rounded-md border border-slate-700">${p.category}</span>
                <span class="text-[10px] text-emerald-400 font-bold">${p.dist}</span>
              </div>
              <h3 class="font-bold text-white text-sm">${p.name}</h3>
              <p class="text-xs text-slate-400 leading-relaxed">${p.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (tabName === 'districts') {
    container.innerHTML = `
      <h2 class="font-extrabold text-white text-sm mb-3 flex items-center gap-2"><i data-lucide="building-2" class="w-4 h-4 text-indigo-400"></i> Районы Токио</h2>
      <div class="space-y-4">
        ${TRIP_DATA.districts.map(d => `
          <div class="glass-card p-4 rounded-2xl border-l-4 border-indigo-500">
            <span class="text-[10px] font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-300 px-2.5 py-0.5 rounded-md border border-indigo-500/20">${d.tag}</span>
            <h3 class="font-extrabold text-white text-base mt-2 mb-2">${d.name}</h3>
            
            <div class="space-y-2 text-xs text-slate-300">
              <p><strong class="text-indigo-300">🏛 Архитектура:</strong> ${d.arch}</p>
              <p><strong class="text-emerald-300">📍 Главные места:</strong> ${d.spots}</p>
              <p><strong class="text-amber-300">💡 Тонкости:</strong> ${d.quirks}</p>
              <p><strong class="text-rose-300">✨ Факт:</strong> ${d.funFact}</p>
              <div class="mt-3 pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                <strong>💰 Экономика района:</strong> ${d.prices}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (tabName === 'culture') {
    container.innerHTML = `
      <h2 class="font-extrabold text-white text-sm mb-3 flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4 text-indigo-400"></i> Культура и Традиции</h2>
      <div class="space-y-3">
        ${TRIP_DATA.culture.map(c => `
          <div class="glass-card p-4 rounded-2xl">
            <h3 class="font-bold text-indigo-300 text-sm mb-1.5 flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> ${c.title}
            </h3>
            <p class="text-xs text-slate-300 leading-relaxed">${c.desc}</p>
          </div>
        `).join('')}
      </div>
    `;
  } else if (tabName === 'phrases') {
    container.innerHTML = `
      <h2 class="font-extrabold text-white text-sm mb-3 flex items-center gap-2"><i data-lucide="languages" class="w-4 h-4 text-indigo-400"></i> Разговорник с озвучкой</h2>
      <div class="space-y-2.5">
        ${TRIP_DATA.phrases.map(p => `
          <div class="glass-card p-3.5 rounded-2xl flex justify-between items-center gap-3">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="text-[9px] font-bold uppercase bg-slate-800 text-slate-400 px-2 py-0.5 rounded">${p.tag}</span>
                <span class="text-xs text-slate-400">${p.ru}</span>
              </div>
              <p class="text-sm font-bold text-white">${p.jp}</p>
              <p class="text-[11px] text-indigo-300 font-medium">${p.romaji}</p>
            </div>
            <button onclick="speakJP('${p.jp}')" class="w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 flex items-center justify-center flex-shrink-0 active:scale-95 transition-all">
              <i data-lucide="volume-2" class="w-5 h-5"></i>
            </button>
          </div>
        `).join('')}
      </div>
    `;
  }
  lucide.createIcons();
}

function speakJP(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  }
}