module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'airbnb-base',
		'prettier',
	],

	plugins: ['react'],

	settings: {
		react: {
			version: 'detect',
		},
	},

	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},

	env: {
		mocha: true,
		node: true,
		browser: 1,
		jest: true,
		es6: true,
	},

	globals: {
		document: true,
		expect: true,
		sinon: true,
		json: true,
		Promise: true,
		window: true,
		localStorage: true,
		__DEV__: true,
	},

	rules: {
		'no-use-before-define': 'off',
		'no-tabs': 'off',
		'react/prop-types': 'off',
		'class-methods-use-this': 'off',
		'import/no-unresolved': 'off',
		'import/extensions': 'error',
		'no-unused-expressions': 'off',
		'no-underscore-dangle': 'off',
		'import/no-dynamic-require': 'off',
		'import/prefer-default-export': 'off',
		'no-nested-ternary': 'off',
		'object-curly-newline': 'off',
		'prefer-destructuring': 'off',
		'no-param-reassign': 'off',
		'no-plusplus': 'off',
		'react/display-name': 'off',
		'import/extensions': 'off',

		'no-console': 'error',
		semi: ['error', 'never'],
		'import/no-extraneous-dependencies': [
			'error',
			{ devDependencies: true },
		],
	},
}
