import Form from 'components/Form';
import { resultValidProps } from 'components/Form/Form';
import { ValidateType } from 'helpers/validateForm';

import './style.scss';

export class FormSingIn extends Form {
  static componentName = 'FormSingIn';
  resultValid({ valid }: resultValidProps) {
    if (valid) {
      window.location.href = '/massenger';
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
      {{{Button type="submit" label="sing in"}}}
    </form>
    `;
  }
}
