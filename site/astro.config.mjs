// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// L'URL canonico del sito: usato per sitemap, canonical e Open Graph.
export default defineConfig({
  site: "https://ilmusicistaindipendente.it",
  integrations: [sitemap()],
});
