import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],

	base: '/amazon-landing/',

	resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
					@use "@/scss/mixins/breakpoint" as *;
					@use "@/scss/mixins/mixin" as *;
					@use "@/scss/abstracts/variables" as *;
					
				`,
			},
		},
	},

	build: {
		rollupOptions: {
			input: {
				main: resolve(process.cwd(), 'index.html'),
			},

			output: {
				entryFileNames: 'assets/js/[name]-[hash].js',
				chunkFileNames: 'assets/js/chunks/[name]-[hash].js',

				assetFileNames: (assetInfo) => {
					const name = assetInfo.names?.[0] ?? assetInfo.name ?? '';

					if (/\.(css)$/i.test(name)) {
						return 'assets/css/[name]-[hash][extname]';
					}

					if (/\.(png|jpe?g|gif|svg|webp|avif)$/i.test(name)) {
						return 'assets/images/[name]-[hash][extname]';
					}

					if (/\.(woff2?|ttf|otf|eot)$/i.test(name)) {
						return 'assets/fonts/[name]-[hash][extname]';
					}

					if (/\.(mov|mp4|webm|ogg|mp3|wav|flac|aac)$/i.test(name)) {
						return 'assets/media/[name]-[hash][extname]';
					}

					return 'assets/misc/[name]-[hash][extname]';
				},
			},
		},
	},
});
