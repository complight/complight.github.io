import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

// This deck contains no Twoslash code blocks. Avoid initializing its unused
// tooltip plugin, whose FloatingVue adapter conflicts with the current version.
export default defineConfig({
  build: { emptyOutDir: true },
  resolve: {
    alias: {
      '@shikijs/vitepress-twoslash/client': fileURLToPath(new URL('./components/twoslash-unused.ts', import.meta.url)),
    },
  },
})
