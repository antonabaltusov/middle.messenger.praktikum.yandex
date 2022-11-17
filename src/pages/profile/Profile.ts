import { Block } from 'utils/Block';

export class Profile extends Block<{}> {
  constructor() {
    super();
  }
  render() {
    return `
          {{#ProfileLayout}}
            <div class="df-column-center">
              {{{ Avatar img="" link="../new-avatar"}}}
              {{{ FormInput
                 placeholder='Email' 
                 label="Email" 
                 name="email" 
                 value="sims0204@gmail.com" 
                 disabled="true"
              }}}
              {{{ FormInput 
                placeholder='Login' 
                label="Login" 
                name="login" 
                value="antoshka" 
                disabled="true"
              }}}
              {{{ FormInput
                 placeholder='First name' 
                 label="First name" 
                 name="first_name" 
                 value="Anton" 
                 disabled="true"}}}
              {{{ FormInput
                placeholder='Second name' 
                label="Second name" 
                name="second_name" 
                value="Abaltusov" 
                disabled="true"}}}
              {{{ FormInput
                 placeholder='Nickname' 
                 label="Nickname" 
                 name="display_name" 
                 value="antoshka" 
                 disabled="true"
              }}}
              {{{ FormInput
                placeholder='Phone' 
                label="Phone" 
                name="phone" 
                type="phone" 
                value="89127551280" 
                disabled="true"}}}
              {{{ Button label='Edit profile' link="../edit-profile"}}}
              <br>
              {{{ Button label='Change password' link="../change-password"}}}
              <br>
              {{{ Link text='logout' link="../sing-in"}}}
            </div>
            {{/ProfileLayout}}
        `;
  }
}
