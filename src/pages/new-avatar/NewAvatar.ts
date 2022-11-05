import Block from 'utils/Block';

export class NewAvatar extends Block<{}> {
  constructor() {
    super();
  }
  render() {
    return `
        {{#ProfileLayout}}
          <div class="df-column-center modal">
            {{{ Avatar }}}
            {{{ Button label='Save'}}}
          </div>
        {{/ProfileLayout}}
        `;
  }
}
//
