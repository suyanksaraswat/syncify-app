const dependenciesToBeTranspiled = [
  'react-native',
  'react-navigation',
  '@react-navigation',
  'react-native-screens',
  '@react-native-community',
  'react-native-gesture-handler',
  'react-native-iphone-x-helper',
].join('|');

module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
  testPathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: [`node_modules/(?!(${dependenciesToBeTranspiled})/)`],
  setupFiles: ['./jest.setup.js'],
  testMatch: ['**/*.spec.(js|jsx)'],
};
