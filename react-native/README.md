# Application of DSA — Mobile (Expo)

Part of the [Application of DSA](../README.md) monorepo. Expo + TypeScript client for product-shaped DSA demos.

## Stack

- Expo SDK **57**, expo-router (`src/app/`), React Compiler
- TypeScript: `@/*` → `src/*`, `@/assets/*` → `assets/*`
- DSA cores: `src/dsa/` · API client: `src/api/`
- Env: copy `.env.example` → `.env` (`EXPO_PUBLIC_API_URL`)

Agent notes: [AGENTS.md](./AGENTS.md) (always check Expo v57 docs linked there).

## Get started

```bash
npm install
npm start
```

Then open in a development build, Android emulator, iOS simulator, or Expo Go.

### Scripts

| Script | Purpose |
|--------|---------|
| `npm start` | Expo dev server |
| `npm run ios` / `android` / `web` | Platform targets |
| `npm run lint` | `expo lint` |
| `npm run reset-project` | Move starter UI aside for a blank `src/app` |

## Layout

- `src/app/` — routes (Home, Explore)
- `src/components/` — UI
- `src/dsa/` — algorithms (no React)
- `src/api/` — `apiFetch` → monorepo server

## DSA demos

None yet — starter UI + empty `src/dsa/`. See root [README](../README.md).

## Learn more

- [Expo docs (SDK 57)](https://docs.expo.dev/versions/v57.0.0/)
