import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        bundle: 'src/index.js',
        styles: 'src/index.css'
      },
      output: {
        entryFileNames: (chunkInfo) => {
          return chunkInfo.name === 'bundle' ? 'js/site.js': '[name].js';
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'index.css') return 'rel/stylesheet/general.css';
          return assetInfo.name;
        }
      }
    },
  },
  resolve: {
    alias: {
      components: path.join(__dirname, '/src/components/')
    },
  },
});
