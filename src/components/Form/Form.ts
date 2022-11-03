import FormInput from 'components/Form-input';
import Block from 'utils/Block';
import './style.scss';

export type resultValidProps = {
  inputs: { [name: string]: string };
  valid: boolean;
};
export abstract class Form extends Block {
  constructor() {
    super();
    this.setProps({
      events: {
        submit: (e: Event) => {
          e.preventDefault();
          this.validateForm();
        },
      },
    });
  }
  validateForm() {
    let validForm = true;
    const inputs: { [name: string]: string } = {};
    Object.entries(this.refs).forEach(([, input]) => {
      if (input instanceof FormInput) {
        const { value, valid, name } = input.validInput();
        if (!valid) {
          validForm = valid;
        }
        inputs[name] = value;
      }
    });
    this.resultValid({ inputs, valid: validForm });
  }
  abstract resultValid(param: resultValidProps): void;
}
