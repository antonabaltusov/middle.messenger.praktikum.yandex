import { userAPI } from 'api/user-api';
import './style.scss';
import Form from 'components/Form';
import { resultValidProps } from 'components/Form/Form';
import { ValidateType } from 'helpers/validateForm';
import { apiHasError } from 'utils/apiHasError';
import { Screens } from 'utils/screenList';
import { Router } from 'utils/Router';
const router = new Router('#app');

export class FormPassword extends Form {
  static componentName = 'FormPassword';
  async resultValid({
    valid,
    inputs: { password_old, password, password_again },
  }: resultValidProps) {
    if (valid) {
      if (password_old === password) {
        this.refs.ErrorForm?.setProps({
          text: 'совпадают старый и новый пароль',
        });
        return;
      }
      if (password !== password_again) {
        this.refs.ErrorForm?.setProps({ text: 'не совпадают новые пароли' });
        return;
      }
      try {
        const data = {
          oldPassword: password_old,
          newPassword: password,
        };
        const response = await userAPI.newPassword(data);

        if (apiHasError(response)) {
          this.refs.ErrorForm?.setProps({ text: response.reason });
          return;
        }
        this.refs.ErrorForm?.setProps({ text: '' });

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
      name="${ValidateType.PasswordOld}" 
      placeholder="Old password" 
      type="password"
      label="Old password"
      ref="${ValidateType.PasswordOld}"
    }}}
    {{{FormInput 
      name="${ValidateType.Password}" 
      placeholder="Password" 
      type="password"
      label="Password"
      ref="${ValidateType.Password}"
    }}}
      {{{FormInput 
        name="${ValidateType.PasswordAgain}" 
        placeholder="Password again" 
        type="password"
        label="Password again"
        ref="${ValidateType.PasswordAgain}"
      }}}
      {{{InputError ref="ErrorForm"}}}
      {{{Button type="submit" label="Save"}}}
    </form>
    `;
  }
}
