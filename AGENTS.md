# AGENTS.md — Application of DSA

Guidance for AI agents in this **open-source** repository.

## What this project is

We show **real applications of data structures and algorithms** in:

- `react_native/` — Expo (TypeScript) mobile features and interactive demos
- `server/` — FastAPI (Python) APIs and systems uses of the same ideas

Goal: learners and contributors see *why* a heap, trie, graph, queue, etc. belongs in a real app — not isolated coding-challenge solutions.

Licensed under MIT — see root [`LICENSE.md`](./LICENSE.md).

| Side | Status / source of truth |
|------|---------------------------|
| Mobile | Expo SDK 57 — `react_native/package.json`, `react_native/AGENTS.md` |
| Server | FastAPI + uv — `server/pyproject.toml`, `server/AGENTS.md` |

## Goals for agents

| Goal | How |
|------|-----|
| Answer project questions | Search code; use `CLAUDE.md` + this file |
| Fix bugs | Root cause, minimal diff, how to verify |
| Security | Follow the Security section in root `CLAUDE.md` |
| Teach via features | Follow the "Real DSA applications" section in root `CLAUDE.md` |
| Keep docs current | After code changes, use `.claude/skills/update-docs-on-code-change/` |

## Conventions

- **Mobile:** TypeScript — DSA in `react_native/src/dsa/`; UI in `src/app` / `src/components`; HTTP via `src/api`.
- **Server:** Python 3.11+ / FastAPI / uv — DSA in `server/app/dsa/`; routers in `app/api/`; app in `app/main.py`.
- Separate DSA cores from UI/HTTP wiring; name the structure/algorithm clearly.
- No secrets in git (`.env.example` only).
- Also read package AGENTS: `react_native/AGENTS.md`, `server/AGENTS.md`.

## Claude Code context files

- `CLAUDE.md` (root) — always on: imports this `AGENTS.md`, adds DSA-applications, security, bug/Q&A, and doc-sync rules
- `react_native/CLAUDE.md` — loaded under `react_native/**`; imports `react_native/AGENTS.md`
- `server/CLAUDE.md` — loaded under `server/**`; imports `server/AGENTS.md`

## Skills

- `.claude/skills/update-docs-on-code-change` — sync README / AGENTS / feature docs / `.env.example` when code changes

## Suggested next steps (human)

1. Add first paired demo (e.g. autocomplete: trie in `server/app/dsa/` + RN UI)
2. Wire `EXPO_PUBLIC_API_URL=http://localhost:3000` in `react_native/.env`
