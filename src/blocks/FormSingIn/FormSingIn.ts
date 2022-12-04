import { authAPI } from 'api/login-api';
import Form from 'components/Form';
import { resultValidProps } from 'components/Form/Form';
import { ValidateType } from 'helpers/validateForm';
import { apiHasError } from 'utils/apiHasError';

import './style.scss';
import { Router } from 'utils/Router';
import { Screens } from 'utils/screenList';
import { addUserData } from 'utils/Store/Action';
import { transformUser } from 'utils/apiTransformers';

const router = new Router('#app');
export class FormSingIn extends Form {
  static componentName = 'FormSingIn';
  async resultValid({ valid, inputs }: resultValidProps) {
    if (valid) {
      try {
        const data = {
          login: inputs.login,
          password: inputs.password,
        };
        const response = await authAPI.login(data);

        if (apiHasError(response)) {
          this.refs.ErrorForm?.setProps({ text: response.reason });
          return;
        }
        this.refs.ErrorForm?.setProps({ text: '' });
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
        name="${ValidateType.Login}" 
        placeholder="login" 
        type="text"
        label="login"
        ref="${ValidateType.Login}"
      }}}
      {{{FormInput 
        name="${ValidateType.Password}" 
        placeholder="password" 
        type="password"
        label="password"
        ref="${ValidateType.Password}"
      }}}
      {{{InputError ref="ErrorForm"}}}
      {{{Button type="submit" label="sing in"}}}
    </form>
    `;
  }
}
