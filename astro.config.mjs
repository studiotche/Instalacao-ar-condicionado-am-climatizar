import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const pagesBase = process.env.PAGES_BASE ?? "/lavanderia-ivoti/";

export default defineConfig({
  site: "https://studiotche.github.io",
  base: pagesBase,
  output: "static",
  integrations: [sitemap()],
  build: { format: "directory" },
});
