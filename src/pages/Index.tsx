import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GameCard from "@/components/GameCard";
import CheatCard from "@/components/CheatCard";
import Icon from "@/components/ui/icon";
import { games } from "@/data/games";
import { cheats } from "@/data/cheats";

const Index = () => {
  const featuredGames = games.slice(0, 4);
  const featuredCheats = cheats.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 animate-pulse" />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
              Dominate Every Match
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Профессиональные читы для популярных игр. Безопасность, качество и
            регулярные обновления.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/cheats"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 hover:scale-105 shadow-xl"
            >
              Смотреть читы
            </Link>
            <Link
              to="/games"
              className="border-2 border-purple-500/40 text-purple-400 px-8 py-4 rounded-xl font-semibold hover:bg-purple-500/10 transition-all duration-200"
            >
              Все игры
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white">Популярные игры</h2>
            <Link
              to="/games"
              className="flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors"
            >
              Все игры <Icon name="ArrowRight" size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cheats */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white">Топовые читы</h2>
            <Link
              to="/cheats"
              className="flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors"
            >
              Все читы <Icon name="ArrowRight" size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCheats.map((cheat) => (
              <CheatCard key={cheat.id} cheat={cheat} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Почему выбирают нас?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Безопасность
              </h3>
              <p className="text-gray-400">
                Все читы проверены на совместимость с античитами и регулярно
                обновляются.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Быстрая доставка
              </h3>
              <p className="text-gray-400">
                Мгновенная активация лицензии после покупки. Начинайте играть
                сразу.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Поддержка 24/7
              </h3>
              <p className="text-gray-400">
                Наша команда всегда готова помочь с настройкой и решением
                проблем.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
