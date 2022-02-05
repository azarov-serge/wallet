module.exports = {
    rootDir: './src',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.js?$': 'babel-jest',
    },
    testRegex: '.test.(ts?||tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
    },
};
