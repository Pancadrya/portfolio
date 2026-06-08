import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://pancadrya.github.io",
  base: "/portfolio", // Sesuaikan dengan nama repositori GitHub-mu
  integrations: [tailwind(), mdx()],
});
