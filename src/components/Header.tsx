import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-slate-900/95 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              CheatMaster Pro
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/games"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Игры
            </Link>
            <Link
              to="/cheats"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Читы
            </Link>
            <Link
              to="/software"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Софт
            </Link>
            <Link
              to="/reviews"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Отзывы
            </Link>
            <Link
              to="/blog"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Блог
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative p-2 text-gray-300 hover:text-purple-400 transition-colors"
            >
              <Icon name="ShoppingCart" size={20} />
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Link>
            <Link
              to="/profile"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
            >
              Профиль
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
