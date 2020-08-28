module.exports = {
    "preset": "jest-preset-angular",
    "setupFilesAfterEnv": ["<rootDir>/src/setup-jest.ts"],
    "testPathIgnorePatterns": ['<rootDir>/src/test.ts'],
    globals: {
      'ts-jest': {
        tsConfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.html$',
        astTransformers: {
          before: [
            'jest-preset-angular/build/InlineFilesTransformer',
            'jest-preset-angular/build/StripStylesTransformer',
          ],
        },
      },
    },
    transform: {
      '^.+\\.(ts|js|html)$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'html', 'js', 'json'],
    moduleNameMapper: {
      '^src/(.*)$': '<rootDir>/src/$1',
      '^app/(.*)$': '<rootDir>/src/app/$1',
      '^assets/(.*)$': '<rootDir>/src/assets/$1',
      '^environments/(.*)$': '<rootDir>/src/environments/$1',
    },
    transformIgnorePatterns: ['node_modules/(?!countup.js)', '<rootDir>/src/test.ts'],
    snapshotSerializers: [
      'jest-preset-angular/build/AngularSnapshotSerializer.js',
      'jest-preset-angular/build/HTMLCommentSerializer.js',
    ],
  };