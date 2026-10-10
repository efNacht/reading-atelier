import { defineConfig } from "vite";
// Automatic JSX runtime: components don't need `import React` in scope.
export default defineConfig({ esbuild: { jsx: "automatic" } });
