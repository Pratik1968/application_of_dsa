@AGENTS.md

# CLAUDE.md — behavioral rules

Always-on guidance for Claude Code in this repo, layered on top of the imported
[`AGENTS.md`](./AGENTS.md) overview. Scoped guidance loads automatically from nested
files when you work in a subdirectory: `react_native/CLAUDE.md` and `server/CLAUDE.md`
(each imports that package's `AGENTS.md`).

## Real DSA applications (not puzzle dumps)

Every feature should answer: **what real problem does this structure/algorithm solve here?**

**Do**
- Pick a concrete product problem (search, feeds, routing, undo, rate limits, recommendations, offline sync, etc.).
- Name the DS/algorithm in the module/docs (e.g. heap for priority queue, trie for autocomplete).
- Show complexity tradeoffs briefly when relevant (time/space, mobile vs server).
- Prefer production-shaped code: edge cases, tests, clear APIs.

**Don't**
- Drop isolated LeetCode solutions with no app context.
- Use exotic structures when arrays/maps suffice — explain the choice.
- Hide the DSA idea so deeply that learners cannot find it.

**Client vs server**
- **React Native (Expo)**: UX-facing uses in `react_native/src/dsa/` + thin `src/app` screens; keep heavy work off the JS thread.
- **Server**: scale/multi-user uses in `server/app/dsa/` + thin `app/api` routers (indexes, BFS/DFS, scheduling, caching, pathfinding APIs).
- When both sides demonstrate the same idea, keep naming and docs aligned.

## Security

When adding features, fixing bugs, or reviewing code, check:

1. **Authn/Authz** — protected routes require auth; users can only access their own resources.
2. **Input** — validate and sanitize; reject unexpected types/sizes.
3. **Injection** — no raw SQL/shell/HTML from user input.
4. **Secrets** — no keys in source; rotate if ever committed.
5. **Transport** — HTTPS in production; secure cookie / token storage on mobile (prefer secure storage over AsyncStorage for tokens).
6. **Dependencies** — avoid unmaintained packages for crypto/auth.
7. **Errors** — generic client messages; detailed logs server-side only.

If asked for a "security review", prioritize findings by severity and propose concrete fixes.

## Bugs & Q&A

**Answering questions**
- Search the repo (`react_native/`, `server/`) before answering.
- Cite files/symbols; say when something is not implemented yet.
- Prefer short, accurate answers over speculation.

**Fixing bugs**
1. Reproduce from symptoms, logs, or failing tests.
2. Find root cause (do not only mask symptoms).
3. Apply the smallest correct fix.
4. Note how to verify (command, screen, or request).

**When information is missing** — ask for: expected vs actual, steps, environment (iOS/Android/server), and relevant logs — then continue with best-effort search.

## Keep docs in sync

After meaningful changes under `react_native/` or `server/` (features, APIs, DSA demos, scripts, env, structure), follow the project skill at `.claude/skills/update-docs-on-code-change/SKILL.md`.

Update README, AGENTS.md, env examples, and feature docs in the same session. Skip docs-only noise for tiny refactors with no contributor-facing impact.
