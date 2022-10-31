import { Block } from "../../utils/Block";

export class EditProfile extends Block {
  constructor() {
    super();
  }
  render() {
    return `
        {{#ProfileLayout}}
          <div class="df-column-center">
            {{{ Avatar}}}
            {{{ FormInput placeholder='Email' name="email" value="sims0204@gmail.com"}}}
            {{{ FormInput placeholder='Login' name="login" value="antoshka"}}}
            {{{ FormInput placeholder='First name' name="first_name" value="Anton"}}}
            {{{ FormInput placeholder='Second name' name="second_name" value="Abaltusov"}}}
            {{{ FormInput placeholder='Nickname' name="display_name" value="antoshka"}}}
            {{{ FormInput placeholder='Phone' name="phone" type="phone" value="89127551280"}}}
            {{{ Button label='Save'}}}
          </div>
        {{/ProfileLayout}}
        `;
  }
}
//
