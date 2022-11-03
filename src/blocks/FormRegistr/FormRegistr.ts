import Form from 'components/Form';
import { resultValidProps } from 'components/Form/Form';
import { ValidateType } from 'helpers/validateForm';

import './style.scss';

export class FormRegistr extends Form {
  resultValid({ valid }: resultValidProps) {
    if (valid) {
      window.location.href = '/sing-in';
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
        ref="${ValidateType.Email}"
      }}}
      {{{FormInput 
        name="${ValidateType.Login}" 
        placeholder="Login" 
        type="text"
        label="login"
        ref="${ValidateType.Login}"
      }}}
      {{{FormInput 
        name="${ValidateType.FirstName}" 
        placeholder="First name" 
        type="text"
        label="First name"
        ref="${ValidateType.FirstName}"
      }}}
      {{{FormInput 
        name="${ValidateType.SecondName}" 
        placeholder="Second name" 
        type="text"
        label="Second name"
        ref="${ValidateType.SecondName}"
      }}}
      {{{FormInput 
        name="${ValidateType.Phone}" 
        placeholder="Phone" 
        type="text"
        label="phone"
        ref="${ValidateType.Phone}"
      }}}
      {{{FormInput 
        name="${ValidateType.Password}" 
        placeholder="Password" 
        type="password"
        label="password"
        ref="${ValidateType.Password}"
      }}}
      {{{FormInput 
        name="${ValidateType.PasswordAgain}" 
        placeholder="Password again" 
        type="password"
        label="password"
        ref="${ValidateType.PasswordAgain}"
      }}}
      {{{Button type="submit" label="Create user"}}}
    </form>
    `;
  }
}
