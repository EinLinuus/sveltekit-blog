const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};

module.exports = config;
