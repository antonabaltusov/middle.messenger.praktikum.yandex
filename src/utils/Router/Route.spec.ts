import { expect } from 'chai';
import { Block } from '../Block';
import Route from './Route';
// routes.forEach((route) => {
//   router.use(Screens.Registration, getScreenComponent(Screens.Registration), route.props);
// });
// router.start();

describe('utils/Route', () => {
  class ChatItem extends Block<Record<string, any>> {
    render() {
      return `
      <div class="chat"></div>
      `;
    }
    componentBeforeUnmount() {
      window.document.querySelector('.chat')?.classList.add('done');
    }
  }
  const route = new Route('/chat', ChatItem, { rootQuery: 'body' });
  it('должен отрендерить блок', () => {
    route.render();
    expect(!!window.document.querySelector('.chat')).to.be.equal(true);
  });
  it('должен отрендерить блок при условии правильного переданного пути', () => {
    window.document.querySelector('.chat')?.remove();
    expect(!!window.document.querySelector('.chat')).to.be.equal(false);
    route.navigate('/chat');
    expect(!!window.document.querySelector('.chat')).to.be.equal(true);
  });
  it('должен вызвать componentBeforeUnmount', () => {
    route.leave();
    expect(
      window.document.querySelector('.chat')?.classList.contains('done')
    ).to.be.equal(true);
  });
  it('должен вызвать true при правильном переданном пути', () => {
    expect(route.match('/chat')).to.be.equal(true);
  });
  it('должен вызвать false при ложном переданном пути', () => {
    expect(route.match('/false')).to.be.equal(false);
  });
});
