import { Game } from "@/types";

export const games: Game[] = [
  {
    id: "cs2",
    title: "Counter-Strike 2",
    poster:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=600&fit=crop",
    rating: 4.8,
    totalRatings: 2847,
    description:
      "Легендарный тактический шутер от Valve с обновленной графикой и физикой.",
    releaseYear: 2023,
    genre: ["FPS", "Tactical"],
    antiCheat: ["VAC"],
  },
  {
    id: "valorant",
    title: "Valorant",
    poster:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=600&fit=crop",
    rating: 4.6,
    totalRatings: 1923,
    description:
      "Тактический шутер от Riot Games с уникальными способностями агентов.",
    releaseYear: 2020,
    genre: ["FPS", "Tactical"],
    antiCheat: ["EAC", "BattlEye"],
  },
  {
    id: "fortnite",
    title: "Fortnite",
    poster:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=600&fit=crop",
    rating: 4.4,
    totalRatings: 3156,
    description:
      "Популярная battle royale игра с уникальной системой строительства.",
    releaseYear: 2017,
    genre: ["Battle Royale", "Building"],
    antiCheat: ["EAC"],
  },
  {
    id: "apex",
    title: "Apex Legends",
    poster:
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=600&fit=crop",
    rating: 4.5,
    totalRatings: 1674,
    description:
      "Динамичная battle royale с командной игрой и уникальными легендами.",
    releaseYear: 2019,
    genre: ["Battle Royale", "Hero Shooter"],
    antiCheat: ["EAC"],
  },
  {
    id: "warzone",
    title: "Call of Duty: Warzone",
    poster:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=600&fit=crop",
    rating: 4.3,
    totalRatings: 2234,
    description:
      "Масштабная battle royale в universe Call of Duty с реалистичной графикой.",
    releaseYear: 2020,
    genre: ["Battle Royale", "Military"],
    antiCheat: ["BattlEye"],
  },
];
