module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@pages/(.*)': '<rootDir>/src/pages/$1',
    '@views/(.*)': '<rootDir>/src/views/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@services/(.*)': '<rootDir>/src/services/$1',
    '@interfaces/(.*)': '<rootDir>/src/interfaces/$1',
    '@redux/(.*)': '<rootDir>/src/redux/$1',
    '@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@icons/(.*)': '<rootDir>/src/icons/$1',
    '@test/(.*)': '<rootDir>/test/$1',
  },
};
