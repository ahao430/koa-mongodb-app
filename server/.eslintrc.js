module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    node: true
  },
  'extends': [
    'standard'
  ],
  rules: {
    "promise/param-names": 0,
    "comma-dangle": [2, "only-multiline"],
    "no-unused-vars": 0,
    "no-control-regex": 0,
    "no-debugger": 0,
    "no-new": 0,
    'semi': [2, 'always'],
    'comma-dangle': [2, 'only-multiline'],
    'camelcase': 0,
    'new-cap': 0,
  },
}
