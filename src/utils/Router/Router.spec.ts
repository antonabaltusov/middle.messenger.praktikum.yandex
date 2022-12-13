const expect = require('chai').expect;
import Router from './Router';
import { getScreenComponent, Screens } from '../screenList';
import { renderDOM } from '../renderDom';
const router = new Router('#app');
// routes.forEach((route) => {
//   router.use(Screens.Registration, getScreenComponent(Screens.Registration), route.props);
// });
// router.start();

describe('utils/Router', () => {
  it('should push rout to routs', () => {
    router.use(
      Screens.Registration,
      getScreenComponent(Screens.Registration),
      {}
    );
    expect(router.routes).to.include.members([Screens.Registration]);
  });
});
