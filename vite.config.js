import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import alias from "@rollup/plugin-alias";
import { resolve } from "path";

const projectRootDir = resolve(__dirname);

export default defineConfig({
  plugins: [alias(), react()],
  resolve: {
    alias: {
      "@": resolve(projectRootDir, "src"),
    },
  },
});
