import { Block } from 'utils/Block';
import './style.scss';
import { Router } from 'utils/Router';

const router = new Router('#app');

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
  static componentName = 'Button';
  constructor({ label, link, onClick, type = 'button' }: IncomingProps) {
    super({
      label,
      type,
      events: {
        click: () => {
          if (onClick) {
            onClick();
          } else if (link) {
            router.go(link);
          }
        },
      },
    });
  }
  render() {
    return `
    <button
      type={{type}}
      class="button-submit border-radius blue-border"
    >
      {{label}}
      <div data-layout=1></div>
      </button>
    `;
  }
}
