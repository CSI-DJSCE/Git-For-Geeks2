/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily:{
			'gothic' : ['Franklin Gothic Heavy']

		},
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
				darkOlive: '#ACC2A8',
				icon1: '#D1D184',
				icon2: '#525C52',
				icon3: '#DBFBB1'
			}
		},
	},
	plugins: [],
	
};
