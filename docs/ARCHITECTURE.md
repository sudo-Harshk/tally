# Architecture

## Data Flow

### Counter

```
Popup
   ↓
useCounter()
   ↓
counter.service.ts
   ↓
lib/chrome.ts
   ↓
chrome.storage.local
   ↓
badge.service.ts
   ↓
UI re-renders
```

### Settings (Theme)

```
useSettings()
   ↓
settings.service.ts
   ↓
lib/chrome.ts
   ↓
chrome.storage.local
   ↓
useSettings applies .dark class on <html>
```

### Named Commands (Service Worker)

```
chrome.commands.onCommand
   ↓
service-worker.ts
   ↓
counter.service.ts (increment/decrement/reset)
   ↓
chrome.storage.local
   ↓
chrome.storage.onChanged fires
   ↓
useCounter() updates popup state
```

## Key Principles

- Components never write directly to storage or update the badge
- All Chrome API calls go through `lib/chrome.ts`
- Business logic lives in services
- UI components are presentational where possible
- `useSettings` owns all DOM-level theme class application

## Storage Schema

### CounterData

```typescript
interface CounterData {
  version: 1;
  count: number;
  createdAt: number;
  updatedAt: number;
}
```

### SettingsData

```typescript
interface SettingsData {
  version: 1;
  theme: "light" | "dark" | "system";
}
```

## Version Migration

Never modify an existing schema in place. Introduce a new version and migrate forward.

## Error Handling

| Failure | Behavior |
|---------|----------|
| Storage read fails | Initialize default counter / settings |
| Storage write fails | Show error message, keep previous value |
| Badge update fails | Don't block counter update |
