# Application of DSA — Server (FastAPI)

Part of the [Application of DSA](../README.md) monorepo. Python API for product-shaped DSA demos at scale.

## Stack

- Python **3.11+**, managed with **uv**
- **FastAPI** (`fastapi[standard]`)
- Layout: `app/main.py`, routers in `app/api/`, algorithms in `app/dsa/`

Agent notes: [AGENTS.md](./AGENTS.md).

## Get started

```bash
cp .env.example .env   # optional
uv sync
uv run --env-file .env fastapi dev
```

- Health: [http://localhost:3000/health](http://localhost:3000/health)
- Swagger: [http://localhost:3000/docs](http://localhost:3000/docs)

Default port is `3000` (`PORT` in `.env`). Point the Expo app at it with `EXPO_PUBLIC_API_URL`.

## Layout

| Path | Role |
|------|------|
| `app/main.py` | FastAPI app, CORS, `/health` |
| `app/api/` | Route modules |
| `app/dsa/` | Pure Python DSA cores |
| `app/core/` | Settings / shared config |

## DSA demos

None yet — `/health` only. See root [README](../README.md).

