/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				
			},
			borderColor: {
				primary: "#242323",
				buttoncontrast: "#4C2774",
				input: "#242323",
			},
			backgroundColor: {
				primary: "#1D1C21",
				buttonprimary: "#111010",
				buttonprimaryhover: "#070707",
				contrast: "#C0C0C0",
			},
			textColor: {
				primary: "#2B2B2B",
				contrast: "#C0C0C0",
			},
			fontFamily: {
				nunito: ["Nunito", "sans-serif"],
				raleway: ["Raleway", "sans-serif"],
			},
		},
	},
	plugins: [],
}
