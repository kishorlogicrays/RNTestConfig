module.exports = {
  preset: 'react-native',
  resetMocks: false,
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  transformIgnorePatterns: [
    '/node_modules/(?!(@react-native|react-native)/).*/',
  ],
  setupFilesAfterEnv: ['@testing-library/react-native/extend-expect'],
  moduleNameMapper: {
    '.+\\.(css|style|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'babel-jest',
  },
};

/**
 * @jest configuration : If you create jest.config.js file then you add above code in this file
 * otherwise you can't make it any file for configuration so you can directly add below code in Package.json file
 * middle of script and dependency
 */

// "jest": {
//   "preset": "react-native",
//   "resetMocks": false,
//   "setupFiles": [
//     "./node_modules/react-native-gesture-handler/jestSetup.js"
//   ],
//   "transformIgnorePatterns": [
//     "/node_modules/(?!(@react-native|react-native)/).*/"
//   ],
//   "setupFilesAfterEnv": [
//     "@testing-library/react-native/extend-expect"
//   ],
//   "moduleNameMapper": {
//     ".+\\.(css|style|less|sass|scss|png|jpg|ttf|woff|woff2)$": "babel-jest"
//   }
// },
