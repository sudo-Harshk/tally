import { getStorage, setStorage } from "@/lib/chrome";
import { STORAGE_KEYS, SETTINGS_VERSION } from "@/constants/storage";
import type { SettingsData } from "@/types/settings";

function createDefault(): SettingsData {
  return {
    version: SETTINGS_VERSION,
    theme: "system",
  };
}

function migrate(data: Record<string, unknown>): SettingsData {
  const version = data.version as number | undefined;

  switch (version) {
    case 1:
      return data as unknown as SettingsData;
    default:
      return createDefault();
  }
}

export async function load(): Promise<SettingsData> {
  const raw = await getStorage<SettingsData>(STORAGE_KEYS.SETTINGS);

  if (!raw) {
    const defaultData = createDefault();
    await save(defaultData);
    return defaultData;
  }

  if (raw.version !== SETTINGS_VERSION) {
    const migrated = migrate(raw as unknown as Record<string, unknown>);
    await save(migrated);
    return migrated;
  }

  return raw;
}

export async function save(data: SettingsData): Promise<void> {
  await setStorage(STORAGE_KEYS.SETTINGS, data);
}

export async function updateSettings(
  updater: (current: SettingsData) => SettingsData,
): Promise<SettingsData> {
  try {
    const current = await load();
    const updated = updater(current);
    await save(updated);
    return updated;
  } catch (error) {
    console.error("Failed to update settings:", error);
    return load();
  }
}
