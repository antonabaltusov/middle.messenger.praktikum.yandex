import { Block } from "../../utils/Block";

export class ChangePassword extends Block {
  constructor() {
    super();
  }
  render() {
    return `
        {{#ProfileLayout}}
          <div class="df-column-center">
            {{{ Avatar}}}
            {{{ FormInput placeholder='Old password' name="oldPassword" }}}
            {{{ FormInput placeholder='New password' name="newPassword" }}}
            {{{ FormInput placeholder='New password again' name="newPasswordAgain"}}}
            {{{ Button label='Save'}}}
          </div>
        {{/ProfileLayout}}
        `;
  }
}
//
