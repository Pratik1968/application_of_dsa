# AGENTS.md — Application of DSA

Guidance for AI agents in this **open-source** repository.

## What this project is

We show **real applications of data structures and algorithms** in:

- `react-native/` — Expo (TypeScript) mobile features and interactive demos
- `server/` — FastAPI (Python) APIs and systems uses of the same ideas

Goal: learners and contributors see *why* a heap, trie, graph, queue, etc. belongs in a real app — not isolated coding-challenge solutions.

| Side | Status / source of truth |
|------|---------------------------|
| Mobile | Expo SDK 57 — `react-native/package.json`, `react-native/AGENTS.md` |
| Server | FastAPI + uv — `server/pyproject.toml`, `server/AGENTS.md` |

## Goals for agents

| Goal | How |
|------|-----|
| Answer project questions | Search code; use Cursor rules + this file |
| Fix bugs | Root cause, minimal diff, how to verify |
| Security | Follow `.cursor/rules/security.mdc` |
| Teach via features | Follow `.cursor/rules/dsa-applications.mdc` |
| Keep docs current | After code changes, use `.cursor/skills/update-docs-on-code-change/` |

## Conventions

- **Mobile:** TypeScript — DSA in `react-native/src/dsa/`; UI in `src/app` / `src/components`; HTTP via `src/api`.
- **Server:** Python 3.11+ / FastAPI / uv — DSA in `server/app/dsa/`; routers in `app/api/`; app in `app/main.py`.
- Separate DSA cores from UI/HTTP wiring; name the structure/algorithm clearly.
- No secrets in git (`.env.example` only).
- Also read package AGENTS: `react-native/AGENTS.md`, `server/AGENTS.md`.

## Cursor rules

- `project-overview.mdc` — always on
- `dsa-applications.mdc` — always on
- `security.mdc` — always on
- `bugfix-and-qa.mdc` — always on
- `keep-docs-in-sync.mdc` — always on (triggers doc sync after code changes)
- `react-native.mdc` — `react-native/**`
- `server.mdc` — `server/**`

## Skills

- `update-docs-on-code-change` — sync README / AGENTS / feature docs / `.env.example` when code changes

## Suggested next steps (human)

1. Add first paired demo (e.g. autocomplete: trie in `server/app/dsa/` + RN UI)
2. Wire `EXPO_PUBLIC_API_URL=http://localhost:3000` in `react-native/.env`
3. If `server/` is meant to live only in this monorepo, consider removing the nested `server/.git`
