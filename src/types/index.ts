export interface Game {
  id: string;
  title: string;
  poster: string;
  rating: number;
  totalRatings: number;
  description: string;
  releaseYear: number;
  genre: string[];
  antiCheat: AntiCheat[];
}

export interface Cheat {
  id: string;
  gameId: string;
  title: string;
  type: CheatType;
  description: string;
  features: string[];
  price: number;
  rating: number;
  totalRatings: number;
  antiCheatCompatible: AntiCheat[];
  licenses: License[];
  image: string;
  status: "active" | "updating" | "detected";
  lastUpdate: string;
}

export interface Software {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  totalRatings: number;
  features: string[];
  image: string;
  category: "utility" | "enhancer" | "security";
}

export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  purchaseHistory: Order[];
  activeLicenses: License[];
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: "pending" | "completed" | "refunded";
  createdAt: string;
  paymentMethod: string;
}

export interface CartItem {
  cheatId: string;
  licenseType: LicenseType;
  price: number;
  quantity: number;
}

export interface Review {
  id: string;
  userId: string;
  targetId: string; // cheat or software id
  targetType: "cheat" | "software";
  rating: number;
  comment: string;
  createdAt: string;
  username: string;
  helpful: number;
}

export type CheatType =
  | "aimbot"
  | "esp"
  | "wallhack"
  | "triggerbot"
  | "no-recoil"
  | "radar-hack";

export type AntiCheat = "VAC" | "EAC" | "BattlEye" | "PunkBuster";

export type LicenseType = "1month" | "3months" | "lifetime";

export interface License {
  type: LicenseType;
  price: number;
  label: string;
  description: string;
}
