import { FormInput } from 'components';
import Form from 'components/Form';
import { resultValidProps } from 'components/Form/Form';
import { ValidateType } from 'helpers/validateForm';
import store from 'utils/Store';
const socket = store.getState().socket;
import './style.scss';

export class FormMassenger extends Form {
  static componentName = 'FormMassenger';
  async resultValid({ valid, inputs }: resultValidProps) {
    if (valid) {
      const socket = store.getState().socket;
      socket?.send(
        JSON.stringify({
          content: inputs.message,
          type: 'message',
        })
      );
      console.log(this.refs);

      const input = this.refs[ValidateType.Message] as unknown as FormInput;
      input.setProps({ value: '' });
      input.focus();
    }
  }

  render() {
    console.log(this.props);
    return `
    <form class="form-massenger {{#if socket}}{{else}}disabled{{/if}}">
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
