import { defineNuxtConfig } from "nuxt";
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  css: ["@/assets/styles/app.scss"],
  vite: {
    server: {
      port: 3000,
      watch: {
        usePolling: true,
      },
    },
    plugins: [svgLoader()],
  },
  components: [
    {
      path: "~/components",
      extensions: ["vue"],
      pathPrefix: false,
    },
  ],
  typescript: {
    shim: false,
    strict: true,
  },
});
