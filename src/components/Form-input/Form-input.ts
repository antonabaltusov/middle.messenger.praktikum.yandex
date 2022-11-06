import Block from 'utils/Block';
import { validateInput, ValidateType } from 'helpers/validateForm';
import './style.scss';

type IncomingProps = {
  disabled?: boolean;
  value?: string;
  type?: string;
  name: string;
  placeholder?: string;
  label?: string;
};

type Props = IncomingProps & {
  onFocus: () => void;
  onBlur: () => void;
};
export class FormInput extends Block<Props> {
  static componentName = 'FormInput';
  touched: boolean;
  constructor(props: IncomingProps) {
    super({
      ...props,
      onFocus: () => {
        if (this.touched) {
          this.validInput();
        }
        this.touched = true;
      },
      onBlur: () => {
        this.validInput();
      },
    });
    if (!props.value) {
      this.touched = false;
    } else {
      this.touched = true;
    }
  }
  validInput(): { name: string; value: string; valid: boolean } {
    const inputEl = this.refs.Input.getContent() as HTMLInputElement;
    const value = inputEl.value.trim();
    inputEl.value = value;
    const errors = validateInput({ type: inputEl.name as ValidateType, value });
    this.refs.Error?.setProps({ text: errors });
    if (errors.length) {
      this.element?.classList.add('error');
    } else {
      this.element?.classList.remove('error');
    }
    return { name: inputEl.name, value, valid: !errors.length };
  }
  render() {
    return `
    <div class="form-input__wrapper">
    {{{Input 
      onFocus=onFocus
      onBlur=onBlur
      disabled=disabled
      value=value
      placeholder=placeholder
      type=type
      name=name
      ref="Input"
      }}}
      <label class="label">{{label}}</label>
      {{{InputError ref="Error"}}}
    </div>
    `;
  }
}
