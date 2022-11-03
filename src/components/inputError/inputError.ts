import Block from 'utils/Block';
import './style.scss';

type InputErrorProps = {
  text?: string;
};

export class InputError extends Block<InputErrorProps> {
  constructor(props: InputErrorProps) {
    super(props);
  }
  render() {
    return `
    <div class="input-error">{{#if text}}{{text}}{{/if}}</div>
    `;
  }
}
