/// <reference types="chrome" />

export function getStorage<T>(key: string): Promise<T | undefined> {
  return new Promise((resolve) => {
    chrome.storage.local.get(key, (result: Record<string, unknown>) => {
      if (chrome.runtime.lastError) {
        console.error("Storage read error:", chrome.runtime.lastError);
        resolve(undefined);
        return;
      }
      resolve(result[key] as T | undefined);
    });
  });
}

export function setStorage<T>(key: string, value: T): Promise<void> {
  return new Promise((resolve, reject) => {
    chrome.storage.local.set({ [key]: value }, () => {
      if (chrome.runtime.lastError) {
        console.error("Storage write error:", chrome.runtime.lastError);
        reject(chrome.runtime.lastError);
        return;
      }
      resolve();
    });
  });
}

export function setBadgeText(text: string): Promise<void> {
  return new Promise((resolve) => {
    chrome.action.setBadgeText({ text }, () => {
      if (chrome.runtime.lastError) {
        console.error("Badge text error:", chrome.runtime.lastError);
      }
      resolve();
    });
  });
}

export function setBadgeBackgroundColor(color: string): Promise<void> {
  return new Promise((resolve) => {
    chrome.action.setBadgeBackgroundColor({ color }, () => {
      if (chrome.runtime.lastError) {
        console.error("Badge color error:", chrome.runtime.lastError);
      }
      resolve();
    });
  });
}
