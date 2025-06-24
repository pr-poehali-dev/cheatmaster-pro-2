import Icon from "@/components/ui/icon";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showNumber?: boolean;
}

const StarRating = ({
  rating,
  maxRating = 5,
  size = "md",
  showNumber = false,
}: StarRatingProps) => {
  const sizeClasses = {
    sm: 14,
    md: 16,
    lg: 20,
  };

  const iconSize = sizeClasses[size];

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: maxRating }, (_, index) => {
        const starNumber = index + 1;
        const isFilled = starNumber <= Math.floor(rating);
        const isHalfFilled =
          starNumber === Math.ceil(rating) && rating % 1 !== 0;

        return (
          <div key={index} className="relative">
            <Icon
              name="Star"
              size={iconSize}
              className={`${isFilled || isHalfFilled ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`}
            />
            {isHalfFilled && (
              <div className="absolute inset-0 overflow-hidden w-1/2">
                <Icon
                  name="Star"
                  size={iconSize}
                  className="text-yellow-400 fill-yellow-400"
                />
              </div>
            )}
          </div>
        );
      })}
      {showNumber && (
        <span className="text-sm text-gray-400 ml-1">{rating.toFixed(1)}</span>
      )}
    </div>
  );
};

export default StarRating;
