import { expect } from 'chai';
import { Block } from '../Block';
import Router from './Router';
// routes.forEach((route) => {
//   router.use(Screens.Registration, getScreenComponent(Screens.Registration), route.props);
// });
// router.start();

describe('utils/Router', () => {
  it('должен отрендерить по текущему адресу', () => {
    class ChatItem extends Block<Record<string, any>> {
      render() {
        return `
        <div class="chat"></div>
        `;
      }
    }
    const router = new Router('body');
    router.use('/chat', ChatItem, {}).start();
    expect(!!window.document.querySelector('body > *')).to.be.equal(true);
  });
  it('should push rout to routs', () => {
    const block = new Block();
    const router = new Router('body');
    router.routes = [];
    router.use('/sign-up', block, {});
    expect(router.routes.length === 1).to.be.equal(true);
  });
  it('должен вернуть роут по адресу', () => {
    const router = new Router('body');
    const route = router.getRoute('/sign-up');
    expect(route?.path).to.be.equal('/sign-up');
  });
  it('должен вернуть роут по адресу', () => {
    const router = new Router('body');
    const route = router.getRoute('/sign-up');
    expect(route?.path).to.be.equal('/sign-up');
  });
  it('должен отрендерить роут по адресу', () => {
    class Button extends Block<Record<string, any>> {
      render() {
        return `
        <button
          type={{type}}
          class="button-submit border-radius blue-border"
        >
          {{label}}
          <div data-layout=1></div>
          </button>
        `;
      }
    }
    const router = new Router('body');
    router.routes = [];
    router.use('/sign-up', Button, {});
    router._onRoute('/sign-up');
    expect(
      window.document.querySelector('button')?.nodeName === 'BUTTON'
    ).to.be.equal(true);
  });
  it('должен отрендерить по текущему адресу', () => {
    window.document.querySelector('body')?.innerHTML;
    const router = new Router('body');
    window.location.pathname = 'sign-up';
    router.start();
    //expect(this).to.be.equal('/sign-up');
  });
  it('должен отрендерить новую страницу по текущему адресу а старую стереть', () => {
    class input extends Block<Record<string, any>> {
      render() {
        return `
        <input/>
        `;
      }
    }
    const router = new Router('body');
    router.use('/input', input, {});
    router.go('/input');
    expect(
      window.document.querySelector('button')?.nodeName === 'BUTTON'
    ).to.be.equal(false);
    expect(
      window.document.querySelector('input')?.nodeName === 'INPUT'
    ).to.be.equal(true);
  });
});
