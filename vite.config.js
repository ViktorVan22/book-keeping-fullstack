import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createStyleImportPlugin } from "vite-plugin-style-import";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createStyleImportPlugin({
      libs: [
        {
          libraryName: "zarm",
          esModules: true,
          resolveStyle: name => {
            return `zarm/es/${name}/style/css`;
          },
        },
      ],
    }),
  ],
  css: {
    modules: {
      localsConvention: "dashesOnly",
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        // 当遇到 /api 路径时，将其转换成target的值
        target: "http://api.chennick.wang/api/",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ""), // 将api重写为空
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), //  src 路径
      utils: path.resolve(__dirname, "src/utils"), // src 路径
      config: path.resolve(__dirname, "src/config"), // src 路径
    },
  },
});
