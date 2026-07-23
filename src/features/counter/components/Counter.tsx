import { useState, useRef, useEffect } from "react";

interface CounterProps {
  count: number;
  onSetCount: (count: number) => Promise<unknown>;
}

export function Counter({ count, onSetCount }: CounterProps) {
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState(String(count));
  const [isAnimating, setIsAnimating] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const prevCountRef = useRef(count);

  useEffect(() => {
    if (prevCountRef.current !== count) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 150);
      prevCountRef.current = count;
      return () => clearTimeout(timer);
    }
  }, [count]);

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [editing]);

  useEffect(() => {
    if (!editing) {
      setEditValue(String(count));
    }
  }, [count, editing]);

  const handleSubmit = () => {
    const parsed = parseInt(editValue, 10);
    if (!isNaN(parsed)) {
      onSetCount(parsed);
    } else {
      setEditValue(String(count));
    }
    setEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    } else if (e.key === "Escape") {
      setEditValue(String(count));
      setEditing(false);
    }
  };

  if (editing) {
    return (
      <input
        ref={inputRef}
        type="number"
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        onBlur={handleSubmit}
        onKeyDown={handleKeyDown}
        className="w-full border-b-2 bg-transparent text-center text-[60px] font-bold leading-none outline-none"
        style={{
          borderColor: "var(--color-focus)",
          color: "var(--color-text)",
        }}
      />
    );
  }

  return (
    <button
      onClick={() => setEditing(true)}
      className={`w-full cursor-pointer bg-transparent text-center text-[60px] font-bold leading-none transition-opacity hover:opacity-80 ${
        isAnimating ? "animate-pulse" : ""
      }`}
      style={{
        color: "var(--color-text)",
        fontFamily: '"Geist Mono", monospace',
        letterSpacing: "-0.04em",
      }}
    >
      {count}
    </button>
  );
}
