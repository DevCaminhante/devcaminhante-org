/** @type {import("xo").Options} */
const config = {
	semicolon: false,
	space: false,
	rules: {
		'@typescript-eslint/comma-dangle': ['off'],
		'@typescript-eslint/no-unused-expressions': ['off'],
		'@typescript-eslint/semi': ['off'],
		'comma-dangle': [
			'error',
			'never'
		],
		'new-cap': [
			'error',
			{
				capIsNewExceptionPattern: '@*'
			}
		],
		'no-unused-expressions': [
			'error',
			{
				allowTernary: true
			}
		],
		'object-curly-spacing': [
			'error',
			'never',
			{
				objectsInObjects: false
			}
		]
	}
}

export default config
