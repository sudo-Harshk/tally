# Changelog

## [1.2.0] - 2026-07-24

### Added

- Named keyboard commands: Ctrl+Shift+Up/Down/X (increment/decrement/reset)
- Service worker command handler via chrome.commands API
- Live popup updates via chrome.storage.onChanged listener
- ES module service worker (`"type": "module"` in manifest)

## [1.1.0] - 2026-07-24

### Added

- Theme toggle (System / Light / Dark) with persisted preference
- Inset card layout with distinct surface and card background tokens
- `prefers-reduced-motion` support for accessibility
- Loading state pulse animation

### Changed

- CSS refactored from media query to class-based theming (`:root.dark`)
- Button shadows for increment/decrement controls
- Counter number transitions smooth on theme change
- Popup layout restructured with card container and icon-only header

### Removed

- Unused `POPUP` constant from `constants/app.ts`

## [1.0.0] - 2026-07-23

### Added

- Initial release
- Counter with increment/decrement/reset
- Toolbar badge showing current count
- Persistent storage with chrome.storage.local
- Light and dark themes
- Responsive popup UI
