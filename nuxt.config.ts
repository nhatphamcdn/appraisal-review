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
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "node_modules/@nhatphamfks-org/funstyle/scss/theme/helpers/helpers";
            @import "node_modules/@nhatphamfks-org/funstyle/scss/theme/global";
            @import "node_modules/@nhatphamfks-org/funstyle/scss/theme/mixins/mixins";
            @import "@/assets/styles/_variables.scss";
          `,
        },
      },
    },
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
