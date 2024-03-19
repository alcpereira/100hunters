import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./tests/setup"],
    coverage: {
      reporter: ["text", "html"],
      include: ["app/**/*.ts"], // Currently including only TS files, to remove once we start unit testing React files
      exclude: ["app/db/**/*"], // Excluding the db folder from coverage for now
    },
  },
});
