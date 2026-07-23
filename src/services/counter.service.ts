import { getStorage, setStorage } from "@/lib/chrome";
import { STORAGE_KEYS, STORAGE_VERSION } from "@/constants/storage";
import type { CounterData } from "@/types/counter";
import * as badge from "./badge.service";

function createDefault(): CounterData {
  const now = Date.now();
  return {
    version: STORAGE_VERSION,
    count: 0,
    createdAt: now,
    updatedAt: now,
  };
}

function migrate(data: Record<string, unknown>): CounterData {
  const version = data.version as number | undefined;

  switch (version) {
    case 1:
      return data as unknown as CounterData;
    default:
      return createDefault();
  }
}

export async function load(): Promise<CounterData> {
  const raw = await getStorage<CounterData>(STORAGE_KEYS.COUNTER);

  if (!raw) {
    const defaultData = createDefault();
    await save(defaultData);
    return defaultData;
  }

  if (raw.version !== STORAGE_VERSION) {
    const migrated = migrate(raw as unknown as Record<string, unknown>);
    await save(migrated);
    return migrated;
  }

  return raw;
}

export async function save(data: CounterData): Promise<void> {
  await setStorage(STORAGE_KEYS.COUNTER, data);
  await badge.updateBadge(data.count);
}

export async function updateCounter(
  updater: (current: CounterData) => CounterData,
): Promise<CounterData> {
  try {
    const current = await load();
    const updated = {
      ...updater(current),
      updatedAt: Date.now(),
    };

    const clampedCount = Math.max(0, updated.count);
    const finalData = { ...updated, count: clampedCount };

    await save(finalData);
    return finalData;
  } catch (error) {
    console.error("Failed to update counter:", error);
    return load();
  }
}

export async function increment(): Promise<CounterData> {
  return updateCounter((c) => ({ ...c, count: c.count + 1 }));
}

export async function decrement(): Promise<CounterData> {
  return updateCounter((c) => ({ ...c, count: c.count - 1 }));
}

export async function reset(): Promise<CounterData> {
  return updateCounter((c) => ({ ...c, count: 0 }));
}

export async function setCount(count: number): Promise<CounterData> {
  return updateCounter((c) => ({ ...c, count }));
}
