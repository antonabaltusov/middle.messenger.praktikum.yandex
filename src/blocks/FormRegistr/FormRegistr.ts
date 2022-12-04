import { authAPI } from 'api/login-api';
import Form from 'components/Form';
import { resultValidProps } from 'components/Form/Form';
import { ValidateType } from 'helpers/validateForm';
import { apiHasError } from 'utils/apiHasError';

import './style.scss';
import { Router } from 'utils/Router';
import { Screens } from 'utils/screenList';
import { transformUser } from 'utils/apiTransformers';
import { addUserData } from 'utils/Store/Action';
const router = new Router('#app');
export class FormRegistr extends Form {
  static componentName = 'FormRegistr';
  async resultValid({ valid, inputs }: resultValidProps) {
    if (valid) {
      try {
        const data = {
          first_name: inputs.first_name,
          second_name: inputs.second_name,
          login: inputs.login,
          email: inputs.email,
          password: inputs.password,
          phone: inputs.phone,
        };
        const response = await authAPI.registr(data);
        
        if (apiHasError(response)) {
          this.refs.ErrorForm?.setProps({ text: response.reason });
          return;
        }

        const user = await authAPI.me();
        addUserData(transformUser(user));
        
        router.go(Screens.Massenger);
      } catch (err) {
        console.error(err);
      } finally {
      }
    }
  }

  render() {
    return `
    <form class="df-column-center">
      {{{FormInput 
        name="${ValidateType.Email}" 
        placeholder="Email" 
        type="email"
        label="email"
        name="${ValidateType.Email}"
        ref="${ValidateType.Email}"
      }}}
      {{{FormInput 
        name="${ValidateType.Login}" 
        placeholder="Login" 
        type="text"
        label="login"
        name="${ValidateType.Login}"
        ref="${ValidateType.Login}"
      }}}
      {{{FormInput 
        name="${ValidateType.FirstName}" 
        placeholder="First name" 
        type="text"
        label="First name"
        ref="${ValidateType.FirstName}"
        name="${ValidateType.FirstName}"
      }}}
      {{{FormInput 
        name="${ValidateType.SecondName}" 
        placeholder="Second name" 
        type="text"
        label="Second name"
        name="${ValidateType.SecondName}"
        ref="${ValidateType.SecondName}"
      }}}
      {{{FormInput 
        name="${ValidateType.Phone}" 
        placeholder="Phone" 
        type="text"
        label="phone"
        name="${ValidateType.Phone}"
        ref="${ValidateType.Phone}"
      }}}
      {{{FormInput 
        name="${ValidateType.Password}" 
        placeholder="Password" 
        type="password"
        label="password"
        name="${ValidateType.Password}"
        ref="${ValidateType.Password}"
      }}}
      {{{FormInput 
        name="${ValidateType.PasswordAgain}" 
        placeholder="Password again" 
        type="password"
        label="password"
        name="${ValidateType.PasswordAgain}"
        ref="${ValidateType.PasswordAgain}"
      }}}
      {{{InputError ref="ErrorForm"}}}
      {{{Button type="submit" label="Create user"}}}
    </form>
    `;
  }
}
