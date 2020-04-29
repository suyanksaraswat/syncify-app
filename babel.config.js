const path = require('path')

module.exports = function (api) {
	api.cache(true)

	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					extensions: [
						'.ios.js',
						'.android.js',
						'.js',
						'.jsx',
						'.json',
					],
					root: ['./src'],
					alias: {
						'@app': path.resolve(__dirname, 'src'),
					},
				},
			],
		],
	}
}
