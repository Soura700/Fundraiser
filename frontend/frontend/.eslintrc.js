module.exports = {
    root: true, // Indicates that this is the root ESLint configuration file
    env: {
      browser: true, // Enables browser globals like window and document
      node: true, // Enables Node.js global variables and Node.js scoping
      es6: true, // Enables ES6 features
    },
    extends: [
      'eslint:recommended', // Uses the recommended rules from ESLint
      'plugin:react/recommended', // Uses the recommended rules from the eslint-plugin-react
    ],
    parserOptions: {
      ecmaVersion: 2021, // Specifies the ECMAScript version
      sourceType: 'module', // Allows using import/export statements
      ecmaFeatures: {
        jsx: true, // Allows parsing JSX
      },
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
    rules: {
      // Custom rules can be added here
      'css-modules/no-undef-class': 'error',
    },
  };
  