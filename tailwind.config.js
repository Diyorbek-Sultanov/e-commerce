/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: ['Poppins', 'sans-serif'],
			gridTemplateColumns: {
				4: 'repeat(4, 1fr)',
			},
			gridTemplateRows: {
				2: 'repeat(2, 1fr)',
			},
		},
	},
	plugins: [],
}
