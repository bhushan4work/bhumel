# geosync

## Structure

```
.
├── .gitignore      # repo-wide ignores (node_modules, .next, env, logs, ...)
├── README.md
└── fe/             # Next.js frontend
    ├── src/        # app router: layout.tsx, page.tsx, globals.css
    ├── public/     # static assets
    ├── next.config.ts
    ├── tsconfig.json
    ├── eslint.config.mjs
    └── postcss.config.mjs
```

All repository-level config lives at the root; `fe/` contains only the
frontend application and its package files.

## Getting started

```bash
cd fe
npm install
npm run dev      # http://localhost:3000
```

Other scripts (run from `fe/`):

```bash
npm run lint
npm run build
npm start
```
