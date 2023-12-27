module.exports = {
  root: true,
  extends: ['awsm'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/display-name': 'off',
  },
  ignorePatterns: ['env.d.ts'],
};
