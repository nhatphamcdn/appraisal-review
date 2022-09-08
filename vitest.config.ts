/// <reference types="vitest" />
/// <reference types="vite/client" />
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";

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
      all: true,
      include: ["assets", "components", "composables", "layouts", "middleware", "pages", "public", "app.vue"],
      exclude: ["**/*.story.vue", "**/*.test.ts", "app.vue", "pages/**/*.vue"],
    },
    setupFiles: ["./tests/setupTest.ts"],
  },
};
