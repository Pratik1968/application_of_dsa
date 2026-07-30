# Agents — Server (`server/`)

Part of the **Application of DSA** monorepo. Read this before changing the API.

## Stack

| Piece | Detail |
|-------|--------|
| Language | **Python ≥ 3.11** (pinned in `.python-version`) |
| Package / runner | **uv** (`pyproject.toml`, `uv.lock`) |
| Framework | **FastAPI** (`fastapi[standard]`) |
| Entry app | `app.main:app` |
| Config | `app/core/config.py` + env (see `.env.example`) |

## Layout

```
server/
├── app/
│   ├── main.py          # FastAPI app, middleware, /health
│   ├── core/            # settings, shared deps
│   ├── api/             # routers / path operations
│   └── dsa/             # algorithm cores (pure Python)
├── main.py              # small CLI hint (not the ASGI app)
├── pyproject.toml
├── uv.lock
└── .env.example
```

## How to work here

1. **DSA logic** → `app/dsa/<feature>/` (prefer no FastAPI imports).
2. **HTTP** → thin routers in `app/api/`; include them from `app/main.py`.
3. Validate inputs with Pydantic models; return consistent JSON errors.
4. Auth before authorize; avoid IDOR; no secrets in git.
5. Name the structure/algorithm; short “why this DS?” in the DSA module.

## Commands

```bash
cd server
cp .env.example .env          # optional
uv sync
uv run --env-file .env fastapi dev
# or:
uv run --env-file .env uvicorn app.main:app --reload --host 0.0.0.0 --port 3000
```

Health check: `GET http://localhost:3000/health` → `{"status":"ok"}`.

OpenAPI: `http://localhost:3000/docs`.

Mobile client should set `EXPO_PUBLIC_API_URL=http://localhost:3000` (use your machine LAN IP for a physical device).

## Monorepo

- Root docs: `../README.md`, `../AGENTS.md`
- After API/DSA changes, sync docs via `.claude/skills/update-docs-on-code-change/`
