document.addEventListener("DOMContentLoaded", () => {
  switchTab('itinerary');
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

  if (tabName === 'itinerary') {
    container.innerHTML = `
      <h2 class="font-extrabold text-white text-sm mb-3 flex items-center gap-2"><i data-lucide="calendar" class="w-4 h-4 text-indigo-400"></i> Подневный план поездки</h2>
      <div class="space-y-4">
        ${TRIP_DATA.dailyItinerary.map(d => `
          <div class="glass-card p-4 rounded-2xl border-l-4 border-indigo-500">
            <div class="flex justify-between items-center mb-2">
              <span class="text-[10px] font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 px-2.5 py-0.5 rounded-md border border-indigo-500/30">${d.day} • ${d.date}</span>
              <span class="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded">${d.badge}</span>
            </div>
            <h3 class="font-bold text-white text-base mb-3">${d.title}</h3>
            <div class="space-y-2 border-t border-slate-800/80 pt-2.5">
              ${d.steps.map(s => `
                <div class="flex items-start gap-2.5 text-xs">
                  <span class="font-bold text-indigo-400 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800 flex-shrink-0">${s.time}</span>
                  <span class="text-slate-300 leading-relaxed">${s.text}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (tabName === 'insider') {
    container.innerHTML = `
      <h2 class="font-extrabold text-white text-sm mb-3 flex items-center gap-2"><i data-lucide="book-open" class="w-4 h-4 text-indigo-400"></i> Japan Insider (База знаний)</h2>
      <div class="space-y-3">
        ${TRIP_DATA.insiderGuides.map(g => `
          <div class="glass-card p-4 rounded-2xl">
            <h3 class="font-bold text-white text-sm mb-2 flex items-center gap-2">
              <i data-lucide="${g.icon}" class="w-4 h-4 text-indigo-400"></i> ${g.title}
            </h3>
            <div class="border-t border-slate-800/80 pt-2.5">
              ${g.content}
            </div>
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
