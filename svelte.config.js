import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		// optimizeDeps: {
		// 	include: ['@fullcalendar/core']
		// },
		vite: {
			ssr: {
				external: ['fullcalendar'],
			},
			optimizeDeps: {
				include: ['@fullcalendar/core']
			}
			
		},
		ssr: true,
		adapter: adapter({
			// default options are shown
			out: 'build',
			precompress: false,
			env: {
				port: process.env.PORT
			}
		})
	}
};

export default config;
