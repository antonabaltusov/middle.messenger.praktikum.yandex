import { Block } from 'utils/Block';
export class Page500 extends Block<{}> {
  constructor() {
    super();
  }
  render() {
    return `
        {{#Body}}
          {{{ ErrorComponent codeError='500' message="Мы уже фиксим"}}}
        {{/Body}}
        `;
  }
}
