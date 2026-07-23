# Architecture

## Data Flow

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

## Key Principles

- Components never write directly to storage or update the badge
- All Chrome API calls go through `lib/chrome.ts`
- Business logic lives in services
- UI components are presentational where possible

## Storage Schema

```typescript
interface CounterData {
  version: 1;
  count: number;
  createdAt: number;
  updatedAt: number;
}
```

## Version Migration

Never modify an existing schema in place. Introduce a new version and migrate forward.

## Error Handling

| Failure | Behavior |
|---------|----------|
| Storage read fails | Initialize default counter |
| Storage write fails | Show error message, keep previous value |
| Badge update fails | Don't block counter update |
