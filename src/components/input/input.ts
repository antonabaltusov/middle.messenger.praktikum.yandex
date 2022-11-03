import Block from 'utils/Block';
import './style.scss';

type IncomingProps = {
  onFocus?: () => void;
  onBlur?: () => void;
  disabled?: boolean;
  value?: string;
  type?: string;
  name: string;
  placeholder?: string;
};
type Props = {
  disabled?: boolean;
  value?: string;
  type?: string;
  name: string;
  placeholder?: string;
  events: {
    focus?: () => void;
    blur?: () => void;
  };
};

export class Input extends Block<Props> {
  constructor({ onFocus, onBlur, ...props }: IncomingProps) {
    super({ ...props, events: { focus: onFocus, blur: onBlur } });
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
