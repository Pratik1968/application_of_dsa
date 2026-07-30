# Application of DSA

**Open-source** project that shows **real-world applications of data structures and algorithms** in:

- **React Native (Expo)** — interactive, product-shaped mobile features
- **Server (FastAPI)** — Python APIs that use the same ideas at scale

Not a dump of puzzle solutions: each example ties a DS/algorithm to a concrete problem (search, feeds, routing, undo, rate limiting, recommendations, offline sync, and more).

## Structure

```
application_of_dsa/
├── react-native/   # Expo SDK 57 + TypeScript (expo-router, src/dsa, src/api)
├── server/         # Python 3.11 + FastAPI via uv (app/api, app/dsa)
├── AGENTS.md       # Context for AI coding agents
└── .cursor/rules/  # Cursor project rules
```

## Status

- **Mobile:** Expo app under `react-native/` (SDK 57, TypeScript, expo-router, `src/dsa/` + `src/api/`). No DSA demos yet.
- **Server:** FastAPI app under `server/` (`app.main:app`, `/health`, `app/dsa/` ready). No DSA demos yet.

## Development

```bash
# Mobile (Expo)
cd react-native
cp .env.example .env   # set EXPO_PUBLIC_API_URL=http://localhost:3000
npm install
npm start              # or: npm run ios | npm run android | npm run web

# Server (FastAPI + uv)
cd server
cp .env.example .env
uv sync
uv run --env-file .env fastapi dev
# Health: http://localhost:3000/health
```

## DSA demos

None yet. Planned first paired demo: autocomplete (trie on server + RN UI).

## Contributing

- Prefer clear modules that name the data structure or algorithm in use.
- Keep mobile and server demos aligned when teaching the same idea.
- Never commit secrets; copy from `.env.example` files under `react-native/` and `server/`.
- After feature/API changes, keep README and related docs in sync (agents use `.cursor/skills/update-docs-on-code-change/`).

See [AGENTS.md](./AGENTS.md) for agent/contributor conventions.

## Why this app

The core intent of this application is to make data structures and algorithms tangible by grounding each one in a real-world use case rather than an isolated puzzle. Instead of teaching a trie, a heap, or a graph as an abstract exercise, we pair it with a product feature that actually needs it — autocomplete, a priority-based task queue, a recommendation feed, undo/redo, rate limiting, routing, offline sync — implemented end to end across the mobile client and the server. The goal is for anyone browsing this repo to see not just *how* a data structure works, but *why* it exists and *where* it shows up in software they use every day.

Each demo is designed to be explored from two angles at once: the `src/dsa/` (or `app/dsa/`) module shows the underlying implementation with short "why this DS?" notes, while the paired UI or API endpoint shows the same structure doing real work under realistic constraints — latency, memory, concurrent updates. Keeping the mobile and server versions aligned on the same concept also makes it easy to compare how the same idea is expressed in a client-side, UI-driven context versus a server-side, scale-driven one.
