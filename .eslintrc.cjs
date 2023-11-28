// noinspection SpellCheckingInspection

module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
	},
	extends: [
		'@nuxtjs/eslint-config-typescript',
		'plugin:prettier/recommended',
		'plugin:vitest/recommended'
	],
	plugins: ['vitest'],
	rules: {
		//production 환경이 아닌 경우는 console.log 오류 안뜸
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		//production 환경이 아닌 경우는 debug.log 오류 안뜸
		'no-debug': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		//Prettier
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: true,
				useTabs: false,
				tabWidth: 4,
				trailingComma: 'es5',
				printWidth: 160,
				bracketSpacing: true,
				arrowParens: 'avoid',
				endOfLine: 'auto',
			},
		],
		// vitest
		"vitest/max-nested-describe": [
				"error",
			{
				"max": 3
			}
		]
	},
}