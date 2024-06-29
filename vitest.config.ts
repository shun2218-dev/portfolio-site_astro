/// <reference types="vitest" />
import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      enabled: true,
      exclude: [
        ".prettierrc.mjs",
        "astro.config.mjs",
        "commitlint.config.ts",
        "node_modules",
      ],
    },
  },
});
