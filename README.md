# Zine Eddine Abdeladim — Portfolio

A hand-drawn, sketchbook-style developer portfolio. Next.js 16 (App Router),
Tailwind CSS v4, TypeScript, English + French via `next-intl`.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out (both languages pre-rendered)
npm run lint
```

## Where to edit what

| I want to change…                         | Edit                                              |
| ----------------------------------------- | ------------------------------------------------- |
| Any text on the page                      | `messages/en.json` **and** `messages/fr.json`     |
| Name, email, social links, image paths    | `src/lib/content.ts`                              |
| The project list, links, live-demo URLs   | `src/lib/content.ts` → `projects`                 |
| Colors, fonts, the sketch shapes          | `src/app/globals.css`                             |
| Where the site is hosted (URL, sub-path)  | set by the deploy workflow — see `src/lib/site.ts` |

The two message files must keep the same keys — the build fails with a clear
error if French is missing something English has (`src/messages.check.ts`).

### Headline marks

In the message files, `<u>words</u>` gets the blue pen underline and
`<mark>words</mark>` gets the hand-drawn circle. Keep `<mark>` to one or two
short words: it never wraps.

### Add a project

1. Add an entry to `projects` in `src/lib/content.ts` with a short `id`.
2. Add `"<id>": { "blurb": …, "tags": […], "note": "" }` under
   `Projects.items` in both message files.
3. Put a preview at `public/projects/<id>.svg` — or a real screenshot
   (PNG/JPG/WebP) and point `image` at it; screenshots are optimized
   automatically.

### Add your CV

Drop the PDF in `public/` and set `cvUrl: "/cv.pdf"` in `src/lib/content.ts`.
A "Download CV" link appears in the hero.

## Deploy

The site is a static export (`npm run build` writes it to `out/`) published on
**GitHub Pages** by `.github/workflows/deploy.yml`: every push to `master`
rebuilds and redeploys it to
<https://zineeddine-abd.github.io/Portfolio/>.

One-time setup: repository **Settings → Pages → Source → GitHub Actions**.

The share-preview images (`public/og-en.png`, `public/og-fr.png`) are static
files — regenerate them if you change the hero headline.
