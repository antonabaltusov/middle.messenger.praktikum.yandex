import Form from "components/Form";
import { ValidateType } from "helpers/validateForm";

import "./style.scss";


export class FormSingIn extends Form {

  render() {
    return `
    <form class="df-column-center">
      {{{FormInput 
        name="${ValidateType.Login}" 
        placeholder="login" 
        type="text"
        label="login"
        ref="login"
      }}}
      {{{FormInput 
        name="${ValidateType.Password}" 
        placeholder="password" 
        type="password"
        label="password"
        ref="password"
      }}}
      {{#each error}}
        <p class="form-error">{{this}}</p>
      {{/each}}
      {{{Button type="submit" label="sing in"}}}
    </form>
    `;
  }
}
