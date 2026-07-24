import { useCounter } from "./hooks/useCounter";
import { useSettings } from "./hooks/useSettings";
import { useKeyboardShortcuts } from "./hooks/useKeyboardShortcuts";
import { Counter } from "./components/Counter";
import { Controls } from "./components/Controls";
import { ThemeToggle } from "./components/ThemeToggle";

export default function Popup() {
  const { count, loading, error, increment, decrement, reset, setCount } = useCounter();
  const { theme, setTheme } = useSettings();

  useKeyboardShortcuts({ onIncrement: increment, onDecrement: decrement, onReset: reset });

  if (loading) {
    return (
      <div className="flex min-h-[240px] items-center justify-center">
        <span className="loading-text text-sm" style={{ color: "var(--color-text-secondary)" }}>
          Loading...
        </span>
      </div>
    );
  }

  return (
    <div className="flex min-h-[240px] flex-col px-3 py-3">
      <div className="flex w-full justify-end">
        <ThemeToggle theme={theme} onToggle={setTheme} />
      </div>

      <div className="card flex flex-1 flex-col items-center justify-between">
        {error && (
          <div
            className="mb-4 w-full rounded-lg px-3 py-2 text-center text-xs"
            style={{ backgroundColor: "rgba(239, 68, 68, 0.1)", color: "#ef4444" }}
          >
            {error}
          </div>
        )}

        <Counter count={count} onSetCount={setCount} />

        <Controls onIncrement={increment} onDecrement={decrement} onReset={reset} />
      </div>
    </div>
  );
}
