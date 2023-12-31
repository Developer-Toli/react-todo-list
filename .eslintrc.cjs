module.exports = {
  root: true,
  env: { browser: true, es2022: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/strict',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.eslint.json'],
    tsconfigRootDir: __dirname,
    warnOnUnsupportedTypeScriptVersion: true
  },
  plugins: ['@typescript-eslint', 'react-refresh', 'react', 'jsx-a11y', 'react-hooks'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    // 'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
    'react-refresh/only-export-components': 'off',
    '@typescript-eslint/strict-boolean-expressions': [
      2,
      {
        allowString: false,
        allowNumber: false
      }
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    // '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false
      }
    ],
    /* 
    Eslint common
    */
    'template-curly-spacing': ['error', 'never'], // `${}`
    'object-curly-spacing': [
      // { }
      'error',
      'always',
      {
        arraysInObjects: true,
        objectsInObjects: true
      }
    ],
    'array-bracket-spacing': ['error', 'never'], // []
    'computed-property-spacing': [
      'error',
      'never',
      {
        enforceForClassMembers: true
      }
    ],
    'no-console': ['warn', { allow: ['error'] }],
    // function myFunc(myvar) {}
    'no-unused-vars': ['error', { argsIgnorePattern: '^_', caughtErrors: 'all', caughtErrorsIgnorePattern: '^ignore' }],
    'no-undef': 'error',
    'prefer-const': ['error', { destructuring: 'all', ignoreReadBeforeAssign: true }],
    curly: ['error', 'all'],
    semi: ['error', 'always'],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'quote-props': ['error', 'as-needed'],
    'jsx-quotes': ['error', 'prefer-double'],
    'max-len': [
      'warn',
      {
        code: 150,
        tabWidth: 2
      }
    ],
    'no-trailing-spaces': [
      'error',
      {
        ignoreComments: true,
        skipBlankLines: true
      }
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ['ConditionalExpression'],
        MemberExpression: 1
      }
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: true,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true
      }
    ]
  }
};

