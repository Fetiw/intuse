import VitePluginBrowserSync from 'vite-plugin-browser-sync';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import posthtml from '@vituum/vite-plugin-posthtml';
import vituum from 'vituum';
import path from 'path'
import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true
      }
    }
  },
  plugins: [
    vituum(),
    posthtml({
      root: './src',
    }),
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, './src/scripts') + '/[!.]*',
          dest: './scripts/',
        },
      ],
    }),
    VitePluginBrowserSync({
      dev: {
        bs: {
          ui: {
            port: 8080,
          },
          notify: false,
        },
      },
    }),
  ]
});
