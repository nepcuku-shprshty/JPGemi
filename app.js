document.addEventListener("DOMContentLoaded", () => {
  switchTab('itinerary');
});

function switchTab(tabName) {
  const container = document.getElementById("app-content");
  
  // Обновление активных кнопок
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`btn-${tabName}`);
  if (activeBtn) activeBtn.classList.add('active');

  if (tabName === 'itinerary') {
    container.innerHTML = `
      <h2 style="font-size: 14px; color: #818cf8; margin-bottom: 12px; font-weight: 700;">Подневный план поездки</h2>
      ${TRIP_DATA.dailyItinerary.map(d => `
        <div class="card">
          <div class="card-meta">${d.day} • ${d.date} (${d.badge})</div>
          <div class="card-title">${d.title}</div>
          <div style="border-top: 1px solid #334155; padding-top: 8px;">
            ${d.steps.map(s => `
              <div class="step-item">
                <span class="step-time">${s.time}</span>
                <span>${s.text}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    `;
  } else if (tabName === 'insider') {
    container.innerHTML = `
      <h2 style="font-size: 14px; color: #818cf8; margin-bottom: 12px; font-weight: 700;">Japan Insider (База знаний)</h2>
      ${TRIP_DATA.insiderGuides.map(g => `
        <div class="card">
          <div class="card-title">${g.title}</div>
          <div style="font-size: 12px; color: #cbd5e1; line-height: 1.5;">${g.content}</div>
        </div>
      `).join('')}
    `;
  } else if (tabName === 'phrases') {
    container.innerHTML = `
      <h2 style="font-size: 14px; color: #818cf8; margin-bottom: 12px; font-weight: 700;">Разговорник с озвучкой</h2>
      ${TRIP_DATA.phrases.map(p => `
        <div class="card" style="display: flex; justify-between; align-items: center; gap: 10px;">
          <div style="flex: 1;">
            <div style="font-size: 10px; color: #94a3b8; text-transform: uppercase; font-weight: bold;">${p.tag} • ${p.ru}</div>
            <div style="font-size: 15px; font-weight: bold; color: #fff; margin: 2px 0;">${p.jp}</div>
            <div style="font-size: 11px; color: #818cf8;">${p.romaji}</div>
          </div>
          <button onclick="speakJP('${p.jp}')" class="btn-speak">🔊</button>
        </div>
      `).join('')}
    `;
  }
}

function speakJP(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  } else {
    alert('Озвучка не поддерживается вашим браузером');
  }
}