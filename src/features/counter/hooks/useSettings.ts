import { useState, useEffect, useCallback } from "react";
import type { SettingsData } from "@/types/settings";
import * as settings from "@/services/settings.service";

type Theme = SettingsData["theme"];

function resolveIsDark(theme: Theme): boolean {
  if (theme === "dark") return true;
  if (theme === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function applyThemeClass(isDark: boolean): void {
  document.documentElement.classList.toggle("dark", isDark);
}

export function useSettings() {
  const [theme, setThemeState] = useState<Theme>("system");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    settings
      .load()
      .then((data) => {
        setThemeState(data.theme);
        applyThemeClass(resolveIsDark(data.theme));
      })
      .catch(() => {
        applyThemeClass(resolveIsDark("system"));
      })
      .finally(() => setLoaded(true));
  }, []);

  useEffect(() => {
    if (!loaded) return;

    if (theme === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const onChange = () => applyThemeClass(mq.matches);
      onChange();
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    }

    applyThemeClass(theme === "dark");
  }, [theme, loaded]);

  const setTheme = useCallback(
    (next: Theme) => {
      setThemeState(next);
      settings.updateSettings((current) => ({ ...current, theme: next }));
    },
    [],
  );

  return { theme, setTheme };
}
