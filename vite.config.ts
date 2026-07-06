import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "/FYLO_Dark_Theme_Landing_Page_FrontEnd_Mentor_Junior/",
  build: {
    outDir: "docs",
  },
});
