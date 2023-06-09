import { defineConfig, loadEnv } from "vite";
import dayjs from "dayjs";
import { resolve } from "path";
import postcssPresetEnv from "postcss-preset-env";
import px2vw from "postcss-px-to-viewport"
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
        plugins: [
          postcssPresetEnv(),
          px2vw({
            viewportWidth: 375,
            unitPrecision: 6,
            unitToConvert: 'px',
            propList: ['*'],
            exclude: [/^(?!.*node_modules\/@varlet)/],
          }),
          px2vw({
            viewportWidth: 750,
            unitPrecision: 6,
            unitToConvert: 'px',
            propList: ['*'],
            exclude: [/node_modules\/@varlet/],
          })
        ],
      },
    },
    plugins: createVitePlugins(env as ImportMetaEnv),
  };
});
