import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import viteReact from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        viteReact(),
        laravel({
            input: ["resources/js/main.tsx"],
            refresh: true,
        }),
    ],
    server: {
        proxy: {
            "/api": {
                target: "http://localhost:8000/api/",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },
});
