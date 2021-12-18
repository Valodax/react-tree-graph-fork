module.exports = {
	'env': {
		'browser': true
	},
	'extends': ['eslint:recommended', 'plugin:react/recommended'],
	'parser': '@babel/eslint-parser',
	'parserOptions': {
		'ecmaVersion': 2021,
		'ecmaFeatures': {
			'jsx': true
		},
		'sourceType': 'module'
	},
	'plugins': [
		'react'
	],
	'rules': {
		'array-bracket-newline': ['error', 'consistent'],
		'array-bracket-spacing': ['error', 'never'],
		'array-element-newline': ['error', 'consistent'],
		'arrow-body-style': ['error', 'as-needed'],
		'arrow-parens': ['error', 'as-needed'],
		'arrow-spacing': 'error',
		'block-spacing': 'error',
		'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
		'camelcase': 'error',
		'comma-dangle': ['error', 'never'],
		'comma-spacing': ['error', { 'before': false, 'after': true }],
		'comma-style': ['error', 'last'],
		'computed-property-spacing': ['error', 'never'],
		'curly': 'error',
		'dot-location': ['error', 'property'],
		'eol-last': ['error', 'never'],
		'func-call-spacing': ['error', 'never'],
		'func-names': ['error', 'always'],
		'func-style': ['error', 'declaration'],
		'function-paren-newline': ['error', 'consistent'],
		'indent': [
			'error',
			'tab',
			{ 'SwitchCase': 1 }
		],
		'jsx-quotes': ['error', 'prefer-double'],
		'key-spacing': ['error', { 'mode': 'strict' }],
		'keyword-spacing': 'error',
		'lines-between-class-members': ['error', 'always'],
		'no-array-constructor': 'error',
		'no-bitwise': 'error',
		'no-duplicate-imports': 'error',
		'no-lonely-if': 'error',
		'no-multi-assign': 'error',
		'no-multiple-empty-lines': 'error',
		'no-multi-spaces': ['error', { 'exceptions': { 'Property': false } }],
		'no-trailing-spaces': 'error',
		'no-unneeded-ternary': ['error', { 'defaultAssignment': false }],
		'no-useless-computed-key': 'error',
		'no-useless-constructor': 'error',
		'no-useless-rename': 'error',
		'no-var': 'error',
		'no-whitespace-before-property': 'error',
		'object-curly-newline': ['error', { 'consistent': true }],
		'object-curly-spacing': ['error', 'always'],
		'operator-linebreak': ['error', 'before'],
		'padded-blocks': ['error', 'never'],
		'prefer-arrow-callback': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'quotes': ['error', 'single'],
		'react/default-props-match-prop-types': ['error', { 'allowRequiredDefaults': true }],
		'react/jsx-boolean-value': 'error',
		'react/jsx-closing-bracket-location': ['error', 'after-props'],
		'react/jsx-closing-tag-location': 'error',
		'react/jsx-curly-spacing': 'error',
		'react/jsx-equals-spacing': 'error',
		'react/jsx-first-prop-new-line': ['error', 'multiline'],
		'react/jsx-handler-names': 'error',
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-no-bind': 'error',
		'react/jsx-curly-brace-presence': 'error',
		'react/jsx-pascal-case': 'error',
		'react/jsx-props-no-multi-spaces': 'error',
		'react/jsx-tag-spacing': ['error', { 'beforeSelfClosing': 'never', 'beforeClosing': 'never' }],
		'react/no-access-state-in-setstate': 'error',
		'react/no-typos': 'error',
		'react/no-unused-prop-types': 'error',
		'react/no-unused-state': 'error',
		'react/prefer-es6-class': 'error',
		'react/self-closing-comp': 'error',
		'react/sort-comp': 'error',
		'react/style-prop-object': 'error',
		'rest-spread-spacing': ['error', 'never'],
		'semi': ['error', 'always'],
		'semi-spacing': 'error',
		'semi-style': ['error', 'last'],
		'space-before-blocks': 'error',
		'space-before-function-paren': ['error', 'never'],
		'space-in-parens': ['error', 'never'],
		'space-infix-ops': 'error',
		'switch-colon-spacing': 'error',
		'template-curly-spacing': 'error'
	},
	'settings': {
		'react': {
			'version': '18'
		}
	}
};