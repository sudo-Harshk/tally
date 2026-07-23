import { useState, useEffect, useCallback } from "react";
import type { CounterData } from "@/types/counter";
import * as counter from "@/services/counter.service";

export function useCounter() {
  const [data, setData] = useState<CounterData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    counter
      .load()
      .then(setData)
      .catch((err) => setError(String(err)))
      .finally(() => setLoading(false));
  }, []);

  const handleUpdate = useCallback(
    async (updater: (current: CounterData) => CounterData) => {
      try {
        setError(null);
        const updated = await counter.updateCounter(updater);
        setData(updated);
        return updated;
      } catch (err) {
        setError(String(err));
        return null;
      }
    },
    [],
  );

  const handleIncrement = useCallback(() => {
    return handleUpdate((c) => ({ ...c, count: c.count + 1 }));
  }, [handleUpdate]);

  const handleDecrement = useCallback(() => {
    return handleUpdate((c) => ({ ...c, count: c.count - 1 }));
  }, [handleUpdate]);

  const handleReset = useCallback(() => {
    return handleUpdate((c) => ({ ...c, count: 0 }));
  }, [handleUpdate]);

  const handleSetCount = useCallback(
    (count: number) => {
      return handleUpdate((c) => ({ ...c, count }));
    },
    [handleUpdate],
  );

  return {
    count: data?.count ?? 0,
    loading,
    error,
    increment: handleIncrement,
    decrement: handleDecrement,
    reset: handleReset,
    setCount: handleSetCount,
  };
}
