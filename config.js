
var environment = process.env.NODE_ENV || 'development';

module.exports = {

	env: {
		dist: environment === 'production',
		dev: environment === 'development'
	},

	foureight: {
		src: 'styles/**/*.scss',
		dest : 'dist/',
		sassconfigLocal: {
			outputStyle: 'expanded'
		},
		sassconfigDist: {
			outputStyle: 'compressed'
		}
	}


};
