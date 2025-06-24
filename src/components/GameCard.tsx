import { Link } from "react-router-dom";
import { Game } from "@/types";
import StarRating from "./StarRating";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Link to={`/games/${game.id}`} className="group block">
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
        <div className="relative overflow-hidden">
          <img
            src={game.poster}
            alt={game.title}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
          <div className="absolute top-3 right-3 flex gap-1">
            {game.antiCheat.map((ac) => (
              <span
                key={ac}
                className="bg-slate-900/80 text-xs px-2 py-1 rounded-full text-gray-300"
              >
                {ac}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
            {game.title}
          </h3>
          <p className="text-gray-400 text-sm mb-3 line-clamp-2">
            {game.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <StarRating rating={game.rating} />
              <span className="text-sm text-gray-400">
                ({game.totalRatings})
              </span>
            </div>
            <span className="text-purple-400 font-semibold text-sm group-hover:text-pink-400 transition-colors">
              Читы →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
