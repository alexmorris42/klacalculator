# KL&A Calculator

Basic calculator using Angular 2 and Redux, using the MVC design pattern for separation of concerns. Started with angular-quickstart and added redux.

## Prerequisites

Node.js and npm are essential. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

## Install npm packages

Install the npm packages described in the `package.json` and verify that it works:

```bash
npm install
npm start
```

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.

### Unit Tests
TypeScript unit-tests are in the `app` folder. Their filenames end in `.spec`.

Run them with `npm test-once` -- there should be 21 succeeding tests that cover the interesting business logic within the reducers.

That command first compiles the application, then simultaneously re-compiles and runs the karma test-runner. Test-runner output appears in the terminal window.
