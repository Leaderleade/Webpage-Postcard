import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/Webpage-Postcard/", // Ensure this matches your repository name
  server: {
    host: "::",
    port: 8080,
    // Add this for local development to handle routing
    historyApiFallback: true,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Add this build configuration
  build: {
    outDir: "dist",
    // Generate manifest for better caching
    manifest: true,
    // Ensure proper chunking
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
 
}));