import { Link } from "react-router-dom";
import { Cheat } from "@/types";
import StarRating from "./StarRating";
import Icon from "@/components/ui/icon";

interface CheatCardProps {
  cheat: Cheat;
}

const getCheatIcon = (type: string) => {
  switch (type) {
    case "aimbot":
      return "Target";
    case "esp":
      return "Eye";
    case "wallhack":
      return "Layers";
    case "triggerbot":
      return "Zap";
    case "no-recoil":
      return "Crosshair";
    case "radar-hack":
      return "Radar";
    default:
      return "Shield";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "text-green-400";
    case "updating":
      return "text-yellow-400";
    case "detected":
      return "text-red-400";
    default:
      return "text-gray-400";
  }
};

const CheatCard = ({ cheat }: CheatCardProps) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
      <div className="relative overflow-hidden">
        <img
          src={cheat.image}
          alt={cheat.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
        <div className="absolute top-3 left-3">
          <div className="bg-slate-900/80 p-2 rounded-lg">
            <Icon
              name={getCheatIcon(cheat.type)}
              size={20}
              className="text-purple-400"
            />
          </div>
        </div>
        <div className="absolute top-3 right-3">
          <span
            className={`text-xs font-semibold ${getStatusColor(cheat.status)}`}
          >
            {cheat.status === "active"
              ? "Активен"
              : cheat.status === "updating"
                ? "Обновляется"
                : "Обнаружен"}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-white">{cheat.title}</h3>
          <span className="text-purple-400 font-bold text-lg">
            ${cheat.price}
          </span>
        </div>

        <p className="text-gray-400 text-sm mb-3 line-clamp-2">
          {cheat.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {cheat.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="bg-slate-700/50 text-xs px-2 py-1 rounded text-gray-300"
            >
              {feature}
            </span>
          ))}
          {cheat.features.length > 3 && (
            <span className="text-xs text-gray-500">
              +{cheat.features.length - 3} еще
            </span>
          )}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <StarRating rating={cheat.rating} size="sm" />
            <span className="text-sm text-gray-400">
              ({cheat.totalRatings})
            </span>
          </div>
          <div className="flex gap-1">
            {cheat.antiCheatCompatible.map((ac) => (
              <span
                key={ac}
                className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded"
              >
                {ac}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <Link
            to={`/cheats/${cheat.id}`}
            className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 text-sm font-semibold"
          >
            Подробнее
          </Link>
          <button className="px-4 py-2 border border-purple-500/40 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-colors">
            <Icon name="ShoppingCart" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheatCard;
