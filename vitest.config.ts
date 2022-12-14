/// <reference types="vitest" />
/// <reference types="vite/client" />
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import VueTypeImports from "vite-plugin-vue-type-imports";

const rq = (p: string) => resolve(__dirname, p);

const alias: Record<string, string> = {
  "~": rq("."),
  "@": rq("."),
};

const include = [/\.vue$/, /\.vue\?vue/, /\.stories\.ts$/, /\.[tj]s$/];

export default {
  resolve: {
    alias,
  },
  plugins: [
    vue(),
    AutoImport({
      include,
      imports: ["vue"],
      dirs: ["~/composables"],
      dts: "@types/auto-imports.d.ts",
      vueTemplate: true,
    }),
    VueTypeImports(),
  ],
  root: ".",
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      enabled: true,
      lines: 90,
      functions: 90,
      branches: 90,
      reporter: ["text", "json", "html"],
      include: ["assets", "components", "composables", "layouts", "middleware", "pages", "public", "app.vue"],
      exclude: ["**/*.story.vue", "**/*.test.ts", "app.vue", "pages/**/*.vue"],
    },
    setupFiles: ["./tests/setup-test.ts"],
  },
};
