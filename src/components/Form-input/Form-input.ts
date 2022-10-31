import { Block } from "utils/Block";
import { validateInput, ValidateType } from "helpers/validateForm";
import "./style.scss";

interface FormInputProps {
  disabled?: boolean;
  value?: string;
  type?: string;
  name: string;
  placeholder?: string;
  label?: string;
}

export class FormInput extends Block {
  touched: boolean;
  constructor(props: FormInputProps) {
    
    super({
      ...props, 
      onFocus : () => {
        if (this.touched) {
          this.validInput()
        }
        this.touched = true;
      },
      onBlur : () => {
        this.validInput()
      }
    });
    if (!props.value) {
      this.touched = false;
    } else {
      this.touched = true;
    }
  }
  validInput(): {name: string, value: string, valid: boolean } {
    
    const inputEl =  this.refs.Input.getContent() as HTMLInputElement;
    const value = inputEl.value.trim()
    inputEl.value = value;
    const errors = validateInput(
      { type: inputEl.name as ValidateType, value },
    );
    
    
    this.refs.Error.setProps({ text: errors})
    return {name: inputEl.name, value, valid: !errors.length};
  };
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
      <label>{{label}}</label>
      {{{InputError ref="Error"}}}
    </div>
    `;
  }
}
