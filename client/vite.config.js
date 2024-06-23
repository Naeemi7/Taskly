import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Get the current worting directory
const currentWorkingDirectory = new URL(".", import.meta.url).pathname;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000,
  },

  resolve: {
    alias: {
      "@": `${currentWorkingDirectory}/src`, // Set the base directory for your project
      "@styles": `${currentWorkingDirectory}/src/styles`,
      "@images": `${currentWorkingDirectory}/src/assets/images`,
      "@utils": `${currentWorkingDirectory}/src/utils`,
      "@data": `${currentWorkingDirectory}/src/data`,
      "@Features": `${currentWorkingDirectory}/src/components/Features`,
      "@Reusable": `${currentWorkingDirectory}/src/components/Reusable`,
    },
  },
});
