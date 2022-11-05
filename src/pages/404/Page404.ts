import Block from 'utils/Block';

export class Page404 extends Block<{}> {
  constructor() {
    super();
  }
  render() {
    return `
        {{#Body}}
          {{{ ErrorComponent codeError='404' message="тут пусто"}}}
        {{/Body}}
        `;
  }
}
