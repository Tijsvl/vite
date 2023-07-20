import { defineConfig } from "vite";
import path from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";
import zipPack from "vite-plugin-zip-pack";

export default defineConfig({
  build: {
    outDir: `dist`,
    copyPublicDir: false, // viteStaticCopy already does this.
    rollupOptions: {
      input: {
        mijnJs: `src/mijn/index.js`,
        mijnStyles: `src/mijn/mijn_index.scss`,
        wwwJs: `src/www/index.js`,
        wwwStyles: "src/www/www_index.scss",
        defaultJs: `src/default/index.js`,
        defaultStyles: `src/default/default_index.scss`,
      },
      output: {
        entryFileNames: (chunkInfo) => {
          switch (chunkInfo.name) {
            case "mijnJs":
              return "mijn/js/site.js";
            case "wwwJs":
              return "www/js/site.js";
            case "defaultJs":
              return "default/js/site.js";
            default:
              return "[name].js";
          }
        },

        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "mijn_index.css") {
            return "mijn/rel/stylesheet/general.css";
          } else if (assetInfo.name === "www_index.css") {
            return "www/rel/stylesheet/general.css";
          } else if (assetInfo.name === "default_index.css") {
            return "default/rel/stylesheet/general.css";
          }
          return assetInfo.name;
        },
      },
    },
  },
  resolve: {
    alias: {
      wwwComponents: path.join(__dirname, `src/www/components/`),
      mijnComponents: path.join(__dirname, `src/mijn/components/`),
    },
  },

  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "public/rel",
          dest: "mijn",
        },
        {
          src: "public/rel",
          dest: "www",
        },
      ],
    }),
    zipPack({
      inDir: "dist/mijn",
      outDir: "dist",
      outFileName: "mijn.zip",
    }),
    zipPack({
      inDir: "dist/www",
      outDir: "dist",
      outFileName: "www.zip",
    }),
  ],
});
