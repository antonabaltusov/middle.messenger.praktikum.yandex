import { userService } from 'services/userService';
import { Block } from 'utils/Block';
import { Screens } from 'utils/screenList';

export class Profile extends Block<{}> {
  constructor(props: Record<string, any>) {
    super({ logout: userService.logout, ...props });
  }
  render() {
    return `
          {{#ProfileLayout}}
            <div class="df-column-center">
              {{{ Avatar img=user.avatar link="${Screens.NewAvatar}"}}}
              {{{ FormInput
                 placeholder='Email' 
                 label="Email" 
                 name="email" 
                 value=user.email 
                 disabled="true"
              }}}
              {{{ FormInput 
                placeholder='Login' 
                label="Login" 
                name="login" 
                value=user.login
                disabled="true"
              }}}
              {{{ FormInput
                 placeholder='First name' 
                 label="First name" 
                 name="first_name" 
                 value=user.firstName
                 disabled="true"}}}
              {{{ FormInput
                placeholder='Second name' 
                label="Second name" 
                name="second_name" 
                value=user.secondName
                disabled="true"}}}
              {{{ FormInput
                 placeholder='Nickname' 
                 label="Nickname" 
                 name="display_name" 
                 value=user.displayName
                 disabled="true"
              }}}
              {{{ FormInput
                placeholder='Phone' 
                label="Phone" 
                name="phone" 
                type="phone" 
                value=user.phone
                disabled="true"}}}
              {{{ Button label='Edit profile' link="${Screens.EditProfile}"}}}
              <br>
              {{{ Button label='Change password' link="${Screens.ChangePassword}"}}}
              <br>
              {{{ Link text='logout' link="../sing-in" onClick=logout}}}
            </div>
            {{/ProfileLayout}}
        `;
  }
}
