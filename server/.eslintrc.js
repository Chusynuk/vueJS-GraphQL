module.exports = {
  'root': true,
  'env': {'browser': true, 'es6': true, 'node': true},
  'extends': [
    'eslint:recommended',
    'plugin:vue/recommended',
  ],
  'parserOptions': {'ecmaVersion': 2018, 'sourceType': 'module'},
  'rules': {
    'no-console': ['error', {allow: ['warn']}],
    // allow console and debugger in development
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'indent': ['error', 'tab'],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'space-before-function-paren': [
      'error',
      {'anonymous': 'always', 'named': 'always', 'asyncArrow': 'always'}
    ],
    'skipBlankLines': false,
    'no-multiple-empty-lines': [1, {'max': 1, 'maxBOF': 1, 'maxEOF': 1}],
    'array-bracket-spacing': ['error', 'always'],
    'no-trailing-spaces': 'error',
    'no-multi-spaces': 'error',
    'no-extra-semi': 'error',
    'no-extra-parens': [
      'error', 'all', {'returnAssign': false, 'nestedBinaryExpressions': false}
    ],
  }
};