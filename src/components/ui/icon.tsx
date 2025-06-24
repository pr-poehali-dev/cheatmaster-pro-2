import { icons, LucideIcon } from "lucide-react";

interface IconProps {
  name: keyof typeof icons;
  size?: number;
  className?: string;
  fallback?: keyof typeof icons;
}

const Icon = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}: IconProps) => {
  const LucideIcon =
    (icons[name] as LucideIcon) || (icons[fallback] as LucideIcon);

  return <LucideIcon size={size} className={className} />;
};

export default Icon;
