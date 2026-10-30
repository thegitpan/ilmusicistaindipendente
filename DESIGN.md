# DESIGN.md — sistema visivo

stato: proposta del 30/10/2026, da approvare da Fabrizio
token: `site/src/styles/global.css` (unica fonte di verità per i colori)

## Idea

Il palco visto da dietro: carta fotocopiata delle locandine, inchiostro nero,
una sola striscia di **gaffer tape arancione** come accento. Le liste del sito
hanno la forma di una channel list (`CH 01`, `CH 02`…), le etichette tecniche
sono in monospazio come una scaletta stampata.

## Colori

| Token | Chiaro | Scuro | Uso |
|---|---|---|---|
| `--paper` | `#f3efe6` | `#121110` | Sfondo |
| `--paper-2` | `#e9e3d6` | `#1c1a18` | Superfici secondarie, etichette |
| `--ink` | `#151413` | `#ede8de` | Testo principale, bordi forti |
| `--ink-soft` | `#4a4744` | `#a8a29a` | Testo secondario |
| `--line` | `#cfc7b8` | `#34302c` | Divisori sottili |
| `--tape` | `#ff5b1f` | `#ff6a2e` | Accento: gaffer tape, focus |
| `--tape-ink` | `#b83a0a` | `#ff8a57` | Testo arancione leggibile (link, numeri CH) |
| `--on-tape` | `#151413` | `#121110` | Testo sopra il gaffer tape |

Regole: l'arancione pieno (`--tape`) non si usa mai per testo piccolo; per il
testo c'è `--tape-ink` (contrasto ≥ 4.5:1 su `--paper`). Il tema scuro segue
il sistema; `data-theme="light|dark"` sulla radice lo forza.

## Tipografia

| Ruolo | Font | Note |
|---|---|---|
| Titoli | Big Shoulders Display 800, maiuscolo | Condensato da locandina, interlinea 0.95 |
| Testo | IBM Plex Sans 400/600 | 17 px di base, interlinea 1.6 |
| Etichette tecniche | IBM Plex Mono 500, maiuscolo | 13 px, spaziatura 0.04em |

Font self-hosted con `@fontsource` (niente Google Fonts esterni, per il GDPR).

## Componenti firma

- **Gaffer tape** (`.tape`): fondo arancione, testo `--on-tape`, leggermente
  ruotato solo nei titoli grandi. Al massimo uno per schermata.
- **Channel list** (`.ch-list`): righe numerate `CH 01`, titolo, descrizione,
  etichetta in mono a destra (sotto, su mobile).
- **Soundcheck** (`.soundcheck`): riquadro tratteggiato per avvisi e stati
  temporanei.

## Layout

Larghezza massima 1120 px; margini laterali 16 px su telefono, 32 px da 720 px
in su. Bordi netti, raggio 4 px, niente ombre. Nessuno scroll orizzontale a
375 px di larghezza.
