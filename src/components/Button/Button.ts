import Block from 'utils/Block';
import './style.scss';

export type IncomingProps = {
  label: string;
  type?: string;
  onClick?: () => void;
  link?: string;
};
export type Props = {
  label: string;
  type?: string;
  link?: string;
  events: {
    click?: () => void;
  };
};

export class Button extends Block<Props> {
  constructor(
    {
      label,
      link,
      onClick,
      type = 'button',
    }: IncomingProps = {} as IncomingProps
  ) {
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
