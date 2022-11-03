import Block from 'utils/Block';

export class EditProfile extends Block {
  constructor() {
    super();
  }
  render() {
    return `
        {{#ProfileLayout}}
          <div class="df-column-center">
            {{{ Avatar}}}
            {{{FormProfile}}}
          </div>
        {{/ProfileLayout}}
        `;
  }
}
//
