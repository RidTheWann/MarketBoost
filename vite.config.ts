import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
    viteStaticCopy({
      targets: [
        {
          src: '../preview.png',
          dest: '.'
        },
        {
          src: '../cms-*.png',
          dest: '.'
        }
      ]
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  optimizeDeps: {
    include: []
  },
  root: path.resolve(__dirname, "client"),
  build: {
    commonjsOptions: {
      include: [/node_modules/],
      extensions: ['.js', '.cjs', '.jsx', '.tsx', '.ts']
    },
    rollupOptions: {
      external: [],
      output: {
        assetFileNames: "[name].[ext]"
      }
    },
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
    assetsDir: "."
  }
  ,
  base: "/",
});
