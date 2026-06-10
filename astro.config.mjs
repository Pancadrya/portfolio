import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://pancadrya.my.id",
  base: "/",

  // mdx masuk ke integrations
  integrations: [mdx()],

  // Tailwind v4 masuk ke Vite plugins
  vite: {
    plugins: [tailwindcss()],
  },
});
