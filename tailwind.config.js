/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

	theme: {
		extend: {},
		backgroundImage: {
			stars: "url('stars_background.jpeg')",
		},
	},
	plugins: [],
};
