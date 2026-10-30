/**
 * Configurazione centrale del sito: brand, URL, contatti e interruttori.
 * Unica fonte di verità: nessun altro file deve hard-codare questi dati.
 */

export const SITE = {
  name: "Il Musicista Indipendente",
  tagline: "Tutto quello che serve per portare avanti la tua musica indipendente",
  description:
    "Strumenti gratuiti, bandi, guide e news per band e artisti indipendenti italiani: stage plot, analizzatore del brano, calcolatori e molto altro.",
  url: "https://ilmusicistaindipendente.it",
  locale: "it_IT",
  contactEmail: "info@ilmusicistaindipendente.it",
  ownerName: "Fabrizio Panebarco",
  // Indirizzo del modulo di iscrizione Brevo (doppia conferma). Vuoto finché
  // il dominio non è autenticato su Brevo: la home mostra un avviso al posto
  // del modulo. Va attivato insieme alla pagina /privacy-policy.
  newsletterFormUrl: "",
} as const;
