module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb', 'prettier' , 'prettier/react',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react', 'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn' ,
      { extensions: ['.jsx' , '.js']}
    ],
    'import/prefer-default-export': 'off',
    'no-console': ['error' , { allow: ["tron"] }], //alerta do reactotron
    'no-param-reassign': 'off', //nao deixa usar o parametro direto
    "operator-assignment": ["error", "never"], // eu gosto do formato antigo x = x +1;
  },
};
