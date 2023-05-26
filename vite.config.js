import { defineConfig } from 'vite'
import path from 'path'

const designPath = 'www';
export default defineConfig({
  build: {
    outDir: `dist`,
    rollupOptions: {
      input: {
        mijnJs: `src/mijn/index.js`,
        mijnStyles: `src/mijn/index.scss`,
        wwwJs: `src/www/index.js`,
        wwwStyles: 'src/www/index.scss'
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

          if (assetInfo.name.endsWith('index.css')) {
            if (assetInfo.name.split('/').find((val) => val === 'mijn')) {
              return 'mijn/rel/stylesheet/general.css';
            } else if (assetInfo.name.split('/').find((val) => val === 'www')) {
              return 'www/rel/stylesheet/general.css';
            }
          }
          return assetInfo.name
        }
      }
    }
  },
  resolve: {
    alias: {
      components: path.join(__dirname, `src/${designPath}/components/`)
    }
  }
})
