import { Block } from "utils/Block";
import "./style.scss";

interface InputProps {
  onFocus?: () => void;
  onBlur?: () => void;
  disabled?: boolean;
  value?: string;
  type?: string;
  name: string;
  placeholder?: string;
}

export class Input extends Block {
  constructor({onFocus,onBlur, ...props }: InputProps) {
    super({...props, events: {focus: onFocus, blur: onBlur}});
  }

  render() {
    return `
      <input class="input border-radius blue-border" 
        {{#if disabled}} disabled {{/if}} 
        value="{{value}}" 
        placeholder='{{placeholder}}' 
        type="{{type}}"
        name="{{name}}">
    `;
  }
}
