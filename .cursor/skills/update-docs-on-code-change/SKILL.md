---
name: update-docs-on-code-change
description: >-
  Keeps README, AGENTS.md, feature docs, .env.example, and Cursor rules in sync
  with code changes in react-native/ and server/. Use after adding or changing
  features, APIs, DSA demos, project structure, scripts, env vars, or stack
  choices; when the user asks to update docs; or before finishing a PR that
  changes behavior contributors need to discover.
---

# Update docs when code changes

After meaningful code changes in this repo, sync documentation in the same turn (or immediately after the code lands). Do not leave docs stale.

## When to run

Run this skill if any of the following changed:

- New or renamed DSA feature / demo (client or server)
- Public API routes, request/response shapes, or auth
- App structure, entrypoints, or npm/yarn scripts
- Env vars, ports, or required setup steps
- Stack choices (Expo vs bare RN, FastAPI structure, DB, etc.)
- Mission-level behavior that `README` / `AGENTS.md` / rules describe

Skip for tiny pure refactors, formatting-only diffs, or fixes with no user/contributor-facing behavior change.

## Workflow

Copy and track:

```
Doc sync:
- [ ] 1. Diff the change set
- [ ] 2. Map touched code → docs (see doc-map.md)
- [ ] 3. Update only stale docs
- [ ] 4. Keep DSA “why this structure?” accurate
- [ ] 5. Verify install/run commands still work as written
```

### 1. Diff the change set

Inspect what actually changed (`git diff`, open files, or the session’s edits). List contributor-facing impacts: features, commands, APIs, env, layout.

### 2. Map code → docs

Use [doc-map.md](doc-map.md). Prefer editing existing sections over adding new top-level files.

### 3. Update docs (rules)

- **Truth over aspiration**: document what exists now; mark “planned” clearly if needed.
- **README.md**: purpose, structure, how to run, list of DSA demos/features once they exist.
- **AGENTS.md**: agent-facing layout, conventions, and pointers; keep aligned with README facts.
- **Feature / DSA notes**: short “problem → DS/algorithm → where in code” for each demo; mirror client/server when both exist.
- **`.env.example`**: add/remove keys to match code; never real secrets.
- **`.cursor/rules/*.mdc`**: only if conventions or mission changed—not for every feature.

### 4. DSA accuracy

If code uses a different structure than docs claim, fix the docs (or fix the code if docs were the source of truth for the demo’s teaching goal). Name the algorithm/structure explicitly.

### 5. Done criteria

- A new contributor could find and run the changed feature from the docs.
- No contradictory statements between README, AGENTS.md, and rules.
- No leftover docs for deleted features (remove or mark removed).

## Output

Briefly tell the user which doc files were updated and why (one line each). If nothing was stale, say so.
