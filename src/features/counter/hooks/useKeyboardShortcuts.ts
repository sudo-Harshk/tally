import { useEffect } from "react";

interface KeyboardShortcutOptions {
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
}

export function useKeyboardShortcuts({
  onIncrement,
  onDecrement,
  onReset,
}: KeyboardShortcutOptions) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (document.activeElement?.tagName === "INPUT") return;

      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          onIncrement();
          break;
        case "ArrowDown":
          e.preventDefault();
          onDecrement();
          break;
        case "r":
        case "R":
          e.preventDefault();
          onReset();
          break;
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onIncrement, onDecrement, onReset]);
}
