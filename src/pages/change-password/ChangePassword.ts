import Block from 'utils/Block';

export class ChangePassword extends Block {
  constructor() {
    super();
  }
  render() {
    return `
        {{#ProfileLayout}}
          <div class="df-column-center">
            {{{ Avatar}}}
            {{{FormPassword}}}
          </div>
        {{/ProfileLayout}}
        `;
  }
}
//
