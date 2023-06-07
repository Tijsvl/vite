import { defineConfig } from 'vite'
import path from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { viteZip } from 'vite-plugin-zip-file'
import { env } from 'process'

export default defineConfig({
  build: {
    outDir: `dist`,
    copyPublicDir: false, // viteStaticCopy already does this.
    rollupOptions: {
      input: {
        mijnJs: `src/mijn/index.js`,
        mijnStyles: `src/mijn/mijn_index.scss`,
        wwwJs: `src/www/index.js`,
        wwwStyles: 'src/www/www_index.scss'
      },
      output: {
        entryFileNames: (chunkInfo) => {
          switch (chunkInfo.name) {
            case 'mijnJs': return 'mijn/js/site.js'
            case 'wwwJs': return 'www/js/site.js'
            default: return '[name].js'
          }
        },

        assetFileNames: (assetInfo) => {

          if (assetInfo.name === 'mijn_index.css') {
            return 'mijn/rel/stylesheet/general.css'
          } else if (assetInfo.name === 'www_index.css') {
            return 'www/rel/stylesheet/general.css'
          }
          return assetInfo.name
        }
      }
    }
  },
  resolve: {
    alias: {
      wwwComponents: path.join(__dirname, `src/www/components/`),
      mijnComponents: path.join(__dirname, `src/mijn/components/`)
    }
  },

  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'public/rel',
          dest: 'mijn'
        },
        {
          src: 'public/rel',
          dest: 'www'
        }
      ]
    }),
    viteZip({
      folderPath: path.resolve(__dirname, 'dist/mijn'),
      outPath: path.resolve(__dirname, 'dist'),
      enabled: env.NODE_ENV === 'production' ? true : false
    }),
    viteZip({
      folderPath: path.resolve(__dirname, 'dist/www'),
      outPath: path.resolve(__dirname, 'dist'),
      enabled: env.NODE_ENV === 'production' ? true : false
    })


  ],

})
