import { defineConfig, loadEnv } from "vite";
import dayjs from "dayjs";
import { resolve } from "path";
import postcssPresetEnv from "postcss-preset-env";

import { createVitePlugins } from "./build/plugin";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());
  console.log("mode:" + mode);
  console.log(env);
  const __APP_INFO__ = {
    lastBuildTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    apiBaseUrl: env.VITE_API_BASE_URL,
  };
  return {
    base: env.VITE_BASE_URL,
    resolve: {
      alias: {
        "@": resolve(__dirname,"src"),
      },
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
    css: {
      postcss: {
        plugins: [postcssPresetEnv()],
      },
    },
    plugins: createVitePlugins(env as ImportMetaEnv),
  };
});
