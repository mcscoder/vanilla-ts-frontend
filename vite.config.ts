import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  console.log(mode);
  const proxyUrl =
    mode == "development"
      ? "http://localhost:3000"
      : "https://json-server-jhc1.onrender.com";

  return {
    build: {
      target: "esnext", //browsers can handle the latest ES features
    },
    server: {
      proxy: {
        "/api": proxyUrl,
      },
    },
  };
});
