import {PluginOption} from 'vite'
import * as path from 'path'
import vue from '@vitejs/plugin-vue'
import {createHtmlPlugin} from 'vite-plugin-html'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import {ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import {viteVConsole} from 'vite-plugin-vconsole'
export const createVitePlugins = (env: ImportMetaEnv): PluginOption[]=>{
    return [
        vue(),
        createHtmlPlugin({
          minify: true,
          inject: {
            data: {
              injectScript: `<script type="module" src="./logEnv.ts"></script>`,
            },
            tags: [
              {
                injectTo: 'body-prepend',
                tag: 'div',
                attrs: {
                  class: 'inject'
                }
              }
            ]
          }
        }),
        AutoImport({
          dts: true,
          imports: ['vue','vue-router'],
          resolvers: [ElementPlusResolver()] 
        }),
        Components({
          dts: true,
          dirs: ['src/components','src/pages/*/components'],
          resolvers: [ElementPlusResolver()] 
        }),
        viteVConsole({
          entry: path.resolve('src/main.ts'),
          localEnabled: false, // 本地开发
          enabled: env.VITE_SHOW_VCONSOLE === '1', // 打包环境下
          config: {
            maxLogNumber: 1000,
            theme: 'dark'
          }
        })
      ]
}