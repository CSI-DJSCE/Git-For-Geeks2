/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		maxWidth:{
			'1/2' : '50%'
		},
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px'
		},
		extend: {
			colors: {
				cream: '#FEF5ED',
				lilOlive: '#D3E4CD',
				brightOlive: '#ADC2A9',
				darkOlive: '#99A799'
			}
		},
	},
	plugins: [],
	
};
