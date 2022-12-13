import 'mock-local-storage';
require.extensions['.scss'] = function () {
  return null;
};
// const jsdom = require('jsdom');
// const { JSDOM } = jsdom;
// const { window } = new JSDOM(``, {
//   url: 'http://localhost',
// });
// jsdom.reconfigure({ url: 'https://example.com/' });

// // new FinalizationRegistry(() => {});
// const { window } = new JSDOM('<main id="root" class="root"></main>', {
//   url: 'http://localhost:1234',
// });

// const { document } = window;
// global.window = window;
// XMLHttpRequest = window.XMLHttpRequest;
// global.document = document;
global.window = {};
window.localStorage = global.localStorage;
// Object.defineProperty(window, 'localStorage', {
//   value: global.localStorage,
//   configurable: true,
//   enumerable: true,
//   writable: true,
// });
