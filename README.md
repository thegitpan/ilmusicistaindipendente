# Il Musicista Indipendente — il sito

Strumenti gratuiti, bandi, guide e news per musicisti e band indipendenti
italiani: `ilmusicistaindipendente.it`. Astro 5 statico, deploy su
Cloudflare Workers.

## Sviluppo locale

```bash
npm --prefix site install
npm --prefix site run dev     # http://localhost:4322
npm --prefix site run build   # verifica prima di ogni push
```

## Struttura

- `site/` — il progetto Astro (pagine, layout, stili)
- `site/src/config/site.ts` — brand, contatti e interruttori del sito
- `site/wrangler.jsonc` — deploy Cloudflare (il nome del Worker non si tocca)
- `config/` — configurazioni editoriali (calendario guide, feed)
- `docs/` — documenti di progetto e bozze legali

Piano completo in [PIANO_PROGETTO.md](PIANO_PROGETTO.md), regole di lavoro in
[AGENTS.md](AGENTS.md).
