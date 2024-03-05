import type { Config } from 'tailwindcss';

const config = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')]
} satisfies Config;

export default config;
