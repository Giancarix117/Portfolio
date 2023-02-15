# Giancarlo Betti's Ultimate Portfolio

This project is my amazing portfolio. It has a bit of information about me. So feel free to browse it at your pleasure.

## Installing dependencies

1. Open a terminal and navigate to the root directory of your project.
2. Install Node.js and NPM if you haven't already.
3. Run the following command to install the required dependencies:

` npm install @heroicons/react@2.0.15 @testing-library/jest-dom@5.16.5 @testing-library/react@13.4.0 @testing-library/user-event@13.5.0 eslint@8.33.0 eslint-config-prettier@8.6.0 eslint-plugin-prettier@4.2.1 eslint-plugin-react@7.32.2 husky@8.0.3 lint-staged@13.1.1 prettier@2.8.3 prettier-eslint@15.0.1 react@18.2.0 react-dom@18.2.0 react-scripts@5.0.1 web-vitals@2.1.4`

## Getting started

Clone down this repository and run npm install followed by npm start in the project directory. The website can be accessed by opening http://localhost:3000 in a browser.

## Tools utilized

"@heroicons/react": "^2.0.15": This is a library that provides a collection of icons that can be used in your React applications.

"@testing-library/jest-dom": "^5.16.5": This library provides custom Jest matchers that allow you to test DOM elements more easily and intuitively.

"@testing-library/react": "^13.4.0": This is a library that provides testing utilities for React applications. It provides a set of methods that allow you to write tests that simulate user behavior and check that the expected behavior occurs.

"@testing-library/user-event": "^13.5.0": This library provides a set of methods that simulate user events, such as clicks, key presses, and typing. It is used in conjunction with "@testing-library/react" to write tests that simulate user behavior.

"eslint": "^8.33.0": This is a tool that provides static code analysis to help identify potential issues in your code. It provides rules that can be configured to match your project's coding standards.

"eslint-config-prettier": "^8.6.0": This is a configuration that disables ESLint rules that conflict with Prettier, a code formatter. It ensures that your code formatting is consistent and avoids conflicts with Prettier.

"eslint-plugin-prettier": "^4.2.1": This is a plugin that runs Prettier as an ESLint rule. It helps to ensure that your code is formatted consistently.

"eslint-plugin-react": "^7.32.2": This is an ESLint plugin that provides additional rules for React applications. It helps to ensure that your React code follows best practices and avoids common errors.

"husky": "^8.0.3": This is a tool that allows you to add Git hooks to your project. Git hooks are scripts that run automatically when certain Git events occur, such as committing code. "husky" can be used to enforce code quality checks, such as running ESLint, before code is committed.

"lint-staged": "^13.1.1": This is a tool that allows you to run scripts on files that are staged for committing. It is often used in conjunction with "husky" to enforce code quality checks on only the files that are being committed.

"prettier": "2.8.3": This is a code formatter that ensures consistent code formatting across your project. It can be configured to match your project's coding standards.

"prettier-eslint": "^15.0.1": This is a tool that runs Prettier and ESLint together to ensure that your code is formatted consistently and follows coding standards.

"react": "^18.2.0": This is a library for building user interfaces in JavaScript. It provides a set of reusable components and tools for building web applications.

"react-dom": "^18.2.0": This is a package that provides the DOM-specific methods that are used by React. It allows you to render React components to the browser DOM.

"react-scripts": "5.0.1": This is a set of scripts and configuration files that are used to build and run React applications. It provides a development server, build scripts, and other tools that are useful for developing React applications.

"web-vitals": "^2.1.4": This is a library that provides tools for measuring and reporting website performance metrics. It can be used to identify performance issues and optimize your website for better performance.

## Scripts being run

"start": "react-scripts start": This script starts the development server for the React application.

"build": "react-scripts build": This script builds the production version of the React application.

"test": "react-scripts test": This script runs the test suite for the React application. It uses react-scripts to execute the test runner and run all test files that match the pattern \*.test.js. This script is usually used during development and continuous integration to ensure that the application behaves correctly and that changes do not introduce regressions.

"eject": "react-scripts eject": This script "ejects" the React application from the default configuration provided by Create React App, allowing you to customize the build process.

"format": "prettier --write .": This script formats the code in the src and test directories using Prettier.

"lint": "eslint src": This script lints the code in the src directory using ESLint.

"lint:fix": "npm run lint -- --fix": This script fixes linting errors in the code in the src directory using ESLint.

"prettier": "npx prettier src test --check": This script checks if the code in the src and test directories is formatted correctly using Prettier.

"prettier:fix": "npm run prettier -- --write": This script fixes formatting errors in the code in the src and test directories using Prettier.

"prepare": "husky install": This script installs Husky, which is a tool for adding Git hooks to the project.

"eslint:github-action": "eslint src/": This script is used for linting the code in the src directory as part of a GitHub Actions workflow.

"storybook": "start-storybook -p 6006 -s public": This script starts the Storybook development server, which is a tool for building UI components in isolation.

"build-storybook": "build-storybook -s public": This script builds the production version of the Storybook application.

## Githooks

This project runs Eslint whenever there is a push.

## GitHub Actions

These are the GitHub actions step by step:
name: Run ESLint on Push Requests: This is the name of the workflow. It will appear in the GitHub Actions tab of the repository.

on: - push: This specifies that the workflow should run whenever a push event occurs in the repository.

jobs: This specifies the job to be performed by the workflow.

build: This is the name of the job.

name: Run ESLint: This is the name of the step.

runs-on: ubuntu-latest: This specifies the operating system on which the job will run. In this case, it is Ubuntu.

steps: This is a list of steps that the job will execute.

uses: actions/checkout@v3: This step checks out the repository so that the workflow can access its files.

uses: actions/setup-node@v3: This step installs Node.js on the machine running the workflow.

with: node-version: 12: This step specifies that version 12 of Node.js should be installed.

run: npm i: This step installs the project's dependencies.

uses: eslint/github-action@v0: This step runs ESLint using the eslint/github-action package. This package is a GitHub Action that allows you to run ESLint on your code as part of a workflow. It will analyze the code and report any issues it finds as annotations on the relevant lines of code in the pull request. If any issues are found, the workflow will fail and the pull request will not be merged until the issues have been resolved.
