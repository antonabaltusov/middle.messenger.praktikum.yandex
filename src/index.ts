import { Router } from 'utils/Router';
import { initRouter } from 'services/initRouter';
import * as components from 'components';
import * as blocks from 'blocks';
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
