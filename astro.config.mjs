import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://pancadrya.github.io",
  base: "/portfolio", // Sesuai dengan repo GitHub-mu

  // mdx masuk ke integrations
  integrations: [mdx()],

  // Tailwind v4 masuk ke Vite plugins
  vite: {
    plugins: [tailwindcss()],
  },
});
