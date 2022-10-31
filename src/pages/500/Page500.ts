import { Block } from "../../utils/Block";

export class Page500 extends Block {
  constructor() {
    super();
  }
  render() {
    return `
        {{#Body}}
          {{{ Error codeError='500' message="Мы уже фиксим"}}}
        {{/Body}}
        `;
  }
}
