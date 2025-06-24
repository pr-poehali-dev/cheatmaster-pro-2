import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-purple-500/20 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                CheatMaster Pro
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Профессиональные читы для популярных игр. Безопасность, качество и
              поддержка 24/7.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Icon name="Mail" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Icon name="Users" size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/games"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Игры
                </Link>
              </li>
              <li>
                <Link
                  to="/cheats"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Читы
                </Link>
              </li>
              <li>
                <Link
                  to="/software"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Софт
                </Link>
              </li>
              <li>
                <Link
                  to="/reviews"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Отзывы
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/faq"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Контакты
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Правила
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Политика
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-500/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 CheatMaster Pro. Все права защищены.
          </p>
          <p className="text-gray-500 text-xs mt-2 md:mt-0">
            Используйте читы ответственно и на свой страх и риск.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
