export const darkMode = 'class';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				body: ['"Public Sans"'] 
			},

			colors: {
				'codgray': {
					50: '#f6f7f6',
					100: '#e3e4e3',
					200: '#c6c9c6',
					300: '#a2a7a1',
					400: '#7e847d',
					500: '#636963',
					600: '#4e534e',
					700: '#414540',
					800: '#363936',
					900: '#2f322f',
					950: '#0e0f0e',
				},

				'trinidad': {
					50: '#fff6ed',
					100: '#feead6',
					200: '#fcd1ac',
					300: '#f9b078',
					400: '#f68541',
					500: '#f3631c',
					600: '#e24912',
					700: '#bd3611',
					800: '#962c16',
					900: '#792615',
					950: '#411109',
				},
			},

			boxShadow: {
				'sun': '0 0 4px 1px rgba(255, 252, 238, 0.8)',
				'moon': '0 0 2px 0 rgba(255, 255, 255, 0.5)',
			},
	
			keyframes: {
				menu: {
					'0%': { opacity: 0, transform: 'translateX(2em)' },
					'100%': { opacity: 1, transform: 'translateX(0)' },
				},
	
				logo: {
					'0%': { opacity: 0, transform: 'translateX(-2em)' },
					'100%': { opacity: 1, transform: 'translateX(0)' },
				},
	
				'scroll-wheel': {
					'0%': { opacity: 0, transform: 'translateY(2em)' },
					'100%': { opacity: 1, transform: 'translateY(0)' },
				},
	
				resume: {
					'0%': { opacity: 0, transform: 'translateY(2em)' },
					'100%': { opacity: 1, transform: 'translateY(0)' },
				}
			},
	
			animation: {
				logo: 'logo .2s ease-in-out 0s 1 alternate both',
				menu: 'menu .2s ease-in-out .5s 1 alternate both',
				'scroll-wheel': 'scroll-wheel .2s ease-in-out 1.1s 1 alternate both',
				resume: 'resume .2s ease-in-out .8s 1 alternate both'
			}
		},
	},
	plugins: [],
}