# Premium Redesign — Ivan Makarov / Контент-продюсер

Текущий проект — пустой placeholder. На основе референс-скриншота соберу длинный лендинг в premium-стиле (dark luxury, orange cinematic glow), сохранив структуру и контент с макета, но переработав визуал под Vercel / Framer / Apple ощущение.

## Визуальный язык

- Background: `#0b0b0b` с тонким noise/vignette
- Accent: `#ff6a00` + glow `#ff8a3d` (используется дозированно)
- Типографика: Inter Tight / Manrope (display) + Inter (body), сильный контраст размеров (clamp 14 → 96px)
- Spacing: 12-колоночная сетка, секции 120–200px вертикали, cinematic pauses
- Glass: только в кейсах, reels, testimonials, CTA, featured (`backdrop-blur` + 1px border `white/8`)
- Motion: fade-up + parallax glow, snap-scroll каруселей, hover-lift на карточках

## Структура секций (та же что в референсе)

1. **Top nav** — мини-логотип, ссылки, CTA «Связаться в Telegram» (без glass, тонкий border-bottom при скролле)
2. **Hero** — композиция сохранена: левый текст «Создаю медийность с помощью контента», справа портрет с orange rim-light glow. Улучшения: больше воздуха, крупнее заголовок, тонкий KWORK badge как glass-чип, метрики (8000+, 500+, 2000+) — без рамок, разделители hairline
3. **Logo strip** — медиа/проекты (ТНТ, Самокурская, Гарнич…), монохром, hover → orange tint, авто-marquee
4. **Two-column services** — «Продюсирование контента» / «Производство под ключ»: чистые списки с тонкими dividers, без карточек-рамок
5. **Cinematic break #1** — fullscreen: «Большинство контента забывается через 24 часа.» (giant type, particles)
6. **Workflow / Как строится работа** — premium horizontal timeline с glow-progress линией, крупные цифры 01–04, минимальные подписи
7. **Reels / Короткие видео** — premium carousel: 4–5 крупных 9:16 превью одновременно, snap, hover-play, glow-shadow (вместо плотной сетки мелких)
8. **Featured Case (Игорь Воронцов)** — большой cinematic блок: широкий график (SVG с glow), огромные цифры 714 000+, storytelling-копирайт, social proof avatars, glass-карточка целиком
9. **Secondary case (Павел Бутузов)** — такой же premium layout, чуть тише по контрасту
10. **Other cases carousel** — Netflix-стиль: горизонтальный snap-список портретов с overlay-метой, hover zoom
11. **Cinematic break #2** — «Просмотры без доверия не приводят клиентов.»
12. **Контент без стресса** — два списка (что я делаю / результат) + декоративный neon-heart справа
13. **Why most content fails / Почему мой подход работает** — две колонки контраст: «холодная» (muted) vs «тёплая» (orange glow)
14. **Cinematic break #3** — «Сегодня выигрывает тот, кому доверяют.»
15. **Форматы работы** — 4 крупные icon-tiles (продюсирование, reels, youtube, дизайн), без glass, с hairline borders
16. **Дополнительные возможности** — компактный 4-grid, тихая секция
17. **Testimonials** — glass-карточки, крупная цитата + avatar + role, carousel
18. **Top-1 монтажёр badge / YuraBarinov** — featured glass-плашка с крупной «K» эмблемой и portrait
19. **Почему работают со мной** — quiet text-section
20. **Final CTA** — fullscreen: портрет справа, «Хотите выстроить сильную медийность через контент?», большая orange кнопка Telegram, glow ambient
21. **Footer** — минимальный

## Технический план (TanStack Start)

- Маршрут — один: `src/routes/index.tsx` (лендинг). Дополнительные роуты не нужны.
- Компоненты в `src/components/landing/`:
  `Nav`, `Hero`, `LogoMarquee`, `Services`, `CinematicBreak`, `Workflow`, `ReelsCarousel`, `FeaturedCase`, `CasesCarousel`, `ContrastLists`, `Formats`, `Extras`, `Testimonials`, `TopBadge`, `FinalCTA`, `Footer`
- Контент вынесен в `src/content/site.ts` (массивы метрик, кейсов, reels, testimonials, формат услуг, тексты break-секций) — лёгкое редактирование
- Изображения — заглушки в `src/assets/` (портрет, превью reels, графики кейсов, аватары testimonials), генерация через imagegen + поддержка простой замены
- Иконки — `lucide-react` (тонкие, monoline)
- Анимации — `framer-motion` (fade-up, parallax glow, marquee), `embla-carousel-react` для snap-каруселей (уже есть в shadcn)
- Дизайн-токены — расширить `src/styles.css`: `--brand`, `--brand-glow`, `--surface-1/2`, `--hairline`, `--glass-bg`, `--shadow-glow`, gradients, radii
- Типографика — подключить Inter Tight + Inter через `@import` в styles.css, утилиты `.h-display`, `.h1`, `.h2`, `.eyebrow`, `.body`
- SEO — `head()` в index route: title, description, og-image (hero portrait), twitter card, lang ru
- Responsive — mobile-first, hero columns стак, carousels остаются snap-горизонтальными
- Cinematic breaks — отдельный компонент с пропсами `text`, `subtitle?`, fullscreen min-h-screen с центрированием

## Что точно НЕ делаю

- Не меняю композицию hero
- Не превращаю в SaaS-шаблон
- Не лью glass на каждую секцию
- Не убираю и не переписываю смысл блоков из референса
- Не добавляю backend / auth / Cloud — это чистый фронтенд-лендинг

После аппрува — собираю всё одним проходом, проверяю в preview на desktop и mobile.