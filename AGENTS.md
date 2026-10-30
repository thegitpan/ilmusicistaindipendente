# Guida per gli agenti di sviluppo (Claude Code, Codex e altri)

Questo repo è **Il Musicista Indipendente** (`ilmusicistaindipendente.it`):
sito per musicisti indipendenti italiani con strumenti gratuiti, bandi, guide
e news automatiche. Il riferimento di tutto è
[PIANO_PROGETTO.md](PIANO_PROGETTO.md): leggerlo prima di toccare file. Il
piano vive solo nella cartella locale (Dropbox) ed è escluso dal repo pubblico
via `.gitignore`: non aggiungerlo mai ai commit.

**Ruoli**: Fabrizio = CEO (decisioni di business, approvazioni). Claude =
architettura, sviluppo, automazioni. Codex = audit del codice (skill `audit`).
Le decisioni del capitolo 1 del piano non si cambiano senza Fabrizio: se
qualcosa sembra sbagliato, proporlo, non riscriverlo.

## Invarianti

1. **Budget zero.** Niente servizi a pagamento né spese ricorrenti senza
   l'approvazione esplicita di Fabrizio. Limiti gratuiti nel capitolo 10.
2. **Niente segreti nel repo**, che è pubblico. Le chiavi vivono nei GitHub
   Secrets. Nessun workflow con segreti avviabile da pull request esterne.
3. **Il nome del Worker Cloudflare** (`site/wrangler.jsonc`,
   "il-musicista-indipendente") non si tocca: rinominarlo crea un Worker nuovo
   e stacca il dominio.
4. **Gli strumenti girano nel browser.** I file degli utenti (brani, immagini)
   non vengono caricati su server se non per una funzione dichiarata.
5. **Niente dati inventati.** Bandi, guide e news si pubblicano solo con fonti
   verificabili; le stime si dichiarano come stime; i contenuti AI lo dicono.
6. **Niente utenti o attività finte** nella community.
7. **Nessun servizio commerciale** sul sito prima della fase 5 del piano.
8. **Lingua**: contenuti e commenti in italiano, identificatori in inglese.

## Flusso di lavoro

- Prova locale: `npm --prefix site run dev` (porta 4322, vedi `.claude/launch.json`).
- Build di verifica prima di ogni commit che tocca `site/`:
  `npm --prefix site run build`.
- Il push su `main` deploya in produzione: commit piccoli e già verificati.
- Audit con Codex prima dei merge importanti e sempre prima di aprire
  funzioni che trattano dati degli utenti.
- A fine sessione aggiornare il capitolo 16 "Stato" del piano.

## Documentazione

- [PIANO_PROGETTO.md](PIANO_PROGETTO.md) — visione, architettura, fasi, rischi.
- [PRODUCT.md](PRODUCT.md) — brand, utenti, tono di voce.
- [DESIGN.md](DESIGN.md) — sistema visivo (token in `site/src/styles/global.css`).
- `docs/legale/` — bozze di privacy, cookie, termini e regolamento.
- `config/calendario-guide.yaml` — calendario editoriale delle guide.
