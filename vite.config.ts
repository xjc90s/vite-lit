import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'packages/index.ts',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {},
  },
})
