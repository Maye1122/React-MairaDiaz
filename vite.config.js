import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		sourcemap: false,
		outDir: 'build', // Cambiar el directorio de salida a 'build'
	},
	resolve: {
		alias: {
			'@': '/src',
		},
	},
});
