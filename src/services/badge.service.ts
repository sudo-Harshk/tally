import { setBadgeText, setBadgeBackgroundColor } from "@/lib/chrome";
import { COLORS } from "@/constants/colors";

function formatCount(count: number): string {
  if (count > 999) return "999+";
  return String(count);
}

export async function updateBadge(count: number): Promise<void> {
  const clampedCount = Math.max(0, count);
  const text = formatCount(clampedCount);

  await Promise.all([
    setBadgeText(text),
    setBadgeBackgroundColor(COLORS.primary),
  ]);
}

export async function clearBadge(): Promise<void> {
  await setBadgeText("");
}
