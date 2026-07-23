# Tally

The fastest, simplest counter for Chrome.

## Features

- One-click increment and decrement
- Toolbar badge showing current count
- Persistent storage across browser restarts
- Light and dark themes
- Smooth, responsive UI

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- Chrome Extension Manifest V3

## Getting Started

### Development

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

### Load into Chrome

1. Open `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select the `dist/` folder

## Project Structure

```
tally-extension/
├── public/
│   ├── manifest.json
│   └── icons/
├── src/
│   ├── background/
│   │   └── service-worker.ts
│   ├── constants/
│   │   ├── app.ts
│   │   ├── colors.ts
│   │   └── storage.ts
│   ├── features/
│   │   └── counter/
│   │       ├── Popup.tsx
│   │       ├── components/
│   │       │   ├── Counter.tsx
│   │       │   └── Controls.tsx
│   │       ├── hooks/
│   │       │   └── useCounter.ts
│   │       └── index.ts
│   ├── lib/
│   │   └── chrome.ts
│   ├── services/
│   │   ├── counter.service.ts
│   │   └── badge.service.ts
│   ├── types/
│   │   └── counter.ts
│   ├── utils/
│   │   └── date.ts
│   └── main.tsx
├── docs/
├── tests/
├── README.md
├── CONTRIBUTING.md
└── package.json
```

## Roadmap

See [ROADMAP.md](./docs/ROADMAP.md) for the full development roadmap.

## License

MIT
