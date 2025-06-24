import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CheatCard from "@/components/CheatCard";
import Icon from "@/components/ui/icon";
import { cheats } from "@/data/cheats";
import { games } from "@/data/games";

const CheatsCatalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGame, setSelectedGame] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [sortBy, setSortBy] = useState("rating");

  const cheatTypes = [
    { value: "all", label: "Все типы" },
    { value: "aimbot", label: "Aimbot" },
    { value: "esp", label: "ESP" },
    { value: "wallhack", label: "Wallhack" },
    { value: "triggerbot", label: "Triggerbot" },
    { value: "no-recoil", label: "No Recoil" },
    { value: "radar-hack", label: "Radar Hack" },
  ];

  const filteredCheats = cheats
    .filter((cheat) => {
      const matchesSearch =
        cheat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cheat.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGame =
        selectedGame === "all" || cheat.gameId === selectedGame;
      const matchesType = selectedType === "all" || cheat.type === selectedType;

      return matchesSearch && matchesGame && matchesType;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "title":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Каталог читов</h1>
          <p className="text-gray-400">
            Профессиональные читы для всех популярных игр
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative">
            <Icon
              name="Search"
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Поиск читов..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/40"
            />
          </div>

          <select
            value={selectedGame}
            onChange={(e) => setSelectedGame(e.target.value)}
            className="px-4 py-3 bg-slate-800/50 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:border-purple-500/40"
          >
            <option value="all">Все игры</option>
            {games.map((game) => (
              <option key={game.id} value={game.id}>
                {game.title}
              </option>
            ))}
          </select>

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-3 bg-slate-800/50 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:border-purple-500/40"
          >
            {cheatTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-3 bg-slate-800/50 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:border-purple-500/40"
          >
            <option value="rating">По рейтингу</option>
            <option value="price-low">Цена: сначала дешевые</option>
            <option value="price-high">Цена: сначала дорогие</option>
            <option value="title">По названию</option>
          </select>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-400">
            Найдено читов:{" "}
            <span className="text-purple-400 font-semibold">
              {filteredCheats.length}
            </span>
          </p>
        </div>

        {/* Cheats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCheats.map((cheat) => (
            <CheatCard key={cheat.id} cheat={cheat} />
          ))}
        </div>

        {filteredCheats.length === 0 && (
          <div className="text-center py-16">
            <Icon
              name="Search"
              size={64}
              className="text-gray-500 mx-auto mb-4"
            />
            <h3 className="text-xl text-gray-400 mb-2">Читы не найдены</h3>
            <p className="text-gray-500">Попробуйте изменить критерии поиска</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CheatsCatalog;
