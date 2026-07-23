import { Minus, Plus, RotateCcw } from "lucide-react";

interface ControlsProps {
  onIncrement: () => Promise<unknown>;
  onDecrement: () => Promise<unknown>;
  onReset: () => Promise<unknown>;
}

export function Controls({ onIncrement, onDecrement, onReset }: ControlsProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <button
        onClick={() => onDecrement()}
        className="flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-150 hover:-translate-y-0.5 hover:brightness-95 active:scale-[0.96]"
        style={{
          backgroundColor: "var(--color-button)",
          color: "var(--color-text)",
        }}
        aria-label="Decrement"
      >
        <Minus size={22} strokeWidth={2.5} />
      </button>

      <button
        onClick={() => onReset()}
        className="flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-150 hover:rotate-12 active:scale-[0.96]"
        style={{
          color: "var(--color-text-secondary)",
          backgroundColor: "transparent",
        }}
        aria-label="Reset"
      >
        <RotateCcw size={18} strokeWidth={2} />
      </button>

      <button
        onClick={() => onIncrement()}
        className="flex h-14 w-14 items-center justify-center rounded-2xl text-white transition-all duration-150 hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.96]"
        style={{
          backgroundColor: "var(--color-primary)",
        }}
        aria-label="Increment"
      >
        <Plus size={22} strokeWidth={2.5} />
      </button>
    </div>
  );
}
