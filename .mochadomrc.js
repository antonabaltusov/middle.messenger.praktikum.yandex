module.exports = {
  // The test files that should be loaded into the JSDOM environment.
  // Defaults to include every test file, example below shows matching a subset
  // of test files.
  //files: "**/*.browser.test.js",

  // The initial HTML to load into the document,
  // below is the default value.
  html: '<!DOCTYPE html><html><head></head><body></body></html>',

  // Everything else is forwarded to JSDOM.
  // See: https://github.com/jsdom/jsdom#customizing-jsdom
  url: 'http://localhost:8080/chat',
};
