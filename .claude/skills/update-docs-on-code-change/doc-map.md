# Doc map — Application of DSA

Which docs to touch for which code areas.

| Code change | Update these |
|-------------|--------------|
| Repo purpose / open-source mission | `README.md`, `AGENTS.md`, `CLAUDE.md` |
| License / copyright | Root `LICENSE.md`; README License section; `license` in `react_native/package.json` and `server/pyproject.toml` |
| `react_native/` scaffolding, scripts, navigation | `README.md` (run/dev), `react_native/AGENTS.md` if conventions change |
| `server/` scaffolding, scripts, framework | `README.md` (run/dev), `AGENTS.md`, `server/AGENTS.md` if conventions change |
| New DSA demo (mobile) | `README.md` feature list; optional note under `react_native/src/dsa/<feature>/`; keep “why this DS?” |
| New DSA demo (server) | `README.md` feature list; optional note under `server/app/dsa/<feature>/`; align name with mobile twin if any |
| Paired client + server demo | Both sides + one README section linking them |
| API routes / contracts | `README.md` or `server/docs/api.md` (create when first needed); AGENTS only if agents must know |
| Env vars | `server/.env.example`, `react_native/.env.example`, README setup blurb |
| Security-relevant auth/storage | `CLAUDE.md` (Security section) only if the *policy* changed; otherwise feature docs |
| New CLAUDE.md rules or `.claude/` skills | `AGENTS.md` rules/skills index |

## Preferred feature doc shape

When adding a per-feature note:

```markdown
# [Feature name]

**Problem:** …

**Data structure / algorithm:** …

**Where:**
- Client: `react_native/...`
- Server: `server/...` (if any)

**Run:** …
```

## Do not

- Duplicate long API specs in both README and AGENTS—link once.
- Document unimplemented features as shipped.
- Commit secrets into examples.
