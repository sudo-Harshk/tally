import { Monitor, Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  theme: "light" | "dark" | "system";
  onToggle: (theme: "light" | "dark" | "system") => void;
}

const ORDER: ["system", "light", "dark"] = ["system", "light", "dark"];

const LABELS: Record<string, string> = {
  system: "System theme",
  light: "Light theme",
  dark: "Dark theme",
};

const ICONS = {
  system: Monitor,
  light: Sun,
  dark: Moon,
} as const;

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const handleClick = () => {
    const idx = ORDER.indexOf(theme);
    const next = ORDER[(idx + 1) % ORDER.length]!;
    onToggle(next);
  };

  const Icon = ICONS[theme];

  return (
    <button
      onClick={handleClick}
      className="flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-150 hover:bg-[var(--color-button)] active:scale-95"
      style={{ color: "var(--color-text-secondary)" }}
      aria-label={LABELS[theme]}
    >
      <Icon size={16} strokeWidth={2} />
    </button>
  );
}
