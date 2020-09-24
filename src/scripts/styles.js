export const colors = {
	blue: {
		light: '#52b6ff',
		regular: '#00b2ff',
		deep: '#3b5afc',
	},
	grey: {
		light: '#ebeef6',
		regular: '#677c9b',
		deep: '#151b24',
		mid_deep: '#1E2837',
	},
};

export const fonts = {};
export const gradients = {
	blueTo: (direction) => `linear-gradient(to ${direction}, ${colors.blue.light}, ${colors.blue.deep});`,
};

export const shadows = {
	inset: `
		-moz-box-shadow: inset 0 0 10px #000000;
		-webkit-box-shadow: inset 0 0 10px #000000;
		box-shadow: inset 20px 0 10px #000000;`,

	studiesSeparator: `
		-webkit-box-shadow: 30px 0px 20px -30px rgba(0,0,0,0.75);
		-moz-box-shadow: 30px 0px 20px -30px rgba(0,0,0,0.75);
		box-shadow: 30px 0px 20px -30px rgba(0,0,0,0.75);`,

	default: `
		-webkit-box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.5);
		-moz-box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.5);
		box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.5);`,
};

export const animations = {};

export const mediaBounds = {
	small: { query: '(max-width: 1224px)' },
};
