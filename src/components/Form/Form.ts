import FormInput from "components/Form-input";
import { validateForm, ValidateType } from "../../helpers/validateForm";
import { Block } from "../../utils/Block";
import "./style.scss";

// type FormProps = {
//   inputsEl?: HTMLInputElement[];
// }

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
    })
  }
  getInputsValue(): { [name: string]: string } | void {
    const result: { [name: string]: string } = {};
    this.element?.querySelectorAll("input").forEach((input) => {
      if (input.value) {
        result[input.name] = input.value;
      }
    });
    if (Object.keys(result).length > 0) {
      return result;
    }
  }
  validateForm() {
    let validForm = true;
    const inputs: { [name: string]: string } = {};
    Object.entries(this.refs).forEach(([key, input]) => {
      if (input instanceof FormInput) {
        const {value, valid, name} = input.validInput();
        validForm = valid;
        inputs[name] = value;
      }
    })
    console.log(validForm);
    console.log(inputs);
    
  }
}
