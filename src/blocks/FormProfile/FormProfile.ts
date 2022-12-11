import Form from 'components/Form';
import { resultValidProps } from 'components/Form/Form';
import { ValidateType } from 'helpers/validateForm';
import { apiHasError } from 'utils/apiHasError';

import './style.scss';
import { Screens } from 'utils/screenList';
import { userAPI } from 'api/user-api';
import { transformUser } from 'utils/apiTransformers';
import { addUserData } from 'utils/Store/Action';
import { Router } from 'utils/Router';
const router = new Router('#app');
export class FormProfile extends Form {
  static componentName = 'FormProfile';
  async resultValid({ valid, inputs }: resultValidProps) {
    if (valid) {
      try {
        const data = {
          first_name: inputs.first_name,
          second_name: inputs.second_name,
          display_name: inputs.display_name,
          login: inputs.login,
          email: inputs.email,
          phone: inputs.phone,
        };
        const response = await userAPI.editUser(data);

        if (apiHasError(response)) {
          this.refs.ErrorForm?.setProps({ text: response.reason });
          return;
        }
        this.refs.ErrorForm?.setProps({ text: '' });

        addUserData(transformUser(response));
        router.go(Screens.Profile);
      } catch (err) {
        console.error(err);
      }
    }
  }

  render() {
    return `
    <form class="df-column-center">
      {{{FormInput 
        name="${ValidateType.Email}" 
        value=user.email
        placeholder="Email" 
        type="email"
        label="email"
        ref="${ValidateType.Email}"
      }}}
      {{{FormInput 
        name="${ValidateType.Login}" 
        value=user.login
        placeholder="Login" 
        type="text"
        label="login"
        ref="${ValidateType.Login}"
      }}}
      {{{FormInput 
        name="${ValidateType.FirstName}" 
        value=user.firstName
        placeholder="First name" 
        type="text"
        label="First name"
        ref="${ValidateType.FirstName}"
      }}}
      {{{FormInput 
        name="${ValidateType.SecondName}" 
        value=user.secondName
        placeholder="Second name" 
        type="text"
        label="Second name"
        ref="${ValidateType.SecondName}"
      }}}
      {{{FormInput 
        name="display_name" 
        value=user.displayName
        placeholder="Nickname" 
        type="text"
        label="Second name"
        ref="display_name"
      }}}
      {{{FormInput 
        name="${ValidateType.Phone}" 
        value=user.phone
        placeholder="Phone" 
        type="text"
        label="phone"
        ref="${ValidateType.Phone}"
      }}}
      {{{InputError ref="ErrorForm"}}}
      {{{Button type="submit" label="Save"}}}
    </form>
    `;
  }
}
