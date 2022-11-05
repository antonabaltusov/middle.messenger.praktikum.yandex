import Form from 'components/Form';
import { ValidateType } from 'helpers/validateForm';

import './style.scss';

export class FormMassenger extends Form {
  static componentName = 'FormMassenger';
  resultValid() {}
  render() {
    return `
    <form class="form-massenger">
      {{{FormInput 
        name="${ValidateType.Message}" 
        placeholder="massege" 
        type="text"
        ref="${ValidateType.Message}"
      }}}
      {{#Button type="submit"}}&#8593;{{/Button}}
    </form>
    `;
  }
}
