# Architectural Decisions

## 2026-07-23

**Decision:** Store data in chrome.storage.local

**Reason:** Need persistence without requiring sign-in

**Alternatives:** chrome.storage.sync

**Status:** Accepted

---

## 2026-07-23

**Decision:** Use single mutation API (updateCounter)

**Reason:** Avoid four different write paths (increment, decrement, reset, edit)

**Alternatives:** Separate functions for each operation

**Status:** Accepted

---

## 2026-07-23

**Decision:** Clamp negative values to 0

**Reason:** Simplify UX and avoid confusing states for general-purpose counter

**Alternatives:** Allow negative values

**Status:** Accepted

---

## 2026-07-24

**Decision:** Use class-based theming (`:root.dark`) instead of `@media (prefers-color-scheme: dark)`

**Reason:** User preference toggle requires runtime control via JavaScript. Media queries are read-only and cannot be overridden per-session.

**Alternatives:** `prefers-color-scheme` media query, inline `data-theme` attribute

**Status:** Accepted

---

## 2026-07-24

**Decision:** Store settings in a separate storage key from counter data

**Reason:** Settings and counter are independent concerns with different lifecycles. Coupling them would require migrating both schemas on any change to either.

**Alternatives:** Merge into `CounterData`, use `chrome.storage.sync`

**Status:** Accepted
