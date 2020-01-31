module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1"
    },
    "transform": {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
    },
    transformIgnorePatterns: ['node_modules/(?!(ag-grid-vue)/)'],
   }