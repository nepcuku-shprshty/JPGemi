const TRIP_DATA = {
  // 1. Подневный маршрут
  dailyItinerary: [
    {
      day: "День 1",
      date: "25 Октября (Воскресенье)",
      title: "Вылет и длинный транзит в Сеуле",
      badge: "Перелет",
      steps: [
        { time: "00:05", text: "Вылет из Алматы (KC 909, Т2). Время в пути 5ч 50мин." },
        { time: "09:55", text: "Прилет в Сеул (ICN, Т1). Прохождение границы (K-ETA)." },
        { time: "11:30–16:30", text: "Выезд в город на автобусе 6001 до ул. Мёндон или отдых в Nap Zone (4 этаж Т1)." },
        { time: "21:30", text: "Вылет из Сеула в Токио (OZ 178). ВАЖНО: Вылет из Терминала 2!" },
        { time: "23:25", text: "Приземление в Токио (Ханеда, Т3). Быстрый проход по QR Visit Japan Web." },
        { time: "00:01", text: "Поезд Keikyu Line до станции Oshiage или ночное такси (~$85, 30 минут)." }
      ]
    },
    {
      day: "День 2",
      date: "26 Октября (Понедельник)",
      title: "Адаптация в Ошиаге и Асакуса",
      badge: "Освоение",
      steps: [
        { time: "09:00", text: "Завтрак из FamilyMart (молоко, свежие булочки Shokupan)." },
        { time: "10:30", text: "Прогулка вокруг Skytree и ТЦ Solamachi. Покупка продуктов в супермаркете LIFE." },
        { time: "14:00", text: "Прогулка пешком до исторического района Асакуса (15 мин) или 1 остановка на метро." },
        { time: "15:00", text: "Храм Сэнсо-дзи и торговая улица Накамисэ-дори. Смотровая площадка на 8F Туристического центра." }
      ]
    },
    {
      day: "День 3",
      date: "27 Октября (Вторник)",
      title: "День в Диснейленде",
      badge: "Главное событие",
      steps: [
        { time: "07:45", text: "Выход из дома к автобусной остановке Disney Resort Bus Stop (4 мин пешком)." },
        { time: "08:00", text: "Прямой автобус-шаттл до Tokyo Disneyland (40 минут в пути)." },
        { time: "09:00–20:30", text: "Парк Диснейленд: Fantasyland, Toontown, парады и вечернее шоу." },
        { time: "21:00", text: "Возвращение в Ошиаге на обратном шаттле." }
      ]
    }
  ],

  // 2. Japan Insider (База знаний)
  insiderGuides: [
    {
      id: "oshiage-life",
      title: "Жизнь в Ошиаге (Sumida Guide)",
      icon: "home",
      content: `
        <p class="text-xs text-slate-300 leading-relaxed mb-3">Ошиаге — один из самых удобных и спокойных семейных районов Токио. Здесь нет шума Синдзюку, но есть лучшая инфраструктура.</p>
        <ul class="space-y-2 text-xs text-slate-400">
          <li>• <strong class="text-indigo-300">Супермаркет LIFE:</strong> Находится в ТЦ Solamachi (10:00-21:00). Скидки на готовую еду (бэнто и суши) начинаются после 19:00.</li>
          <li>• <strong class="text-indigo-300">Детские комнаты:</strong> На 6 и 7 этажах Solamachi есть идеальные Baby Centers с горячей водой 70°C для смеси.</li>
          <li>• <strong class="text-indigo-300">Выход B3:</strong> Единственный выход со станции Oshiage, оборудованный широкими лифтами прямо к вашей улице.</li>
        </ul>
      `
    },
    {
      id: "seoul-transit",
      title: "Транзит в аэропорту Сеула (ICN)",
      icon: "plane-takeoff",
      content: `
        <p class="text-xs text-slate-300 leading-relaxed mb-3">У вас две разные пересадки: дневная 11.5 часов туда и ночная 7.5 часов обратно.</p>
        <ul class="space-y-2 text-xs text-slate-400">
          <li>• <strong class="text-indigo-300">Туда (25 Окт):</strong> Прилет в Т1, вылет из Т2. Багаж перегружается автоматически. Выход в город по K-ETA на автобусе 6001.</li>
          <li>• <strong class="text-indigo-300">Обратно (05 Ноя):</strong> Прилет в Т2 в 04:10 утра. Выходить в город НЕ нужно. Идите в Nap Zone на 4 этаже Т2 (бесплатные кушетки и душ).</li>
        </ul>
      `
    },
    {
      id: "combini-guide",
      title: "Гид по Комбини (7-Eleven, Lawson, FamilyMart)",
      icon: "shopping-bag",
      content: `
        <p class="text-xs text-slate-300 leading-relaxed mb-3">Круглосуточные магазины в 2 минутах от дома — ваша главная выручка в 01:30 ночи.</p>
        <ul class="space-y-2 text-xs text-slate-400">
          <li>• <strong class="text-indigo-300">Еда для ребенка:</strong> Молоко (牛乳), бананы, мягкий хлеб Shokupan, йогурты без сахара.</li>
          <li>• <strong class="text-indigo-300">Разогрев:</strong> На кассе всегда спрашивают "Atatamemasu ka?". Отвечайте "Hai", чтобы разогреть рис или лапшу.</li>
        </ul>
      `
    }
  ],

  // 3. Разговорник
  phrases: [
    { ru: "Где находится лифт?", jp: "エレベーターはどこですか？", romaji: "Erebētā wa doko desu ka?", tag: "Коляска" },
    { ru: "Есть комната матери и ребенка?", jp: "赤ちゃんルームはありますか？", romaji: "Aka-chan rūmu wa arimasu ka?", tag: "Малыш" },
    { ru: "Разогрейте это, пожалуйста", jp: "温めてください", romaji: "Atatamete kudasai", tag: "Магазин" },
    { ru: "Большое спасибо", jp: "ありがとうございます", romaji: "Arigatō gozaimasu", tag: "Общее" },
    { ru: "Извините / Будьте добры", jp: "すみません", romaji: "Sumimasen", tag: "Общее" }
  ]
};
