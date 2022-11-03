import Form from 'components/Form';
import { resultValidProps } from 'components/Form/Form';
import { ValidateType } from 'helpers/validateForm';

import './style.scss';

export class FormPassword extends Form {
  resultValid({
    valid,
    inputs: { password, password_again },
  }: resultValidProps) {
    if (valid) {
      if (password === password_again) {
        window.location.href = '/profile';
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
      {{{Button type="submit" label="Save"}}}
    </form>
    `;
  }
}
