import { Block } from "utils/Block";
import "./style.scss";

interface InputErrorProps {
  text?: string;
}

export class InputError extends Block {
  constructor(props: InputErrorProps) {
    super(props);
  }
  render() {
    return `
    <div class="input-error">{{#if text}}{{text}}{{/if}}</div>
    `;
  }
}
