module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'plugin:react/jsx-runtime',
		'eslint-config-prettier',
		'prettier',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'react/function-component-definition': [
			2,
			{
				namedComponents: ['arrow-function', 'function-declaration'],
				unnamedComponents: 'arrow-function',
			},
		],
	},
};
