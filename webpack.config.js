const path = require('path');

module.exports = {
	context: `${__dirname}/src`,
	entry: './index.js',
	output: {
		path: `${__dirname}/bundle`,
		filename: './monitor.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: `${__dirname}/src`,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [['env']]
						}
					}
				]
			}
		]
	}
};
