# NgKeralamMeetupDemo Add Jest Demo 01

1. Install

   ```yarn add -D jest jest-preset-angular @types/jest
      # or
      npm install -D jest jest-preset-angular @types/jest```

2. Comment out the code in test.ts and import the jest-preset

3. Create jest.config.js file.

4. tsconfig.spec.json changes
   1. Remove the jasmine from types config
   2. Remove src/tests.ts from files array
5. Run the tests
    You will see Can't resolve all parameters for components
6. tsconfig.spec.json changes
    1. emitDecoratorMetadata: true
7. Go through the settings of jest-preset
    1. moduleNameMapper
    2. transformIgnorePatterns
8. Allow JS files in your TS compilerOptions: tsconfig.spec.json changes
    allowJs: true
    transformIgnorePatterns: add the lib
9. mock the library
10. If You are using Angular version <= 7. Your jest.config.js settings will be different.
    Switch to relevant branch in jest-preset and copy those settings.
11. Talk about kentcdodds testing strategies. 
12. Write tests for dashboard tests
13. Migrate tests for book-detail tests
