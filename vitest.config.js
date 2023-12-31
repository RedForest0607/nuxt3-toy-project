import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    test: {
        globals: true,
        environment: 'jsdom',
    },
    resolve: {
        alias: [{ find: '~', replacement: resolve(__dirname, './') }],
    },
});
