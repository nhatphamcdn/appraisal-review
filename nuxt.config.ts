import { defineNuxtConfig } from "nuxt";
import svgLoader from "vite-svg-loader";
import VueTypeImports from "vite-plugin-vue-type-imports";
import { VitePluginFonts } from "vite-plugin-fonts";

export default defineNuxtConfig({
  keepalive: true,
  css: ["@/assets/styles/app.scss"],
  vite: {
    server: {
      port: 3000,
      watch: {
        usePolling: true,
      },
    },
    plugins: [
      svgLoader(),
      VueTypeImports(),
      VitePluginFonts({
        google: {
          families: [
            "Montserrat",
            {
              name: "Montserrat",
              styles: "ital,wght@0,200;0,400;0,500;0,600;0,700;0,900;1,400",
              defer: true,
            },
          ],
        },
      }),
    ],
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
  build: {
    analyze: true,
  },
  webpack: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: "styles",
            test: /\.(css|vue)$/,
            chunks: "all",
            enforce: true,
          },
        },
      },
    },
    loaders: {
      scss: {
        cssSourceMap: false,
      },
      vueStyle: {
        cssSourceMap: false,
      },
    },
    optimizeCSS: true,
  },
});
