import { useCounter } from "./hooks/useCounter";
import { Counter } from "./components/Counter";
import { Controls } from "./components/Controls";

export default function Popup() {
  const { count, loading, error, increment, decrement, reset, setCount } = useCounter();

  if (loading) {
    return (
      <div className="flex min-h-[240px] items-center justify-center">
        <div className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[240px] flex-col items-center justify-between px-6 py-6">
      <div />

      {error && (
        <div
          className="mb-4 w-full rounded-lg px-3 py-2 text-center text-xs"
          style={{ backgroundColor: "rgba(239, 68, 68, 0.1)", color: "#ef4444" }}
        >
          {error}
        </div>
      )}

      <Counter count={count} onSetCount={setCount} />

      <div className="mt-8">
        <Controls onIncrement={increment} onDecrement={decrement} onReset={reset} />
      </div>
    </div>
  );
}
