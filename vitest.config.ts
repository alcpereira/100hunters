import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      reporter: ["text", "html"],
      include: ["app/**/*.ts"], // Currently including only TS files, to remove once we start unit testing React files
      exclude: ["app/db/**/*"], // Excluding the db folder from coverage for now
    },
  },
});
