module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'ignorePatterns': ['*env*', 'dist'],
  'plugins': [
    'react',
  ],
  'rules': {
    'require-jsdoc': 'off',
  },
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
};
