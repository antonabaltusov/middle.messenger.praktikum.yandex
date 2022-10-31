import { Block } from "../../utils/Block";

export class Page404 extends Block {
  constructor() {
    super();
  }
  render() {
    return `
        {{#Body}}
          {{{ Error codeError='404' message="тут пусто"}}}
        {{/Body}}
        `;
  }
}
