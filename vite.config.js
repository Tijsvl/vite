import { defineConfig } from 'vite'
import path from 'path'

// const www = false
// const designPath = www ? 'www' : 'mijn'
const designPath = ''

export default defineConfig({
  build: {
    outDir: `dist/${designPath}`,
    rollupOptions: {
      input: {
        bundle: `src/${designPath}/index.js`,
        styles: `src/${designPath}/index.css`
      },
      output: {
        entryFileNames: (chunkInfo) => {
          return chunkInfo.name === 'bundle' ? `js/site.js` : `[name].js`
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'index.css') return `rel/stylesheet/general.css`
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
