import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 代理服务器
  server: {
    proxy: {
      "/api": {
        target:
          "https://gist.githubusercontent.com/gaspardruan/a6eca088981a25d9ea61ec50cf54b129/raw",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    target: "esnext",
  },
});
