const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const dom = new JSDOM('<main id="root" class="root"></main>', {
  url: 'https://localhost:1234',
  storageQuota: 10000000,
});
const { window } = dom;
const { localStorage } = window;

global.localStorage = localStorage;

global.localStorage.setItem('new', 'value');
console.log(global.localStorage.getItem('new'));
