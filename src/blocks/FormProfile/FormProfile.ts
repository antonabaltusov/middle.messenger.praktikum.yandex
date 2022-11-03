import Form from 'components/Form';
import { resultValidProps } from 'components/Form/Form';
import { ValidateType } from 'helpers/validateForm';

import './style.scss';

export class FormProfile extends Form {
  resultValid({ valid }: resultValidProps) {
    if (valid) {
      window.location.href = '/profile';
    }
  }

  render() {
    return `
    <form class="df-column-center">
      {{{FormInput 
        name="${ValidateType.Email}" 
        value="sims0204@gmail.com"
        placeholder="Email" 
        type="email"
        label="email"
        ref="${ValidateType.Email}"
      }}}
      {{{FormInput 
        name="${ValidateType.Login}" 
        value="antoshka"
        placeholder="Login" 
        type="text"
        label="login"
        ref="${ValidateType.Login}"
      }}}
      {{{FormInput 
        name="${ValidateType.FirstName}" 
        value="Anton"
        placeholder="First name" 
        type="text"
        label="First name"
        ref="${ValidateType.FirstName}"
      }}}
      {{{FormInput 
        name="${ValidateType.SecondName}" 
        value="Abaltusov"
        placeholder="Second name" 
        type="text"
        label="Second name"
        ref="${ValidateType.SecondName}"
      }}}
      {{{FormInput 
        name="display_name" 
        value="antoshka"
        placeholder="Nickname" 
        type="text"
        label="Second name"
        ref="display_name"
      }}}
      {{{FormInput 
        name="${ValidateType.Phone}" 
        value="89127551280"
        placeholder="Phone" 
        type="text"
        label="phone"
        ref="${ValidateType.Phone}"
      }}}
      {{{Button type="submit" label="Save"}}}
    </form>
    `;
  }
}
