# AGENTS.md

## Project

- Minista 3 static site.
- JSX without React.
- SCSS for styles.
- Browser JS entry: `src/main.js`.
- Use `@/` alias for imports from `src`.

## Structure

- Pages: `src/pages`
- Sections: `src/sections`
- Components: `src/components`
- Layouts: `src/layouts`
- Browser JS: `src/modules`
- Shared styles/helpers: `src/styles`
- Assets: `src/assets`

## Code Rules

- Follow existing project patterns.
- Keep code simple and consistent.
- Use semantic HTML.
- Keep markup WordPress-friendly.
- Do not add React-specific logic.
- Reuse existing components, helpers, variables, and utilities before creating new ones.
- Use existing `Button` and `Icon` components when applicable.
- Avoid unnecessary nesting in JSX and SCSS.
- Keep class names predictable and readable.
- Avoid unnecessary abstractions and refactoring.
- Do not modify tooling or config files unless explicitly required.

## Component Pattern

- `Component.jsx`
- `Component.scss`
- `index.js`

## Agent Behavior

- Avoid reading unrelated files.
- Inspect only files directly related to the task.
- Prefer targeted search over reading whole directories.
- Prefer minimal diffs.
- Do not rewrite large files without necessity.
- Prefer editing existing files over creating new ones.
- Reuse existing patterns before creating new abstractions.
- Keep implementations lightweight and pragmatic.
- Keep responses concise.
- Do not explain obvious code.
- Avoid excessive comments and documentation.

## Restrictions

- Do not run build, lint, preview, or heavy commands unless explicitly requested.
- If something was not verified, briefly mention it.

## Before Finishing

Check that:

1. Files are placed correctly.
2. Imports follow existing conventions.
3. JSX is semantic and valid.
4. SCSS follows existing project patterns.
5. Changes are minimal and focused only on the requested task.