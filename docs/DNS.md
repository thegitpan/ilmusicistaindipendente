# DNS di ilmusicistaindipendente.it

DNS gestito su **Cloudflare** (piano Free) dal 30/10/2026. Name server impostati
su Aruba (registrar): `mario.ns.cloudflare.com`, `vida.ns.cloudflare.com`.

## Configurazione di destinazione

| # | Cosa | Record | Note |
|---|---|---|---|
| 1 | Pulizia | Eliminare i 14 record importati da Aruba (A `@` 62.149.128.40, A `localhost`, 7 A `mx`, CNAME `admin`, `_domainconnect`, `ftp`, `www`, MX `@`) | Erano il parcheggio di Aruba: nessun servizio li usa |
| 2 | Sito | Custom domain del Worker `il-musicista-indipendente` su `ilmusicistaindipendente.it` | Cloudflare crea il record da solo |
| 3 | Sito | `www.ilmusicistaindipendente.it` → redirect 301 verso `https://ilmusicistaindipendente.it` | Un solo indirizzo canonico per la SEO |
| 4 | Email in arrivo | Email Routing: 3 MX `route1-3.mx.cloudflare.net`, TXT `@` SPF `v=spf1 include:_spf.mx.cloudflare.net ~all`, TXT `cf2024-1._domainkey` (DKIM di Cloudflare); regola `info@` → Gmail di Fabrizio | Record gestiti e bloccati da Email Routing |
| 5 | Brevo | TXT `@` = `brevo-code:3f8970a2e6cff3e3b8f1aa44b17fed14` | Verifica proprietà |
| 6 | Brevo | CNAME `brevo1._domainkey` → `b1.ilmusicistaindipendente-it.dkim.brevo.com` (solo DNS, non proxy) | DKIM |
| 7 | Brevo | CNAME `brevo2._domainkey` → `b2.ilmusicistaindipendente-it.dkim.brevo.com` (solo DNS, non proxy) | DKIM |
| 8 | Brevo | TXT `_dmarc` = `v=DMARC1; p=none; rua=mailto:rua@dmarc.brevo.com` | DMARC in sola osservazione |

Un solo record SPF è ammesso: resta quello di Email Routing. Brevo autentica
con DKIM e non richiede SPF.

## Stato

- 30/10/2026: name server cambiati su Aruba; il registro .it mostra ancora i
  vecchi name server (propagazione in corso). Dominio aggiunto su Brevo con
  metodo manuale, record da applicare.
- 30/10/2026 (sera): fatti i punti 1, 2, 3 (regola "Redirect from WWW to root"
  e `www` collegato anche al Worker), 5, 6, 7, 8. Zona Cloudflare ancora
  "pending" in attesa del registro .it. **Punto 4 (inoltro `info@`) da fare**:
  la creazione della regola di inoltro è stata bloccata in attesa di un ok
  specifico. Dopo l'attivazione: "Autentica dominio" su Brevo.
- 30/10/2026 (21:30): registro .it aggiornato, zona Cloudflare **attiva**. Sito
  online su `https://ilmusicistaindipendente.it`, `www` in redirect 301. Fatto
  il punto 4: Email Routing "Enabled", regola `info@` attiva. Dominio
  **autenticato su Brevo** (tutti e 4 i record verificati). Configurazione
  completa.
