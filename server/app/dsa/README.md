# `app/dsa/`

Pure Python **data structures and algorithms** used by the API.

## Rules

- Prefer no FastAPI / HTTP imports here — keep cores testable.
- One feature (or structure) per subpackage, e.g. `app/dsa/autocomplete_trie/`.
- Document **problem → why this DS/algorithm** in a short module docstring or README.
- Wire HTTP in `app/api/`; call into these modules from route handlers.
