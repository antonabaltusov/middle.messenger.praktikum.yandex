import { Block } from './Block';
const expect = require('chai').expect;

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
const block = new Button({ label: 'text', type: 'submit' });

describe('utils/Block', () => {
  it('метод getContent возвращает правильное содержимое', () => {
    expect(block.getContent().innerHTML).to.have.string('text');
  });
  it('метод getContent возвращает HTMLElement', () => {
    expect(block.getContent() instanceof HTMLElement).to.equal(true);
  });
  it('метод setProps меняет пропсы', () => {
    block.setProps({ label: 'newText', type: 'submit' });
    expect(block.getContent().innerHTML).to.have.string('newText');
  });
  it('метод getContent возвращает Node', () => {
    expect(block.getContent().nodeName === 'BUTTON').to.equal(true);
  });
  it('метод show применяет стиль display = block', () => {
    block.show();
    expect(block.getContent().style.display === 'block').to.equal(true);
  });
});
