import { Cheat } from "@/types";

export const cheats: Cheat[] = [
  {
    id: "cs2-aimbot-pro",
    gameId: "cs2",
    title: "CS2 Aimbot Pro",
    type: "aimbot",
    description:
      "Профессиональный аимбот с настройкой человечности и плавности наведения.",
    features: [
      "Плавное наведение",
      "Настройка FOV",
      "Фильтр по командам",
      "Приоритет головы/тела",
    ],
    price: 29.99,
    rating: 4.9,
    totalRatings: 847,
    antiCheatCompatible: ["VAC"],
    licenses: [
      {
        type: "1month",
        price: 29.99,
        label: "1 месяц",
        description: "Пробный период",
      },
      {
        type: "3months",
        price: 69.99,
        label: "3 месяца",
        description: "Экономия 20%",
      },
      {
        type: "lifetime",
        price: 149.99,
        label: "Навсегда",
        description: "Лучшее предложение",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop",
    status: "active",
    lastUpdate: "2024-06-20",
  },
  {
    id: "valorant-esp-elite",
    gameId: "valorant",
    title: "Valorant ESP Elite",
    type: "esp",
    description:
      "Продвинутый ESP с отображением противников через стены и информацией о здоровье.",
    features: [
      "Контуры игроков",
      "HP и щиты",
      "Дистанция",
      "Название оружия",
      "Фильтры видимости",
    ],
    price: 24.99,
    rating: 4.7,
    totalRatings: 623,
    antiCheatCompatible: ["EAC"],
    licenses: [
      {
        type: "1month",
        price: 24.99,
        label: "1 месяц",
        description: "Пробный период",
      },
      {
        type: "3months",
        price: 59.99,
        label: "3 месяца",
        description: "Экономия 20%",
      },
      {
        type: "lifetime",
        price: 119.99,
        label: "Навсегда",
        description: "Лучшее предложение",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop",
    status: "active",
    lastUpdate: "2024-06-18",
  },
  {
    id: "fortnite-wallhack",
    gameId: "fortnite",
    title: "Fortnite Wallhack",
    type: "wallhack",
    description:
      "Видение противников через любые препятствия с настройкой прозрачности.",
    features: [
      "Прозрачные стены",
      "Фильтр по дистанции",
      "Цветовые схемы",
      "Скрытый режим",
    ],
    price: 19.99,
    rating: 4.5,
    totalRatings: 891,
    antiCheatCompatible: ["EAC"],
    licenses: [
      {
        type: "1month",
        price: 19.99,
        label: "1 месяц",
        description: "Пробный период",
      },
      {
        type: "3months",
        price: 49.99,
        label: "3 месяца",
        description: "Экономия 17%",
      },
      {
        type: "lifetime",
        price: 99.99,
        label: "Навсегда",
        description: "Лучшее предложение",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=400&fit=crop",
    status: "active",
    lastUpdate: "2024-06-15",
  },
  {
    id: "apex-triggerbot",
    gameId: "apex",
    title: "Apex Triggerbot",
    type: "triggerbot",
    description:
      "Автоматическая стрельба при наведении на цель с настройкой задержки.",
    features: [
      "Настройка задержки",
      "Фильтр по командам",
      "Работа только на головах",
      "Человечная стрельба",
    ],
    price: 22.99,
    rating: 4.6,
    totalRatings: 534,
    antiCheatCompatible: ["EAC"],
    licenses: [
      {
        type: "1month",
        price: 22.99,
        label: "1 месяц",
        description: "Пробный период",
      },
      {
        type: "3months",
        price: 54.99,
        label: "3 месяца",
        description: "Экономия 20%",
      },
      {
        type: "lifetime",
        price: 109.99,
        label: "Навсегда",
        description: "Лучшее предложение",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&h=400&fit=crop",
    status: "active",
    lastUpdate: "2024-06-17",
  },
];
