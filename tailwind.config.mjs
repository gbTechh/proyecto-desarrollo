/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				whitebg: "#F7F7F7",
			},
			borderColor: {
				primary: "#EFEFEF",
				buttoncontrast: "#4C2774",
				input: "#242323",
				warning: "#FFC300"
			},
			backgroundColor: {
				primary: "#FFC300",
				buttonprimary: "#111010",
				buttonprimaryhover: "#070707",
				contrast: "#C0C0C0",
				footer: "#F34949",
				customblack: "#0A0A09",
				whitecontrast: "#F3F3F3",
				whitebg: "#F7F7F7",
			},
			textColor: {
				white1: "#FAFAFA",
				primary: "#2B2B2B",
				contrast: "#5C5C5C",
				warning: "#FFC300",
			},
			fontFamily: {
				dmserif: ["DM Serif Text", "serif"],
				biryani: ["Biryani", "sans-serif"],
			},
		},
	},
	plugins: [],
}
