# Agents — Mobile (`react-native/`)

Part of the **Application of DSA** monorepo. Read this before changing the Expo app.

## Expo version (required)

This app uses **Expo SDK 57**. Before writing Expo APIs, check the versioned docs:

https://docs.expo.dev/versions/v57.0.0/

Do not assume APIs from older SDK blog posts or unversioned snippets.

## Stack

| Piece | Detail |
|-------|--------|
| Framework | Expo ~57, React 19, RN 0.86 |
| Routing | **expo-router** — routes in `src/app/` |
| Tabs | `NativeTabs` via `src/components/app-tabs.tsx` (+ `.web` variant) |
| Language | TypeScript (`strict`); alias `@/*` → `src/*`, `@/assets/*` → `assets/*` |
| Experiments | `typedRoutes`, `reactCompiler` in `app.json` |
| Entry | `expo-router/entry` (`package.json` `main`) |

## Layout

```
react-native/
├── app.json              # Expo config / plugins
├── assets/               # images, icons (import via @/assets/...)
├── src/
│   ├── app/              # File-based routes (index, explore, _layout)
│   ├── components/       # UI
│   ├── constants/        # theme tokens
│   ├── hooks/
│   ├── api/              # HTTP client → server (EXPO_PUBLIC_API_URL)
│   ├── dsa/              # Algorithm / data-structure cores (no UI)
│   └── global.css
└── package.json
```

## How to work here

1. **DSA logic** lives under `src/dsa/<feature>/` — pure TS, testable, named after the structure/algorithm.
2. **Screens** in `src/app/` stay thin: compose UI + call `dsa` / `api`.
3. **Server calls** go through `src/api/` only (base URL from env).
4. Prefer clarity for open-source learners; short “why this DS?” notes in the DSA module.
5. With React Compiler enabled, do not add `useMemo` / `useCallback` unless profiling shows need or existing code already uses them.
6. Keep heavy work off the JS thread (chunk, defer, or move to server).

## Commands

```bash
cd react-native
npm install
npm start                 # Expo dev server
npm run ios|android|web
npm run lint
```

Env: copy `.env.example` → `.env`. Use `EXPO_PUBLIC_API_URL` when the monorepo `server/` exists.

## Monorepo

- Root docs: `../README.md`, `../AGENTS.md`
- After feature changes, sync docs via `.cursor/skills/update-docs-on-code-change/`
