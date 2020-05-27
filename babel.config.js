const path = require('path')

module.exports = function (api) {
	api.cache(true)

	return {
		presets: [
			'babel-preset-expo',
			'module:metro-react-native-babel-preset',
			'module:react-native-dotenv',
		],
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
