/* eslint-disable sort-keys-fix/sort-keys-fix */
// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
	// Standard prettier options
	bracketSpacing: false,
	quoteProps: 'consistent',
	semi: false,
	singleQuote: true,
	trailingComma: 'none',
	useTabs: true,
	// Since prettier 3.0, manually specifying plugins is required
	plugins: ['@ianvs/prettier-plugin-sort-imports'],
	// This plugin's options
	importOrder: [
		'<BUILTIN_MODULES>',
		'',
		'^@angular/(.*)$',
		'',
		'<THIRD_PARTY_MODULES>',
		'',
		'^@app/(.*)$',
		'',
		'^[./]'
	],
	importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
	importOrderTypeScriptVersion: '5.0.0'
}
