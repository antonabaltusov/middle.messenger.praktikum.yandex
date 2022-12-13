import { Router } from 'utils/Router/index';
import { initRouter } from 'services/initRouter';
import * as components from 'components/index';
import * as blocks from 'blocks/index';
import registerComponent from 'utils/registerComponent';
import { initApp } from 'services/initApp';

Object.values(components).forEach((Component: any) => {
  registerComponent(Component);
});
Object.values(blocks).forEach((Component: any) => {
  registerComponent(Component);
});

document.addEventListener('DOMContentLoaded', () => {
  const router = new Router('#app');
  initRouter(router);
  initApp();
});
