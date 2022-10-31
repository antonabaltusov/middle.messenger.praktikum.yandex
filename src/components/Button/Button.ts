import { Block } from "../../utils/Block";
import "./button-submit.scss";

interface ButtonProps {
  label: string;
  type?: string;
  onClick?: () => void;
  link?: string;
}

export class Button extends Block {
  constructor({ label, link, onClick, type = "button" }: ButtonProps) {
    super({
      label,
      link,
      type,
      events: {
        click: onClick,
      },
    });
  }
  render() {
    return `
    <{{#if link}}a href="{{link}}"{{else}}button{{/if}}
      type={{type}}
      class="button-submit border-radius blue-border"
    >
      {{label}}
      <div data-layout=1></div>
      </{{#if link}}a{{else}}button{{/if}}>
    `;
  }
}
