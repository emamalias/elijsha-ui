import defaultTheme from 'tailwindcss/defaultTheme'
const { nextui } = require("@nextui-org/react");

export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	
	theme: {
		container: {
			center: true,
		},
		extend: {
			fontFamily: {
				heading: ['var(--font-heading)', ...defaultTheme.fontFamily.sans],
				body: ['var(--font-body)', ...defaultTheme.fontFamily.sans],
				mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
			},
		},
	},
	darkMode: "class",
	plugins: [nextui({
		layout: {
			disabledOpacity: "0.3",
			radius: {
				small: "2px",
				medium: "4px",
				large: "6px",
			},
			borderWidth: {
				small: "1px",
				medium: "1px",
				large: "2px",
			},
		},
		themes: {
			light: {
				colors: {
					background: '#ffffff',
					foreground: '#11181c',
					primary: {
						foreground: '#ffffff',
						DEFAULT: '#4f46e5',
					}
				},
			},
			dark: {
				colors: {},
			}
		}
	})]
}
