// All editable site content lives here.
import portraitHero from "@/assets/portrait-hero.png";
import portraitCta from "@/assets/portrait-cta.jpg";
import reel1 from "@/assets/reel-1.jpg";
import reel2 from "@/assets/reel-2.jpg";
import reel3 from "@/assets/reel-3.jpg";
import reel4 from "@/assets/reel-4.jpg";
import reel5 from "@/assets/reel-5.jpg";
import caseVoroncov from "@/assets/case-voroncov.jpg";
import caseButuzov from "@/assets/case-butuzov.jpg";
import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";
import a4 from "@/assets/avatar-4.jpg";
import a5 from "@/assets/avatar-5.jpg";
import a6 from "@/assets/avatar-6.jpg";

export const site = {
  brand: { name: "ЮРА БАРИНОВ", tagline: "Контент-продюсер" },
  nav: [
    { label: "Обо мне", href: "#about" },
    { label: "Кейсы", href: "#cases" },
    { label: "Услуги", href: "#services" },
    { label: "Отзывы", href: "#reviews" },
    { label: "Контакты", href: "#contact" },
  ],
  cta: { label: "Связаться в Telegram", href: "https://t.me/yurabarinov" },

  intro: {
    lines: [
      "Я - контент-продюсер и режиссер монтажа. Помогаю экспертам и компаниям создавать интересный контент, который растит доверие, охваты и главное заявки. С моей системой ролики набирают миллионы просмотров даже на маленьких и новых аккаунтах.",
    ],
    accent:
      "За 5+ лет я накопил кучу опыта работы с блогерами-миллиониками, крупными компаниями и экспертами разных ниш, поэтому умею делать контент не просто красивым, а результативным в любой теме.",
  },

  hero: {
    titleLine1: "Создаю",
    titleAccent: "медийность",
    titleLine2: "с помощью контента",
    subLine1: "Полный цикл контента под ключ:",
    subLine2: "стратегия, сценарии, монтаж и развитие личного бренда.",
    subLine3: "Для тех, кому нужен контент без стресса и с результатом",
    image: portraitHero,
    metrics: [
      { icon: "clapperboard", value: "8000+", label: "видео создано" },
      { icon: "eye", value: "800+ млн", label: "просмотров" },
      { icon: "star", value: "2500+", label: "отзывов" },
    ],
  },

  logos: [
    "Яндекс Практикум",
    "Александр Панчин",
    "Тамара Эйдельман",
    "LEROY MERLIN",
    "А. Семихатов",
    "HONOR",
    "А. Самбурская",
    "ТНТ4",
    "РБК",
    "А. Курпатов",
    "НТВ",
    "Игорь Воронцов",
    "Дарья Плужникова",
    "Егор Максимов",
    "Дарья Черняк",
    "Максим Вердикт",
    "Сектор Газа",
    "Андрей Алексин",
    "В. Дубынин",
    "В. Сурдин",
    "С. Дробышевский",
    "Ася Казанцева",
    "Энтони Американец",
  ],

  services: {
    left: {
      title: "Продюсирование",
      items: [
        "Распаковка личности: выявляю ваши сильные стороны для подачи",
        "Сценарии и идеи под алгоритмы соц.сетей",
        "Съёмка с поддержкой, помогаю с уверенностью в кадре",
        "Динамичный монтаж и упаковка",
        "Дизайнерское оформление профиля",
        "Аналитика и оптимизация: увеличение охватов",
        "Продюсерская поддержка и связь 24/7",
        "Полное ведение соцсетей и SMM",
        "Системный контент без стресса и хаоса",
      ],
    },
    right: {
      title: "Производство под ключ",
      items: [
        "Reels / Shorts и длинные YouTube-видео под задачи проекта",
        "Разработка сценариев под конкретные ролики (без стратегии)",
        "Динамичный монтаж с удержанием",
        "Создание обложек и превью под видео",
      ],
    },
  },

  break1: {
    text: "Просмотры - это база.\nНо доверие - ещё важнее.",
    sub: "Я помогаю делать контент, который не просто собирает охваты,\nа вызывает доверие и приводит клиентов.",
  },
  break2: {
    text: "Просмотры без доверия не приводят клиентов.",
    sub: "Я строю и то, и другое — одновременно.",
  },
  break3: {
    text: "Сегодня выигрывает тот, кому доверяют.",
    sub: "Контент — самый короткий путь к этому доверию.",
  },

  workflow: [
    { n: "01", title: "Заявка и брифинг", desc: "Разбираем твою цель, аудиторию, конкурентов и точку А." },
    { n: "02", title: "Стратегия и сценарии", desc: "Контент-план, концепции, рубрики и сценарии под платформу." },
    { n: "03", title: "Производство", desc: "Съёмка, монтаж, графика, упаковка под Reels, Shorts, YouTube." },
    { n: "04", title: "Рост и оптимизация", desc: "Аналитика, гипотезы, докрутка форматов и масштабирование." },
  ],
  workflowNote: "",

  reels: [
    { src: "/images/previewsforvideo/example13.png", label: "", views: "", vkUrl: "https://vk.com/clip_ext.php?oid=-225790566&id=456239190&autoplay=1" },
    { src: "/images/previewsforvideo/example1.png", label: "", views: "", vkUrl: "https://vk.com/clip_ext.php?oid=-220903431&id=456239159&autoplay=1" },
    { src: "/images/previewsforvideo/example2.jpg", label: "", views: "", vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239050&autoplay=1" },
    { src: "/images/previewsforvideo/example3.jpg", label: "", views: "", vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239034&autoplay=1" },
    { src: "/images/previewsforvideo/example4.png", label: "", views: "", vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239042&autoplay=1" },
    { src: "/images/previewsforvideo/example5.jpg", label: "", views: "", vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239047&autoplay=1" },
    { src: "/images/previewsforvideo/example6.jpg", label: "", views: "", vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239045&autoplay=1" },
    { src: "/images/previewsforvideo/example7.jpg", label: "", views: "", vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239048&autoplay=1" },
    { src: "/images/previewsforvideo/example8.jpg", label: "", views: "", vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239037&autoplay=1" },
    { src: "/images/previewsforvideo/example9.png", label: "", views: "", vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239038&autoplay=1" },
    { src: "/images/previewsforvideo/example10.png", label: "", views: "", vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239039&autoplay=1" },
    { src: "/images/previewsforvideo/example11.png", label: "", views: "", vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239049&autoplay=1" },
    { src: "/images/previewsforvideo/example12.png", label: "", views: "", vkUrl: "https://www.youtube.com/embed/guDOIIA7-Sc?si=_l6rtbl5shsxgPDX", isHorizontal: true },
  ],

  featuredCase: {
    tag: "",
    name: "Игорь Воронцов",
    role: "Эксперт по здоровью, фитнес-тренер",
    image: caseVoroncov,
    instagramImage: "/images/cases/Sequence 75.00_00_31_26.Still002.jpg",
    instagramImageRight: "/images/reviews/Sequence 75.00_00_31_26.Still002",
    pointA: [
      "вёл блог менее 20 000 подписчиков",
      "контент шёл не системно",
      "не было упаковки и единой стратегии",
      "доход стопорился",
    ],
    headline: "714 000+",
    headlineCaption: "подписчиков за 1.5 года",
    growth: "+47×",
    socialProofs: [
      { icon: "user", text: "Подписался", subtext: "Влад Топалов (муж Регины Тодоренко)" },
      { icon: "shirt", text: "Выпустили", subtext: "свой мерч одежды" },
      { icon: "flame", text: "Reels попадали", subtext: "в ТОПОР и крупные паблики" },
      { icon: "handshake", text: "Коллабы с топ-блоггерами", subtext: "9+ миллиоников" },
    ],
    proof: [],
    quote: "Если хотите реально аху@вшего рилсмейкера себе — Юра это тот, кто вам нужен.",
    audioLabel: "Прослушать видео-отзыв",
    videos: [
      {
        id: "voroncov-1",
        title: "Пример работы 1",
        vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239021&autoplay=1",
        image: "/images/previewsforvideo/igorexamplework1.jpg"
      },
      {
        id: "voroncov-2", 
        title: "Пример работы 2",
        vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239022&autoplay=1",
        image: "/images/previewsforvideo/igorexamplework2.jpg"
      },
      {
        id: "voroncov-3",
        title: "Пример работы 3", 
        vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239023&autoplay=1",
        image: "/images/previewsforvideo/igorexamplework3.jpg"
      },
      {
        id: "voroncov-4",
        title: "Пример работы 4",
        vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239024&autoplay=1",
        image: "/images/previewsforvideo/igorexamplework4.jpg"
      }
    ],
    reviewVideo: {
      id: "voroncov-review",
      title: "Отзыв Игоря Воронцова",
      vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239025&autoplay=1",
      image: "/images/previewsforvideo/igor-feedback.jpg"
    }
  },

  secondaryCase: {
    tag: "",
    name: "Павел Бутузов",
    role: "Психолог, психотерапевт",
    image: caseButuzov,
    instagramImage: "/images/cases/pavel-butuzov-instagram.jpg",
    pointA: [
      "Цена консультации: 20.000 руб",
      "Сложно неинтуитивный профиль",
      "Прирост подписчиков стоял на месте",
      "Павел пытался сам делать ролики, но они не набирали больше 7000 просмотров"
    ],
    headlineLeft: { value: "31 000+", caption: "подписчиков" },
    headlineMid: { value: "35 000 ₽", caption: "цена консультации выросла на +15 000 руб" },
    headlineRight: { value: "", caption: "Привлекли топ инфлюенсеров: подписался Арсен Маркарян на блог" },
    videos: [
      {
        id: "butuzov-1",
        title: "Пример работы 1",
        vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239026&autoplay=1",
        image: "/images/previewsforvideo/butuzov-examplework1.jpg"
      },
      {
        id: "butuzov-2",
        title: "Пример работы 2", 
        vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239028&autoplay=1",
        image: "/images/previewsforvideo/butuzov-examplework2.jpg"
      }
    ],
    reviewVideo: {
      id: "butuzov-review",
      title: "Отзыв Павла Бутузова",
      vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239027&autoplay=1",
      image: "/images/previewsforvideo/butuzov-feedback.jpg"
    }
  },

  otherCases: [
    { name: "Дима Кутузов", role: "Bizz Coach", img: a3 },
    { name: "Александр Петров", role: "Финансист", img: a1 },
    { name: "Тамара Воронина", role: "Психолог · 1.7M", img: a2 },
    { name: "Денис Лебедев", role: "Tech-блог", img: a6 },
    { name: "Максим Ярцев", role: "СТО5+ агентство", img: a5 },
    { name: "Олеся ван Хорн", role: "Lifestyle · 900K", img: a4 },
    { name: "Антон Смирнов", role: "Финтех CEO", img: a3 },
  ],

  videoExamples: [
    {
      id: "vape-theme",
      title: "Вейп-тематика",
      views: "13 млн просмотров",
      image: reel1,
      vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239029&autoplay=1"
    },
    {
      id: "russian-habit",
      title: "Русская привычка, которая шокирует США",
      views: "7 млн просмотров",
      image: reel2,
      vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239030&autoplay=1"
    },
    {
      id: "homophobia",
      title: "Откуда берется гомофобия?",
      views: "2.1 млн просмотров",
      image: reel3,
      vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239031&autoplay=1"
    },
    {
      id: "bloody-spa",
      title: "Кровавое SPA",
      views: "2 млн просмотров",
      image: reel4,
      vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239032&autoplay=1"
    },
    {
      id: "hitler-death",
      title: "Как умер Гитлер",
      views: "320 тыс просмотров",
      image: reel5,
      vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239033&autoplay=1"
    }
  ],

  contentLists: {
    title: "Контент с продажами без стресса и выгорания — это реально :)",
    items: [
      "Помогаю чувствовать себя увереннее в кадре и говорить естественно",
      "Подстраиваю формат под ваш стиль и подачу",
      "Делаю процесс спокойным, понятным и без лишнего стресса",
      "Беру на себя все технические моменты и монтаж",
      "Готовлю сценарии и подачу под ваш стиль",
      "Вам остаётся только снять видео совместное, затем улыбнуться, остальное я беру на себя :)"
    ],
  },

  contrast: {
    title: "КОГДА НЕТ РЕЗУЛЬТАТА?",
    cold: {
      title: "Не приносит результат, если…",
      items: [
        "ролики выходят хаотично и не складываются в понятный образ;",
        "ролики выходят, но не цепляют нужную аудиторию;",
        "просмотры есть, а доверия и заявок нет;",
        "съёмки превращаются в стресс, а не рабочий процесс;",
        "съёмки есть, но нет понятной системы и внятного плана;",
        "эксперт в кадре звучит зажато или неестественно;",
        "нет триггеров, из-за которых эксперта запоминают;",
        "много усилий, а ощущение, будто работаешь в пустоту;",
        "подрядчики вроде есть, но приходится всё контролировать самому.",
      ],
    },
    warm: {
      title: "Что нужно для системного роста...",
      items: [
        "ясный посыл, чтобы аудитория сразу понимала, кто вы и чем полезны;",
        "стратегия под вас, а не случайные видосы;",
        "корректировка съёмки и подачи, чтобы было комфортно быть в кадре и картинка смотрелась дорого;",
        "понимание работы алгоритмов соцсетей;",
        "сильные сценарии, чтобы контент цеплял с первых секунд и удерживал зрителя;",
        "понятный план публикаций, чтобы алгоритмы привыкали;",
        "аналитика и мягкая оптимизация, чтобы усиливать то, что уже хорошо работает.",
      ],
    },
    result:
      "Итог: контент перестаёт быть хаосом и становится понятной системой, которая поддерживает рост и продажи.",
  },

  manifesto: {
    title: "Я не делаю контент ради просмотров.",
    body: "Моя задача — создавать систему контента, которая растит аудиторию, усиливает личный бренд, повышает доверие и конвертирует клиентов.",
  },

  formats: [
    { title: "Продюсирование контента", desc: "Контент под ключ: стратегия, сценарии, продакшн, аналитика." },
    { title: "Reels / Shorts под ключ", desc: "Сценарии, монтаж, упаковка, публикации." },
    { title: "YouTube-продюсирование", desc: "Сценарии, съёмка, продюсирование канала." },
    { title: "Дизайн", desc: "Обложки, превью, графика для соцсетей и личного бренда." },
  ],

  extras: [
    { title: "SMM-ведение и оформление соцсетей", icon: "share" },
    { title: "Telegram-боты и автоворонки", icon: "bot" },
    { title: "Контент-аналитика и стратегия роста", icon: "chart" },
    { title: "Создание сайтов", icon: "layout" },
    { title: "Прогревы и контентные воронки", icon: "flame" },
    { title: "Консультации по развитию медийности", icon: "compass" },
    { title: "Сценарии и монтаж", icon: "film" },
    { title: "Любой дизайн (от карточек до афиш)", icon: "palette" },
    { title: "Моушен-дизайн", icon: "sparkles" },
  ],

  testimonials: [
    {
      quote: "Если хотите реально аху@вшего рилсмейкера себе — Юра это тот, кто вам нужен.",
      name: "Игорь Воронцов",
      role: "Эксперт по здоровью, фитнес-тренер",
      img: a1,
    },
    {
      quote: "",
      name: "Тамара Эйдельман",
      role: "",
      img: "/images/cases/eidelman.png",
      isScreenshot: true,
    },
    {
      quote: "",
      name: "Дарья Черняк",
      role: "",
      img: "/images/cases/chernyak.png",
      isScreenshot: true,
    },
    {
      quote: "Спасибе тебе за ответы, закрыл все вопросы по стратегии благодаря тебе. Как кейс - юзай конечно )",
      name: "Максим Вердикт",
      role: "эксперт по отношениям",
      img: "",
    },
  ],

  topBadge: {
    title: "ТОП 1 МОНТАЖЁР НА ПЕРЕДОВОЙ БИРЖЕ ФРИЛАНСА В СНГ",
    sub: "Более 1800 отзывов — читать тут",
    subHref: "https://kwork.ru/user/yurabarinov",
    image: portraitCta,
  },

  daryaCase: {
    name: "Дарья Черняк",
    role: "Фитнес-тренер · 189K",
    image: a4,
    instagramImage: "/images/cases/daria-chernyak-instagram.jpg",
    headline: "Комфорт, доверие и стабильный монтаж",
    metrics: [
      { value: "189K", label: "подписчиков" },
      { value: "12+", label: "месяцев работы" },
      { value: "100%", label: "довольна подачей" },
    ],
    proof: [a1, a2, a3, a5, a6],
    quote:
      "Раньше я монтировала всё сама и долго не могла доверить монтаж другому человеку. С Юрой всё оказалось очень спокойно и комфортно: быстрые правки, понимание подачи, нормальная коммуникация и ощущение, что человек реально вовлечён в результат.\n\nРаботаем уже много месяцев — и это один из самых комфортных опытов работы.",
    audioLabel: "Прослушать голосовой отзыв",
    audioFile: "/audio/darya-chernyak-review.mp3"
  },

  finalCta: {
    title: "Если вам нужен не просто монтажёр, а человек, который поможет выстроить медийность",
    sub: "Напишите мне в Telegram — разберём вашу нишу, цель и стратегию.",
    image: portraitCta,
    button: "Связаться в Telegram",
  },
};
