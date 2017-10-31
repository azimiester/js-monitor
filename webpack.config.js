const path = require('path');

module.exports = {
	context: `${__dirname}/src`,
	entry: './index.js',
	output: {
		path: `${__dirname}/bundle`,
		publicPath: '/bundle/',
		filename: './monitor.bundle.js'
	},
	devServer: {
		publicPath: '/bundle/',
		historyApiFallback: true
	},
	resolve: {
		extensions: ['.js']
	},
	stats: {
		colors: true,
		reasons: true,
		chunks: true
	},
	devtool: 'eval-source-map',
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
