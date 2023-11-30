import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    test: {
        environment: 'nuxt',
        // you can optionally set nuxt-specific environment options
        // environmentOptions: {
        //   nuxt: {
        //     rootDir: fileURLToPath(new URL('./playground', import.meta.url)),
        //     overrides: {
        //       // other nuxt config you want to pass
        //     }
        //   }
        // }
    },
    resolve: {
        alias: [{ find: '~', replacement: resolve(__dirname, './') }],
    },
});
