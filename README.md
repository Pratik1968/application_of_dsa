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
