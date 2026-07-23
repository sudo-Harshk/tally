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
