// noinspection JSUnusedGlobalSymbols,NpmUsedModulesInstalled

import globals from 'globals'

import angularPlugin from '@angular-eslint/eslint-plugin'
import importPlugin from 'eslint-plugin-import'
import javaScriptPlugin from '@eslint/js'
import typeScriptPlugin from '@typescript-eslint/eslint-plugin'

import typeScriptParser from '@typescript-eslint/parser'

const allExtensions = [
	'.ts',
	'.tsx',
	'.js',
	'.jsx'
]

export default [
	{
		rules: {
			...javaScriptPlugin.configs.recommended.rules,

			// eslint/js rules – possible problems
			'array-callback-return': ['error'],
			'no-await-in-loop': ['error'],
			'no-cond-assign': ['error', 'always'],
			'no-constant-binary-expression': ['error'],
			'no-constructor-return': ['error'],
			'no-duplicate-imports': [
				'error',
				{
					includeExports: true
				}
			],
			'no-inner-declarations': ['error', 'both'],
			'no-irregular-whitespace': [
				'error',
				{
					skipStrings: false,
					skipTemplates: true
				}
			],
			'no-new-native-nonconstructor': ['error'],
			'no-promise-executor-return': ['error'],
			'no-self-compare': ['error'],
			'no-template-curly-in-string': ['error'],
			'no-undef': [
				'error',
				{
					typeof: true
				}
			],
			'no-unmodified-loop-condition': ['error'],
			'no-unreachable-loop': ['error'],
			'no-unsafe-negation': [
				'error',
				{
					enforceForOrderingRelations: true
				}
			],
			'no-unsafe-optional-chaining': [
				'error',
				{
					disallowArithmeticOperators: true
				}
			],
			'no-unused-private-class-members': ['error'],
			'no-unused-vars': [
				'error',
				{
					argsIgnorePattern: 'Unused$',
					caughtErrors: 'all',
					caughtErrorsIgnorePattern: 'Unused$',
					destructuredArrayIgnorePattern: 'Unused$',
					ignoreRestSiblings: true,
					varsIgnorePattern: 'Unused$'
				}
			],
			'no-use-before-define': [
				'error',
				{
					allowNamedExports: true
				}
			],
			'require-atomic-updates': ['error'],
			'use-isnan': [
				'error',
				{
					enforceForIndexOf: true
				}
			],
			'valid-typeof': [
				'error',
				{
					requireStringLiterals: true
				}
			],

			// eslint/js rules – suggestions
			'accessor-pairs': [
				'error',
				{
					enforceForClassMembers: true,
					setWithoutGet: true
				}
			],
			'arrow-body-style': ['error', 'always'],
			'block-scoped-var': ['error'],
			'camelcase': ['error'],
			'capitalized-comments': [
				'error',
				'always',
				{
					ignoreConsecutiveComments: true,
					ignorePattern: 'import|noinspection'
				}
			],
			'class-methods-use-this': ['error'],
			'consistent-return': ['error'],
			'curly': ['error'],
			'default-case': ['error'],
			'default-case-last': ['error'],
			'default-param-last': ['error'],
			'dot-notation': [
				'error',
				{
					allowKeywords: false
				}
			],
			'eqeqeq': ['error'],
			'func-names': ['error'],
			'func-style': [
				'error',
				'declaration',
				{
					allowArrowFunctions: true
				}
			],
			'grouped-accessor-pairs': ['error', 'getBeforeSet'],
			'guard-for-in': ['error'],
			'init-declarations': ['error'],
			'logical-assignment-operators': ['error', 'never'],
			'max-depth': ['error'],
			'max-nested-callbacks': [
				'error',
				{
					max: 4
				}
			],
			'max-params': ['error'],
			'multiline-comment-style': ['error'],
			'new-cap': [
				'error',
				{
					capIsNewExceptions: ['HostBinding', 'Component']
				}
			],
			'no-alert': ['error'],
			'no-array-constructor': ['error'],
			'no-bitwise': [
				'error',
				{
					int32Hint: true
				}
			],
			'no-caller': ['error'],
			'no-confusing-arrow': ['error'],
			'no-continue': ['error'],
			'no-div-regex': ['error'],
			'no-else-return': ['error'],
			'no-empty': [
				'error',
				{
					allowEmptyCatch: false
				}
			],
			'no-empty-function': ['error'],
			'no-empty-static-block': ['error'],
			'no-eval': ['error'],
			'no-extend-native': ['error'],
			'no-extra-bind': ['error'],
			'no-extra-boolean-cast': [
				'error',
				{
					enforceForLogicalOperands: true
				}
			],
			'no-extra-label': ['error'],
			'no-floating-decimal': ['error'],
			'no-implicit-coercion': ['error'],
			'no-implicit-globals': ['error'],
			'no-implied-eval': ['error'],
			'no-invalid-this': [
				'error',
				{
					capIsConstructor: false
				}
			],
			'no-iterator': ['error'],
			'no-label-var': ['error'],
			'no-lone-blocks': ['error'],
			'no-lonely-if': ['error'],
			'no-loop-func': ['error'],
			'no-magic-numbers': [
				'error',
				{
					enforceConst: true,
					ignoreArrayIndexes: true
				}
			],
			'no-mixed-operators': [
				'error',
				{
					allowSamePrecedence: true
				}
			],
			'no-multi-assign': ['error'],
			'no-multi-str': ['error'],
			'no-negated-condition': ['error'],
			'no-nested-ternary': ['error'],
			'no-new': ['error'],
			'no-new-func': ['error'],
			'no-new-wrappers': ['error'],
			'no-object-constructor': ['error'],
			'no-octal-escape': ['error'],
			'no-param-reassign': [
				'error',
				{
					props: true
				}
			],
			'no-proto': ['error'],
			'no-restricted-globals': ['error', 'event'],
			'no-restricted-imports': [
				'error',
				{
					paths: [
						{
							name: 'import-foo',

							message: 'Please use import-bar instead.'
						},
						{
							name: 'import-baz',

							message: 'Please use import-quux instead.'
						}
					]
				}
			],
			'no-restricted-properties': [
				'error',
				{
					object: 'disallowedObjectName',
					property: 'disallowedPropertyName',

					message: 'Please use allowedObjectName.allowedPropertyName.'
				},
				{
					object: 'disallowedObjectName',
					property: 'anotherDisallowedPropertyName',

					message: 'Please use allowedObjectName.anotherAllowedPropertyName.'
				}
			],
			'no-return-assign': ['error', 'always'],
			'no-script-url': ['error'],
			'no-sequences': [
				'error',
				{
					allowInParentheses: false
				}
			],
			'no-shadow': [
				'error',
				{
					builtinGlobals: true
				}
			],
			'no-throw-literal': ['error'],
			'no-undef-init': ['error'],
			'no-undefined': ['error'],
			'no-underscore-dangle': [
				'error',
				{
					allowFunctionParams: false,
					allowInArrayDestructuring: false,
					allowInObjectDestructuring: false,
					enforceInClassFields: true,
					enforceInMethodNames: true
				}
			],
			'no-unneeded-ternary': ['error'],
			'no-unused-expressions': [
				'error',
				{
					enforceForJSX: true
				}
			],
			'no-useless-call': ['error'],
			'no-useless-computed-key': ['error'],
			'no-useless-concat': ['error'],
			'no-useless-constructor': ['error'],
			'no-useless-rename': ['error'],
			'no-useless-return': ['error'],
			'no-var': ['error'],
			'no-void': ['error'],
			'object-shorthand': ['error', 'never'],
			'one-var': ['error', 'never'],
			'operator-assignment': ['error', 'never'],
			'prefer-arrow-callback': [
				'error',
				{
					allowNamedFunctions: true,
					allowUnboundThis: false
				}
			],
			'prefer-const': ['error'],
			'prefer-destructuring': ['error'],
			'prefer-exponentiation-operator': ['error'],
			'prefer-named-capture-group': ['error'],
			'prefer-numeric-literals': ['error'],
			'prefer-object-has-own': ['error'],
			'prefer-object-spread': ['error'],
			'prefer-promise-reject-errors': ['error'],
			'prefer-regex-literals': [
				'error',
				{
					disallowRedundantWrapping: true
				}
			],
			'prefer-rest-params': ['error'],
			'prefer-spread': ['error'],
			'prefer-template': ['error'],
			'quote-props': ['error', 'consistent-as-needed'],
			'radix': ['error'],
			'require-await': ['error'],
			'require-unicode-regexp': ['error'],
			'sort-imports': [
				'error',
				{
					allowSeparatedGroups: true,
					ignoreCase: true,
					memberSyntaxSortOrder: [
						'none',
						'all',
						'single',
						'multiple'
					]
				}
			],
			'sort-keys': [
				'error',
				'asc',
				{
					allowLineSeparatedGroups: true,
					natural: true
				}
			],
			'spaced-comment': [
				'error',
				'always',
				{
					block: {
						balanced: true
					}
				}
			],
			'strict': ['error', 'never'],
			'symbol-description': ['error'],
			'vars-on-top': ['error'],
			'yoda': ['error'],

			// eslint/js rules – layout & formatting
			'array-bracket-newline': [
				'error',
				{
					minItems: 3,
					multiline: true
				}
			],
			'array-bracket-spacing': ['error'],
			'array-element-newline': [
				'error',
				{
					minItems: 3,
					multiline: true
				}
			],
			'arrow-parens': ['error'],
			'arrow-spacing': ['error'],
			'block-spacing': ['error'],
			'brace-style': ['error'],
			'comma-dangle': ['error', 'never'],
			'comma-spacing': ['error'],
			'comma-style': ['error'],
			'computed-property-spacing': ['error'],
			'dot-location': ['error', 'property'],
			'eol-last': ['error'],
			'func-call-spacing': ['error'],
			'function-call-argument-newline': ['error', 'consistent'],
			'function-paren-newline': ['error', 'multiline-arguments'],
			'generator-star-spacing': [
				'error',
				{
					after: true,
					before: false
				}
			],
			'indent': ['error', 'tab'],
			'jsx-quotes': ['error'],
			'key-spacing': ['error'],
			'keyword-spacing': ['error'],
			'lines-around-comment': ['error'],
			'lines-between-class-members': [
				'error',
				{
					enforce: [
						{
							blankLine: 'never',
							next: 'field',
							prev: 'field'
						},
						{
							blankLine: 'always',
							next: 'method',
							prev: 'method'
						}
					]
				}
			],
			'max-len': [
				'error',
				{
					code: 120,
					tabWidth: 2
				}
			],
			'max-statements-per-line': ['error'],
			'multiline-ternary': ['error'],
			'new-parens': ['error'],
			'newline-per-chained-call': [
				'error',
				{
					ignoreChainWithDepth: 1
				}
			],
			'no-extra-parens': ['error'],
			'no-multi-spaces': ['error'],
			'no-multiple-empty-lines': [
				'error',
				{
					max: 2,
					maxBOF: 1
				}
			],
			'no-tabs': [
				'error',
				{
					allowIndentationTabs: true
				}
			],
			'no-trailing-spaces': ['error'],
			'no-whitespace-before-property': ['error'],
			'nonblock-statement-body-position': ['error', 'below'],
			'object-curly-newline': ['error'],
			'object-curly-spacing': ['error', 'always'],
			'object-property-newline': ['error'],
			'operator-linebreak': ['error', 'before'],
			'padded-blocks': ['error', 'never'],
			'padding-line-between-statements': [
				'error',
				{
					blankLine: 'always',
					next: [
						'multiline-block-like',
						'return',
						'throw'
					],
					prev: ['*']
				}
			],
			'quotes': [
				'error',
				'single',
				{
					allowTemplateLiterals: true,
					avoidEscape: true
				}
			],
			'rest-spread-spacing': ['error'],
			'semi': [
				'error',
				'never',
				{
					beforeStatementContinuationChars: 'never'
				}
			],
			'space-before-function-paren': [
				'error',
				{
					anonymous: 'always',
					asyncArrow: 'always',
					named: 'never'
				}
			],
			'space-in-parens': ['error'],
			'space-infix-ops': [
				'error',
				{
					int32Hint: true
				}
			],
			'space-unary-ops': [
				'error',
				{
					nonwords: false,
					words: true
				}
			],
			'switch-colon-spacing': ['error'],
			'template-curly-spacing': ['error'],
			'template-tag-spacing': ['error', 'always'],
			'unicode-bom': ['error'],
			'wrap-iife': ['error', 'outside'],
			'wrap-regex': ['error'],
			'yield-star-spacing': ['error']
		}
	},
	{
		files: ['**/*.ts'],
		ignores: ['**/*.spec.ts'],
		languageOptions: {
			globals: {
				...globals.browser
			},
			parser: typeScriptParser,
			parserOptions: {
				ecmaVersion: 2024,
				project: ['./tsconfig.json'],
				sourceType: 'module'
			}
		},
		plugins: {
			'@angular-eslint': angularPlugin,
			'@typescript-eslint': typeScriptPlugin,
			'import': importPlugin
		},
		rules: {
			...importPlugin.configs.recommended.rules,
			...javaScriptPlugin.configs.recommended.rules,
			...typeScriptPlugin.configs['recommended-requiring-type-checking'].rules,
			...typeScriptPlugin.configs['stylistic-type-checked'].rules,
			...angularPlugin.configs.recommended.rules,

			// eslint/js rules – possible problems
			'constructor-super': ['off'],
			'getter-return': ['off'],
			'no-const-assign': ['off'],
			'no-dupe-args': ['off'],
			'no-dupe-class-members': ['off'],
			'no-dupe-keys': ['off'],
			'no-func-assign': ['off'],
			'no-new-symbol': ['off'],
			'no-obj-calls': ['off'],
			'no-setter-return': ['off'],
			'no-this-before-super': ['off'],
			'no-unreachable': ['off'],
			'no-unsafe-negation': ['off'],

			// import rules
			'import/no-unresolved': ['error'],

			// @typescript-eslint rules
			'@typescript-eslint/consistent-type-definitions': ['error', 'type'],
			'@typescript-eslint/no-unused-vars': ['error'],

			// @angular-eslint rules
			'@angular-eslint/component-selector': [
				'error',
				{
					type: 'element',

					prefix: 'dcorg',
					style: 'kebab-case'
				}
			],
			'@angular-eslint/directive-selector': [
				'error',
				{
					type: 'attribute',

					prefix: 'dcorg',
					style: 'camelCase'
				}
			]
		},
		settings: {
			...importPlugin.configs.typescript.settings,
			'import/resolver': {
				typescript: {
					extensions: allExtensions
				}
			}
		}
	},
	{
		files: ['**/*.spec.ts'],
		languageOptions: {
			globals: {
				...globals.jest
			}
		}
	}
]
