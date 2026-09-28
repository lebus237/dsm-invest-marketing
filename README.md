# DSM Invest — Frontend Monorepo

Turborepo + Bun workspace holding the DSM Invest web properties. Both apps were
migrated from TanStack Start (Vite) to **Next.js 15 App Router** with no visual
changes — the rendered markup, Tailwind classes, assets, and motion behaviour are
preserved 1:1.

## Layout

```
frontend/
├── apps/
│   ├── capitalecho/     @dsm/capitalecho   — CapitalEcho landing page      :3000
│   └── dsm-invest/      @dsm/dsm-invest    — DSM Invest site (/ and /the-group) :3001
└── packages/
    ├── ui/              @dsm/ui            — shadcn primitives (46 components) + cn() + useIsMobile()
    └── typescript-config/ @dsm/typescript-config — shared tsconfig base / nextjs presets
```

## Getting started

```sh
bun install
bun run dev        # both apps, capitalecho :3000 and dsm-invest :3001
bun run build      # production builds
bun run lint
bun run typecheck
bun run format
```

### Why `build` is serialized

`bun run build` passes `--concurrency=1` to Turbo. Running both `next build`
processes at once makes webpack's WASM hasher crash
(`Cannot read properties of undefined (reading 'length')`) on Windows. Each app
builds fine on its own, so the builds are simply serialized.

## Environment

Copy `apps/capitalecho/.env.example` to `apps/capitalecho/.env.local`. Only
CapitalEcho needs credentials today (the newsletter server action).

| Variable                               | Used by                       |
| -------------------------------------- | ----------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`             | newsletter server action      |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | newsletter server action      |
| `LOVABLE_DB_MIGRATION_URL`             | `drizzle-kit` migrations only |

`.env.local` is gitignored — never commit real keys.

## Shared packages

- **`@dsm/ui`** — deep imports, e.g. `@dsm/ui/components/ui/button`,
  `@dsm/ui/lib/utils`. Every primitive is a client component. Tailwind scans the
  package through `@source "../../../packages/ui"` in each app's `styles.css`.
- **`@dsm/typescript-config`** — `base.json` / `nextjs.json`.

Supabase is used in exactly one place — the CapitalEcho newsletter server action
(`apps/capitalecho/src/app/actions/newsletter.ts`). The original Lovable project
shipped a full generated Supabase kit (browser client, service-role admin client,
RLS auth middleware, cron auth); all of it was unused, so it was dropped rather
than ported. Add it back when there is an actual auth/RLS feature to serve.

## Migration notes (TanStack Start → Next.js App Router)

| Before                                                       | After                                                       |
| ------------------------------------------------------------ | ----------------------------------------------------------- |
| `src/routes/__root.tsx`                                      | `src/app/layout.tsx`                                        |
| `src/routes/index.tsx`                                       | `src/app/page.tsx`                                          |
| `src/routes/the-group.tsx`                                   | `src/app/the-group/page.tsx`                                |
| `createFileRoute(...)` + `head()`                            | `export const metadata` + default component                 |
| `router.tsx` / `routeTree.gen.ts` / `start.ts` / `server.ts` | deleted (Next owns routing + SSR)                           |
| `src/components/ui/*` (duplicated in both apps)              | `@dsm/ui` (one copy)                                        |
| `createServerFn` (`newsletter.functions.ts`)                 | Server Action (`src/app/actions/newsletter.ts`)             |
| `VITE_SUPABASE_*` / `import.meta.env`                        | `NEXT_PUBLIC_SUPABASE_*` / `process.env`                    |
| Lovable `.asset.json` manifests (remote R2 URLs)             | binaries in `public/assets`, URLs in `src/assets/static.ts` |
| `react-router` `Link`                                        | `next/link`                                                 |
| h3 SSR-error workarounds (`error-capture`, `error-page`)     | `app/error.tsx` + `app/not-found.tsx`                       |

Deliberately dropped rather than ported (all unused by the shipped pages):

- `src/integrations/supabase/*` — Lovable-generated Supabase kit; the only live
  call is the newsletter insert, which uses `@supabase/supabase-js` directly.
- `previewAuthStorage.ts` — Lovable-editor postMessage auth bridge.
- `auth-attacher.ts` — TanStack `functionMiddleware` token plumbing.
- `lovable-error-reporting.ts` — Lovable-editor-only telemetry.

Fonts are still loaded from Google Fonts via explicit `<link>` tags (rather than
`next/font`) to keep glyph metrics and fallback behaviour byte-identical to the
previous Vite build.
